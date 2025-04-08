import { useState,useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";

export default function Notifications() {
  const [darkMode, setDarkMode] = useState(false);

  const [open, setOpen] = useState(null);

  const optionsMap = {
    showNotifications: ["All activity", "Mentions only", "Direct messages"],
    messageCounter: ["All activity"],
    unreadActivity: ["All activity"],
    emailInterval: ["Every 10 minutes"],
    recruitingEmails: ["Only jobs I post"],
    contractEmails: ["Only freelancers I hire"],
    groupInvitations: ["Group member"],
    communication: ["Send me useful emails"],
  };

  const [formData, setFormData] = useState({
    showNotifications: "All activity",
    unreadActivity: "All activity",
    messageCounter: "All activity",
    emailInterval: "Every 10 minutes",
    recruitingEmails: "Only jobs I post",
    contractEmails: "Only freelancers I hire",
    groupInvitations: "Group member",
    communication: "Send me useful emails",
    taxUpdates: false,
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setOpen(null);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  const renderCustomSelect = (label, name) => (
    <div>
      <label className="block font-[400] mb-1">{label}</label>
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setOpen(open === name ? null : name)}
          className={`w-full bg-transparent text-left  rounded p-2 flex items-center justify-between ${
            darkMode ? "border border-[#E9E9E9]" : "border border-[#555555]"
          }`}
        >
          <span>{formData[name]}</span>
          <img
            src={
              darkMode
                ? "src/assets/UserDashboard/arrow-light.svg"
                : "src/assets/UserDashboard/arror dark.svg"
            }
            alt="Dropdown icon"
            className={`w-3 h-3 transition-transform duration-200 mr-2 ${
              open === name ? "rotate-180" : ""
            }`}
          />
        </button>

        {open === name && (
          <ul className="absolute z-10 mt-1 w-full border border-[#555555] bg-white dark:bg-white rounded shadow">
            {optionsMap[name].map((option) => (
              <li
                key={option}
                onClick={() => handleChange(name, option)}
                className="px-4 py-2 text-black hover:bg-[#E66D3D] hover:text-white cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : " text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} darkMode={darkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div
            className={`border rounded-lg px-3 pt-2 pb-6 ${
              darkMode ? "border-white" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-[400] mb-4">Notification Settings</h2>
            <h3 className="text-lg font-semibold mb-2">Messages</h3>
            {/* Messages Section */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {renderCustomSelect(
                "Show notifications for",
                "showNotifications"
              )}
              {renderCustomSelect(
                "Increment message counter for",
                "messageCounter"
              )}
              {renderCustomSelect(
                "Send an email with unread activity for",
                "unreadActivity"
              )}
              {renderCustomSelect("Email interval", "emailInterval")}
            </div>

            {/* Email Updates */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Email Updates</h3>
              <p
                className={`mb-3 ${
                  darkMode ? "text-[#E9E9E9]" : "text-gray-600"
                }`}
              >
                Sending on w*****56@gmail.com
              </p>

              <div className="grid grid-cols-2 gap-6">
                {renderCustomSelect(
                  "Receive recruiting emails for",
                  "recruitingEmails"
                )}
                {renderCustomSelect(
                  "Receive contract emails for",
                  "contractEmails"
                )}
                {renderCustomSelect(
                  "Groups and invitations",
                  "groupInvitations"
                )}
                {renderCustomSelect(
                  "Communication from Elevance",
                  "communication"
                )}
              </div>
            </div>

            {/* Tax Updates */}
            <h3 className="text-lg font-semibold mb-2">Tax Updates</h3>
            <div className="mt-4 flex items-center">
              <label className="relative inline-block w-5 h-5">
                <input
                  type="checkbox"
                  name="taxUpdates"
                  checked={formData.taxUpdates}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      taxUpdates: e.target.checked,
                    })
                  }
                  className="peer absolute opacity-0 w-5 h-5"
                />
                <div className="w-5 h-5 border border-[#E66D3D] rounded bg-transparent flex items-center justify-center">
                  <svg
                    className={`w-4 h-4 pointer-events-none transition-opacity duration-200 ${
                      formData.taxUpdates
                        ? "opacity-100 text-[#E66D3D]"
                        : "opacity-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </label>

              <label
                className={`ml-3 ${
                  darkMode ? "text-[#E9E9E9]" : "text-gray-700"
                }`}
              >
                I want to receive tax documents digitally (including Form
                1099-K)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
