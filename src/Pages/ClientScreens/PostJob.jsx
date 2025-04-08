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
    setSelectedType(type);

    if (type === "long") {
      setTimeout(() => {
        navigate("/longTermJob01");
      }, 500); //
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <div className="col-span-2">
          <SideBar />
        </div>

        <div className="col-span-10 pl-6">
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
            <div className="flex justify-end gap-9 mt-32">
              <button className="px-6 py-2 border font-[600] border-[#E66D3D] rounded-md   transition">
                Cancel
              </button>
              <button
                className={`px-6 py-2 rounded-md font-[600] text-white transition ${
                  selectedType
                    ? "bg-[#E66D3D] "
                    : "bg-[#E66D3D] cursor-not-allowed"
                }`}
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
