import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Globe,
  BarChart3,
  Users,
  ShieldCheck,
  AlertTriangle,
  Scale,
  CreditCard,
  Megaphone,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  FileText
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setIsLogoutModalOpen(false);
    navigate('/');
  };

  return (
    <div className={`h-screen bg-[#0A0A0A] text-gray-400 flex flex-col relative transition-all duration-300 z-50 ${isCollapsed ? 'w-[80px]' : 'w-[215px]'}`}>

      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-[#1A1A1A] rounded-full flex items-center justify-center text-gray-400 hover:text-white border border-gray-800 z-50 shadow-sm"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo Section */}
      <div className={`flex items-center py-5 border-b border-gray-800 transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'px-6 gap-3'}`}>
        <div className="w-10 h-10 min-w-[40px] bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
          E
        </div>

        {!isCollapsed && (
          <div className="overflow-hidden whitespace-nowrap">
            <p className="text-white font-semibold flex-shrink-0">Elevance</p>
            <p className="text-[10px] text-gray-500 tracking-wider">SUPER ADMIN</p>
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="flex-1 px-3 py-4 space-y-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        {/* OVERVIEW */}
        <div>
          {!isCollapsed && <p className="text-[11px] font-semibold tracking-wider text-gray-500 mb-3 px-1 uppercase">Overview</p>}
          {isCollapsed && <div className="border-t border-gray-800 my-4 hidden" />}

          <div className="space-y-1">
            <Link to="/adminDashboard" className={`flex text-[13px] items-center rounded-lg transition-all duration-200 group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'} ${currentPath === '/adminDashboard' ? 'text-orange-400' : 'hover:text-gray-200 hover:bg-[#1A1A1A]'}`} style={currentPath === '/adminDashboard' ? { boxShadow: '0px 0px 20px 0px #E66D3D14 inset' } : {}}>
              <LayoutDashboard size={18} className={`flex-shrink-0 ${currentPath === '/adminDashboard' ? 'text-primary' : ''}`} />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Dashboard</span>}
            </Link>

            <Link to="/marketplace" className={`flex text-[13px] items-center rounded-lg transition-all duration-200 group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'} ${currentPath === '/marketplace' ? 'text-orange-400' : 'hover:text-gray-200 hover:bg-[#1A1A1A]'}`} style={currentPath === '/marketplace' ? { boxShadow: '0px 0px 20px 0px #E66D3D14 inset' } : {}}>
              <Globe size={18} className={`flex-shrink-0 ${currentPath === '/marketplace' ? 'text-primary' : 'group-hover:text-gray-200'}`} />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Marketplace</span>}
            </Link>

            <Link to="/analytics" className={`flex text-[13px] items-center rounded-lg transition-all duration-200 group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'} ${currentPath === '/analytics' ? 'text-orange-400' : 'hover:text-gray-200 hover:bg-[#1A1A1A]'}`} style={currentPath === '/analytics' ? { boxShadow: '0px 0px 20px 0px #E66D3D14 inset' } : {}}>
              <BarChart3 size={18} className={`flex-shrink-0 ${currentPath === '/analytics' ? 'text-primary' : 'group-hover:text-gray-200'}`} />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Analytics</span>}
            </Link>

            <Link to="/blogs" className={`flex text-[13px] items-center rounded-lg transition-all duration-200 group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'} ${currentPath === '/blogs' ? 'text-orange-400' : 'hover:text-gray-200 hover:bg-[#1A1A1A]'}`} style={currentPath === '/blogs' ? { boxShadow: '0px 0px 20px 0px #E66D3D14 inset' } : {}}>
              <FileText size={18} className={`flex-shrink-0 ${currentPath === '/blogs' ? 'text-primary' : 'group-hover:text-gray-200'}`} />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Blogs</span>}
            </Link>
          </div>
        </div>

        {/* MANAGEMENT */}
        <div>
          {!isCollapsed && <p className="text-[11px] font-semibold tracking-wider text-gray-500 mb-3 px-1 uppercase">Management</p>}
          {isCollapsed && <div className="border-t border-gray-800 my-4" />}

          <div className="space-y-1">
            <Link to="/users" className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] cursor-pointer group ${isCollapsed ? 'justify-center w-full p-2.5' : 'justify-between w-full p-2.5'}`}>
              <div className={`flex  items-center gap-3 ${currentPath === '/users' ? 'text-primary' : 'group-hover:text-gray-200'}`}>
                <Users size={18} className="flex-shrink-0" />
                {!isCollapsed && <span className="whitespace-nowrap font-medium">Users</span>}
              </div>
              {!isCollapsed && <span className="text-[11px] font-medium bg-[#1A1A1A] text-gray-400 px-2 py-0.5 rounded-full">12.4k</span>}
            </Link>

            <Link to="/verification" className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] cursor-pointer group ${isCollapsed ? 'justify-center w-full p-2.5' : 'justify-between w-full p-2.5'}`}>
              <div className={`flex items-center gap-3 ${currentPath === '/verification' ? 'text-primary' : 'group-hover:text-gray-200'}`}>
                <ShieldCheck size={18} className="flex-shrink-0 group-hover:text-gray-200" />
                {!isCollapsed && <span className="whitespace-nowrap font-medium">Verification</span>}
              </div>
              {!isCollapsed && <span className="text-[11px] font-medium bg-[#1A1A1A] text-gray-400 px-2 py-0.5 rounded-full">23</span>}
            </Link>

            <Link to="/disputes" className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] cursor-pointer group ${isCollapsed ? 'justify-center w-full p-2.5 relative' : 'justify-between w-full p-2.5'}`}>
              <div className={`flex items-center gap-3 ${currentPath === '/disputes' ? 'text-primary' : 'group-hover:text-gray-200'}`}>
                <AlertTriangle size={18} className="flex-shrink-0 group-hover:text-gray-200" />
                {!isCollapsed && <span className="whitespace-nowrap font-medium">Disputes</span>}
              </div>
              {!isCollapsed && <span className="text-[11px] font-medium bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full">7</span>}
              {isCollapsed && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>}
            </Link>

            <button className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'}`}>
              <Scale size={18} className="flex-shrink-0 group-hover:text-gray-200" />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Compliance</span>}
            </button>
          </div>
        </div>

        {/* FINANCE */}
        <div>
          {!isCollapsed && <p className="text-[11px] font-semibold tracking-wider text-gray-500 mb-3 px-1 uppercase">Finance</p>}
          {isCollapsed && <div className="border-t border-gray-800 my-4" />}

          <div className="space-y-1">
            <button className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'}`}>
              <CreditCard size={18} className="flex-shrink-0 group-hover:text-gray-200" />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Revenue</span>}
            </button>

            <button className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'}`}>
              <Megaphone size={18} className="flex-shrink-0 group-hover:text-gray-200" />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Promotions</span>}
            </button>
          </div>
        </div>

        {/* ACCOUNT */}
        <div>
          {!isCollapsed && <p className="text-[11px] font-semibold tracking-wider text-gray-500 mb-3 px-1 uppercase">Account</p>}
          {isCollapsed && <div className="border-t border-gray-800 my-4" />}

          <div className="space-y-1">
            <button className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'}`}>
              <Settings size={18} className="flex-shrink-0 group-hover:text-gray-200" />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Settings</span>}
            </button>

            <button className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-[#1A1A1A] group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'}`}>
              <HelpCircle size={18} className="flex-shrink-0 group-hover:text-gray-200" />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Support</span>}
            </button>

            <button onClick={() => setIsLogoutModalOpen(true)} className={`flex text-[13px] items-center rounded-lg transition-all duration-200 hover:text-red-400 hover:bg-red-500/10 text-gray-400 group ${isCollapsed ? 'justify-center w-full p-2.5' : 'gap-3 w-full p-2.5'}`}>
              <LogOut size={18} className="flex-shrink-0 group-hover:text-red-400" />
              {!isCollapsed && <span className="whitespace-nowrap font-medium">Log Out</span>}
            </button>
          </div>
        </div>

      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl p-6 w-full max-w-[360px] shadow-xl border border-gray-100 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4">
              <LogOut size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Log Out</h3>
            <p className="text-[13px] text-gray-500 mb-6">Are you sure you want to log out of your administrator account?</p>
            <div className="flex gap-3 w-full">
              <button 
                onClick={() => setIsLogoutModalOpen(false)} 
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-[13px] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleLogout} 
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-medium text-[13px] hover:bg-red-600 shadow-[0_4px_14px_0_rgba(239,68,68,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(239,68,68,0.23)] hover:-translate-y-[1px]"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;