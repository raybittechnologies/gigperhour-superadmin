import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSettings";
const ShimmerCard = () => (
  <div className="border border-[#555555] rounded-lg p-3 animate-pulse space-y-3">
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    <div className="h-5 bg-gray-200 rounded w-full"></div>
    <div className="h-8 bg-gray-300 rounded w-1/3"></div>
  </div>
);

export default function MemberShip() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  // Default Dummy Data (No Loading State)
  const [membershipData, setMembershipData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Simulate delay
      setTimeout(() => {
        const data = {
          currentPlan: "Freelancer Basic",
          billingCycle: "Feb 28, 2025 — Mar 27, 2025",
          tokensBalance: 6,
        };
        setMembershipData(data);
        setLoading(false);
      }, 1000); // simulate network delay
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <div className="space-y-6">
            {/* Profile Settings Card */}
            <div
              className={`border rounded-lg px-3 pt-2 pb-6 ${
                darkMode ? "border-white" : "border-[#555555]"
              }`}
            >
              <h2 className="text-[22px] mb-4 font-[400]">
                Membership & Tokens
              </h2>
              {loading ? (
                <div className="grid [@media(max-width:1071px)]:grid-cols-1 md:grid-cols-3 gap-4">
                  <ShimmerCard />
                  <ShimmerCard />
                  <ShimmerCard />
                </div>
              ) : (
                <div className="grid  [@media(max-width:1071px)]:grid-cols-1 md:grid-cols-3  gap-4">
                  {/* Current Plan */}
                  <div
                    className={`border rounded-lg p-3 ${
                      darkMode ? "border-white" : "border-[#555555]"
                    }`}
                  >
                    <h3 className="text-sm font-[600] mb-3">Current plan</h3>
                    <p className="text-[#E66D3D] mb-3 font-[400]">
                      {membershipData.currentPlan}
                    </p>
                    <button className="mt-2 px-3 py-2 bg-[#E66D3D] text-white rounded-[5px] text-sm">
                      Change Plan
                    </button>
                  </div>

                  {/* Current Billing Cycle */}
                  <div
                    className={`border rounded-lg p-3 ${
                      darkMode ? "border-white" : "border-[#555555]"
                    }`}
                  >
                    <h3 className="text-sm font-[600] mb-3">
                      Current billing cycle
                    </h3>
                    <p className="text-[15px] mb-4">
                      {membershipData.billingCycle}
                    </p>
                    <a href="#" className="text-[15px] mb-3 text-sm">
                      Learn more about{" "}
                      <span className="text-[#E66D3D]">billing</span>
                    </a>
                  </div>

                  {/* Tokens Balance */}
                  <div
                    className={`border rounded-lg p-3 ${
                      darkMode ? "border-white" : "border-[#555555]"
                    }`}
                  >
                    <h3 className="text-sm font-[600] mb-4">Tokens balance</h3>
                    <div className="text-[15px] flex justify-between mb-4">
                      <span className="font-[600]">
                        {membershipData.tokensBalance}
                      </span>
                      <p>
                        Learn more about{" "}
                        <span className="text-[#E66D3D]">Tokens</span>
                      </p>
                    </div>

                    <div className="mt-3 flex justify-between space-x-2">
                      <button className="px-3 py-2 bg-[#E66D3D] text-white rounded-md text-sm">
                        Buy Tokens
                      </button>
                      <button className="px-3 py-1 border border-[#E66D3D] rounded-md text-sm">
                        Tokens History
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
