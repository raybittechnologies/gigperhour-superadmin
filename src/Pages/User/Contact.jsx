import { useState, useEffect } from "react";

import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [contactInfo] = useState({
    userId: "bwy123nsv",
    name: "Basit Bashir",
    email: "BasitBashir@elevance.com",
  });

  const [locationInfo] = useState({
    timeZone: "UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi",
    address: "Srinagar, Srinagar, JK 191201 India",
    phone: "BasitBashir@elevance.com",
  });
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className="">
            <div className="w-full max-w-4xl space-y-6">
              {/* Contact Info */}
              <div
                className={`p-3 rounded-md border 
    ${
      darkMode
        ? "border-[#E9E9E9] text-white"
        : "border-[#555555] text-[#555555]"
    }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[22px] font-[400]">Contact info</h3>
                  <img src="src/assets/edit.svg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className=" text-sm">User ID</label>
                    <input
                      type="text"
                      value={contactInfo.userId}
                      readOnly
                      className={`w-full  mt-1 border bg-transparent rounded-[5px] p-2 focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D] 
    ${
      darkMode
        ? "border-[#E9E9E9] text-white"
        : "border-[#555555] text-[#555555]"
    }`}
                    />
                  </div>
                  <div>
                    <label className=" text-sm">Name</label>
                    <input
                      type="text"
                      value={contactInfo.name}
                      readOnly
                      className={`w-full border mt-1  bg-transparent rounded-[5px] p-2 focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D] 
                        ${
                          darkMode
                            ? "border-[#E9E9E9] text-white"
                            : "border-[#555555] text-[#555555]"
                        }`}
                    />
                  </div>
                  <div>
                    <label className=" text-sm">Email</label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      readOnly
                      className={`w-full border mt-1 bg-transparent rounded-[5px] p-2 focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D] 
  ${
    darkMode ? "border-[#E9E9E9] text-white" : "border-[#555555] text-[#555555]"
  }`}
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="w-[200px]  bg-[#E66D3D] text-white py-2 rounded-[5px] font-semibold">
                    Close my account
                  </button>
                </div>
              </div>

              {/* Location Info */}
              <div
                className={`p-3 rounded-md border 
    ${
      darkMode
        ? "border-[#E9E9E9] text-white"
        : "border-[#555555] text-[#555555]"
    }`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-[22px] font-[400]">Location</h2>
                  <img src="src/assets/edit.svg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className=" text-sm">Time Zone</label>
                    <textarea
                      value={locationInfo.timeZone}
                      readOnly
                      className={`w-full border text-[13px]  mt-1 h-[42px] bg-transparent rounded-[5px] px-2 
    focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D] resize-none align-top
    ${
      darkMode
        ? "border-[#E9E9E9] text-white"
        : "border-[#555555] text-[#555555]"
    }`}
                      rows={1}
                    />
                  </div>
                  <div>
                    <label className=" text-sm">Address</label>

                    <input
                      type="text"
                      value={locationInfo.address}
                      readOnly
                      className={`w-full text-[13px] h-[41px] mt-1 border bg-transparent rounded-[5px] p-2 
    focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D] 
    ${
      darkMode
        ? "border-[#E9E9E9] text-white"
        : "border-[#555555] text-[#555555]"
    }`}
                    />
                  </div>
                  <div>
                    <label className="text-sm ">Phone</label>
                    <input
                      type="text"
                      value={locationInfo.phone}
                      readOnly
                      className={`w-full text-[13px] h-[41px] border bg-transparent mt-1 rounded-[5px] p-2 
                        focus:outline-none focus:ring-[#E66D3D] focus:border-[#E66D3D] 
                        ${
                          darkMode
                            ? "border-[#E9E9E9] text-white"
                            : "border-[#555555] text-[#555555]"
                        }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
