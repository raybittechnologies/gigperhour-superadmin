import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/SettingSidebar";
import MobileSidebar from "../../components/ClientScreen/MobileSetting";
const ShimmerMembership = ({ darkMode }) => {
  return (
    <div
      className={`md:p-6 px-3 py-6 border rounded-lg animate-pulse ${
        darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
      }`}
    >
      {/* Heading */}
      <div className="h-6 w-3/4 max-w-sm bg-gray-300 rounded mb-6"></div>

      {/* Current Plan Card */}
      <div className="flex flex-wrap justify-between border border-[#555555] p-3 rounded-md items-start gap-4 mb-6">
        <div className="space-y-3 w-full sm:w-auto">
          <div className="h-3 w-24 bg-gray-300 rounded"></div>
          <div className="h-5 w-40 bg-gray-300 rounded"></div>
          <div className="h-3 w-36 bg-gray-300 rounded"></div>
        </div>
        <div className="h-10 w-full sm:w-40 bg-gray-300 rounded"></div>
      </div>

      {/* Benefits Section */}
      <div className="border border-[#555555] rounded-md p-3 space-y-5">
        <div className="h-5 w-40 bg-gray-300 rounded"></div>

        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-12 items-start gap-4 pb-4 ${
              idx !== 3 ? "border-b border-[#555555]" : ""
            }`}
          >
            <div className="md:col-span-2 w-full max-w-[150px]">
              <div className="w-full h-20 bg-gray-300 rounded"></div>
            </div>
            <div className="md:col-span-10 space-y-2">
              <div className="h-4 w-1/2 bg-gray-300 rounded mb-1"></div>
              <div className="space-y-1 pl-5">
                <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-3 w-4/5 bg-gray-300 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Membership() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const planBenefits = [
    {
      title: "Discover quality talent fast",
      points: [
        "Post a job and receive proposals from talent",
        "See verified work history and reviews",
        "Send 30 invitations to talent per job post",
        "Use advanced search filters",
      ],
      img: "src/assets/clientscreen/Clip path-1.svg",
    },
    {
      title: "Collaboration tools for project tracking",
      points: [
        "Chat, video call, and share files with talent",
        "Get advanced reporting and tracking",
        "Set coworker teams and member permission settings",
        "Customize your invoice with activity codes",
      ],
      img: "src/assets/clientscreen/Group.svg",
    },
    {
      title: "Account support and guidance",
      points: ["24/7 premium customer support"],
      img: "src/assets/clientscreen/support-r0E0WierSm.svg",
    },
    {
      title: "Safe, easy payments",
      points: [
        "Get an extra level of security with Upwork Payment Protection",
        "Pay as you go billing for milestone and hourly contracts",
        "3–5% Marketplace fee depending on payment method",
      ],
      img: "src/assets/clientscreen/Clip path-2.svg",
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // simulate fetch
    return () => clearTimeout(timeout);
  }, []);
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
          {isLoading ? (
            <ShimmerMembership darkMode={darkMode} />
          ) : (
            <div
              className={`md:p-6 px-3 py-6 border rounded-lg ${
                darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
              }`}
            >
              <h3 className="md:text-2xl text-xl font-[400]">
                Membership Settings
              </h3>
              <div className="flex flex-wrap justify-between border border-[#555555] p-3 rounded-md items-start gap-4 mt-6 mb-6">
                <div className="space-y-2">
                  <p className="text-sm">Current Plan</p>
                  <h2 className="text-xl font-semibold">Marketplace</h2>
                  <p className="text-sm">Plan start date: 04/27/2025</p>
                </div>
                <button className="bg-[#E66D3D] font-[600] text-white px-4 py-2 rounded w-full sm:w-auto transition">
                  Upgrade membership
                </button>
              </div>

              {/* Benefits */}
              <div className="border border-[#555555] rounded-md p-3 space-y-5">
                <h3 className="text-2xl">Your plan benefits</h3>

                {planBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className={`px-3 grid grid-cols-1 md:grid-cols-12 items-start gap-4 pb-4 ${
                      idx !== planBenefits.length - 1
                        ? "border-b border-[#555555]"
                        : ""
                    }`}
                  >
                    <div className="md:col-span-2 w-full max-w-[150px]">
                      <img
                        src={benefit.img}
                        alt={benefit.title}
                        className="w-full object-contain"
                      />
                    </div>

                    <div className="md:col-span-10 break-words">
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        {benefit.points.map((point, i) => (
                          <li key={i} className="break-words">
                            {point.includes("Marketplace fee") ? (
                              <span className="underline">{point}</span>
                            ) : (
                              point
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
