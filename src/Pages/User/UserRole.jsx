import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";

export default function UserRole() {
  const [darkMode, setDarkMode] = useState(false);
  const [profileData] = useState({
    title: "Creative Designer",
    description:
      "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design. I specialize in crafting intuitive, engaging, and visually compelling digital experiences. With expertise in wireframing, prototyping, and usability testing, I ensure seamless interactions that enhance user satisfaction. Proficient in Figma, Adobe XD, and design systems, I bring creativity and functionality together to deliver impactful solutions. Whether designing for web or mobile, my goal is to create designs that are not only beautiful but also drive meaningful user engagement. Always eager to learn and adapt, I thrive on turning complex ideas into intuitive experiences..",

    skills: ["Java", "Javascript", "ReactJS", "Tailwind CSS"],
  });

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      {/* Navbar with Dark Mode Toggle */}
      <NavBarUser changeMode={setDarkMode} />

      {/* Main Layout with Sidebar */}
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        {/* Sidebar (Left) */}
        <SideBar />

        {/* Content Section (Right) */}
        <div className="container mx-auto pl-6 pb-6 pr-6 col-span-10">
          {/* Profile Card */}
          <div
            className={`pb-4 pr-6 pl-3  rounded-md border-[0.5px] ${
              darkMode
                ? "bg-transparent border-[#E9E9E9]"
                : "bg-transparent border-[#555555]"
            }`}
          >
            {/* Title & Description */}
            <h3 className="text-xl font-inter font-[400] mt-4 flex items-center gap-2">
              {profileData.title}{" "}
              <img
                src="src/assets/edit.svg"
                className="w-[20px] h-[20px] ml-[10px]"
              />
            </h3>
            <p className="text-[15px] font-[400] mt-2 flex items-center gap-2">
              {profileData.description}
              <img src="src/assets/edit.svg" className="w-[20px] h-[20px]" />
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
                  className={`pt-2 pr-4 pb-2 pl-4 rounded-[5px] text-sm ${
                    darkMode ? "bg-white text-black" : "bg-[#333333] text-white"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
