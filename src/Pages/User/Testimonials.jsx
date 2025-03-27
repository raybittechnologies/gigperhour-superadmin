import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Testimonials() {
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
            <h3 className="text-[22px] font-[400] mb-2">
              Testimonials (Endorsements from past clients)
            </h3>

            {/* Plus Icon */}
            <button className="absolute top-4 right-4  w-6 h-6 flex items-center justify-center rounded-full">
              <img src="src\assets\UserDashboard\plus-sig-circle.svg" />
            </button>

            {/* Handshake Image */}
            <div className="flex justify-center items-center w-full h-full">
              <DotLottieReact
                src="src/assets/UserDashboard/Animation - 1743066691166.lottie"
                loop
                autoplay
                className="w-[300px] h-[200px]"
              />
            </div>

            {/* Description */}
            <p className=" mb-4 text-center">
              Showcase your skills with non-Upwork client testimonials
            </p>

            {/* Request a Testimonial Link */}
            <div className="text-center " onClick={togglePopup}>
              <a href="#" className="text-[#E66D3D] underline font-semibold">
                Request a Testimonial
              </a>
            </div>
          </div>
        </div>

        {/* Popup Component */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10] ">
            <div className="bg-white px-6 py-3 rounded-lg shadow-lg mt-[60px] h-[500px] w-[600px]">
              {/* Header Section */}
              <div className="flex justify-between  mb-4">
                <h3 className="text-[22px]  text-[#333333] font-[400]">
                  Request a client Testimonial
                </h3>
                <button onClick={togglePopup}>
                  {" "}
                  <img src="src/assets/UserDashboard/cancel-02.svg" />
                </button>
              </div>

              {/* Form Section */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* First name  */}
                <div>
                  <label className="block text-[#333333] text-[15px] mb-1">
                    First Name
                  </label>
                  <div className="relative w-full">
                    {/* Select Box */}
                    <input
                      type="text"
                      placeholder=""
                      className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none"
                    />
                  </div>
                </div>

                {/*last name */}
                <div>
                  <label className="block text-[#333333] text-[15px] mb-1">
                    Last Name
                  </label>
                  <div className="relative w-full">
                    {/* Select Box */}
                    <input
                      type="text"
                      placeholder=""
                      className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none"
                    />
                  </div>
                </div>

                {/* email */}
                <div>
                  <label className="block text-[#333333] text-[15px] mb-1">
                    Business Email
                  </label>
                  <input
                    type="text"
                    className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none"
                  />
                </div>

                {/* linkedin */}
                <div>
                  <label className="block text-[#333333] text-[15px] mb-1">
                    Client’s Linkedin
                  </label>
                  <input
                    type="text"
                    className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] text-[15px] mb-1">
                    Client’s Title
                  </label>
                  <input
                    type="text"
                    className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] text-[15px] mb-1">
                    Project Type
                  </label>
                  <input
                    type="text"
                    className="flex items-center border text-[15px] w-full text-[#333333] border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none"
                  />
                </div>
              </div>

              {/* Comment Section */}
              <div>
                <label className="block mb-1 text-[15px] text-[#333333]">
                  Message For Client
                </label>
                <textarea
                  placeholder="Enter message..."
                  className="w-full border  border-[#555555] rounded-[5px] p-2 h-24 focus:border-[#E66D3D] focus:outline-none"
                ></textarea>
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
                  Request Testimonial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
