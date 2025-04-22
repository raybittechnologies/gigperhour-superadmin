import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState } from "react";
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

export default function ReviewJob() {
  const [darkMode, setDarkMode] = useState(false);
  const job = dummyJobData;
  const navigate = useNavigate();

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
            <h3 className="text-2xl mb-6">Review Job Details</h3>

            {/* Title */}
            <div>
              <div className="flex justify-between items-center py-3">
                <div className="text-xl">{job.title}</div>
                <img
                  src="src/assets/UserDashboard/edit-02-orange.svg"
                  className="w-5 h-5 self-center"
                />
              </div>
              <div className="flex justify-between items-start py-5 border-t px-6 -mx-6 border-[#555555] ">
                <p>{job.description}</p>
                <img
                  src="src/assets/UserDashboard/edit-02-orange.svg"
                  className="w-5 h-5 self-center"
                />
              </div>
            </div>

            {/* Category */}
            <div className="border-t flex justify-between px-6 -mx-6 py-5  border-[#555555] pt-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium m-0 leading-none">Category</p>
                </div>
                <p className="mt-3">{job.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="src/assets/UserDashboard/edit-02-orange.svg"
                  className="w-5 h-5 self-center"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="border-t flex justify-between px-6 -mx-6 py-5 border-[#555555] pt-3">
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
              <div className="flex items-center gap-2">
                {" "}
                <img
                  src="src/assets/UserDashboard/edit-02-orange.svg"
                  className="w-5 h-5 self-center"
                />
              </div>
            </div>

            {/* Scope */}
            <div className="border-t flex justify-between px-6 -mx-6 py-5 border-[#555555] pt-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium m-0 leading-none">Scope</p>
                </div>
                <p className="mt-3">{job.scope}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="src/assets/UserDashboard/edit-02-orange.svg"
                  className="w-5 h-5 self-center"
                />
              </div>
            </div>

            {/* Budget */}
            <div className="border-t flex justify-between px-6 -mx-6 py-5 border-b border-[#555555] pt-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium m-0 leading-none">Budget</p>
                </div>
                <p className="mt-3">{job.budget}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="src/assets/UserDashboard/edit-02-orange.svg"
                  className="w-5 h-5 self-center"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-6">
              <button
                className="border border-[#E66D3D] font-medium px-7 py-2 rounded hover:bg-[#E66D3D] hover:text-white transition"
                onClick={() => navigate("/longTermJob05")}
              >
                Back
              </button>
              <button
                className="bg-[#E66D3D] font-medium text-white px-6 py-2 rounded hover:bg-[#cc5c2f] transition"
                onClick={() => navigate("/FinalizeJob")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
