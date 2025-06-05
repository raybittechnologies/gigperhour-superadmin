import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState, useEffect } from "react";
import TalentCard from "../../components/ClientScreen/TalentCard";
import { useNavigate } from "react-router-dom";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { AiOutlinePlus } from "react-icons/ai";

const ShimmerTalent = (
  <div className="flex-shrink-0 w-[28%] min-w-[260px] max-w-[300px] snap-start animate-pulse border border-gray-300 p-4 rounded-lg h-[300px]">
    <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-300 rounded w-2/4 mb-4" />
    <div className="h-3 bg-gray-300 rounded w-full mb-1" />
    <div className="h-3 bg-gray-300 rounded w-5/6 mb-1" />
    <div className="h-3 bg-gray-300 rounded w-2/3" />
  </div>
);

const ShimmerResourceCard = (
  <div className="border border-gray-300 rounded-lg p-4 animate-pulse">
    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
    <div className="h-3 bg-gray-300 rounded w-full mb-1" />
    <div className="h-3 bg-gray-300 rounded w-4/5 mb-4" />
    <div className="w-[70px] h-[70px] bg-gray-300 rounded-full ml-auto" />
  </div>
);

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
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
    // Add other talents...
  ];
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // fake 2s load
    return () => clearTimeout(timer);
  }, []);

  const projectCards = [
    {
      title: "Managing your Project",
      description: "Best practices for your Project Management",
      icon: "src/assets/clientscreen/Clip path group.svg",
    },
    {
      title: "Managing your Project",
      description: "Best practices for your Project Management",
      icon: "src/assets/clientscreen/Clip path group.svg",
    },
    {
      title: "Managing your Project",
      description: "Best practices for your Project Management",
      icon: "src/assets/clientscreen/Clip path group.svg",
    },
    {
      title: "Managing your Project",
      description: "Best practices for your Project Management",
      icon: "src/assets/clientscreen/Clip path group.svg",
    },
    {
      title: "Managing your Project",
      description: "Best practices for your Project Management",
      icon: "src/assets/clientscreen/Clip path group.svg",
    },
    {
      title: "Managing your Project",
      description: "Best practices for your Project Management",
      icon: "src/assets/clientscreen/Clip path group.svg",
    },
    // Add other cards...
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {" "}
        {/* 64px if NavBarUser is 64px high */}
        {/* Sidebar */}
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
        {/* Main Content */}
        <div className="md:ml-[240px]  ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6  hide-scrollbar">
          <div className="md:p-6 px-3 py-6 border rounded-lg border-[#555555]">
            {/* Header */}
            <div className="flex flex-col [@media(min-width:470px)]:flex-row [@media(min-width:470px)]:justify-between [@media(min-width:470px)]:items-center gap-4 mb-8">
              <h1 className="text-2xl font-[400]">
                Good Afternoon, <br /> <span>Basit</span>
              </h1>
              <button
                className="bg-[#E66D3D] text-white px-4 py-2 rounded transition w-full md:w-auto flex items-center justify-center gap-2"
                onClick={() => navigate("/postJob")}
              >
                <AiOutlinePlus className="text-lg" />
                Post a Job
              </button>
            </div>

            {/* Empty State */}
            <div className="text-center py-16">
              <div className="text-6xl flex justify-center text-orange-500 mb-4">
                <img src="src/assets/UserDashboard/sad search.svg" />
              </div>
              <p className=" mb-4">
                No job posts or contracts in progress right now
              </p>
              <button
                className="bg-[#E66D3D] text-white px-6 py-2 rounded "
                onClick={() => navigate("/postJob")}
              >
                Post a Job
              </button>
            </div>

            {/* Personalized Talents */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Personalized Talents
              </h2>
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

            {/* Resources */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold mb-4">
                Resources you may like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                  ? Array(6)
                      .fill(0)
                      .map((_, i) => <div key={i}>{ShimmerResourceCard}</div>)
                  : projectCards.map((card, i) => (
                      <div
                        key={i}
                        className="border border-[#555555] rounded-lg p-4 flex justify-between items-start transition"
                      >
                        <div>
                          <h4 className="text-base font-semibold">
                            {card.title}
                          </h4>
                          <p className="text-sm font-[400] mt-1">
                            {card.description}
                          </p>
                        </div>
                        <img
                          src={card.icon}
                          alt="Project Icon"
                          className="w-[70px] h-[70px]"
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
