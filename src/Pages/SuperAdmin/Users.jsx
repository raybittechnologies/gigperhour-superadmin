import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, MoreHorizontal, ChevronLeft, ChevronRight, Eye, MessageSquare, ShieldOff, ShieldCheck } from 'lucide-react';
import UserProfileModal from '../../components/superAdmin/UserProfileModal';
import SendMessageModal from '../../components/superAdmin/SendMessageModal';

const USERS_DATA = [
  {
    id: 1,
    name: 'Maria Santos',
    email: 'maria@example.com',
    avatar: 'https://i.pravatar.cc/150?img=47',
    role: 'Freelancer',
    status: 'Verified',
    joined: 'Oct 12, 2024',
    earnings: 42800,
  },
  {
    id: 2,
    name: 'James Chen',
    email: 'james@example.com',
    avatar: 'https://i.pravatar.cc/150?img=11',
    role: 'Freelancer',
    status: 'Verified',
    joined: 'Nov 3, 2024',
    earnings: 28400,
  },
  {
    id: 3,
    name: 'Aisha Patel',
    email: 'aisha@example.com',
    avatar: 'https://i.pravatar.cc/150?img=32',
    role: 'Freelancer',
    status: 'Verified',
    joined: 'Sep 22, 2024',
    earnings: 56200,
  },
  {
    id: 4,
    name: 'Robert Miller',
    email: 'robert@techcorp.com',
    avatar: null,
    role: 'Client',
    status: 'Verified',
    joined: 'Aug 15, 2024',
    earnings: 0,
  },
  {
    id: 5,
    name: 'Sofia Rodriguez',
    email: 'sofia@design.co',
    avatar: null,
    role: 'Freelancer',
    status: 'Pending',
    joined: 'Feb 20, 2026',
    earnings: 0,
  },
  {
    id: 6,
    name: 'Mike Thompson',
    email: 'mike@spam.com',
    avatar: null,
    role: 'Freelancer',
    status: 'Flagged',
    joined: 'Feb 18, 2026',
    earnings: 0,
  },
  {
    id: 7,
    name: 'Anna Liu',
    email: 'anna@fake.com',
    avatar: null,
    role: 'Client',
    status: 'Flagged',
    joined: 'Feb 15, 2026',
    earnings: 0,
  },
  {
    id: 8,
    name: 'David Kim',
    email: 'david@corp.io',
    avatar: null,
    role: 'Client',
    status: 'Verified',
    joined: 'Jan 8, 2025',
    earnings: 0,
  },
  {
    id: 9,
    name: 'Elena Vasquez',
    email: 'elena@creative.net',
    avatar: 'https://i.pravatar.cc/150?img=45',
    role: 'Freelancer',
    status: 'Verified',
    joined: 'Mar 5, 2025',
    earnings: 18900,
  },
  {
    id: 10,
    name: 'Tom Bradley',
    email: 'tom@enterprise.com',
    avatar: null,
    role: 'Client',
    status: 'Suspended',
    joined: 'Dec 1, 2024',
    earnings: 0,
  },
  {
    id: 11,
    name: 'Priya Sharma',
    email: 'priya@devhub.io',
    avatar: 'https://i.pravatar.cc/150?img=26',
    role: 'Freelancer',
    status: 'Verified',
    joined: 'Jul 19, 2024',
    earnings: 34600,
  },
  {
    id: 12,
    name: 'Carlos Mendez',
    email: 'carlos@build.co',
    avatar: null,
    role: 'Client',
    status: 'Pending',
    joined: 'Mar 10, 2026',
    earnings: 0,
  },
  {
    id: 13,
    name: 'Carlos Mendez',
    email: 'carlos@build.co',
    avatar: null,
    role: 'Client',
    status: 'Pending',
    joined: 'Mar 10, 2026',
    earnings: 0,
  },
  {
    id: 14,
    name: 'Carlos Mendez',
    email: 'carlos@build.co',
    avatar: null,
    role: 'Client',
    status: 'Pending',
    joined: 'Mar 10, 2026',
    earnings: 0,
  },
  {
    id: 15,
    name: 'Carlhos Mendez',
    email: 'carlos@build.co',
    avatar: null,
    role: 'Client',
    status: 'Pending',
    joined: 'Mar 10, 2026',
    earnings: 0,
  },
];

const ITEMS_PER_PAGE = 8;

const getStatusStyle = (status) => {
  switch (status) {
    case 'Verified':
      return { color: '#22C55E', bg: '#22C55E14' };
    case 'Pending':
      return { color: '#F59E0B', bg: '#F59E0B14' };
    case 'Flagged':
      return { color: '#EF4444', bg: '#FEE2E2' };
    case 'Suspended':
      return { color: '#64748B', bg: '#64748B14' };
    default:
      return { color: '#64748B', bg: '#F1F5F9' };
  }
};

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 1)
    .toUpperCase();
};

const INITIAL_COLORS = [
  '#6366F1', '#E66D3D', '#8B5CF6', '#0EA5E9',
  '#10B981', '#F59E0B', '#EC4899', '#14B8A6',
];

const getInitialBgColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return INITIAL_COLORS[Math.abs(hash) % INITIAL_COLORS.length];
};

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRole, setActiveRole] = useState('All Roles');
  const [activeStatus, setActiveStatus] = useState('All Status');
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedUserForModal, setSelectedUserForModal] = useState(null);
  const [selectedUserForMessage, setSelectedUserForMessage] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0, isDropup: false });
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };
    const handleScroll = (e) => {
      if (openMenuId) setOpenMenuId(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [openMenuId]);

  const handleActionClick = (e, userId) => {
    e.stopPropagation();
    if (openMenuId === userId) {
      setOpenMenuId(null);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const isDropup = window.innerHeight - rect.bottom < 220; // 220px threshold for bottom space
      setMenuPosition({
        top: isDropup ? rect.top - 8 : rect.bottom + 8,
        right: window.innerWidth - rect.right,
        isDropup
      });
      setOpenMenuId(userId);
    }
  };

  const roles = ['All Roles', 'Freelancer', 'Client'];
  const statuses = ['All Status', 'Verified', 'Pending', 'Flagged', 'Suspended'];

  const filteredUsers = useMemo(() => {
    return USERS_DATA.filter((user) => {
      const matchesSearch =
        searchQuery === '' ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = activeRole === 'All Roles' || user.role === activeRole;
      const matchesStatus = activeStatus === 'All Status' || user.status === activeStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [searchQuery, activeRole, activeStatus]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleRoleChange = (role) => {
    setActiveRole(role);
    setCurrentPage(1);
  };

  const handleStatusChange = (status) => {
    setActiveStatus(status);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-[22px] font-[700] text-[#0F172A] leading-tight tracking-[-0.01em]">
          User Management
        </h1>
        <p className="text-[13px] text-[#94A3B8] mt-1 tracking-wide">
          Manage all platform users — {filteredUsers.length} total
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-5">
        {/* Search */}
        <div className="relative w-full md:w-[280px]">
          <Search className="absolute left-3.5 top-1/2  -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search by name or emails..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full h-10 pl-10 pr-4 border border-[#E2E8F0] rounded-[12px] text-[13px] text-[#0A0A0A80] placeholder:text-[#94A3B8] outline-none focus:border-[#E66D3D] transition-colors bg-transparent"
          />
        </div>

        {/* Role Filter */}
        <div className="flex items-center border border-[#E2E8F0] rounded-[12px] overflow-hidden bg-transparent">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleChange(role)}
              className={`h-10 px-4 text-[13px] font-medium transition-colors ${activeRole === role
                ? 'bg-[#E66D3D0F] text-primary'
                : 'text-[#64748B] '
                }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center border border-[#E2E8F0] rounded-[12px] overflow-hidden bg-transparent">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`h-10 px-4 text-[13px] font-medium transition-colors ${activeStatus === status
                ? 'bg-[#E66D3D0F] text-primary'
                : 'text-[#64748B] '
                }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-[16px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="w-full overflow-x-auto border-b border-[#F1F5F9] mb-[1px]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead >
              <tr className="border-b border-[#E2E8F0] !bg-[#f3f4f6]">
                <th className="py-4 pl-6 pr-4 text-[11px] font-[500] text-[#94A3B8] tracking-widest uppercase w-[28%] !bg-transparent">
                  User
                </th>
                <th className="py-4 px-4 text-[11px] font-[500] text-[#94A3B8] tracking-widest uppercase w-[15%]">
                  Role
                </th>
                <th className="py-4 px-4 text-[11px] font-[500] text-[#94A3B8] tracking-widest uppercase w-[15%]">
                  Status
                </th>
                <th className="py-4 px-4 text-[11px] font-[500] text-[#94A3B8] tracking-widest uppercase w-[18%]">
                  Joined
                </th>
                <th className="py-4 px-4 text-[11px] font-[500] text-[#94A3B8] tracking-widest uppercase w-[18%]">
                  Earnings
                </th>
                <th className="py-4 pr-6 text-[11px] font-[500] text-[#94A3B8] tracking-widest uppercase w-[6%]"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user, index) => {
                const statusStyle = getStatusStyle(user.status);
                return (
                  <tr
                    key={user.id}
                    className={`group hover:bg-[#FAFBFC] transition-colors ${index !== paginatedUsers.length - 1 ? 'border-b border-[#F1F5F9]' : ''
                      }`}
                  >
                    {/* User */}
                    <td className="py-4 pl-6 pr-4">
                      <div className="flex items-center gap-3">
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-[36px] h-[36px] rounded-full object-cover"
                          />
                        ) : (
                          <div
                            className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[14px] font-[600]"
                            style={{ backgroundColor: getInitialBgColor(user.name) }}
                          >
                            {getInitials(user.name)}
                          </div>
                        )}
                        <div>
                          <p className="text-[13px] font-[500] text-[#0F172A] mb-0.5">
                            {user.name}
                          </p>
                          <p className="text-[11px] text-[#94A3B8]">{user.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-4 px-4 text-[12px] text-[#475569]">{user.role}</td>

                    {/* Status */}
                    <td className="py-4 px-4">
                      <div
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-[500]"
                        style={{ color: statusStyle.color, backgroundColor: statusStyle.bg }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: statusStyle.color }}
                        ></div>
                        {user.status}
                      </div>
                    </td>

                    {/* Joined */}
                    <td className="py-4 px-4 text-[12px] text-[#475569]">{user.joined}</td>

                    {/* Earnings */}
                    <td className="py-4 px-4 text-[13px] font-[500] text-[#0F172A]">
                      ${user.earnings.toLocaleString()}
                    </td>

                    {/* Actions */}
                    <td className="py-4 pr-6">
                      <div ref={openMenuId === user.id ? menuRef : null}>
                        <button
                          onClick={(e) => handleActionClick(e, user.id)}
                          className="text-[#94A3B8] hover:text-[#0F172A] transition-colors p-1"
                        >
                          <MoreHorizontal className="w-[18px] h-[18px]" strokeWidth={2.5} />
                        </button>

                        {openMenuId === user.id && (
                          <div
                            className={`fixed w-[180px] bg-white rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-[#E2E8F0] py-1.5 z-[9999] ${menuPosition.isDropup ? '-translate-y-full origin-bottom' : 'origin-top'}`}
                            style={{ top: menuPosition.top, right: menuPosition.right }}
                          >
                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                                setSelectedUserForModal(user);
                              }}
                              className="w-full flex items-center gap-2.5 px-4 py-2 text-[13px] text-[#334155] hover:bg-[#F8FAFC] transition-colors"
                            >
                              <Eye className="w-4 h-4 text-[#64748B]" />
                              View Profile
                            </button>
                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                                setSelectedUserForMessage(user);
                              }}
                              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#334155] hover:bg-[#F8FAFC] transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                style={{ color: "#64748B" }}
                              >
                                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <rect width="16" height="12" x="4" y="6" rx="2" />
                                  <path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9" />
                                </g>
                              </svg>                              Send Message
                            </button>
                            {user.status === 'Flagged' && (
                              <button
                                onClick={() => setOpenMenuId(null)}
                                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#22C55E] hover:bg-[#F0FDF4] transition-colors"
                              >
                                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                                Verify
                              </button>
                            )}
                            {user.status === 'Suspended' && (
                              <button
                                onClick={() => setOpenMenuId(null)}
                                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#22C55E] hover:bg-[#F0FDF4] transition-colors"
                              >
                                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                                Reactivate
                              </button>
                            )}
                            {user.status !== 'Pending' && user.status !== 'Suspended' && (
                              <button
                                onClick={() => setOpenMenuId(null)}
                                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#EF4444] hover:bg-[#FEF2F2] transition-colors"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 1024 1024" style={{ color: "#EF4444" }}><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884m288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8" /></svg>

                                Suspend
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}

              {paginatedUsers.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-[14px] text-[#94A3B8]">
                    No users found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredUsers.length > 0 && (
          <div className="flex items-center border-t border-[#F1F5F9] justify-between px-6 py-4 ">
            <p className="text-[12px] text-[#94A3B8]">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}-
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredUsers.length)} of{' '}
              {filteredUsers.length}
            </p>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#94A3B8] hover:bg-[#F1F5F9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-[8px] text-[13px] font-medium transition-colors ${currentPage === page
                    ? 'bg-[#E66D3D14] text-primary'
                    : 'text-[#64748B] hover:bg-[#F1F5F9]'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#94A3B8] hover:bg-[#F1F5F9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Profile Modal */}
      <UserProfileModal
        user={selectedUserForModal}
        onClose={() => setSelectedUserForModal(null)}
      />

      {/* Send Message Modal */}
      <SendMessageModal
        user={selectedUserForMessage}
        onClose={() => setSelectedUserForMessage(null)}
      />
    </div>
  );
};

export default Users;