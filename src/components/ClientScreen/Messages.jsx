import { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { BsFillSendFill, BsEmojiSmile } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

export default function Messages({ darkMode }) {
  const headerUser = {
    name: "Basit Bashir",
    location: "India",
    time: "11:07 AM",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  const [messages] = useState([
    {
      sender: "Basit Bashir",
      time: "9:50 AM",
      date: "2024-04-10",
      text: "I think I am fit for the job, let's have a quick call to discuss",
      type: "incoming",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      sender: "Zahid Hussain",
      time: "10:00 AM",
      date: "2024-04-10",
      text: "Sure, let’s connect soon.",
      type: "outgoing",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      sender: "Basit Bashir",
      time: "11:00 AM",
      date: "2024-04-11",
      text: "Following up on our call Let's close this today Let's close this today Let's close this todayLet's close this today Let's close this today",
      type: "incoming",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      sender: "Zahid Hussain",
      time: "11:30 AM",
      date: "2024-04-11",
      text: "Let's close this today Let's close this today Let's close this today Let's close this today Let's close this today Let's close this today!",
      type: "outgoing",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
  ]);

  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="flex flex-col h-screen rounded-md border border-[#555555] relative">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#555555]">
        <div className="flex items-center gap-3">
          <img
            src={headerUser.image}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className=" text-sm">{headerUser.name}</h1>
            <p
              className={`text-xs ${
                darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
              }`}
            >
              {headerUser.location} - {headerUser.time}
            </p>
          </div>
        </div>
        <p>Figma Design for Single Screen</p>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 text-xl">
            <img
              src={
                darkMode
                  ? "src/assets/clientscreen/video-01-dark.svg"
                  : "src/assets/clientscreen/video-01.svg"
              }
              alt="Video"
            />
          </button>
          <button className="text-gray-500 text-xl">
            <img
              src={
                darkMode
                  ? "src/assets/clientscreen/mail-at-sign-01-dark.svg"
                  : "src/assets/clientscreen/mail-at-sign-01.svg"
              }
              alt="Mail"
            />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 space-y-1 hide-scrollbar">
        {messages.map((msg, idx) => {
          const showDateSeparator =
            idx === 0 || msg.date !== messages[idx - 1].date;

          const formattedDate = new Date(msg.date).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          });

          return (
            <div key={idx}>
              {/* Date Separator */}
              {showDateSeparator && (
                <div className="flex items-center justify-center my-4 px-6">
                  <hr className="flex-grow border-t border-dashed border-[#333333]" />
                  <span className="mx-4 text-xs whitespace-nowrap">
                    {formattedDate}
                  </span>
                  <hr className="flex-grow border-t border-dashed border-[#333333]" />
                </div>
              )}

              {/* Message */}
              <div
                className={`flex ${
                  msg.type === "incoming" ? "justify-start" : "justify-end"
                }`}
              >
                <div className="flex items-start gap-2 mb-4 max-w-[70%]">
                  {msg.type === "incoming" && (
                    <img
                      src={msg.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div>
                    <div
                      className={`flex items-center gap-2 mb-1 ${
                        msg.type === "outgoing" ? "justify-end" : ""
                      }`}
                    >
                      {msg.type === "outgoing" ? (
                        <>
                          <p className="text-xs text-[#555555] font-[400]">
                            {msg.time}
                          </p>
                          <p className="text-xs font-[400]">{msg.sender}</p>
                        </>
                      ) : (
                        <>
                          <p className="text-xs font-[400]">{msg.sender}</p>
                          <p className="text-xs text-[#555555] font-[400]">
                            {msg.time}
                          </p>
                        </>
                      )}
                    </div>

                    <p className="text-sm">{msg.text}</p>
                  </div>
                  {msg.type === "outgoing" && (
                    <img
                      src={msg.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-20 right-10 z-10">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      {/* Bottom Input */}
      <div className="border-t border-[#555555] p-4 flex items-center gap-4 relative">
        <input
          type="text"
          placeholder="Message Zahid..."
          className="flex-1  px-4 text-sm bg-transparent outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={`text-xl ${
            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
          }`}
        >
          <ImAttachment />
        </button>

        <button
          className={`text-xl ${
            darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
          }`}
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
          <BsEmojiSmile />
        </button>

        <button className="rounded-full text-2xl text-[#E66D3D]">
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
}
