import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ClientSideBar({ activeTab }) {
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
    <aside className="col-span-2  bg-white shadow-md pt-4 pb-2 pr-0 pl-2 rounded-md   ">
      <div className="flex items-center space-x-3">
        <img
          src="src/assets/profileImage.jpeg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <h4 className="font-[500] text-lg font-inter text-[#333333]">
          Basit Bashir
        </h4>
      </div>
      {/* Profile Section */}

      {/* Sidebar Navigation */}
      <nav className="mt-4">
        <ul className="space-y-3 text-gray-700">
          {/* Profile Overview */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("Profile")}
            >
              Hire Talent
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
                <li className="">
                  <NavLink
                    to="/jobDashboard?tab=jobs"
                    className={() =>
                      `relative z-10 font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        activeTab === "jobs"
                          ? "text-white bg-[#E66D3D] -mx-2 pl-2 overflow-y-auto"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <img
                        src="src/assets/UserDashboard/user.svg"
                        alt="Job Posts"
                      />
                      Job Posts & Proposals
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/jobDashboard"
                    className={() =>
                      `relative z-10 font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        activeTab === "contracts"
                          ? "text-white bg-[#E66D3D] -mx-2  pl-2 overflow-y-auto"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <img
                        src="src/assets/UserDashboard/user.svg"
                        alt="Contracts"
                      />
                      Pending offers
                    </span>
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
                    Post a Job
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/searchTalent"
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
                    Search for Talents
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hiredTalent"
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
                    Talents you’ve Hired
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/savedTalent"
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
                    Talents you’ve Saved
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/working"
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
                    Bring Talent to Elevance
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
              Manage Work
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
                    Your Contracts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/timesheets"
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
                    TimeSheets
                  </NavLink>
                </li>
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
          {/*Reports */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("Work")}
            >
              Reports
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
          <li>
            <button
              className="w-full flex items-center justify-between font-[400] font-inter "
              onClick={() => toggleSection("support")}
            >
              <div className="flex items-center gap-2">
                <img
                  src="src/assets/UserDashboard/customer-service-01.svg"
                  alt="Support Icon"
                  className="w-5 h-5"
                />
                <span>Messages</span>
              </div>
            </button>
          </li>
          {/* Organize Financials */}
          <li>
            <button
              className="w-full flex items-center justify-between font-[400] font-inter  "
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
              className="w-full flex items-center justify-between font-[400] font-inter pb-1"
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
