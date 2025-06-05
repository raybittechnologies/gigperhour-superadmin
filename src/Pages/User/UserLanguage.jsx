import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";
import { HiOutlineBriefcase } from "react-icons/hi2";

function ShimmerProfile({ darkMode }) {
  const shimmerBg = darkMode ? "bg-[#333]" : "bg-[#e2e2e2]";

  return (
    <div className="space-y-8 animate-pulse">
      {/* Shimmer for Profile Info */}
      <div
        className={`pb-6 px-4 rounded-md border-[0.5px] ${
          darkMode
            ? "bg-transparent border-[#E9E9E9]"
            : "bg-transparent border-[#555555]"
        }`}
      >
        <div className={`h-6 w-1/3 rounded ${shimmerBg} mt-4`} /> {/* Title */}
        <div className="space-y-2 mt-4">
          <div className={`h-4 w-full rounded ${shimmerBg}`} />
          <div className={`h-4 w-[85%] rounded ${shimmerBg}`} />
          <div className={`h-4 w-[65%] rounded ${shimmerBg}`} />
        </div>
      </div>

      {/* Shimmer for Skills */}
      <div
        className={`py-6 px-4 rounded-md border-[0.5px] ${
          darkMode
            ? "bg-transparent border-[#E9E9E9]"
            : "bg-transparent border-[#555555]"
        }`}
      >
        <div className={`h-6 w-1/4 rounded ${shimmerBg}`} />{" "}
        {/* "Skills" title */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className={`h-8 w-20 rounded-md ${shimmerBg}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function UserLanguage() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData] = useState({
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
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          {/* Education Section */}
          {loading ? (
            <ShimmerProfile darkMode={darkMode} />
          ) : (
            <>
              <div
                className={`py-4 pr-6 pl-3  rounded-md border-[0.5px] ${
                  darkMode
                    ? "bg-transparent border-[#E9E9E9]"
                    : "bg-transparent border-[#555555]"
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
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex gap-3 [@media(max-width:420px)]:flex-col">
                          <div className="flex flex-row gap-2">
                            <HiOutlineBriefcase className="w-[19px] h-[18px] mt-1" />
                            <h4 className="font-semibold font-inter">
                              {edu.institution}
                            </h4>
                          </div>
                          <span
                            className={`text-sm font-[300]  sm:ml-9 "${
                              darkMode ? "text-white" : "text-[#333333]"
                            }`}
                          >
                            {edu.duration}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 flex items-center gap-2">
                          <img
                            src={
                              darkMode
                                ? "src/assets/edit-dark.svg"
                                : "src/assets/edit-02.svg"
                            }
                            alt="Mode Icon"
                            className="w-5 h-5"
                          />
                          <button className=" relative group flex h-4 w-4 flex-col items-center justify-center overflow-hidden">
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
                        className={`sm:text-sm text-[13px] text-gray-500 sm:w-[400px] ${
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
                    : "bg-transparent border-[#555555]"
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
                      className={`pt-2 pr-4 pb-2 pl-4 rounded-[5px] text-sm ${
                        darkMode
                          ? "bg-white text-black"
                          : "bg-[#333333] text-white"
                      }`}
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
