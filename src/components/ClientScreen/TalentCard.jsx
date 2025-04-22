import { useState } from "react";
import MessageModal from "./MessageModal";
const TalentCard = ({ talent, variant = "default" }) => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    setMessage("");
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-[5px] shadow-md p-4 ">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <img
              src={talent.image}
              alt={talent.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[15px] font-[400] text-gray-900">
                {talent.name}
              </h3>
              <div className="flex gap-3 items-center justify-between">
                <p className="text-xs text-gray-600">{talent.location}</p>
                <button className="flex items-center gap-1 px-2 py-[2px] text-xs font-[300] border border-[#007AFF] text-[#007AFF] rounded-full">
                  <img
                    src="src/assets/UserDashboard/zap.svg"
                    alt="zap"
                    className="w-2 h-3"
                  />
                  Active now
                </button>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 text-xl">
            <img
              src={
                variant === "saved"
                  ? "src/assets/clientscreen/favourite-red.svg" // saved version
                  : "src/assets/clientscreen/favourite.svg" // default
              }
              alt="Favorite"
            />
          </button>
        </div>

        <div className="grid grid-cols-3 text-center text-xs text-gray-600 border-b border-[#333333] pb-2 mb-2">
          <div>
            <div className="text-sm text-gray-800">{talent.successRate}</div>
            <div>Job Success</div>
          </div>
          <div>
            <div className="text-sm text-gray-800">{talent.jobs}</div>
            <div>Jobs</div>
          </div>
          <div>
            <div className="text-sm text-gray-800">{talent.rate}</div>
            <div>Rate</div>
          </div>
        </div>

        <p className="text-xs text-[#E66D3D] mb-2 font-medium leading-snug">
          {talent.title}
        </p>

        {/* Skills or message */}
        {variant === "saved" ? (
          <p className="text-[10px] mt-2 mb-3 text-[#333333]  ">
            {talent.message}
          </p>
        ) : (
          <div className="flex flex-wrap gap-2 text-xs mb-3 mt-2">
            {talent.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded bg-[#D9D9D9] text-[#555555]"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <button
            className="bg-[#E66D3D] text-white text-sm py-2 rounded-md font-medium"
            onClick={() => setShowModal(true)}
          >
            Message
          </button>
          <button className="border border-[#E66D3D] text-black text-sm py-2 rounded-md font-medium">
            Invite to Job
          </button>
        </div>
      </div>

      {/* Inline Modal */}
      {showModal && (
        <MessageModal
          talent={talent}
          message={message}
          setMessage={setMessage}
          onClose={() => setShowModal(false)}
          onSend={handleSend}
        />
      )}
    </>
  );
};

export default TalentCard;
