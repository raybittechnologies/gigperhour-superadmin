import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineDelete } from "react-icons/ai";

export default function JobLong05() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : " text-[#333333]"
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
          <div
            className={`md:p-6 px-3 py-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <div className="flex justify-between  mb-4">
              <h3 className="md:text-2xl text-xl">Start the conversation.</h3>
              <span className="text-xl">5/5</span>
            </div>
            <p className={` ${darkMode ? "text-[#E9E9E9]" : "text-[#555555]"}`}>
              Talent are looking for :
            </p>
            <ul
              className={`list-disc pl-5 mb-6 ${
                darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
              }`}
            >
              <li>Clear expectations about your task or deliverables</li>
              <li>The skills required for your work</li>
              <li>Good communication</li>
              <li>Details about how you or your team like to work</li>
            </ul>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Enter Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
                className={`md:w-[30vw] w-full border rounded p-3 bg-transparent  resize-none focus:border-[#E66D3D] outline-none ${
                  darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                }`}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 mb-10">
              <label className="flex items-center gap-2 cursor-pointer bg-[#E66D3D] text-white px-4 py-2 rounded">
                <img
                  src="src/assets/clientscreen/file-attachment.svg"
                  className="w-[20px] h-[20px]"
                />
                Attach File
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
              </label>
              <span className="block sm:inline w-full sm:w-auto">
                (Max file size 200MB)
              </span>
            </div>

            {file && (
              <div
                className={`flex items-center bg-[#555555] rounded-md p-2 mb-20   md:w-[320px] ${
                  darkMode
                    ? "text-[#333333] bg-[#E9E9E9]"
                    : "text-white bg-[#555555]"
                }`}
              >
                {/* Thumbnail preview */}
                {file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                )}

                {/* File name and size */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{file.name}</p>
                  <p className="text-xs mt-1">
                    {(file.size / (1024 * 1024)).toFixed(1)}MB
                  </p>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => setFile(null)}
                  className={`ml-2 hover:text-[#E66D3D] ${
                    darkMode ? "text-black" : "text-white"
                  }`}
                >
                  <AiOutlineDelete className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 w-full">
              <button
                className="w-full sm:w-auto border border-[#E66D3D] font-[600] px-6 py-2 rounded-md"
                onClick={() => navigate("/longTermJob04")}
              >
                Back
              </button>
              <button
                className="w-full sm:w-auto bg-[#E66D3D] font-[600] text-white px-6 py-2 rounded-md"
                onClick={() => navigate("/jobReview")}
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
