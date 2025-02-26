import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBarr({ changeMode }) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false); // Default to light mode

  // Effect to set darkMode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      const isDarkMode = savedMode === "true";
      setDarkMode(isDarkMode);
      changeMode(isDarkMode);
    } else {
      // Default to light mode if no mode is saved
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
    <>
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

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4 right-[50px] relative">
          <button onClick={handleDarkMode}>
            <img
              src={
                darkMode
                  ? "src/assets/darkMode.svg"
                  : "src/assets/lightIcon.svg"
              }
              className="w-[110px] h-[40px] top-[10px] left-[1088px]"
              alt="Toggle Dark Mode"
            />
          </button>

          {/* User Icon */}
          <img
            src="src/assets/user.svg"
            className="w-[32px] h-[32px] left-[75px]"
          />
        </div>
      </nav>
    </>
  );
}
