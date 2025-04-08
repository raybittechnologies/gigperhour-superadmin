import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";

export default function Security() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileAppEnabled, setMobileAppEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [authenticatorEnabled, setAuthenticatorEnabled] = useState(false);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} darkMode={darkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div
            className={`border rounded-lg pl-3 pr-[100px] pt-2 pb-6  ${
              darkMode ? "border-white" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Password and security
            </h2>

            {/* Password Section */}
            <div className="mb-6 justify-between flex">
              <div>
                <p className="font-[400]">Elevance password</p>
                <p className=" ">You ve set an Upwork password.</p>
              </div>
              <button className="mt-2 px-4 py-2 border border-red-500 text-red-500 rounded-md">
                Change Password
              </button>
            </div>

            {/* Google Login Section */}
            <div className="mb-6 flex justify-between">
              <div>
                <p className="font-[400]">Log in with Google</p>
                <p className="">
                  You’ve set up login with your Google account
                  (a******ar@gmail.com).
                </p>
              </div>
              <button className="mt-2 px-10 py-2 border border-red-500 text-red-500 rounded-md">
                Disconnect
              </button>
            </div>

            {/* Apple Login Section */}
            <div className="mb-6 flex justify-between">
              <div>
                <p className="font-[400]">Log in with Apple</p>
                <p className="">
                  Not connected. You can choose to log in with Apple.
                </p>
              </div>
              <button className="mt-2 px-[50px] py-2 border border-red-500 text-red-500 rounded-md">
                Connect
              </button>
            </div>

            {/* Two-Step Verification */}
            <h3 className="text-xl font-semibold mt-8 mb-4">
              Two-step verification
            </h3>

            <div className="space-y-4 mr-[50px]">
              {/* Mobile App Notifications */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-[400] text-sm ">
                    Mobile app notifications
                  </p>
                  <p className="text-sm ">
                    Verify notifications with your Upwork mobile app.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={mobileAppEnabled}
                    onChange={() => setMobileAppEnabled(!mobileAppEnabled)}
                  />

                  <div
                    className={`w-11 h-6 rounded-full peer 
    ${
      darkMode
        ? "dark:bg-[white] peer-checked:bg-[white]"
        : "dark:bg-[#555555] peer-checked:bg-[#555555]"
    } 
    
    peer-checked:after:translate-x-full peer-checked:after:bg-[#E66D3D] 
    after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
    after:bg-[#333333] after:rounded-full after:h-5 after:w-5 
    after:transition-all`}
                  ></div>
                </label>
              </div>

              {/* SMS Text Messages */}
              <div className="flex justify-between items-center ">
                <div>
                  <p className="font-[400] text-sm">SMS text messages</p>
                  <p className="text-sm ">
                    Verify one-time codes sent to your mobile number.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={smsEnabled}
                    onChange={() => setSmsEnabled(!smsEnabled)}
                  />
                  <div
                    className={`w-11 h-6 rounded-full peer 
    ${
      darkMode
        ? "dark:bg-[white] peer-checked:bg-[white]"
        : "dark:bg-[#555555] peer-checked:bg-[#555555]"
    } 
    
    peer-checked:after:translate-x-full peer-checked:after:bg-[#E66D3D] 
    after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
    after:bg-[#333333] after:rounded-full after:h-5 after:w-5 
    after:transition-all`}
                  ></div>{" "}
                </label>
              </div>

              {/* Authenticator App Codes */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-[400] text-sm">Authenticator app codes</p>
                  <p className="text-sm">
                    Verify one-time codes generated in your preferred
                    third-party authenticator app.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={authenticatorEnabled}
                    onChange={() =>
                      setAuthenticatorEnabled(!authenticatorEnabled)
                    }
                  />
                  <div
                    className={`w-11 h-6 rounded-full peer 
    ${
      darkMode
        ? "dark:bg-[white] peer-checked:bg-[white]"
        : "dark:bg-[#555555] peer-checked:bg-[#555555]"
    } 
    
    peer-checked:after:translate-x-full peer-checked:after:bg-[#E66D3D] 
    after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
    after:bg-[#333333] after:rounded-full after:h-5 after:w-5 
    after:transition-all`}
                  ></div>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
