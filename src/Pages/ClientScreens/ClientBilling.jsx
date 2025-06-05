import { useEffect, useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/SettingSidebar";
import MobileSidebar from "../../components/ClientScreen/MobileSetting";
import { AiOutlinePlus } from "react-icons/ai";

// Shimmer component
const ShimmerBilling = ({ darkMode }) => {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Billing Cycle Skeleton */}
      <div className="border border-[#555555] rounded p-4">
        <div className="h-4 w-4/5 max-w-xs bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-1/2 max-w-[120px] bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-2/3 max-w-[160px] bg-gray-300 rounded"></div>
      </div>

      {/* Balance Skeleton */}
      <div className="border border-[#555555] rounded p-4 flex flex-wrap gap-4 items-center justify-between gap-y-2">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="h-10 w-full sm:w-28 bg-gray-300 rounded"></div>
      </div>

      {/* Payment Methods Skeleton */}
      <div className="border border-[#555555] rounded p-4">
        <div className="h-4 w-4/5 max-w-[200px] bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-full max-w-[240px] bg-gray-300 rounded mb-5"></div>
        <div className="h-4 w-1/3 max-w-[100px] bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-full max-w-sm bg-gray-300 rounded mb-4"></div>

        {/* Card Skeleton */}
        <div className="flex flex-wrap items-center justify-between mb-4 gap-y-2">
          <div className="flex items-center gap-4">
            <div className="w-10 h-6 bg-gray-300 rounded"></div>
            <div className="h-3 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="flex gap-4">
            <div className="h-3 w-10 bg-gray-300 rounded"></div>
            <div className="h-3 w-10 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Add Method Button Skeleton */}
        <div className="h-10 w-full sm:w-40 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default function ClientBilling() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const [billingData] = useState({
    billingCycle: "Weekly",
    terms: "Standard",
    balance: 0,
    paymentMethods: [
      {
        id: 1,
        type: "Visa",
        last4: "8602",
        primary: true,
      },
    ],
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simulate API delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Sidebar */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10 md:hidden">
          <div className="block h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px]">
            <MobileSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="md:ml-[220px] ml-[70px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h3 className="md:text-2xl text-xl font-[400]">
              Billing & Payment
            </h3>
            <div className="mt-7">
              {loading ? (
                // Shimmer Placeholder
                <ShimmerBilling darkMode={darkMode} />
              ) : (
                // Actual Billing Data
                <>
                  {/* Company Billing Cycle */}
                  <div className="border border-[#555555] rounded p-4 mb-4">
                    <p className="font-medium mb-2">Company billing cycle</p>
                    <p className="text-sm mb-3">{billingData.billingCycle}</p>
                    <p className="text-sm">Terms: {billingData.terms}</p>
                  </div>

                  {/* Balance Section */}
                  <div className="border border-[#555555] rounded p-4 mb-4 flex flex-wrap gap-7 items-center justify-between gap-y-2">
                    <p className="font-medium">
                      Balance: ${billingData.balance.toFixed(2)}
                    </p>
                    <button className="bg-[#E66D3D] font-[600] text-white px-4 py-2 rounded basis-full mt-4 sm:mt-0 sm:basis-auto">
                      Pay Now
                    </button>
                  </div>

                  {/* Manage Billing Methods */}
                  <div className="border border-[#555555] rounded p-4">
                    <p className="font-medium mb-1">Manage billing methods</p>
                    <p className="text-sm mb-5">
                      Add, update or remove your billing methods
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

                    {billingData.paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex flex-wrap items-center justify-between gap-y-2 mb-2"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src="src/assets/UserDashboard/visa.svg"
                            alt={method.type}
                            className="w-10"
                          />
                          <span className="text-sm">
                            {method.type} ending in {method.last4}
                          </span>
                        </div>
                        <div className="flex gap-4 text-sm text-[#D84839]">
                          <button>Remove</button>
                          <button>Edit</button>
                        </div>
                      </div>
                    ))}

                    <button className="flex items-center gap-2 px-4 py-2 mt-6 border border-[#E66D3D] text-[#E66D3D] rounded-md text-[12px] [@media(min-width:385px)]:text-base ">
                      <AiOutlinePlus className="text-lg" />
                      Add billing Method
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
