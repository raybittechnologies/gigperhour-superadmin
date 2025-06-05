import { useState, useEffect } from "react";

import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSettings";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const [contactInfo] = useState({
    userId: "bwy123nsv",
    name: "Basit Bashir",
    email: "BasitBashir@elevance.com",
  });

  const [locationInfo] = useState({
    timeZone: "UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi",
    address: "Srinagar, Srinagar, JK 191201 India",
    phone: "BasitBashir@elevance.com",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds shimmer

    return () => clearTimeout(timer);
  }, []);

  // Shimmer styles for loading placeholders
  const shimmer = `animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 
    ${darkMode ? "bg-gray-700" : "bg-gray-300"}`;

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
          <div className="">
            <div className="w-full space-y-6">
              {/* Contact Info */}
              <div
                className={`p-3 rounded-md border ${
                  darkMode
                    ? "border-[#E9E9E9] text-white"
                    : "border-[#555555] text-[#555555]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[22px] font-[400]">Contact info</h3>
                  {loading ? (
                    <div className={`w-6 h-6 rounded ${shimmer}`} />
                  ) : (
                    <img src="src/assets/edit.svg" alt="Edit" />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {[
                    contactInfo.userId,
                    contactInfo.name,
                    contactInfo.email,
                  ].map((value, idx) => (
                    <div key={idx}>
                      <label className="text-sm mb-1 block">
                        {idx === 0 ? "User ID" : idx === 1 ? "Name" : "Email"}
                      </label>
                      {loading ? (
                        <div
                          className={`w-full h-10 rounded ${shimmer}`}
                          aria-hidden="true"
                        />
                      ) : (
                        <input
                          type={idx === 2 ? "email" : "text"}
                          value={value}
                          readOnly
                          className={`w-full mt-1 border text-[13px] bg-transparent rounded-[5px] px-2 py-3 focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D] ${
                            darkMode
                              ? "border-[#E9E9E9] text-white"
                              : "border-[#555555] text-[#555555]"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  {loading ? (
                    <div className={`w-[200px] h-10 rounded ${shimmer}`} />
                  ) : (
                    <button className="w-[200px] bg-[#E66D3D] text-white py-2 rounded-[5px] font-semibold">
                      Close my account
                    </button>
                  )}
                </div>
              </div>

              {/* Location Info */}
              <div
                className={`p-3 rounded-md border ${
                  darkMode
                    ? "border-[#E9E9E9] text-white"
                    : "border-[#555555] text-[#555555]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-[22px] font-[400]">Location</h2>
                  {loading ? (
                    <div className={`w-6 h-6 rounded ${shimmer}`} />
                  ) : (
                    <img src="src/assets/edit.svg" alt="Edit" />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {[
                    locationInfo.timeZone,
                    locationInfo.address,
                    locationInfo.phone,
                  ].map((value, idx) => (
                    <div key={idx}>
                      <label className="text-sm mb-1 block">
                        {idx === 0
                          ? "Time Zone"
                          : idx === 1
                          ? "Address"
                          : "Phone"}
                      </label>
                      {loading ? (
                        <div
                          className={`w-full h-10 rounded ${shimmer}`}
                          aria-hidden="true"
                        />
                      ) : (
                        <input
                          type="text"
                          value={value}
                          readOnly
                          className={`w-full text-[13px] h-[42px] mt-1 border bg-transparent rounded-[5px] px-2
                            focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D]
                            ${
                              darkMode
                                ? "border-[#E9E9E9] text-white"
                                : "border-[#555555] text-[#555555]"
                            }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
