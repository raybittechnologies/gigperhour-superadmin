import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
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

export default function ContractHistory() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6 ">
          <h3 className="text-xl font-semibold">All Contracts</h3>

          {/* Search Box */}
          <div className="flex gap-5">
            <div className="relative w-[690px] my-4">
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

            <div className="flex my-6 gap-6 text-[#E66D3D]">
              <p className="flex gap-1">
                <img
                  src="src/assets/UserDashboard/filter-horizontal.svg "
                  alt="Filter Icon"
                  className="w-[20px] mt-[-4px]"
                />
                Filter
              </p>
              <p className="flex gap-1">
                <img
                  src="src/assets/UserDashboard/sorting-05.svg"
                  alt="Sort Icon"
                  className="w-[20px] mt-[-4px]"
                />
                Sort By
              </p>
            </div>
          </div>

          {contractsData.map((contract) => (
            <div
              key={contract.id}
              className="border-b border-[#555555]  p-6  mb-4"
            >
              <div className="flex justify-between">
                <Link to="/contractDetails">
                  <h4 className="text-lg font-semibold underline cursor-pointer">
                    {contract.title}
                  </h4>
                </Link>
                {contract.status === "Active" ? (
                  <div className="flex gap-4">
                    <button className="border border-[#E66D3D] px-4 py-2 rounded">
                      Timesheet
                    </button>
                    <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                      •••
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <button className="border border-[#E66D3D] px-4 py-2 rounded">
                      Propose New Contract
                    </button>
                    <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                      •••
                    </button>
                  </div>
                )}
              </div>

              <p className="text-sm flex gap-[15vw]">
                <span className="font-[400]  cursor-pointer">
                  Hired by
                  <span className="text-[#E66D3D] ml-2">
                    {contract.hiredBy}
                  </span>
                </span>
                <div>
                  {contract.status === "Active" ? (
                    <div className="flex items-center gap-2  ">
                      <div className="gap mb-4 ">
                        <div className="flex items-center gap-2 ">
                          <span className="text-white bg-[#95FF00] px-2 py-[2px] rounded-[3px] text-xs">
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
                        <p className="text-sm text-[24px]">
                          Rate: {contract.rate}, {contract.weeklyLimit} weekly
                          limit
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="gap mb-4 gap-2">
                      <div className="mb-2 ">
                        <span className="text-white bg-[#555555] px-2 py-1 mr-1 rounded-[2px] text-xs">
                          {contract.status}
                        </span>
                        <span className="text-[#FCE15A] mr-3">
                          {"⭐".repeat(contract.rating)}
                        </span>
                        <span>{contract.rating}</span>
                      </div>

                      <p className="text-sm underline ">
                        Rate: {contract.rate}
                      </p>
                    </div>
                  )}
                </div>
              </p>

              <p className="text-sm ">
                {contract.startDate} - {contract.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
