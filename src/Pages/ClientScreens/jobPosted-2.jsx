import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState, useEffect } from "react";
import TalentCard from "../../components/ClientScreen/TalentCard";
import { useNavigate } from "react-router-dom";
import { CiDiscount1 } from "react-icons/ci";
const ShimmerTalent = (
  <div className="flex-shrink-0 w-[28%] min-w-[260px] max-w-[300px] snap-start animate-pulse border border-gray-300 p-4 rounded-lg h-[300px]">
    <div className="w-16 h-16 bg-gray-300 rounded-full mb-6" />
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4" />
    <div className="h-3 bg-gray-300 rounded w-2/4 mb-6" />
    <div className="h-3 bg-gray-300 rounded w-full mb-3" />
    <div className="h-3 bg-gray-300 rounded w-5/6 mb-3" />
    <div className="h-3 bg-gray-300 rounded w-2/3 mb-6" />
    <div className="h-4 bg-gray-300 rounded w-1/2" />
  </div>
);

export default function JobPosted() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
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
    // Add other talents...
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // fake 2s load
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`min-h-screen ${
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

        <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6  border rounded-lg ${
              darkMode ? "border-[#555555]" : "border-[#555555]"
            }`}
          >
            <div className="flex flex-wrap justify-between items-start gap-4">
              {/* Notification Box */}
              <div className="flex items-center w-full lg:w-[55vw] bg-[#FFCBC6] text-[#222] md:px-6 px-2 py-3 rounded-md">
                <CiDiscount1 className="text-xl text-[#333333] flex-shrink-0" />
                <span className="md:text-[16px] text-[12px] ml-2">
                  Your job has been submitted successfully
                </span>
              </div>

              {/* Button */}
              <button
                className="
      text-[16px]  border border-[#555555] px-16 py-3 rounded-md transition-colors duration-300
      lg:self-auto
     
    "
              >
                UI / UX
              </button>
            </div>

            <div className="mt-4 ">
              <h2 className="mb-4">Invite Freelancers for this Job</h2>
              <div className="overflow-x-auto hide-scrollbar">
                <div className="flex gap-4 scroll-smooth snap-x snap-mandatory">
                  {isLoading
                    ? Array(3)
                        .fill(0)
                        .map((_, i) => <div key={i}>{ShimmerTalent}</div>)
                    : exampleTalents.map((talent, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-[28%] min-w-[260px] max-w-[300px] snap-start"
                        >
                          <TalentCard talent={talent} />
                        </div>
                      ))}
                </div>
              </div>
            </div>

            {/* Go to Dashboard */}
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => navigate("/Clientdashboard")}
                className="border border-[#E66D3D] font-semibold px-10 py-2 rounded  transition"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
