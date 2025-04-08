import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function SideBar() {
  const [openSections, setOpenSections] = useState({
    work: true,
    clientReach: true,
    submitWork: true,
    financials: true,
    payouts: true,
    taxDetails: true,
  });
  const location = useLocation();

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="col-span-2  bg-white shadow-md p-4 rounded-md h-[800px]">
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
          {/* Work Section */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("work")}
            >
              Work
              <span>
                <img
                  src={
                    openSections.work
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.work && (
              <ul className="mt-2  text-sm">
                <li>
                  <NavLink
                    to="/savedJobs"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/bookmark-02.svg" alt="Saved Jobs" />{" "}
                    Saved Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/findJobs"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2  rounded-md ${
                        isActive ? "bg-orange-500 text-white" : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/search-01.svg" alt="Find Jobs" /> Find
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/proposals"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/discount.svg" alt="Proposals" />{" "}
                    Proposals & Offers
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Expand Your Client Reach */}
          <li>
            <button
              className="w-full flex justify-between items-center  font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("clientReach")}
            >
              Expand client reach
              <span>
                <img
                  src={
                    openSections.clientReach
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.clientReach && (
              <ul className="mt-2 space-y-2  text-sm">
                <li className="font-inter font-[300] text-[#333333]  flex text-center gap-2 text-[14px]">
                  <img src="src/assets/agreement-02.svg" /> Your Services
                </li>
                <li className="font-inter font-[300] text-[#333333]  flex text-center gap-2  text-[14px]">
                  <img src="src/assets/promotion.svg" /> Promote with Ads
                </li>
                <li className="font-inter font-[300] text-[#333333]  flex text-center gap-2  text-[14px]">
                  <img src="src/assets/contracts.svg" /> Direct Contracts
                </li>
              </ul>
            )}
          </li>

          {/* Submit Work */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("submitWork")}
            >
              Submit Work
              <span>
                <img
                  src={
                    openSections.submitWork
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.submitWork && (
              <ul className="mt-2   text-sm">
                <li>
                  <NavLink
                    to="/activeContracts"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/file-02.svg" alt="Contracts" /> Active
                    Contracts
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
                    Contract History
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/hourlyWork"
                    className={({ isActive }) =>
                      `font-inter font-[300] text-[14px] pt-[5px] pb-[5px] flex items-center gap-2 ${
                        isActive
                          ? "bg-[#E66D3D] text-white -mx-4 px-4"
                          : "text-[#333333]"
                      }`
                    }
                  >
                    <img src="src/assets/alarm-clock.svg" alt="Contracts" />{" "}
                    Hourly Work Diary
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Organize Financials */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-inter pt-1 pb-1"
              onClick={() => toggleSection("financials")}
            >
              Organize Financials
              <span>
                <img
                  src={
                    openSections.financials
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.financials && (
              <ul className="mt-2 space-y-2  text-sm">
                <li className="font-inter font-[300] text-[#333333] flex items-center gap-2 text-[14px]">
                  <img src="src/assets/dollar-022.svg" /> Financial Overview
                </li>
                <li className="font-inter font-[300] text-[#333333] flex items-center gap-2   text-[14px]">
                  <img src="src/assets/reports.svg " /> Your Reports
                </li>
                <li className="font-inter font-[300] text-[#333333]  flex items-center gap-2  text-[14px]">
                  <img src="src/assets/reports.svg " /> Billings & Earnings
                </li>
                <li className="font-inter font-[300] text-[#333333]  flex items-center gap-2  text-[14px]">
                  <img src="src/assets/invoice-03.svg " /> Transactions &
                  Invoices
                </li>
                <li className="font-inter font-[300] text-[#333333]  flex items-center gap-2  text-[14px]">
                  <img src="src/assets/certificate-01.svg" /> Certificate of
                  Earnings
                </li>
              </ul>
            )}
          </li>

          {/* Payouts */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400] font-interpt-1 pb-1"
              onClick={() => toggleSection("payouts")}
            >
              Payouts
              <span>
                <img
                  src={
                    openSections.payouts
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.payouts && (
              <ul className="mt-2 space-y-2  text-sm">
                <li className="font-inter font-[300] text-[#333333]  flex text-center gap-2 text-[14px]">
                  <img src="src/assets/reverse-withdrawal-02.svg" /> Withdraw
                  Money
                </li>
              </ul>
            )}
          </li>

          {/* Tax Details */}
          <li>
            <button
              className="w-full flex justify-between items-center font-[400]  font-inter "
              onClick={() => toggleSection("taxDetails")}
            >
              Tax Details
              <span>
                <img
                  src={
                    openSections.taxDetails
                      ? "src/assets/arrow-up.svg"
                      : "src/assets/arrow-down-01.svg"
                  }
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </span>
            </button>
            {openSections.taxDetails && (
              <ul className="mt-2 space-y-2  text-sm">
                <li className="font-inter font-[300] text-[#333333]   flex text-center gap-2 text-[14px]">
                  <img src="src/assets/tax.svg " /> Tax Forms
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
