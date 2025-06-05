import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function MobileSideBar() {
  const [openDropdowns, setOpenDropdowns] = useState([
    "Hire Talent",
    "Workforce",
    "Reports",
  ]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get("tab");

  const isTabActive = (tabValue) => activeTab === tabValue;

  const toggleDropdown = (label) => {
    setOpenDropdowns((prevState) =>
      prevState.includes(label)
        ? prevState.filter((item) => item !== label)
        : [...prevState, label]
    );
  };

  const links = [
    {
      label: "Hire Talent",
      dropdown: [
        {
          to: "/jobDashboard?tab=jobs",
          label: "Job Posts",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px]  ${
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
                <path d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135S2 16.903 2 13.25s0-5.48 1.114-6.615S6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135c.857.873 1.054 2.156 1.1 4.365" />
                <path d="M20.017 20.023L22 22m-.947-4.474a3.527 3.527 0 1 0-7.053 0a3.527 3.527 0 0 0 7.053 0M16 5.5l-.1-.31c-.495-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.63 2h-.263c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7 5.5" />
              </g>
            </svg>
          ),
        },
        {
          to: "/jobDashboard?tab=contracts",
          label: "Pending Offers",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px]  ${
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
                <path d="M10.55 3c-3.852.007-5.87.102-7.159 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.391 8.109C4.783 22 7.021 22 11.501 22c4.478 0 6.717 0 8.108-1.391c1.29-1.29 1.384-3.307 1.391-7.16" />
                <path d="M11.056 13C10.332 3.866 16.802 1.276 21.98 2.164c.209 3.027-1.273 4.16-4.093 4.684c.545.57 1.507 1.286 1.403 2.18c-.074.638-.506.95-1.372 1.576c-1.896 1.37-4.093 2.234-6.863 2.396" />
                <path d="M9 17c2-5.5 3.96-7.364 6-9" />
              </g>
            </svg>
          ),
        },
        {
          to: "/hireTalent3",
          label: "Post a Job",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px]  ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v8m4-4H8m-5.5 0c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"
                color="currentColor"
              />
            </svg>
          ),
        },
        {
          to: "/searchTalent",
          label: "Search Talents",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M16.308 4.384c-.59 0-.886 0-1.155-.1l-.111-.046c-.261-.12-.47-.328-.888-.746c-.962-.962-1.443-1.443-2.034-1.488a2 2 0 0 0-.24 0c-.591.045-1.072.526-2.034 1.488c-.418.418-.627.627-.888.746l-.11.046c-.27.1-.565.1-1.156.1h-.11c-1.507 0-2.261 0-2.73.468s-.468 1.223-.468 2.73v.11c0 .59 0 .886-.1 1.155q-.022.057-.046.111c-.12.261-.328.47-.746.888c-.962.962-1.443 1.443-1.488 2.034a2 2 0 0 0 0 .24c.045.591.526 1.072 1.488 2.034c.418.418.627.627.746.888q.025.054.046.11c.1.27.1.565.1 1.156v.11c0 1.507 0 2.261.468 2.73s1.223.468 2.73.468h.11c.59 0 .886 0 1.155.1q.057.021.111.046c.261.12.47.328.888.746c.962.962 1.443 1.443 2.034 1.488q.12.009.24 0c.591-.045 1.072-.526 2.034-1.488c.418-.418.627-.626.888-.746q.054-.025.11-.046c.27-.1.565-.1 1.156-.1h.11c1.507 0 2.261 0 2.73-.468s.468-1.223.468-2.73v-.11c0-.59 0-.886.1-1.155q.021-.057.046-.111c.12-.261.328-.47.746-.888c.962-.962 1.443-1.443 1.488-2.034q.009-.12 0-.24c-.045-.591-.526-1.072-1.488-2.034c-.418-.418-.626-.627-.746-.888l-.046-.11c-.1-.27-.1-.565-.1-1.156v-.11c0-1.507 0-2.261-.468-2.73s-1.223-.468-2.73-.468z" />
                <path d="M8.5 16.5a4.04 4.04 0 0 1 3.5-2.02c1.496 0 2.801.812 3.5 2.02M14 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
              </g>
            </svg>
          ),
        },
        {
          to: "/hiredTalent",
          label: "Talents Hired",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M6.199 9.6H4.8c-2.009 0-3.363 2.148-2.572 4.08a.7.7 0 0 0 .643.443h.492c.166 0 .31.118.351.286l.634 2.65c.132.553.606.941 1.151.941s1.02-.388 1.151-.94l.634-2.65a.365.365 0 0 1 .35-.287h.493a.7.7 0 0 0 .643-.443c.791-1.932-.563-4.08-2.572-4.08" />
                <path d="M7.25 7.8c0 .994-.784 1.8-1.75 1.8s-1.75-.806-1.75-1.8S4.534 6 5.5 6s1.75.806 1.75 1.8M16 5c0-1.414 0-2.121.44-2.56C16.878 2 17.585 2 19 2s2.121 0 2.56.44C22 2.878 22 3.585 22 5s0 2.121-.44 2.56C21.122 8 20.415 8 19 8s-2.121 0-2.56-.44C16 7.122 16 6.415 16 5m0 14c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C16 21.122 16 20.415 16 19m0-14h-1c-2.453.183-3 1.203-3 4.653v4.694c0 3.45.547 4.47 3 4.653h1" />
              </g>
            </svg>
          ),
        },
        {
          to: "/savedTalent",
          label: "Talents Saved",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M16.902 6.129C18 7.257 18 9.074 18 12.708v1.585c0 3.633 0 5.45-1.098 6.578S14.035 22 10.5 22s-5.303 0-6.402-1.129C3 19.743 3 17.926 3 14.293v-1.585c0-3.634 0-5.45 1.098-6.58C5.197 5 6.964 5 10.5 5s5.303 0 6.402 1.129" />
                <path d="M7.5 5.5v4.87c0 .935 0 1.402.29 1.57c.561.324 1.614-.758 2.114-1.083c.29-.19.435-.284.596-.284s.306.095.596.284c.5.325 1.553 1.407 2.114 1.083c.29-.168.29-.635.29-1.57V5.5" />
                <path d="M9 2h2c4.714 0 7.071 0 8.535 1.464C21 4.93 21 7.286 21 12v6" />
              </g>
            </svg>
          ),
        },
        {
          to: "/bringTalents",
          label: "Bring Talents",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M18 12.574c0-.302 0-.453.042-.588c.12-.391.44-.543.759-.702c.359-.18.539-.269.716-.284a.94.94 0 0 1 .577.135c.23.14.389.408.552.625c.755 1.002 1.132 1.503 1.27 2.056a2.8 2.8 0 0 1 0 1.358c-.201.806-.837 1.481-1.308 2.107c-.241.32-.362.48-.514.573a.94.94 0 0 1-.577.136c-.177-.016-.357-.106-.716-.284c-.32-.16-.638-.311-.76-.703c-.041-.135-.041-.286-.041-.588zm-12 .001c0-.381-.01-.723-.291-.991c-.103-.097-.239-.165-.51-.3c-.36-.179-.539-.268-.717-.284c-.533-.047-.82.351-1.128.76c-.755 1.002-1.132 1.503-1.27 2.056a2.8 2.8 0 0 0 0 1.358c.2.806.837 1.481 1.308 2.107c.297.394.58.754 1.09.708c.178-.015.358-.105.717-.284c.271-.135.407-.202.51-.3c.281-.267.29-.61.29-.99z" />
                <path d="M20 10.996V9.87C20 5.524 16.417 2 12 2S4 5.524 4 9.87v1.125m7.998 2.465c-1.246-.66-4-1.781-5.264-1.44c-.24.1-.736.445-.736 1.599l.096 5.977c.006.37.292.673.654.724c1.233.174 3.332.674 5.25 1.68m0-8.54V22m0-8.54c1.245-.66 4-1.781 5.264-1.44c.24.1.736.445.736 1.599l-.095 5.977a.754.754 0 0 1-.654.724c-1.233.174-3.333.674-5.251 1.68" />
              </g>
            </svg>
          ),
        },
      ],
    },
    {
      label: "Workforce",
      dropdown: [
        {
          to: "/contractsClient",
          label: "Your Contracts",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M18 6c-.047-1.553-.22-2.48-.862-3.121C16.258 2 14.842 2 12.01 2H8.007c-2.832 0-4.248 0-5.127.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.88 5.121S5.175 22 8.007 22h4.004c2.831 0 4.247 0 5.127-.879c.642-.641.815-1.567.862-3.121" />
                <path d="m20.242 11.742l1.177-1.177c.27-.27.406-.406.478-.552a1 1 0 0 0 0-.88c-.072-.146-.208-.282-.478-.552s-.406-.406-.552-.478a1 1 0 0 0-.88 0c-.146.072-.281.208-.552.478l-1.177 1.177m1.984 1.984l-5.266 5.266L12 18l.992-2.976l5.266-5.266m1.984 1.984l-1.984-1.984M5 19h1l1.25-2.5L8.5 19h1M6 6h8m-8 4h6" />
              </g>
            </svg>
          ),
        },
        {
          to: "/timesheets",
          label: "TimeSheets",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M2 22h11a9 9 0 1 0 0-18c-4.633 0-8.503 3.5-9 8m14.5-6.5l1-1m-14 0l1 1" />
                <path d="m16.5 9l-2.94 2.94m0 0a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.122-2.122M12.5 3.5V2m-2 0h4M2 15h3m-3 4h5" />
              </g>
            </svg>
          ),
        },
        {
          to: "/timefreelancer",
          label: "Freelancer Time",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M12 8v4l1.5 1.5m6.045 2.953C21.182 17.337 22 17.78 22 18.5s-.818 1.163-2.455 2.047l-1.114.601c-1.257.679-1.885 1.018-2.187.772c-.74-.605.413-2.164.696-2.716c.288-.56.282-.858 0-1.408c-.283-.552-1.436-2.111-.696-2.716c.302-.246.93.093 2.187.772z" />
                <path d="M13.026 21.948Q12.52 21.999 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q-.002 1.03-.2 2" />
              </g>
            </svg>
          ),
        },

        {
          to: "/workDiaries",
          label: "Work Diaries",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M10.29 21.961h-.9c-3.248 0-4.873 0-5.882-1.025S2.5 18.261 2.5 14.961v-5c0-3.3 0-4.95 1.01-5.974C4.517 2.96 6.142 2.96 9.39 2.96h2.953c3.249 0 5.147.056 6.156 1.08c1.01 1.026 1 2.62 1 5.92v1.187M15.945 2v2m-5-2v2m-5-2v2M7 15h4m-4-5h8" />
                <path
                  d="M20.76 14.879c-.906-1.015-1.449-.954-2.052-.773c-.423.06-1.871 1.75-2.475 2.29c-.991.978-1.987 1.986-2.052 2.118c-.188.305-.362.845-.447 1.449c-.157.906-.383 1.925-.097 2.013s1.087-.08 1.992-.213c.604-.11 1.026-.23 1.328-.411c.423-.254 1.207-1.147 2.56-2.476c.847-.893 1.665-1.51 1.907-2.113c.241-.906-.12-1.39-.664-1.885"
                  opacity="0.93"
                />
              </g>
            </svg>
          ),
        },
        {
          to: "/customExp",
          label: "Custom Exports",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <ellipse cx="11" cy="5" rx="8" ry="3" />
                <path d="M6 10.842c.602.18 1.274.33 2 .44M11 15c-4.418 0-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44" />
                <path d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v7m0 4.674l-1.174-1.487C17.2 14.396 16.888 14 16.5 14s-.7.396-1.326 1.187L14 16.674m2.5-2.587V22" />
              </g>
            </svg>
          ),
        },
      ],
    },
    {
      label: "Reports",
      dropdown: [
        {
          to: "/weeklySummary",
          label: "Weekly Finance",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" />
                <path d="M17 17a5 5 0 0 0-10 0m5.707-1.707l-1.414 1.414" />
              </g>
            </svg>
          ),
        },
        {
          to: "/transactionHistory",
          label: "Transactions",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className={`w-[19px] h-[19px] ${
                isActive ? "text-white" : "text-[#000000]"
              }`}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="3.4"
              >
                <rect width="30" height="36" x="9" y="8" rx="2" />
                <path
                  strokeLinecap="round"
                  d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"
                />
              </g>
            </svg>
          ),
        },
        {
          to: "/report3",
          label: "Spending",
          icon: ({ isActive }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`w-[19px] h-[19px] ${
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
                <path d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q-.002-1.03-.2-2" />
                <path d="M12 9c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5s2 .672 2 1.5s-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M12 9V8m0 7c-.87 0-1.612-.417-1.886-1M12 15v1m4.998-8.998l4.176-4.178m.824 3.656l-.118-3.09c0-.729-.435-1.183-1.228-1.24l-3.124-.147" />
              </g>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <aside className="w-full bg-white text-[#333333] py-4 rounded-r-[8px]">
      <div className="flex flex-col gap-6 items-center">
        {links.map((link) => (
          <div key={link.label} className="w-full">
            <div
              className="flex items-center justify-between w-full px-2 py-2 text-xs font-[700] cursor-pointer"
              onClick={() => toggleDropdown(link.label)}
            >
              <span className="leading-none">{link.label}</span>
              <span className="leading-none">
                {openDropdowns.includes(link.label) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>

            {openDropdowns.includes(link.label) && (
              <div className="flex flex-col items-center mt-2">
                {link.dropdown.map((item) => {
                  const tabValue = item.to.includes("tab=")
                    ? new URLSearchParams(item.to.split("?")[1]).get("tab")
                    : null;

                  const isActive = tabValue
                    ? isTabActive(tabValue)
                    : location.pathname === item.to ||
                      (item.to === "/timesheets" &&
                        location.pathname.startsWith("/timesheet"));

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={`w-full flex flex-col items-center gap-2 text-xs font-[400] py-2 ${
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
                      <span className="px-1">{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {/* Support & Logout */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <NavLink
            to="/message"
            className="flex flex-col items-center px-1 gap-2 text-xs font-[400] text-[#333333] hover:text-[#E66D3D]"
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
                strokeWidth="1.8"
                color="currentColor"
              >
                <path d="M21.917 10.5q.027.234.043.47c.053.83.053 1.69 0 2.52c-.274 4.243-3.606 7.623-7.79 7.9a33 33 0 0 1-4.34 0a4.9 4.9 0 0 1-1.486-.339c-.512-.21-.768-.316-.899-.3c-.13.016-.319.155-.696.434c-.666.49-1.505.844-2.75.813c-.629-.015-.943-.023-1.084-.263s.034-.572.385-1.237c.487-.922.795-1.978.328-2.823c-.805-1.208-1.488-2.639-1.588-4.184a20 20 0 0 1 0-2.52c.274-4.243 3.606-7.622 7.79-7.9a33 33 0 0 1 3.67-.037M8.5 15h7m-7-5H11" />
                <path d="m20.868 2.44l.693.692a1.5 1.5 0 0 1 0 2.121l-3.628 3.696a2 2 0 0 1-1.047.551l-2.248.489a.5.5 0 0 1-.595-.594l.479-2.235a2 2 0 0 1 .551-1.047l3.674-3.674a1.5 1.5 0 0 1 2.121 0" />
              </g>
            </svg>
            <span>Message</span>
          </NavLink>
          <NavLink
            to="/support"
            className="flex flex-col items-center px-1 gap-2 text-xs font-[400] text-[#333333] hover:text-[#E66D3D]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
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
              // clear session and redirect
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="flex flex-col items-center px-1 gap-2 text-xs font-[400] text-[#333333] hover:text-[#E66D3D]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M15 17.625c-.074 1.852-1.617 3.424-3.684 3.374c-.481-.012-1.076-.18-2.265-.515c-2.861-.807-5.345-2.164-5.941-5.203C3 14.724 3 14.095 3 12.837v-1.674c0-1.257 0-1.886.11-2.445c.596-3.038 3.08-4.395 5.941-5.202c1.19-.335 1.784-.503 2.265-.515c2.067-.05 3.61 1.522 3.684 3.374M21 12H10m11 0c0-.7-1.994-2.008-2.5-2.5M21 12c0 .7-1.994 2.008-2.5 2.5"
                color="currentColor"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
