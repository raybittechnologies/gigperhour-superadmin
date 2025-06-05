import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function JobLong02() {
  const [darkMode, setDarkMode] = useState(false);
  const [inputSkill, setInputSkill] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const shimmerBlock = "bg-gray-300 rounded animate-pulse";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate load
    return () => clearTimeout(timer);
  }, []);

  const [selectedSkills, setSelectedSkills] = useState([
    "Web Design",
    "Figma",
    "Illustrator",
    "Illustrator",
    "NextJS",
  ]);

  const [dropdowns, setDropdowns] = useState({
    popular: true,
    skills: false,
    deliverables: false,
    methodologies: false,
    tools: false,
    businessSize: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns({ ...dropdowns, [key]: !dropdowns[key] });
  };

  const skillsByCategory = {
    popular: ["Web Design", "Figma", "NextJS", "Illustrator", "ReactJS"],
    skills: ["Roadmapping", "Prioritization", "Stakeholder Management"],
    deliverables: ["Product Requirements", "User Stories", "Wireframes"],
    tools: ["Jira", "Trello", "Figma", "Confluence"],
    methodologies: ["Agile", "Scrum", "Design Thinking", "Lean", "Waterfall"],
    businessSize: ["Startup", "SMB", "Enterprise"],
  };

  const handleAddSkill = (skill) => {
    if (
      skill.trim() &&
      selectedSkills.length < 10 &&
      !selectedSkills.includes(skill)
    ) {
      setSelectedSkills((prev) => [...prev, skill]);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill(inputSkill.trim());
      setInputSkill("");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Mobile Sidebar - shown only below 768px */}
        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        <div className=" md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6  border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <div>
              {isLoading ? (
                <div className="space-y-4 mb-6">
                  <div className={`${shimmerBlock} h-6 w-2/3`} />
                  <div className={`${shimmerBlock} h-3 w-full`} />
                  <div
                    className={`${shimmerBlock} h-10 md:w-[35vw] w-full rounded-md`}
                  />
                  <div className={`${shimmerBlock} h-3 w-1/2`} />
                </div>
              ) : (
                <>
                  <div className="flex justify-between  gap-1 mb-4">
                    <h3 className="md:text-2xl text-xl font-[400]">
                      What are the main skills required for your work?
                    </h3>
                    <span className="text-xl">2/5</span>
                  </div>

                  <p className="text-sm mb-6">
                    This helps your job post stand out to the right candidates.{" "}
                    <br />
                    It’s the first thing they’ll see, so make it count!
                  </p>

                  {/* Search Bar */}
                  <label className="block text-sm  mb-1">
                    Search or add up to 10 skills
                  </label>
                  <div
                    className={`flex items-center border ${
                      darkMode ? "border-white" : "border-black"
                    } rounded-[5px] overflow-hidden mb-2 md:w-[35vw] relative bg-transparent `}
                  >
                    <div className="px-3">
                      <img
                        src={
                          darkMode
                            ? "src/assets/search-dark.svg"
                            : "src/assets/search-01.svg"
                        }
                        alt="Search"
                        className="w-5 h-5"
                      />
                    </div>

                    <input
                      type="text"
                      value={inputSkill}
                      onChange={(e) => setInputSkill(e.target.value)}
                      onKeyDown={handleInputKeyDown}
                      className={`w-full px-2 py-2 outline-none bg-transparent text-sm ${
                        darkMode
                          ? "text-white placeholder-gray-400"
                          : "text-black"
                      }`}
                    />
                  </div>

                  <p className="text-sm mb-6">
                    For best results add up to 5 skills
                  </p>
                </>
              )}

              {/* Selected Skills */}
              {isLoading ? (
                <div className="space-y-2 mb-9">
                  <div className={`${shimmerBlock} h-4 w-1/3`} />
                  <div className="flex flex-wrap gap-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`${shimmerBlock} h-6 w-24 rounded-md`}
                        />
                      ))}
                  </div>
                </div>
              ) : (
                selectedSkills.length > 0 && (
                  <div className="flex flex-col gap-2 mb-9">
                    <p className="font-[600]">Selected Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-[#D9D9D9] text-[#555555] text-sm px-3 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}

              {/* Dropdown Sections */}
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 text-sm">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i}>
                        <div className={`${shimmerBlock} h-4 w-2/3 mb-2`} />
                        <div className="flex flex-wrap gap-2 mt-2">
                          {Array(3)
                            .fill(0)
                            .map((__, j) => (
                              <div
                                key={j}
                                className={`${shimmerBlock} h-6 w-24 rounded-md`}
                              />
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-6 text-sm">
                  {Object.entries(skillsByCategory).map(([key, skills]) => {
                    const labelMap = {
                      popular: "Popular Skills",
                      skills: "Product Management Skills",
                      deliverables: "Product Management Deliverables",
                      tools: "Product Management Tools",
                      methodologies: "Product Management Methodologies",
                      businessSize: "Business Size",
                    };

                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggleDropdown(key)}
                          className="flex items-center justify-between w-full text-left font-medium"
                        >
                          {labelMap[key]}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              dropdowns[key] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {dropdowns[key] && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {skills
                              .filter(
                                (skill) => !selectedSkills.includes(skill)
                              )
                              .map((skill, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleAddSkill(skill)}
                                  className="bg-[#D9D9D9] text-[#555555] text-sm px-3 py-1 rounded-md hover:bg-[#bfbfbf] transition-colors"
                                >
                                  {skill}
                                </button>
                              ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 w-full">
                <button
                  className="w-full sm:w-auto border border-[#E66D3D] font-[600] px-6 py-2 rounded-md"
                  onClick={() => navigate("/longTermJob01")}
                >
                  Back
                </button>
                <button
                  className="w-full sm:w-auto bg-[#E66D3D] font-[600] text-white px-6 py-2 rounded-md"
                  onClick={() => navigate("/longTermJob03")}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
