import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import { useNavigate } from "react-router-dom";

export default function Billing01() {
  const [darkMode, setDarkMode] = useState(false);
  // const [billingMethods] = useState([]);
  const [billingMethods] = useState([
    {
      brand: "VISA",
      last4: "8602",
      isPrimary: true,
    },
  ]);
  const navigate = useNavigate();
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
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px] ">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div
            className={`border rounded-lg px-3 pt-2 pb-[140px] ${
              darkMode ? "border-white" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-[400] mb-4">Billing & Payment</h2>

            {billingMethods.length === 0 ? (
              <div>
                <h3 className="text-lg font-medium">Billing Methods</h3>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-[#555555]"
                  } text-[14px] mt-1`}
                >
                  You haven’t set up any billing methods yet. Your billing
                  method will be charged only when your available balance from
                  Elevance earnings is not sufficient to pay for your monthly
                  membership and/or Tokens.
                </p>

                {/* Add Billing Method Button */}

                <button
                  className="mt-4 flex items-center gap-2 px-4 py-2 border border-[#E66D3D] text-[#E66D3D] rounded-md  "
                  onClick={() => navigate("/billing02")}
                >
                  <img src="src\assets\UserDashboard\plus-sign.svg" />
                  Add Billing Method
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-[16px] font-semibold mt-4">
                  Manage billing methods
                </h3>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-[#555555]"
                  } text-[14px] mb-4`}
                >
                  Add, update, or remove your billing methods.
                </p>

                <h4 className="text-[15px] font-medium mb-1">Primary</h4>
                <p
                  className={`text-sm ${
                    darkMode ? "text-white" : "text-[#555555]"
                  } mb-4`}
                >
                  Your primary billing method is used for all recurring
                  payments.
                </p>

                <div className="flex justify-between items-center border pr-11 py-3 rounded-md mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="src/assets/UserDashboard/visa.svg"
                      alt="Visa"
                      className="w-10 h-auto"
                    />
                    <span className="text-[15px]">
                      {billingMethods[0].brand} ending in{" "}
                      {billingMethods[0].last4}
                    </span>
                  </div>
                  <div className="flex gap-16">
                    <button className="text-[#E66D3D]">Remove</button>
                    <button className="text-[#E66D3D]">Edit</button>
                  </div>
                </div>

                <button
                  className="flex items-center gap-2 px-4 py-2 border border-[#E66D3D] text-[#E66D3D] rounded-md"
                  onClick={() => navigate("/billing02")}
                >
                  <img src="src\\assets\\UserDashboard\\plus-sign.svg" />
                  Add billing Method
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
