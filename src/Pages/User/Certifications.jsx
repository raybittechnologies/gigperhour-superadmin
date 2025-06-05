import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Certifications() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
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
            <h3 className="text-[22px] font-[400] mb-2">Certifications</h3>

            {/* Plus Icon */}
            <button className="absolute top-4 right-4  w-6 h-6 flex items-center justify-center rounded-full">
              <img src="src\assets\UserDashboard\plus-sig-circle.svg" />
            </button>
            <div className="sm:w-[433px] mx-auto flex flex-col justify-center items-center">
              {/* Handshake Image */}
              <div className="flex justify-center items-center w-full">
                <DotLottieReact
                  src="src/assets/UserDashboard/Animation - 1743070657468.lottie"
                  loop
                  autoplay
                  className="w-[300px] h-[200px]"
                />
              </div>

              {/* Description */}
              <p className="mb-4 text-center">
                Listing your certifications can help prove your specific
                knowledge or abilities.
              </p>

              {/* Request a Testimonial Link */}
              <div className="text-center" onClick={togglePopup}>
                <a href="#" className="text-[#E66D3D] underline font-semibold">
                  Add Manually
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Component */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10] ">
            <div className="bg-white px-6 py-3 rounded-lg shadow-lg  w-[600px]">
              {/* Header Section */}
              <div className="flex justify-between  mb-4">
                <h3 className="text-[22px]  text-[#333333] font-[400]">
                  Add Certification
                </h3>
                <button onClick={togglePopup}>
                  {" "}
                  <img src="src/assets/UserDashboard/cancel-02.svg" />
                </button>
              </div>

              {/* Form Section - Simplified */}
              <div className="mb-[120px]">
                {/* First name field */}
                <div>
                  <label className="block text-[#333333] font-[500] text-[20px] mb-1">
                    Certificate
                  </label>
                  <div className="relative w-full">
                    <div
                      className="flex items-center justify-between border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 cursor-pointer focus-within:border-[#E66D3D] bg-white"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span
                        className={selected ? "text-[#333]" : "text-[#888]"}
                      >
                        {selected || "Select your certification"}
                      </span>
                      <img
                        src="src/assets/arrow-down-01.svg"
                        alt="Dropdown arrow"
                        className="h-5 w-5"
                      />
                    </div>

                    {isOpen && (
                      <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded-[5px] shadow-lg">
                        {options.map((option, index) => (
                          <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="p-2 hover:bg-[#E66D3D] cursor-pointer text-[15px] text-[#333] hover:text-white"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex justify-end mt-4 gap-4">
                <button
                  className="border border-[#E66D3D] text-[#333333] font-[600] text-[16px] px-9 py-2 rounded"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button className="bg-[#E66D3D] text-white font-[600] text-[16px] px-4 py-2 rounded">
                  Add Certification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
