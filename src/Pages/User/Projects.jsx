import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  // Dummy Data for Multiple Projects
  const projects = [
    {
      id: 1,
      image: "src/assets/UserDashboard/Portfolio Item Image.svg",
      title:
        "You will get Complete Cab Booking Solution: Mobile Apps and Dashboard",
      price: 999,
      deliveryTime: 10,
    },
    {
      id: 2,
      image: "src/assets/UserDashboard/Portfolio Item Image.svg",
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
          <h3 className="text-xl font-semibold mb-4">Projects</h3>

          {/* Project Cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-[#555555] rounded-lg p-4 flex items-center gap-6 mb-4"
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt="Project"
                className="w-[300px] h-[130px] object-cover rounded-lg"
                style={{ borderRadius: "12px" }}
              />

              {/* Content Section */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-3">{project.title}</h4>

                {/* Price and Delivery */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="bg-[#FCE15A] text-black text-sm font-medium px-3 py-1 rounded">
                    From ${project.price}
                  </span>
                  <span className="text-gray-500 flex items-center">
                    ⏰ {project.deliveryTime} days delivery
                  </span>
                </div>

                {/* View Project Button */}
                <button className="bg-[#E66D3D] w-[150px] text-white font-semibold px-4 py-2 rounded-[5px]">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
