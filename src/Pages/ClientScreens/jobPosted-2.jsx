import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState } from "react";
import TalentCard from "../../components/ClientScreen/TalentCard";
import { useNavigate } from "react-router-dom";
import { CiDiscount1 } from "react-icons/ci";
export default function JobPosted() {
  const [darkMode, setDarkMode] = useState(false);
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
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10 ">
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
            <div className="flex justify-between items-center">
              <div className="w-[55vw] bg-[#FFCBC6] text-[#222] px-4 py-3 rounded">
                <div className="flex items-center gap-2 text-[16px] font-[400]">
                  <CiDiscount1 className="text-xl text-[#333333]" />
                  <span>Your Job has been submitted successfully</span>
                </div>
              </div>

              <button className="border text-[20px] border-[#555555]  px-16 py-2 rounded ">
                UI / UX
              </button>
            </div>

            <div className="mt-4 ">
              <h2 className="mb-4">Invite Freelancers for this Job</h2>
              <div className="overflow-x-auto hide-scrollbar">
                <div className="flex gap-4 scroll-smooth snap-x snap-mandatory">
                  {exampleTalents.map((talent, index) => (
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
