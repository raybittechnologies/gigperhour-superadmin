import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSettings";

function ShimmerTeams({ darkMode }) {
  return (
    <div
      className={`border rounded-lg px-3 pt-2 pb-6 animate-pulse ${
        darkMode ? "border-white" : "border-[#555555]"
      }`}
    >
      <div className="h-6 w-32 mb-2 rounded bg-gray-300 dark:bg-gray-700" />
      <div className="h-4 w-3/4 mb-4 rounded bg-gray-300 dark:bg-gray-700" />

      <div className="overflow-hidden md:w-[40vw]">
        <table className="w-full table-fixed">
          <thead>
            <tr
              className={`border-b ${
                darkMode ? "border-white" : "border-black"
              }`}
            >
              <th className="py-2 px-4 text-[#E66D3D] text-left w-1/2">
                Team name
              </th>
              <th className="py-2 px-4 text-[#E66D3D] text-right w-1/2">
                Role
              </th>
            </tr>
          </thead>

          <tbody>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <tr key={i}>
                  <td className="py-2 px-4 text-left w-1/2">
                    <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700" />
                  </td>
                  <td className="py-2 px-4 text-right w-1/2">
                    <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700 ml-auto" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Teams() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const teams = [
    { name: "Basit Bashir", role: "On Contract" },
    { name: "John Doe", role: "Manager" },
    { name: "Alice Smith", role: "Employee" },
    { name: "Alice Smith", role: "Employee" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 1200);
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
          {loading ? (
            <ShimmerTeams darkMode={darkMode} />
          ) : (
            <div
              className={`border rounded-lg px-3 pt-2 pb-6 ${
                darkMode ? "border-white" : "border-[#555555]"
              }`}
            >
              <h2 className="text-2xl font-[400] mb-2">My Teams</h2>
              <p className=" mb-4">
                Teams are used to group contracts by department or manager
              </p>

              {/* Table */}
              <div className="rounded-lg overflow-hidden md:w-[40vw]">
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr
                      className={`border-b ${
                        darkMode ? "border-white" : "border-black"
                      }`}
                    >
                      <th className="py-2 px-4 text-[#E66D3D] text-left w-1/2">
                        Team name
                      </th>
                      <th className="py-2 px-4 text-[#E66D3D] text-right w-1/2">
                        Role
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {teams.map((team, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 text-left w-1/2">
                          {team.name}
                        </td>
                        <td className="py-2 px-4 text-right w-1/2">
                          {team.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
