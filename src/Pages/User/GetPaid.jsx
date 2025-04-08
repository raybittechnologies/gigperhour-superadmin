import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";

export default function GetPaid() {
  const [darkMode, setDarkMode] = useState(false);

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
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} darkMode={darkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div
            className={`border rounded-lg px-3 pt-2 pb-6 ${
              darkMode ? "border-white" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-[400] mb-4">Get Paid</h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Available Balance */}
              <div
                className={`border rounded-lg py-2 px-4 ${
                  darkMode ? "border-white" : "border-gray-400"
                }`}
              >
                <h3 className="text-[18px] font-semibold mb-2">
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
                className={`border rounded-lg py-2 px-4 ${
                  darkMode ? "border-white" : "border-gray-400"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[18px] font-semibold mb-2">
                    Withdrawal methods
                  </h3>
                  <button className="border border-[#E66D3D] px-3 py-1 rounded-[2px] text-sm">
                    Add method
                  </button>
                </div>
                <p
                  className={`${
                    darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                  } text-[16px] pr-[10vw]`}
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
                  <button className="border border-[#E66D3D] px-3 py-1 rounded-md text-sm">
                    Edit
                  </button>
                  <button className="border border-[#E66D3D] text-[#E66D3D] px-3 py-1 rounded-md text-sm">
                    Remove
                  </button>
                </div>
              </div>

              {/* Withdrawal Schedule */}
              <div
                className={`border rounded-lg py-2 px-4 ${
                  darkMode ? "border-white" : "border-gray-400"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[18px] font-semibold mb-2">
                    Withdrawal schedule
                  </h3>
                  <img src="src/assets/edit.svg" alt="Edit" />
                </div>
                <p
                  className={`text-sm ${
                    darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                  }`}
                >
                  {data.withdrawalSchedule.frequency} (next on{" "}
                  {data.withdrawalSchedule.nextDate})
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                  } mb-3`}
                >
                  Only when balance is ${data.withdrawalSchedule.minBalance}.00
                  or more
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                  }`}
                >
                  {data.withdrawalSchedule.bankName} - Account ending in{" "}
                  {data.withdrawalSchedule.accountEnding}
                </p>
              </div>

              {/* Last Withdrawal */}
              <div
                className={`border rounded-lg pt-2 pb-10 px-4 ${
                  darkMode ? "border-white" : "border-gray-400"
                }`}
              >
                <h3 className="text-[18px] font-semibold mb-2">
                  Last withdrawal
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                  }`}
                >
                  ${data.lastWithdrawal.amount} to{" "}
                  {data.lastWithdrawal.bankName} - Account ending in{" "}
                  {data.lastWithdrawal.accountEnding}
                </p>
                <p
                  className={`text-sm ${
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
          </div>
        </div>
      </div>
    </div>
  );
}
