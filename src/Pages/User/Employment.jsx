import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";

export default function Employment() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const shimmerBg = darkMode ? "bg-gray-700" : "bg-gray-300";

  const employmentData = [
    {
      id: 1,
      role: "UI UX Designer",
      company: "Raybit Technologies",
      startDate: "March 10, 2025",
      endDate: "March 15, 2025",
    },
    {
      id: 2,
      role: "Freelancer",
      company: "Self",
      startDate: "March 10, 2025",
      endDate: "March 15, 2025",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const ShimmerEmploymentCard = () => (
    <div className="relative flex justify-between items-center py-4">
      <div className="flex-1">
        <div className={`${shimmerBg} h-5 w-48 mb-3 rounded animate-pulse`} />
        <div className={`${shimmerBg} h-4 w-40 rounded animate-pulse`} />
      </div>
      <div className="flex gap-4 flex-shrink-0">
        <div className={`${shimmerBg} h-6 w-6 rounded-full animate-pulse`} />
        <div className={`${shimmerBg} h-6 w-6 rounded-full animate-pulse`} />
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
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
          <div className="border border-[#555555] rounded-lg pt-2 pb-4 sm:px-6 px-3 relative">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[22px] font-[400] mb-4">
                Employment History
              </h3>
              <button className="flex-shrink-0">
                <img src="src/assets/UserDashboard/plus-sig-circle.svg" />
              </button>
            </div>

            {/* Employment List */}
            {loading
              ? [...Array(2)].map((_, index) => (
                  <ShimmerEmploymentCard key={index} />
                ))
              : employmentData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative flex justify-between items-center ${
                      index === employmentData.length - 1 ? "pt-4" : "py-4"
                    }`}
                  >
                    {/* Line Between Data */}
                    {index !== 0 && (
                      <div className="absolute -top-2 -left-6 w-[calc(100%+48px)] border-b border-[#555555] last:border-none [@media(max-width:641px)]:-left-3 [@media(max-width:641px)]:w-[calc(100%+23px)]" />
                    )}

                    {/* Job Details */}
                    <div>
                      <p
                        className={`sm:text-[16px] text-[14px] font-semibold ${
                          darkMode ? "text-white" : "text-[#555555]"
                        }`}
                      >
                        {item.role}{" "}
                        <span
                          className={`${
                            darkMode ? "text-white" : "text-[#555555]"
                          }`}
                        >
                          | {item.company}
                        </span>
                      </p>
                      <p
                        className={`sm:text-[14px] text-[13px] mt-3 ${
                          darkMode ? "text-white" : "text-[#555555]"
                        }`}
                      >
                        {item.startDate} - {item.endDate}
                      </p>
                    </div>

                    {/* Action Icons */}
                    <div className="flex gap-4 flex-shrink-0">
                      <button className="text-[#E66D3D]">
                        <img src="src/assets/edit.svg" />
                      </button>
                      <button className="text-[#E66D3D]">
                        <img src="src/assets/UserDashboard/delete-circle.svg" />
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
