import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSidebar";
import { Link } from "react-router-dom";

const ContractsShimmer = () => (
  <div className="md:p-6 py-6 pl-6 pr-10 col-span-full md:ml-[220px] ml-[27px] flex-1 overflow-y-auto animate-pulse">
    <div className="h-6 bg-gray-300 rounded w-40 mb-6"></div>
    <div className="h-8 bg-gray-300 rounded w-64 mb-4"></div>
    <div className="h-6 bg-gray-300 rounded w-52 mb-6"></div>

    {[...Array(2)].map((_, idx) => (
      <div
        key={idx}
        className="border rounded-lg p-4 md:p-6 shadow-md mb-4 bg-white"
      >
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="flex gap-4 mb-3">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    ))}
  </div>
);

export default function ContractsActive() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading delay (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
    {
      id: 2,
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

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Sidebar (Left) */}
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

        {/* Content Section (Right) */}
        {loading ? (
          <ContractsShimmer />
        ) : (
          <div className="md:p-6 py-6 pl-6 pr-10 col-span-full md:ml-[220px] ml-[27px] flex-1 overflow-y-auto hide-scrollbar">
            <h3 className="text-lg md:text-xl font-[400]">My Contracts</h3>

            {/* Your content goes here */}
            <div className="pt-6 md:pt-8">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                <h1 className="text-lg md:text-xl font-semibold">
                  Active Contracts ({contractsData.length})
                </h1>
                <p className="text-base md:text-lg">
                  Earnings Available:{" "}
                  <span className="text-[#E66D3D]">{availableEarnings}</span>
                </p>
              </div>

              {/* Conditional Rendering */}
              {contractsData.length > 0 ? (
                contractsData.map((contract) => (
                  <div
                    key={contract.id}
                    className="border rounded-lg p-4 md:p-6 shadow-md mb-4 bg-white"
                  >
                    {/* Title & Top Buttons */}
                    <div className="flex flex-row justify-between gap-4">
                      <h4 className="text-base md:text-lg font-semibold text-[#333] mb-2 cursor-pointer underline">
                        {contract.title}
                      </h4>

                      <div className="flex items-center gap-3 md:gap-4">
                        {/* Desktop Main Button */}
                        {contract.status === "Active" ? (
                          <button className="hidden md:block border px-4 md:px-6 text-[#333333] py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition">
                            Timesheet
                          </button>
                        ) : (
                          <button className="hidden md:block border px-4 md:px-6 text-[#333333] py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition">
                            Propose New Contract
                          </button>
                        )}

                        {/* Options Button */}
                        <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                          •••
                        </button>
                      </div>
                    </div>

                    {/* Hired By and Status Info */}
                    <div className="text-sm mb-2 flex flex-col md:flex-row md:gap-[15vw] gap-2 mt-3">
                      <span className="font-[400] text-[#333333] cursor-pointer">
                        Hired by
                        <span className="text-[#E66D3D] ml-2">
                          {contract.hiredBy}
                        </span>
                      </span>

                      <div className="text-[#333333]">
                        {contract.status === "Active" ? (
                          <>
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                              <span className="text-white bg-[#95FF00] px-2 py-[2px] rounded-[3px] text-xs w-fit">
                                {contract.status}
                              </span>
                              <p className="text-sm">
                                <span className="underline">
                                  {contract.hoursWorked},{" "}
                                  {contract.earningsThisWeek}
                                </span>{" "}
                                this week
                              </p>
                            </div>
                            <p className="text-sm pt-1">
                              Rate: {contract.rate}, {contract.weeklyLimit}{" "}
                              weekly limit
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white bg-[#555555] px-2 py-[2px] rounded-[2px] text-xs w-fit">
                                {contract.status}
                              </span>
                              <span className="text-[#FCE15A]">
                                {"⭐".repeat(contract.rating)}
                              </span>
                              <span>{contract.rating}</span>
                            </div>
                            <p className="text-sm underline">
                              Rate: {contract.rate}
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Date Range */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                      <p className="text-sm text-gray-500">
                        {contract.startDate} - {contract.endDate}
                      </p>
                    </div>

                    {/* Mobile Main Button */}
                    <div className="flex flex-col items-center mt-3 md:hidden">
                      {contract.status === "Active" ? (
                        <button className="border px-6 text-[#333333] py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition mb-2 w-full max-w-xs">
                          Timesheet
                        </button>
                      ) : (
                        <button className="border px-6 text-[#333333] py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition mb-2 w-full max-w-xs">
                          Propose New Contract
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-5 border rounded-lg p-4 shadow-md mb-4 bg-white">
                  <h4 className="text-lg md:text-xl text-[#333333] font-[500] pb-2">
                    There are no active contracts.
                  </h4>
                  <p className="font-[400] text-[#333333] pb-4">
                    Contracts you’re actively working on will appear here
                  </p>
                  <button className="border text-white text-sm md:text-[14px] bg-[#E66D3D] font-[600] px-6 md:px-8 py-2 rounded-[5px]">
                    Search for new jobs
                  </button>
                </div>
              )}
            </div>

            {contractsData.length > 0 && (
              <div className="flex justify-center items-center mt-6 md:mt-7">
                <Link to="/contractHistory">
                  <button className="border border-[#E66D3D] font-[600] text-sm md:text-base px-6 md:px-8 py-2 rounded-[5px]">
                    View Active Contracts
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
