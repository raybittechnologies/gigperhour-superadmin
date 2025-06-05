import { useState } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/SettingSidebar";
import MobileSidebar from "../../components/ClientScreen/MobileSetting";
import { IoIosArrowDown } from "react-icons/io";
export default function Support() {
  const [darkMode, setDarkMode] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    "How do I create an account?",
    "How do I reset my password?",
    "How do I post a job?",
    "How do I contact support?",
    "How do I hire a freelancer?",
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Mobile Sidebar - shown only below 768px */}
        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        <div className="md:ml-[220px] ml-[70px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h3 className="text-2xl font-[400]">Support</h3>
            {/* FAQ Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mb-16">
              {/* Left side: Heading */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 [@media(max-width:440px)]:text-[17px]">
                  Frequently{" "}
                  <br className="[@media(max-width:440px)]:hidden block" />{" "}
                  Asked Questions
                </h1>
              </div>

              {/* Right side: FAQs */}
              <div className="space-y-2">
                {faqs.map((question, index) => (
                  <div
                    key={index}
                    className="border-t border-t-[#555555] overflow-hidden"
                  >
                    <button
                      className={`w-full flex justify-between items-center px-4 py-3 font-medium text-left [@media(max-width:440px)]:text-[12px] ${
                        darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                      }`}
                      onClick={() => toggle(index)}
                    >
                      <span className="break-words pr-2">{question}</span>
                      <span
                        className={`transition-transform duration-200 shrink-0 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <IoIosArrowDown size={20} />
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-4 py-3 text-sm">
                        This is the answer to: <strong>{question}</strong>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">Contact Support</h2>
              <p className="mb-6 font-medium">
                If you have any issues, feel free to reach out to our support
                team.
              </p>

              <form className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className={`rounded-md sm:px-4 px-2 py-2 col-span-1 ${
                    darkMode
                      ? "bg-[#E9E9E9] text-black placeholder-black"
                      : "bg-[#555555] text-white placeholder-white"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className={`rounded-md sm:px-4 px-2 py-2 col-span-1 ${
                    darkMode
                      ? "bg-[#E9E9E9] text-black placeholder-black"
                      : "bg-[#555555] text-white placeholder-white"
                  }`}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={`rounded-md sm:px-4 px-2 py-2 col-span-2 ${
                    darkMode
                      ? "bg-[#E9E9E9] text-black placeholder-black"
                      : "bg-[#555555] text-white placeholder-white"
                  }`}
                />
                <textarea
                  rows="5"
                  placeholder="Message"
                  className={`rounded-md sm:px-4 px-2 py-2 col-span-2 ${
                    darkMode
                      ? "bg-[#E9E9E9] text-black placeholder-black"
                      : "bg-[#555555] text-white placeholder-white"
                  }`}
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#E66D3D] text-white py-2 rounded-md col-span-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
