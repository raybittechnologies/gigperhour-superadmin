import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";

export default function Employment() {
  const [darkMode, setDarkMode] = useState(false);

  const employmentData = [
    {
      id: 1,
      role: "UI UX Designer",
      company: "Raybit Technologies",
      startDate: "March 10, 2025",
      endDate: "March 15, 2025",
    },
    {
      id: 2,
      role: "Freelancer",
      company: "Self",
      startDate: "March 10, 2025",
      endDate: "March 15, 2025",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div className={`${darkMode ? "bg-black text-white" : "text-[#333333]"}`}>
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className="border border-[#555555] rounded-lg pt-2 pb-4 px-6 relative">
            {/* Header Section */}
            <h3 className="text-[22px] font-[400] mb-4">Employment History</h3>
            <button className="absolute top-6 right-6  p-2 rounded-full ">
              <img src="src/assets/UserDashboard/plus-sig-circle.svg" />
            </button>

            {/* Employment List */}
            {employmentData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex justify-between items-center ${
                  index === employmentData.length - 1 ? "pt-4" : "py-4"
                }`}
              >
                {/* Line Between Data */}
                {index !== 0 && (
                  <div className="absolute -top-2 -left-6 w-[calc(100%+48px)] border-b border-[#555555] last:border-none" />
                )}

                {/* Job Details */}
                <div>
                  <p
                    className={`text-[16px] font-semibold ${
                      darkMode ? "text-white" : "text-[#555555]"
                    }`}
                  >
                    {item.role}{" "}
                    <span
                      className={`${
                        darkMode ? "text-white" : "text-[#555555]"
                      }`}
                    >
                      | {item.company}
                    </span>
                  </p>
                  <p
                    className={`text-[14px] mt-3 ${
                      darkMode ? "text-white" : "text-[#555555]"
                    }`}
                  >
                    {item.startDate} - {item.endDate}
                  </p>
                </div>

                {/* Action Icons */}
                <div className="flex gap-4">
                  <button className="text-[#E66D3D]">
                    <img src="src/assets/edit.svg" />
                  </button>
                  <button className="text-[#E66D3D]">
                    <img src="src/assets/UserDashboard/delete-circle.svg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
