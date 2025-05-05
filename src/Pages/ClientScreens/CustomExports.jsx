import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { FaArrowRight } from "react-icons/fa6";
export default function CustomExports() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedRange, setSelectedRange] = useState("yesterday");
  const [format, setFormat] = useState("xlsx");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");

  const rangeOptions = [
    "Yesterday",
    "Previous Week",
    "Previous Month",
    "Custom",
  ];
  const formatOptions = [
    { label: "Microsoft Excel Open XML Format (.xlsx)", value: "xlsx" },
    { label: "Comma Separated Values Format (.csv)", value: "csv" },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10">
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
            <div className="space-y-8">
              <h3 className="text-2xl font-[400]">Custom Exports</h3>

              {/* Select Range */}
              <div className="space-y-6">
                <p className="font-medium">Select Range</p>

                {/* Inline options (excluding Custom) */}
                <div className="flex flex-wrap gap-9">
                  {rangeOptions
                    .filter((label) => label !== "Custom")
                    .map((label) => {
                      const value = label.toLowerCase().replace(/\s/g, "-");
                      return (
                        <div
                          key={value}
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => setSelectedRange(value)}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
                              selectedRange === value
                                ? "border-2 border-[#E66D3D]"
                                : "border border-[#E66D3D]"
                            }`}
                          >
                            {selectedRange === value && (
                              <div className="w-2.5 h-2.5 bg-[#E66D3D] rounded-full" />
                            )}
                          </div>
                          <span>{label}</span>
                        </div>
                      );
                    })}
                </div>

                {/* Custom - always on new line */}
                <div className="space-y-2 pt-2">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSelectedRange("custom")}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        selectedRange === "custom"
                          ? "border-2 border-[#E66D3D]"
                          : "border border-[#E66D3D]"
                      }`}
                    >
                      {selectedRange === "custom" && (
                        <div className="w-2.5 h-2.5 bg-[#E66D3D] rounded-full" />
                      )}
                    </div>
                    <span>Custom</span>
                    {/* Custom date fields - only if custom is selected */}
                    {selectedRange === "custom" && (
                      <div className="flex gap-3 items-center pl-6">
                        <input
                          type="text"
                          placeholder="DD/MM/YYYY"
                          className="border-b border-[#E66D3D]  outline-none w-28 bg-transparent"
                          value={customStart}
                          onChange={(e) => setCustomStart(e.target.value)}
                        />
                        <span>
                          <FaArrowRight className="text-[#E66D3D]" />
                        </span>
                        <input
                          type="text"
                          placeholder="DD/MM/YYYY"
                          className="border-b border-[#E66D3D] outline-none w-28 bg-transparent"
                          value={customEnd}
                          onChange={(e) => setCustomEnd(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Save As */}
              <div className="space-y-5">
                <p className="font-medium">Save As</p>
                <div className="flex flex-col gap-8">
                  {formatOptions.map((item) => (
                    <div
                      key={item.value}
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => setFormat(item.value)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          format === item.value
                            ? "border-2 border-[#E66D3D]"
                            : "border border-[#E66D3D]"
                        }`}
                      >
                        {format === item.value && (
                          <div className="w-2.5 h-2.5 bg-[#E66D3D] rounded-full" />
                        )}
                      </div>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-9 mt-4">
                <button className="bg-[#E66D3D]  text-white px-7 py-2 rounded">
                  Export Data
                </button>
                <button className="border border-[#E66D3D]  px-9 py-2 rounded ">
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
