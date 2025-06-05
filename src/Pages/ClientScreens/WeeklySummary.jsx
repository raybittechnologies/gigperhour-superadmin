import { useEffect, useRef, useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import {
  startOfWeek,
  endOfWeek,
  format,
  eachDayOfInterval,
  isSameMonth,
} from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const ShimmerWeeklySummary = ({ darkMode }) => {
  const bgClass = darkMode ? "bg-gray-200" : "bg-gray-300";

  return (
    <div
      className={`p-6 animate-pulse md:p-6 px-0 py-6 md:border rounded-lg md:border-[#555555] space-y-8`}
    >
      <div className={`h-6 w-40 rounded-md ${bgClass}`} />

      <div className={`h-10 w-[220px] rounded-md ${bgClass}`} />

      <div className={`h-[120px] w-full rounded-md ${bgClass}`} />

      <div className={`h-[100px] w-full rounded-md ${bgClass}`} />

      {/* Simulate two shimmer tables */}
      {[...Array(2)].map((_, idx) => (
        <div key={idx} className={`w-full h-[150px] rounded-md ${bgClass}`} />
      ))}
    </div>
  );
};

const WeeklySummary = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [summary, setSummary] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(true);
  const calendarRef = useRef();

  const [selectedRange, setSelectedRange] = useState({
    startDate: startOfWeek(new Date(), { weekStartsOn: 0 }),
    endDate: endOfWeek(new Date(), { weekStartsOn: 0 }),
    key: "selection",
  });

  const handleDateChange = (ranges) => {
    const { startDate } = ranges.selection;
    const start = startOfWeek(startDate, { weekStartsOn: 0 });
    const end = endOfWeek(startDate, { weekStartsOn: 0 });

    setSelectedRange({
      startDate: start,
      endDate: end,
      key: "selection",
    });

    const formatted = `${format(start, "d MMM, yyyy")} - ${format(
      end,
      "d MMM, yyyy"
    )}`;
    setSummary((prev) => ({ ...prev, dateRange: formatted }));

    setShowCalendar(false);
  };

  const isDateInRange = (date) =>
    date >= selectedRange.startDate && date <= selectedRange.endDate;

  const getWeekdaysFromRange = () =>
    eachDayOfInterval({
      start: selectedRange.startDate,
      end: selectedRange.endDate,
    }).map((day) => format(day, "dd MMM EEE"));

  const weekDays = getWeekdaysFromRange();

  useEffect(() => {
    const dummyData = {
      dateRange: "1 Apr, 2025 - 7 Apr, 2025",
      jobSummary: [
        { type: "Hourly", time: "5:10 hrs", price: "$23.00", total: "$23.00" },
        { type: "Manual", time: "0:00 hrs", price: "$0.00", total: "$23.00" },
        { type: "Fixed", time: "0:00 hrs", price: "$0.00", total: "$23.00" },
      ],
      topContracts: [
        {
          title: "Figma Designer Needed for Website Prototype Creation",
          amount: "$23.00",
        },
        {
          title:
            "Responsive Landing Page Development (HTML/CSS) – Welding Company",
          amount: "$44.00",
        },
      ],
      hourlyEntries: [
        {
          user: {
            name: "Basit Bashir",
            avatar: "src/assets/profileImage.jpeg",
            project: "I need a designer for Landing Page",
          },
          hours: ["–", "–", "–", "2:10hrs", "2:10hrs", "–", "–"],
          totalHours: "6:10hrs",
          totalCharge: "$43.20",
        },
      ],
      fixedEntries: [],
    };

    setSummary(dummyData);
  }, []);

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  const renderEntryTable = (entries, title) => (
    <div className="border border-[#555555] rounded mb-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr>
              <th className="p-3 font-[600]">{title}</th>
              {/* Weekdays - hidden on small screens */}
              {weekDays.map((day, i) => (
                <th key={i} className="p-3 font-normal hidden sm:table-cell">
                  {day}
                </th>
              ))}
              <th className="p-3 text-center">Hours</th>
              <th className="p-3 text-center">Charges</th>
            </tr>
          </thead>

          <tbody>
            {entries.length === 0 ? (
              <tr className="border-t border-t-[#555555]">
                <td colSpan={weekDays.length + 3} className="p-4 text-center">
                  No data available for the selected Week
                </td>
              </tr>
            ) : (
              entries.map((entry, index) => (
                <tr key={index} className="border-t border-t-[#555555]">
                  {/* User info */}
                  <td className="p-3 flex items-center gap-2 [@media(min-width:600px)]:min-w-[200px]">
                    <img
                      src={entry.user.avatar}
                      alt="avatar"
                      className="hidden sm:block rounded-full w-6 h-6"
                    />
                    <div>
                      <div className="underline  text-xs">
                        {entry.user.project}
                      </div>
                      <div className="text-xs pt-2">{entry.user.name}</div>
                    </div>
                  </td>

                  {/* Daily hours (hidden on mobile) */}
                  {entry.hours.map((hour, i) => (
                    <td
                      key={i}
                      className="p-3 text-center text-[#E66D3D] hidden sm:table-cell"
                    >
                      {hour}
                    </td>
                  ))}

                  {/* Total Hours */}
                  <td className="p-3 text-center">{entry.totalHours}</td>

                  {/* Total Charges */}
                  <td className="p-3 text-center">{entry.totalCharge}</td>
                </tr>
              ))
            )}
          </tbody>

          <tfoot className="border-t border-t-[#555555]">
            <tr className="font-semibold text-sm">
              {/* Label Cell — spans only the name/project column */}
              <td className="p-3 text-left">
                {entries.length > 0 ? "Total:" : ""}
              </td>

              {/* Spacer cells for hidden weekday columns */}
              {weekDays.map((_, i) => (
                <td key={i} className="hidden sm:table-cell" />
              ))}

              {/* Totals aligned under Hours & Charges */}
              {entries.length > 0 && (
                <>
                  <td className="p-3 text-center">{entries[0].totalHours}</td>
                  <td className="p-3 text-center">{entries[0].totalCharge}</td>
                </>
              )}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate 2s delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-[#333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)]">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10 block md:hidden">
          <div className="h-full overflow-y-auto hide-scrollbar py-[20px]">
            <MobileSidebar />
          </div>
        </div>

        <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto overflow-x-hidden md:p-6 px-3 py-6 hide-scrollbar">
          {loading ? (
            <ShimmerWeeklySummary darkMode={darkMode} />
          ) : (
            <div className="md:p-6 px-0 py-6 md:border rounded-lg  md:border-[#555555] space-y-8">
              <h3 className="md:text-2xl text-xl ">Weekly Summary</h3>

              {/* Calendar Picker */}
              <div className="relative w-fit" ref={calendarRef}>
                <div
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="flex items-center bg-transparent border border-[#555555] rounded px-3 py-2 cursor-pointer min-w-[209px]"
                >
                  <CiCalendarDate className="mr-2" size={20} />
                  <span className="flex-grow text-center md:text-sm text-[12px] ">
                    {summary.dateRange}
                  </span>
                  <IoIosArrowDown className="ml-2" size={18} />
                </div>

                {showCalendar && (
                  <div className="absolute z-50 mt-2 shadow-lg bg-white rounded custom-calendar-wrapper">
                    <DateRange
                      ranges={[selectedRange]}
                      onChange={handleDateChange}
                      showSelectionPreview
                      moveRangeOnFirstSelection={false}
                      editableDateInputs={false}
                      displayMode="date"
                      showMonthAndYearPickers={false}
                      fixedHeight
                      dayContentRenderer={(day) => {
                        const isOutsideMonth = !isSameMonth(
                          day,
                          selectedRange.startDate
                        );
                        return (
                          <div
                            style={{
                              background: isDateInRange(day) ? "#D9D9D9" : "",
                              borderRadius: "50%",
                              width: 22,
                              height: 22,
                              fontSize: "0.75rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: isOutsideMonth ? "#9CA3AF" : "black",
                            }}
                          >
                            {day.getDate()}
                          </div>
                        );
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Job Summary */}
              <div className="border border-[#555555] rounded">
                <table className="w-full md:text-sm text-[12px] text-left">
                  <thead className="border-b border-b-[#555555]">
                    <tr>
                      <th className="px-2 py-2 md:p-3  font-semibold">
                        Job Type
                      </th>
                      <th className="px-2 py-2 md:p-3 font-semibold">
                        Work Time
                      </th>
                      <th className="px-2 py-2 md:p-3 font-semibold">Price</th>
                      <th className="px-2 py-2 md:p-3 font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary.jobSummary.map((item, i) => (
                      <tr key={i}>
                        <td className="px-2 py-2 md:p-3">{item.type}</td>
                        <td className="px-2 py-2 md:p-3">{item.time}</td>
                        <td className="px-2 py-2 md:p-3">{item.price}</td>
                        <td className="px-2 py-2 md:p-3">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Top Contracts */}
              <div className="border border-[#555555] rounded-md">
                <h3 className="font-semibold text-sm p-3">Top 5 Contracts</h3>
                <ul className="pb-3">
                  {summary.topContracts.map((contract, i) => (
                    <li key={i} className="px-3 py-1">
                      <div className="flex justify-between border-t-4 border-lime-400 pt-1">
                        <span>
                          <div className="[@media(max-width:518px)]:text-[10px]">
                            {contract.title}
                          </div>
                        </span>
                        <div className="[@media(max-width:518px)]:text-[12px]">
                          <span>{contract.amount}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tables */}
              {renderEntryTable(summary.hourlyEntries, "Hourly")}
              {renderEntryTable(summary.fixedEntries, "Fixed")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;
