import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function SideBar() {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(true);

  const [openDropdowns, setOpenDropdowns] = useState([
    "User Settings",
    "Billing",
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
      label: "User Settings",
      dropdown: [
        {
          to: "/profile",
          label: "My Profile",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"
                color="currentColor"
              />
            </svg>
          ),
        },
        {
          to: "/contact",
          label: "Contact info",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172S21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828S17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172S4 17.771 4 14z" />
                <path d="M9.8 11.974c-.427-.744-.633-1.351-.757-1.967c-.184-.91.237-1.8.933-2.368c.295-.24.632-.158.806.155l.393.705c.311.558.467.838.436 1.134c-.03.296-.24.537-.66 1.02zm0 0a10.36 10.36 0 0 0 3.726 3.726m0 0c.744.427 1.351.633 1.967.757c.91.184 1.8-.237 2.368-.933c.24-.295.158-.632-.155-.806l-.704-.393c-.56-.311-.839-.467-1.135-.436c-.296.03-.537.24-1.02.66zM5 6H2.5M5 12H2.5M5 18H2.5" />
              </g>
            </svg>
          ),
        },
        {
          to: "/profileSetting",
          label: "Profile settings",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.5 14.012a10.6 10.6 0 0 0-5.922 1.47c-1.415.842-5.125 2.562-2.865 4.715C3.816 21.248 5.045 22 6.59 22H12m3.5-15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M18 20.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 20.713a3.36 3.36 0 0 0 2.774-1.43M18 14.285c1.157 0 2.176.568 2.774 1.43M18 14.287a3.36 3.36 0 0 0-2.774 1.43M18 14.287V13m4 1.929l-1.226.788M14 20.07l1.226-.788M14 14.93l1.226.788M22 20.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"
                color="currentColor"
              />
            </svg>
          ),
        },
        {
          to: "/memberShip",
          label: "Membership & Tokens",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="M14 9h4m-4 3.5h3" />
                <rect width="20" height="18" x="2" y="3" rx="5" />
                <path d="M5 16c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
              </g>
            </svg>
          ),
        },
        {
          to: "/getPaid",
          label: "Get Paid",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="M2 4.5h6.757a3 3 0 0 1 2.122.879L14 8.5m-9 5H2m6.5-6l2 2a1.414 1.414 0 1 1-2 2L7 10c-.86.86-2.223.957-3.197.227L3.5 10" />
                <path d="M5 11v4.5c0 1.886 0 2.828.586 3.414S7.114 19.5 9 19.5h9c1.886 0 2.828 0 3.414-.586S22 17.386 22 15.5v-3c0-1.886 0-2.828-.586-3.414S19.886 8.5 18 8.5H9.5" />
                <path d="M15.25 14a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" />
              </g>
            </svg>
          ),
        },
        {
          to: "/teams",
          label: "My Teams ",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.246 7.5a4.26 4.26 0 0 0 4.25 4.25a4.26 4.26 0 0 0 4.25-4.25a4.26 4.26 0 0 0-4.25-4.25a4.26 4.26 0 0 0-4.25 4.25m1.5 0c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75M2.246 20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-.84.33-1.88 1.25-2.3c2.3-1.04 5.29-1.21 7.79-.46c.39.12.81-.11.93-.5s-.1-.81-.5-.93c-2.84-.85-6.2-.66-8.84.53c-1.32.6-2.13 2-2.13 3.66zm12.249-8.4c-.32 0-.62-.21-.72-.54c-.12-.4.11-.81.5-.93a2.73 2.73 0 0 0 1.96-2.63c0-1.22-.81-2.3-1.96-2.64a.744.744 0 0 1-.5-.93c.12-.4.54-.62.93-.5c1.79.53 3.04 2.21 3.04 4.08s-1.22 3.53-3.04 4.07q-.105.03-.21.03zm2.751 8.4c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h2.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V14c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.25h-2.25c-.41 0-.75.34-.75.75s.34.75.75.75h2.25z"
                color="currentColor"
              />
            </svg>
          ),
        },
        {
          to: "/proponbsdn",
          label: "Connected Services",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M15.656 6.879a.75.75 0 0 0-.646 1.353zm.788 1.788l-.646.38a.75.75 0 0 0 1.323-.056zm2.578-2.118a.75.75 0 0 0-.71-1.32zM21.25 7A4.25 4.25 0 0 1 17 11.25v1.5A5.75 5.75 0 0 0 22.75 7zM17 11.25A4.25 4.25 0 0 1 12.75 7h-1.5A5.75 5.75 0 0 0 17 12.75zM12.75 7A4.25 4.25 0 0 1 17 2.75v-1.5A5.75 5.75 0 0 0 11.25 7zM17 2.75A4.25 4.25 0 0 1 21.25 7h1.5A5.75 5.75 0 0 0 17 1.25zm-1.667 4.806l-.323.676h-.002l-.001-.001l-.003-.002h-.002l.004.001l.042.025c.042.026.11.07.19.136c.162.131.376.343.56.656l1.293-.761a3.9 3.9 0 0 0-.909-1.06a3.3 3.3 0 0 0-.502-.336l-.02-.01h-.002l-.001-.001zm1.111 1.11l.677.325l.001-.003l.007-.014l.03-.06q.042-.083.122-.231c.107-.197.262-.464.45-.75c.398-.603.868-1.156 1.291-1.384l-.71-1.32c-.779.418-1.42 1.254-1.833 1.878a12 12 0 0 0-.696 1.204l-.01.022l-.003.006l-.001.002v.001zm6.306 4.828a.75.75 0 0 0-1.5 0zm-2.216 7.26l.486.572zM3.447 6.234l-.486-.572zm9.545 15.016a.75.75 0 0 0 0 1.5zm1 .746l-.005-.75h-.006zM1.25 10.973a.75.75 0 0 0 1.5.038zM9.26 5.75a.75.75 0 0 0-.023-1.5zm11.99 7.744c0 2.03-.002 3.463-.174 4.55c-.166 1.05-.477 1.67-1.027 2.139l.97 1.143c.916-.778 1.338-1.782 1.539-3.048c.194-1.23.192-2.804.192-4.784zm-8.258 9.256l.954-.004h.058l-.011-.75l-.012-.75h-.052l-.172.002l-.765.002zm1.006-.005c1.706-.012 3.085-.058 4.204-.244c1.131-.188 2.058-.53 2.818-1.175l-.971-1.143c-.482.41-1.119.676-2.093.839c-.988.164-2.258.211-3.969.224zM2.75 11.012c.062-2.42.34-3.49 1.183-4.206L2.96 5.662c-1.402 1.191-1.65 2.92-1.71 5.31zm6.487-6.76c-2.906.044-4.89.233-6.276 1.41l.972 1.144c.912-.776 2.325-1.009 5.327-1.055z"
                />
                <path
                  stroke="currentColor"
                  d="M2.982 21h.01M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"
                />
              </g>
            </svg>
          ),
        },
        {
          to: "/security",
          label: "Password & Security",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="M19 20.5c.425-.191.79-.439 1.109-.76c1.391-1.402 1.391-3.658 1.391-8.17c0-4.511 0-6.767-1.391-8.168C18.717 2 16.479 2 12 2C7.522 2 5.282 2 3.891 3.402S2.5 7.059 2.5 11.57s0 6.767 1.391 8.169c.32.321.684.569 1.109.76M2.5 8.5h19M7 5.5h.009M11 5.5h.009" />
                <path d="M10.26 16.378c-1.08 0-1.543.78-1.663 1.26c-.12.479-.12 2.218-.048 2.938c.24.899.84 1.27 1.428 1.39c.54.049 2.82.03 3.48.03c.96.019 1.68-.341 1.98-1.42c.06-.36.12-2.34-.03-2.939c-.318-.96-1.047-1.259-1.647-1.259m-3.5 0h3.5m-3.5 0c0-.06-.002-.826 0-1.26c0-.398-.034-.78.156-1.13c.71-1.413 2.75-1.27 3.254.17c.087.237.093.612.09.96c-.003.442 0 1.26 0 1.26" />
              </g>
            </svg>
          ),
        },
        {
          to: "/notifications",
          label: "Notifications Settings",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="M12 5a6.85 6.85 0 0 0-6.842 6.491c-.073 1.396.011 2.882-1.236 3.817A2.3 2.3 0 0 0 3 17.153C3 18.15 3.782 19 4.8 19h14.4c1.018 0 1.8-.85 1.8-1.847c0-.726-.342-1.41-.922-1.845a2.66 2.66 0 0 1-.94-1.308" />
                <path d="M16.016 5h3.672c.773 0 1.16 0 1.262.24s-.16.528-.685 1.104l-3.418 3.312c-.526.576-.934.864-.831 1.104s.634.24 1.407.24H21M10.5 3.125C10.5 3.953 11.172 5 12 5s1.5-1.047 1.5-1.875S12.828 2 12 2s-1.5.297-1.5 1.125M15 19a3 3 0 1 1-6 0" />
              </g>
            </svg>
          ),
        },
      ],
    },
    {
      label: "Billing",
      dropdown: [
        {
          to: "/billing01",
          label: "Billing & Payments",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[16px] h-[16px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <path d="m16.44 21.348l.553-.69c.485-.607 1.516-.558 1.925.09c.493.781 1.711.626 2.049-.092c.018-.037-.026.056.011-.267c.038-.323.022-.397-.01-.544l-1.922-9.08c-.484-2.283-.725-3.424-1.557-4.095C16.66 6 15.485 6 13.14 6h-2.277c-2.347 0-3.52 0-4.351.67c-.832.67-1.073 1.812-1.557 4.094l-1.923 9.08c-.031.148-.047.222-.01.545c.038.323-.005.23.012.267c.338.718 1.556.874 2.049.093c.41-.649 1.44-.698 1.925-.091l.552.69c.696.87 2.15.87 2.845 0l.087-.109c.738-.922 2.28-.922 3.018 0l.087.109c.696.87 2.149.87 2.845 0" />
                <path d="M2.483 9.5c-.585-.608-.475-1.391-.475-3.348s0-2.936.586-3.544C3.179 2 4.12 2 6.005 2h11.99c1.884 0 2.826 0 3.412.608s.585 1.587.585 3.544s.11 2.74-.476 3.348M12 10H9m5 4H8" />
              </g>
            </svg>
          ),
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
                          (item.to === "/billing01" &&
                            location.pathname.startsWith("/billing02")) ||
                          (item.to === "/contractHistory" &&
                            location.pathname === "/billing02");

                      return (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={`flex flex-row gap-2 items-center py-2 px-1 text-xs font-[400] rounded
                          ${
                            isActive
                              ? "bg-[#E66D3D] text-white"
                              : "text-[#333333] hover:text-[#E66D3D]"
                          }`}
                        >
                          {typeof item.icon === "function" ? (
                            item.icon({ isActive })
                          ) : (
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-6 h-6 mb-1"
                            />
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
            className="flex items-center gap-2 text-xs text-[#333333] hover:text-[#E66D3D]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z" />
                <path d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5" />
              </g>
            </svg>
            <span>Support</span>
          </NavLink>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="flex items-center gap-2 text-xs text-[#333333] hover:text-[#E66D3D]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 17.625c-.074 1.852-1.617 3.424-3.684 3.374c-.481-.012-1.076-.18-2.265-.515c-2.861-.807-5.345-2.164-5.941-5.203C3 14.724 3 14.095 3 12.837v-1.674c0-1.257 0-1.886.11-2.445c.596-3.038 3.08-4.395 5.941-5.202c1.19-.335 1.784-.503 2.265-.515c2.067-.05 3.61 1.522 3.684 3.374M21 12H10m11 0c0-.7-1.994-2.008-2.5-2.5M21 12c0 .7-1.994 2.008-2.5 2.5"
                color="currentColor"
              />
            </svg>{" "}
            <span>Logout</span>
          </button>
        </div>
      )}
    </aside>
  );
}
