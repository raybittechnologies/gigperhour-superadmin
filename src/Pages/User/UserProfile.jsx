import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";

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

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className="p-6 border border-[#555555] rounded-[8px]">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Profile Image */}
                  <img
                    src="src/assets/profileImage.jpeg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                  />
                  {/* Icon on the Border */}
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
                    className={`flex gap-1 ${
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
              <div className="flex gap-[60px] mt-[-20px]">
                <button className="text-[#E66D3D] font-[600] flex items-center gap-1">
                  Share{" "}
                  <span>
                    <img src="src/assets/UserDashboard/share-01.svg" />
                  </span>
                </button>
                <button className="bg-[#E66D3D] font-[600] text-white px-9 py-2 rounded">
                  Profile Settings
                </button>
              </div>
            </div>

            {/* Public View and Job Success */}
            <div className="flex justify-between items-center ">
              <p
                className={`flex gap-2 ${
                  darkMode ? "text-white" : "text-[#555555]"
                }`}
              >
                <img src="src/assets/UserDashboard/crown.svg" />
                {userData.jobSuccess} Job Success
              </p>
              <button className="border-[#E66D3D] border font-[600] px-[48px] py-2 rounded">
                Public View
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 mt-5 gap-4">
              {/* Earnings Overview */}
              <div className="border border-[#555555] p-2 rounded">
                <h3 className="font-[400] mb-2 text-[20px]">
                  Earnings Overview
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
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
              <div className="bg-[#FCE15A] pl-4 pr-4 pb-2 pt-2 rounded">
                <h4 className="font-semibold text-[17px] mb-2">
                  Promote with Ads
                </h4>
                <p className="mt-3 flex justify-between">
                  Hiring Status
                  <span className="flex gap-9">
                    {userData.hiringStatus}
                    <img
                      src={
                        darkMode
                          ? "src/assets/edit-dark.svg"
                          : "src/assets/edit-02.svg"
                      }
                      className="w-[16px] h-[16px] mt-1"
                      alt="Edit Icon"
                    />
                  </span>
                </p>
                <p className="mt-3 flex justify-between">
                  Boost your profile
                  <span className="flex gap-9">
                    {userData.boostStatus}
                    <img
                      src={
                        darkMode
                          ? "src/assets/edit-dark.svg"
                          : "src/assets/edit-02.svg"
                      }
                      className="w-[16px] h-[16px] mt-1"
                      alt="Edit Icon"
                    />
                  </span>
                </p>
              </div>

              {/* Connects Section */}
              <div className="border border-[#555555] pl-4 pr-4 pb-2 pt-2 rounded">
                <h4 className="font-[400] mb-2 text-[20px]">
                  Connects: {userData.connects}
                </h4>
                <div className="flex items-center gap-4 mt-7">
                  <a href="#" className="text-[#E66D3D] underline">
                    View details
                  </a>
                  <span className="h-4 w-[1px] bg-[#E66D3D]"></span>
                  <a href="#" className="text-[#E66D3D] underline">
                    Buy Connects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
