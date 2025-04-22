import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState } from "react";
import { AllContracts } from "../../components/ClientScreen/AllContracts";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const jobData = [
  {
    proposals: 0,
    messages: 0,
    hired: 0,
    action: "View Contracts",
  },
  {
    proposals: 11,
    messages: 6,
    hired: 1,
    action: "Reuse Posting",
  },
  {
    proposals: 20,
    messages: 10,
    hired: 1,
    action: "Reuse Posting",
  },
];

const contracts = [
  {
    name: "Basit Bashir",
    title: "Figma Design for Single Screen",
    date: "Mon, 13 Mar 25",
    time: "11:07 AM",
    rating: 5,
    rate: "$9.00/hr",
    weeklyLimit: "40 hrs weekly limit",
    dateRange: "March 10, 2025 – March 15, 2025",
    avatar: "src/assets/profileImage.jpeg",
    showBudget: false,
  },
  {
    name: "Basit Bashir",
    title: "Figma Design for Single Screen",
    date: "Mon, 13 Mar 25",
    time: "11:07 AM",
    rating: 5,
    rate: "$9.00/hr",
    weeklyLimit: "40 hrs weekly limit",
    dateRange: "March 10, 2025 – March 15, 2025",
    avatar: "src/assets/profileImage.jpeg",
    showBudget: false,
  },
  {
    name: "Basit Bashir",
    title: "Figma Design for Single Screen",
    date: "Mon, 13 Mar 25",
    time: "11:07 AM",
    rating: 4,
    budget: "$9.00 Budget",
    dateRange: "March 10, 2025 – March 15, 2025",
    avatar: "src/assets/profileImage.jpeg",
    showBudget: true,
  },
];

export default function JobDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.state?.activeTab || "jobs" // Initialize with route state
  );
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/jobDashboard?tab=${tab}`);
  };
  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {" "}
        {/* 64px if NavBarUser is 64px high */}
        {/* Sidebar */}
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10 ">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Main Content */}
        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div className="space-y-6">
            <div className="p-6 border rounded-lg border-[#555555]">
              {/* Header */}
              <div className="flex justify-between items-center pb-7">
                <h1 className="text-2xl font-[400]">All Job Posts</h1>
              </div>

              {/* Tabs */}
              <div className="flex space-x-4 pb-6">
                <button
                  className={`font-semibold border-b-[1.5px] ${
                    activeTab === "jobs"
                      ? darkMode
                        ? "border-[#E9E9E9]"
                        : "border-[#555555] text-[#555555]"
                      : "border-transparent"
                  }`}
                  onClick={() => handleTabClick("jobs")}
                >
                  All Jobs
                </button>

                <button
                  className={`font-semibold border-b-[1.5px] ${
                    activeTab === "contracts"
                      ? darkMode
                        ? "border-[#E9E9E9]"
                        : "border-[#555555] text-[#555555]"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("contracts")}
                >
                  All Contracts
                </button>
              </div>

              {/* Search + Filter */}
              <div className="flex justify-between pb-4">
                <div className="flex items-center">
                  <div className="relative w-[40vw]">
                    <img
                      src={
                        darkMode
                          ? "src/assets/search-dark.svg"
                          : "src/assets/search-01.svg"
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                    />
                    <input
                      type="text"
                      placeholder="Search for jobs"
                      className={`w-full bg-transparent rounded pl-10 pr-3 py-2 focus:outline-none ${
                        darkMode
                          ? "border border-[#E9E9E9]"
                          : "border border-[#555555]"
                      }`}
                    />
                  </div>
                  <div className="flex gap-4 items-center ml-10">
                    <img
                      src={
                        darkMode
                          ? "src/assets/clientscreen/filter-horizontal-dark.svg"
                          : "src/assets/clientscreen/filter-horizontal.svg"
                      }
                    />
                    <p>Filter</p>
                  </div>
                </div>

                {activeTab === "jobs" ? (
                  <button className="bg-[#E66D3D] text-white px-4 py-2 rounded">
                    + Post a Job
                  </button>
                ) : (
                  <>
                    <button className=" border border-[#555555] px-6  rounded">
                      Start Date
                    </button>
                    <button className=" border border-[#555555] px-6  rounded">
                      Decending
                    </button>
                  </>
                )}
              </div>

              {/* Content Based on Active Tab */}
              {activeTab === "jobs" ? (
                jobData.map((job, index) => (
                  <div
                    key={index}
                    className="-mx-6 px-6 py-4 border-b border-b-[#555555] space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-3 w-1/2">
                        <a href="#" className="font-semibold underline">
                          Figma Design for Single Screen
                        </a>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                          }`}
                        >
                          Created 1 hour ago by You
                        </p>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                          }`}
                        >
                          Created on March 10, 2025
                        </p>
                      </div>
                      <div className="text-sm space-y-3">
                        <p>{job.proposals} Proposals</p>
                        <p>{job.messages} Messages</p>
                        <p>{job.hired} Hired</p>
                      </div>
                      <button className="border px-4 py-1 rounded border-[#E66D3D]">
                        {job.action}
                      </button>
                      <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                        •••
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <AllContracts contracts={contracts} darkMode={darkMode} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
