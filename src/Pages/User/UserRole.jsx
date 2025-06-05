import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";

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

export default function UserRole() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const [profileData] = useState({
    title: "Creative Designer",
    description:
      "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design. I specialize in crafting intuitive, engaging, and visually compelling digital experiences. With expertise in wireframing, prototyping, and usability testing, I ensure seamless interactions that enhance user satisfaction. Proficient in Figma, Adobe XD, and design systems, I bring creativity and functionality together to deliver impactful solutions. Whether designing for web or mobile, my goal is to create designs that are not only beautiful but also drive meaningful user engagement. Always eager to learn and adapt, I thrive on turning complex ideas into intuitive experiences.",
    skills: ["Java", "Javascript", "ReactJS", "Tailwind CSS"],
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Sidebar */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10">
          <div className="block h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        {/* Content */}
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          {loading ? (
            <ShimmerProfile darkMode={darkMode} />
          ) : (
            <>
              {/* Profile Card */}
              <div
                className={`pb-4 pr-3 pl-3 rounded-md border-[0.5px] ${
                  darkMode
                    ? "bg-transparent border-[#E9E9E9]"
                    : "bg-transparent border-[#555555]"
                }`}
              >
                <h3 className="text-xl font-inter font-[400] mt-4 flex items-center gap-2">
                  {profileData.title}
                  <img
                    src="src/assets/edit.svg"
                    className="w-[20px] h-[20px] ml-[10px]"
                  />
                </h3>
                <p className="sm:text-[15px] text-[12px] font-[400] mt-2 flex gap-2">
                  {profileData.description}
                  <img
                    src="src/assets/edit.svg"
                    className="w-[20px] h-[20px]"
                  />
                </p>
              </div>

              {/* Skills Section */}
              <div
                className={`py-4 pr-6 pl-3 mt-6 rounded-md border-[0.5px] ${
                  darkMode
                    ? "bg-transparent border-[#E9E9E9]"
                    : "bg-transparent border-[#555555]"
                }`}
              >
                <h3 className="text-xl font-inter font-[400] flex items-center gap-2">
                  Skills
                  <img
                    src="src/assets/edit.svg"
                    className="w-[20px] h-[20px] ml-[10px]"
                  />
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`pt-2 pr-4 pb-2 pl-4 rounded-[5px] text-sm ${
                        darkMode
                          ? "bg-white text-black"
                          : "bg-[#333333] text-white"
                      }`}
                    >
                      {skill}
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
