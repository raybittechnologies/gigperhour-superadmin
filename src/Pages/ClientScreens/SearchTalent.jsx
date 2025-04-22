import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import TalentCard from "../../components/ClientScreen/TalentCard";

const exampleTalents = [
  {
    name: "Basit Bashir",
    location: "India",
    image: "https://i.pravatar.cc/100?img=1",
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
    name: "Muskaan",
    location: "India",
    image: "https://i.pravatar.cc/100?img=1",
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
    name: "Mehak Amin",
    location: "India",
    image: "https://i.pravatar.cc/100?img=1",
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
    name: "Jasia",
    location: "India",
    image: "https://i.pravatar.cc/100?img=1",
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
    name: "Areeba",
    location: "India",
    image: "https://i.pravatar.cc/100?img=1",
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
    name: "bisma",
    location: "India",
    image: "https://i.pravatar.cc/100?img=1",
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
    name: "BB",
    location: "India",
    image: "https://i.pravatar.cc/100?img=1",
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

  // Repeat or add more talent objects here
];
const filters = [
  "Talent Badge",
  "Hourly rate",
  "Location",
  "Talent Time Zone",
  "Talent Type",
  "Job Success",
];

export default function SearchTalent() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const allTalents = exampleTalents;
  const cardsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(allTalents.length / cardsPerPage);

  // Get talents for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentTalents = allTalents.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const [activeFilter, setActiveFilter] = useState(null);

  const handleToggle = (idx) => {
    setActiveFilter(activeFilter === idx ? null : idx);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-[#333333]"
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
            <div className="space-y-6">
              <h3 className="text-2xl font-[400]">Search Talents</h3>
              <div className="flex flex-wrap gap-11">
                {[
                  "Web Development",
                  "Sales & Marketing",
                  "Design & Creative",
                  "AI Services",
                ].map((category, idx) => (
                  <button
                    key={idx}
                    className={`hover:text-black ${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
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
                <button className="">Advanced Search</button>
              </div>

              <div className="flex justify-between px-1 gap-4 text-sm ">
                {filters.map((filter, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleToggle(idx)}
                    className="relative group cursor-pointer flex items-center gap-1"
                  >
                    {filter}
                    <img
                      src={
                        darkMode
                          ? "src/assets/UserDashboard/arrow-light.svg"
                          : "src/assets/UserDashboard/arror dark.svg"
                      }
                      alt="arrow"
                      className={`w-3 h-3 transition-transform duration-200 mt-1 ${
                        activeFilter === idx ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Talent Cards Grid */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [@media(min-width:1437px)]:grid-cols-4">
                {currentTalents.map((talent, idx) => (
                  <TalentCard key={idx} talent={talent} />
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
                          : "border border-[#555555] "
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
      </div>
    </div>
  );
}
