import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSettings";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";

function ShimmerGetPaid({ darkMode }) {
  const shimmerBox = (
    <div
      className={`animate-pulse border rounded-lg py-4 px-4 space-y-3 ${
        darkMode ? "border-white bg-[#1a1a1a]" : "border-gray-300 "
      }`}
    >
      <div
        className={`h-4 w-1/2 rounded ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      />
      <div
        className={`h-6 w-1/3 rounded ${
          darkMode ? "bg-gray-600" : "bg-gray-400"
        }`}
      />
      <div
        className={`h-3 w-2/3 rounded ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      />
      <div
        className={`h-9 w-24 mt-6 rounded ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <div key={idx}>{shimmerBox}</div>
        ))}
    </div>
  );
}

export default function GetPaid() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reserveBalance, setReserveBalance] = useState(false);
  const options = ["$100 or more", "$50 or more", "$10 or more"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [data] = useState({
    balance: 100.21,
    pendingBalance: 100.21,
    withdrawalMethod: {
      bankName: "Local Bank (INR)",
      accountEnding: "2615",
      preferred: true,
    },
    withdrawalSchedule: {
      frequency: "Weekly",
      nextDate: "Mar 26",
      minBalance: 1000,
      bankName: "Local Bank (INR)",
      accountEnding: "2142",
    },
    lastWithdrawal: {
      amount: 190.01,
      bankName: "Local Bank (INR)",
      accountEnding: "2615",
      date: "Oct 30, 2024",
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} darkMode={darkMode} />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Desktop Sidebar */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10">
          <div className="block h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>
        <div className="md:p-6 py-6 pl-4 pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          <div
            className={`border rounded-lg px-3 pt-2 pb-6 ${
              darkMode ? "border-white" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-[400] mb-4">Get Paid</h2>
            {isLoading ? (
              <ShimmerGetPaid darkMode={darkMode} />
            ) : (
              <div className="grid [@media(max-width:950px)]:grid-cols-1 grid-cols-2 gap-4">
                {/* Available Balance */}
                <div
                  className={`border rounded-lg py-2 sm:px-4 px-2 ${
                    darkMode ? "border-white" : "border-gray-400"
                  }`}
                >
                  <h3 className="sm:text-[18px] text-[14px]  font-semibold mb-2">
                    Available Balance
                  </h3>
                  <p className="text-[#E66D3D] text-xl font-semibold">
                    ${data.balance}
                  </p>
                  <p
                    className={`${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    } text-sm`}
                  >
                    + ${data.pendingBalance} pending
                  </p>
                  <button className="mt-10 px-5 py-2 bg-[#E66D3D] text-white rounded-[5px]">
                    Get Paid
                  </button>
                </div>

                {/* Withdrawal Methods */}
                <div
                  className={`border rounded-lg py-2 sm:px-4 px-2 ${
                    darkMode ? "border-white" : "border-gray-400"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="sm:text-[18px] text-[14px] font-semibold mb-2">
                      Withdrawal methods
                    </h3>
                    <button className="border border-[#E66D3D] px-3 py-1 rounded-[2px] sm:text-sm text-[13px]">
                      Add method
                    </button>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    } sm:text-[16px] text-[14px] pr-[10vw]`}
                  >
                    {data.withdrawalMethod.bankName} - Account ending in{" "}
                    {data.withdrawalMethod.accountEnding}{" "}
                    {data.withdrawalMethod.preferred && (
                      <span
                        className={`border px-2 py-1 text-xs ml-2 rounded-[21px] ${
                          darkMode ? "border-white" : "border-[#555555]"
                        }`}
                      >
                        Preferred
                      </span>
                    )}
                  </p>
                  <div className="mt-10 flex justify-between space-x-2">
                    <button
                      className="border border-[#E66D3D] px-3 py-1 rounded-md text-sm"
                      onClick={() => setShowModal(true)}
                    >
                      Edit
                    </button>
                    <button className="border border-[#E66D3D] text-[#E66D3D] px-3 py-1 rounded-md text-sm">
                      Remove
                    </button>
                  </div>
                </div>

                {/* Modal */}
                {showModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh] hide-scrollbar text-[#333333]">
                      <button
                        className="absolute right-4 top-4 text-gray-500"
                        onClick={() => setShowModal(false)}
                      >
                        <X size={20} />
                      </button>

                      <h2 className="text-lg font-semibold mb-2">
                        Edit withdrawal schedule
                      </h2>

                      <div className="text-sm mb-2 text-gray-700">
                        <p className="mb-1 font-medium">
                          Preferred withdrawal method
                        </p>
                        <p>
                          {data.withdrawalMethod.bankName}, account ending in{" "}
                          {data.withdrawalMethod.accountEnding} (
                          {data.withdrawalMethod.currency})
                        </p>
                        <p className="mt-2">
                          Withdrawal fee
                          <br />
                          $0.49 per payment
                        </p>
                      </div>

                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">
                          Preferred withdrawal schedule
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Earnings will be released upon your request.
                        </p>

                        {[
                          "Weekly (every Wednesday)",
                          "Twice per month (1st and 3rd Wednesday)",
                          "Monthly (last Wednesday)",
                          "Quarterly (Mar 31, 2025)",
                        ].map((option, idx) => (
                          <label
                            key={idx}
                            className="flex items-center mb-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="withdrawal"
                              value={option}
                              checked={selectedOption === option}
                              onChange={() => setSelectedOption(option)}
                              className="mr-2 accent-[#E66D3D]"
                            />
                            {option}
                          </label>
                        ))}
                      </div>

                      <div className="mt-5">
                        <h3 className="font-semibold text-sm mb-1">
                          Minimum withdrawal amount
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          We ll only withdraw if your balance is larger than
                          this amount.
                        </p>

                        <div className="relative w-full text-sm">
                          <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full border rounded p-2 flex justify-between items-center bg-white"
                          >
                            {selectedOption}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <ul className="absolute z-10 mt-1 w-full border rounded bg-white shadow">
                              {options.map((option, idx) => (
                                <li
                                  key={idx}
                                  onClick={() => {
                                    setSelectedOption(option);
                                    setIsOpen(false);
                                  }}
                                  className={`p-2 cursor-pointer   ${
                                    selectedOption === option
                                      ? "bg-[#E66D3D] text-white"
                                      : ""
                                  }`}
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Reserve balance (optional)
                        </span>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={reserveBalance}
                            onChange={() => setReserveBalance(!reserveBalance)}
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#E66D3D] relative after:content-[''] after:absolute after:left-[4px] after:top-[4px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                        </label>
                      </div>

                      <p className="text-xs text-gray-600 mt-2">
                        Maintain $5–$250 in your balance to use for Connects and
                        Plus memberships.
                      </p>

                      <p className="mt-4 text-sm text-gray-500">
                        Next withdrawal (based on your schedule): <br />
                        <strong>March 26, 2025</strong>
                      </p>

                      <div className="flex justify-end mt-6 space-x-3">
                        <button
                          onClick={() => setShowModal(false)}
                          className="px-4 py-2 rounded border border-[#E66D3D] text-sm font-[600]"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            // handle save logic here
                            setShowModal(false);
                          }}
                          className="px-4 py-2 bg-[#E66D3D] text-white rounded text-sm font-[600]"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Withdrawal Schedule */}
                <div
                  className={`border rounded-lg py-2 sm:px-4 px-2 ${
                    darkMode ? "border-white" : "border-gray-400"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="sm:text-[18px] text-[14px] font-semibold mb-2">
                      Withdrawal schedule
                    </h3>
                    <img src="src/assets/edit.svg" alt="Edit" />
                  </div>
                  <p
                    className={`sm:text-sm  text-[14px] ${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    }`}
                  >
                    {data.withdrawalSchedule.frequency} (next on{" "}
                    {data.withdrawalSchedule.nextDate})
                  </p>
                  <p
                    className={`sm:text-sm  text-[14px] ${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    } mb-3`}
                  >
                    Only when balance is ${data.withdrawalSchedule.minBalance}
                    .00 or more
                  </p>
                  <p
                    className={`sm:text-sm  text-[14px] ${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    }`}
                  >
                    {data.withdrawalSchedule.bankName} - Account ending in{" "}
                    {data.withdrawalSchedule.accountEnding}
                  </p>
                </div>

                {/* Last Withdrawal */}
                <div
                  className={`border rounded-lg pt-2 pb-10 sm:px-4 px-2 ${
                    darkMode ? "border-white" : "border-gray-400"
                  }`}
                >
                  <h3 className="sm:text-[18px] text-[14px]  font-semibold mb-2">
                    Last withdrawal
                  </h3>
                  <p
                    className={`sm:text-sm  text-[14px] ${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    }`}
                  >
                    ${data.lastWithdrawal.amount} to{" "}
                    {data.lastWithdrawal.bankName} - Account ending in{" "}
                    {data.lastWithdrawal.accountEnding}
                  </p>
                  <p
                    className={`sm:text-sm  text-[14px] ${
                      darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                    }`}
                  >
                    {data.lastWithdrawal.date}
                  </p>
                  <a
                    href="#"
                    className="text-[#E66D3D] text-sm mt-5 underline inline-block"
                  >
                    View transaction history
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
