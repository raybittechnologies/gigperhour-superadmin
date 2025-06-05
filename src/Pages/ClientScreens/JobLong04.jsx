import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function JobLong04() {
  const [darkMode, setDarkMode] = useState(false);
  const [budgetType, setBudgetType] = useState("");
  const [from, setFrom] = useState("");
  const [fixedPrice, setFixedPrice] = useState("");

  const [to, setTo] = useState("");

  const navigate = useNavigate();
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : " text-[#333333]"
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
            {/* Header */}
            <div className="flex justify-between gap-1 mb-2">
              <h3 className="md:text-2xl text-xl ">
                Tell us about your budget.
              </h3>
              <span className="text-xl ">4/5</span>
            </div>
            <p
              className={`mb-6 ${
                darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
              }`}
            >
              This will help us match you to talent within your range.
            </p>

            {/* Budget Type Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 [@media(min-width:913px)]:w-[30vw] mb-6">
              {/* Hourly Price */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setBudgetType("hourly")}
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 mt-1
        ${
          budgetType === "hourly"
            ? "border-2 border-[#E66D3D]"
            : darkMode
            ? "border border-white"
            : "border border-[#333333]"
        }`}
                >
                  {budgetType === "hourly" && (
                    <div className="w-2 h-2 bg-[#E66D3D] rounded-full" />
                  )}
                </div>
                <span>Hourly Price</span>
              </label>

              {/* Fixed Price */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setBudgetType("fixed")}
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 mt-1
        ${
          budgetType === "fixed"
            ? "border-2 border-[#E66D3D]"
            : darkMode
            ? "border border-white"
            : "border border-[#333333]"
        }`}
                >
                  {budgetType === "fixed" && (
                    <div className="w-2 h-2 bg-[#E66D3D] rounded-full" />
                  )}
                </div>
                <span>Fixed Price</span>
              </label>
            </div>

            {/* Hourly Budget Inputs */}
            {budgetType === "hourly" && (
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="w-full sm:w-auto">
                  <label className="block text-sm mb-1">From</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className={`border bg-transparent rounded px-3 py-2 w-full sm:w-28 focus:border-[#E66D3D] outline-none ${
                        darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                      }`}
                    />
                    <span className="ml-2">/hr</span>
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                  <label className="block text-sm mb-1">To</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className={`border bg-transparent rounded px-3 py-2 w-full sm:w-28 focus:border-[#E66D3D] outline-none ${
                        darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                      }`}
                    />
                    <span className="ml-2">/hr</span>
                  </div>
                </div>
              </div>
            )}

            {budgetType === "fixed" && (
              <div className="mb-10">
                <label className="block font-semibold">
                  What is the best cost estimate for your project?
                </label>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                  }`}
                >
                  You can negotiate this cost and create milestones when you
                  chat with your freelancer.
                </p>

                <div className="relative w-full sm:w-40">
                  <input
                    type="text"
                    value={fixedPrice}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d*\.?\d*$/.test(val)) {
                        if (val === "" || parseFloat(val) > 0) {
                          setFixedPrice(val);
                        }
                      }
                    }}
                    className={`w-full bg-transparent rounded px-3 py-2 pr-8 outline-none focus:border-[#E66D3D] ${
                      darkMode
                        ? "border border-[#E9E9E9]"
                        : "border border-[#555555]"
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    $
                  </span>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 w-full">
              <button
                className="w-full sm:w-auto border border-[#E66D3D] font-[600] px-6 py-2 rounded-md"
                onClick={() => navigate("/longTermJob03")}
              >
                Back
              </button>
              <button
                className="w-full sm:w-auto bg-[#E66D3D] font-[600] text-white px-6 py-2 rounded-md"
                onClick={() => navigate("/longTermJob05")}
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
