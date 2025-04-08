import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";

export default function Teams() {
  const [darkMode, setDarkMode] = useState(false);
  const teams = [
    { name: "Basit Bashir", role: "On Contract" },
    { name: "John Doe", role: "Manager" },
    { name: "Alice Smith", role: "Employee" },
    { name: "Alice Smith", role: "Employee" },
  ];

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
            <div className="rounded-lg overflow-hidden w-[40vw]">
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
                      <td className="py-2 px-4 text-left w-1/2">{team.name}</td>
                      <td className="py-2 px-4 text-right w-1/2">
                        {team.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Your content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
