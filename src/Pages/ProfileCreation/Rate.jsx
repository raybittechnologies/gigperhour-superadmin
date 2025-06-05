import NavBarr from "../../components/NavBarr";
import { useState } from "react";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkMode.jsx";
const Rate = () => {
  const { darkMode } = useDarkMode();
  const [progress] = useState(90);
  const navigate = useNavigate();
  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr />
      <div className="md:px-[60px] px-[20px] pt-3 pb-3 relative z-[20]">
        <div className="flex flex-row justify-between sm:items-center items-start mb-4 gap-2">
          <h3 className="text-[19px] sm:text-[24px] font-[400] font-inter">
            Now, let’s set your hourly rate.
          </h3>
          <span className="text-sm font-[500] sm:mt-0 mt-2">9/10</span>
        </div>

        <p className="mb-6 w-full md:w-[690px] sm:text-sm text-xs">
          Clients will see this rate on your profile and in search results once
          your profile is live. You can adjust it anytime when submitting a
          proposal.
        </p>

        {/* Hourly Rate */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-[18px] font-inter font-medium">Hourly rate</h4>
            <p className="sm:text-[15px]  text-sm mt-2 font-[400] font-inter">
              Total amount the client will see
            </p>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className={`p-2 w-[140px] rounded-[3px] bg-transparent ${
                darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
              } border`}
            />
            <span className="ml-2">/hr</span>
          </div>
        </div>

        {/* Service Fee */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-[18px] font-inter font-medium">Service fee</h4>
            <p className="sm:text-[15px]  text-sm mt-2 font-[400] font-inter">
              This helps us to run the platform and provide services like
              Payment protection & Customer Support
            </p>
          </div>
          <div className="flex items-center">
            <span
              className={`text-sm px-3 py-2 rounded-[3px] w-[140px] text-center ${
                darkMode ? "bg-[#E9E9E9] text-black" : "bg-[#555555] text-white"
              }`}
            >
              - $0.50
            </span>
            <span className="ml-2">/hr</span>
          </div>
        </div>

        {/* You Will Get */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-[18px] font-inter font-medium">You will get</h4>
            <p className="sm:text-[15px]  text-sm mt-2 font-[400] font-inter">
              The estimated amount you’ll receive after service fees
            </p>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className={`p-2 w-[140px] rounded-[3px] bg-transparent ${
                darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
              } border`}
            />
            <span className="ml-2">/hr</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-[60px]">
          <div
            className="h-1 w-full rounded-full relative"
            style={{ background: darkMode ? "#E9E9E9" : "#555555" }}
          >
            <div
              className="h-full bg-[#F99F39] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <BottomNav
          onBack={() => navigate("/bio")}
          onNext={() => navigate("/picUpload")}
        />
      </div>
    </div>
  );
};

export default Rate;
