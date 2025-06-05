import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { FaArrowRight } from "react-icons/fa6";
export default function CustomExports() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedRange, setSelectedRange] = useState("yesterday");
  const [format, setFormat] = useState("xlsx");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10 block md:hidden">
          <div className="h-full overflow-y-auto hide-scrollbar py-[20px]">
            <MobileSidebar />
          </div>
        </div>

        <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6 border rounded-lg ${
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
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200  flex-shrink-0 ${
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
                    className="flex flex-col sm:flex-row sm:items-center gap-2 cursor-pointer"
                    onClick={() => setSelectedRange("custom")}
                  >
                    {/* Radio + Label (always in same line) */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0 ${
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
                    </div>

                    {/* From → To range input (wraps below, but inline on same row) */}
                    {selectedRange === "custom" && (
                      <div className="flex items-center gap-2 sm:gap-3 mt-2 md:pl-7 flex-wrap  [@media(max-width:334px)]:w-[130px]">
                        <input
                          type="text"
                          placeholder={isMobile ? "DD/MM/YY" : "DD/MM/YYYY"}
                          className="border-b border-[#E66D3D] outline-none bg-transparent w-20 sm:w-28 md:w-32 text-sm [@media(max-width:340px)]:w-[74px]"
                          value={customStart}
                          onChange={(e) => setCustomStart(e.target.value)}
                        />
                        <FaArrowRight className="text-[#E66D3D] text-sm" />
                        <input
                          type="text"
                          placeholder={isMobile ? "DD/MM/YY" : "DD/MM/YYYY"}
                          className="border-b border-[#E66D3D] outline-none bg-transparent w-20 sm:w-28 md:w-32 text-sm [@media(max-width:340px)]:w-[74px]"
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
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0 ${
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
              <div className="flex md:gap-9 gap-5 mt-4 flex-wrap">
                <button className="bg-[#E66D3D] text-white px-7 py-2 rounded  [@media(max-width:479px)]:w-full sm:w-auto">
                  Export Data
                </button>
                <button className="border border-[#E66D3D] px-9 py-2 rounded [@media(max-width:479px)]:w-full sm:w-auto">
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
