// Same imports...
import { useEffect, useRef, useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
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

const WeeklySummary = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [summary, setSummary] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

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

  if (!summary) return <div className="p-6">Loading...</div>;

  const renderEntryTable = (entries, title) => (
    <div className="border border-[#555555] rounded mb-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr>
              <th className="p-3 font-[600]">{title}</th>
              {weekDays.map((day, i) => (
                <th key={i} className="p-3 font-normal">
                  {day}
                </th>
              ))}
              <th className="p-3">Hours</th>
              <th className="p-3">Charges</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 ? (
              <tr className="border-t border-t-[#555555]">
                <td colSpan={weekDays.length + 3} className="p-4 text-center ">
                  No data available for the selected Week
                </td>
              </tr>
            ) : (
              entries.map((entry, index) => (
                <tr key={index} className="border-t border-t-[#555555]">
                  <td className="p-3 flex items-center gap-2 min-w-[200px]">
                    <img
                      src={entry.user.avatar}
                      alt="avatar"
                      className="rounded-full w-6 h-6"
                    />
                    <div>
                      <div className="underline text-xs">
                        {entry.user.project}
                      </div>
                      <div className="text-xs">{entry.user.name}</div>
                    </div>
                  </td>
                  {entry.hours.map((hour, i) => (
                    <td key={i} className="p-3 text-center text-[#E66D3D]">
                      {hour}
                    </td>
                  ))}
                  <td className="p-3 text-center">{entry.totalHours}</td>
                  <td className="p-3 text-center">{entry.totalCharge}</td>
                </tr>
              ))
            )}
          </tbody>

          <tfoot className="border-t border-t-[#555555]">
            <tr className="font-semibold text-sm">
              <td
                className="pl-16  p-3 text-left"
                colSpan={weekDays.length + 1}
              >
                Total:
              </td>
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

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-[#333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)]">
        <div className="w-[240px] fixed left-0 top-[64px] px-5 py-5 bottom-0 z-10">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-md">
            <SideBar />
          </div>
        </div>

        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div className="p-6 border rounded-lg  border-[#555555] space-y-8">
            <h3 className="text-2xl ">Weekly Summary</h3>

            {/* Calendar Picker */}
            <div className="relative w-fit" ref={calendarRef}>
              <div
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center bg-transparent border border-[#555555] rounded px-3 py-2 cursor-pointer min-w-[250px] "
              >
                <CiCalendarDate className=" mr-2" size={20} />
                <span className="flex-grow text-center text-sm">
                  {summary.dateRange}
                </span>
                <IoIosArrowDown className=" ml-2" size={18} />
              </div>

              {showCalendar && (
                <div className="absolute z-50 mt-2 shadow-lg">
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
                            width: 24,
                            height: 24,
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
              <table className="w-full text-sm text-left">
                <thead className="border-b border-b-[#555555]">
                  <tr>
                    <th className="p-3 font-semibold">Job Type</th>
                    <th className="p-3 font-semibold">Work Time</th>
                    <th className="p-3 font-semibold">Price</th>
                    <th className="p-3 font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.jobSummary.map((item, i) => (
                    <tr key={i}>
                      <td className="p-3">{item.type}</td>
                      <td className="p-3">{item.time}</td>
                      <td className="p-3">{item.price}</td>
                      <td className="p-3">{item.total}</td>
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
                      <span>{contract.title}</span>
                      <span>{contract.amount}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tables */}
            {renderEntryTable(summary.hourlyEntries, "Hourly")}
            {renderEntryTable(summary.fixedEntries, "Fixed Price")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;
