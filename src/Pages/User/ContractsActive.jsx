import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import { Link } from "react-router-dom";
export default function ContractsActive() {
  const [darkMode, setDarkMode] = useState(false);
  const contractsData = [
    {
      id: 1,
      title: "Figma Design for Single Screen",
      hiredBy: "Basit Bashir",
      status: "Active",
      hoursWorked: "0:20 hrs",
      earningsThisWeek: "$3.33",
      rate: "$10.00/hr",
      weeklyLimit: "40 hrs",
      startDate: "March 10",
      endDate: "Present",
    },
  ];
  const availableEarnings = "$2344.98";
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
          <h3 className="text-xl font-[400]">My Contracts </h3>
          {/* Your content goes here */}
          <div className="pt-8">
            {/* Header Section */}
            <div className="flex justify-between  items-center mb-6">
              <h1 className="text-xl font-semibold">
                Active Contracts ({contractsData.length})
              </h1>
              <p className="text-lg">
                Earnings Available:{" "}
                <span className="text-[#E66D3D]">{availableEarnings}</span>
              </p>
            </div>

            {/* Conditional Rendering */}
            {contractsData.length > 0 ? (
              contractsData.map((contract) => (
                <div
                  key={contract.id}
                  className="border rounded-lg p-6 shadow-md mb-4 bg-white"
                >
                  <div className="flex justify-between">
                    {/* Title */}
                    <h4 className="text-lg font-semibold text-[#333] mb-2 cursor-pointer underline">
                      {contract.title}
                    </h4>
                    <div className="flex items-center gap-4">
                      <button className="border px-6 text-[#333333] py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition">
                        Timesheet
                      </button>
                      <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                        •••
                      </button>
                    </div>
                  </div>

                  {/* Hired By */}
                  <p className="text-sm mb-2 flex gap-[15vw]">
                    <span className="font-[400] text-[#333333] cursor-pointer">
                      Hired by
                      <span className="text-[#E66D3D] ml-2">
                        {contract.hiredBy}
                      </span>
                    </span>
                    {/* Status and Info */}
                    <div className="gap mb-4 text-[#333333]">
                      <div className="flex items-center gap-2 ">
                        <span className="text-white bg-[#95FF00] px-2 py-[2px] rounded-[3px] text-xs">
                          {contract.status}
                        </span>
                        <p className="text-sm">
                          <span className="underline">
                            {contract.hoursWorked}, {contract.earningsThisWeek}
                          </span>{" "}
                          this week
                        </p>
                      </div>
                      <p className="text-sm text-[24px]">
                        Rate: {contract.rate}, {contract.weeklyLimit} weekly
                        limit
                      </p>
                    </div>
                  </p>

                  {/* Date and Actions */}
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      {contract.startDate} - {contract.endDate}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-5 border rounded-lg p-2 shadow-md mb-4 bg-white">
                <h4 className="text-xl text-[#333333] font-[500] pb-2">
                  There are no active contracts.
                </h4>
                <p className="font-[400]  text-[#333333] pb-4">
                  Contracts you’re actively working on will appear here
                </p>
                <button className="border text-white text-[14px] bg-[#E66D3D] font-[600] px-8 py-2 rounded-[5px]">
                  Search for new jobs
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center mt-7 ">
            <Link to="/contractHistory">
              <button className="border border-[#E66D3D] font-[600] px-8 py-2 rounded-[5px]">
                View Active Contracts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
