import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";

export default function NavBarr({ changeMode }) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false); // Default to light mode
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Effect to set darkMode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      const isDarkMode = savedMode === "true";
      setDarkMode(isDarkMode);
      changeMode(isDarkMode);
    } else {
      setDarkMode(false);
      changeMode(false);
    }
  }, [changeMode]);

  const handleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    changeMode(newMode);
    localStorage.setItem("darkMode", newMode); // Save the new mode to localStorage
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50">
      <nav className="flex justify-between items-center py-3 bg-white h-[60px] shadow-md">
        {/* Logo */}
        <div
          className="text-3xl font-bold tracking-wider text-black dark:text-white"
          onClick={() => navigate("/")}
        >
          <h3 className="text-[#000000] font-inter font-[400] pl-[120px]">
            Elevance
          </h3>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 pr-[120px] relative">
          {/* Dark Mode Toggle */}
          <button onClick={handleDarkMode}>
            <img
              src={
                darkMode
                  ? "src/assets/darkMode.svg"
                  : "src/assets/lightIcon.svg"
              }
              className="w-[70px] h-[70px]"
              alt="Toggle Dark Mode"
            />
          </button>

          {/* User Icon with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <img
              src="src/assets/user.svg"
              className="w-[32px] h-[32px] cursor-pointer"
              onClick={toggleDropdown}
              alt="User Icon"
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-[1000]">
                {/* User Icon at the Top */}
                <div className="flex justify-center pb-2">
                  <FaUser
                    className="w-[30px] h-[30px] text-black"
                    alt="User Icon"
                  />
                </div>
                <h2 className="px-4  text-black   text-[15pxpx] text-center">
                  Bisma Mushtaq
                </h2>

                <p className="px-4 pt-2 text-gray-500 text-sm text-center">
                  Freelancer
                </p>

                <button className="w-full text-center px-4 flex items-center gap-2   pt-1 text-gray-700 hover:bg-gray-200">
                  <CiSettings />
                  Close Account
                </button>
                <button className="block w-full text-center flex items-center gap-2 px-4 pt-1 text-gray-700 hover:bg-gray-200">
                  <AiOutlineLogout />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
