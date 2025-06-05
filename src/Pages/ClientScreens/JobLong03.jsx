import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobLong03() {
  const [darkMode, setDarkMode] = useState(false);
  const [scope, setScope] = useState("");
  const [duration, setDuration] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();
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

        <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <div className="flex justify-between  mb-4">
              <h3 className="md:text-2xl text-xl font-[400]">
                What are the main skills required for your work?
              </h3>
              <span className="text-xl">3/5</span>
            </div>

            <p className="text-sm mb-6 md:w-[40vw]">
              These aren’t final answers, but this information helps us
              recommend the right talent for what you need.
            </p>

            {/* Scope Options */}
            <div className="space-y-4 mb-8">
              {[
                {
                  value: "Large",
                  label: "Large",
                  desc: "Longer term or complex initiatives (ex. design and build a full website)",
                },
                {
                  value: "Medium",
                  label: "Medium",
                  desc: "Well-defined projects (ex. a landing page)",
                },
                {
                  value: "Small",
                  label: "Small",
                  desc: "Quick and straightforward tasks (ex. update text and images on a webpage)",
                },
              ].map(({ value, label, desc }) => (
                <div
                  key={value}
                  className="flex gap-3 items-start cursor-pointer"
                  onClick={() => setScope(value)}
                >
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-2 ${
                      scope === value
                        ? "border-2 border-[#E66D3D]"
                        : darkMode
                        ? "border border-white"
                        : "border border-[#333333]"
                    }`}
                  >
                    {scope === value && (
                      <div className="w-2 h-2 bg-[#E66D3D] rounded-full" />
                    )}
                  </div>

                  <div>
                    <p className="font-[400] mb-2">{label}</p>
                    <p
                      className={`text-[14px] ${
                        darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                      }`}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Duration and Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <h4 className="font-semibold mb-3">
                  How long will your work take?
                </h4>
                {["More than 6 months", "3 to 6 months", "1 to 3 months"].map(
                  (option) => (
                    <div
                      key={option}
                      className="flex items-center gap-3 cursor-pointer mb-4"
                      onClick={() => setDuration(option)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          duration === option
                            ? "border-2 border-[#E66D3D]"
                            : darkMode
                            ? "border border-white"
                            : "border border-[#333333]"
                        }`}
                      >
                        {duration === option && (
                          <div className="w-2 h-2 bg-[#E66D3D] rounded-full" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-10 md:mt-0">
                <h4 className="font-semibold mb-3">
                  What level of experience will it need?
                </h4>
                {["Entry Level", "Intermediate Level", "Expert Level"].map(
                  (level) => (
                    <div
                      key={level}
                      className="flex items-center gap-3 cursor-pointer mb-4"
                      onClick={() => setExperience(level)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          experience === level
                            ? "border-2 border-[#E66D3D]"
                            : darkMode
                            ? "border border-white"
                            : "border border-[#333333]"
                        }`}
                      >
                        {experience === level && (
                          <div className="w-2 h-2 bg-[#E66D3D] rounded-full" />
                        )}
                      </div>
                      <span>{level}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 w-full">
              <button
                className="w-full sm:w-auto border border-[#E66D3D] font-[600] px-6 py-2 rounded-md"
                onClick={() => navigate("/longTermJob02")}
              >
                Back
              </button>
              <button
                className="w-full sm:w-auto bg-[#E66D3D] font-[600] text-white px-6 py-2 rounded-md"
                onClick={() => navigate("/longTermJob04")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
