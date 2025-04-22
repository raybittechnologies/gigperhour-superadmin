import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MessageModal from "../../components/ClientScreen/MessageModal";

export default function HiredTalent() {
  const hiredTalents = [
    {
      name: "Basit Bashir",
      location: "India",
      image: "https://i.pravatar.cc/100?img=1",
      successRate: "100%",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      projectTitle: "Fix Landing Page design",
      projectType: "Fixed Price",
      status: "Ended",
    },
    {
      name: "Basit Bashir",
      location: "India",
      image: "https://i.pravatar.cc/100?img=1",
      successRate: "100%",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      projectTitle: "Fix Landing Page design",
      projectType: "Fixed Price",
      status: "Ended",
    },
    {
      name: "Basit Bashir",
      location: "India",
      image: "https://i.pravatar.cc/100?img=1",
      successRate: "100%",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      projectTitle: "Fix Landing Page design",
      projectType: "Fixed Price",
      status: "Ended",
    },
    {
      name: "Basit Bashir",
      location: "India",
      image: "https://i.pravatar.cc/100?img=1",
      successRate: "100%",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      projectTitle: "Fix Landing Page design",
      projectType: "Fixed Price",
      status: "Ended",
    },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedTalent, setSelectedTalent] = useState(null);

  const cardsPerPage = 6;
  const totalPages = Math.ceil(hiredTalents.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentTalents = hiredTalents.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const handleSend = () => {
    // Message sending logic here
    setMessage("");
    setShowModal(false);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
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

        <div className="ml-[240px] flex-1 overflow-y-auto p-6  hide-scrollbar">
          <div
            className={`p-6  border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl mb-6">Your hired Talents</h2>

            {/* Search and Share */}
            <div className="flex items-center gap-10 mb-6">
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
              <button className="text-[#E66D3D]">Share List</button>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-between gap-6 px-4 mb-8 text-sm ">
              {[
                "Your Hires",
                "Company Hires",
                "Recently Viewed",
                "Saved Talents",
                "Saved Projects",
                "Job Success",
              ].map((tab, i) => (
                <button
                  key={i}
                  className="hover:underline hover:text-[#E66D3D]"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Talent Cards Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [@media(min-width:1437px)]:grid-cols-4">
              {currentTalents.map((talent, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={talent.image}
                        alt={talent.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-sm font-medium">{talent.name}</h3>
                        <div className="flex items-center text-xs text-gray-500 gap-2">
                          <span>{talent.location}</span>
                          <button className="text-[#007AFF] border border-[#007AFF] px-2 py-[2px] rounded-full text-[10px] flex items-center gap-1">
                            <img
                              src="src/assets/UserDashboard/zap.svg"
                              alt="active"
                              className="w-2 h-3"
                            />
                            Active now
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400">
                      <img
                        src="src/assets/clientscreen/favourite.svg"
                        alt="favorite"
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 text-center text-xs text-gray-600 border-b border-gray-200 pb-2 mb-2">
                    <div>
                      <div className="text-sm text-[#1C1C1C]">
                        {talent.successRate}
                      </div>
                      <div>Job Success</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#1C1C1C]">
                        {talent.jobs}
                      </div>
                      <div>Jobs</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#1C1C1C]">
                        {talent.rate}
                      </div>
                      <div>Rate</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#E66D3D] font-medium mb-1">
                    {talent.role}
                  </p>
                  <p className="text-xs text-[#E66D3D] font-medium mb-1">
                    {talent.title}
                  </p>

                  <p className="text-sm text-[#1C1C1C] mt-3 mb-3">
                    {talent.projectTitle}
                  </p>
                  <div className="flex justify-between  text-[#333333] items-center mb-4 text-[12px]">
                    <span>{talent.projectType}</span>
                    <span className="border border-[#D84839] text-[#D84839] px-2 py-[1px] rounded-[3px] text-xs">
                      {talent.status}
                    </span>
                  </div>

                  <button
                    className="bg-[#E66D3D] text-white text-sm py-2 w-full rounded-md font-medium"
                    onClick={() => {
                      setSelectedTalent(talent);
                      setShowModal(true);
                    }}
                  >
                    Message
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`w-8 h-8 rounded-full text-sm ${
                      num === currentPage
                        ? "bg-[#E66D3D] text-white"
                        : "border border-[#555555]"
                    }`}
                  >
                    {num}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showModal && selectedTalent && (
        <MessageModal
          talent={selectedTalent}
          message={message}
          setMessage={setMessage}
          onClose={() => setShowModal(false)}
          onSend={handleSend}
        />
      )}
    </div>
  );
}
