import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSidebar";
import { MdOutlineAddLocation } from "react-icons/md";
import { Star, CheckCircle, MessageSquare, Heart } from "lucide-react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SavedJobs() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const ShimmerCard = () => (
    <div
      className={`p-4 rounded-lg shadow-lg border animate-pulse ${
        darkMode
          ? "bg-[#1c1c1c] text-white border-[#444]"
          : "bg-white text-black border-[#ddd]"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <div
          className={`h-3 w-24 rounded bg-gray-400/30 ${
            darkMode ? "bg-gray-600" : ""
          }`}
        />
        <div className="flex space-x-2">
          <div className="h-4 w-4 rounded-full bg-gray-400/30" />
          <div className="h-4 w-4 rounded-full bg-gray-400/30" />
        </div>
      </div>
      <div className="h-5 w-3/4 rounded bg-gray-400/30 mb-2" />
      <div className="h-4 w-2/3 rounded bg-gray-400/30 mb-2" />
      <div className="h-4 w-full rounded bg-gray-400/30 mb-4" />

      <div className="flex flex-wrap gap-2 mb-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`h-6 w-20 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="h-4 w-1/2 rounded bg-gray-400/30 mb-2" />
      <div className="h-4 w-1/3 rounded bg-gray-400/30" />
    </div>
  );

  // const jobs = [];
  const jobs = [
    {
      title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
      type: "Fixed Price · Expert · Est. Budget: $21",
      description:
        "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design...",
      skills: ["Figma", "Web Design", "Responsive design", "Adobe Illustrator"],
      verified: true,
      location: "Greece",
      proposals: "5 to 15",
    },
    {
      title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
      type: "Fixed Price · Expert · Est. Budget: $21",
      description:
        "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design...",
      skills: ["Figma", "Web Design", "Responsive design", "Adobe Illustrator"],
      verified: true,
      location: "Greece",
      proposals: "5 to 15",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s delay to simulate API call

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Conditionally show sidebars only if jobs exist */}
        {jobs.length > 0 && (
          <>
            <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
              <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
                <SideBar />
              </div>
            </div>

            <div className="fixed top-[64px] pt-[20px] bottom-0 z-10 md:hidden">
              <div className="block h-full overflow-y-auto hide-scrollbar py-[20px]">
                <MobileSidebar />
              </div>
            </div>
          </>
        )}

        <div
          className={`${
            jobs.length > 0 ? "md:ml-[200px]" : ""
          } ml-[9px] flex-1 overflow-y-auto p-6 hide-scrollbar col-span-full`}
        >
          {jobs.length === 0 ? (
            <div className="relative w-full flex justify-center items-center">
              {/* Top-left "Search with →" text */}
              <div
                className={`absolute top-0 left-0 p-4 text-base ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 hover:underline"
                >
                  <BsArrowLeftSquare size={20} />
                  <span>Search</span>
                </Link>
              </div>

              {/* Centered content */}
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col items-center text-center">
                  {/* Images Row */}
                  <div className="flex items-center mb-6 relative">
                    <img
                      src="src/assets/UserDashboard/Identity Card 3D Business Icon.svg"
                      alt="Icon 1"
                      className="w-40 h-40"
                    />
                    <img
                      src="src/assets/UserDashboard/Protect.svg"
                      alt="Icon 2"
                      className="w-40 h-40 -ml-14 mt-32"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`text-lg font-[400] ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Keep track of jobs you re interested in. Select the heart
                    icon on a job post to save it for later.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="md:pl-6 pl-3 pr-3 pt-3 space-y-6 [@media(min-width:881px)]:w-[628px] w-full">
              {loading
                ? [...Array(3)].map((_, i) => <ShimmerCard key={i} />)
                : jobs.map((job, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg shadow-lg border ${
                        darkMode
                          ? "bg-transparent text-white border-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <p
                          className={`text-sm font-[300] ${
                            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                          }`}
                        >
                          Posted 1 hour ago
                        </p>
                        <div className="flex space-x-3">
                          <MessageSquare
                            size={18}
                            className="text-gray-400 cursor-pointer"
                          />
                          <Heart size={18} className="cursor-pointer" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[22px] font-[400] font-inter mt-2">
                        {job.title}
                      </h3>

                      {/* Type */}
                      <p
                        className={`text-sm font-[300] mt-1 ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        {job.type}
                      </p>

                      {/* Description */}
                      <p className="font-[400] text-[15px] mt-3">
                        {job.description}{" "}
                        <span className="text-[#E66D3D] font-semibold cursor-pointer">
                          more
                        </span>
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-[#D9D9D9] text-[#555555] font-[300] px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex flex-wrap items-center mt-4 text-gray-300 text-sm">
                        {job.verified && (
                          <>
                            <CheckCircle size={16} className="text-gray-400" />
                            <span
                              className={`ml-2 font-[300] ${
                                darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                              }`}
                            >
                              Payment Verified
                            </span>
                          </>
                        )}
                        <div className="flex ml-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="text-[#FCE15A] fill-[#FCE15A]"
                            />
                          ))}
                        </div>
                        <span
                          className={`ml-4 font-[300] ${
                            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                          }`}
                        >
                          $7k+ spent
                        </span>
                        <span
                          className={`flex items-center ml-4 font-[300] ${
                            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                          }`}
                        >
                          <MdOutlineAddLocation size={16} className="mr-1" />
                          {job.location}
                        </span>
                      </div>

                      {/* Proposals */}
                      <p className="font-[400] text-sm mt-3">
                        Proposals:{" "}
                        <span className="text-black dark:text-white">
                          {job.proposals}
                        </span>
                      </p>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
