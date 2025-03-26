import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Published");

  const portfolioData = [
    {
      id: 1,
      title: "Learn coding from Zero Pro.",
      image: "src/assets/UserDashboard/Portfolio Item Image.svg",
    },
    {
      id: 2,
      title: "Learn coding from Zero Pro.",
      image: "src/assets/UserDashboard/Portfolio Item Image.svg",
    },
    {
      id: 3,
      title: "Learn coding from Zero Pro.",
      image: "src/assets/UserDashboard/Portfolio Item Image.svg",
    },
    {
      id: 4,
      title: "Learn coding from Zero Pro.",
      image: "src/assets/UserDashboard/Portfolio Item Image.svg",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className="pl-6 pr-6 pt-2 pb-2 border border-[#555555] rounded-[8px]">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <h3 className="text-[22px] font-[400]">Portfolio</h3>
              <button className=" w-9 h-9 flex items-center justify-center">
                <img src="src/assets/UserDashboard/plus-sig-circle.svg" />
              </button>
            </div>

            {/* Tabs Section */}
            <div className="flex mt-4">
              {["Published", "Draft"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[16px] pb-2 mr-4 ${
                    activeTab === tab
                      ? `border-b-2 ${
                          darkMode
                            ? "border-white text-white"
                            : "border-black text-black"
                        } font-semibold`
                      : `${
                          darkMode ? "text-gray-300" : "text-gray-500"
                        } font-[400]`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Portfolio Cards */}
            <div className="grid grid-flow-row auto-rows-max gap-6 mt-6 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
              {portfolioData.map((item) => (
                <div key={item.id} className="">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-40 rounded-lg object-cover"
                  />
                  <p className="mt-[-20px] text-sm">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button className="p-2">
                <img
                  src={
                    darkMode
                      ? "src/assets/UserDashboard/arrow-left-01-dark.svg"
                      : "src/assets/UserDashboard/arrow-left-01.svg"
                  }
                  className="rotate-180"
                  alt="Rotated Arrow"
                />
              </button>

              <button className="p-2">
                <img
                  src={
                    darkMode
                      ? "src/assets/UserDashboard/arrow-left-01-dark.svg"
                      : "src/assets/UserDashboard/arrow-left-01.svg"
                  }
                  alt="Rotated Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
