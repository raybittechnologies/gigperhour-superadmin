import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";

export default function ProfileSetting() {
  const [darkMode, setDarkMode] = useState(false);

  const [experience, setExperience] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openis, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Preferences");

  const [selectedOptionn, setSelectedOptionn] = useState("Select Preferences");
  const options = [
    { value: "", label: "Select Preferences" },
    { value: "short-term", label: "Short-Term Projects" },
    { value: "long-term", label: "Long-Term Projects" },
  ];
  const optionss = [
    { value: "", label: "Select Preferences" },
    { value: "short-term", label: "Short-Term Projects" },
    { value: "long-term", label: "Long-Term Projects" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className=" space-y-6">
            {/* Profile Settings Card */}
            <div className="border rounded-lg p-3 border-[#555555] ">
              <h3 className="text-[22px] font-[400]">Profile Settings</h3>

              {/* Visibility & Project Preference */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[90px] mt-4">
                {/* Visibility Dropdown */}
                <div className="mr-10">
                  <label className="block text-[14px] font-[400] mb-1">
                    Visibility
                  </label>
                  <div className="relative w-full">
                    <button
                      onClick={() => setOpen(!openis)}
                      className={`w-full border bg-transparent rounded-md p-2 text-left flex items-center justify-between
        focus:ring-orange-500 focus:border-orange-500
        ${
          darkMode
            ? "border-[#E9E9E9] text-white"
            : "border-[#555555] text-[#555555]"
        }`}
                    >
                      {selectedOptionn}
                      <img
                        src={
                          darkMode
                            ? "src/assets/UserDashboard/arrow-light.svg"
                            : "src/assets/arrow-down-01.svg"
                        }
                        alt="Dropdown Icon"
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openis ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {openis && (
                      <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {optionss.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => {
                              setSelectedOptionn(option.label);
                              setIsOpen(false);
                            }}
                            className="p-2 cursor-pointer hover:bg-[#E66D3D] text-[black] hover:text-[white]"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Preference Dropdown */}
                <div className="mr-10">
                  <label className="block text-[14px] font-[400] mb-1">
                    Project Preference
                  </label>
                  <div className="relative w-full">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full border bg-transparent rounded-md p-2 text-left flex items-center justify-between
        focus:ring-orange-500 focus:border-orange-500
        ${
          darkMode
            ? "border-[#E9E9E9] text-white"
            : "border-[#555555] text-[#555555]"
        }`}
                    >
                      {selectedOption}
                      <img
                        src={
                          darkMode
                            ? "src/assets/UserDashboard/arrow-light.svg"
                            : "src/assets/arrow-down-01.svg"
                        }
                        alt="Dropdown Icon"
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {options.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => {
                              setSelectedOption(option.label);
                              setIsOpen(false);
                            }}
                            className="p-2 cursor-pointer hover:bg-[#E66D3D] text-[black] hover:text-[white]"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Earnings Privacy & Membership */}
              <div className="mt-4 flex items-center gap-2  text-sm">
                <span className="font-[400]">Earnings Privacy</span>
                <img
                  src={
                    darkMode
                      ? "src/assets/UserDashboard/bubble-chat-question2-dark.svg"
                      : "src/assets/UserDashboard/bubble-chat-question2.svg"
                  }
                  className="mt-1"
                  alt="Earnings Privacy Icon"
                />
              </div>

              <p className=" text-sm mt-2">
                Upgrade to{" "}
                <span className="text-[#E66D3D]  cursor-pointer hover:underline">
                  Elevance Plus Membership
                </span>{" "}
                to enable this service.
              </p>

              {/* View Profile Link */}
              <a
                href="#"
                className="text-[#E66D3D] font-semibold underline text-sm mt-3 inline-block "
              >
                View my Profile as others see it !
              </a>
            </div>

            {/* Experience Level & Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience Level */}
              <div className="border rounded-lg p-4 border-[#555555]">
                <h3 className="text-[22px] font-[400] ">Experience Level</h3>

                <div className="space-y-3 mt-3">
                  {[
                    {
                      level: "Entry Level",
                      desc: "I am relatively new to this field.",
                    },
                    {
                      level: "Intermediate Level",
                      desc: "I have substantial experience in this field.",
                    },
                    {
                      level: "Expert Level",
                      desc: "I have comprehensive and deep expertise in this field.",
                    },
                  ].map((exp) => (
                    <label
                      key={exp.level}
                      className="flex items-center gap-8 p-2 border border-[#555555] rounded-md cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="experience"
                        value={exp.level}
                        checked={experience === exp.level}
                        onChange={() => setExperience(exp.level)}
                        className="w-5 h-5 ml-2 text-[#E66D3D] custom-radio"
                      />

                      <div>
                        <p className="text-[16px]">{exp.level}</p>
                        <p className="text-sm ">{exp.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories Section */}
              <div className="border rounded-lg p-4 border-[#555555] relative">
                <h3 className="text-[22px] ">Categories</h3>

                {/* Edit Icon */}
                <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
                  <img src="src\assets\edit.svg" />
                </button>

                {/* Categories List */}
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="font-[600] mb-2 text-[16px]">
                      Web mobile & Software dev
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {[
                        "QA Testing",
                        "Software dev",
                        "Web & Mobile Design",
                        "Ecommerce Development",
                        "Mobile development",
                        "Product Management",
                        "Agile development",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-[400] px-2 py-1 rounded-[2px] 
      ${darkMode ? "bg-white text-black" : "bg-[#555555] text-white"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-[600] mb-2">Design & Creative</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span
                        className={`text-xs font-[400] px-2 py-1 rounded-[2px] 
      ${darkMode ? "bg-white text-black" : "bg-[#555555] text-white"}`}
                      >
                        Branding & Logo Design
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="font-[600] mb-2">Sales & Marketing</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span
                        className={`text-xs font-[400] px-2 py-1 rounded-[2px] 
      ${darkMode ? "bg-white text-black" : "bg-[#555555] text-white"}`}
                      >
                        Digital Marketing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
