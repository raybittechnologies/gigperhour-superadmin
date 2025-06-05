import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import SecuritySettings from "../../components/SecuritySettings";
import MobileSidebar from "../../components/UserDashBoard/MobileSettings";

function SecuritySettingsShimmer({ darkMode }) {
  const shimmerClass = `animate-pulse rounded bg-gray-300 ${
    darkMode ? "bg-opacity-20" : "bg-opacity-50"
  }`;

  return (
    <div
      className={`border rounded-lg pl-3 [@media(min-width:1107px)]:pr-[100px] pr-3 pt-2 pb-6 space-y-6 ${
        darkMode ? "border-white" : "border-[#555555]"
      }`}
    >
      <div className={`${shimmerClass} h-6 w-1/3`} />

      {/* Change Password Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div className="flex-1 space-y-2">
          <div className={`${shimmerClass} h-4 w-40`} />
          <div className={`${shimmerClass} h-4 w-60`} />
        </div>
        <div className={`${shimmerClass} h-10 w-40 rounded-md`} />
      </div>

      {/* Google Login */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div className="flex-1 space-y-2">
          <div className={`${shimmerClass} h-4 w-40`} />
          <div className={`${shimmerClass} h-4 w-60`} />
        </div>
        <div className={`${shimmerClass} h-10 w-40 rounded-md`} />
      </div>

      {/* Apple Login */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div className="flex-1 space-y-2">
          <div className={`${shimmerClass} h-4 w-40`} />
          <div className={`${shimmerClass} h-4 w-60`} />
        </div>
        <div className={`${shimmerClass} h-10 w-40 rounded-md`} />
      </div>

      {/* Two-Step Verification */}
      <div className={`${shimmerClass} h-5 w-1/4`} />
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className="flex flex-row justify-between items-center gap-4 flex-wrap"
        >
          <div className="flex-1 space-y-2 min-w-0">
            <div className={`${shimmerClass} h-4 w-40`} />
            <div className={`${shimmerClass} h-4 w-60`} />
          </div>
          <div className={`${shimmerClass} h-6 w-11 rounded-full`} />
        </div>
      ))}
    </div>
  );
}
export default function Security() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} darkMode={darkMode} />
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
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          {isLoading ? (
            <SecuritySettingsShimmer darkMode={darkMode} />
          ) : (
            <SecuritySettings darkMode={darkMode} />
          )}
        </div>
      </div>
    </div>
  );
}
