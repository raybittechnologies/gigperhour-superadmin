import { useState, useEffect, useRef } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { MdOutlineDownloading } from "react-icons/md";
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

export default function TransactionHistory() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("All Time");
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
      detail: "Milestone 1 - Fix Landing Page",
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

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : " text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />
      <div className="flex h-[calc(100vh-64px)]">
        <div className="w-[240px] fixed left-0 top-[64px] px-5 py-5 bottom-0 z-10">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-md">
            <SideBar />
          </div>
        </div>
        <div className="ml-[240px] flex-1 p-6 overflow-y-auto  hide-scrollbar">
          <div className="p-6 border rounded-lg border-[#555555] space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl">Transaction History</h3>
              <div className="border border-[#E66D3D] rounded px-4 py-2 text-sm">
                <span>Outstanding Balance</span>
                <span className="font-semibold ml-2">$0.00</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
              {/* Custom Dropdown */}
              <div className="relative text-sm">
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
                  <ul className="absolute mt-1  w-96  text-[#333333] z-10  bg-white border border-[#555555] rounded shadow">
                    {dateOptions.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          if (option.range === "custom") {
                            setShowCalendar(true);
                            setIsDropdownOpen(false);
                          } else {
                            setSelectedDateRange(option.range || option.label);
                            if (option.start && option.end) {
                              setSelectedRange({
                                startDate: option.start,
                                endDate: option.end,
                                key: "selection",
                              });
                            }
                            setShowCalendar(false);
                            setIsDropdownOpen(false);
                          }
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
                    className="absolute z-50 mt-2 shadow-lg "
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

              <select className="border border-[#555555] bg-transparent rounded px-4 py-2 text-sm">
                <option>All Types</option>
              </select>
              <select className="border border-[#555555] bg-transparent rounded px-4 py-2 text-sm">
                <option>All Freelancers</option>
              </select>
              <select className="border border-[#555555] bg-transparent rounded px-4 py-2 text-sm">
                <option>All Contracts</option>
              </select>
            </div>

            <div className="border border-[#555555] rounded overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-b-[#555555]">
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">
                      Contract / Details
                    </th>
                    <th className="px-4 py-3 font-medium">Freelancer</th>
                    <th className="px-4 py-3 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((txn, idx) => (
                    <tr
                      key={idx}
                      onClick={() => {
                        setSelectedTransaction(txn);
                        setShowModal(true);
                      }}
                      className={`cursor-pointer ${
                        darkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-[#F9F9F9]"
                      }`}
                    >
                      <td className="px-4 py-3">{txn.date}</td>
                      <td className="px-4 py-3">{txn.type}</td>
                      <td className="px-4 py-3">
                        <div>{txn.contract}</div>
                        <div className="text-xs text-[#555555]">
                          {txn.detail}
                        </div>
                      </td>
                      <td className="px-4 py-3 flex items-center gap-2">
                        <img
                          src={txn.avatar}
                          alt="avatar"
                          className="w-6 h-6 rounded-full"
                        />
                        {txn.freelancer}
                      </td>
                      <td
                        className={`px-4 py-3 text-right font-semibold ${
                          txn.isCredit ? "text-orange-600" : "text-gray-700"
                        }`}
                      >
                        {txn.amount}
                      </td>
                    </tr>
                  ))}
                  {filteredTransactions.length === 0 && (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        No transactions found for selected date range.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {showModal && selectedTransaction && (
            <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-[10]">
              <div className="bg-white ml-40 text-[#333333] max-w-4xl w-full rounded-lg px-6 pb-6 pt-4 shadow-lg relative max-h-[85vh] overflow-y-auto hide-scrollbar mt-16">
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
