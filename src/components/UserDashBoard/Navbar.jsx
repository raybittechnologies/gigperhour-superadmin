import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function NavBarUser({ changeMode }) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false); // Default to light mode
  const location = useLocation();

  const activeRoutes = [
    "/dashboard",
    "/proposalSuccess",
    "/ApplyJob",
    "/proposals",
    "/savedJobs",
    "/details",
    "/connects",
    "/applyJob",
    "/proposalSuccess",
    "/jobHourly",
    "/successHourly",
  ];
  const activeRoutesD = [
    "/activeContracts",
    "/contractHistory",
    "/hourlyWork",
    "/contractDetails",
  ];

  const isActive = activeRoutes.includes(location.pathname);

  const isActiveD = activeRoutesD.includes(location.pathname);
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

  return (
    <div className="relative z-50">
      {/* Fixed Navbar */}
      <nav className="flex justify-between items-center py-3 bg-white h-[60px] shadow-md fixed w-full">
        <div
          className="text-3xl font-bold tracking-wider text-black dark:text-white"
          onClick={() => navigate("/")}
        >
          <h3 className="text-[#000000] font-inter font-[400] pl-[120px]">
            Elevance
          </h3>
        </div>

        {/* Center Icons */}
        <div className="flex items-center gap-7">
          <Link to="/dashboard" className="relative">
            <img
              src={
                isActive
                  ? "src/assets/UserDashboard/briefcase-orange.svg"
                  : "src/assets/UserDashboard/Briefcase Icon.svg"
              }
              className={`cursor-pointer ${
                isActive ? "w-[35px] h-[35px]" : "w-[50px] h-[50px]"
              }`}
              alt="Briefcase Icon"
            />
            {isActive && (
              <div className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#E66D3D]"></div>
            )}
          </Link>

          <Link to="/activeContracts" className="relative">
            <img
              src={
                isActiveD
                  ? "src/assets/UserDashboard/safe-delivery-orange.svg"
                  : "src/assets/UserDashboard/Safe Delivery Icon.svg"
              }
              className={`cursor-pointer ${
                isActiveD ? "w-[35px] h-[35px]" : "w-[50px] h-[50px]"
              }`}
              alt="Briefcase Icon"
            />
            {isActiveD && (
              <div className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#E66D3D]"></div>
            )}
          </Link>
          <img
            src="src/assets/UserDashboard/Invoice Icon.svg"
            className="w-[50px] h-[50px] cursor-pointer"
            alt="Icon 3"
          />
          <img
            src="src/assets/UserDashboard/Message Edit Icon.svg"
            className="w-[50px] h-[50px] cursor-pointer"
            alt="Icon 4"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 pr-[120px] relative">
          <button onClick={handleDarkMode}>
            <img
              src={
                darkMode
                  ? "src/assets/darkMode.svg"
                  : "src/assets/lightIcon.svg"
              }
              className="w-[80px] h-[95px] mt-1"
              alt="Toggle Dark Mode"
            />
          </button>
          <div className="ml-3 mr-3">
            <img
              src="src/assets/UserDashboard/notification-02.svg"
              className="w-[22px] h-[22px] cursor-pointer"
              alt="Notification Icon"
            />
          </div>

          {/* User Icon with Dropdown */}
          <div className="relative">
            <Link to="/profile">
              <img
                src="src/assets/profileImage.jpeg"
                className="w-[32px] h-[32px] cursor-pointer rounded-full"
                alt="User Icon"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Content with Padding to Prevent Overlap */}
      <div className="pt-[60px]"></div>
    </div>
  );
}
