import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Certifications() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={`${darkMode ? "bg-black text-white" : "text-[#333333]"}`}>
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className="border border-[#555555] rounded-lg pt-2 pb-4 px-6  relative">
            {/* Header Section */}
            <h3 className="text-[22px] font-[400] mb-2">Certifications</h3>

            {/* Plus Icon */}
            <button className="absolute top-4 right-4  w-6 h-6 flex items-center justify-center rounded-full">
              <img src="src\assets\UserDashboard\plus-sig-circle.svg" />
            </button>
            <div className="w-[433px] mx-auto flex flex-col justify-center items-center">
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
                    <select
                      className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none appearance-none pr-8" // Added pr-8 for image spacing
                    >
                      <option value="" disabled selected>
                        Select your certification
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    {/* Custom dropdown image icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <img
                        src="src\assets\arrow-down-01.svg"
                        alt="Dropdown arrow"
                        className="h-5 w-5 mr-4"
                      />
                    </div>
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
