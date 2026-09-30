import React, { useState } from 'react';
import { X, Mail, ShieldCheck, MapPin, Calendar, Briefcase, Star, StarHalf, Ban, CheckCircle2 } from 'lucide-react';
import SendMessageModal from './SendMessageModal';

const UserProfileModal = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  if (!user) return null;

  // Mock data for fields not in user object
  const mockData = {
    location: 'United States',
    jobsDone: 18,
    successRate: '72%',
    bio: 'Frontend developer. Account suspended for violation of Terms of Service.',
    skills: ['JavaScript', 'React', 'Vue.js', 'CSS'],
    userId: `#0000${user.id}`,
    phone: '+1 (555) 456-7890',
    responseTime: 'N/A',
    lastActive: '2 weeks ago',
    rating: 5,
  };
  const activityData = [
    { action: 'Completed project for TechCorp Inc.', time: '2 hours ago', color: '#E66D3D' },
    { action: 'Submitted proposal for ML Engineer role', time: '5 hours ago', color: '#CBD5E1' },
    { action: 'Profile updated', time: '1 day ago', color: '#CBD5E1' },
    { action: 'Received 5-star review from DataViz Corp', time: '3 days ago', color: '#CBD5E1' },
  ];

  const securityData = {
    account: [
      { title: 'Email Verified', status: user.email },
      { title: 'Phone Verified', status: '+1 (555) 123-4567' },
      { title: 'Identity Verified', status: 'Government ID verified' },
      { title: 'Two-Factor Auth', status: 'Enabled (Authenticator)' },
    ],
    logins: [
      { device: 'Chrome / macOS', details: '192.168.1.xxx · United States', time: 'Today, 10:24 AM' },
      { device: 'Safari / iOS', details: '10.0.0.xxx · United States', time: 'Yesterday, 3:15 PM' },
      { device: 'Chrome / Windows', details: '172.16.0.xxx · United States', time: 'Mar 1, 2026' },
    ]
  };
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 1)
      .toUpperCase();
  };

  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-[2px] flex items-center justify-end pl-8 z-[100] ">
      <div
        className="bg-white w-full max-w-[580px]  shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] flex flex-col max-h-[97vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Section */}
        <div className="p-7 pb-0 relative bg-white flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
          >
            <X className="w-[18px] h-[18px]" strokeWidth={2} />
          </button>

          <div className="flex gap-5 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-[52px] h-[52px] rounded-full object-cover border-[3px] border-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                />
              ) : (
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-[#475569] text-[24px] font-[500] border-[1px] border-[#E2E8F0] bg-[#F1F5F9]"
                >
                  {getInitials(user.name)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 pt-1">
              <div className="flex items-center gap-3 mb-1.5">
                <h2 className="text-[18px] font-[600] text-[#0F172A] leading-none">
                  {user.name}
                </h2>
                {user.status === 'Suspended' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-[500] bg-[#F1F5F9] text-[#64748B] leading-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#64748B]"></div>
                    Suspended
                  </span>
                )}
                {user.status === 'Verified' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-[500] bg-[#22C55E14] text-[#22C55E] leading-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></div>
                    Verified
                  </span>
                )}
                {user.status === 'Pending' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-[500] bg-[#F59E0B14] text-[#F59E0B] leading-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B14]"></div>
                    Pending
                  </span>
                )}
                {user.status === 'Flagged' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-[500] bg-[#FEE2E2] text-[#EF4444] leading-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></div>
                    Flagged
                  </span>
                )}
              </div>
              <p className="text-[#64748B] text-[12px] mb-2">{user.email}</p>
              <div className="flex items-center gap-4 text-[11px] text-[#94A3B8]">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-[10px] h-[10px]" /> {user.role}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-[10px] h-[10px]" /> {mockData.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-[10px] h-[10px]" /> Joined {user.joined}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-7">
            <button
              onClick={() => setIsMessageModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#E2E8F0] text-[#475569] text-[11.5px] font-[500] hover:bg-[#F8FAFC] transition-colors"
            >
              <Mail className="w-[12px] h-[12px]" /> Send Message
            </button>
            {user.status === 'Suspended' && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#BBF7D0] text-[#22C55E] text-[11.5px] font-[500] hover:bg-[#F0FDF4] transition-colors">
                <ShieldCheck className="w-[12px] h-[12px]" /> Reactivate
              </button>
            )}
            {(user.status === 'Flagged' || user.status === 'Pending') && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#BBF7D0] text-[#22C55E] text-[11.5px] font-[500] hover:bg-[#F0FDF4] transition-colors">
                <ShieldCheck className="w-[12px] h-[12px]" /> Verify
              </button>
            )}
            {user.status !== 'Suspended' && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#FEE2E2] text-[#EF4444] text-[11.5px] font-[500] hover:bg-[#FEF2F2] transition-colors">
                <Ban className="w-[12px] h-[12px]" /> Suspend
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-8 mt-8 border-b border-[#F1F5F9]">
            {['Overview', 'Activity', 'Security'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3.5 text-[12.5px] font-[500] relative transition-colors ${activeTab === tab ? 'text-[#E66D3D]' : 'text-[#94A3B8] hover:text-[#0F172A]'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E66D3D]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-7 overflow-y-auto no-scrollbar flex-1 bg-white">
          {activeTab === 'Overview' && (
            <div className="flex flex-col gap-7">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#F8FAFC] rounded-[12px] p-5 flex flex-col">
                  <span className="text-[10.5px] font-[500] text-[#94A3B8] uppercase tracking-wider mb-2.5">Earnings</span>
                  <span className="text-[16px] font-[700] text-[#0F172A] tracking-tight">${user.earnings.toLocaleString()}</span>
                </div>
                <div className="bg-[#F8FAFC] rounded-[12px] p-5 flex flex-col">
                  <span className="text-[10.5px] font-[500] text-[#94A3B8] uppercase tracking-wider mb-2.5">Jobs Done</span>
                  <span className="text-[16px] font-[700] text-[#0F172A] tracking-tight">{mockData.jobsDone}</span>
                </div>
                <div className="bg-[#F8FAFC] rounded-[12px] p-5 flex flex-col">
                  <span className="text-[10.5px] font-[500] text-[#94A3B8] uppercase tracking-wider mb-2.5">Success Rate</span>
                  <span className="text-[16px] font-[700] text-[#F59E0B] tracking-tight">{mockData.successRate}</span>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-[13px] font-[600] text-[#0F172A] mb-2">Bio</h3>
                <p className="text-[13px] text-[#475569] leading-[1.6]">
                  {mockData.bio}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-[13px] font-[600] text-[#0F172A] mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2.5">
                  {mockData.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 bg-[#F1F5F9] text-[#475569] rounded-[8px] text-[12px] font-[500]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Account Details Box */}
              <div className="border border-[#E2E8F0] rounded-[16px] p-4">
                <h3 className="text-[13px] font-[600] text-[#0F172A] mb-5">Account Details</h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-6">
                  <div>
                    <span className="block text-[11px] font-[600] text-[#94A3B8] uppercase tracking-wider mb-1.5">User ID</span>
                    <span className="text-[13px] font-[500] text-[#0F172A]">{mockData.userId}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-[600] text-[#94A3B8] uppercase tracking-wider mb-1.5">Role</span>
                    <span className="text-[13px] font-[500] text-[#0F172A]">{user.role}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-[600] text-[#94A3B8] uppercase tracking-wider mb-1.5">Country</span>
                    <span className="text-[13px] font-[500] text-[#0F172A]">{mockData.location}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-[600] text-[#94A3B8] uppercase tracking-wider mb-1.5">Phone</span>
                    <span className="text-[13px] font-[500] text-[#0F172A]">{mockData.phone}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-[600] text-[#94A3B8] uppercase tracking-wider mb-1.5">Response Time</span>
                    <span className="text-[13px] font-[500] text-[#0F172A]">{mockData.responseTime}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-[600] text-[#94A3B8] uppercase tracking-wider mb-1.5">Last Active</span>
                    <span className="text-[13px] font-[500] text-[#0F172A]">{mockData.lastActive}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-[600] text-[#94A3B8] uppercase tracking-wider mb-1.5">Rating</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((starIndex) => {
                          const isFull = mockData.rating >= starIndex;
                          const isPartial = !isFull && mockData.rating > starIndex - 1;

                          if (isFull) {
                            return <Star key={`star-${starIndex}`} className="w-[12px] h-[12px] fill-[#F59E0B] text-[#F59E0B]" />;
                          }
                          if (isPartial) {
                            const partialPercentage = Math.round((mockData.rating % 1) * 100);
                            return (
                              <div key={`star-${starIndex}`} className="relative w-[12px] h-[12px]">
                                <Star className="w-[12px] h-[12px] text-[#E2E8F0] fill-[#E2E8F0] absolute inset-0" />
                                <div className="absolute inset-0 overflow-hidden" style={{ width: `${partialPercentage}%` }}>
                                  <Star className="w-[12px] h-[12px] text-[#F59E0B] fill-[#F59E0B]" />
                                </div>
                              </div>
                            );
                          }
                          return <Star key={`star-${starIndex}`} className="w-[12px] h-[12px] text-[#E2E8F0] fill-[#E2E8F0]" />;
                        })}
                      </div>
                      <span className="text-[11.5px] text-[#64748B] ml-1 pt-0.5">{mockData.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Activity' && (
            <div className="flex flex-col pl-2 pt-2">
              <div className="relative border-l-2 border-[#F1F5F9] ml-2.5 space-y-8 pb-4">
                {activityData.map((item, index) => (
                  <div key={index} className="relative pl-7">
                    <div
                      className="absolute left-[-6px] top-[6px] w-[10px] h-[10px] rounded-full ring-[4px] ring-white"
                      style={{ backgroundColor: item.color }}
                    />
                    <h4 className="text-[13.5px] font-[500] text-[#0F172A] mb-1">{item.action}</h4>
                    <p className="text-[12.5px] text-[#94A3B8]">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Security' && (
            <div className="flex flex-col gap-6">
              {/* Account Security Card */}
              <div className="border border-[#E2E8F0] rounded-[12px] overflow-hidden">
                <div className="p-5 pb-2">
                  <h3 className="text-[13.5px] font-[600] text-[#0F172A]">Account Security</h3>
                </div>
                <div className="flex flex-col">
                  {securityData.account.map((item, index) => (
                    <div key={index} className={`flex items-center justify-between p-5 py-4 ${index !== securityData.account.length - 1 ? 'border-b border-[#F1F5F9]' : ''}`}>
                      <div className="flex flex-col gap-0.5">
                        <h4 className="text-[13px] font-[600] text-[#0F172A]">{item.title}</h4>
                        <p className="text-[12.5px] text-[#94A3B8]">{item.status}</p>
                      </div>
                      <div className="text-[#22C55E] bg-[#22C55E1A] rounded-full w-[20px] h-[20px] flex items-center justify-center">
                        <CheckCircle2 className="w-[14px] h-[14px]" strokeWidth={1.6} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Login History Card */}
              <div className="border border-[#E2E8F0] rounded-[12px] overflow-hidden">
                <div className="p-5 pb-2">
                  <h3 className="text-[13.5px] font-[600] text-[#0F172A]">Login History</h3>
                </div>
                <div className="flex flex-col">
                  {securityData.logins.map((item, index) => (
                    <div key={index} className={`flex items-start justify-between p-5 py-4 ${index !== securityData.logins.length - 1 ? 'border-b border-[#F1F5F9]' : ''}`}>
                      <div className="flex flex-col gap-0.5">
                        <h4 className="text-[13px] font-[600] text-[#0F172A]">{item.device}</h4>
                        <p className="text-[12.5px] text-[#94A3B8]">{item.details}</p>
                      </div>
                      <span className="text-[12.5px] text-[#94A3B8] mt-0.5">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isMessageModalOpen && (
        <SendMessageModal
          user={user}
          onClose={() => setIsMessageModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfileModal;
