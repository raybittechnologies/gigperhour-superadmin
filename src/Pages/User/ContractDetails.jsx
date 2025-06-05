import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSidebar";

const Shimmer = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Profile pic shimmer */}
      <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
      {/* Title shimmer */}
      <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded" />
      {/* Smaller text shimmer */}
      <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
      {/* Tabs shimmer */}
      <div className="flex space-x-4 mt-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded"
          />
        ))}
      </div>

      {/* Grid shimmer for stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-gray-300 dark:bg-gray-700 rounded" />
        ))}
      </div>

      {/* Content section shimmer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-300 dark:bg-gray-700 rounded" />
        ))}
      </div>
    </div>
  );
};

export default function ContractDetails() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "TimeSheet", "Messages", "Contract Details"];
  const [isLoading, setIsLoading] = useState(true);
  const openImagePopup = (file) => {
    setSelectedImage(file.fileIcon);
  };

  const onClose = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6  col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          <div className="min-h-screen">
            {isLoading ? (
              <Shimmer />
            ) : (
              <>
                {/* Header Section */}
                <div className="bg-[#FFCBC6] p-4 rounded-lg mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                    {/* Left Section (Title + Profile) */}
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 sm:gap-10 w-full">
                      {/* Profile Info */}
                      <div className="flex items-center">
                        <img
                          src="src/assets/profileImage.jpeg"
                          alt="Profile"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-4">
                          <h3 className="text-sm font-[400] text-[#333333]">
                            Basit Bashir
                          </h3>
                          <p className="text-sm text-gray-600">
                            India - 11:07 AM
                          </p>
                        </div>
                      </div>

                      {/* Title + Dots button on mobile only */}
                      <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
                        <h3 className="text-lg sm:text-xl md:text-[22px] font-[400] text-[#333333]">
                          Figma Design for Single Screen
                        </h3>

                        {/* Three dots only shows here on mobile */}
                        <div className="sm:hidden">
                          <button className="w-8 h-8 ml-4 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                            •••
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Three dots on the right for large screens */}
                    <div className="hidden sm:block">
                      <button className="w-8 h-8 rounded-full border border-[#E66D3D] text-[#E66D3D] flex items-center justify-center hover:bg-gray-100">
                        •••
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-3 text-[12px] sm:text-base  sm:gap-x-6 gap-y-2 mt-6 sm:mt-9 text-[#333333] [@media(max-width:371px)]:text-[10px]">
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
                      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-4 rounded-lg border border-[#E9E9E9] ${
                        darkMode ? "bg-transparent" : "bg-white"
                      }`}
                    >
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
                          You will get these hours paid for these hours on
                          Monday.
                        </p>
                      </div>

                      <div>
                        <p className="text-[15px]">Contract s rate</p>
                        <p className="text-xl font-[600] mt-2">
                          {dummyData.rate}
                        </p>
                      </div>

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

                      <button className="px-4 h-[40px] border border-[#E66D3D] rounded w-full lg:w-auto">
                        View Timesheet
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 [@media(min-width:866px)]:grid-cols-2 gap-6 xl:gap-8 items-start">
                      {/* Recent Files */}
                      <div
                        className={`p-4 rounded-lg border border-[#E9E9E9] ${
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
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[30] px-4">
                              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[700px] max-h-[90vh]">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                  <div className="flex items-center gap-3">
                                    <img
                                      src="src/assets/profileImage.jpeg"
                                      alt="Profile"
                                      className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                      <p className="font-semibold text-[#333333]">
                                        Aamir Bashir
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        Screenshot 2024-07-19 at 6.43.26 PM.png
                                        - Jul 19, 2024, 6:44 PM
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                                  >
                                    <img
                                      src="src/assets/UserDashboard/cancel-02.svg"
                                      alt="Close"
                                    />
                                  </button>
                                </div>

                                {/* Image Section */}
                                <div className="relative flex items-center justify-center h-[300px] overflow-hidden">
                                  <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                    <img
                                      src="src/assets/UserDashboard/arrow-left-01.svg"
                                      className="rotate-180"
                                      alt="Arrow Left"
                                    />
                                  </button>

                                  <img
                                    src={selectedImage}
                                    alt="Screenshot"
                                    className="w-full max-w-[450px] max-h-full rounded-lg"
                                  />

                                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                    <img src="src/assets/UserDashboard/arrow-left-01.svg" />
                                  </button>
                                </div>

                                {/* Buttons */}
                                <div className="mt-4 flex justify-end gap-4">
                                  <button className="px-4 py-2 border border-[#E66D3D] rounded-[5px] text-[#333333]">
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
                        className={`p-4 rounded-lg border border-[#E9E9E9] ${
                          darkMode ? "bg-transparent" : "bg-white"
                        }`}
                      >
                        <h4 className="font-[400] text-[17px] mb-4">To-Do s</h4>

                        {todoData
                          .filter((task) => task.status !== "completed")
                          .map((task) => (
                            <div
                              key={task.id}
                              className="border border-[#555555] rounded-[8px] p-3 mb-4"
                            >
                              <div className="flex justify-between flex-wrap gap-2">
                                <p className="font-[400]">{task.title}</p>
                                <p>{task.date}</p>
                              </div>
                              <div className="flex items-center gap-3 mt-2">
                                <img
                                  src={task.profileImg}
                                  className="rounded-full w-5 h-5"
                                  alt="Profile"
                                />
                                <p>{task.assignedTo}</p>
                              </div>
                            </div>
                          ))}

                        <h4 className="font-[400] text-[#E66D3D] mb-4">
                          Completed
                        </h4>

                        {todoData
                          .filter((task) => task.status === "completed")
                          .map((task) => (
                            <div
                              key={task.id}
                              className="border border-[#555555] rounded p-2 mb-2 opacity-50"
                            >
                              <p className="font-[400]">{task.title}</p>
                              <div className="flex items-center gap-3 mt-2">
                                <img
                                  src={task.profileImg}
                                  className="rounded-full w-5 h-5"
                                  alt="Profile"
                                />
                                <p>
                                  {task.assignedTo} - Completed{" "}
                                  {task.completedDate}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
