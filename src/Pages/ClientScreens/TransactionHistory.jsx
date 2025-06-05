import React, { useState, useEffect, useRef } from "react";

import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { MdOutlineDownloading } from "react-icons/md";
import { ChevronDown } from "lucide-react";
import { DateRange } from "react-date-range";
import {
  format,
  startOfWeek,
  endOfWeek,
  subWeeks,
  startOfMonth,
  endOfMonth,
  subMonths,
  startOfYear,
  endOfYear,
  subYears,
  isSameMonth,
  parse,
} from "date-fns";

const ShimmerTransactionsTable = ({ darkMode }) => {
  const bgClass = darkMode ? "bg-gray-700" : "bg-gray-300";

  return (
    <div className="animate-pulse">
      <table className="w-full text-sm text-left">
        {/* Desktop table header */}
        <thead className="hidden md:table-header-group">
          <tr className="border-b border-b-[#555555]">
            <th className="px-4 py-3 hidden md:table-cell">Date</th>
            <th className="px-4 py-3 hidden md:table-cell">Type</th>
            <th className="px-4 py-3">Contract / Details</th>
            <th className="px-4 py-3">Freelancer</th>
            <th className="px-4 py-3 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, idx) => (
            <React.Fragment key={idx}>
              {/* Desktop row */}
              <tr>
                <td className={`px-2 py-3 hidden md:table-cell`}>
                  <div className={`h-4 w-16 rounded ${bgClass}`} />
                </td>
                <td className={`px-2 py-3 hidden md:table-cell`}>
                  <div className={`h-4 w-20 rounded ${bgClass}`} />
                </td>
                <td className="sm:px-2 pl-2 py-3">
                  <div className={`h-4 w-40 mb-1 rounded ${bgClass}`} />
                  <div
                    className={`h-3 w-32 hidden md:block rounded ${bgClass}`}
                  />
                </td>
                <td className="px-2 py-3 hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${bgClass}`} />
                    <div className={`h-4 w-24 rounded ${bgClass}`} />
                  </div>
                </td>
                <td className="sm:px-3 pr-1 py-3 text-right">
                  <div className={`h-4 w-16 ml-auto rounded ${bgClass}`} />
                </td>
              </tr>

              {/* Mobile rows */}
              <tr className="md:hidden">
                <td className="pb-2 pl-2" colSpan="5">
                  <div className={`h-4 w-20 rounded ${bgClass}`} />
                </td>
              </tr>
              <tr className="md:hidden">
                <td colSpan="5" className="px-2 pb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${bgClass}`} />
                    <div className={`h-4 w-24 rounded ${bgClass}`} />
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function TransactionHistory() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("All Time");
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const calendarRef = useRef();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const today = new Date();

  const formatRange = (start, end) =>
    `${format(start, "MMM d, yyyy")} – ${format(end, "MMM d, yyyy")}`;

  const thisWeekStart = startOfWeek(today, { weekStartsOn: 1 });
  const thisWeekEnd = endOfWeek(today, { weekStartsOn: 1 });

  const lastWeekStart = startOfWeek(subWeeks(today, 1), { weekStartsOn: 1 });
  const lastWeekEnd = endOfWeek(subWeeks(today, 1), { weekStartsOn: 1 });

  const thisMonthStart = startOfMonth(today);
  const thisMonthEnd = endOfMonth(today);

  const lastMonthStart = startOfMonth(subMonths(today, 1));
  const lastMonthEnd = endOfMonth(subMonths(today, 1));

  const thisYearStart = startOfYear(today);
  const thisYearEnd = endOfYear(today);

  const lastYearStart = startOfYear(subYears(today, 1));
  const lastYearEnd = endOfYear(subYears(today, 1));
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [selected1, setSelected1] = useState("All Types");
  const [selected2, setSelected2] = useState("All Freelancers");
  const [selected3, setSelected3] = useState("All Contracts");
  const [loading, setLoading] = useState(true);
  const toggle = (dropdown) => {
    setIsOpen1(dropdown === 1 ? !isOpen1 : false);
    setIsOpen2(dropdown === 2 ? !isOpen2 : false);
    setIsOpen3(dropdown === 3 ? !isOpen3 : false);
  };

  const options1 = ["All Types", "Fixed", "Hourly", "Milestone"];
  const options2 = ["All Freelancers", "John Doe", "Jane Smith", "Alex Kim"];
  const options3 = ["All Contracts", "Active", "Paused", "Completed"];

  const dateOptions = [
    { label: "All Time", range: "" },
    {
      label: "This Week",
      range: formatRange(thisWeekStart, thisWeekEnd),
      start: thisWeekStart,
      end: thisWeekEnd,
    },
    {
      label: "Last Week",
      range: formatRange(lastWeekStart, lastWeekEnd),
      start: lastWeekStart,
      end: lastWeekEnd,
    },
    {
      label: "This Month",
      range: formatRange(thisMonthStart, thisMonthEnd),
      start: thisMonthStart,
      end: thisMonthEnd,
    },
    {
      label: "Last Month",
      range: formatRange(lastMonthStart, lastMonthEnd),
      start: lastMonthStart,
      end: lastMonthEnd,
    },
    {
      label: "This Year",
      range: formatRange(thisYearStart, thisYearEnd),
      start: thisYearStart,
      end: thisYearEnd,
    },
    {
      label: "Last Year",
      range: formatRange(lastYearStart, lastYearEnd),
      start: lastYearStart,
      end: lastYearEnd,
    },
    { label: "Custom Date Range", range: "custom" },
  ];

  const transactions = [
    {
      date: "9 Apr, 2025",
      type: "Refund",
      contract: "Fix Hostinger VPS HPanel Email Creation Issue",
      detail: "Invoice for Apr 1 - Apr 7, 2025",
      freelancer: "Basit Bashir",
      avatar: "src/assets/profileImage.jpeg",
      amount: "+ $23.00",
      isCredit: true,
      transactionId: "987654567",
      charges: [
        {
          date: "1 Apr, 2025",
          description: "Contract Funding",
          amount: "23.00",
        },
        {
          date: "1 Apr, 2025",
          description: "Contract Funding",
          amount: "23.00",
        },
        {
          date: "1 Apr, 2025",
          description: "Contract Funding",
          amount: "23.00",
        },
        {
          date: "1 Apr, 2025",
          description: "Contract Funding",
          amount: "23.00",
        },
        {
          date: "1 Apr, 2025",
          description: "Refund to card ending in 1234",
          amount: "23.00",
        },
      ],
      payments: [
        {
          date: "9 Apr, 2025",
          description: "Refund to card ending in 1234",
          amount: "23.00",
        },
      ],
    },
    {
      date: "7 Apr, 2025",
      type: "Hourly",
      contract: "Responsive Landing Page develop...",
      detail: "Invoice for Apr 1 - Apr 7, 2025",
      freelancer: "Basit Bashir",
      avatar: "src/assets/profileImage.jpeg",
      amount: "- $23.00",
      isCredit: false,
      transactionId: "123456789",
      charges: [
        {
          date: "6 Apr, 2025",
          description: "Hourly Payment",
          amount: "23.00",
        },
      ],
      payments: [
        {
          date: "9 Apr, 2025",
          description: "Refund to card ending in 1234",
          amount: "23.00",
        },
      ],
    },
    {
      date: "1 Apr, 2025",
      type: "Fixed-Price",
      contract: "Responsive Landing Page develop...",
      detail: "Invoice for Apr 1 - Apr 7, 2025",
      freelancer: "Basit Bashir",
      avatar: "src/assets/profileImage.jpeg",
      amount: "- $23.00",
      isCredit: false,
      transactionId: "456789123",
      charges: [
        {
          date: "1 Apr, 2025",
          description: "Contract Funding",
          amount: "23.00",
        },
      ],
      payments: [
        {
          date: "9 Apr, 2025",
          description: "Refund to card ending in 1234",
          amount: "23.00",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const handleDateChange = (ranges) => {
    const { startDate } = ranges.selection;
    const { startDate: start, endDate: end } = getWeekRangeFromDate(startDate);

    const formatted = `${format(start, "d MMM, yyyy")} - ${format(
      end,
      "d MMM, yyyy"
    )}`;

    setSelectedRange({ startDate: start, endDate: end, key: "selection" });
    setSelectedDateRange(formatted);
    setShowCalendar(false);
  };

  const getWeekRangeFromDate = (date) => ({
    startDate: startOfWeek(date, { weekStartsOn: 0 }),
    endDate: endOfWeek(date, { weekStartsOn: 0 }),
  });

  // Filtering transactions based on selected date range
  const filteredTransactions = transactions.filter((txn) => {
    if (selectedDateRange === "All Time") return true;

    const txnDate = parse(txn.date, "d MMM, yyyy", new Date());

    const matchedPreset = dateOptions.find(
      (opt) => opt.range === selectedDateRange
    );
    const rangeStart = matchedPreset?.start || selectedRange.startDate;
    const rangeEnd = matchedPreset?.end || selectedRange.endDate;

    return txnDate >= rangeStart && txnDate <= rangeEnd;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate 2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-[#333333]"
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
        <div className="md:ml-[240px] ml-[100px] flex-1 md:p-6 px-3 py-6 overflow-y-auto  hide-scrollbar">
          <div className="lg:p-6 px-3 py-6  border rounded-lg border-[#555555] space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <h3 className="md:text-2xl text-xl">Transaction History</h3>

              <div className="w-full sm:w-auto border border-[#E66D3D] rounded px-4 py-2 text-sm">
                <span>Outstanding Balance</span>
                <span className="font-semibold ml-2">$0.00</span>
              </div>
            </div>

            <div className="mb-6">
              {/* Show Filters Button on Mobile */}
              <div className="sm:hidden mb-4">
                <button
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                  className="w-full text-left border border-[#555555] bg-transparent rounded px-2 py-2 flex items-center justify-between"
                >
                  <span>Show Filters</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Filters */}
              <div
                className={`grid gap-4 ${
                  isFiltersVisible ? "grid-cols-1" : "hidden"
                } sm:grid sm:grid-cols-4`}
              >
                {/* Date Range Dropdown */}
                <div className="relative text-sm [@media(max-width:1014px)]:text-[10px]">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left border border-[#555555] bg-transparent rounded px-2 py-2 flex items-center justify-between"
                  >
                    <span>{selectedDateRange}</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <ul className="absolute mt-1 sm:w-96 w-72 text-[#333333] z-10 bg-white border border-[#555555] rounded shadow  [@media(max-width:472px)]:w-48">
                      {dateOptions.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            if (option.range === "custom") {
                              setShowCalendar(true);
                            } else {
                              setSelectedDateRange(
                                option.range || option.label
                              );
                              if (option.start && option.end) {
                                setSelectedRange({
                                  startDate: option.start,
                                  endDate: option.end,
                                  key: "selection",
                                });
                              }
                              setShowCalendar(false);
                            }
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-1 cursor-pointer hover:bg-[#E66D3D] hover:text-white transition-colors"
                        >
                          <div className="font-medium">{option.label}</div>
                          {option.range !== "custom" && (
                            <div className="text-xs">{option.range}</div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {showCalendar && (
                    <div
                      ref={calendarRef}
                      className="absolute z-50 mt-2 shadow-lg custom-calendar-wrapper "
                    >
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
                          const isInRange =
                            day >= selectedRange.startDate &&
                            day <= selectedRange.endDate;
                          return (
                            <div
                              style={{
                                background: isInRange ? "#D9D9D9" : "",
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

                {/* Dropdowns for Types, Freelancers, Contracts */}
                {/* Dropdown 1 */}
                <div className="relative text-sm w-full [@media(max-width:1014px)]:text-[10px]">
                  <button
                    onClick={() => toggle(1)}
                    className="w-full border border-[#555555] bg-transparent rounded px-2 py-2 flex justify-between items-center"
                  >
                    {selected1}
                    <ChevronDown size={16} />
                  </button>
                  {isOpen1 && (
                    <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded shadow-lg">
                      {options1.map((option, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            setSelected1(option);
                            setIsOpen1(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white text-[#222]"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Dropdown 2 */}
                <div className="relative text-sm w-full [@media(max-width:1014px)]:text-[10px]">
                  <button
                    onClick={() => toggle(2)}
                    className="w-full border border-[#555555] bg-transparent rounded px-2 py-2 flex justify-between items-center"
                  >
                    {selected2}
                    <ChevronDown size={16} />
                  </button>
                  {isOpen2 && (
                    <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded shadow-lg">
                      {options2.map((option, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            setSelected2(option);
                            setIsOpen2(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white text-[#222]"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Dropdown 3 */}
                <div className="relative text-sm w-full [@media(max-width:1014px)]:text-[10px]">
                  <button
                    onClick={() => toggle(3)}
                    className="w-full border border-[#555555] bg-transparent rounded px-2 py-2 flex justify-between items-center"
                  >
                    {selected3}
                    <ChevronDown size={16} />
                  </button>
                  {isOpen3 && (
                    <ul className="absolute z-10 mt-1 w-full bg-white border border-[#555555] rounded shadow-lg">
                      {options3.map((option, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            setSelected3(option);
                            setIsOpen3(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white text-[#222]"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="border border-[#555555] rounded overflow-x-auto">
              {filteredTransactions.length === 0 ? (
                <div className="p-6 text-center text-gray-500 text-sm">
                  No data for the selected range.
                </div>
              ) : loading ? (
                <ShimmerTransactionsTable darkMode={darkMode} />
              ) : (
                <table className="w-full text-sm text-left">
                  <thead className="hidden md:table-header-group">
                    <tr className="border-b border-b-[#555555]">
                      <th className="px-4 py-3 font-medium hidden md:table-cell">
                        Date
                      </th>
                      <th className="px-4 py-3 font-medium hidden md:table-cell">
                        Type
                      </th>
                      <th className="px-4 py-3 font-medium">
                        Contract / Details
                      </th>
                      <th className="px-4 py-3 font-medium">Freelancer</th>
                      <th className="px-4 py-3 font-medium text-right">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((txn, idx) => {
                      const key = `txn-${idx}`;
                      return (
                        <React.Fragment key={key}>
                          {/* Desktop row */}
                          <tr
                            onClick={() => {
                              setSelectedTransaction(txn);
                              setShowModal(true);
                            }}
                            className={`cursor-pointer ${
                              darkMode
                                ? "hover:bg-[#2C2C2C]"
                                : "hover:bg-[#F9F9F9]"
                            }`}
                          >
                            <td className="px-2 py-3 hidden md:table-cell">
                              {txn.date}
                            </td>
                            <td className="px-2 py-3 hidden md:table-cell">
                              {txn.type}
                            </td>
                            <td className="sm:px-2 pl-2 py-3">
                              <div className="font-medium truncate max-w-[150px] md:max-w-none md:truncate-none">
                                {txn.contract}
                              </div>
                              <div
                                className={`text-xs hidden md:table-cell ${
                                  darkMode ? "text-white" : "text-[#555555]"
                                }`}
                              >
                                {txn.detail}
                              </div>
                            </td>
                            <td className="px-2 py-3 hidden md:table-cell">
                              <div className="flex items-center gap-2">
                                <img
                                  src={txn.avatar}
                                  alt="avatar"
                                  className="w-6 h-6 rounded-full"
                                />
                                <span>{txn.freelancer}</span>
                              </div>
                            </td>
                            <td
                              className={`sm:px-3 pr-1 py-3 text-right font-semibold ${
                                txn.isCredit ? "text-orange-600" : ""
                              }`}
                            >
                              {txn.amount}
                            </td>
                          </tr>

                          {/* Mobile-only rows */}
                          <tr className="md:hidden">
                            <td className="pb-3 pl-2" colSpan="5">
                              {txn.date}
                            </td>
                          </tr>
                          <tr className="md:hidden">
                            <td colSpan="5" className="px-2 pb-3">
                              <div className="flex items-center gap-2">
                                <img
                                  src={txn.avatar}
                                  alt="avatar"
                                  className="w-6 h-6 rounded-full"
                                />
                                <span>{txn.freelancer}</span>
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          {showModal && selectedTransaction && (
            <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-[10]">
              <div className="bg-white  text-[#333333] max-w-4xl w-full rounded-lg px-6 pb-6 pt-4 shadow-lg relative max-h-[85vh] overflow-y-auto hide-scrollbar mt-16">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <h2 className="text-xl font-[400]">
                  {selectedTransaction.contract}
                </h2>
                <p className="text-sm mb-3 text-[#555555]">
                  {" "}
                  Milestone 1- {selectedTransaction.contract}
                </p>

                <div className="text-sm mb-4 text-[#555555] flex flex-wrap gap-x-10 gap-y-2">
                  <span>
                    <span className="">Transaction ID:</span>{" "}
                    <span className="font-semibold">
                      {selectedTransaction.transactionId}
                    </span>
                  </span>
                  <span>
                    <span className="">Dated:</span>{" "}
                    <span className="font-semibold">
                      {" "}
                      {selectedTransaction.date}{" "}
                    </span>
                  </span>
                  <span>
                    <span className="">Type:</span>{" "}
                    <span className="font-semibold">
                      {" "}
                      {selectedTransaction.type}{" "}
                    </span>
                  </span>
                  <span className=" flex gap-2">
                    <span className="">Freelancer:</span>{" "}
                    <span className="font-semibold flex gap-2">
                      {" "}
                      <img
                        src={selectedTransaction.avatar}
                        className="w-5 h-5 rounded-full"
                      />
                      {selectedTransaction.freelancer}{" "}
                    </span>
                  </span>
                </div>

                <div className="flex  gap-7 mb-4">
                  <div className=" text-[#555555] mb-4">
                    Amount:
                    <span className="font-medium">
                      {" "}
                      {selectedTransaction.amount}
                    </span>
                  </div>
                  <div className=" font-[600] text-[#E66D3D]  flex gap-2  mb-4">
                    Download PDF
                    <button className="text-[#E66D3D] mt-1  hover:underline text-[17px]">
                      <MdOutlineDownloading />
                    </button>
                  </div>
                </div>

                {/* Charges Table */}
                {selectedTransaction.charges.length > 0 && (
                  <div className="rounded-md overflow-hidden border border-[#555555] mt-2">
                    <table className="w-full text-sm table-fixed">
                      <thead>
                        <tr className="border-b border-b-[#555555]">
                          <th className="w-[20%] p-2 text-left">Date</th>
                          <th className="w-[45%] p-2 text-left">Description</th>
                          <th className="w-[15%] p-2 text-center">Invoice</th>
                          <th className="w-[20%] p-2 pr-9 text-right">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTransaction.charges.map((item, i) => (
                          <tr key={i} className="align-bottom">
                            <td className="p-2 break-words">{item.date}</td>
                            <td className="p-2 break-words whitespace-pre-line">
                              {item.description}
                            </td>
                            <td className="p-2 text-center">
                              <button className="text-[#E66D3D] hover:underline text-[17px]">
                                <MdOutlineDownloading />
                              </button>
                            </td>
                            <td className="p-2  pr-9 text-right">
                              - ${item.amount}
                            </td>
                          </tr>
                        ))}
                        <tr className="font-semibold border-t border-t-[#555555]">
                          <td colSpan="2" className="p-2 text-left">
                            Total Charges
                          </td>
                          <td></td>
                          <td className="p-2 text-right  pr-9">
                            - $
                            {selectedTransaction.charges
                              .reduce(
                                (sum, charge) =>
                                  sum + parseFloat(charge.amount),
                                0
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Payments Table */}
                {selectedTransaction.payments.length > 0 && (
                  <div className="rounded-md overflow-hidden border border-[#555555] mt-6">
                    <table className="w-full text-sm table-fixed">
                      <thead>
                        <tr className="border-b border-b-[#555555]">
                          <th className="w-[20%] p-2 text-left">Date</th>
                          <th className="w-[45%] p-2 text-left">Description</th>
                          <th className="w-[15%] p-2 text-center">Receipt</th>
                          <th className="w-[20%] p-2 text-right  pr-9">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTransaction.payments.map((item, i) => (
                          <tr key={i} className="border-t border-t-[#555555]">
                            <td className="p-2 pb-4 break-words">
                              {item.date}
                            </td>
                            <td className="p-2 pb-4 break-words">
                              {item.description}
                            </td>
                            <td className="p-2 pb-4 text-center">
                              <button className="text-[#E66D3D] hover:underline text-[17px]">
                                <MdOutlineDownloading />
                              </button>
                            </td>
                            <td className="p-2 text-right  pr-9">
                              - ${item.amount}
                            </td>
                          </tr>
                        ))}
                        <tr className="font-semibold border-t border-t-[#555555]">
                          <td colSpan="2" className="p-2 text-left">
                            Total Payment
                          </td>
                          <td></td>
                          <td className="p-2 text-right  pr-9">
                            - $
                            {selectedTransaction.charges
                              .reduce(
                                (sum, charge) =>
                                  sum + parseFloat(charge.amount),
                                0
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
