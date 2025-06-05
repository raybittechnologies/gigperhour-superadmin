import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
function TimesheetSkeleton({ darkMode }) {
  const shimmerClass = darkMode ? "bg-[#2e2e2e]" : "bg-gray-300";
  return (
    <div className="animate-pulse space-y-4">
      {[1, 2, 3].map((group) => (
        <div key={group} className="space-y-2">
          <div className={`h-4 w-1/3 rounded ${shimmerClass}`} />
          {[1, 2].map((entry) => (
            <div
              key={entry}
              className="flex items-center justify-between gap-4 border-b border-b-[#555555] pb-2"
            >
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full ${shimmerClass}`} />
                <div className="space-y-1">
                  <div className={`h-3 w-40 rounded ${shimmerClass}`} />
                  <div className={`h-3 w-24 rounded ${shimmerClass}`} />
                </div>
              </div>
              <div className={`h-3 w-10 rounded ${shimmerClass}`} />
              <div className={`h-3 w-12 rounded ${shimmerClass}`} />
              <div className={`h-3 w-16 rounded ${shimmerClass}`} />
            </div>
          ))}
          <div className="flex gap-4">
            <div className={`h-3 w-36 rounded ${shimmerClass}`} />
            <div className={`h-3 w-10 rounded ${shimmerClass}`} />
            <div className={`h-3 w-14 rounded ${shimmerClass}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default function Timesheets() {
  const [darkMode, setDarkMode] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const [timesheetData] = useState([
    {
      date: "Monday, January 1, 2025",
      entries: [
        {
          id: 1,
          freelancer: "Basit Bashir",
          jobTitle: "I need a designer for Landing Page",
          hours: 5,
          amount: 550,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          paymentType: "",
        },
      ],
    },
    {
      date: "Tuesday, January 2, 2025",
      entries: [
        {
          id: 2,
          freelancer: "Ali Khan",
          jobTitle: "I need a designer for Landing Page",
          hours: 5,
          amount: 550,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          paymentType: "Hourly",
        },
      ],
    },
    {
      date: "Wednesday, January 3, 2025",
      entries: [
        {
          id: 3,
          freelancer: "Ali Khan",
          jobTitle: "I need a designer for Landing Page",
          hours: 5,
          amount: 550,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          paymentType: "Hourly",
        },
      ],
    },
    {
      date: "Thursday, January 4, 2025",
      entries: [
        {
          id: 4,
          freelancer: "Ali Khan",
          jobTitle: "I need a designer for Landing Page",
          hours: 5,
          amount: 550,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          paymentType: "Hourly",
        },
      ],
    },
    {
      date: "Friday, January 17, 2025",
      entries: [
        {
          id: 5,
          freelancer: "Ali Khan",
          jobTitle: "I need a designer for Landing Page",
          hours: 5,
          amount: 550,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          paymentType: "Hourly",
        },
      ],
    },
  ]);

  const calculateDayTotal = (entries) => {
    const totalHours = entries.reduce((sum, e) => sum + e.hours, 0);
    const totalAmount = entries.reduce((sum, e) => sum + e.amount, 0);
    return { totalHours, totalAmount };
  };

  const filteredData = timesheetData.filter((group) => {
    if (!startDate || !endDate) return true;
    const groupDate = new Date(group.date);
    return groupDate >= startDate && groupDate <= endDate;
  });

  const overall = filteredData.reduce(
    (acc, group) => {
      const totals = calculateDayTotal(group.entries);
      acc.hours += totals.totalHours;
      acc.amount += totals.totalAmount;
      return acc;
    },
    { hours: 0, amount: 0 }
  );

  return (
    <div
      className={`min-h-screen ${
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
        <div className="md:ml-[240px]  ml-[100px] flex-1 overflow-y-auto  md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6  overflow-x-auto  hide-scrollbar border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h2 className="md:text-2xl text-xl font-[400] mb-8">Timesheets</h2>

            <div className="w-full ">
              <div className="flex items-center md:gap-10 gap-4 mb-6 whitespace-nowrap min-w-max">
                <div className="relative max-w-xs ">
                  <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => setDateRange(update)}
                    placeholderText="Select date range"
                    dateFormat="dd/MM/yyyy"
                    className={`w-full outline-none text-sm bg-transparent border px-4 md:pr-16 pr-11 py-2 rounded-md ${
                      darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                    }`}
                  />
                  <CalendarDays
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 font-[300] pointer-events-none"
                  />
                </div>
                <button className="flex items-center gap-2">
                  <img
                    src={
                      darkMode
                        ? "src/assets/clientscreen/filter-horizontal-dark.svg"
                        : "src/assets/clientscreen/filter-horizontal.svg"
                    }
                    alt="Filter"
                  />
                  Filter
                </button>
              </div>
            </div>

            {filteredData.length === 0 ? (
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr>
                    <td colSpan="4">
                      <div className="border border-[#555555] rounded-md flex flex-col items-center justify-center text-center gap-4 py-16">
                        <img
                          src="src/assets/UserDashboard/sad search.svg"
                          alt="No entries found"
                          className="w-20 h-20"
                        />
                        <p className="text-sm text-gray-500">
                          No entries found for the selected date range.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="w-full ">
                {isLoading ? (
                  <TimesheetSkeleton darkMode={darkMode} />
                ) : (
                  <table className="w-full min-w-[500px] text-left text-sm">
                    <thead className="font-[400] border-[#555555] border-b">
                      <tr>
                        <th className="py-2 font-[300] ">
                          Contract grouped by day
                        </th>
                        <th className="py-2 font-[300]">Hours</th>
                        <th className="py-2 font-[300]">Amount</th>
                        <th className="py-2 font-[300] ">Payment Type</th>
                      </tr>
                    </thead>

                    {filteredData.map((group, idx) => {
                      const { totalHours, totalAmount } = calculateDayTotal(
                        group.entries
                      );
                      return (
                        <tbody key={idx}>
                          <tr className="font-medium border-[#555555] border-b">
                            <td colSpan="4" className="pt-3 pb-3">
                              {group.date}
                            </td>
                          </tr>

                          {group.entries.map((entry, entryIdx) => (
                            <tr
                              key={entryIdx}
                              className="border-[#555555] border-b"
                            >
                              <td className="py-3 flex items-center gap-2">
                                <img
                                  src={entry.avatar}
                                  alt="User"
                                  className="w-8 h-8 rounded-full"
                                />
                                <div>
                                  <p className="underline font-[300] text-sm">
                                    {entry.jobTitle}
                                  </p>
                                  <p className="font-[300] text-xs">
                                    {entry.freelancer}
                                  </p>
                                </div>
                              </td>
                              <td className="py-2 underline cursor-pointer">
                                <Link
                                  to={`/timesheet02`}
                                  state={{ entry, date: group.date }}
                                >
                                  {entry.hours}
                                </Link>
                              </td>
                              <td className="py-2">
                                ${entry.amount.toFixed(2)}
                              </td>
                              <td className="py-2">{entry.paymentType}</td>
                            </tr>
                          ))}

                          <tr className="border-[#555555] border-b">
                            <td className="py-3 font-semibold">
                              Total for {group.date}
                            </td>
                            <td>{totalHours}</td>
                            <td>${totalAmount.toFixed(2)}</td>
                            <td></td>
                          </tr>
                        </tbody>
                      );
                    })}

                    <tbody>
                      <tr>
                        <td className="py-3 font-semibold">Total</td>
                        <td>{overall.hours}</td>
                        <td>${overall.amount.toFixed(2)}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
