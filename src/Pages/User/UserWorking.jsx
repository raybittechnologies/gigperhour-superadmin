import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";

const dummyData = {
  hoursPerWeek: "More than 30 hrs/week",
  contractType: "Open to Contract to hire",
  hourlyRate: "$10.00",
};

export default function UserWorking() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      {/* Navbar with Dark Mode Toggle */}
      <NavBarUser changeMode={setDarkMode} />

      {/* Main Layout with Sidebar */}
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        {/* Sidebar (Left) */}
        <SideBar />

        {/* Content Section (Right) */}
        <div className="container mx-auto pl-6 pb-6 pr-6 col-span-10">
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
        </div>
      </div>
    </div>
  );
}
