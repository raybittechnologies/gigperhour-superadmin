import { AllContracts } from "../../components/ClientScreen/AllContracts";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const JobCardSkeleton = ({ darkMode }) => (
  <div className="md:-mx-6 -mx-3 md:px-6 px-3 py-4 border-b border-b-[#555555] space-y-2 animate-pulse">
    <div className="flex flex-wrap gap-4 justify-between items-start">
      {/* Title skeleton */}
      <div className="space-y-3 [@media(min-width:898px)]:w-1/2">
        <div
          className={`h-4 w-48 rounded ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
          }`}
        />
        <div
          className={`h-3 w-32 rounded ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
          }`}
        />
        <div
          className={`h-3 w-40 rounded ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
          }`}
        />
      </div>

      {/* Proposals/messages/hired skeleton */}
      <div className="space-y-2">
        <div
          className={`h-3 w-20 rounded ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
          }`}
        />
        <div
          className={`h-3 w-20 rounded ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
          }`}
        />
        <div
          className={`h-3 w-20 rounded ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
          }`}
        />
      </div>

      {/* Button skeleton */}
      <div
        className={`h-8 w-28 rounded ${
          darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
        }`}
      />

      {/* Ellipsis button skeleton */}
      <div
        className={`hidden [@media(min-width:913px)]:block h-8 w-8 rounded-full ${
          darkMode ? "bg-[#2a2a2a]" : "bg-gray-300"
        }`}
      />
    </div>
  </div>
);
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

export default function YourContracts() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("contracts");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/jobDashboard?tab=${tab}`);
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    setActiveTab(tab || "contracts");
  }, [searchParams]);

  useEffect(() => {
    // Simulate loading for 1.5s
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div>
      <div
        className={`min-h-screen flex flex-col ${
          darkMode ? "bg-black text-white" : " text-black"
        }`}
      >
        <NavBarUser changeMode={setDarkMode} role="client" />
        <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
          {/* Sidebar */}
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
          {/* Main Content */}
          <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
            <div className="space-y-6">
              <div className="md:p-6 px-3 py-6  border rounded-lg border-[#555555]">
                {/* Header */}

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
                    onClick={() => handleTabClick("contracts")}
                  >
                    All Contracts
                  </button>
                </div>
                {/* Search + Filter */}
                <div className="flex flex-wrap justify-between pb-4 gap-4">
                  <div className="flex items-center flex-wrap gap-4">
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

                    <div className="flex gap-2 items-center">
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

                  <div className="flex gap-3 flex-wrap">
                    <button className="border border-[#555555] px-6 rounded py-2 flex-shrink-0 [@media(max-width:490px)]:w-full">
                      Start Date
                    </button>
                    <button className="border border-[#555555] px-6 rounded py-2 flex-shrink-0 [@media(max-width:490px)]:w-full">
                      Descending
                    </button>
                  </div>
                </div>

                {/* Content Based on Active Tab */}
                {activeTab === "contracts" &&
                  (isLoading ? (
                    <>
                      <JobCardSkeleton darkMode={darkMode} />
                      <JobCardSkeleton darkMode={darkMode} />
                      <JobCardSkeleton darkMode={darkMode} />
                    </>
                  ) : (
                    <AllContracts contracts={contracts} darkMode={darkMode} />
                  ))}

                {/* {activeTab === "jobs" && (
                  <div>
                  
                    <p className="text-gray-500">All Jobs content goes here.</p>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
