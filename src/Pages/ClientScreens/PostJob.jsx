import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function PostJob() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const navigate = useNavigate();

  const handleSelect = (type) => {
    setSelectedType(type);
  };
  const handleContinue = () => {
    if (selectedType === "long") {
      navigate("/longTermJob01");
    } else if (selectedType === "short") {
      navigate("/shortTermJob01");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)]">
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

        <div className="md:ml-[240px]  ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={` md:p-6 px-3 py-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            {/* Header */}
            <h2 className="text-2xl font-[400] mb-8">
              Let’s help you to get started
            </h2>

            {/* Project Type Options */}
            <div className="flex flex-col md:flex-row lg:gap-14 gap-4 [@media(min-width:959px)]:w-[60vw]">
              {/* Long Term Project */}
              <div
                onClick={() => handleSelect("long")}
                className={`flex-1 border rounded-md p-4 cursor-pointer transition ${
                  selectedType === "long"
                    ? "border-orange-500"
                    : darkMode
                    ? "border-[#E9E9E9]"
                    : "border-[#555555]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">Long term project</h3>
                  <div
                    onClick={() => handleSelect("long")}
                    className={`w-5 h-5 rounded-full flex items-center justify-center mt-1 transition-colors duration-200 ${
                      selectedType === "long"
                        ? "border-2 border-[#E66D3D]"
                        : `border ${
                            darkMode ? "border-white" : "border-[#555555]"
                          }`
                    }`}
                  >
                    {selectedType === "long" && (
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm ">
                  More than thirty hours a week and/or will be longer than three
                  months.
                </p>
              </div>

              {/* Short Term Project */}
              <div
                onClick={() => handleSelect("short")}
                className={`flex-1 border rounded-md p-4 cursor-pointer transition  ${
                  selectedType === "short"
                    ? "border-orange-500"
                    : darkMode
                    ? "border-[#E9E9E9]"
                    : "border-[#555555]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">Short term project</h3>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center mt-1 transition-colors duration-200 ${
                      selectedType === "short"
                        ? "border-2 border-[#E66D3D]"
                        : `border ${
                            darkMode ? "border-white" : "border-[#555555]"
                          }`
                    }`}
                  >
                    {selectedType === "short" && (
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm ">
                  Less than thirty hours a week and/or will be shorter than
                  three months.
                </p>
              </div>
            </div>

            {/* Dropdown Placeholder */}
            <div className="mt-8 flex items-center justify-between text-sm cursor-pointer [@media(min-width:959px)]:w-[60vw]">
              <span>Repost a previous job</span>
              <ChevronDown size={18} />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end sm:gap-9 gap-4 mt-36 w-full max-w-full">
              <button className="w-full sm:w-auto px-6 py-2 border font-[600] border-[#E66D3D] rounded-md transition">
                Cancel
              </button>
              <button
                className={`w-full sm:w-auto px-6 py-2 rounded-md font-[600] text-white transition ${
                  selectedType
                    ? "bg-[#E66D3D]"
                    : "bg-[#E66D3D] cursor-not-allowed"
                }`}
                onClick={handleContinue}
                disabled={!selectedType}
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
