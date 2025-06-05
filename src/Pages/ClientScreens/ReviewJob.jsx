import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dummyJobData = {
  title: "UI / UX",
  description: `We are looking for a talented and creative UI/UX Designer to join our product team. You will be responsible for crafting intuitive and visually appealing user interfaces for our web and mobile platforms. The ideal candidate should have a strong portfolio, experience with Figma or similar tools, and the ability to transform complex requirements into elegant design solutions.

`,
  category: "Product Management",
  skills: ["Web Design", "Figma", "Illustrator", "NextJS", "ReactJS"],
  scope: "Medium, 3 to 6 months, Entry level",
  budget: "$400.00",
};

function ShimmerReviewJob({ darkMode }) {
  const shimmerClass = "bg-gray-300 dark:bg-[#2b2b2b] animate-pulse rounded";
  return (
    <div className="md:p-6 px-3 py-6 border rounded-lg border-[#555555] space-y-6">
      <div className={`${shimmerClass} h-6 w-1/3`} />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="space-y-2 border-t border-[#555555] pt-5">
          <div className={`${shimmerClass} h-4 w-1/4`} />
          <div className={`${shimmerClass} h-4 w-5/6`} />
          <div className={`${shimmerClass} h-4 w-2/3`} />
        </div>
      ))}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 w-full">
        <div className={`${shimmerClass} h-10 w-full sm:w-32`} />
        <div className={`${shimmerClass} h-10 w-full sm:w-32`} />
      </div>
    </div>
  );
}

export default function ReviewJob() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const job = dummyJobData;
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
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
          {isLoading ? (
            <ShimmerReviewJob darkMode={darkMode} />
          ) : (
            <div
              className={`md:p-6 px-3 py-6 border rounded-lg ${
                darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
              }`}
            >
              <h3 className="md:text-2xl text-xl mb-6">Review Job Details</h3>

              {/* Title */}
              <div>
                <div className="flex justify-between items-center py-3">
                  <div className="text-xl">{job.title}</div>
                  <img
                    src="src/assets/UserDashboard/edit-02-orange.svg"
                    className="w-5 h-5 self-center"
                  />
                </div>
                <div className="flex justify-between items-start py-5 border-t md:px-6 px-3 md:-mx-6  -mx-3 border-[#555555] md:text-sm text-xs ">
                  <p>{job.description}</p>
                  <img
                    src="src/assets/UserDashboard/edit-02-orange.svg"
                    className="w-5 h-5 flex-shrink-0 "
                  />
                </div>
              </div>

              {/* Category */}
              <div className="border-t flex justify-between  md:px-6 px-3 md:-mx-6  -mx-3  py-5  border-[#555555] pt-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium m-0 leading-none">Category</p>
                  </div>
                  <p className="mt-3 md:text-sm text-xs ">{job.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/UserDashboard/edit-02-orange.svg"
                    className="w-5 h-5 self-center flex-shrink-0"
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="border-t flex justify-between md:px-6 px-3 md:-mx-6  -mx-3 py-5 border-[#555555] pt-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium m-0 leading-none">Skills</p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-[#D9D9D9] text-[#555555] px-2 py-1  rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex  gap-2">
                  {" "}
                  <img
                    src="src/assets/UserDashboard/edit-02-orange.svg"
                    className="w-5 h-5  flex-shrink-0"
                  />
                </div>
              </div>

              {/* Scope */}
              <div className="border-t flex justify-between  md:px-6 px-3 md:-mx-6  -mx-3 py-5 border-[#555555] pt-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium m-0 leading-none">Scope</p>
                  </div>
                  <p className="mt-3 md:text-sm text-xs ">{job.scope}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/UserDashboard/edit-02-orange.svg"
                    className="w-5 h-5 flex-shrink-0 "
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="border-t flex justify-between  md:px-6 px-3 md:-mx-6  -mx-3 py-5 border-b border-[#555555] pt-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium m-0 leading-none">Budget</p>
                  </div>
                  <p className="mt-3 md:text-sm text-xs ">{job.budget}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/UserDashboard/edit-02-orange.svg"
                    className="w-5 h-5 flex-shrink-0"
                  />
                </div>
              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 w-full">
                <button
                  className="w-full sm:w-auto border border-[#E66D3D] font-[600] px-6 py-2 rounded-md"
                  onClick={() => navigate("/longTermJob05")}
                >
                  Back
                </button>
                <button
                  className="w-full sm:w-auto bg-[#E66D3D] font-[600] text-white px-6 py-2 rounded-md"
                  onClick={() => navigate("/FinalizeJob")}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
