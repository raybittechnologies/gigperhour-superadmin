import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import portfolioImage from "../../assets/UserDashboard/Portfolio Item Image.svg";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const shimmerBg = darkMode ? "bg-gray-700" : "bg-gray-300";

  const projects = [
    {
      id: 1,
      image: portfolioImage,
      title:
        "You will get Complete Cab Booking Solution: Mobile Apps and Dashboard",
      price: 999,
      deliveryTime: 10,
    },
    {
      id: 2,
      image: portfolioImage,
      title: "You will get E-commerce App with Admin Dashboard",
      price: 1299,
      deliveryTime: 14,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Shimmer placeholder component
  const ShimmerProjectCard = () => (
    <div className="mb-8 flex flex-col [@media(min-width:820px)]:flex-row gap-5">
      <div
        className={`${shimmerBg} rounded-lg w-full md:w-[250px] h-[200px] md:h-[130px] animate-pulse`}
      />
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className={`${shimmerBg} h-6 rounded w-4/5 animate-pulse`} />
        <div className="flex gap-5 items-center">
          <div className={`${shimmerBg} h-6 rounded w-24 animate-pulse`} />
          <div className={`${shimmerBg} h-5 rounded w-32 animate-pulse`} />
        </div>
        <div className={`${shimmerBg} h-10 rounded w-36 animate-pulse`} />
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
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
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          <div className="border border-[#555555] rounded-lg pt-3 pr-4 pb-5 pl-2 mb-4">
            <h3 className="text-[20px] font-[400] mb-4">Projects</h3>

            {loading
              ? [...Array(2)].map((_, index) => (
                  <ShimmerProjectCard key={index} />
                ))
              : projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={index !== projects.length - 1 ? "mb-8" : ""}
                  >
                    <div className="flex flex-col [@media(min-width:820px)]:flex-row gap-5 ">
                      <div className="w-full md:w-[250px] h-[200px] md:h-[130px] flex-shrink-0 relative overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt="Project"
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          style={{
                            minWidth: "100%",
                            minHeight: "100%",
                            objectPosition: "center center",
                            transform: "scale(1.2)",
                            backfaceVisibility: "hidden",
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://via.placeholder.com/300x130?text=Project+Image";
                          }}
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <h4 className="sm:text-lg text-[16px] font-semibold mb-3">
                          {project.title}
                        </h4>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-[50px] [@media(max-width:875px)]:gap-2 mb-5">
                          <span className="bg-[#FCE15A] text-black text-sm font-medium px-3 py-1 rounded">
                            From ${project.price}
                          </span>
                          <span
                            className={`font-[500] flex items-center gap-2 ${
                              darkMode ? "text-white" : "text-[#555555]"
                            }`}
                          >
                            <img
                              src={
                                darkMode
                                  ? "src/assets/alarm-clock-light.svg"
                                  : "src/assets/alarm-clock.svg"
                              }
                              className="mt-1 w-[18px]"
                              alt="Delivery Time"
                            />
                            {project.deliveryTime} days delivery
                          </span>
                        </div>

                        <button className="bg-[#E66D3D] w-full sm:w-[150px] text-white font-semibold px-4 py-2 rounded-[5px]">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          <div className="flex sm:justify-end justify-center mr-5 mt-10">
            <button className="border-[#E66D3D] border font-semibold px-8 py-2 rounded-[5px]">
              Manage Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
