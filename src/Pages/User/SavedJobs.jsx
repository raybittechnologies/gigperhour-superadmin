import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import {
  Star,
  CheckCircle,
  MessageSquare,
  Heart,
  PlusCircle,
} from "lucide-react";
export default function SavedJobs() {
  const [darkMode, setDarkMode] = useState(false);
  const jobs = [
    {
      title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
      type: "Fixed Price · Expert · Est. Budget: $21",
      description:
        "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design...",
      skills: ["Figma", "Web Design", "Responsive design", "Adobe Illustrator"],
      verified: true,
      location: "Greece",
      proposals: "5 to 15",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div
        className="grid grid-cols-12 container mx-auto px-[20px]"
        style={{ padding: "2%" }}
      >
        {/* Sidebar (Left) */}
        <SideBar />

        <div className="container mx-auto pl-6 pb-6 pr-6 col-span-10">
          {/* Job Listings */}
          <div className=" pl-5 space-y-6 w-[628px]">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-lg border ${
                  darkMode
                    ? "bg-transparent text-white border-white"
                    : "bg-white text-black "
                }`}
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <p
                    className={`text-[#555555] text-sm font-[300] ${
                      darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                    }`}
                  >
                    {" "}
                    Posted 1 hour ago
                  </p>
                  <div className="flex space-x-3">
                    <MessageSquare
                      size={18}
                      className="text-gray-400 cursor-pointer"
                    />
                    <Heart size={18} className="cursor-pointer font-[300]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-[400] font-inter mt-2">
                  {job.title}
                </h3>

                {/* Budget & Type */}

                <p
                  className={`text-[#555555] font-[300] text-sm mt-1 ${
                    darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                  }`}
                >
                  {job.type}
                </p>

                {/* Description */}
                <p className="font-[400] text-[15px] mt-3">
                  {job.description}{" "}
                  <span className="text-[#E66D3D] font-semibold cursor-pointer">
                    more
                  </span>
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#D9D9D9] text-[#555555] font-[300] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center mt-4 text-gray-300 text-sm">
                  {job.verified && (
                    <>
                      <CheckCircle size={16} className="text-gray-400" />

                      <span
                        className={`ml-2 text-[#555555] font-[300] ${
                          darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                        }`}
                      >
                        Payment Verified
                      </span>
                    </>
                  )}

                  <div className="flex ml-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-[#FCE15A] fill-[#FCE15A]"
                      />
                    ))}
                  </div>

                  <span
                    className={`ml-4 text-[#555555] font-[300] ${
                      darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                    }`}
                  >
                    $7k+ spent
                  </span>

                  <span
                    className={`flex items-center ml-4 text-[#555555] font-[300] ${
                      darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                    }`}
                  >
                    <PlusCircle size={16} className="mr-1 " />
                    {job.location}
                  </span>
                </div>

                {/* Proposals */}
                <p className="font-[400] text-sm mt-3">
                  Proposals: <span className="text-black">{job.proposals}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
