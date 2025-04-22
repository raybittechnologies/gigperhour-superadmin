import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TimeSheet02() {
  const [darkMode, setDarkMode] = useState(false);
  const tabs = ["Overview", "TimeSheet", "Messages", "Contract Details"];
  const [activeTab, setActiveTab] = useState("TimeSheet");
  const location = useLocation();
  const entry = location.state?.entry;
  const data = entry;

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // ✅ Store the backend date in state
  const [backendDate] = useState(new Date("2012-11-01")); // Example: coming from backend

  const selectedRange = { start: 1, end: 3 };
  const secondRange = { start: 4, end: 7 };

  const [monthData, setMonthData] = useState({
    daysInMonth: 0,
    paddingDays: 0,
    year: 0,
    monthName: "",
  });

  useEffect(() => {
    const year = backendDate.getFullYear();
    const month = backendDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const paddingDays = (firstDay + 6) % 7;

    setMonthData({
      daysInMonth,
      paddingDays,
      year,
      monthName: backendDate.toLocaleString("default", { month: "short" }),
    });
  }, [backendDate]);

  const isInRange = (day, range) => day >= range.start && day <= range.end;

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
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
            {/* Header */}
            <div className="bg-[#FFCBC6] pl-4 pr-4 pt-4 pb-2 rounded-lg mb-6">
              <div className="flex justify-between">
                <div className="flex gap-10">
                  <div className="flex items-center">
                    <img
                      src="src/assets/profileImage.jpeg"
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-[14px] font-[400] text-[#333333]">
                        {data.freelancer}
                      </h3>
                      <p className="text-sm text-gray-600">India - 11:07 AM</p>
                    </div>
                  </div>
                  <h3 className=" text-[22px] font-[400] ml-6 text-[#333333]">
                    Figma Design for Single Screen
                  </h3>
                </div>

                <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100 mr-6">
                  •••
                </button>
              </div>

              <div className="flex space-x-6 mt-9 text-[#333333]">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab === tab
                        ? "text-[#E66D3D] border-b-2 border-[#E66D3D]"
                        : ""
                    } pb-2`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 gap-4 border-[#555555] border rounded-md p-4 mt-4 text-sm">
              <div>
                <p>Earnings this week</p>
                <p className="pt-2 font-[600]">$10.00</p>
              </div>
              <div>
                <p>This Week</p>
                <p className="pt-2 font-[600]">
                  10.00 <br />
                  <span className="text-xs font-[400] text-[#555555]">
                    of 30hrs weekly limit
                  </span>
                </p>
              </div>
              <div>
                <p>Last Week</p>
                <p className="pt-2 font-[600]">10.00 hrs</p>
              </div>
              <div>
                <p>Since Start</p>
                <p className="pt-2 font-[600]">10.00 hrs</p>
              </div>
            </div>

            {/* Calendar + Work Diary */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="flex justify-center items-center mb-4">
                  <p className="text-base font-semibold text-black">
                    {monthData.monthName} {monthData.year}
                  </p>
                </div>

                <div className="grid grid-cols-7 gap-2 text-xs text-center mb-1">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="font-semibold text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1 text-sm text-center">
                  {Array.from({ length: monthData.paddingDays }).map((_, i) => (
                    <div key={`pad-${i}`} className="text-gray-300"></div>
                  ))}

                  {Array.from({ length: monthData.daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const inFirstRange = isInRange(day, selectedRange);
                    const inSecondRange = isInRange(day, secondRange);
                    const isStart =
                      day === selectedRange.start || day === secondRange.start;
                    const isEnd =
                      day === selectedRange.end || day === secondRange.end;

                    return (
                      <div
                        key={day}
                        className={`w-8 h-8 flex items-center justify-center relative
                          ${
                            inFirstRange || inSecondRange
                              ? "bg-gray-300 text-black"
                              : "hover:bg-gray-100"
                          }
                          ${isStart ? "rounded-l-full" : ""}
                          ${isEnd ? "rounded-r-full" : ""}
                          ${isStart || isEnd ? "border border-gray-400" : ""}
                        `}
                      >
                        {day}
                        {day === 1 && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full mt-1"></span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Work Diary Summary */}
              <div className="p-4 text-sm text-gray-700">
                <h3 className="text-lg font-semibold mb-4">Work Diary</h3>
                <div className="flex justify-between mt-4 text-sm">
                  <div className="flex items-start gap-1">
                    <span className="w-3 h-3 bg-green-400 rounded-full mt-1"></span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium">Tracked</span>
                      <span className="text-xs text-gray-600">5:00 hrs</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full mt-1"></span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium">Manual</span>
                      <span className="text-xs text-gray-600">2:30 hrs</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1">
                    <span className="w-3 h-3 bg-red-400 rounded-full mt-1"></span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium">Overtime</span>
                      <span className="text-xs text-gray-600">1:15 hrs</span>
                    </div>
                  </div>
                </div>

                <div className="border text-left border-[#555555] py-2 px-3 mt-4 w-[14vw] rounded-lg">
                  <p className="text-sm font-medium pb-2">Total amount</p>
                  <p className="text-[#E66D3D] font-medium text-xl pb-2">
                    $21.00
                  </p>
                  <p>5:00 hrs @ $10.00/hr</p>
                </div>
              </div>
            </div>

            {/* Week Breakdown */}
            <div className=" px-4 space-y-4  mt-6 text-sm">
              <h4 className="font-semibold mb-2">1 Jan - 7 Jan</h4>
              <div className="flex justify-between border border-b-[#555555] pb-5 items-center mb-2">
                <p className="">1 Friday</p>
                <div className="flex-1 mx-4 h-2 bg-[#95FF00] "></div>
                <p>2:00 hrs</p>
              </div>
              {["2 Saturday", "3 Sunday"].map((day, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border border-b-[#555555] pb-5  items-center mb-2"
                >
                  <p>{day}</p>
                  <div className="flex-1 mx-4 h-2 bg-[#959494] "></div>
                  <p>0:00 hrs</p>
                </div>
              ))}
            </div>

            {/* Transactions */}
            <p className="mt-6">Recent Transactions</p>
            <div className="bg-white mt-1 p-4 flex justify-between shadow w-[60vw] text-sm text-center">
              <div>
                <p className="font-medium">Last 7 days</p>
                <p className="text-black">$10.00</p>
              </div>
              <div>
                <p className="font-medium">Last 30 days</p>
                <p className="text-black">$0.00</p>
              </div>
              <div>
                <p className="font-medium">Since Start</p>
                <p className="text-black">$300.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
