import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";

export default function MemberShip() {
  const [darkMode, setDarkMode] = useState(false);

  // Default Dummy Data (No Loading State)
  const [membershipData, setMembershipData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        currentPlan: "Freelancer Basic",
        billingCycle: "Feb 28, 2025 — Mar 27, 2025",
        tokensBalance: 6,
      };
      setMembershipData(data);
    };

    fetchData();
  }, []);
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

              <div className="grid grid-cols-3 gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
