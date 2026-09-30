import { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';
import { getNotifications, markNotificationsRead } from '../../utils/api';

const FALLBACK_NOTIFICATIONS = [
  {
    id: 1,
    title: 'New dispute filed',
    description: 'ShopGlobal Inc. vs Team Alpha — $210K contract',
    time: '5 min ago',
    color: '#E66D3D',
    read: false,
  },
  {
    id: 2,
    title: 'Verification spike',
    description: '23 new freelancer applications in queue',
    time: '12 min ago',
    color: '#818CF8',
    read: false,
  },
  {
    id: 3,
    title: 'Revenue milestone',
    description: 'Platform commission hit $1.24M this month',
    time: '1 hr ago',
    color: '#22C55E',
    read: false,
  },
  {
    id: 4,
    title: 'System audit complete',
    description: 'All services healthy — 99.98% uptime',
    time: '2 hr ago',
    color: '#3B82F6',
    read: false,
  },
];

const NotificationDropdown = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(FALLBACK_NOTIFICATIONS);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef(null);

  // Fetch notifications from backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await getNotifications();
        if (res.data && Array.isArray(res.data.data)) {
          setNotifications(res.data.data);
        }
      } catch (err) {
        // Use fallback notifications if API fails
        console.log('Using fallback notifications');
      }
    };
    fetchNotifications();
  }, []);

  // Update unread count
  useEffect(() => {
    const count = notifications.filter(n => !n.read).length;
    setUnreadCount(count);
  }, [notifications]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAllRead = async () => {
    try {
      await markNotificationsRead();
    } catch (err) {
      // Continue even if API fails
    }
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="relative w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell className="w-[17px] h-[17px] text-[#64748B]" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#EF4444] text-white text-[10px] font-[600] leading-none">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {showNotifications && (
        <div className="absolute right-0 top-[calc(100%+12px)] w-[420px] bg-white rounded-[16px] shadow-[0_16px_48px_-8px_rgba(0,0,0,0.16)] border border-[#E2E8F0] z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#F8FAFC]">
            <h3 className="text-[14px] font-[700] text-[#0F172A]">Notifications</h3>
            <button
              onClick={handleMarkAllRead}
              className="text-[12px] font-[500] text-[#E66D3D]  transition-colors"
            >
              Mark all read
            </button>
          </div>

          {/* Notification List */}
          <div className="max-h-[400px] overflow-y-auto no-scrollbar">
            {notifications.length === 0 ? (
              <div className="px-6 py-8 text-center text-[13px] text-[#94A3B8]">
                No notifications
              </div>
            ) : (
              notifications.map((notification, index) => (
                <div
                  key={notification.id || index}
                  className={`flex items-start gap-4 px-6 py-3 hover:bg-[#F8FAFC] transition-colors cursor-pointer ${index !== notifications.length - 1 ? 'border-b border-[#F1F5F9]' : ''
                    } ${!notification.read ? 'bg-white' : 'opacity-60'}`}
                >
                  {/* Dot */}
                  <div
                    className="w-[10px] h-[10px] rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: notification.color || '#94A3B8' }}
                  />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-[500] text-[#0F172A] mb-1">{notification.title}</p>
                    <p className="text-[12px] text-[#64748B] leading-relaxed mb-1.5">{notification.description}</p>
                    <p className="text-[11px] text-[#94A3B8]">{notification.time}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
