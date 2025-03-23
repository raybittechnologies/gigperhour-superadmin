import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function HourlyWork() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      {/* Navbar with Dark Mode Toggle */}
      <NavBarUser changeMode={setDarkMode} />

      {/* Main Layout with Sidebar */}
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />

        {/* Content Section */}
        <div className="col-span-10 pl-6">
          {tasks.length === 0 ? (
            <div>
              <h3 className="text-xl font-[400]">Hourly Work Diary</h3>
              <div className="text-center py-5 border rounded-lg p-2 shadow-md mb-4 mt-5 bg-white">
                <h4 className="text-xl font-[500] text-[#333333] ">
                  You haven t started any contracts yet
                </h4>
                <p className="font-[400] text-[#333333] flex justify-center items-center ">
                  <DotLottieReact
                    src="src/assets/UserDashboard/Animation - 1742449613991.lottie"
                    loop
                    autoplay
                    className="w-[300px] h-[150px]"
                  />
                </p>

                <button className="border text-white text-[14px] bg-[#E66D3D] font-[600] px-8 py-2 rounded-[5px]">
                  Search for new jobs
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-[400] flex justify-between mb-3">
                {" "}
                Work Diary
                <div>
                  <button
                    className="bg-[#E66D3D] text-[16px] text-white px-6 py-1 rounded"
                    onClick={togglePopup}
                  >
                    Add Manual Time
                  </button>

                  {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10] ">
                      <div className="bg-white p-6 rounded-lg shadow-lg mt-10 w-[700px]">
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
                        <div className="grid grid-cols-2 gap-4 mb-4">
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
                                className="w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2"
                              />

                              {/* Select Box */}
                              <select className="flex items-center border text-[#333333] text-[15px] w-full border-[#555555] rounded-[5px] p-3 pl-10 focus:border-[#E66D3D] focus:outline-none">
                                <option>Start Time</option>
                              </select>
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
                                className="w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2"
                              />

                              {/* Select Box */}
                              <select className="flex items-center border text-[15px] text-[#333333] w-full border-[#555555] rounded-[5px] p-3 pl-10 focus:border-[#E66D3D] focus:outline-none">
                                <option>End Time</option>
                              </select>
                            </div>
                          </div>

                          {/* Date */}
                          <div>
                            <label className="block text-[#333333] text-[15px] mb-1">
                              Date
                            </label>
                            <input
                              type="date"
                              className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none"
                            />
                          </div>

                          {/* Time Zone */}
                          <div>
                            <label className="block text-[#333333] text-[15px] mb-1">
                              Time Zone
                            </label>
                            <select className="flex items-center border text-[#333333] text-[15px] w-full border-[#555555] rounded-[5px] p-3 focus:border-[#E66D3D] focus:outline-none">
                              <option>UTC</option>
                            </select>
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
              <div className=" w-[690px] my-4  flex justify-between">
                <div className="relative z-0]">
                  <input
                    type="text"
                    className={`w-[588px] bg-transparent  mr-7 p-2 pl-12 border rounded focus:outline-none ${
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
                <input
                  className={`rounded-[5px] border bg-transparent pl-1 pr-1 w-full ${
                    darkMode
                      ? "text-white border-[#E9E9E9]"
                      : "text-black border-[#555555]"
                  }`}
                  type="date"
                  style={{
                    colorScheme: darkMode ? "dark" : "light",
                  }}
                />
              </div>

              {/* Summary Section */}
              <div className="grid grid-cols-5 border border-[#555555] gap-3 pl-5 pb-5 pr-5 pt-2 rounded-lg mb-6">
                <div className="">
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
                {["Tracked Time", "Manual Time", "Over-Time"].map(
                  (label, index) => (
                    <div key={index} className="text-center">
                      <p className="mb-9 font-[600]">{label}</p>
                      <div
                        className={`w-4 h-4 ${
                          statusColors[Object.keys(statusColors)[index]]
                        } rounded-full mx-auto mb-2`}
                      ></div>
                      <p>8:00hr</p>
                    </div>
                  )
                )}
                <div className="flex items-center justify-center">
                  <select className="h-[45px] bg-transparent border border-[#555555] rounded-lg  px-4 py-1">
                    <option>UTC/12 hour</option>
                    <option>UTC/24 hour</option>
                    <option>Local Time</option>
                  </select>
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
                    <button className="w-8 h-8 mr-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                      •••
                    </button>
                  </div>

                  {/* Task Details */}

                  <p className="pt-5">{task.description}</p>

                  {/* Options Button */}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
