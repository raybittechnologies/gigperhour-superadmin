import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/SettingSidebar";

export default function ClientSetting() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10">
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
            <div className="">
              <h3 className="text-2xl font-[400]">My Info</h3>

              <p className="text-sm pt-3 text-[#555555] mb-6">
                This is a Client account
              </p>

              {/* Account Section */}
              <div className="border border-[#555555] rounded-md p-4 mb-6 relative">
                <button className="absolute top-3 right-3 ">
                  <img src="src\assets\edit.svg" />
                </button>
                <div className="flex gap-24 items-center">
                  <img
                    src="src\assets\profileImage.jpeg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-lg text-gray-800 mb-2">
                      B****t B*****r
                    </p>

                    <p className="text-xs text-[#555555]">Client Marketplace</p>
                    <p className="text-sm  mb-2">Raybit Technologies</p>

                    <p className="text-xs text-[#555555]">Email</p>
                    <p className="text-sm ">b****@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Company Section */}
              <div className="border border-[#555555] rounded-md p-4 mb-6 relative">
                <button className="absolute top-3 right-3 ">
                  <img src="src\assets\edit.svg" />
                </button>
                <div className="flex gap-24 items-center">
                  <img
                    src="src/assets/clientscreen/office.svg"
                    alt="Profile"
                    className="w-16 h-16  object-cover"
                  />
                  <div>
                    <p className=" text-lg  mb-2">Raybit Technologies</p>

                    <p className="text-xs text-[#555555]">Industry</p>
                    <p className="text-sm  mb-2">Tech & IT</p>

                    <p className="text-xs text-[#555555]">Size</p>
                    <p className="text-sm ">10-15 Employees</p>
                  </div>
                </div>
              </div>

              {/* Company Contacts Section */}
              <div className="border border-[#555555] rounded-md p-4 mb-6 relative">
                <button className="absolute top-3 right-3 ">
                  <img src="src\assets\edit.svg" />
                </button>
                <div className="flex gap-24 items-center">
                  <img
                    src="src/assets/clientscreen/office.svg"
                    alt="Profile"
                    className="w-16 h-16  object-cover"
                  />
                  <div>
                    <p className="text-xs text-[#555555]"> Owner </p>
                    <p className=" text-sm  mb-2">B****t B*****r</p>

                    <p className="text-xs text-[#555555]">Phone</p>
                    <p className="text-sm  mb-2">+*******2455</p>
                    <p className="text-xs text-[#555555]">Time zone</p>
                    <p className="text-sm  mb-2">
                      UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi
                    </p>

                    <p className="text-xs text-[#555555]">Adress</p>
                    <p className="text-sm ">S***agar S***1201 India JK</p>
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex flex-wrap gap-4  font-[600] justify-end mt-6">
                <button className="bg-[#E66D3D] text-white px-4 py-2 rounded ">
                  Create new account
                </button>
                <button className="border border-[#E66D3D]  px-4 py-2 rounded ">
                  Close Account
                </button>
                <button className="border border-[#E66D3D] px-4 py-2 rounded ">
                  Transfer Ownership
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
