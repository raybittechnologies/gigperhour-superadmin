import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import { Link } from "react-router-dom";

const JobHourly = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [fixedAmount, setFixedAmount] = useState(" $12.00");
  const [tokens] = useState(10);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen relative  ${
        darkMode ? "bg-black text-white" : "text-[#333333] "
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className=" px-4 sm:px-6  pt-3 pb-3 relative z-[20]">
        <h3 className="text-[22px] font-[400]">Submit a Proposal</h3>

        <div className="text-sm flex flex-wrap md:flex-row pl-5 gap-3 lg:gap-8 mt-2 ">
          <p>
            Hourly: <span className="text-[#E66D3D] ">$100</span>
          </p>
          <span className="flex gap-2 items-center">
            <img
              src={
                darkMode
                  ? "src/assets/UserDashboard/developer-dark.svg"
                  : "src/assets/UserDashboard/developer.svg"
              }
              className="w-[15px] h-[15px]"
              alt="Developer"
            />
            Intermediate
          </span>
          <p>
            Tokens required for Proposal:{" "}
            <span className="text-[#E66D3D] ">11</span>
          </p>
          <div className="flex gap-1 flex-wrap">
            <p>
              Available Tokens: <span className="text-[#D84839]">{tokens}</span>
            </p>
            {tokens < 11 && (
              <span className="text-[#D84839]">
                (Insufficient Tokens to submit proposal.)
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between text-sm mt-4 border-b pb-2 pl-5 border-[#555555] gap-2">
          <p>One-Time Project</p>
          <p className="text-[#D84839] flex font-[400] gap-2 items-center">
            <img
              src="src/assets/UserDashboard/flag-02.svg"
              className="w-[18px]"
              alt="Flag"
            />
            Flag inappropriate
          </p>
        </div>

        <div className="pt-2 pl-5 border-b border-[#555555] pb-2">
          <h2 className="text-[16px] font-[600]">Job Details</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="text-[16px] font-[600] mt-1">
              Front End Designer Needed for Engaging Web Projects
            </p>
            <p className="font-[400] text-[16px]">Posted 06-03-2025</p>
          </div>
          <p className="text-[16px] font-[400] mt-2 max-w-full lg:max-w-[606px]">
            I am looking for an individual who can create interactive designs
            for me in Figma. Need clean designs and responsive also.
          </p>
        </div>

        <div className="mt-2 pl-5 border-b border-[#555555] pb-3">
          <h3 className="text-[20px] font-[400]">Required Skills:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Figma",
              "Web Design",
              "Responsive design",
              "Adobe Illustrator",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-[#D9D9D9] text-[#555555] px-2 py-1 rounded-[5px] font-[300] text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2 pl-5 border-b border-[#555555] pb-3">
          <h3 className="text-[20px] font-[400]">Terms</h3>
          <div>
            <div className="mt-1">
              <p className="font-[400]">
                What is the rate you d like to bid for this job?
              </p>
              <div className="flex flex-col lg:flex-row sm:gap-14 mt-4">
                <p>Your Profile Rate: {fixedAmount}</p>
                <p>Client’s budget: $12.00 - $20.00</p>
              </div>

              <div className="flex flex-wrap md:flex-row justify-between gap-4 mt-4 [@media(max-width:530px)]:flex-col">
                <div>
                  <p className="text-sm mb-1 font-[600]">Hourly Rate</p>
                  <input
                    type="text"
                    className="border border-gray-400 rounded text-[#555555] text-right px-4 py-2 mt-2 font-[400] w-full lg:w-[300px] bg-transparent"
                    value={fixedAmount}
                    onChange={(e) => setFixedAmount(e.target.value)}
                  />
                  <span> /hr</span>
                </div>

                <div>
                  <p className="text-sm mb-1 font-[600]">Freelancer Fee</p>
                  <input
                    type="text"
                    className={`rounded px-4 py-2 text-right mt-2 font-[400] w-full lg:w-[300px] ${
                      darkMode
                        ? "bg-white text-black"
                        : "bg-[#555555] text-white"
                    }`}
                    value={fixedAmount}
                    onChange={(e) => setFixedAmount(e.target.value)}
                  />
                </div>

                <div>
                  <p className="text-sm mb-1 font-[600]">You’ll Receive</p>
                  <input
                    type="text"
                    className="border border-gray-400 rounded text-[#555555] text-right px-4 py-2 mt-2 font-[400] w-full lg:w-[300px] bg-transparent"
                    value={fixedAmount}
                    onChange={(e) => setFixedAmount(e.target.value)}
                  />
                  <span> /hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 pl-5 border-b border-[#555555] pb-3">
          <h3 className="text-[20px] font-[400]">Schedule a rate increase</h3>
          <p className="font-[300] ">
            Propose an optional rate increase. If approved by your client, your
            rate will increase automatically over the contract’s lifetime. This
            term can’t be changed once you accept an offer from your client.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <div className="relative w-full md:w-[340px]">
              <label className="block text-[14px] font-[400] mb-1">
                How often do you want a rate increase?
              </label>
              <input
                type="text"
                className="border text-[#555555] border-gray-400 bg-transparent p-2 w-full h-[40px] rounded-[5px] font-[400] text-[14px] focus:border-[#E66D3D] focus:outline-none pr-10"
                placeholder="Select Frequency"
              />
              <img
                src="src/assets/arrow-down-01.svg"
                alt="Dropdown Icon"
                className={`absolute right-3 top-1/2 w-5 h-5 mt-1 cursor-pointer transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <div className="relative w-full md:w-[340px]">
              <label className="block text-[14px] font-[400] mb-1">
                How much of an increase do you want?
              </label>
              <input
                type="text"
                className="border text-[#555555] border-gray-400 bg-transparent p-2 w-full h-[40px] rounded-[5px] font-[400] text-[14px] focus:border-[#E66D3D] focus:outline-none pr-10"
                placeholder="Select Percentage"
              />
              <img
                src="src/assets/arrow-down-01.svg"
                alt="Dropdown Icon"
                className={`absolute right-3 top-1/2 w-5 h-5 mt-1 cursor-pointer transition-transform duration-300 ${
                  isOpenn ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setIsOpenn(!isOpenn)}
              />
            </div>
          </div>
        </div>

        <div className="mt-2 pl-5 border-[#555555] pb-3">
          <h3 className="text-[20px] font-[400]">Additional Details</h3>
          <p className="font-[400] text-[14px] mt-3">Cover Letter</p>
          <textarea className="border border-[#555555] bg-transparent h-[170px] p-2 w-full rounded mt-1"></textarea>
        </div>

        <div className="mt-2 pl-5 border-b border-[#555555] pb-3">
          <p className="text-lg font-[400]">Attachments</p>
          <div className="p-4 border border-[#555555] rounded text-center mt-2 border-dashed">
            Drag or{" "}
            <span className="text-[#E66D3D] underline cursor-pointer">
              upload
            </span>{" "}
            project files
          </div>
          <p className="text-xs mt-1">
            You may attach up to 10 files under the size of 25 MB each...
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link to="/successHourly">
            <button className="bg-[#E66D3D] text-white font-[600] px-6 py-2 rounded w-full sm:w-auto">
              Submit for 11 Tokens
            </button>
          </Link>
          <button className="border border-[#E66D3D] font-[600] px-9 py-2 rounded w-full sm:w-auto">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobHourly;
