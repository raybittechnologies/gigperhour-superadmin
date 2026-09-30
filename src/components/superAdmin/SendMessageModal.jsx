import React, { useState } from 'react';
import { X, Mail, Send } from 'lucide-react';

const SendMessageModal = ({ user, onClose }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!user) return null;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 1)
      .toUpperCase();
  };

  const handleTemplateClick = (template) => {
    switch (template) {
      case 'Welcome':
        setSubject('Welcome to Elevance');
        setMessage('Hi ' + user.name.split(' ')[0] + ',\n\nWelcome to Elevance! We are thrilled to have you on board. If you have any questions, feel free to reply to this message.\n\nBest regards,\nThe Elevance Team');
        break;
      case 'Verification':
        setSubject('Action Required: Verify Account');
        setMessage('Hi ' + user.name.split(' ')[0] + ',\n\nPlease verify your account by providing the requested documents. Let us know if you need any assistance.\n\nBest regards,\nThe Elevance Team');
        break;
      case 'Warning':
        setSubject('Account Warning');
        setMessage('Hi ' + user.name.split(' ')[0] + ',\n\nWe noticed some unusual activity on your account. Please review our terms of service and ensure compliance.\n\nBest regards,\nThe Elevance Team');
        break;
      default:
        break;
    }
  };

  const currentUserId = `#0000${user.id || '1'}`;

  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-[2px] flex items-center justify-center z-[110] p-4">
      <div
        className="bg-white w-full max-w-[560px]  rounded-[16px] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
          >
            <X className="w-[18px] h-[18px]" strokeWidth={2} />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-[36px] h-[36px] rounded-[12px] bg-[#EEF2FF] text-[#6366F1] flex items-center justify-center flex-shrink-0">
              <Mail className="w-[17px] h-[17px]" />
            </div>
            <div>
              <h2 className="text-[16px] font-[600] text-[#0F172A]">Send Message</h2>
              <p className="text-[12px] text-[#64748B] mt-0.5">
                {user.name} • {user.email}
              </p>
            </div>
          </div>

          {/* User Info Bar */}
          <div className="bg-[#F8FAFC] rounded-[10px] p-3 flex items-center gap-3 mb-5 border border-[#F1F5F9]">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
            ) : (
              <div
                className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[#475569] text-[12px] font-[500] border-[1px] border-[#E2E8F0] bg-white"
              >
                {getInitials(user.name)}
              </div>
            )}
            <div>
              <h3 className="text-[12px] font-[600] text-[#0F172A] leading-tight">{user.name}</h3>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                {user.role} • {currentUserId}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-[12px] font-[500] text-[#475569] mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Message regarding your account"
                className="w-full rounded-[8px] border border-[#E2E8F0] px-3.5 py-2.5 text-[14px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-shadow"
              />
            </div>

            <div>
              <label className="block text-[13px] font-[500] text-[#475569] mb-1.5">
                Message <span className="text-[#EF4444]">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full rounded-[8px] border border-[#E2E8F0] px-3.5 py-2.5 text-[12.5px] text-[#0F172A] placeholder-[#94A3B8] h-[120px] resize-none focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-shadow"
              />
            </div>
          </div>

          {/* Templates */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[11px] text-[#94A3B8] mr-1">Templates:</span>
            {['Welcome', 'Verification', 'Warning'].map((template) => (
              <button
                key={template}
                onClick={() => handleTemplateClick(template)}
                className="px-3 py-1.5 rounded-[6px] border border-[#E2E8F0] text-[10.5px] font-[500] text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors bg-white"
              >
                {template}
              </button>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 mt-3 pt-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-[8px] border border-[#E2E8F0] text-[13px] font-[500] text-[#475569] hover:bg-[#F8FAFC] transition-colors bg-white"
            >
              Cancel
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#818CF8] text-white text-[13px] font-[500] hover:bg-[#6366F1] transition-colors shadow-sm">
              <Send className="w-[14px] h-[14px]" /> Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessageModal;
