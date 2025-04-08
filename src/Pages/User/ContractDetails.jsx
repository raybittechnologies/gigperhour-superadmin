import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";

export default function ContractDetails() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "TimeSheet", "Messages", "Contract Details"];
  const openImagePopup = (file) => {
    setSelectedImage(file.fileIcon);
  };

  const onClose = () => {
    setSelectedImage(null); // Close the popup
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const dummyData = {
    earnings: "$10.00",
    rate: "$10.00/hr",
    trackedHours: "10.00 hrs",
    weeklyLimit: "30 hrs",
  };
  const dummyFiles = [
    {
      id: 1,
      name: "Screenshot 2024-07-19 at 6.43.26 PM.png",
      date: "Jul 19, 2024, 6:44 PM",
      size: "150.5 kb",
      fileIcon: "src/assets/UserDashboard/File Icon.png",
    },
    {
      id: 2,
      name: "Screenshot 2024-07-20 at 7.12.10 AM.png",
      date: "Jul 20, 2024, 7:12 AM",
      size: "220.7 kb",
      fileIcon: "src/assets/UserDashboard/File Icon.png",
    },
  ];
  const todoData = [
    {
      id: 1,
      title: "Log and report management",
      date: "13, Mar 25",
      assignedTo: "Assigned to you",
      profileImg: "src/assets/profileImage.jpeg",
      completedDate: "Jul 29, 2024",
      status: "completed",
    },
    {
      id: 2,
      title: "Update Client Records",
      date: "14, Mar 25",
      assignedTo: "Assigned to you",
      profileImg: "src/assets/profileImage.jpeg",
      completedDate: "Jul 30, 2024",
      status: "completed",
    },
    {
      id: 3,
      title: "Verify User Data",
      date: "15, Mar 25",
      assignedTo: "Assigned to you",
      profileImg: "src/assets/profileImage.jpeg",
      status: "incomplete",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      {/* Navbar */}
      <NavBarUser changeMode={setDarkMode} />

      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="col-span-10 pl-6">
          <div className=" min-h-screen">
            {/* Header Section */}
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
                        Basit Bashir
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
            {activeTab === "Overview" && (
              <div>
                {/* Stats Section */}
                <div
                  className={`grid grid-cols-4  border  border-[#E9E9E9] gap-4 mb-6 p-4 rounded-lg ${
                    darkMode ? "bg-transparent " : "bg-white"
                  }`}
                >
                  {/* Earnings */}
                  <div>
                    <p className="text-[15px]">Earnings this week</p>
                    <p className="text-xl font-[600] mt-2">
                      {dummyData.earnings}
                    </p>
                    <p
                      className={`text-[12px] ${
                        darkMode ? "text-white" : "text-[#555555]"
                      }`}
                    >
                      You will get these hours paid for these hours on Monday.
                    </p>
                  </div>

                  {/* Contract Rate */}
                  <div>
                    <p className="text-[15px]">Contract s rate</p>
                    <p className="text-xl font-[600] mt-2">{dummyData.rate}</p>
                  </div>

                  {/* Tracked Hours */}
                  <div>
                    <p className="text-[15px]">This Week Tracked</p>
                    <p className="text-xl font-[600] mt-2">
                      {dummyData.trackedHours}
                    </p>
                    <p
                      className={`text-[12px] ${
                        darkMode ? "text-white" : "text-[#555555]"
                      }`}
                    >
                      of {dummyData.weeklyLimit} weekly limit
                    </p>
                  </div>

                  {/* Button */}
                  <button className="px-4 h-[40px] border mr-5 border-[#E66D3D] rounded">
                    View Timesheet
                  </button>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-2    gap-8 items-start">
                  {/* Recent Files */}
                  <div
                    className={`p-4 rounded-lg   border-[#E9E9E9] border h-auto ${
                      darkMode ? "bg-transparent" : "bg-white"
                    }`}
                  >
                    <h4 className="font-[400] text-[17px] mb-4">
                      Recent Files
                    </h4>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src="src/assets/profileImage.jpeg"
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col justify-center">
                        <p
                          className={`font-[400] ${
                            darkMode ? "text-white" : "text-[#555555]"
                          }`}
                        >
                          Basit Bashir
                        </p>
                        <p
                          className={`text-[12px] ${
                            darkMode ? "text-white" : "text-[#555555]"
                          }`}
                        >
                          Mon, 13 Mar 25
                        </p>
                        <p
                          className={`text-[12px] ${
                            darkMode ? "text-white" : "text-[#555555]"
                          }`}
                        >
                          11:07 AM
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {/* File Count and Arrow */}
                      <p
                        className={`flex items-center gap-2 ${
                          darkMode ? "text-white" : "text-[#555555]"
                        }`}
                      >
                        {dummyFiles.length}{" "}
                        {dummyFiles.length === 1 ? "File" : "Files"}
                        <img
                          src={
                            darkMode
                              ? "src/assets/UserDashboard/arrow-light.svg"
                              : "src/assets/UserDashboard/Vector (1).svg"
                          }
                          alt="Arrow"
                          className="mt-[2px]"
                        />
                      </p>

                      {/* File List */}
                      {dummyFiles.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={() => openImagePopup(file)}
                        >
                          <img
                            src={file.fileIcon}
                            alt="File Icon"
                            className="w-11 h-11"
                          />
                          <div className="w-full">
                            <p className="ml-4 w-[186px] truncate">
                              {file.name} - {file.date}
                            </p>
                            <div className="flex justify-between items-center mt-2">
                              <p className="ml-4 text-sm text-gray-500">
                                {file.size}
                              </p>
                              <div className="flex items-center mr-4 gap-5">
                                <img
                                  src="src/assets/UserDashboard/copy-link.svg"
                                  alt="Copy Link"
                                  className="w-5 h-5"
                                />
                                <img
                                  src="src/assets/UserDashboard/download-circle-01.svg"
                                  alt="Download"
                                  className="w-5 h-5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[30]">
                          <div className="bg-white rounded-lg p-6 w-[700px] h-[450px]">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-3">
                                {/* Profile Picture */}
                                <img
                                  src="src/assets/profileImage.jpeg"
                                  alt="Profile"
                                  className="w-10 h-10 rounded-full"
                                />

                                {/* Text Content */}
                                <div>
                                  <p className="font-semibold text-[#333333]">
                                    Aamir Bashir
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Screenshot 2024-07-19 at 6.43.26 PM.png -
                                    Jul 19, 2024, 6:44 PM
                                  </p>
                                </div>
                              </div>

                              <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <img
                                  src="src/assets/UserDashboard/cancel-02.svg"
                                  alt="Close"
                                />
                              </button>
                            </div>

                            {/* Image Section - Centering */}
                            <div className="relative flex items-center justify-center  h-[300px]">
                              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                <img
                                  src="src/assets/UserDashboard/arrow-left-01.svg"
                                  className="rotate-180"
                                  alt="Rotated Arrow"
                                />
                              </button>

                              <img
                                src={selectedImage}
                                alt="Screenshot"
                                className="w-[450px] max-h-full rounded-lg"
                              />
                              <button className="absolute right-2 top-1/2 transform -translate-y-1/2  p-2 rounded-full">
                                <img src="src/assets/UserDashboard/arrow-left-01.svg" />
                              </button>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-end gap-4">
                              <button className="px-4 py-2 border  border-[#E66D3D] rounded-[5px] text-[#333333]">
                                Copy link
                              </button>
                              <button className="px-4 py-2 bg-[#E66D3D] text-white rounded-[5px]">
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* To-Do Section */}
                  <div
                    className={`p-4 rounded-lg   border-[#E9E9E9] border h-auto ${
                      darkMode ? "bg-transparent" : "bg-white"
                    }`}
                  >
                    <h4 className="font-[400] text-[17px] mb-4">To-Do s</h4>

                    {/* Active Task */}
                    {todoData
                      .filter((task) => task.status !== "completed")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="border border-[#555555] rounded-[8px] pl-4 pr-4 pt-3 pb-3 mb-4"
                        >
                          <div className="flex justify-between">
                            <p className="font-[400]">{task.title}</p>
                            <p>{task.date}</p>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <img
                              src={task.profileImg}
                              className="rounded-full w-[20px] h-[20px]"
                              alt="Profile"
                            />
                            <p>{task.assignedTo}</p>
                          </div>
                        </div>
                      ))}

                    {/* Completed Tasks */}
                    <h4 className="font-[400] text-[#E66D3D] mb-4">
                      Completed
                    </h4>
                    {todoData
                      .filter((task) => task.status === "completed")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="border border-[#555555] rounded pl-4 pr-4 pt-2 pb-2 mb-2 opacity-50"
                        >
                          <p className="font-[400]">{task.title}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <img
                              src={task.profileImg}
                              className="rounded-full w-[20px] h-[20px]"
                              alt="Profile"
                            />
                            <p>
                              {task.assignedTo} - Completed {task.completedDate}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
