import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Messages from "../../components/ClientScreen/Messages";

export default function TimeSheet02() {
  const [darkMode, setDarkMode] = useState(false);
  const tabs = ["Overview", "TimeSheet", "Messages", "Contract Details"];
  const [activeTab, setActiveTab] = useState("TimeSheet");
  const location = useLocation();
  const entry = location.state?.entry;
  const dateString = location.state?.date;
  const data = entry;
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const rating = 3;
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const workDiaryData = {
    trackedHours: "5:00 hrs",
    manualHours: "0:00 hrs",
    overtimeHours: "0:00 hrs",
    totalAmount: "$21.00",
    rateInfo: "5:00 hrs @ $10.00/hr",
  };
  // Function to get the week range for a given date
  const getWeekRange = (dateString, monthData) => {
    if (!dateString) return { start: null, end: null };

    const date = new Date(dateString);
    const selectedDay = date.getDate();
    const selectedDayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Calculate start of week (Monday)
    const weekStart =
      selectedDay - (selectedDayOfWeek === 0 ? 6 : selectedDayOfWeek - 1);
    // Calculate end of week (Sunday)
    const weekEnd = weekStart + 6;

    // Adjust for month boundaries
    const adjustedStart = Math.max(weekStart, 1);
    const adjustedEnd = Math.min(weekEnd, monthData.daysInMonth);

    return { start: adjustedStart, end: adjustedEnd };
  };

  const [monthData, setMonthData] = useState({
    daysInMonth: 0,
    paddingDays: 0,
    year: 0,
    monthName: "",
  });

  // Calculate week range based on the passed date
  const weekRange = getWeekRange(dateString, monthData);

  useEffect(() => {
    // Use the passed date or fallback to current date
    const date = dateString ? new Date(dateString) : new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    // Adjust padding days to make Monday the first day of week
    const paddingDays = (firstDay + 6) % 7;

    setMonthData({
      daysInMonth,
      paddingDays,
      year,
      monthName: date.toLocaleString("default", { month: "short" }),
    });
  }, [dateString]);

  const isInRange = (day, range) =>
    range.start && range.end && day >= range.start && day <= range.end;

  // ----------Time sheet pop up --------------------------
  const [selectedDate, setSelectedDate] = useState(null);
  const isContractActive = true; // or false based on real status

  const handleDayClick = (day) => {
    const inRange = isInRange(day, weekRange);

    if (!isContractActive || !inRange) return; // Don't open popup if contract ended or day not in range

    const clickedDate = new Date(
      monthData.year,
      new Date(Date.parse(monthData.monthName + " 1, 2023")).getMonth(),
      day
    );
    const formattedClickedDate = clickedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    setSelectedDate(formattedClickedDate);
  };
  const statusColors = {
    green: "bg-[#95FF00]",
    yellow: "bg-[#FCE15A]",
    red: "bg-[#D84839]",
  };

  const workDiaryEntries = [
    {
      type: "tracked",
      timeRange: "11:20 AM - 11:30 AM (0:10 hrs)",
      description: "Initializing Environment",
      screenshots: [
        {
          time: "4:20 AM",
          image: "src/assets/UserDashboard/Portfolio Item Image.svg",
        },
      ],
    },
    {
      type: "manual",
      timeRange: "11:20 AM - 12:00 PM (0:40 hrs)",
      description: "Running Tests",
      screenshots: [
        {
          time: "11:20 AM",
          image: "src/assets/UserDashboard/Portfolio Item Image.svg",
        },
        {
          time: "11:40 AM",
          image: "src/assets/UserDashboard/Portfolio Item Image.svg",
        },
        {
          time: "11:40 AM",
          image: "src/assets/UserDashboard/Portfolio Item Image.svg",
        },
        {
          time: "12:00 PM",
          image: "src/assets/UserDashboard/Portfolio Item Image.svg",
        },
      ],
    },
  
  ];

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

        <div className="ml-[240px] flex-1 overflow-y-auto px-6 hide-scrollbar">
          <div
            className={`p-6  rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            {/* Header */}
            <div className="bg-[#FFCBC6] pl-4 pr-4 pt-4 pb-2 text-[#333333] rounded-lg mb-6">
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
                <div className="flex text-[#FCE15A] text-[25px] mt-[-2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < rating ? "★" : "☆"}</span>
                  ))}
                </div>

                <button className=" h-8 border border-[#E66D3D] px-8  rounded">
                  Rehire
                </button>

                <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center mr-6">
                  •••
                </button>
              </div>

              <div className="flex justify-between items-center ">
                <div className="flex space-x-6 mt-9 text-[#333333]">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`${
                        activeTab === tab
                          ? "text-[#E66D3D] border-b-2 border-[#E66D3D]"
                          : ""
                      } pb-1`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="mt-9">
                  <p>Completed on {formattedDate}</p>
                </div>
              </div>
            </div>
            {activeTab === "TimeSheet" && (
              <div>
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
                      <span
                        className={`text-xs font-[400] ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
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
                <div className="flex mt-6 gap-4">
                  {" "}
                  {/* Calendar */}
                  <div
                    className="bg-white text-[#333333] rounded-md p-4 shadow"
                    style={{ width: "26vw" }}
                  >
                    {/* Month + Year */}
                    <div className="flex justify-between  mb-4 px-2">
                      <div className="flex gap-2 items-center">
                        <p className="text-base font-semibold text-black">
                          {monthData.monthName} {monthData.year}
                        </p>
                        <IoIosArrowForward className="text-[#E66D3D]" />
                      </div>
                      <div className="flex  items-center">
                        <button className="flex  gap-4 items-center">
                          <IoIosArrowBack className="text-[#E66D3D]" />
                          <IoIosArrowForward className="text-[#E66D3D]" />
                        </button>
                      </div>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-2 text-xs text-center mb-1">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="font-semibold text-gray-500">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-0 text-sm text-center relative">
                      {/* Padding days */}
                      {Array.from({ length: monthData.paddingDays }).map(
                        (_, i) => (
                          <div
                            key={`pad-${i}`}
                            className="text-gray-300 h-8"
                          ></div>
                        )
                      )}

                      {/* Days of the Month */}
                      {Array.from({ length: monthData.daysInMonth }).map(
                        (_, i) => {
                          const day = i + 1;
                          const inRange = isInRange(day, weekRange);
                          const isStart = day === weekRange.start;
                          const isEnd = day === weekRange.end;

                          return (
                            <div
                              key={day}
                              className="relative w-full h-8 flex items-center justify-center"
                              onClick={() => handleDayClick(day)}
                            >
                              {/* Continuous background with rounded ends */}
                              {inRange && (
                                <div
                                  className={`
                absolute inset-y-0 
                ${isStart ? "left-0 rounded-l-full" : "left-0"} 
                ${isEnd ? "right-0 rounded-r-full" : "right-0"}
                bg-[#D9D9D9]
              `}
                                ></div>
                              )}

                              {/* Circular highlight overlay */}
                              {(isStart || isEnd) && (
                                <div className="absolute inset-0 rounded-full bg-[#E9E9E9] z-10"></div>
                              )}

                              <span
                                className={`relative z-20 ${
                                  isStart || isEnd ? "text-black" : ""
                                }`}
                              >
                                {day}
                              </span>

                              {/* Green dot on day 1 */}
                              {day === 1 && !inRange && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full mt-1 z-20"></span>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>

                    {/* Legend */}
                    <div className="flex justify-between mt-4 px-5 text-sm">
                      <div className="flex flex-col items-center gap-1">
                        <span className="w-4 h-4 bg-[#95FF00] rounded-full"></span>
                        <span className="text-[#555555] font-[400]">
                          Tracked
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="w-4 h-4 bg-[#FCE15A] rounded-full"></span>
                        <span className="text-[#555555] font-[400]">
                          Manual
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="w-4 h-4 bg-[#D84839] rounded-full"></span>
                        <span className="text-[#555555] font-[400]">
                          overtime
                        </span>
                      </div>
                    </div>
                  </div>
                  {selectedDate && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 px-[100px] flex items-center justify-center z-20">
                      <div className="bg-white w-[1200px]  text-[#333333] rounded-lg mt-[65px] shadow-lg relative p-5  pl-7 overflow-y-auto  hide-scrollbar h-[500px]">
                        {/* Header */}
                        <div className="flex justify-between items-start">
                          <h2 className="text-2xl ">{selectedDate}</h2>
                          <button
                            onClick={() => setSelectedDate(null)}
                            className="px-4 py-2  "
                          >
                            <img src="src\assets\UserDashboard\cancel-02.svg" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4 mt-2 border-b border-[#555555] pb-5">
                          {/* Contract Start Time */}
                          <p className="text-[#E66D3D] font-semibold mt-2">
                            Contract Started at 10:58 AM
                          </p>

                          {/* Summary */}
                          <div className="bg-[#E9E9E9] rounded-[5px]  w-full p-6  flex items-center justify-between">
                            <div className="grid grid-cols-5  gap-3  ">
                              <div className="">
                                <p className="mb-4 font-[600]">Total Time</p>
                                <div
                                  className={`w-20 h-20  bg-white rounded-full flex flex-col items-center justify-center text-lg font-[400]`}
                                >
                                  8:00hr
                                  <img
                                    src="src/assets/UserDashboard/clock-02.svg"
                                    alt="Clock"
                                    className="w-6 h-6 mt-1"
                                  />
                                </div>
                              </div>
                              {["Tracked Time", "Manual Time", "Over-Time"].map(
                                (label, index) => (
                                  <div key={index} className="text-center">
                                    <p className="mb-9 font-[600]">{label}</p>
                                    <div
                                      className={`w-4 h-4 ${
                                        statusColors[
                                          Object.keys(statusColors)[index]
                                        ]
                                      } rounded-full mx-auto mb-2`}
                                    ></div>
                                    <p>8:00hr</p>
                                  </div>
                                )
                              )}
                              <div className="flex items-center justify-center">
                                <select className="h-[45px] bg-transparent  border border-[#555555] rounded-lg  px-4 py-1">
                                  <option>UTC/12 hour</option>
                                  <option>UTC/24 hour</option>
                                  <option>Local Time</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Time Entries */}
                        <div className="mt-8 space-y-8">
                          {workDiaryEntries.map((entry, index) => (
                            <div
                              key={index}
                              className="border-b border-[#555555] pb-4"
                            >
                              {/* Time range with dot */}
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-3 h-3 rounded-full ${
                                    entry.type === "tracked"
                                      ? "bg-[#95FF00]"
                                      : entry.type === "overtime"
                                      ? "bg-[#D84839]"
                                      : entry.type === "manual"
                                      ? "bg-[#FCE15A]"
                                      : "bg-gray-300"
                                  }`}
                                ></span>
                                <p className="text-sm font-medium">
                                  {entry.timeRange}
                                </p>
                              </div>

                              {/* Description */}
                              <p className="text-gray-600 text-sm ml-6 mt-1">
                                {entry.description}
                              </p>

                              {/* Screenshots */}
                              <div className="flex items-center ml-6 mt-4 gap-4">
                                {entry.screenshots.map((screenshot, idx) => (
                                  <div
                                    key={idx}
                                    className="flex flex-col items-center"
                                  >
                                    <p className="text-sm">Screenshot</p>
                                    <img
                                      src={screenshot.image}
                                      alt="screenshot"
                                      className="rounded-lg w-[90px]"
                                    />
                                    <div className="flex gap-[2px] mt-1">
                                      {/* Green and Gray Bars */}
                                      <div className="w-2 h-1 bg-[#95FF00]"></div>
                                      <div className="w-2 h-1 bg-[#95FF00]"></div>
                                      <div className="w-2 h-1 bg-[#95FF00]"></div>
                                      <div className="w-2 h-1 bg-[#555555]"></div>
                                      <div className="w-2 h-1 bg-[#555555]"></div>
                                      <div className="w-2 h-1 bg-[#555555]"></div>
                                      <div className="w-2 h-1 bg-[#555555]"></div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">
                                      {screenshot.time}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Work Diary Summary */}
                  <div className="flex-1 p-4 text-sm">
                    <h3 className="text-lg font-semibold mb-4">Work Diary</h3>

                    <div className="flex gap-14 mt-4 text-sm">
                      <div className="flex items-start gap-1">
                        <span className="w-3 h-3 bg-[#95FF00] rounded-full mt-1"></span>
                        <div className="flex flex-col leading-tight">
                          <span className="text-sm">Tracked</span>
                          <span className="text-sm font-medium">
                            {workDiaryData.trackedHours}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-1">
                        <span className="w-3 h-3 bg-[#FCE15A] rounded-full mt-1"></span>
                        <div className="flex flex-col leading-tight">
                          <span className="text-sm">Manual</span>
                          <span className="text-sm font-medium">
                            {workDiaryData.manualHours}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-1">
                        <span className="w-3 h-3 bg-[#D84839] rounded-full mt-1"></span>
                        <div className="flex flex-col leading-tight">
                          <span className="text-sm">Overtime</span>
                          <span className="text-sm font-medium">
                            {workDiaryData.overtimeHours}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border text-left w-44 border-[#555555] py-2 px-3 mt-16 rounded-lg">
                      <p className="text-sm font-medium pb-2">Total amount</p>
                      <p className="text-[#E66D3D] font-medium text-xl pb-2">
                        {workDiaryData.totalAmount}
                      </p>
                      <p>{workDiaryData.rateInfo}</p>
                    </div>
                  </div>
                </div>

                {/* Week Breakdown */}
                <div className="px-4 space-y-4 mt-6 text-sm">
                  <h4 className="font-semibold mb-2">1 Jan - 7 Jan</h4>
                  <div className="flex justify-between border-b border-b-[#555555] pb-5 items-center mb-2">
                    <p>1 Friday</p>
                    <div className="flex-1 mx-4 h-2 bg-[#95FF00]"></div>
                    <p>2:00 hrs</p>
                  </div>

                  {["2 Saturday", "3 Sunday"].map((day, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between border-b border-[#555555] pb-5 items-center mb-2"
                    >
                      <p>{day}</p>
                      <div className="flex-1 mx-4 h-2 bg-[#959494] "></div>
                      <p>0:00 hrs</p>
                    </div>
                  ))}
                </div>

                {/* Transactions */}
                <p className="mt-6">Recent Transactions</p>
                <div className="bg-white mt-1 p-4 text-[#333333] flex justify-between shadow w-[60vw] text-sm text-center">
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
            )}

            {activeTab === "Contract Details" && (
              <div className="text-sm py-4">
                {/* Description and Details */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h2 className="font-semibold mb-2">Description</h2>
                    <p>
                      I have a Consulting Android App developed in Kotlin, need
                      a Developer who can integrate Chat System in my App, UI
                      implementation is required.
                    </p>
                    <div className="mt-2 text-[#E66D3D] space-y-1">
                      <p className="cursor-pointer underline">
                        View Original Job Posting
                      </p>
                      <p className="cursor-pointer underline">
                        View Original Proposals
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <h2 className="font-semibold mb-2">Details</h2>

                    <div className="border border-[#555555] rounded-lg p-4 text-sm">
                      <div className="grid grid-cols-2 gap-y-3">
                        <p
                          className={`text-${
                            darkMode ? "text-[#E9E9E9]" : "#555555"
                          }`}
                        >
                          Verified name
                        </p>
                        <p
                          className={`text-${
                            darkMode ? "text-[#E9E9E9]" : "#555555"
                          }`}
                        >
                          Basit Bashir
                        </p>

                        <p
                          className={`text-${
                            darkMode ? "text-[#E9E9E9]" : "#555555"
                          }`}
                        >
                          Hired by
                        </p>
                        <p
                          className={`text-${
                            darkMode ? "text-[#E9E9E9]" : "#555555"
                          }`}
                        >
                          Basit Bashir
                        </p>

                        <p
                          className={`text-${
                            darkMode ? "text-[#E9E9E9]" : "#555555"
                          }`}
                        >
                          Additional Terms
                        </p>
                        <p>
                          <span className="text-[#E66D3D] underline">
                            Escrow details
                          </span>
                        </p>

                        <p
                          className={`text-${
                            darkMode ? "text-[#E9E9E9]" : "#555555"
                          }`}
                        >
                          Contract ID
                        </p>
                        <p className="text-[#E66D3D]">65432876</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <h2 className="font-semibold mb-3 text-base">Summary</h2>
                <div className="  grid grid-cols-2 gap-4 ">
                  <div className="border border-[#555555]  rounded-md p-4 text-sm">
                    <div className="grid grid-cols-2 gap-y-2 space-y-4 text-sm">
                      {/* First Column: Left-Aligned Labels */}
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } mt-4`}
                      >
                        Verified name
                      </p>
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } text-right`}
                      >
                        Basit Bashir
                      </p>

                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        }`}
                      >
                        Rate
                      </p>
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } text-right`}
                      >
                        $5.00/hr
                      </p>

                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        }`}
                      >
                        Rate increase
                      </p>
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } text-right`}
                      >
                        5% every 3 months
                      </p>

                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        }`}
                      >
                        Total Spend
                      </p>
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } text-right`}
                      >
                        $25.83
                      </p>

                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        }`}
                      >
                        Start date
                      </p>
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } text-right`}
                      >
                        Mar 29, 2025
                      </p>

                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        }`}
                      >
                        Contact Person
                      </p>
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } text-right`}
                      >
                        Basit Bashir
                      </p>

                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        }`}
                      >
                        Contract-to-hire Opportunity
                      </p>
                      <p
                        className={`text-${
                          darkMode ? "text-[#E9E9E9]" : "#555555"
                        } text-right`}
                      >
                        No
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 rounded-md border border-[#555555]">
                    <div className="px-4 py-4 ">
                      <div className=" border-b border-[#555555]  ">
                        <p className="font-semibold mb-1">
                          Your feedback to Basit
                        </p>
                        <p className="text-yellow-500 mb-1">★★★★★ 5.0</p>
                        <p className="mb-5">
                          Working with Eeshan and his company has been an
                          exceptional experience. Their expertise in Android app
                          development is remarkable. Highly recommended for
                          their professionalism and quality work.
                        </p>
                      </div>
                    </div>
                    <div className=" px-4 rounded">
                      <p className="font-semibold ">Basit s feedback to you</p>
                      <p className="text-yellow-500 mb-1">★★★★★ 5.0</p>
                      <p>
                        Working with Eeshan and his company has been an
                        exceptional experience. Their expertise in Android app
                        development is remarkable. Highly recommended for their
                        professionalism and quality work.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <h2 className="font-semibold mt-6 mb-2">Recent Activity</h2>
                <div className="border border-[#555555] rounded-md p-4 mt-6">
                  <div className="space-y-5">
                    {/* Column Labels */}
                    <div className="grid grid-cols-[150px_1fr] gap-4 pb-2">
                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Date
                      </p>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Description
                      </p>
                    </div>

                    {/* Activity Block */}
                    <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-[#555555] pb-4">
                      <p className="font-semibold">Apr 07, 2025</p>
                      <div>
                        <p className="font-semibold">Basit’s feedback to you</p>
                        <p className="text-yellow-500">★★★★★ 5.0</p>
                        <p>
                          Working with Eeshan and his company has been an
                          exceptional experience...
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-[#555555] pb-4">
                      <p className="font-semibold">Apr 05, 2025</p>
                      <p>You ended Basit’s Contract</p>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-[#555555] pb-4">
                      <p className="font-semibold">Apr 03, 2025</p>
                      <div>
                        <p className="font-semibold">Your feedback to Basit</p>
                        <p className="text-yellow-500">★★★★★ 5.0</p>
                        <p>
                          Working with Eeshan and his company has been an
                          exceptional experience...
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] gap-4">
                      <p className="font-semibold">Apr 01, 2025</p>
                      <p>
                        Basit Bashir accepted your offer at $5.00 per hour with
                        a rate increase of 5% every 3 months
                      </p>
                    </div>

                    <div className="checkbox-wrapper-5">
                      <div className="check">
                        <input defaultChecked id="check-5" type="checkbox" />
                        <label htmlFor="check-5"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Messages" && (
              <div>
                <Messages darkMode={darkMode} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
