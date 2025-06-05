import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSettings";
import { useNavigate } from "react-router-dom";
function Billing01Shimmer({ darkMode }) {
  const shimmer = `animate-pulse rounded bg-gray-300 ${
    darkMode ? "bg-opacity-20" : "bg-opacity-50"
  }`;

  return (
    <div
      className={`border rounded-lg px-3 pt-2 pb-[140px] space-y-6 ${
        darkMode ? "border-white" : "border-[#333333]"
      }`}
    >
      {/* Title */}
      <div className={`${shimmer} h-8 w-1/3 mb-4`} />

      {/* Paragraphs */}
      <div className="space-y-3">
        <div className={`${shimmer} h-5 w-1/4`} />
        <div className={`${shimmer} h-4 w-3/4`} />
        <div className={`${shimmer} h-4 w-1/2`} />
      </div>

      {/* Card */}
      <div className=" p-4 flex flex-col sm:flex-row justify-between items-start md:items-center gap-4 mt-6">
        <div className="flex items-center gap-3">
          <div className={`${shimmer} w-10 h-6 rounded-md`} />
          <div className={`${shimmer} h-4 w-40`} />
        </div>
        <div className="flex gap-8 md:gap-16 self-start md:self-auto">
          <div className={`${shimmer} h-4 w-12`} />
          <div className={`${shimmer} h-4 w-12`} />
        </div>
      </div>

      {/* Add Billing Method Button */}
      <div className={`${shimmer} h-10 w-48 rounded-md mt-6`} />
    </div>
  );
}

export default function Billing01() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
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
          {isLoading ? (
            <Billing01Shimmer darkMode={darkMode} />
          ) : (
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

                  <div className="flex flex-col sm:flex-row justify-between items-start md:items-center  pr-11 py-3 rounded-md mb-4 gap-4">
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

                    <div className="flex gap-8 md:gap-16 self-start md:self-auto">
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
          )}
        </div>
      </div>
    </div>
  );
}
