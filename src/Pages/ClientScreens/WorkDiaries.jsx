import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";

const workDiaryData = [
  {
    name: "Basit Bashir",
    title: "I need a designer for Landing Page",
    status: "Initializing Environment",
    duration: "0:10 hrs",
    screenshots: "1 screenshot, 8:31 AM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Basit Bashir",
    title: "I need a designer for Landing Page",
    status: "Initializing Environment",
    duration: "0:30 hrs",
    screenshots: "3 screenshot, 8:31 AM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Basit Bashir",
    title: "I need a designer for Landing Page",
    status: "Initializing Environment",
    duration: "0:50 hrs",
    screenshots: "5 screenshot, 8:31 AM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Basit Bashir",
    title: "I need a designer for Landing Page",
    status: "Initializing Environment",
    duration: "0:40 hrs",
    screenshots: "4 screenshot, 8:31 AM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Basit Bashir",
    title: "I need a designer for Landing Page",
    status: "Initializing Environment",
    duration: "0:10 hrs",
    screenshots: "1 screenshot, 8:31 AM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function WorkDiaries() {
  const [darkMode, setDarkMode] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Apr, 2025");

  const [talentOpen, setTalentOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState("All Talents");

  const [activityOpen, setActivityOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("All Activities");
  const [loading, setLoading] = useState(true);
  const months = [
    "Jan, 2025",
    "Feb, 2025",
    "Mar, 2025",
    "Apr, 2025",
    "May, 2025",
  ];
  const talents = [
    "All Talents",
    "Top Rated",
    "Recently Active",
    "New Talents",
  ];

  const activities = ["All Activities", "Messaged", "Interviewed", "Hired"];
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate 2s delay
    return () => clearTimeout(timer);
  }, []);

  const ShimmerCard = () => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#555555] pb-4 animate-pulse">
      <div className="flex items-center gap-3 min-w-[160px]">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div>
          <div className="h-3 w-40 bg-gray-300 rounded mb-1"></div>
          <div className="h-3 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>

      <div className="h-3 w-32 bg-gray-300 rounded min-w-[140px]"></div>

      <div className="min-w-[120px] text-right sm:text-left">
        <div className="h-3 w-20 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10 block md:hidden">
          <div className="h-full overflow-y-auto hide-scrollbar py-[20px]">
            <MobileSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={`rounded-lg border ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            } p-4 sm:p-6`}
          >
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
                All Work Diaries
              </h3>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 mb-6 relative z-10">
                {/* Month Dropdown */}
                <div className="relative w-full sm:w-[20vw] text-sm">
                  <div
                    onClick={() => setMonthOpen(!monthOpen)}
                    className="border border-[#555555] rounded lg:px-4 px-2 py-2 cursor-pointer flex justify-between items-center"
                  >
                    <span>{selectedMonth}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform ${
                        monthOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {monthOpen && (
                    <div className="absolute w-full bg-white border border-[#555555] rounded mt-1 shadow z-10 text-[#333333]">
                      {months.map((month) => (
                        <div
                          key={month}
                          onClick={() => {
                            setSelectedMonth(month);
                            setMonthOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white"
                        >
                          {month}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Talents Dropdown */}
                <div className="relative w-full sm:w-[20vw] text-sm">
                  <div
                    onClick={() => setTalentOpen(!talentOpen)}
                    className="border border-[#555555] rounded lg:px-4 px-2 py-2 cursor-pointer flex justify-between items-center"
                  >
                    <span>{selectedTalent}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform ${
                        talentOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {talentOpen && (
                    <div className="absolute w-full text-[#333333] bg-white border border-[#555555] rounded mt-1 shadow z-10">
                      {talents.map((talent) => (
                        <div
                          key={talent}
                          onClick={() => {
                            setSelectedTalent(talent);
                            setTalentOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white"
                        >
                          {talent}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Activities Dropdown */}
                <div className="relative w-full sm:w-[20vw] text-sm">
                  <div
                    onClick={() => setActivityOpen(!activityOpen)}
                    className="border border-[#555555] rounded lg:px-4 px-2 py-2 cursor-pointer flex justify-between items-center"
                  >
                    <span>{selectedActivity}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform ${
                        activityOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {activityOpen && (
                    <div className="absolute w-full text-[#333333] bg-white border border-[#555555] rounded mt-1 shadow z-10">
                      {activities.map((activity) => (
                        <div
                          key={activity}
                          onClick={() => {
                            setSelectedActivity(activity);
                            setActivityOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white"
                        >
                          {activity}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Diary Entries */}
              <div className="space-y-4">
                {loading
                  ? Array(5)
                      .fill()
                      .map((_, i) => <ShimmerCard key={i} />)
                  : workDiaryData.map((entry, index) => (
                      <div
                        key={index}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          index !== workDiaryData.length - 1
                            ? "border-b border-[#555555] pb-4"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-[160px]">
                          <img
                            src={entry.avatar}
                            alt={entry.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm text-[#E66D3D]">
                              {entry.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              {entry.name}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm min-w-[140px]">{entry.status}</p>

                        <div className="text-sm min-w-[120px] text-right sm:text-left">
                          <p>{entry.duration}</p>
                          <p>{entry.screenshots}</p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
