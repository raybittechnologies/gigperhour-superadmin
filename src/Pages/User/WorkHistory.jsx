import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/ProfileSideBar";
import MobileSidebar from "../../components/UserDashBoard/ProfileMobile";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Star } from "lucide-react";

export default function WorkHistory() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); // loading state

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

  const shimmerBg = darkMode ? "bg-gray-700" : "bg-gray-300";

  // Number of shimmer cards to show
  const shimmerCount = 2;

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
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
          <div className="pl-6 pr-6 pb-1 pt-1 border border-[#555555] rounded-[8px]">
            <h3 className="text-2xl font-[400]">Work History</h3>

            {/* Completed Jobs Section */}
            {loading ? (
              <h4
                className={`text-lg font-[600] mb-4 mt-4 ${shimmerBg} animate-pulse rounded w-40 h-6`}
              />
            ) : (
              <h4 className="text-lg font-[600] mb-4 mt-4">
                <span
                  className={`border-b-2 ${
                    darkMode ? "border-white" : "border-[#555555]"
                  }`}
                >
                  Completed Jobs ({workHistoryData.length})
                </span>
              </h4>
            )}

            {/* Job Cards or Shimmer */}
            {loading
              ? [...Array(shimmerCount)].map((_, index) => (
                  <div
                    key={index}
                    className={`mb-6 ${
                      index === shimmerCount - 1
                        ? ""
                        : "border-b border-[#555555] pb-4"
                    }`}
                  >
                    {/* Title shimmer */}
                    <div
                      className={`h-6 w-3/4 rounded-md animate-pulse ${shimmerBg} mb-3`}
                    ></div>
                    {/* Icon shimmer */}
                    <div className="flex justify-between items-center mb-4">
                      <div
                        className={`h-5 w-5 rounded animate-pulse ${shimmerBg}`}
                      ></div>
                      <div
                        className={`h-5 w-5 rounded animate-pulse ${shimmerBg}`}
                      ></div>
                    </div>

                    {/* Stars shimmer */}
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 w-4 rounded-full animate-pulse ${shimmerBg}`}
                        />
                      ))}
                      <div
                        className={`h-4 w-8 rounded animate-pulse ${shimmerBg} ml-2`}
                      ></div>
                      <div
                        className={`h-4 w-24 rounded animate-pulse ${shimmerBg} ml-6`}
                      ></div>
                    </div>

                    {/* Review shimmer */}
                    <div
                      className={`h-5 w-full rounded animate-pulse ${shimmerBg} mb-2`}
                    ></div>
                    <div
                      className={`h-5 w-1/2 rounded animate-pulse ${shimmerBg} mb-1`}
                    ></div>
                    <div
                      className={`h-4 w-3/4 rounded animate-pulse ${shimmerBg} mb-6`}
                    ></div>

                    {/* Payment info shimmer */}
                    <div className="flex justify-between space-x-6">
                      <div
                        className={`h-5 w-16 rounded animate-pulse ${shimmerBg}`}
                      ></div>
                      <div
                        className={`h-5 w-24 rounded animate-pulse ${shimmerBg}`}
                      ></div>
                      <div
                        className={`h-5 w-24 rounded animate-pulse ${shimmerBg}`}
                      ></div>
                    </div>
                  </div>
                ))
              : workHistoryData.map((job, index) => (
                  <div
                    key={job.id}
                    className={`mb-6 ${
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
                      <FaRegShareFromSquare className="w-5 h-5 text-[#E66D3D]" />
                    </div>

                    <div className="flex flex-wrap items-center mt-4 text-sm">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.round(job.rating)
                                ? "text-[#FCE15A] fill-[#FCE15A]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}

                      <span className="ml-2 text-[15px] mr-10">
                        {job.rating.toFixed(1)}
                      </span>

                      <span
                        className={`text-[15px] whitespace-nowrap ${
                          darkMode ? "text-white" : "text-[#555555]"
                        }`}
                      >
                        {job.dateRange}
                      </span>
                    </div>

                    {/* Review Section */}
                    <p className="mt-2 sm:text-base text-[13px]">
                      {job.review}
                    </p>
                    <p className="mt-3">
                      • <span className="">Freelancers Response</span>
                    </p>
                    <p className="ml-2 mt-1 sm:text-base text-[13px]">
                      {job.response}
                    </p>

                    {/* Payment Info */}
                    <div className="flex justify-between mt-4 sm:text-[16px] text-[14px]">
                      <p>{job.amount}</p>
                      <p>Rate: {job.rate}</p>
                      <p className="sm:mr-[120px]">{job.hours}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
