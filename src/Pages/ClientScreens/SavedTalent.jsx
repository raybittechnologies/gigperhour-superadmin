import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { FaUser } from "react-icons/fa6";
import TalentCard from "../../components/ClientScreen/TalentCard";

export default function SavedTalent() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const exampleTalents = [
    {
      name: "Basit Bashir",
      location: "India",
      image: "https://i.pravatar.cc/100?img=1",
      successRate: "100%",
      jobs: 22,
      rate: "$22/hr",
      message:
        "I am flexible, hardworking, punctual, and efficient at meeting deadlines. I am also reliable, and I can help you grow your business by finding authentic leads and conducting web research.",
      title: "Server/Network Administrator | WordPress | Shopify",
      skills: [
        "Web Design",
        "Figma",
        "Illustrator",
        "Framer",
        "ReactJS",
        "NextJS",
        "+10",
      ],
    },
    {
      name: "Muskaan",
      location: "India",
      image: "https://i.pravatar.cc/100?img=2",
      successRate: "100%",
      message:
        "I am flexible, hardworking, punctual, and efficient at meeting deadlines. I am also reliable, and I can help you grow your business by finding authentic leads and conducting web research.",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      skills: [
        "Web Design",
        "Figma",
        "Illustrator",
        "Framer",
        "ReactJS",
        "NextJS",
        "+10",
      ],
    },
    {
      name: "Mehak Amin",
      location: "India",
      image: "https://i.pravatar.cc/100?img=3",
      successRate: "100%",
      message:
        "I am flexible, hardworking, punctual, and efficient at meeting deadlines. I am also reliable, and I can help you grow your business by finding authentic leads and conducting web research.",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      skills: [
        "Web Design",
        "Figma",
        "Illustrator",
        "Framer",
        "ReactJS",
        "NextJS",
        "+10",
      ],
    },
    {
      name: "Jasia",
      location: "India",
      image: "https://i.pravatar.cc/100?img=4",
      successRate: "100%",
      message:
        "I am flexible, hardworking, punctual, and efficient at meeting deadlines. I am also reliable, and I can help you grow your business by finding authentic leads and conducting web research.",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      skills: [
        "Web Design",
        "Figma",
        "Illustrator",
        "Framer",
        "ReactJS",
        "NextJS",
        "+10",
      ],
    },
    {
      name: "Areeba",
      location: "India",
      image: "https://i.pravatar.cc/100?img=5",
      message:
        "I am flexible, hardworking, punctual, and efficient at meeting deadlines. I am also reliable, and I can help you grow your business by finding authentic leads and conducting web research.",
      successRate: "100%",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      skills: [
        "Web Design",
        "Figma",
        "Illustrator",
        "Framer",
        "ReactJS",
        "NextJS",
        "+10",
      ],
    },
    {
      name: "Bisma",
      location: "India",
      image: "https://i.pravatar.cc/100?img=6",
      message:
        "I am flexible, hardworking, punctual, and efficient at meeting deadlines. I am also reliable, and I can help you grow your business by finding authentic leads and conducting web research. by finding authentic leads and conducting web research. ",
      successRate: "100%",
      jobs: 22,
      rate: "$22/hr",
      title: "Server/Network Administrator | WordPress | Shopify",
      skills: [
        "Web Design",
        "Figma",
        "Illustrator",
        "Framer",
        "ReactJS",
        "NextJS",
        "+10",
      ],
    },
  ];

  const allTalents = exampleTalents;
  const hasTalents = allTalents.length > 0;

  const cardsPerPage = 6;
  const totalPages = Math.ceil(allTalents.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentTalents = allTalents.slice(
    startIndex,
    startIndex + cardsPerPage
  );

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

        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`p-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl mb-6">Your Saved Talents</h2>

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
                  alt="Search Icon"
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

            {/* Tabs */}
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

            {/* Conditional Content */}
            {!hasTalents ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                  {[
                    "Your future standout performer.",
                    "Someone who turns your vision into reality.",
                    "A visionary strategist.",
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="bg-white text-center py-6 shadow rounded-[8px] h-[279px]"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-[#E66D3D] w-24 h-24 rounded-full flex items-center justify-center">
                          <span className="text-white text-6xl">
                            <FaUser />
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 pt-4 pb-9 text-left pl-3">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center">
                  You have not saved any Talents yet!
                </p>
              </>
            ) : (
              <>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [@media(min-width:1437px)]:grid-cols-4">
                  {currentTalents.map((talent, idx) => (
                    <TalentCard key={idx} talent={talent} variant="saved" />
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
