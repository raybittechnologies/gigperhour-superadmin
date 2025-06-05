import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import MessageModal from "../../components/ClientScreen/MessageModal";
import { BsHeart } from "react-icons/bs";
const ShimmerTalent = () => (
  <div className="flex-shrink-0 w-[28%] min-w-[260px] max-w-[300px] snap-start animate-pulse border border-gray-300 p-4 rounded-lg h-[250px]">
    <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-300 rounded w-2/4 mb-4" />
    <div className="h-3 bg-gray-300 rounded w-full mb-1" />
    <div className="h-3 bg-gray-300 rounded w-5/6 mb-1" />
    <div className="h-3 bg-gray-300 rounded w-2/3" />
  </div>
);

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
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Mobile Sidebar - shown only below 768px */}
        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6  hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl mb-6">Your hired Talents</h2>

            {/* Search and Share */}
            <div className="flex items-center md:gap-10 gap-3 mb-6">
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

            <div className="px-4 mb-8 text-sm overflow-x-auto hide-scrollbar">
              <div className="flex md:justify-between justify-start whitespace-nowrap gap-6  ">
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
            </div>

            {/* Talent Cards Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [@media(min-width:1437px)]:grid-cols-4">
              {isLoading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i}>
                        <ShimmerTalent />
                      </div>
                    ))
                : currentTalents.map((talent, i) => (
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
                            <h3 className="text-sm font-medium">
                              {talent.name}
                            </h3>
                            <div className="flex gap-3 flex-wrap items-center justify-between">
                              <p className="text-xs text-gray-600">
                                {talent.location}
                              </p>
                              <button className="flex items-center gap-1 md:px-2 md:py-[2px] px-1 text-[7px] md:text-xs font-[300] border border-[#007AFF] text-[#007AFF] rounded-full">
                                <img
                                  src="src/assets/UserDashboard/zap.svg"
                                  alt="zap"
                                  className="w-2 h-3 shrink-0"
                                />
                                Active now
                              </button>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400">
                          <BsHeart className="text-[#333333] w-5 h-5 " />
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
                      <div className="flex justify-between text-[#333333] items-center mb-4 text-[12px]">
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
