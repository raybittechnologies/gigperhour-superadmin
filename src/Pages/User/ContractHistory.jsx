import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSidebar";
import { Link } from "react-router-dom";
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
    rating: null,
  },
  {
    id: 2,
    title: "Figma Design for Single Screen",
    hiredBy: "Basit Bashir",
    status: "Ended",
    rate: "$9.00/hr",
    startDate: "March 10, 2025",
    endDate: "March 15, 2025",
    rating: 5.0,
  },
  {
    id: 3,
    title: "Figma Design for Single Screen",
    hiredBy: "Basit Bashir",
    status: "Ended",
    rate: "$9.00/hr",
    startDate: "March 10, 2025",
    endDate: "March 15, 2025",
    rating: 3.0,
  },
];
const shimmerContracts = Array.from({ length: 3 }).map((_, idx) => (
  <div
    key={idx}
    className="border-b border-[#555555] py-4 md:p-6 mb-4 space-y-4 animate-pulse"
  >
    <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
    <div className="flex justify-between gap-4">
      <div className="h-5 w-20 bg-gray-300 rounded"></div>
      <div className="h-5 w-16 bg-gray-300 rounded"></div>
    </div>
    <div className="text-sm mb-2 flex flex-col md:flex-row md:gap-[15vw] gap-2 mt-3">
      <div className="h-4 w-24 bg-gray-300 rounded"></div>
      <div className="h-4 w-32 bg-gray-300 rounded"></div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
      <div className="h-4 w-40 bg-gray-300 rounded"></div>
    </div>
    <div className="h-10 w-full max-w-xs bg-gray-300 rounded mt-3"></div>
  </div>
));

export default function ContractHistory() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
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
        <div className="md:p-6 py-6 pl-6 pr-10  col-span-full md:ml-[220px] ml-[27px] flex-1 overflow-y-auto hide-scrollbar">
          <h3 className="text-xl font-semibold">All Contracts</h3>

          {/* Search & Filter Container */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-5 items-start lg:items-center  mt-4">
            {/* Search Box */}
            <div className="relative w-full md:w-[40vw]">
              <input
                type="text"
                className={`w-full bg-transparent p-2 pl-12 border rounded focus:outline-none ${
                  darkMode
                    ? "text-white border-white focus:border-[#E66D3D]"
                    : "text-[#555555] border-[#333333] focus:border-[#E66D3D]"
                }`}
                placeholder="Search by contracts, clients or company name..."
              />
              <img
                src={
                  darkMode
                    ? "src/assets/search-dark.svg"
                    : "src/assets/search-01.svg"
                }
                alt="Search Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>

            {/* Filter and Sort */}
            <div className="flex gap-6 text-[#E66D3D] mt-2 lg:mt-0">
              <p className="flex items-center gap-1 cursor-pointer">
                <img
                  src="src/assets/UserDashboard/filter-horizontal.svg"
                  alt="Filter Icon"
                  className="w-[20px]"
                />
                Filter
              </p>
              <p className="flex items-center gap-1 cursor-pointer">
                <img
                  src="src/assets/UserDashboard/sorting-05.svg"
                  alt="Sort Icon"
                  className="w-[20px]"
                />
                Sort By
              </p>
            </div>
          </div>

          {loading
            ? shimmerContracts
            : contractsData.map((contract) => (
                <div
                  key={contract.id}
                  className="border-b border-[#555555] py-4 md:p-6  mb-4 "
                >
                  {/* Title & Top Buttons */}
                  <div className="flex flex-row justify-between gap-4">
                    <Link to="/contractDetails">
                      <h4 className="text-base md:text-lg font-semibold  mb-2 cursor-pointer underline">
                        {contract.title}
                      </h4>
                    </Link>

                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Desktop Main Button */}
                      {contract.status === "Active" ? (
                        <button className="hidden [@media(min-width:860px)]:block border px-4 md:px-6  py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition">
                          Timesheet
                        </button>
                      ) : (
                        <button className="hidden [@media(min-width:860px)]:block border px-4 md:px-6  py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition">
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
                    <span className="font-[400]  cursor-pointer">
                      Hired by
                      <span className="text-[#E66D3D] ml-2">
                        {contract.hiredBy}
                      </span>
                    </span>

                    <div className="">
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
                          <p className="text-sm pt-2">
                            Rate: {contract.rate}, {contract.weeklyLimit} weekly
                            limit
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
                    <p className="text-sm ">
                      {contract.startDate} - {contract.endDate}
                    </p>
                  </div>

                  {/* Mobile Main Button */}
                  <div className="flex flex-col items-center mt-3 [@media(min-width:860px)]:hidden">
                    {contract.status === "Active" ? (
                      <button className="border px-6  py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition mb-2 w-full max-w-xs">
                        Timesheet
                      </button>
                    ) : (
                      <button className="border px-6  py-2 rounded-md font-[600] border-[#E66D3D] hover:bg-[#E66D3D] hover:text-white transition mb-2 w-full max-w-xs">
                        Propose New Contract
                      </button>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
