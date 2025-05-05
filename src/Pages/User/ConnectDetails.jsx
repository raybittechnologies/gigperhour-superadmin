import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ConnectDetails() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [tokenType, setTokenType] = useState("Number of Tokens");
  const [dateFilter, setDateFilter] = useState("Last 7 days");
  const [tokenCount] = useState(21);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  const transactions = [
    {
      date: "21-02-2025",
      action: "Monthly Tokens Renewals",
      tokens: "+21",
      jobTitle: "",
    },
    {
      date: "18-02-2025",
      action: "Figma Tablet Responsive Design – Urgent (Complete Today)",
      tokens: "-18",
      jobTitle: "Applied to job",
    },
    {
      date: "07-02-2025",
      action: "Figma Tablet Responsive Design – Urgent (Complete Today)",
      tokens: "-18",
      jobTitle: "Applied to job",
    },
  ];

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div
        className="grid grid-cols-12 container mx-auto px-[20px]"
        style={{ padding: "2%" }}
      >
        {/* Sidebar (Left) */}
        <SideBar />

        <div className="container mx-auto pl-6 pb-6 pr-6 col-span-10">
          <div className="container mx-auto pl-4 ">
            {/* First Row - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Dropdowns */}
              <div>
                <h3 className="text-lg font-[400] flex items-center">
                  <span className="mr-2 mt-[2px]">
                    <img
                      src={
                        darkMode
                          ? "src/assets/UserDashboard/square-arrow-left-01.svg" // Dark mode image
                          : "src/assets/UserDashboard/square-arrow-left-light.svg" // Light mode image
                      }
                      alt="Back to Dashboard"
                      className="cursor-pointer"
                      onClick={() => navigate("/dashboard")}
                    />
                  </span>{" "}
                  Connect Details
                </h3>
                <div className="mt-4 flex flex-col gap-4">
                  {/* Label and Select for Token Type */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="tokenType"
                      className={`text-sm ${
                        darkMode ? "text-white" : "text-[#333333]"
                      }`}
                    >
                      Tokens Type
                    </label>
                    <select
                      id="tokenType"
                      value={tokenType}
                      onChange={(e) => setTokenType(e.target.value)}
                      className={`p-2 border-[0.5px] bg-transparent rounded-md text-sm w-[205px] focus:border-[#E66D3D] focus:outline-none font-[300] 
                    ${
                      darkMode
                        ? "border-[#E9E9E9] text-[#E9E9E9]"
                        : "border-[#555555] text-[#555555]"
                    }`}
                    >
                      <option>Number of Tokens</option>
                    </select>
                  </div>

                  {/* Label and Select for Date Filter */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="dateFilter"
                      className={`text-sm ${
                        darkMode ? "text-white" : "text-[#333333]"
                      }`}
                    >
                      Date
                    </label>
                    <select
                      id="dateFilter"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className={`p-2 border-[0.5px]  bg-transparent rounded-md text-sm w-[205px] focus:border-[#E66D3D] focus:outline-none font-[300] 
                          ${
                            darkMode
                              ? "border-[#E9E9E9] text-[#E9E9E9]"
                              : "border-[#555555] text-[#555555]"
                          }`}
                    >
                      <option>Last 7 days</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Column - Balance Card */}
              <div
                className={`${
                  darkMode ? "bg-[#E9E9E9] " : "bg-[#555555]"
                }  pl-5 pr-5 rounded-[5px] flex items-center justify-between shadow-lg max-w-sm`}
              >
                {/* Left Side */}
                <div>
                  <p
                    className={`text-[16px] ${
                      darkMode ? "text-[#333333]" : "text-[#E9E9E9]"
                    }`}
                  >
                    My Balance
                  </p>
                  <p
                    className={`text-[16px] font-[700] mt-3 ${
                      darkMode ? "text-[#333333]" : "text-[#E9E9E9]"
                    }`}
                  >
                    {tokenCount} Tokens
                  </p>

                  <button
                    className=" text-white bg-[#E66D3D]  font-[500] py-2 px-4 rounded mt-3"
                    onClick={() => navigate("/connects")}
                  >
                    Buy Tokens
                  </button>
                </div>

                {/* Right Side (Image) */}
                <img
                  src="src/assets/UserDashboard/Image Container.svg"
                  alt="Tokens"
                  className="w-[105px] h-[132px] object-contain"
                />
              </div>
            </div>

            {/* Second Row - Full Width Transactions Table */}
            <div className="mt-6">
              {/* Horizontal Line Above the Table */}

              <table className="w-full border-collapse">
                <thead
                  className={`border-b border-[#555555]  text-[#333333] ${
                    darkMode ? "text-white" : "text-[#555555]"
                  }`}
                >
                  <tr>
                    <th className="text-left  text-[18px] font-[400] py-2 px-4">
                      Date
                    </th>
                    <th className="text-left  text-[18px] font-[400] py-2 px-4">
                      Action
                    </th>
                    <th className="text-right  text-[18px] font-[400] py-2 px-4">
                      Tokens
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, index) => (
                    <tr
                      key={index}
                      className="border-b  bprder-[0.5px] border-[#555555] h-[50px]"
                    >
                      <td
                        className={`py-2 px-4 text-[#555555] font-[400] ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        {tx.date}
                      </td>
                      <td className="py-2 px-4">
                        <div
                          className={`text-[#555555] font-[300] text-sm ${
                            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                          }`}
                        >
                          {tx.jobTitle}
                        </div>
                        <div
                          className={`font-[400] ${
                            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                          }`}
                        >
                          {tx.action}
                        </div>
                      </td>

                      <td
                        className={`py-2 px-4 text-right  text-[#555555] ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        {tx.tokens}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
