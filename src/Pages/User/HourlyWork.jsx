import { useState, useEffect } from "react";

import { ChevronDown } from "lucide-react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SideBar from "../../components/UserDashBoard/SideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSidebar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HourlyWorkSkeleton = ({ darkMode }) => {
  // Colors
  const bgContainer = darkMode ? "bg-[#121212]" : "bg-white";
  const borderContainer = darkMode ? "border-[#444]" : "border-[#ccc]";
  const bgSkeleton = darkMode
    ? "bg-[#3a3a3a] ring-1 ring-[#555]"
    : "bg-gray-300 ring-1 ring-gray-400";

  return (
    <div>
      {/* Main header block */}
      <div
        className={`h-7 w-40 mb-6 rounded-lg animate-pulse border ${borderContainer} ${bgContainer} shadow-sm`}
      ></div>

      {/* Search and Actions Skeleton */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center mb-8 rounded-lg border ${borderContainer} ${bgContainer} shadow-sm p-4`}
      >
        <div
          className={`h-10 rounded-lg col-span-2 animate-pulse ${bgSkeleton}`}
        ></div>
        <div className={`h-10 rounded-lg animate-pulse ${bgSkeleton}`}></div>
        <div className={`h-10 rounded-lg animate-pulse ${bgSkeleton}`}></div>
      </div>

      {/* Summary Section Skeleton */}
      <div
        className={`grid grid-cols-3 md:grid-cols-5 gap-6 px-5 py-4 rounded-lg border ${borderContainer} ${bgContainer} mb-8 animate-pulse shadow-sm`}
      >
        <div className="hidden md:flex flex-col items-center space-y-4">
          <div className={`h-5 w-20 rounded-lg ${bgSkeleton}`}></div>
          <div className={`w-20 h-20 rounded-full ${bgSkeleton}`}></div>
        </div>

        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            <div className={`h-5 w-16 rounded-lg ${bgSkeleton}`}></div>
            <div className={`w-5 h-5 rounded-full ${bgSkeleton}`}></div>
            <div className={`h-4 w-14 rounded-lg ${bgSkeleton}`}></div>
          </div>
        ))}

        <div className="hidden md:flex flex-col items-center">
          <div className={`h-10 w-32 rounded-lg ${bgSkeleton}`}></div>
        </div>
      </div>

      {/* Task List Skeleton */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`border-b py-6 border-opacity-20 ${
            darkMode ? "border-[#444]" : "border-gray-300"
          }`}
        >
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-5 h-5 rounded-full ${bgSkeleton}`}></div>
              <div className={`h-5 w-36 rounded-lg ${bgSkeleton}`}></div>
            </div>
            <div
              className={`w-10 h-10 rounded-full border ${
                darkMode ? "border-[#444]" : "border-gray-300"
              }`}
            ></div>
          </div>

          <div className="pt-6 space-y-2">
            <div className={`h-5 w-3/4 rounded-lg ${bgSkeleton}`}></div>
            <div className={`h-5 w-1/2 rounded-lg ${bgSkeleton}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function HourlyWork() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("UTC/12 hour");
  const dropdownOptions = ["UTC/12 hour", "UTC/24 hour", "Local Time"];
  const [selected1, setSelected1] = useState("Start Time");
  const [selected2, setSelected2] = useState(" End Time");
  const [selected3, setSelected3] = useState("UTC");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const options1 = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];
  const options2 = ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
  const options3 = ["UTC/12 hour", "UTC/24 hour", "Local Time"];

  const toggle = (id) => {
    setIsOpen1(id === 1 ? !isOpen1 : false);
    setIsOpen2(id === 2 ? !isOpen2 : false);
    setIsOpen3(id === 3 ? !isOpen3 : false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const tasks = [
    {
      status: "green",
      time: "7:40 hrs",
      description:
        "Working on task you assigned me on the previous day, will try to complete it by today",
    },
    {
      status: "green",
      time: "7:40 hrs",
      description:
        "Working on task you assigned me on the previous day, will try to complete it by today",
    },
    {
      status: "yellow",
      time: "7:40 hrs",
      description:
        "Working on task you assigned me on the previous day, will try to complete it by today",
    },
    {
      status: "red",
      time: "7:40 hrs",
      description:
        "Working on task you assigned me on the previous day, will try to complete it by today",
    },
  ];

  const statusColors = {
    green: "bg-[#95FF00]",
    yellow: "bg-[#FCE15A]",
    red: "bg-[#D84839]",
  };
  const timeStats = [
    { label: "Tracked Time", color: "bg-green-500", time: "5:00hr" },
    { label: "Manual Time", color: "bg-yellow-500", time: "2:00hr" },
    { label: "Over-Time", color: "bg-red-500", time: "1:00hr" },
  ];
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-20">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:p-6 py-6 pl-6 pr-11  col-span-full md:ml-[220px] ml-[27px] flex-1 overflow-y-auto hide-scrollbar z-10">
          {loading ? (
            <HourlyWorkSkeleton darkMode={darkMode} />
          ) : tasks.length === 0 ? (
            <div>
              <h3 className="text-xl font-[400]">Hourly Work Diary</h3>
              <div className="text-center py-5 border rounded-lg p-2 shadow-md mb-4 mt-5 bg-white">
                <h4 className="text-xl font-[500] text-[#333333] ">
                  You haven t started any contracts yet
                </h4>
                <div className="font-[400] text-[#333333] flex justify-center items-center">
                  <DotLottieReact
                    src="src/assets/UserDashboard/Animation - 1742449613991.lottie"
                    loop
                    autoplay
                    className="w-[300px] h-[150px]"
                  />
                </div>

                <button className="border text-white text-[14px] bg-[#E66D3D] font-[600] px-8 py-2 rounded-[5px]">
                  Search for new jobs
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-[400]  flex justify-between mb-3  [@media(max-width:389px)]:flex-col  ">
                {" "}
                Work Diary
                <div>
                  <button
                    className="bg-[#E66D3D] text-[16px] text-white px-6 py-1 rounded [@media(max-width:389px)]:mt-5 "
                    onClick={togglePopup}
                  >
                    Add Manual Time
                  </button>

                  {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10] ">
                      <div className="bg-white p-6 rounded-lg shadow-lg mt-10  w-[700px] max-h-[85vh] overflow-y-auto ">
                        {/* Header Section */}
                        <div className="flex justify-between  mb-4">
                          <h3 className="text-[22px]  text-[#333333] font-[400]">
                            Add Manual Time
                          </h3>
                          <button onClick={togglePopup}>
                            {" "}
                            <img src="src/assets/UserDashboard/cancel-02.svg" />
                          </button>
                        </div>

                        {/* Form Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                          {/* Start Time */}

                          <div>
                            <label className="block text-[#333333] text-[15px] mb-1">
                              Start Time
                            </label>
                            <div className="relative w-full">
                              {/* Clock Icon */}
                              <img
                                src="src/assets/alarm-clock.svg"
                                alt="Clock"
                                className="w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                              />

                              {/* Custom Dropdown Button */}
                              <button
                                onClick={() => toggle(1)}
                                className="w-full border border-[#555555] rounded-[5px] p-3 pl-10 flex justify-between items-center text-[#333333] text-[15px] bg-transparent"
                                type="button"
                              >
                                {selected1}
                                <ChevronDown size={16} />
                              </button>

                              {isOpen1 && (
                                <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded shadow-lg max-h-60 overflow-auto">
                                  {options1.map((option, i) => (
                                    <li
                                      key={i}
                                      onClick={() => {
                                        setSelected1(option);
                                        setIsOpen1(false);
                                      }}
                                      className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white text-[16px] text-[#222]"
                                    >
                                      {option}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>

                          {/* End Time */}

                          <div>
                            <label className="block text-[#333333] text-[15px] mb-1">
                              End Time
                            </label>
                            <div className="relative w-full">
                              {/* Clock Icon */}
                              <img
                                src="src/assets/alarm-clock.svg"
                                alt="Clock"
                                className="w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                              />

                              {/* Custom Dropdown Button */}
                              <button
                                onClick={() => toggle(2)}
                                className="w-full border border-[#555555] rounded-[5px] p-3 pl-10 flex justify-between items-center text-[#333333] text-[15px] bg-transparent"
                                type="button"
                              >
                                {selected2}
                                <ChevronDown size={16} />
                              </button>

                              {isOpen2 && (
                                <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded shadow-lg max-h-60 overflow-auto">
                                  {options2.map((option, i) => (
                                    <li
                                      key={i}
                                      onClick={() => {
                                        setSelected2(option);
                                        setIsOpen2(false);
                                      }}
                                      className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] text-[16px] hover:text-white text-[#222]"
                                    >
                                      {option}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>

                          {/* Date */}
                          <div>
                            <label className="block text-[#333333] text-[15px] mb-1">
                              Date
                            </label>
                            <input
                              type="date"
                              className="rounded border border-[#555555] w-full h-[52px]  text-[15px] px-4 py-2 mt-[1px]  bg-transparent appearance-none font-[400] text-[#333333] focus:border-[#E66D3D] focus:outline-none"
                              style={{
                                WebkitAppearance: "none",
                                MozAppearance: "textfield",
                                appearance: "none",
                                lineHeight: "normal",
                                placeholder: "DD/MM/YYYY",
                              }}
                            />
                          </div>

                          {/* Time Zone */}
                          <div>
                            <label className="block text-[#333333] text-[15px] mb-1">
                              Time Zone
                            </label>
                            {/* Custom Dropdown Button */}
                            <div className="relative w-full">
                              <button
                                onClick={() => toggle(3)}
                                className="w-full border border-[#555555] rounded-[5px] p-3 flex justify-between items-center text-[#333333] text-[15px] bg-transparent"
                                type="button"
                              >
                                {selected3}
                                <ChevronDown size={16} />
                              </button>
                              {isOpen3 && (
                                <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded shadow-lg max-h-60 overflow-auto">
                                  {options3.map((option, i) => (
                                    <li
                                      key={i}
                                      onClick={() => {
                                        setSelected3(option);
                                        setIsOpen3(false);
                                      }}
                                      className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] text-[16px] hover:text-white text-[#222]"
                                    >
                                      {option}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Comment Section */}
                        <div>
                          <label className="block mb-1 text-[15px] text-[#333333]">
                            Comment
                          </label>
                          <textarea className="w-full border  border-[#555555] rounded-[5px] p-2 h-24 focus:border-[#E66D3D] focus:outline-none"></textarea>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-end mt-4 gap-4">
                          <button
                            className="border border-[#E66D3D] text-[#333333] font-[600] text-[16px] px-9 py-2 rounded"
                            onClick={togglePopup}
                          >
                            Cancel
                          </button>
                          <button className="bg-[#E66D3D] text-white font-[600] text-[16px] px-9 py-2 rounded">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </h3>
              {/* Search and Actions */}
              <div className="my-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
                {/* Search Input – spans 2 columns on all screens */}
                <div className="relative w-full col-span-2 md:col-span-2">
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

                {/* Date Picker – 1 column */}
                <div className="relative w-full col-span-1 md:col-span-1">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className={` dateUser w-full min-w-0 rounded-[5px] border bg-transparent px-2 py-2  z-[20] ${
                      darkMode
                        ? "text-white border-[#E9E9E9]"
                        : "text-black border-[#555555]"
                    }`}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                    popperPlacement="bottom"
                  />
                </div>

                {/* "Today" Button – 4th column */}
                <div className="flex items-center md:justify-start justify-end col-span-1 md:col-span-1">
                  <button
                    type="button"
                    onClick={() => setSelectedDate(new Date())}
                    className="text-sm text-[#E66D3D] font-[600]"
                  >
                    Today
                  </button>
                </div>
              </div>

              {/* Summary Section */}
              <div>
                {/* Total Time for Small Screens */}
                <div className="mb-4 block md:hidden font-[600]">
                  Total Time: 8.00 hrs
                </div>

                <div
                  className={`grid ${
                    darkMode ? "" : ""
                  } grid-cols-3 md:grid-cols-5 gap-3 sm:pl-2 sm:pr-2 md:pl-5 md:pr-5 md:pb-5 md:pt-2 md:border border-[#555555] rounded-lg mb-6`}
                >
                  {/* Total Time (Only visible on md+ screens) */}
                  <div className="hidden md:block">
                    <p className="mb-4 font-[600]">Total Time</p>
                    <div
                      className={`w-20 h-20 ${
                        darkMode
                          ? "bg-white text-black"
                          : "bg-[#333333] text-white"
                      } rounded-full flex flex-col items-center justify-center text-lg font-[400]`}
                    >
                      8:00hr
                      <img
                        src="src/assets/UserDashboard/clock-02.svg"
                        alt="Clock"
                        className="w-6 h-6 mt-1"
                      />
                    </div>
                  </div>

                  {/* Tracked Time, Manual Time, Over-Time */}
                  {timeStats.map((item, index) => (
                    <div
                      key={index}
                      className="text-center text-sm md:text-base [@media(max-width:389px)]:text-[12px]"
                    >
                      <p className="mb-4 md:mb-9 font-[600]">{item.label}</p>
                      <div
                        className={`w-4 h-4 ${item.color} rounded-full mx-auto mb-2`}
                      ></div>
                      <p>{item.time}</p>
                    </div>
                  ))}

                  {/* UTC Dropdown (visible inline on md+, moves down on small screens) */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="relative w-[180px] text-sm">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full h-[45px] px-4 py-2 rounded-lg border flex justify-between items-center ${
                          darkMode
                            ? "bg-transparent border-[#E9E9E9] text-white hover:border-[#E66D3D]"
                            : "bg-transparent border-[#555555] text-black hover:border-[#E66D3D]"
                        }`}
                      >
                        {selectedOption}
                        <ChevronDown
                          size={18}
                          className={`${
                            darkMode ? "text-white" : "text-black"
                          }`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <ul
                          className={`absolute z-10 w-full mt-1 rounded shadow-md ${
                            darkMode
                              ? "bg-[#222] border border-[#777] text-white"
                              : "bg-white border border-[#555] text-black"
                          }`}
                        >
                          {dropdownOptions.map((option, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSelectedOption(option);
                                setIsDropdownOpen(false);
                              }}
                              className={`px-4 py-2 cursor-pointer ${
                                darkMode
                                  ? "hover:bg-[#E66D3D] hover:text-black"
                                  : "hover:bg-[#E66D3D] hover:text-white"
                              }`}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* UTC Dropdown for Small Screens */}
                <div className="block md:hidden">
                  <div className="relative w-full text-sm">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full h-[45px] px-4 py-2 rounded-lg border flex justify-between items-center ${
                        darkMode
                          ? "bg-transparent border-[#E9E9E9] text-white hover:border-[#E66D3D]"
                          : "bg-transparent border-[#555555] text-black hover:border-[#E66D3D]"
                      }`}
                    >
                      {selectedOption}
                      <ChevronDown
                        size={18}
                        className={`${darkMode ? "text-white" : "text-black"}`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <ul
                        className={`absolute z-10 w-full mt-1 rounded shadow-md ${
                          darkMode
                            ? "bg-[#222] border border-[#777] text-white"
                            : "bg-white border border-[#555] text-black"
                        }`}
                      >
                        {dropdownOptions.map((option, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              setSelectedOption(option);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-2 cursor-pointer ${
                              darkMode
                                ? "hover:bg-[#E66D3D] hover:text-black"
                                : "hover:bg-[#E66D3D] hover:text-white"
                            }`}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Task List */}
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="border-b border-[#555555] py-6  items-center gap-4"
                >
                  {/* Status Indicator */}
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 flex justify-center items-center ${
                          statusColors[task.status]
                        } rounded-full`}
                      ></div>
                      <p className="font-[400]">
                        10:00 AM - 5:40 PM{" "}
                        <span className="font-[600]">({task.time})</span>
                      </p>
                    </div>
                    <button className="w-8 h-8 mr-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100 flex-shrink-0">
                      •••
                    </button>
                  </div>

                  {/* Task Details */}

                  <p className="pt-5 md:text-base text-[15px]">
                    {task.description}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
