import { Search, ChevronDown } from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';

const Navbar = () => {


  return (
    <div className="w-full h-16 bg-white border-b border-[#F1F5F9] flex items-center justify-end px-6 relative">

      {/* Search - Absolutely Centered */}
      <div className="absolute left-[37%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-[#94A3B8]" />
        <input
          type="text"
          placeholder="Search users, contracts, disputes..."
          className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-[12px] text-[13px] text-[#334155] placeholder-[#94A3B8] focus:outline-none focus:border-[#CBD5E1] transition-colors bg-[#F8FAFC]"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Live Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
          <div className="w-[8px] h-[8px] rounded-full bg-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,0.15)]" />
          <span className="text-[13px] font-[500] text-[#334155]">Live</span>
        </div>

        {/* Notification Bell + Dropdown */}
        <NotificationDropdown />

        {/* Divider */}
        <div className="w-[1px] h-8 bg-[#E2E8F0]" />

        {/* Admin Profile */}
        <button className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="w-[36px] h-[36px] rounded-full bg-[#1E293B] flex items-center justify-center border-2 border-[#E2E8F0]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-[13px] font-[600] text-[#0F172A] leading-tight">Admin</p>
            <p className="text-[11px] text-[#94A3B8] leading-tight">Super Admin</p>
          </div>
          <ChevronDown className="w-[14px] h-[14px] text-[#94A3B8] ml-0.5" />
        </button>

      </div>
    </div>
  );
};

export default Navbar;