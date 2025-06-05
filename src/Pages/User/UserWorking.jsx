import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";

const dummyData = {
  hoursPerWeek: "More than 30 hrs/week",
  contractType: "Open to Contract to hire",
  hourlyRate: "$10.00",
};

function ShimmerWorking({ darkMode }) {
  const shimmerBg = darkMode ? "bg-[#333]" : "bg-[#e2e2e2]";

  return (
    <div className="space-y-10 animate-pulse">
      {/* Hours per week section shimmer */}
      <div
        className={`py-2 px-3 rounded-md border-[0.5px] ${
          darkMode
            ? "bg-transparent border-[#E9E9E9]"
            : "bg-transparent border-[#555555]"
        }`}
      >
        <div className={`h-6 w-48 rounded ${shimmerBg} mb-3`} />
        <div className="space-y-2">
          <div className={`h-4 w-40 rounded ${shimmerBg}`} />
          <div className={`h-4 w-56 rounded ${shimmerBg}`} />
        </div>
      </div>

      {/* Hourly price section shimmer */}
      <div
        className={`py-2 px-3 rounded-md ${
          darkMode
            ? "bg-transparent border-[#E9E9E9]"
            : "bg-transparent border-[#555555]"
        }`}
      >
        <div className={`h-6 w-32 rounded ${shimmerBg} mb-3`} />
        <div className="flex items-center gap-2">
          <div className={`h-8 w-24 rounded ${shimmerBg}`} />
          <div className={`h-6 w-6 rounded ${shimmerBg}`} />
        </div>
        <div className={`h-4 w-20 rounded ${shimmerBg} mt-2`} />
      </div>
    </div>
  );
}

export default function UserWorking() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      {/* Navbar with Dark Mode Toggle */}
      <NavBarUser changeMode={setDarkMode} />

      {/* Main Layout with Sidebar */}
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Desktop Sidebar */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10">
          <div className="block h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        {/* Content Section (Right) */}
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          {loading ? (
            <ShimmerWorking darkMode={darkMode} />
          ) : (
            <>
              {/* Hourly Section */}
              <div
                className={`py-2 pr-6 pl-3 rounded-md border-[0.5px] ${
                  darkMode
                    ? "bg-transparent border-[#E9E9E9]"
                    : "bg-transparent border-[#555555]"
                }`}
              >
                <h3 className="text-xl font-inter font-[400] flex justify-between items-center gap-2">
                  Hours per week{" "}
                  <img
                    src="src/assets/edit.svg"
                    className="w-[20px] h-[20px] ml-[10px]"
                    alt="Edit"
                  />
                </h3>
                <div className="mt-3 gap-2">
                  <p className="text-sm">{dummyData.hoursPerWeek}</p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-white" : "text-[#555555]"
                    }`}
                  >
                    {dummyData.contractType}
                  </p>
                </div>
              </div>

              {/* Hourly Price Section */}
              <div className="mt-6">
                <h3 className="text-xl font-inter font-[400]">Hourly price</h3>
                <div className="mt-3 gap-2">
                  <h3 className="text-[20px] flex items-center gap-2">
                    {dummyData.hourlyRate}
                    <img
                      src="src/assets/edit.svg"
                      className="w-[20px] h-[20px] ml-[10px]"
                      alt="Edit"
                    />
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-white" : "text-[#555555]"
                    }`}
                  >
                    Hourly Rate
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
