
// export default RandomPage;


// import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const RandomPage = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark");
//   };

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-3 bg-white h-[60px] shadow-md">
       {/* Logo */}
       <div className="text-3xl font-bold tracking-wider text-black dark:text-white">
        <img src="src/assets/Logo-Text.svg"  className="relative  left-[50px] " alt="Logo" />
       </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-4">
       {/* <button
          onClick={toggleDarkMode}
          className={`relative flex items-center w-16 h-7 bg-black dark:bg-gray-600 rounded-full p-1 transition`}
        >
          <FaSun className="text-white text-sm ml-2" />
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition ${
              darkMode ? "translate-x-8" : "translate-x-0"
            }`}
          />
          <FaMoon className="text-white text-sm ml-6" />
        </button> */}
        <img src="src/assets/Toggle-mode.svg" className="w-[110px] h-[40px] top-[10px] left-[1088px]"/>

        {/* User Icon */}
        <img src="src/assets/user.svg" className="w-[48px] h-[48px] left-[75px]"/>
      </div>
    </nav>

      {/* Content */}
      <div className="pr-[75px] pl-[75px] mx-auto py-10 ">
        {/* Title */}
        <h2 className="font-inter font-medium text-[24px] leading-[43.57px] tracking-[1%] text-black top-[110px] absolute">
          Do you have any previous relevant experience in this field?
        </h2>
        <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0%] w-[932px] h-[48px] absolute top-[163px]  text-black ">
          Freelancers who showcase their work experience have a higher chance of
          landing jobs on our platform. You can still create a profile, but
          adding experience gives you an extra edge!
        </p>

        {/* Add Experience Section */}
        <div className="w-[440px] h-[187px] absolute top-[256px]  rounded-[8px] border-[1px] border-black border-dotted">
          <FaPlus className="text-orange-500 mr-2" />
          <span className="text-lg">Add Experience</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-10">
          <div className="w-full h-1 bg-gray-300">
            <div className="h-1 bg-orange-500 w-1/2"></div>
          </div>
          <div className="text-right text-sm text-gray-600 dark:text-gray-300 mt-1">5/10</div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="text-black dark:text-white font-semibold">Back</button>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-md font-semibold">
            Next, add your education
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomPage;




