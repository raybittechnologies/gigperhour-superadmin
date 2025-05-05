import { AllContracts } from "../../components/ClientScreen/AllContracts";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/jobDashboard?tab=${tab}`);
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    setActiveTab(tab || "contracts");
  }, [searchParams]);

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
          <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10">
            <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
              <SideBar />
            </div>
          </div>
          {/* Main Content */}
          <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
            <div className="space-y-6">
              <div className="p-6 border rounded-lg border-[#555555]">
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

                  <>
                    <button className=" border border-[#555555] px-6  rounded">
                      Start Date
                    </button>
                    <button className=" border border-[#555555] px-6  rounded">
                      Decending
                    </button>
                  </>
                </div>

                {/* Content Based on Active Tab */}
                {activeTab === "contracts" && (
                  <AllContracts contracts={contracts} darkMode={darkMode} />
                )}

                {activeTab === "jobs" && (
                  <div>
                    {/* Replace this with your actual AllJobs component */}
                    <p className="text-gray-500">All Jobs content goes here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
