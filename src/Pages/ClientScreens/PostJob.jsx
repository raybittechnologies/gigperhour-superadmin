import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function PostJob() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const navigate = useNavigate();

  const handleSelect = (type) => {
    setSelectedType(type); // Only update the selection
  };
  const handleContinue = () => {
    if (selectedType === "long") {
      navigate("/longTermJob01");
    } else if (selectedType === "short") {
      navigate("/shortTermJob01"); // You can adjust this path if needed
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10 ">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`p-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            {/* Header */}
            <h2 className="text-2xl font-[400] mb-8">
              Let’s help you to get started
            </h2>

            {/* Project Type Options */}
            <div className="flex flex-col md:flex-row gap-14 w-[60vw]">
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
            <div className="mt-8 flex items-center justify-between text-sm cursor-pointer w-[60vw]">
              <span>Repost a previous job</span>
              <ChevronDown size={18} />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-9 mt-36">
              <button className="px-6 py-2 border font-[600] border-[#E66D3D] rounded-md   transition">
                Cancel
              </button>
              <button
                className={`px-6 py-2 rounded-md font-[600] text-white transition ${
                  selectedType
                    ? "bg-[#E66D3D] "
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
