import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/SettingSidebar";
import MobileSidebar from "../../components/ClientScreen/MobileSetting";
import NotificationForm from "../../components/NotificationForm";
function NotificationFormShimmer({ darkMode }) {
  const shimmer = `animate-pulse rounded bg-gray-300 ${
    darkMode ? "bg-opacity-20" : "bg-opacity-50"
  }`;

  const renderSelectShimmer = () => (
    <div className="flex flex-col h-full justify-start">
      <div className={`${shimmer} h-4 w-40 mb-2`} />
      <div className={`${shimmer} h-10 w-full`} />
    </div>
  );

  return (
    <div
      className={`border rounded-lg px-4 sm:px-5 pt-2 pb-6 space-y-6 ${
        darkMode ? "border-white" : "border-[#555555]"
      }`}
    >
      {/* Title */}
      <div className={`${shimmer} h-6 w-1/3`} />

      {/* Messages Section */}
      <div className={`${shimmer} h-5 w-28`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {renderSelectShimmer()}
        {renderSelectShimmer()}
        {renderSelectShimmer()}
        {renderSelectShimmer()}
      </div>

      {/* Email Updates Section */}
      <div className={`${shimmer} h-5 w-28`} />
      <div className={`${shimmer} h-4 w-48`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {renderSelectShimmer()}
        {renderSelectShimmer()}
        {renderSelectShimmer()}
        {renderSelectShimmer()}
      </div>

      {/* Tax Updates Section */}
      <div className={`${shimmer} h-5 w-28`} />
      <div className="mt-2 flex items-start sm:items-center gap-3">
        <div className={`${shimmer} h-5 w-5 rounded`} />
        <div className={`${shimmer} h-4 w-72`} />
      </div>
    </div>
  );
}
export default function Notification() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`min-h-screen flex flex-col ${
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

        <div className="md:ml-[220px] ml-[70px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          {isLoading ? (
            <NotificationFormShimmer darkMode={darkMode} />
          ) : (
            <NotificationForm darkMode={darkMode} />
          )}
        </div>
      </div>
    </div>
  );
}
