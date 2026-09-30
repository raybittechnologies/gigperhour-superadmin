import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = (date) => {
  if (!date) return '';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const isSameDay = (a, b) => {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
};

const isInRange = (day, start, end) => {
  if (!start || !end) return false;
  const t = day.getTime();
  return t > start.getTime() && t < end.getTime();
};

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const DateRangePicker = ({ startDate, endDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [selecting, setSelecting] = useState('start'); // 'start' or 'end'
  const [tempStart, setTempStart] = useState(startDate);
  const [tempEnd, setTempEnd] = useState(endDate);
  const ref = useRef(null);

  // Left calendar month
  const today = new Date();
  const [leftMonth, setLeftMonth] = useState(startDate ? startDate.getMonth() : today.getMonth() - 1 < 0 ? 11 : today.getMonth() - 1);
  const [leftYear, setLeftYear] = useState(startDate ? (startDate.getMonth() === 0 ? startDate.getFullYear() : startDate.getFullYear()) : (today.getMonth() - 1 < 0 ? today.getFullYear() - 1 : today.getFullYear()));

  // Right calendar is always leftMonth + 1
  const rightMonth = leftMonth === 11 ? 0 : leftMonth + 1;
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const goToPrevMonth = () => {
    if (leftMonth === 0) {
      setLeftMonth(11);
      setLeftYear(leftYear - 1);
    } else {
      setLeftMonth(leftMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (leftMonth === 11) {
      setLeftMonth(0);
      setLeftYear(leftYear + 1);
    } else {
      setLeftMonth(leftMonth + 1);
    }
  };

  const handleDayClick = (day) => {
    if (selecting === 'start') {
      setTempStart(day);
      setTempEnd(null);
      setSelecting('end');
    } else {
      if (day < tempStart) {
        setTempStart(day);
        setTempEnd(null);
        setSelecting('end');
      } else {
        setTempEnd(day);
        setSelecting('start');
        onChange(tempStart, day);
        setIsOpen(false);
      }
    }
  };

  const getEffectiveEnd = () => {
    if (tempEnd) return tempEnd;
    if (selecting === 'end' && hoveredDate && tempStart && hoveredDate > tempStart) return hoveredDate;
    return null;
  };

  const renderCalendar = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const cells = [];
    const effectiveEnd = getEffectiveEnd();

    // Empty cells for days before 1st
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="w-8 h-8" />);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isStart = isSameDay(date, tempStart);
      const isEnd = isSameDay(date, effectiveEnd);
      const inRange = isInRange(date, tempStart, effectiveEnd);
      const isToday = isSameDay(date, today);

      let dayClasses = 'w-8 h-8 flex items-center justify-center text-[12px] rounded-full cursor-pointer transition-all relative z-10 ';

      if (isStart || isEnd) {
        dayClasses += 'bg-[#E66D3D] text-white font-[600] ';
      } else if (inRange) {
        dayClasses += 'text-[#E66D3D] font-[500] ';
      } else if (isToday) {
        dayClasses += 'text-[#E66D3D] font-[600] ';
      } else {
        dayClasses += 'text-[#334155] hover:bg-[#F1F5F9] ';
      }

      // Range background row highlight
      let rangeBg = '';
      if (inRange) {
        rangeBg = 'bg-[#E66D3D0D]';
      } else if (isStart && effectiveEnd) {
        rangeBg = 'bg-[#E66D3D0D] rounded-l-full';
      } else if (isEnd && tempStart) {
        rangeBg = 'bg-[#E66D3D0D] rounded-r-full';
      }

      cells.push(
        <div key={d} className={`relative flex items-center justify-center`}>
          {rangeBg && <div className={`absolute inset-0 ${rangeBg}`} />}
          <div
            className={dayClasses}
            onClick={() => handleDayClick(date)}
            onMouseEnter={() => setHoveredDate(date)}
          >
            {d}
          </div>
        </div>
      );
    }

    return cells;
  };

  const displayText = startDate && endDate
    ? `${formatDate(startDate)} — ${formatDate(endDate)}`
    : 'Select date range';

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <div
        className="flex items-center gap-3 px-4 py-3 border border-[#E2E8F0] rounded-[12px] text-[#334155] text-[13px] cursor-pointer hover:border-[#CBD5E1] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar className="w-[14px] h-[14px] text-[#94A3B8]" />
        <span>{displayText}</span>
      </div>

      {/* Dropdown Calendar */}
      {isOpen && (
        <div className="absolute left-0 top-[calc(100%-56px)] z-[60] bg-white rounded-[16px] shadow-[0_16px_48px_-8px_rgba(0,0,0,0.16)] border border-[#E2E8F0] px-3 py-1.5 w-max">
          <div className="flex gap-6">
            {/* Left Month */}
            <div className="w-[200px]">
              <div className="flex items-center justify-between mb-4">
                <button onClick={goToPrevMonth} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#F1F5F9] text-[#64748B] transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[12px] font-[500] text-[#0F172A]">{MONTHS[leftMonth]} {leftYear}</span>
                <div className="w-7" />
              </div>
              <div className="grid grid-cols-7 gap-0 mb-2">
                {DAYS.map(d => (
                  <div key={d} className="w-8 h-8 flex items-center justify-center text-[10px] font-[500] text-[#94A3B8] uppercase">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0">
                {renderCalendar(leftYear, leftMonth)}
              </div>
            </div>

            {/* Right Month */}
            <div className="w-[200px]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-7" />
                <span className="text-[12px] font-[500] text-[#0F172A]">{MONTHS[rightMonth]} {rightYear}</span>
                <button onClick={goToNextMonth} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#F1F5F9] text-[#64748B] transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-0 mb-2">
                {DAYS.map(d => (
                  <div key={d} className="w-8 h-8 flex items-center justify-center text-[10px] font-[500] text-[#94A3B8] uppercase">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0">
                {renderCalendar(rightYear, rightMonth)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
