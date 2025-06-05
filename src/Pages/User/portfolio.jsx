import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";

function ShimmerPortfolio({ darkMode, isMobile }) {
  const shimmerBg = darkMode ? "bg-[#333333]" : "bg-gray-300";
  const shimmerCardsCount = isMobile ? 2 : 4;

  return (
    <div className="flex flex-col items-center gap-6 mt-6 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:auto-rows-max sm:gap-6">
      {[...Array(shimmerCardsCount)].map((_, idx) => (
        <div key={idx} className="w-full max-w-[500px]">
          {/* image shimmer */}
          <div
            className={`animate-pulse rounded-lg ${shimmerBg} h-40 w-full`}
          />
          {/* text shimmer */}
          <div
            className={`animate-pulse rounded mt-2 ${shimmerBg} h-4 w-full`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Published");
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);

    // Simulate loading for 1.5 seconds
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const portfolioData = [
    {
      id: 1,
      title: "Learn coding from Zero Pro.",
      image:
        "src/assets/UserDashboard/e89f61f97ae04b0aa110c23a0eac1560adb403ac.jpg",
    },
    {
      id: 2,
      title: "Learn coding from Zero Pro.",
      image:
        "src/assets/UserDashboard/e89f61f97ae04b0aa110c23a0eac1560adb403ac.jpg",
    },
    {
      id: 3,
      title: "Learn coding from Zero Prowwwwww.",
      image:
        "src/assets/UserDashboard/e89f61f97ae04b0aa110c23a0eac1560adb403ac.jpg",
    },
    {
      id: 4,
      title: "Learn coding from Zero Prodsakjnd.",
      image:
        "src/assets/UserDashboard/e89f61f97ae04b0aa110c23a0eac1560adb403ac.jpg",
    },
  ];

  const visibleItems = isMobile
    ? portfolioData.slice(startIndex, startIndex + 2)
    : portfolioData;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 2);
  };

  const handleNext = () => {
    if (startIndex + 2 < portfolioData.length) setStartIndex(startIndex + 2);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Desktop Sidebar */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10">
          <div className="block h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          <div className="pl-6 pr-6 pt-2 pb-2 border border-[#555555] rounded-[8px]">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <h3 className="text-[22px] font-[400]">Portfolio</h3>
              <button className="w-9 h-9 flex items-center justify-center">
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

            {/* Portfolio Cards or Shimmer */}
            {loading ? (
              <ShimmerPortfolio darkMode={darkMode} isMobile={isMobile} />
            ) : (
              <div className="flex flex-col items-center gap-6 mt-6 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:auto-rows-max sm:gap-6">
                {visibleItems.map((item) => (
                  <div key={item.id} className="w-full max-w-[500px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 rounded-lg object-cover"
                    />
                    <p className="mt-2 text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Navigation Arrows */}
            {!loading && isMobile && (
              <div className="flex justify-center items-center mt-6 gap-4">
                <button
                  className="p-2 disabled:opacity-30"
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                >
                  <img
                    src={
                      darkMode
                        ? "src/assets/UserDashboard/arrow-left-01-dark.svg"
                        : "src/assets/UserDashboard/arrow-left-01.svg"
                    }
                    className="rotate-180"
                    alt="Left"
                  />
                </button>

                <button
                  className="p-2 disabled:opacity-30"
                  onClick={handleNext}
                  disabled={startIndex + 2 >= portfolioData.length}
                >
                  <img
                    src={
                      darkMode
                        ? "src/assets/UserDashboard/arrow-left-01-dark.svg"
                        : "src/assets/UserDashboard/arrow-left-01.svg"
                    }
                    alt="Right"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
