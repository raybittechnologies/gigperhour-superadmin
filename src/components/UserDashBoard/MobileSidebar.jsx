import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { CiBookmark, CiSearch, CiDiscount1, CiDollar } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { ImFileText2 } from "react-icons/im";

export default function SideBar() {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(true);

  const [openDropdowns, setOpenDropdowns] = useState([
    "Work",
    "Expand Client Reach",
    "Submit Work",
    "Organize Financials",
    "Payouts",
    "Tax details",
  ]);

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const links = [
    {
      label: "Work",
      dropdown: [
        {
          to: "/savedJobs",
          label: "Saved Jobs",
          icon: ({ isActive }) => (
            <CiBookmark
              strokeWidth={0.5}
              className={`w-[18px] h-[17px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            />
          ),
        },
        {
          to: "/findJobs",
          label: "Find Jobs",
          icon: ({ isActive }) => (
            <CiSearch
              strokeWidth={0.5}
              className={`w-[18px] h-[17px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            />
          ),
        },
        {
          to: "/proposals",
          label: "Proposals & offers",
          icon: ({ isActive }) => (
            <CiDiscount1
              strokeWidth={0.5}
              className={`w-[18px] h-[17px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            />
          ),
        },
      ],
    },
    {
      label: "Expand Client Reach",
      dropdown: [
        {
          to: "/serv",
          label: "Your services",
          icon: "src/assets/agreement-02.svg",
        },
        {
          to: "/promote",
          label: "Promote with ads",
          icon: "src/assets/promotion.svg",
        },
        {
          to: "/directContracts",
          label: "Direct Contracts",
          icon: "src/assets/contracts.svg",
        },
      ],
    },
    {
      label: "Submit Work",
      dropdown: [
        {
          to: "/activeContracts",
          label: "Active Contracts",
          icon: ({ isActive }) => (
            <ImFileText2
              strokeWidth={0.01}
              className={`w-[18px] h-[17px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            />
          ),
        },
        {
          to: "/contractHistory",
          label: "Contract History",
          icon: ({ isActive }) => (
            <img
              src={
                isActive
                  ? "src/assets/userDashboard/work-history-white.svg"
                  : "src/assets/work-history.svg"
              }
              alt="history"
              className="w-[18px] h-[19px]"
            />
          ),
        },
        {
          to: "/hourlyWork",
          label: "Hourly work diary",
          icon: ({ isActive }) => (
            <LuAlarmClock
              strokeWidth={1.3}
              className={`w-[18px] h-[18px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            />
          ),
        },
      ],
    },
    {
      label: "Organize Financials",
      dropdown: [
        {
          to: "/chat",
          label: "Financial Overview",
          icon: "src/assets/dollar-022.svg",
        },
        {
          to: "/videoCalls",
          label: "Your reports",
          icon: "src/assets/reports.svg",
        },
        {
          to: "/callss",
          label: "Billings & earnings",
          icon: "src/assets/invoice-03.svg",
        },
        {
          to: "/calls",
          label: "Transactions & invoices",
          icon: ({ isActive }) => (
            <CiDollar
              strokeWidth={0.4}
              className={`w-[18px] h-[18px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            />
          ),
        },
        {
          to: "/callsss",
          label: "Certificate of earnings",
          icon: "src/assets/certificate-01.svg",
        },
      ],
    },
    {
      label: "Payouts",
      dropdown: [
        {
          to: "/chat",
          label: "Withdraw money",
          icon: "src/assets/reverse-withdrawal-02.svg",
        },
      ],
    },
    {
      label: "Tax details",
      dropdown: [
        {
          to: "/chat",
          label: "Tax forms",
          icon: "src/assets/tax.svg ",
        },
      ],
    },
  ];

  const isTabActive = (tabValue) => {
    const params = new URLSearchParams(location.search);
    return params.get("tab") === tabValue;
  };

  return (
    <aside
      className={`bg-white text-[#333] rounded-r-[8px] flex flex-col 
        ${collapsed ? "w-10" : "w-52"} transition-width duration-300 shadow-lg`}
    >
      <div className="flex justify-end p-2 border-b border-gray-200">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[#E66D3D] hover:text-[#bf5b27] focus:outline-none"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <FaAngleDoubleRight size={20} />
          ) : (
            <FaAngleDoubleLeft size={20} />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {!collapsed &&
          links.map((link) => {
            const isOpen = openDropdowns.includes(link.label);
            return (
              <div key={link.label}>
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className="flex items-center justify-between w-full px-2 py-2 font-semibold text-sm cursor-pointer hover:bg-[#f9f2ed] focus:outline-none"
                >
                  <span className="flex items-center gap-3">{link.label}</span>
                  {isOpen ? (
                    <FaChevronUp size={16} color="#E66D3D" />
                  ) : (
                    <FaChevronDown size={16} color="#E66D3D" />
                  )}
                </button>

                {isOpen && (
                  <div className="flex flex-col pl-1">
                    {link.dropdown.map((item) => {
                      const tabValue = item.to.includes("tab=")
                        ? new URLSearchParams(item.to.split("?")[1]).get("tab")
                        : null;

                      const isActive = tabValue
                        ? isTabActive(tabValue)
                        : location.pathname === item.to ||
                          (item.to === "/timesheets" &&
                            location.pathname.startsWith("/timesheet")) ||
                          (item.to === "/contractHistory" &&
                            location.pathname === "/contractDetails");

                      return (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={`flex flex-row gap-2 items-center py-2 px-1 text-xs font-400 rounded
                          ${
                            isActive
                              ? "bg-[#E66D3D] text-white"
                              : "text-[#555] hover:text-[#E66D3D]"
                          }`}
                        >
                          {typeof item.icon === "string" ? (
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-5 h-6 mb-1"
                            />
                          ) : (
                            // React icon component receives isActive
                            item.icon({ isActive })
                          )}

                          <span className="text-center">{item.label}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </nav>

      {!collapsed && (
        <div className="border-t border-gray-200 px-2 py-4 flex flex-col gap-4">
          <NavLink
            to="/support"
            className="flex items-center gap-2 text-xs text-[#555] hover:text-[#E66D3D]"
          >
            <img
              src="src/assets/UserDashboard/customer-service-01.svg"
              alt="Support"
              className="w-5 h-5"
            />
            <span>Support</span>
          </NavLink>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="flex items-center gap-2 text-xs text-[#555] hover:text-[#E66D3D]"
          >
            <img
              src="src/assets/UserDashboard/logout-03.svg"
              alt="Logout"
              className="w-5 h-5"
            />
            <span>Logout</span>
          </button>
        </div>
      )}
    </aside>
  );
}
