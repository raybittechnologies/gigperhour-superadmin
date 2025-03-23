import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import { useNavigate } from "react-router-dom";
export default function BuyConnects() {
  const [darkMode, setDarkMode] = useState(false);
  const [amount, setAmount] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();
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
      <div className="grid grid-cols-12  px-[20px]" style={{ padding: "2%" }}>
        {/* Sidebar (Left) */}
        <SideBar />

        <div className="container mx-auto pl-6 pb-6 pr-6 col-span-10">
          <div className=" pl-5  w-full">
            <h3 className="text-lg font-[400] mb-5 flex items-center">
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
            <select
              className="w-[462px] border  rounded-[5px] p-2 mt-1 bg-white  text-black font-[300] focus:border-[#E66D3D] focus:outline-none "
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              <option>Select</option>
            </select>

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
            <div className="flex mt-1">
              <input
                type="text"
                placeholder="Enter Code"
                className="border  p-2 rounded w-[462px] text-[#555555] focus:border-[#E66D3D] focus:outline-none"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="  w-[94px] border border-[#E66D3D] ml-[20px] px-4 rounded-md hover:bg-orange-50">
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
            <div className="flex justify-end mt-6 gap-9">
              <button className=" font-[600] border rounded-[5px] w-[155px] border-[#E66D3D]">
                Cancel
              </button>
              <button className="bg-[#E66D3D] text-white px-4 py-2 rounded-[5px] w-[172px]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
