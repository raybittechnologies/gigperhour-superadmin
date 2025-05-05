import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
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
  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`p-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-[400]">All Work Diaries</h3>
              {/* Filters */}
              <div className="flex justify-between mb-6">
                <select className="border border-[#555555] w-[20vw] bg-transparent rounded px-4 py-2 text-sm">
                  <option>Apr, 2025</option>
                </select>
                <select className="border border-[#555555] w-[20vw]  bg-transparent rounded px-4 py-2 text-sm">
                  <option>All Talents</option>
                </select>
                <select className="border border-[#555555]  w-[20vw] bg-transparent rounded px-4 py-2 text-sm">
                  <option>All Activities</option>
                </select>
              </div>

              {/* Entries */}
              <div className="space-y-4">
                {workDiaryData.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between ${
                      index !== workDiaryData.length - 1
                        ? "border-b border-b-[#555555]"
                        : ""
                    } pb-4`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={entry.avatar}
                        alt={entry.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm text-[#E66D3D]">{entry.title}</p>
                        <p className="text-sm text-gray-600">{entry.name}</p>
                      </div>
                    </div>
                    <p className="text-sm ">{entry.status}</p>
                    <div className="text-sm ">
                      <p className="">{entry.duration}</p>
                      <p className="">{entry.screenshots}</p>
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
