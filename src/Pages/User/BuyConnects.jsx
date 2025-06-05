import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSidebar";
import { ChevronDown } from "lucide-react";

import { useNavigate } from "react-router-dom";
export default function BuyConnects() {
  const [darkMode, setDarkMode] = useState(false);

  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [isOpenAmount, setIsOpenAmount] = useState(false);

  // Example options
  const amountOptions = ["$5", "$10", "$20", "$50", "$100"];
  const connectData = {
    chargeAmount: "$12.00 + Tax",
    newBalance: 1821,
    expiryDate: "25-02-2026",
    availiableConnects: "21",
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className=" flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Sidebar (Left) */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Mobile Sidebar - shown only below 768px */}
        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        <div className="container  col-span-10 md:ml-[200px] ml-[5px]  flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div className=" pl-5  w-full">
            <h3 className="text-lg font-[400] mb-5 flex items-center">
              <span className="mr-2 mt-[2px]">
                <img
                  src={
                    darkMode
                      ? "src/assets/UserDashboard/square-arrow-left-01.svg"
                      : "src/assets/UserDashboard/square-arrow-left-light.svg"
                  }
                  alt="Back to Dashboard"
                  className="cursor-pointer"
                  onClick={() => navigate("/dashboard")}
                />
              </span>{" "}
              Buy Connects
            </h3>

            <p className={`mb-2 ${darkMode ? "text-white" : "text-[#333333]"}`}>
              Your available Connects
            </p>
            <p
              className={`text-[16px] font-inter font-[700] ${
                darkMode ? "text-white" : "text-[#333333]"
              }`}
            >
              {connectData.availiableConnects}
            </p>

            <label
              className={`block mt-4 ${
                darkMode ? "text-white" : "text-[#333333]"
              }`}
            >
              Select the amount to buy
            </label>

            {/* Custom Dropdown for Amount */}
            <div className="relative text-sm w-full max-w-[462px] mt-1">
              <button
                onClick={() => setIsOpenAmount(!isOpenAmount)}
                className="w-full  bg-white rounded-[5px] px-3 py-2 flex justify-between items-center text-left text-black font-[300] focus:outline-none "
              >
                {amount || "Select"}
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform ${
                    isOpenAmount ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpenAmount && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded shadow-lg max-h-60 overflow-auto">
                  {amountOptions.map((option, i) => (
                    <li
                      key={option + i}
                      onClick={() => {
                        setAmount(option);
                        setIsOpenAmount(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white text-[#222] transition"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className={`mt-4 ${darkMode ? "text-white" : "text-[#333333]"}`}>
              Your account will be Charged
            </p>
            <p
              className={`font-[700] text-[16px] ${
                darkMode ? "text-gray-300" : "text-[#555555]"
              }`}
            >
              {connectData.chargeAmount}
            </p>

            <p className={`mt-4 ${darkMode ? "text-white" : "text-[#333333]"}`}>
              Your new Connects balance will be
            </p>
            <p
              className={`font-[700] text-[16px] ${
                darkMode ? "text-gray-300" : "text-[#555555]"
              }`}
            >
              {connectData.newBalance}
            </p>

            <p className={`mt-4 ${darkMode ? "text-white" : "text-[#333333]"}`}>
              These Connects will expire on
            </p>
            <p
              className={`font-[700] text-[16px] ${
                darkMode ? "text-gray-300" : "text-[#555555]"
              }`}
            >
              {connectData.expiryDate}
            </p>

            {/* Promo Code Section */}
            <label
              className={`block mt-4 ${
                darkMode ? "text-white" : "text-[#333333]"
              }`}
            >
              Promo Code
            </label>
            <div className="flex mt-1  gap-y-2 [@media(max-width:431px)]:flex-col">
              <input
                type="text"
                placeholder="Enter Code"
                className="border p-2 rounded w-[462px] text-[#555555] focus:border-[#E66D3D] focus:outline-none [@media(max-width:431px)]:w-full"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="w-[94px] border border-[#E66D3D] ml-[20px] px-4 rounded-md py-2 hover:bg-orange-50 [@media(max-width:431px)]:ml-0 [@media(max-width:431px)]:w-full [@media(max-width:431px)]:mt-3">
                Apply
              </button>
            </div>

            <p
              className={`font-[400] text-[15px] mt-4 ${
                darkMode ? "text-white" : "text-[#333333]"
              }`}
            >
              This bundle of Connects will expire 1 year from today. Unused
              Connects roll over to the next month.{" "}
              <a href="#" className="text-[#E66D3D] underline">
                Learn more
              </a>
            </p>

            <p
              className={`font-[400] text-[15px] mt-4 ${
                darkMode ? "text-white" : "text-[#333333]"
              }`}
            >
              You re authorizing Elevance to charge your account. If you have
              sufficient funds, we will withdraw from your account balance. If
              not, the full amount will be charged to your primary billing
              method.{" "}
              <a href="#" className="text-[#E66D3D] underline">
                Learn more
              </a>
            </p>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-9 [@media(max-width:431px)]:flex-col [@media(max-width:431px)]:gap-3">
              <button className="font-[600] border rounded-[5px] w-[155px] border-[#E66D3D] [@media(max-width:431px)]:w-full py-2">
                Cancel
              </button>
              <button className="bg-[#E66D3D] text-white px-4 py-2 rounded-[5px] w-[172px] [@media(max-width:431px)]:w-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
