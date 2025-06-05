import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function UserExperience() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="border border-[#555555] rounded-lg pt-2 pb-4 px-6  relative">
            {/* Header Section */}
            <h3 className="text-[22px] font-[400] mb-2">Other Experiences</h3>

            {/* Plus Icon */}
            <button
              className="absolute top-4 right-4  w-6 h-6 flex items-center justify-center rounded-full "
              onClick={togglePopup}
            >
              <img src="src\assets\UserDashboard\plus-sig-circle.svg" />
            </button>

            {/* Handshake Image */}
            <div className="flex justify-center items-center w-full h-full">
              <DotLottieReact
                src="src/assets/UserDashboard/Animation - 1743577737659exp.lottie"
                loop
                autoplay
                className="w-[300px] h-[200px]"
              />
            </div>

            {/* Description */}
            <h3 className=" text-center  sm:text-[20px] text-[17px]">
              Add any other experiences that help you stand out
            </h3>
          </div>
        </div>

        {/* Popup Component */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10] ">
            <div className="bg-white px-6 py-3 rounded-lg shadow-lg  w-[600px]">
              {/* Header Section */}
              <div className="flex justify-between  mb-4">
                <h3 className="text-[22px]  text-[#333333] font-[400]">
                  Add other Experience
                </h3>
                <button onClick={togglePopup}>
                  {" "}
                  <img src="src/assets/UserDashboard/cancel-02.svg" />
                </button>
              </div>

              {/* Form Section - Simplified */}
              <div className="">
                {/* First name field */}
                <div>
                  <label className="block text-[#333333] font-[400] text-[20px] mb-1">
                    Subject
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Enter Subject"
                      className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none pr-8"
                    />
                  </div>
                </div>

                <div className="mt-9">
                  <textarea
                    placeholder="Start Typing here..."
                    className="w-full border  border-[#555555] rounded-[5px]  text-[#333333] p-2 h-24 focus:border-[#E66D3D] focus:outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex justify-end mt-4 gap-4">
                <button
                  className="border border-[#E66D3D] text-[#333333] font-[600] text-[16px] px-7 py-2 rounded"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button className="bg-[#E66D3D] text-white font-[600] text-[16px] px-7 py-2 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
