import { useState } from "react";
import { FaLinkedin, FaUpload } from "react-icons/fa";
import NavBarr from "../../components/NavBarr";
import Star from "../../components/star";
import { useNavigate } from "react-router-dom";
export default function AboutYourself() {
  const [progress] = useState(10);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      {/* Navbar */}
      <NavBarr changeMode={setDarkMode} />

      {/* Background Star Component */}
      <div className="absolute inset-0 flex justify-center items-center z-[0]  pointer-events-none">
        <Star />
      </div>

      {/* Main Content */}
      <div className="container max-w-screen-xl mx-auto px-[120px] pt-3 pb-3 relative z-[20]">
        {/* Header Section */}
        <div className="w-full mb-8 flex justify-between items-start">
          <div className="max-w-2xl flex-grow">
            <h3 className="text-[24px] font-[400] font-inter">
              How would you like to tell us about yourself?
            </h3>
            <p className="text-sm font-inter font-[400] mt-[10px]">
              We’d love to understand your education, experience, and skills.
              The fastest way is to import your information—you can review and
              edit it before your profile goes live.
            </p>
          </div>
          <span className="text-[18px] font-inter font-[500] ml-auto">
            1/10
          </span>
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15rem]">
          {/* Left Column: Options */}
          <div className="flex flex-col justify-center mt-[-50px] ">
            <button className="  rounded-[5px] flex items-center justify-center gap-3 bg-white text-black py-[8px]  mb-5 shadow-md">
              <FaLinkedin className="text-blue-600" /> Import from LinkedIn
            </button>
            <button className="flex items-center justify-center gap-3 bg-white text-black py-[8px] rounded-[5px] mb-5 shadow-md hover:bg-gray-200">
              <FaUpload className="text-gray-600" /> Upload your Resume
            </button>
            <button
              className=" bg-white text-black py-[8px] rounded-[5px] shadow-md hover:bg-gray-200"
              onClick={() => navigate("/categories")}
            >
              Fill out Manually (14 min)
            </button>
          </div>

          {/* Right Column: Testimonial */}
          <div className="flex justify-start items-center ">
            <div
              className={`shadow-[0px_4px_30px_0px_rgba(0,0,0,0.2)] 
              backdrop-blur-[10px] 
              ${
                darkMode
                  ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.3)_100%)]"
                  : "bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.3)_100%)]"
              } 
              rounded-[8px] p-4 text-center w-[335px]`}
            >
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="w-[80px] h-[80px] rounded-full mx-auto mb-2"
              />
              <h4 className=" text-[16px] font-inter font-[400] mt-8">
                Product X’s algorithm will suggest job posts tailored to your
                skills. Choose them wisely to ensure the best matches!
              </h4>
              <span className=" text-xs block mt-5">Product X Pro</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto mt-[4rem]">
          <div
            className={`h-1 rounded-full relative ${
              darkMode ? "bg-[#E9E9E9]" : "bg-[#555555]"
            }`}
          >
            <div
              className="h-full bg-[#F99F39] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            className=" w-[200px]"
            onClick={() => navigate("/answerThree")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
