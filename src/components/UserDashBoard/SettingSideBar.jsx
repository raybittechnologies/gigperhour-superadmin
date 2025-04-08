import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SettingSideBar() {
  const [openSections, setOpenSections] = useState({
    Profile: true,
    Work: true,

    employment: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="col-span-2  bg-white shadow-md p-4 rounded-md  h-[560px] ">
      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <h4 className="font-[500] text-lg font-inter text-[#333333]">
          Settings
        </h4>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-4">
        <ul className="space-y-3 text-gray-700">
          {/* Profile Overview */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("Profile")}
            >
              User Settings
              <span>
                <img
                  src={
                    openSections.Profile
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.Profile && (
              <ul className="mt-2  text-sm">
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/user.svg "
                      alt="Saved Jobs"
                    />{" "}
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/contact-02.svg "
                      alt="Find Jobs"
                    />
                    Contact Info
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profileSetting"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/user-settings-01.svg "
                      alt="Proposals"
                    />{" "}
                    Profile Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/memberShip"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/user-account.svg "
                      alt="Proposals"
                    />{" "}
                    MemberShip & Tokens
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/getPaid"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/payment-02.svg "
                      alt="Proposals"
                    />{" "}
                    Get Paid
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/teams"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/add-team-02.svg "
                      alt="Proposals"
                    />{" "}
                    My Teams
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/rss-connected-02.svg "
                      alt="Proposals"
                    />{" "}
                    Connected Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/security"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/web-security.svg"
                      alt="Proposals"
                    />{" "}
                    Password & Security
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/notifications"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img
                      src="src/assets/UserDashboard/notification-snooze-01.svg "
                      alt="Proposals"
                    />{" "}
                    Notifications Settings
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/*work overview */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("Work")}
            >
              Billing
              <span>
                <img
                  src={
                    openSections.Work
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>

            {openSections.Work && (
              <ul className="mt-2 text-sm">
                <li>
                  <NavLink
                    to="/billing01"
                    className={`font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                      location.pathname.startsWith("/billing")
                        ? "bg-[#E66D3D] text-white -mx-4 px-4"
                        : "text-[#333333]"
                    }`}
                  >
                    <img
                      src="src/assets/UserDashboard/invoice-04.svg "
                      alt="Proposals"
                    />
                    Billing & Payment
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Organize Financials */}
          <li>
            <button
              className="w-full flex items-center justify-between font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("support")}
            >
              <div className="flex items-center gap-2">
                <img
                  src="src/assets/UserDashboard/customer-service-01.svg"
                  alt="Support Icon"
                  className="w-5 h-5"
                />
                <span>Support</span>
              </div>
            </button>
          </li>

          {/* Payouts */}
          <li>
            <button
              className="w-full flex items-center justify-between font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("logout")}
            >
              <div className="flex items-center gap-2">
                <img
                  src="src/assets/UserDashboard/logout-03.svg"
                  alt="Support Icon"
                  className="w-5 h-5"
                />
                <span>Logout</span>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
