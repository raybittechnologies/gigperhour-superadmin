import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";

export default function ContractDetails() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      {/* Navbar */}
      <NavBarUser changeMode={setDarkMode} />

      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="col-span-10 pl-6">
          <h3 className="text-xl font-semibold">All Contracts</h3>
        </div>
      </div>
    </div>
  );
}
