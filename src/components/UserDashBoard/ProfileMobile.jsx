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
    "Profile Overview",
    "Work Overview",
    "Employment",
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
      label: "Profile Overview",
      dropdown: [
        {
          to: "/profile",
          label: "Profile",
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
          to: "/userRole",
          label: "Role & Skills",
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
                strokeWidth="1.4"
                d="m12 22l-2-6H2l2 6zm0 0h4m-4-9v-.5c0-1.886 0-2.828-.586-3.414S9.886 8.5 8 8.5s-2.828 0-3.414.586S4 10.614 4 12.5v.5m15 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 13.5h6a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-1"
              />
            </svg>
          ),
        },
        {
          to: "/userLanguage",
          label: "Language & Education",
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
                <path d="M7 8.38h4.5m5.5 0h-2.5m-3 0h3m-3 0V7m3 1.38c-.527 1.886-1.632 3.669-2.893 5.236M8.393 17c1.019-.937 2.17-2.087 3.214-3.384m0 0c-.643-.754-1.543-1.973-1.8-2.525m1.8 2.525l1.929 2.005" />
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
              </g>
            </svg>
          ),
        },
        {
          to: "/working",
          label: "Working Preferences",
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
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M14.98 7.016s.5.5 1 1.5c0 0 1.589-2.5 3-3M9.995 2.021c-2.499-.105-4.429.182-4.429.182c-1.219.088-3.555.77-3.555 4.762c0 3.956-.025 8.834 0 10.779c0 1.188.736 3.96 3.282 4.108c3.095.18 8.67.219 11.228 0c.684-.039 2.964-.576 3.252-3.056c.299-2.57.24-4.355.24-4.78" />
                <path d="M22 7.016c0 2.761-2.24 5-5.005 5a5 5 0 0 1-5.005-5c0-2.762 2.241-5 5.005-5a5 5 0 0 1 5.005 5m-15.02 6h4m-4 4h8" />
              </g>
            </svg>
          ),
        },
      ],
    },
    {
      label: "Work Overview",
      dropdown: [
        {
          to: "/portfolio",
          label: "Portfolio",
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
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M2 12c0-4.243 0-6.364 1.172-7.682S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.318S22 7.758 22 12s0 6.364-1.172 7.682S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.318S2 16.242 2 12" />
                <path d="M2 9h8c2.828 0 4.243 0 5.121.879C16 10.757 16 12.172 16 15v6m-6 0V9" />
              </g>
            </svg>
          ),
        },
        {
          to: "/workHistory",
          label: "Work History",
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
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135S2 16.903 2 13.25s0-5.48 1.114-6.615S6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135c.857.873 1.054 2.156 1.1 4.365" />
                <path d="m18.85 18.85l-1.35-.9V15.7M13 17.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m3-12l-.1-.31c-.494-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.632 2h-.264c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7 5.5" />
              </g>
            </svg>
          ),
        },
        {
          to: "/projects",
          label: "Projects",
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
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M19 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3 0h-3m-8 0H2m4 4h.008" />
                <path d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4" />
              </g>
            </svg>
          ),
        },
        {
          to: "/testimonials",
          label: "Testimonials",
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
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M2 12c0-4.478 0-6.718 1.391-8.109S7.021 2.5 11.5 2.5c4.478 0 6.718 0 8.109 1.391S21 7.521 21 12c0 4.478 0 6.718-1.391 8.109S15.979 21.5 11.5 21.5c-4.478 0-6.718 0-8.109-1.391S2 16.479 2 12" />
                <path d="m12.364 7.722l.88 1.774c.12.247.44.484.71.53l1.595.267c1.02.171 1.26.917.524 1.653l-1.24 1.25c-.21.212-.324.62-.26.913l.355 1.547c.28 1.225-.364 1.699-1.44 1.059l-1.494-.892c-.27-.162-.715-.162-.99 0l-1.495.892c-1.07.64-1.72.161-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.73-.736-.495-1.482.525-1.653l1.595-.267a1.1 1.1 0 0 0 .705-.53l.88-1.774c.48-.963 1.26-.963 1.735 0" />
              </g>
            </svg>
          ),
        },
        {
          to: "/certifications",
          label: "Certifications",
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
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M11.5 22c-4.007 0-6.01 0-7.255-1.465C3 19.072 3 16.714 3 12s0-7.071 1.245-8.536S7.493 2 11.5 2s6.01 0 7.255 1.464c1.002 1.18 1.198 2.937 1.236 6.036M8 8h7m-7 5h3" />
                <path d="M19.61 18.105A3.375 3.375 0 0 0 17.625 12h-.251a3.375 3.375 0 0 0-1.984 6.105m4.218 0a3.36 3.36 0 0 1-1.984.645h-.25a3.36 3.36 0 0 1-1.984-.645m4.218 0l.583 1.835c.222.7.334 1.05.303 1.268c-.063.454-.433.79-.87.792c-.21 0-.524-.164-1.153-.494c-.27-.142-.404-.212-.542-.254a1.5 1.5 0 0 0-.86 0c-.138.042-.273.112-.542.254c-.629.33-.943.495-1.153.494c-.437-.002-.807-.338-.87-.792c-.03-.218.08-.568.303-1.268l.583-1.835" />
              </g>
            </svg>
          ),
        },
      ],
    },
    {
      label: "Employment",
      dropdown: [
        {
          to: "/employment",
          label: "Employment History",
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
                strokeWidth="1.4"
                color="currentColor"
              >
                <path d="M19 14h1.239c1.11 0 1.944 1.08 1.726 2.239l-.265 1.408C21.443 19.015 20.313 20 19 20M5 14H3.761c-1.11 0-1.944 1.08-1.726 2.239l.265 1.408C2.557 19.015 3.687 20 5 20" />
                <path d="m18.27 10.5l.521 4.697c.28 3.182.42 4.773-.521 5.788S15.713 22 12.48 22h-.962c-3.232 0-4.847 0-5.789-1.015s-.801-2.606-.521-5.788L5.73 10.5M15 5a3 3 0 1 0-6 0" />
                <path d="M5.262 8.87c-.25-1.416-.376-2.124-.126-2.666a2.03 2.03 0 0 1 .793-.883C6.455 5 7.216 5 8.738 5h6.525c1.521 0 2.282 0 2.808.32c.351.215.627.522.793.884c.25.542.124 1.25-.126 2.666l-.05.289c-.098.549-.146.823-.242 1.076c-.165.436-.436.83-.79 1.151c-.204.186-.45.34-.94.65c-.462.29-.693.435-.937.549a4.4 4.4 0 0 1-1.34.382c-.27.033-.547.033-1.102.033h-2.674c-.555 0-.832 0-1.102-.033a4.4 4.4 0 0 1-1.34-.383c-.244-.113-.475-.258-.936-.549c-.491-.308-.737-.463-.942-.649a3 3 0 0 1-.789-1.151c-.096-.253-.144-.527-.241-1.076zM12 10.002l.009-.002" />
              </g>
            </svg>
          ),
        },
        {
          to: "/userExperience",
          label: "Other Experience",
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
                d="M4.146 21.682c1.39 1.39 3.38 1.39 7.36 1.39h1c3.98 0 5.97 0 7.36-1.39s1.39-3.39 1.39-7.36v-4c0-3.98 0-5.97-1.39-7.36s-3.38-1.39-7.36-1.39h-.5c-.41 0-.75.34-.75.75s.34.75.75.75h.5c3.56 0 5.35 0 6.3.95s.95 2.74.95 6.3v4c0 3.56 0 5.35-.95 6.3s-2.74.95-6.3.95h-1c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5c0 3.98 0 5.97 1.39 7.36m9.36-3.61h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75m4-10h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m-4 5h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75m-5.5 6c-.3 0-.57-.18-.69-.45c-.351-.816-.936-1.046-1.012-1.077l-.008-.003a.76.76 0 0 1-.5-.93c.12-.39.52-.62.91-.51c.09.02.61.18 1.15.69c.54-1.05 1.47-2.47 2.82-3.14c.37-.19.82-.03 1.01.34s.04.82-.34 1.01c-1.69.85-2.61 3.54-2.62 3.57c-.1.29-.37.5-.68.51h-.03zm-1.45-10.22c.15.15.34.22.53.22s.38-.08.53-.22s.41-.35.72-.6c1.42-1.15 2.42-2.02 2.42-2.93s-1-1.79-2.42-2.93c-.31-.24-.57-.45-.72-.6a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06c.17.17.47.42.83.71l.141.116c.288.235.701.572 1.05.894h-5.08c-.41 0-.75.34-.75.75s.34.75.75.75h5.08c-.41.38-.9.78-1.19 1.01l-.17.14c-.279.23-.519.428-.66.57c-.29.29-.29.77 0 1.06"
                color="currentColor"
              />
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
                          (item.to === "/timesheets" &&
                            location.pathname.startsWith("/timesheet")) ||
                          (item.to === "/contractHistory" &&
                            location.pathname === "/contractDetails");

                      return (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={`flex flex-row gap-2 items-center py-2 px-1 text-xs font-[400] rounded
                          ${
                            isActive
                              ? "bg-[#E66D3D] text-white "
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

                          <span className="text-center ">{item.label}</span>
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
            className="flex items-center gap-2 text-xs  hover:text-[#E66D3D]"
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
                className="w-[17px] h-[17px] "
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
            className="flex items-center gap-2 text-xs  hover:text-[#E66D3D]"
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
            </svg>
            <span>Logout</span>
          </button>
        </div>
      )}
    </aside>
  );
}
