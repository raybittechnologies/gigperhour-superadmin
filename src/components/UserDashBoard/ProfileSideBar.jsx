import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProfileSideBar() {
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
    <aside className="col-span-2  bg-white shadow-md p-4 rounded-md  h-[640px] ">
      {/* Profile Section */}
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

      {/* Sidebar Navigation */}
      <nav className="mt-4">
        <ul className="space-y-3 text-gray-700">
          {/* Profile Overview */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("Profile")}
            >
              Profile Overview
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
                    <img src="src/assets/bookmark-02.svg" alt="Saved Jobs" />{" "}
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/userRole"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/search-01.svg" alt="Find Jobs" />
                    Role & Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/userLanguage"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/discount.svg" alt="Proposals" />{" "}
                    Language & Education
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
                    <img src="src/assets/discount.svg" alt="Proposals" />{" "}
                    Working Preference
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/*work overview */}
          <li>
            <button
              className="w-full flex justify-between items-center  font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("Work")}
            >
              Work Overview
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
              <ul className="mt-2   text-sm">
                <li>
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/discount.svg" alt="Proposals" />{" "}
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/workHistory"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/discount.svg" alt="Proposals" /> Work
                    History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/discount.svg" alt="Proposals" />{" "}
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testimonials"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/discount.svg" alt="Proposals" />{" "}
                    Testimonials
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/certifications"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/discount.svg" alt="Proposals" />{" "}
                    Certifications
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Employment */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("employment")}
            >
              Employment
              <span>
                <img
                  src={
                    openSections.employment
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.employment && (
              <ul className="mt-2   text-sm">
                <li>
                  <NavLink
                    to="/employment"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/file-02.svg" alt="Contracts" />{" "}
                    Employment History
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contractHistory"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive || location.pathname === "/contractDetails"
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/work-history.svg" alt="Contracts" />
                    Other Experience
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Organize Financials */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("support")}
            >
              Support
              <span></span>
            </button>
          </li>

          {/* Payouts */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-interpt-1 pb-1"
              onClick={() => toggleSection("payouts")}
            >
              Logout
              <span></span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
