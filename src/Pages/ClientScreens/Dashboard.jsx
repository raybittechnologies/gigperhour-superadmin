// import NavBarUser from "../../components/UserDashBoard/Navbar";
// import SideBar from "../../components/ClientScreen/ClientSideBar";
// import { useState } from "react";
// import TalentCard from "../../components/ClientScreen/TalentCard";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();

//   const exampleTalents = [
//     {
//       name: "Basit Bashir",
//       location: "India",
//       image: "https://i.pravatar.cc/100?img=1",
//       successRate: "100%",
//       jobs: 22,
//       rate: "$22/hr",
//       title: "Server/Network Administrator | WordPress | Shopify",
//       skills: [
//         "Web Design",
//         "Figma",
//         "Illustrator",
//         "Framer",
//         "ReactJS",
//         "NextJS",
//         "+10",
//       ],
//     },
//     {
//       name: "Zahid Hussain",
//       location: "Pakistan",
//       image: "https://i.pravatar.cc/100?img=2",
//       successRate: "95%",
//       jobs: 18,
//       rate: "$18/hr",
//       title: "Frontend Developer | React | Vue | SASS | HTML | CSS",
//       skills: ["React", "Vue", "JavaScript", "SASS", "HTML5", "CSS3", "+5"],
//     },
//     {
//       name: "Jasia Hassan",
//       location: "Bangladesh",
//       image: "https://i.pravatar.cc/100?img=3",
//       successRate: "98%",
//       jobs: 30,
//       rate: "$25/hr",
//       title: "UI/UX Designer | Figma | Sketch | XD | Photoshop",
//       skills: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Wireframing", "+8"],
//     },
//     {
//       name: "Rohan Mehta",
//       location: "India",
//       image: "https://i.pravatar.cc/100?img=4",
//       successRate: "92%",
//       jobs: 15,
//       rate: "$20/hr",
//       title: "Backend Developer | Node.js | Express | MongoDB",
//       skills: ["Node.js", "Express", "MongoDB", "Docker", "REST API", "+6"],
//     },
//   ];
//   const projectCards = [
//     {
//       title: "Managing your Project",
//       description: "Best practices for your Project Management",
//       icon: "src/assets/clientscreen/Clip path group.svg",
//     },
//     {
//       title: "Hiring Top Talent",
//       description: "Tips to find and hire skilled professionals",
//       icon: "src/assets/clientscreen/Clip path group.svg",
//     },
//     {
//       title: "Tracking Milestones",
//       description: "Stay on schedule with key milestone tracking",
//       icon: "src/assets/clientscreen/Clip path group.svg",
//     },
//     {
//       title: "Tracking Milestones",
//       description: "Stay on schedule with key milestone tracking",
//       icon: "src/assets/clientscreen/Clip path group.svg",
//     },
//     {
//       title: "Tracking Milestones",
//       description: "Stay on schedule with key milestone tracking",
//       icon: "src/assets/clientscreen/Clip path group.svg",
//     },
//     {
//       title: "Tracking Milestones",
//       description: "Stay on schedule with key milestone tracking",
//       icon: "src/assets/clientscreen/Clip path group.svg",
//     },

//     // add more items...
//   ];

//   return (
//     <div
//       className={`min-h-screen ${
//         darkMode ? "bg-black text-white" : "text-black"
//       }`}
//     >
//       <NavBarUser changeMode={setDarkMode} role="client" />
//       <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
//         <SideBar />
//         <div className="col-span-10 pl-6">
//           <div className="p-6 border rounded-lg border-[#555555]">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//               <h1 className="text-2xl font-[400] ">
//                 Good Afternoon, <br /> <span>Basit</span>
//               </h1>
//               <button
//                 className="bg-[#E66D3D] text-white px-4 py-2 rounded transition"
//                 onClick={() => navigate("/postJob")}
//               >
//                 + Post a Job
//               </button>
//             </div>

//             {/* Empty State */}
//             <div className="text-center py-16">
//               <div className="text-6xl flex justify-center text-orange-500 mb-4">
//                 <img src="src/assets/UserDashboard/sad search.svg" />
//               </div>
//               <p className=" mb-4">
//                 No job posts or contracts in progress right now
//               </p>
//               <button
//                 className="bg-[#E66D3D] text-white px-6 py-2 rounded "
//                 onClick={() => navigate("/postJob")}
//               >
//                 Post a Job
//               </button>
//             </div>

//             {/* Personalized Talents */}
//             <div className="">
//               <h2 className="text-lg font-semibold mb-4">
//                 Personalized Talents
//               </h2>
//               <div className="overflow-x-auto hide-scrollbar">
//                 <div className="flex gap-4 scroll-smooth snap-x snap-mandatory">
//                   {exampleTalents.map((talent, index) => (
//                     <div
//                       key={index}
//                       className="flex-shrink-0 w-[28%] min-w-[260px] max-w-[300px] snap-start"
//                     >
//                       <TalentCard talent={talent} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Resources */}
//             <div className="mt-12">
//               <h2 className="text-lg font-semibold mb-4">
//                 Resources you may like
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9">
//                 {projectCards.map((card, i) => (
//                   <div
//                     key={i}
//                     className="border border-[#555555] rounded-lg p-4 flex justify-between items-start transition"
//                   >
//                     <div>
//                       <h4 className="text-base font-semibold">{card.title}</h4>
//                       <p className="text-sm font-[400] mt-1">
//                         {card.description}
//                       </p>
//                     </div>
//                     <img
//                       src={card.icon}
//                       alt="Project Icon"
//                       className="w-[70px] h-[70px]"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState } from "react";
import TalentCard from "../../components/ClientScreen/TalentCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
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
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10 ">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Main Content */}
        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div className="p-6 border rounded-lg border-[#555555]">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-[400] ">
                Good Afternoon, <br /> <span>Basit</span>
              </h1>
              <button
                className="bg-[#E66D3D] text-white px-4 py-2 rounded transition"
                onClick={() => navigate("/postJob")}
              >
                + Post a Job
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

            {/* Resources */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold mb-4">
                Resources you may like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectCards.map((card, i) => (
                  <div
                    key={i}
                    className="border border-[#555555] rounded-lg p-4 flex justify-between items-start transition"
                  >
                    <div>
                      <h4 className="text-base font-semibold">{card.title}</h4>
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
