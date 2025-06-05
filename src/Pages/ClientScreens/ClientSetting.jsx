import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/SettingSidebar";
import MobileSidebar from "../../components/ClientScreen/MobileSetting";

function ShimmerClientSettings({ darkMode }) {
  const shimmerBase = darkMode ? "bg-gray-400" : "bg-gray-300";

  const shimmerClass = `relative overflow-hidden ${shimmerBase} rounded-md animate-pulse`;

  return (
    <div
      className={`md:p-6 px-3 py-6 border rounded-lg ${
        darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
      }`}
    >
      <div className="mb-6">
        <div className={`h-6 w-32 mb-2 ${shimmerClass}`}></div>
        <div className={`h-4 w-48 ${shimmerClass}`}></div>
      </div>

      {[1, 2, 3].map((section) => (
        <div
          key={section}
          className="border border-[#555555] rounded-md p-4 mb-6"
        >
          <div className={`h-5 w-24 mb-4 ${shimmerClass}`}></div>
          <div className="flex gap-4">
            <div className={`w-16 h-16 rounded-full ${shimmerClass}`}></div>
            <div className="flex flex-col gap-2 flex-1">
              <div className={`h-4 w-1/2 ${shimmerClass}`}></div>
              <div className={`h-3 w-1/3 ${shimmerClass}`}></div>
              <div className={`h-3 w-2/3 ${shimmerClass}`}></div>
              <div className={`h-3 w-1/4 ${shimmerClass}`}></div>
              <div className={`h-3 w-3/4 ${shimmerClass}`}></div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between gap-4 mt-6 flex-wrap">
        <div className={`h-10 w-40 ${shimmerClass}`}></div>
        <div className="flex gap-4 flex-wrap">
          <div className={`h-10 w-36 ${shimmerClass}`}></div>
          <div className={`h-10 w-44 ${shimmerClass}`}></div>
        </div>
      </div>
    </div>
  );
}
export default function ClientSetting() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);
  // Dummy Data
  const [clientInfo] = useState({
    account: {
      name: "B****t B*****r",
      email: "b****@gmail.com",
      role: "Client Marketplace",
      company: "Raybit Technologies",
      profileImage: "src/assets/profileImage.jpeg",
    },
    company: {
      name: "Raybit Technologies",
      industry: "Tech & IT",
      size: "10-15 Employees",
      logo: "src/assets/clientscreen/office.svg",
    },
    contact: {
      owner: "B****t B*****r",
      phone: "+*******2455",
      timezone: "UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi",
      address: "S***agar S***1201 India JK",
    },
  });

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
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

        <div className="md:ml-[220px] ml-[70px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          {loading ? (
            <ShimmerClientSettings darkMode={darkMode} />
          ) : (
            <div
              className={`md:p-6 px-3 py-6 border rounded-lg ${
                darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
              }`}
            >
              <div className="">
                <h3 className="md:text-2xl text-xl font-[400]">My Info</h3>

                <p
                  className={`text-sm pt-3 mb-6 ${
                    darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                  }`}
                >
                  This is a Client account
                </p>

                {/* Account Section */}
                <div className="border border-[#555555] rounded-md sm:px-4 pl-2  pb-4 pt-2 mb-6 relative">
                  <p className="font-medium">Account</p>
                  <button className="absolute top-3 right-3">
                    <img src="src/assets/edit.svg" />
                  </button>
                  <div className="flex sm:gap-24 gap-4 mt-3">
                    <img
                      src={clientInfo.account.profileImage}
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg mb-3">{clientInfo.account.name}</p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Client Marketplace
                      </p>
                      <p className="text-sm mb-3">
                        {clientInfo.account.company}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Email
                      </p>
                      <p className="text-sm break-all ">
                        {clientInfo.account.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Company Section */}
                <div className="border border-[#555555] rounded-md sm:px-4 pl-2 pr-1 pb-4 pt-2 mb-6 relative">
                  <p className="font-medium">Company</p>
                  <button className="absolute top-3 right-3">
                    <img src="src/assets/edit.svg" />
                  </button>
                  <div className="flex sm:gap-24 gap-3 mt-3">
                    <img
                      src={
                        darkMode
                          ? "src/assets/clientscreen/office-dark.svg"
                          : "src/assets/clientscreen/office.svg"
                      }
                      alt="Company Logo"
                      className="w-16 h-16 object-cover"
                    />

                    <div>
                      <p className="text-lg mb-3">{clientInfo.company.name}</p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Industry
                      </p>
                      <p className="text-sm mb-3">
                        {clientInfo.company.industry}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Size
                      </p>
                      <p className="text-sm">{clientInfo.company.size}</p>
                    </div>
                  </div>
                </div>

                {/* Company Contacts Section */}
                <div className="border border-[#555555] rounded-md sm:px-4 pl-2 pr-1 pb-4 pt-2 mb-6 relative">
                  <p className="font-medium">Company Contracts</p>
                  <button className="absolute top-3 right-3">
                    <img src="src/assets/edit.svg" />
                  </button>
                  <div className="flex sm:gap-24 gap-4 mt-3">
                    <img
                      src={
                        darkMode
                          ? "src/assets/clientscreen/office-dark.svg"
                          : "src/assets/clientscreen/office.svg"
                      }
                      alt="Company Logo"
                      className="w-16 h-16 object-cover"
                    />

                    <div>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Owner
                      </p>
                      <p className="text-sm mb-3">{clientInfo.contact.owner}</p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Phone
                      </p>
                      <p className="text-sm mb-3">{clientInfo.contact.phone}</p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Time zone
                      </p>
                      <p className="text-sm mb-3">
                        {clientInfo.contact.timezone}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                        }`}
                      >
                        Address
                      </p>
                      <p className="text-sm">{clientInfo.contact.address}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex  justify-between gap-4  text-[12px] [@media(min-width:875px)]:text-base font-[600]  mt-6 [@media(max-width:565px)]:flex-col">
                  <button className="bg-[#E66D3D] text-white  px-4 py-2 rounded">
                    Create new account
                  </button>
                  <div className="flex gap-4 [@media(max-width:565px)]:flex-col">
                    <button className="border border-[#E66D3D] px-4 py-2 rounded">
                      Close Account
                    </button>
                    <button className="border border-[#E66D3D] px-4 py-2 rounded">
                      Transfer Ownership
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
