import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";
import { FaRegShareFromSquare } from "react-icons/fa6";

function ShimmerProfile() {
  return (
    <div className="animate-pulse p-4 md:p-6 border border-[#555555] rounded-[8px] space-y-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-16 w-16" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-48" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-64" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32" />
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-40" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
// Dummy data
const userData = {
  name: "Basit Bashir",
  location: "Srinagar, India",
  localTime: "3:09 PM",
  jobSuccess: "100%",
  totalEarnings: "$3.7k+",
  totalJobs: 7,
  totalHours: 127,
  connects: 18,
  hiringStatus: "Off",
  boostStatus: "Off",
};

export default function UserProfile() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate data fetch
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          {loading ? (
            <ShimmerProfile />
          ) : (
            <div className="p-4 md:p-6 border border-[#555555] rounded-[8px]">
              {/* Header Section */}
              <div className="md:block hidden">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="relative">
                      <img
                        src="src/assets/profileImage.jpeg"
                        alt="Profile"
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="absolute -bottom-1 -right-1 p-1 rounded-full">
                        <img
                          src="src/assets/UserDashboard/plus-sig-circle.svg"
                          alt="Add"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>

                    {/* User Info */}
                    <div>
                      <h3 className="text-xl font-[400]">{userData.name}</h3>
                      <p
                        className={`flex gap-1 items-start sm:items-center flex-wrap ${
                          darkMode ? "text-white" : "text-[#555555]"
                        }`}
                      >
                        <img
                          src={
                            darkMode
                              ? "src/assets/location-dark.svg"
                              : "src/assets/location-add-02.svg"
                          }
                          className="w-[20px] h-[20px] mt-1"
                          alt="Location Icon"
                        />
                        {userData.location} - {userData.localTime} <br /> local
                        time.
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-[60px] w-full sm:w-auto mt-4 lg:mt-0">
                    <button className="text-[#E66D3D] font-[600] flex items-center gap-1 justify-center">
                      Share{" "}
                      <span>
                        <FaRegShareFromSquare className="w-5 h-5 text-[#E66D3D]" />
                      </span>
                    </button>
                    <button className="bg-[#E66D3D] font-[600] text-white px-6 py-2 rounded text-center">
                      Profile Settings
                    </button>
                  </div>
                </div>
                {/* Public View and Job Success */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
                  <p
                    className={`flex gap-2 ${
                      darkMode ? "text-white" : "text-[#555555]"
                    }`}
                  >
                    <img src="src/assets/UserDashboard/crown.svg" />
                    {userData.jobSuccess} Job Success
                  </p>
                  <button className="border-[#E66D3D] border font-[600] px-6 py-2 rounded w-full sm:w-auto text-center">
                    Public View
                  </button>
                </div>
              </div>
              {/* header mobile */}
              <div className="md:hidden p-4  relative">
                {/* Share Icon */}
                <button className="absolute top-4 right-4 text-[#E66D3D] font-semibold text-sm flex items-center gap-1">
                  Share{" "}
                  <FaRegShareFromSquare className="w-5 h-5 text-[#E66D3D]" />
                </button>

                {/* Profile Image + Name + Location */}
                <div className="flex flex-col items-start gap-3">
                  <div className="relative">
                    <img
                      src="src/assets/profileImage.jpeg"
                      alt="Profile"
                      className="w-14 h-14 rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-full">
                      <img
                        src="src/assets/UserDashboard/plus-sig-circle.svg"
                        alt="Add"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold">{userData.name}</h3>
                    <p className="flex items-center gap-2 text-sm  flex-row">
                      <img
                        src={
                          darkMode
                            ? "src/assets/location-dark.svg"
                            : "src/assets/location-add-02.svg"
                        }
                        className="w-4 h-4"
                        alt="Location Icon"
                      />
                      {userData.location}, {userData.localTime} local time.
                    </p>
                  </div>
                </div>

                {/* Job Success */}
                <div className="mt-3 flex items-center gap-2 text-sm ">
                  <img
                    src="src/assets/UserDashboard/crown.svg"
                    alt="Crown"
                    className="w-4 h-4"
                  />
                  {userData.jobSuccess} Job Success
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex  [@media(max-width:400px)]:flex-col gap-2 w-full">
                  <button className="w-full sm:flex-1 border border-[#E66D3D] text-[#E66D3D] font-semibold px-4 py-2 rounded text-sm">
                    Public Views
                  </button>
                  <button className="w-full sm:flex-1 bg-[#E66D3D] text-white font-semibold px-4 py-2 rounded text-sm">
                    Profile settings
                  </button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
                {/* Earnings Overview */}
                <div className="border border-[#555555] p-4 rounded">
                  <h3 className="font-[400] mb-2 text-[20px]">
                    Earnings Overview
                  </h3>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <h4 className="text-[#E66D3D] font-[500] text-[18px]">
                        {userData.totalEarnings}
                      </h4>
                      <p
                        className={`text-[14px] ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Total Earnings
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#E66D3D] font-[500] text-[18px]">
                        {userData.totalJobs}
                      </h4>
                      <p
                        className={`text-[14px] ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Total Jobs
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#E66D3D] font-[500] text-[18px]">
                        {userData.totalHours}
                      </h4>
                      <p
                        className={`text-[14px] ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Total Hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Promote with Ads */}
                <div className="bg-[#FCE15A] p-4 rounded">
                  <h4 className="font-semibold text-[17px] mb-2">
                    Promote with Ads
                  </h4>
                  <p className="mt-3 flex justify-between items-center flex-wrap">
                    Hiring Status
                    <span className="flex items-center gap-2">
                      {userData.hiringStatus}
                      <img
                        src={
                          darkMode
                            ? "src/assets/edit-dark.svg"
                            : "src/assets/edit-02.svg"
                        }
                        className="w-[16px] h-[16px]"
                        alt="Edit Icon"
                      />
                    </span>
                  </p>
                  <p className="mt-3 flex justify-between items-center flex-wrap">
                    Boost your profile
                    <span className="flex items-center gap-2">
                      {userData.boostStatus}
                      <img
                        src={
                          darkMode
                            ? "src/assets/edit-dark.svg"
                            : "src/assets/edit-02.svg"
                        }
                        className="w-[16px] h-[16px]"
                        alt="Edit Icon"
                      />
                    </span>
                  </p>
                </div>

                {/* Connects Section */}
                <div className="border border-[#555555] p-4 rounded">
                  <h4 className="font-[400] mb-2 text-[20px]">
                    Connects: {userData.connects}
                  </h4>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-4">
                    <a href="#" className="text-[#E66D3D] underline">
                      View details
                    </a>
                    <span className="hidden sm:block h-4 w-[1px] bg-[#E66D3D]"></span>
                    <a href="#" className="text-[#E66D3D] underline">
                      Buy Connects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
