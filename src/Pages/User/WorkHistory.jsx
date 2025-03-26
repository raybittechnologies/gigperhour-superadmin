import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import { Star } from "lucide-react";
export default function WorkHistory() {
  const [darkMode, setDarkMode] = useState(false);

  const workHistoryData = [
    {
      id: 1,
      title: "Figma Design for Single Screen",
      rating: 5.0,
      dateRange: "March 10, 2025 - March 15, 2025",
      review:
        '"Basit had good communication and skills. We were able to accomplish what was needed."',
      response: "Thanks for the valuable",
      amount: "$456",
      rate: "$9.00/hr",
      hours: "45 hours",
    },
    {
      id: 2,
      title: "Figma Design for Single Screen",
      rating: 4.0,
      dateRange: "March 10, 2025 - March 15, 2025",
      review:
        '"Basit had good communication and skills. We were able to accomplish what was needed."',
      response: "Thanks for the valuable",
      amount: "$456",
      rate: "$9.00/hr",
      hours: "45 hours",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div className="pl-6 pr-6 pb-1 pt-1 border border-[#555555] rounded-[8px]">
            <h3 className="text-2xl font-[400]">Work History</h3>

            {/* Completed Jobs Section */}
            <h4 className="text-lg font-[600] mb-4 mt-4">
              <span
                className={`border-b-2 ${
                  darkMode ? "border-white" : "border-[#555555]"
                }`}
              >
                Completed Jobs ({workHistoryData.length})
              </span>{" "}
            </h4>

            {/* Job Cards */}
            {workHistoryData.map((job, index) => (
              <div
                key={job.id}
                className={` mb-6 ${
                  index === workHistoryData.length - 1
                    ? ""
                    : "border-b border-[#555555] pb-4"
                }`}
              >
                {/* Title and Copy Icon */}
                <div className="flex justify-between items-center">
                  <h5 className="text-xl font-semibold underline">
                    {job.title}
                  </h5>
                  <img
                    src="src/assets/UserDashboard/share-01.svg"
                    alt="Copy"
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>

                {/* Rating and Date */}
                <div className="flex items-center mt-4 text-sm">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={` ${
                          i < Math.round(job.rating)
                            ? "text-[#FCE15A] fill-[#FCE15A]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}

                  <span className="ml-2 text-[15px]">
                    {job.rating.toFixed(1)}
                  </span>
                  <span className="ml-10 text-[15px] text-[#55555]">
                    {job.dateRange}
                  </span>
                </div>

                {/* Review Section */}
                <p className="mt-2 ">{job.review}</p>
                <p className="">
                  • <span className="">Freelancers Response</span>
                </p>
                <p className="ml-2 mt-3">{job.response}</p>

                {/* Payment Info */}
                <div className="flex justify-between mt-4 text-[16px]">
                  <p>{job.amount}</p>
                  <p>Rate: {job.rate}</p>
                  <p className="mr-[120px]">{job.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
