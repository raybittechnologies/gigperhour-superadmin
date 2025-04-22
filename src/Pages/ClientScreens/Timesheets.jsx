import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function Timesheets() {
  const [darkMode, setDarkMode] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [timesheetData] = useState([
    {
      date: "Monday, January 1, 2025",
      entries: [
        {
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
      date: "wednesday, January 3, 2025",
      entries: [
        {
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
      date: "thrusday, January 4, 2025",
      entries: [
        {
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
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`p-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-[400] mb-8">Timesheets</h2>

            <div className="flex items-center gap-10 mb-6">
              <div className="relative max-w-xs">
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => setDateRange(update)}
                  placeholderText="Select date range"
                  dateFormat="dd/MM/yyyy"
                  className="w-full outline-none text-sm bg-transparent border px-4 pr-16 py-2 rounded-md border-[#555555]"
                />
                <CalendarDays
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] pointer-events-none"
                />
              </div>
              <button className="flex items-center gap-2">
                <img src="src/assets/clientscreen/filter-horizontal.svg" />
                Filter
              </button>
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
              <table className="w-full text-left text-sm">
                <thead className="font-[400] border-[#555555] border-b">
                  <tr>
                    <th className="py-2 font-[300]">Contract grouped by day</th>
                    <th className="py-2 font-[300]">Hours</th>
                    <th className="py-2 font-[300]">Amount</th>
                    <th className="py-2 font-[300]">Payment Type</th>
                  </tr>
                </thead>

                {filteredData.map((group, idx) => {
                  const { totalHours, totalAmount } = calculateDayTotal(
                    group.entries
                  );
                  return (
                    <tbody key={idx}>
                      <tr className="font-medium  border-[#555555] border-b">
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
                          <td className="py-2">${entry.amount.toFixed(2)}</td>
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
        </div>
      </div>
    </div>
  );
}
