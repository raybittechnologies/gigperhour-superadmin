// MessageModal.jsx
import React from "react";

const MessageModal = ({ talent, message, setMessage, onClose, onSend }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="bg-white rounded-md w-full max-w-lg p-6 shadow-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4">
          <img
            src="src/assets/UserDashboard/cancel-02.svg"
            alt="Close"
            className="w-7 h-7"
          />
        </button>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={talent.image}
            alt={talent.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg">{talent.name}</h2>
            <p className="text-sm text-[#555555]">{talent.title}</p>
          </div>
        </div>

        {/* Message Box */}
        <label className="block text-sm mb-1">Your message</label>
        <textarea
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-[#555555] rounded-md p-3 text-sm resize-none focus:outline-none"
        />

        {/* Action Buttons */}
        <div className="flex justify-end gap-14 mt-4">
          <button onClick={onClose} className="text-sm font-medium text-black">
            Cancel
          </button>
          <button
            onClick={onSend}
            className="bg-[#E66D3D] text-white text-sm font-medium px-7 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
