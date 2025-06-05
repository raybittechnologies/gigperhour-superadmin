import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBarr from "../../components/NavBarr";
import { useDarkMode } from "../../context/DarkMode.jsx";

const ShimmerProfile = ({ darkMode }) => {
  const baseBg = darkMode ? "bg-gray-700" : "bg-gray-300";
  const highlightBg = darkMode ? "bg-gray-600" : "bg-gray-100";
  const containerBg = darkMode ? "bg-gray" : "bg-white";
  const borderColor = darkMode ? "border-gray-600" : "border-gray-300";

  // Gradient shimmer animation classes

  const shimmerGradient = `absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
    animate-[shimmer_1.5s_infinite] pointer-events-none`;

  return (
    <div className="space-y-6">
      {/* Header shimmer */}
      <div className={`h-6 rounded w-1/3 ${baseBg} relative overflow-hidden`}>
        <div className={shimmerGradient}></div>
      </div>

      {/* Main card shimmer */}
      <div
        className={`p-4 rounded-md ${containerBg} border ${borderColor} relative overflow-hidden`}
      >
        <div className={shimmerGradient}></div>
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div
              className={`h-5 w-40 rounded ${highlightBg} relative overflow-hidden`}
            >
              <div className={shimmerGradient}></div>
            </div>
            <div
              className={`h-4 w-80 rounded ${baseBg} relative overflow-hidden`}
            >
              <div className={shimmerGradient}></div>
            </div>
          </div>
          <div
            className={`w-[100px] h-[80px] rounded ${baseBg} relative overflow-hidden`}
          >
            <div className={shimmerGradient}></div>
          </div>
        </div>
        <div
          className={`mt-4 h-10 w-[200px] rounded ${highlightBg} relative overflow-hidden`}
        >
          <div className={shimmerGradient}></div>
        </div>
      </div>

      {/* Profile info shimmer */}
      <div
        className={`border rounded-md p-4 space-y-4 ${containerBg} ${borderColor} relative overflow-hidden`}
      >
        <div className={shimmerGradient}></div>
        <div className="flex gap-3 items-center">
          <div
            className={`w-12 h-12 rounded-full ${baseBg} relative overflow-hidden`}
          >
            <div className={shimmerGradient}></div>
          </div>
          <div className="space-y-2 flex-1">
            <div
              className={`h-4 w-32 rounded ${highlightBg} relative overflow-hidden`}
            >
              <div className={shimmerGradient}></div>
            </div>
            <div
              className={`h-3 w-48 rounded ${baseBg} relative overflow-hidden`}
            >
              <div className={shimmerGradient}></div>
            </div>
          </div>
        </div>
        <div
          className={`h-4 w-1/2 rounded ${highlightBg} relative overflow-hidden`}
        >
          <div className={shimmerGradient}></div>
        </div>
        <div className={`h-3 w-3/4 rounded ${baseBg} relative overflow-hidden`}>
          <div className={shimmerGradient}></div>
        </div>
        <div
          className={`mt-2 h-5 w-32 rounded ${highlightBg} relative overflow-hidden`}
        >
          <div className={shimmerGradient}></div>
        </div>
      </div>

      {/* Tailwind keyframes for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-[shimmer_1.5s_infinite] {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

const Review = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // Initialize profileData with dummy data
  const [profileData] = useState({
    name: "Basit Bashir",
    location: "Srinagar, JK",
    localTime: "12:17 PM Local Time",
    title: "Creative Designer",
    description:
      "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design. I specialize in crafting intuitive, engaging, and visually compelling digital experiences. With expertise in wireframing, prototyping, and usability testing, I ensure seamless interactions that enhance user satisfaction.",
    hourlyRate: "$10.00",
    skills: ["Java", "Javascript", "ReactJS", "Tailwind CSS"],
    workHistory: [
      {
        company: "Raybit Technologies",
        role: "UI UX Designer",
        duration: "Apr 2020 - May 2024",
        description:
          "As a Design Lead, I oversee the creative direction of projects, ensuring high-quality design solutions that align with brand and user needs.",
      },
    ],
    education: [
      {
        institution: "BGSBU",
        degree: "B.Tech CSE",
        duration: "Apr 2020 - May 2024",
        description:
          "As a Design Lead, I oversee the creative direction of projects, ensuring high-quality design solutions that align with brand and user needs.",
      },
    ],
    languages: ["English", "Hindi", "Kashmiri", "Urdu"],
  });

  useEffect(() => {
    // Simulate loading state for 2 seconds
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr />
      <div className="md:px-[60px] px-[20px] pt-3 pb-3 relative z-[20]">
        {loading ? (
          <ShimmerProfile darkMode={darkMode} />
        ) : (
          <>
            <h3 className="text-[24px] font-[400]  mb-[15px] font-inter">
              Preview Profile
            </h3>
            {/* Profile Review Alert */}
            <div className="bg-[#FFCBC6]  p-4 rounded-md">
              <div className="flex  justify-between">
                <div>
                  <h3 className="font-[400] font-inter text-[22px] text-black">
                    Looking good, {profileData.name}!
                  </h3>
                  <p className="text-[16px] font-[400] font-inter mt-[10px] text-black">
                    Review and refine your profile before submitting. You can
                    always make updates even after its live!
                  </p>
                </div>

                <img
                  src="src/assets/Notes 3D Model.svg"
                  className="w-[100px] h-[80px]"
                  alt="Notes 3D Model"
                />
              </div>

              {/* Submit Profile Button - Now Below */}
              <button className="bg-[#E66D3D] text-white px-4 py-2 rounded-[5px] mt-3 w-[200px]">
                Submit Profile
              </button>
            </div>

            {/* Profile Card */}
            <div
              className={`py-4 pr-6 pl-3 mt-6 rounded-md border-[0.5px] ${
                darkMode
                  ? "bg-transparent border-[#E9E9E9]"
                  : "bg-white border-[white]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <img
                      src="src/assets/profileImage.jpeg"
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <img
                      src="src/assets/edit.svg"
                      alt="Edit"
                      className="w-4 h-4 absolute bottom-0 right-0  rounded-full  shadow"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[17px]">
                      {profileData.name}
                    </h4>

                    <p
                      className={`text-[13px] font-[400]  flex items-center gap-2 ${
                        darkMode ? "text-[white]" : "text-[#333333]"
                      }`}
                    >
                      <img src="" className="" alt="" />
                      <img
                        src={
                          darkMode
                            ? "src/assets/location-dark.svg"
                            : "src/assets/location-add-02.svg"
                        }
                        alt="Location Icon"
                        className="w-[17px] h-[17px]"
                      />
                      {profileData.location}
                    </p>

                    <p
                      className={`text-[13px] font-[400]    ${
                        darkMode ? "text-[white]" : "text-[#333333]"
                      }`}
                    >
                      {profileData.localTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-inter font-[400] mt-4 flex items-center gap-2">
                {profileData.title}{" "}
                <img
                  src="src/assets/edit.svg"
                  className="w-[20px] h-[20px] ml-[10px]"
                />
              </h3>
              <p className="sm:text-[15px] text-[12px] font-[400] mt-2 flex gap-2">
                {profileData.description}
                <img src="src/assets/edit.svg" className="w-[20px] h-[20px]" />
              </p>

              {/* Hourly Rate */}
              <div className="mt-4 flex items-center gap-2">
                <span className=" font-[400] text-lg">
                  {profileData.hourlyRate}
                </span>

                <img
                  src="src/assets/edit.svg"
                  className="w-[20px] h-[20px] ml-[10px]"
                />
              </div>
              <span className="text-sm text-gray-400"> Hourly Rate</span>
            </div>

            {/* Skills Section */}
            <div
              className={`py-4 pr-6 pl-3 mt-6 rounded-md border-[0.5px] ${
                darkMode
                  ? "bg-transparent border-[#E9E9E9]"
                  : "bg-white border-[white]"
              }`}
            >
              <h3 className="text-xl font-inter font-[400] flex items-center gap-2">
                Skills{" "}
                <img
                  src="src/assets/edit.svg"
                  className="w-[20px] h-[20px] ml-[10px]"
                />
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#E9E9E9] pt-2 text-black pr-4 pb-2 pl-4 rounded-[5px] text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Work History Section */}
            <div
              className={`py-4 pr-6 pl-3 mt-6 rounded-md border-[0.5px] ${
                darkMode
                  ? "bg-transparent border-[#E9E9E9]"
                  : "bg-white border-[white]"
              }`}
            >
              <h3 className="text-xl font-inter font-[400] flex  justify-between ">
                Work History
                <img
                  src="src/assets/export-plus.svg"
                  className="w-[28px] h-[28px]"
                />
              </h3>
              <div className="mt-3  pb-3">
                {profileData.workHistory.map((work, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2 flex-wrap">
                      <div className="flex flex-wrap items-center gap-3 sm:w-auto w-52">
                        <img
                          src="src/assets/briefcase.svg"
                          className="w-[19px]"
                        />
                        <h4 className="font-semibold font-inter">
                          {work.company}
                        </h4>

                        {/* Make duration wrap to next line on smaller widths */}
                        <span
                          className={`text-sm font-[300]  sm:ml-10 ml-0 w-full sm:w-auto ${
                            darkMode ? "text-white" : "text-[#333333]"
                          }`}
                        >
                          {work.duration}
                        </span>
                      </div>

                      <span className="text-sm text-gray-400 flex items-center gap-2 mt-2 sm:mt-0">
                        <img
                          src={
                            darkMode
                              ? "src/assets/edit-dark.svg"
                              : "src/assets/edit-02.svg"
                          }
                          alt="Mode Icon"
                          className="w-5 h-5"
                        />
                        <button className="relative group flex h-4 w-4 flex-col items-center justify-center overflow-hidden">
                          {/* SVGs stay unchanged */}
                          <svg
                            viewBox="0 0 1.625 1.625"
                            className={`absolute -top-7 w-[10px] h-[10px] delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000 ${
                              darkMode ? "fill-white" : "fill-black"
                            }`}
                          >
                            <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                            <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                            <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                          </svg>
                          <svg
                            width="15"
                            fill="none"
                            viewBox="0 0 39 7"
                            className="origin-right duration-500 group-hover:rotate-90"
                          >
                            <line
                              strokeWidth="4"
                              stroke={darkMode ? "white" : "#333333"}
                              y2="5"
                              x2="39"
                              y1="5"
                            />
                            <line
                              strokeWidth="3"
                              stroke={darkMode ? "white" : "#333333"}
                              y2="1.5"
                              x2="26.0357"
                              y1="1.5"
                              x1="12"
                            ></line>
                          </svg>
                          <svg width="15" fill="none" viewBox="0 0 33 39">
                            <mask fill="white" id="path-1-inside-1_8_19">
                              <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                            </mask>
                            <path
                              mask="url(#path-1-inside-1_8_19)"
                              fill={darkMode ? "white" : "#333333"}
                              d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                            ></path>
                            <path
                              strokeWidth="4"
                              stroke={darkMode ? "white" : "#333333"}
                              d="M12 6L12 29"
                            ></path>
                            <path
                              strokeWidth="4"
                              stroke={darkMode ? "white" : "#333333"}
                              d="M21 6V29"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </div>

                    <p
                      className={`text-sm  mb-2 ${
                        darkMode ? "text-white" : "text-[#555555]"
                      }`}
                    >
                      {work.role}
                    </p>

                    <p
                      className={`sm:text-sm text-[12px] text-gray-500 sm:w-[400px] ${
                        darkMode ? "text-white" : "text-[##333333]"
                      }`}
                    >
                      {work.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div
              className={`py-4 pr-6 pl-3 mt-6 rounded-md border-[0.5px] ${
                darkMode
                  ? "bg-transparent border-[#E9E9E9]"
                  : "bg-white border-[white]"
              }`}
            >
              <h3 className="text-xl font-inter font-[400] flex  justify-between ">
                Education
                <img
                  src="src/assets/export-plus.svg"
                  className="w-[28px] h-[28px]"
                />
              </h3>
              <div className="mt-3  pb-3">
                {profileData.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2 flex-wrap ">
                      <div className="flex flex-wrap items-center gap-3  sm:w-auto w-52">
                        <img
                          src="src/assets/briefcase.svg"
                          className="w-[19px]"
                        />
                        <h4 className="font-semibold font-inter">
                          {edu.institution}
                        </h4>

                        {/* Duration should go to next line if no space */}
                        <span
                          className={`text-sm font-[300] sm:ml-10 ml-0 w-full sm:w-auto ${
                            darkMode ? "text-white" : "text-[#333333]"
                          }`}
                        >
                          {edu.duration}
                        </span>
                      </div>

                      <span className="text-sm text-gray-400 flex items-center gap-2 mt-2 sm:mt-0">
                        <img
                          src={
                            darkMode
                              ? "src/assets/edit-dark.svg"
                              : "src/assets/edit-02.svg"
                          }
                          alt="Mode Icon"
                          className="w-5 h-5"
                        />
                        <button className="relative group flex h-4 w-4 flex-col items-center justify-center overflow-hidden">
                          <svg
                            viewBox="0 0 1.625 1.625"
                            className={`absolute -top-7 w-[10px] h-[10px] delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000 ${
                              darkMode ? "fill-white" : "fill-black"
                            }`}
                          >
                            <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                            <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                            <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                          </svg>
                          <svg
                            width="15"
                            fill="none"
                            viewBox="0 0 39 7"
                            className="origin-right duration-500 group-hover:rotate-90"
                          >
                            <line
                              strokeWidth="4"
                              stroke={darkMode ? "white" : "#333333"}
                              y2="5"
                              x2="39"
                              y1="5"
                            />
                            <line
                              strokeWidth="3"
                              stroke={darkMode ? "white" : "#333333"}
                              y2="1.5"
                              x2="26.0357"
                              y1="1.5"
                              x1="12"
                            ></line>
                          </svg>
                          <svg
                            width="15"
                            fill="none"
                            viewBox="0 0 33 39"
                            className=""
                          >
                            <mask fill="white" id="path-1-inside-1_8_19">
                              <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                            </mask>
                            <path
                              mask="url(#path-1-inside-1_8_19)"
                              fill={darkMode ? "white" : "#333333"}
                              d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                            ></path>
                            <path
                              strokeWidth="4"
                              stroke={darkMode ? "white" : "#333333"}
                              d="M12 6L12 29"
                            ></path>
                            <path
                              strokeWidth="4"
                              stroke={darkMode ? "white" : "#333333"}
                              d="M21 6V29"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </div>
                    <p
                      className={`text-sm  mb-2 ${
                        darkMode ? "text-white" : "text-[#555555]"
                      }`}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className={`sm:text-sm text-[12px]  text-gray-500 sm:w-[400px] ${
                        darkMode ? "text-white" : "text-[##333333]"
                      }`}
                    >
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div
              className={`py-4 pr-6 pl-3 mt-6 rounded-md border-[0.5px] ${
                darkMode
                  ? "bg-transparent border-[#E9E9E9]"
                  : "bg-white border-[white]"
              }`}
            >
              <h3 className="text-xl font-inter font-[400] flex items-center gap-2">
                Languages{" "}
                <img
                  src="src/assets/edit.svg"
                  className="w-[20px] h-[20px] ml-[10px]"
                />
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profileData.languages.map((language, index) => (
                  <span
                    key={index}
                    className="bg-[#E9E9E9] pt-2 text-black pr-4 pb-2 pl-4 rounded-[5px] text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Final Submit Button */}
            <div className="flex justify-end">
              <button
                className="bg-[#E66D3D] text-white px-4 py-2 rounded-[5px] mt-6 w-[211px]"
                onClick={() => navigate("/finish")}
              >
                Submit Profile
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
