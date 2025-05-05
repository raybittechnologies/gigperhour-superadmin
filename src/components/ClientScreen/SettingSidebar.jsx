import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ClientSideBarSetting({ activeTab }) {
  const location = useLocation();
  const isTabActive = (tabName) => {
    return new URLSearchParams(location.search).get("tab") === tabName;
  };

  return (
    <aside className="col-span-2  bg-white shadow-md pt-4 pb-2 pr-0 pl-2 rounded-md   ">
      <div className="flex items-center space-x-3">
        <h4 className="font-[500] text-lg font-inter text-[#333333]">
          Settings
        </h4>
      </div>
      {/* Profile Section */}

      {/* Sidebar Navigation */}
      <nav className="mt-4">
        <ul className="space-y-3 text-gray-700">
          {/* Profile Overview */}
          <li>
            <ul className="mt-2  text-sm">
              <li className="">
                <NavLink
                  to="/clientSettings"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
                      isActive
                        ? "bg-[#E66D3D] text-white -mx-4 px-4"
                        : "text-[#333333]"
                    }`
                  }
                >
                  <img
                    src="src/assets/UserDashboard/user-account.svg"
                    alt="Proposals"
                  />
                  My Info
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/jobDashboard?tab=contracts"
                  className={`font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
                    isTabActive("contracts")
                      ? "bg-[#E66D3D] text-white -mx-4 px-4"
                      : "text-[#333333]"
                  }`}
                >
                  <img
                    src="src/assets/UserDashboard/user-account.svg"
                    alt="Proposals"
                  />
                  Billing & Payments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profileSetting"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
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
                  Password & Security
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/searchTalent"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
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
                  Membership Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hiredTalent"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
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
                  Teams
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/savedTalent"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
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
                  Identity Verification
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/working"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
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
                  Notification Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/working"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
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
                  Members & Permissions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/working"
                  className={({ isActive }) =>
                    `font-inter font-[300] text-[14px] py-[6px]  flex items-center gap-2 ${
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
                  Tax Information
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Organize Financials */}
          <li>
            <button className="w-full flex items-center justify-between font-[400] font-inter  mt-9 ">
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
            <button className="w-full flex items-center mb-4 justify-between font-[400] font-inter pb-1">
              <div className="flex items-center gap-2 ">
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
