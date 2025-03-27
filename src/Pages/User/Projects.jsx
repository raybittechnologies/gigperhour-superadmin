import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import portfolioImage from "../../assets/UserDashboard/Portfolio Item Image.svg";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={`${darkMode ? "bg-black text-white" : "text-[#333333]"}`}>
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className="border border-[#555555] rounded-lg pt-3 pr-4 pb-5 pl-2 mb-4">
            <h3 className="text-[20px] font-[400] mb-4">Projects</h3>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={index !== projects.length - 1 ? "mb-8" : ""}
              >
                <div className="flex gap-[50px]">
                  <div className="w-[250px] h-[130px] flex-shrink-0 relative overflow-hidden rounded-lg">
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
                    <h4 className="text-lg font-semibold mb-3">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-[50px] mb-5">
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
                    <button className="bg-[#E66D3D] w-[150px] text-white font-semibold px-4 py-2 rounded-[5px]">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mr-5 mt-10">
            <button className="border-[#E66D3D] border font-semibold px-8 py-2 rounded-[5px]">
              Manage Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
