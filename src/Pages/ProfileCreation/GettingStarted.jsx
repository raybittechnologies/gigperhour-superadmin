import Star from "../../components/star";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import NavBarr from "../../components/NavBarr";
import { useDarkMode } from "../../context/DarkMode.jsx";
export default function GettingStarted() {
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  return (
    <div
      className={`min-h-screen  ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      <NavBarr />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start  md:px-[60px] px-[30px] relative mt-4 gap-8">
        {/* Center Star */}
        <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
          <Star />
        </div>

        {/* Left Section */}
        <div className="w-full space-y-6 order-2 lg:order-1">
          <h3 className="text-[20px] md:text-[24px] font-inter font-[400] lg:block hidden">
            Hey Basit, are you ready for your next big opportunity?
          </h3>

          {/* Steps */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 pb-1 pt-1">
              <img
                src={
                  darkMode ? "src/assets/user-dark.svg" : "src/assets/user.svg"
                }
                className="w-[30px] h-[30px]"
                alt="User Icon"
              />
              <p className="text-[15px] font-inter font-[400] pl-[20px]">
                Answer a few quick questions to begin building your profile.
              </p>
            </div>
            <hr className="border-t border-black border-opacity-100 h-[0.5px]" />
            <div className="flex items-start gap-3 pb-1 pt-1">
              <img
                src={
                  darkMode
                    ? "src/assets/edit-dark.svg"
                    : "src/assets/edit-02.svg"
                }
                className="w-[30px] h-[30px]"
                alt="Edit Icon"
              />
              <p className="text-[15px] font-inter font-[400] pl-[20px]">
                Apply for open roles or showcase your services for clients to
                purchase.
              </p>
            </div>
            <hr className="border-t border-black border-opacity-100 h-[0.5px]" />
            <div className="flex items-start gap-3 pb-1 pt-1">
              <img
                src={
                  darkMode
                    ? "src/assets/dollar-dark.svg"
                    : "src/assets/dollar-02.svg"
                }
                className="w-[30px] h-[30px]"
                alt="Dollar Icon"
              />
              <p className="text-[15px] font-inter font-[400] pl-[20px]">
                Get paid securely with confidence, knowing we’re here to support
                you.
              </p>
            </div>
            <hr className="border-t border-black border-opacity-100 h-[0.5px]" />
          </div>

          {/* Continue Button */}
          <div className="flex flex-col sm:flex-row sm:pb-0 pb-7">
            <button
              className="bg-[#E66D3D] text-white h-[50px] pt-[12px] pb-[15px] px-[50px] rounded-lg font-semibold w-full sm:w-[172px]"
              onClick={() => navigate("/answerOne")}
            >
              Continue
            </button>
            <p
              className={`text-[14px] sm:text-[15px] mt-3 sm:mt-[2px] sm:ml-[20px] ${
                darkMode ? "text-white" : "text-[#555555]"
              }`}
            >
              It takes just 5-10 minutes, and you can edit it anytime. Your
              progress is saved automatically.
            </p>
          </div>
        </div>

        {/* Right Section (Profile Card) */}
        <h3 className="text-[20px] md:text-[24px] font-inter font-[400] lg:hidden block">
          Hey Basit, are you ready for your next big opportunity?
        </h3>
        <div className="relative w-full lg:max-w-[519px]  px-32 lg:px-0 order-1 lg:order-2 z-[20] [@media(max-width:630px)]:px-0">
          <div
            className={`relative bg-opacity-30 backdrop-blur-[10px] shadow-xl p-6 rounded-lg w-full h-auto text-center
        ${
          darkMode
            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.3)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.3)_100%)]"
        }`}
          >
            <div className="flex justify-center mb-[25px]">
              <img
                src="src/assets/profileImage.jpeg"
                alt="Image"
                className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full object-cover"
              />
            </div>
            <h2 className="text-[24px] md:text-[34px] font-inter text-white font-[500] mt-4">
              Basit Bashir
            </h2>
            <h4 className="text-[15px] md:text-[17px] font-inter text-white font-[500]">
              Product Designer & UI/UX Designer
            </h4>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-2 text-white text-sm">
              <span className="flex items-center gap-1">
                <img
                  src="src/assets/starIcon.svg"
                  className="w-[20px] h-[20px]"
                  alt="Star Icon"
                />
                5.0
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="src/assets/dollar-icon.svg"
                  className="w-[20px] h-[20px]"
                  alt="Dollar Icon"
                />
                15.00/hr
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="src/assets/briefcase-07.svg"
                  className="w-[20px] h-[20px]"
                  alt="Briefcase Icon"
                />
                21 jobs
              </span>
            </div>

            <h4 className="mt-4 text-[13px] md:text-[15px] font-inter font-[400] text-white">
              “Product X has allowed me to increase my rates and recognize my
              true value. I love the feeling of helping a diverse range of
              clients.”
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
