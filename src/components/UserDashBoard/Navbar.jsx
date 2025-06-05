import { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink, Link } from "react-router-dom";
import { FiUser, FiTrendingUp, FiSettings, FiLogOut } from "react-icons/fi";
import { MdCardMembership, MdOutlineApps } from "react-icons/md";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";

export default function NavBarUser({ changeMode, role = "user" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  // Define routes for user and client
  const routeMap = {
    user: {
      dashboard: "/dashboard",
      contracts: "/activeContracts",
    },
    client: {
      dashboard: "/clientDashboard",
      contracts: "/clientContracts",
    },
  };

  const routes = role === "client" ? routeMap.client : routeMap.user;

  // Handle dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      const isDark = savedMode === "true";
      setDarkMode(isDark);
      changeMode(isDark);
    } else {
      setDarkMode(false);
      changeMode(false);
    }
  }, [changeMode]);

  const handleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    changeMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div className="relative z-50">
      <nav className="flex justify-between items-center py-3 bg-white h-[60px] shadow-md fixed w-full">
        <div
          className="text-3xl font-bold tracking-wider text-black dark:text-white"
          onClick={() => navigate("/")}
        >
          <h3 className="text-[#000000] font-inter font-[400] pl-6">
            Elevance
          </h3>
        </div>

        {/* Center Icons */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            to={role === "client" ? "/clientDashboard" : routes.dashboard}
            className="relative"
          >
            <img
              src={
                role === "client"
                  ? ["/clientDashboard", "/postJob", "/longTermJob01"].includes(
                      location.pathname
                    )
                    ? "src/assets/UserDashboard/briefcase-orange.svg"
                    : "src/assets/UserDashboard/Briefcase Icon.svg"
                  : [
                      routes.dashboard,
                      "/savedJobs",
                      "/findJobs",
                      "/proposals",
                      "/jobHourly",
                      "/successHourly",
                      "/proposalSuccess",
                      "/applyJob",
                    ].includes(location.pathname)
                  ? "src/assets/UserDashboard/briefcase-orange.svg"
                  : "src/assets/UserDashboard/Briefcase Icon.svg"
              }
              className={`cursor-pointer ${
                role === "client"
                  ? ["/clientDashboard", "/postJob", "/longTermJob01"].includes(
                      location.pathname
                    )
                    ? "w-[35px] h-[35px]"
                    : "w-[50px] h-[50px]"
                  : [
                      routes.dashboard,
                      "/savedJobs",
                      "/findJobs",
                      "/proposals",
                      "/jobHourly",
                      "/successHourly",
                      "/proposalSuccess",
                      "/applyJob",
                    ].includes(location.pathname)
                  ? "w-[35px] h-[35px]"
                  : "w-[50px] h-[50px]"
              }`}
              alt="Dashboard"
            />

            {(role === "client"
              ? ["/clientDashboard", "/postJob", "/longTermJob01"]
              : [
                  routes.dashboard,
                  "/savedJobs",
                  "/findJobs",
                  "/proposals",
                  "/jobHourly",
                  "/successHourly",
                  "/proposalSuccess",
                  "/applyJob",
                ]
            ).includes(location.pathname) && (
              <div className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#E66D3D]"></div>
            )}
          </Link>

          <Link to={routes.contracts} className="relative">
            <img
              src={
                [
                  routes.contracts,
                  "/contractHistory",
                  "/hourlyWork",
                  "/contractDetails",
                ].includes(location.pathname)
                  ? "src/assets/UserDashboard/safe-delivery-orange.svg"
                  : "src/assets/UserDashboard/Safe Delivery Icon.svg"
              }
              className={`cursor-pointer ${
                [
                  routes.contracts,
                  "/contractHistory",
                  "/hourlyWork",
                  "/contractDetails",
                ].includes(location.pathname)
                  ? "w-[35px] h-[35px]"
                  : "w-[50px] h-[50px]"
              }`}
              alt="Contracts"
            />
            {[
              routes.contracts,
              "/contractHistory",
              "/hourlyWork",
              "/contractDetails",
            ].includes(location.pathname) && (
              <div className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#E66D3D]"></div>
            )}
          </Link>

          <img
            src="src/assets/UserDashboard/Invoice Icon.svg"
            className="w-[50px] h-[50px] cursor-pointer"
            alt="Invoice"
          />
          <img
            src="src/assets/UserDashboard/Message Edit Icon.svg"
            className="w-[50px] h-[50px] cursor-pointer"
            alt="Messages"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 pr-6 relative">
          <button onClick={handleDarkMode}>
            <img
              src={
                darkMode
                  ? "src/assets/darkMode.svg"
                  : "src/assets/lightIcon.svg"
              }
              className="w-[80px] h-[95px] mt-1"
              alt="Toggle Dark Mode"
            />
          </button>

          <div className="ml-3 mr-3">
            <img
              src="src/assets/UserDashboard/notification-02.svg"
              className="w-[22px] h-[22px] cursor-pointer"
              alt="Notifications"
            />
          </div>

          {/* User dropdown */}
          {role === "user" && (
            <div className="relative">
              <img
                src="src/assets/profileImage.jpeg"
                className="w-[32px] h-[32px] cursor-pointer rounded-full"
                alt="User"
                onClick={() => setIsOpen(!isOpen)}
              />

              {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                  <div className="flex items-center gap-3 border-b border-gray-700 pb-3">
                    <img
                      src="src/assets/profileImage.jpeg"
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <div>
                      <h3 className="text-md font-semibold text-[#333333]">
                        Aamir Bashir
                      </h3>
                      <p className="text-sm text-[#333333]">
                        {role === "client" ? "Client" : "Freelancer"}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex justify-between text-[#333333] items-center py-2 cursor-pointer"
                    onClick={() => setIsOnline(!isOnline)}
                  >
                    <span>Online for messages</span>
                    {isOnline ? (
                      <BsToggleOn className="text-green-400 text-2xl" />
                    ) : (
                      <BsToggleOff className="text-gray-400 text-2xl" />
                    )}
                  </div>

                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <FiUser className="w-5 h-5" />
                    <span>Your Profile</span>
                  </NavLink>

                  <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <FiTrendingUp className="w-5 h-5" />
                    <span>Stats and Trends</span>
                  </NavLink>

                  <NavLink
                    to="/membership"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <MdCardMembership className="w-5 h-5" />
                    <span>Membership Plan</span>
                  </NavLink>

                  <NavLink
                    to="/apps"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <MdOutlineApps className="w-5 h-5" />
                    <span>Apps and Offers</span>
                  </NavLink>

                  <div className="flex items-center gap-2 py-2 text-[#333333] cursor-pointer">
                    <FaRegLightbulb className="w-5 h-5" />
                    <span>Theme: Auto</span>
                  </div>

                  <NavLink
                    to="/profileSetting"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <FiSettings className="w-5 h-5" />
                    <span>Account Settings</span>
                  </NavLink>

                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link
                      to="/switch-account"
                      className="sidebar-link text-[#333333]"
                    >
                      Switch Accounts
                    </Link>

                    <button
                      className="sidebar-link mt-4 flex items-center gap-2 text-[#333333]"
                      onClick={() => alert("Logged out")}
                    >
                      <FiLogOut /> Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* client dropdown */}
          {role === "client" && (
            <div className="relative">
              <img
                src="src/assets/profileImage.jpeg"
                className="w-[32px] h-[32px] cursor-pointer rounded-full"
                alt="User"
                onClick={() => setIsOpen(!isOpen)}
              />

              {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                  <div className="flex items-center gap-3 border-b border-gray-700 pb-3">
                    <img
                      src="src/assets/profileImage.jpeg"
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <div>
                      <h3 className="text-md font-semibold text-[#333333]">
                        Aamir Bashir
                      </h3>
                      <p className="text-sm text-[#333333]">
                        {role === "client" ? "Client" : "Freelancer"}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex justify-between text-[#333333] items-center py-2 cursor-pointer"
                    onClick={() => setIsOnline(!isOnline)}
                  >
                    <span>Online for messages</span>
                    {isOnline ? (
                      <BsToggleOn className="text-green-400 text-2xl" />
                    ) : (
                      <BsToggleOff className="text-gray-400 text-2xl" />
                    )}
                  </div>

                  <NavLink
                    to="/membership"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <MdCardMembership className="w-5 h-5" />
                    <span>Membership Plan</span>
                  </NavLink>

                  <NavLink
                    to="/apps"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <MdOutlineApps className="w-5 h-5" />
                    <span> Invite a coworker</span>
                  </NavLink>

                  <div className="flex items-center gap-2 py-2 text-[#333333] cursor-pointer">
                    <FaRegLightbulb className="w-5 h-5" />
                    <span>Theme: Auto</span>
                  </div>

                  <NavLink
                    to="/clientSetting"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 text-[#333333] ${
                        isActive ? "bg-[#E66D3D] text-white -mx-4 px-4" : ""
                      }`
                    }
                  >
                    <FiSettings className="w-5 h-5" />
                    <span>Account Settings</span>
                  </NavLink>

                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link
                      to="/switch-account"
                      className="sidebar-link text-[#333333]"
                    >
                      Switch Accounts
                    </Link>

                    <button
                      className="sidebar-link mt-4 flex items-center gap-2"
                      onClick={() => alert("Logged out")}
                    >
                      <FiLogOut /> Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent navbar overlap */}
      <div className="pt-[60px]"></div>
    </div>
  );
}
