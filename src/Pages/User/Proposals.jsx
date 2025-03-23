import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";

export default function Proposals() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Active");
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const archivedData = [
    {
      category: "Archived Proposals",
      count: 6,
      items: [
        {
          date: "25-02-2025",
          daysAgo: "1 day ago",
          title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
          status: "Job is Closed",
          profile: "General Profile",
        },
        {
          date: "24-02-2025",
          daysAgo: "2 days ago",
          title: "React Dashboard UI Fixes – High Priority",
          status: "Job is Closed",
          profile: "General Profile",
        },
        {
          date: "23-02-2025",
          daysAgo: "3 days ago",
          title: "E-commerce Mobile App Design – Final Review",
          status: "Job is Closed",
          profile: "General Profile",
        },
        {
          date: "22-02-2025",
          daysAgo: "4 days ago",
          title: "Portfolio Website Redesign – Immediate Hiring",
          status: "Job is Closed",
          profile: "General Profile",
        },
        {
          date: "21-02-2025",
          daysAgo: "5 days ago",
          title: "UI/UX Prototype for Startup Pitch Deck",
          status: "Job is Closed",
          profile: "General Profile",
        },
        {
          date: "20-02-2025",
          daysAgo: "6 days ago",
          title: "WordPress Theme Customization – New Features",
          status: "Job is Closed",
          profile: "General Profile",
        },
      ],
    },
    {
      category: "Archived Interview",
      count: 1,
      items: [
        {
          date: "25-02-2025",
          daysAgo: "1 day ago",
          title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
          status: "Job is Closed",
        },
      ],
    },
  ];

  const dummyData = {
    offers: 0,
    invitations: 0,
    activeProposals: 0,
    submittedProposals: 1,
  };

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div
        className="grid grid-cols-12 container mx-auto px-[20px]"
        style={{ padding: "2%" }}
      >
        {/* Sidebar (Left) */}
        <SideBar />

        <div className="container mx-auto pl-10 pb-6 pr-6 col-span-10">
          {/* Heading */}
          <h3 className="text-2xl font-[400] mb-4 ">Proposals & Offers</h3>

          {/* Tabs */}
          <div
            className={`flex border-b text-gray-500 ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            {["Active", "Referrals", "Archived"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 text-sm ${
                  activeTab === tab
                    ? darkMode
                      ? "border-b-2 border-[#E9E9E9] text-white"
                      : "border-b-2 border-[#555555] text-[#333333]"
                    : darkMode
                    ? "text-[#E9E9E9]"
                    : "text-[#555555]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sections Based on Active Tab */}
          <div className="mt-4 space-y-3">
            {activeTab === "Active" && (
              <>
                {/* Active Section */}
                <div
                  className={`border rounded-[5px] p-3 flex gap-5 items-center text-sm ${
                    darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                  }`}
                >
                  <span>Offers ({dummyData.offers})</span>
                  <img
                    src={
                      darkMode
                        ? "src/assets/UserDashboard/bubble-chat-question-dark.svg"
                        : "src/assets/UserDashboard/bubble-chat-question-square.svg"
                    }
                    alt="Chat Icon"
                  />
                </div>

                <div
                  className={`border border-[#555555] rounded-[5px] p-3 flex justify-between items-center text-sm ${
                    darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                  }`}
                >
                  <div className="flex gap-5 items-center">
                    <span>
                      Invitations to interview ({dummyData.invitations})
                    </span>
                    <img
                      src={
                        darkMode
                          ? "src/assets/UserDashboard/bubble-chat-question-dark.svg"
                          : "src/assets/UserDashboard/bubble-chat-question-square.svg"
                      }
                      alt="Chat Icon"
                    />{" "}
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`border rounded-[24px] p-[3px] pr-[7px] flex gap-1  ${
                        darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                      }`}
                    >
                      <img
                        src={
                          darkMode
                            ? "src/assets/UserDashboard/zap-white.svg"
                            : "src/assets/UserDashboard/zap-black.svg"
                        }
                        alt="Zap Icon"
                      />
                      Available now
                    </span>
                    <img
                      src="src/assets/UserDashboard/edit-02-orange.svg"
                      className="w-[20px] h-[20px]"
                    />
                    <p>off</p>
                  </div>
                </div>

                <div
                  className={`border rounded-[5px] p-3 flex gap-5 items-center text-sm ${
                    darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                  }`}
                >
                  <span>Active Proposals ({dummyData.activeProposals})</span>
                  <img
                    src={
                      darkMode
                        ? "src/assets/UserDashboard/bubble-chat-question-dark.svg"
                        : "src/assets/UserDashboard/bubble-chat-question-square.svg"
                    }
                    alt="Chat Icon"
                  />
                </div>

                <div
                  className={`border  rounded-[5px] p-3 text-sm ${
                    darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                  }`}
                >
                  <div className="flex gap-5">
                    <span>
                      Submitted Proposals ({dummyData.submittedProposals})
                    </span>
                    <img
                      src={
                        darkMode
                          ? "src/assets/UserDashboard/bubble-chat-question-dark.svg"
                          : "src/assets/UserDashboard/bubble-chat-question-square.svg"
                      }
                      alt="Chat Icon"
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    <p className="font-[300] mt-1">Initiated 25-02-2025</p>
                    <p className="font-[600]">
                      Figma Tablet Responsive Design – Urgent (Complete Today)
                    </p>
                    <p className="font-[300] text-xs mt-1">General Profile</p>
                  </div>
                  <p className="font-[300] text-xs mt-1">1 day ago ·</p>
                </div>

                {/* Footer Links */}
                <div className="mt-4 flex justify-end text-[14px] text-[#E66D3D] space-x-2">
                  <a href="#" className="underline">
                    Search for Jobs
                  </a>
                  <span>|</span>
                  <a href="#" className="underline">
                    Manage your Profile
                  </a>
                </div>
              </>
            )}

            {activeTab === "Referrals" && (
              <>
                {/* Referrals Section */}
                <div className="flex flex-col p-6">
                  {/* Image & Title Centered */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="src/assets/UserDashboard/Giveaway 3D Model.svg"
                      alt="Referral Gift"
                      className="w-32 h-32 mb-4"
                    />

                    <h2 className="text-lg font-[400]">
                      You haven’t referred anyone yet
                    </h2>
                  </div>

                  {/* Description Left-Aligned */}
                  <div className="text-left mt-4">
                    <p className="text-sm ">
                      When declining an invitation, you can make a referral to
                      help other freelancers succeed and help clients fill their
                      job.
                    </p>

                    <a
                      href="#"
                      className="text-[#E66D3D] text-sm mt-2 underline"
                    >
                      Learn more about referring freelancers
                    </a>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Archived" && (
              <>
                {/* Archived Section */}
                <div className="space-y-6">
                  {archivedData.map((section, index) => (
                    <div
                      key={index}
                      className="border border-b border-[#555555] rounded-md shadow-sm mt-8 p-4 bg-transparent"
                    >
                      <h3
                        className={`text-md font-[400] flex items-center gap-2 pb-2 ${
                          darkMode ? "text-white" : "text-[#333333]"
                        }`}
                      >
                        {section.category}{" "}
                        <span
                          className={` ${
                            darkMode ? "text-white" : "text-[#333333]"
                          }`}
                        >
                          ({section.count})
                        </span>
                        <img
                          src={
                            darkMode
                              ? "src/assets/UserDashboard/bubble-chat-question2-dark.svg"
                              : "src/assets/UserDashboard/bubble-chat-question2.svg"
                          }
                          alt="Chat Bubble"
                          className="mt-1 ml-2"
                        />
                      </h3>

                      {section.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="py-3 border-b border-[#555555] last:border-none flex justify-between items-center -mx-4 px-4"
                        >
                          {/* Left Section: Date & Days Ago */}
                          <div className="flex flex-col min-w-[120px]">
                            <p className="text-sm font-[300]">
                              {" "}
                              Initiated {item.date}
                            </p>
                            <p className="text-xs font-[300]">{item.daysAgo}</p>
                          </div>

                          {/* Title */}
                          <p className="text-[#E66D3D] text-[15px] font-[700] flex-1 text-center">
                            {item.title}
                          </p>

                          {/* Status */}
                          <p className="text-xs font-[300] min-w-[120px] text-center">
                            {item.status}
                          </p>

                          {/* Profile */}
                          <p className="text-[14px]  font-[300] min-w-[120px] text-right">
                            {item.profile}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
