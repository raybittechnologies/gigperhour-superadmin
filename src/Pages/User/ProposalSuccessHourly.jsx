import { useState, useEffect, useRef } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import { Link } from "react-router-dom";

const ProposalSuccessHourly = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [fixedAmount, setFixedAmount] = useState(" $12.00");
  const [tokens] = useState(20);
  const textareaRef = useRef(null);

  const [textData] =
    useState(`Subject: Expert Figma Designer | Modern & Clean UI for Your Vegan Lifestyle Website
    Hi [Client’s Name],
    I’m excited about the opportunity to design a modern and clean page for your vegan food and healthy lifestyle website! As an experienced UI/UX designer, I specialize in creating visually appealing and user-friendly designs that align with the latest web and mobile trends.
    
    What I Bring to Your Project:
    ✅ Figma Expertise – Pixel-perfect layouts, design systems & prototypes
    ✅ Modern, Clean Aesthetic – Minimal, fresh, and engaging UI
    ✅ Trend Awareness – Familiar with current web/mobile design trends
    ✅ User-Centric Approach – Ensuring seamless and intuitive experiences`);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [textData]);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div
      className={`min-h-screen relative  ${
        darkMode ? "bg-black text-white" : "text-[#333333] "
      }`}
    >
      <NavBarUser changeMode={setDarkMode} />
      <div className=" px-4 sm:px-6 pt-3 pb-3 relative z-[20]">
        <h3 className="text-[22px] font-[400]">Submit a Proposal</h3>

        <div className="mt-6 flex flex-col lg:flex-row gap-4 lg:gap-10">
          <button className="bg-[#FFCBC6] w-full lg:w-[538px] text-[#333333] text-[16px] font-[400] px-6 py-2 text-left rounded flex gap-2">
            <img
              src="src/assets/UserDashboard/discount.svg"
              className="w-[20px] h-[20px] mt-[3px]"
            />
            Your Proposal has been submitted successfully
          </button>

          {/* Nested row for Edit and Withdraw buttons */}
          <div className="flex flex-row [@media(max-width:434px)]:flex-col gap-4 w-full lg:w-auto">
            <Link to="/jobHourly" className="w-full lg:w-auto">
              <button className="bg-[#E66D3D] text-white font-[600] px-6 py-2 rounded w-full">
                Edit Proposal
              </button>
            </Link>

            <button className="border border-[#E66D3D] font-[600] px-9 py-2 rounded w-full lg:w-auto">
              withdraw proposal
            </button>
          </div>
        </div>

        <div className="text-sm flex flex-wrap sm:flex-row pl-5 gap-3 sm:gap-8 mt-9">
          <p>
            Fixed: <span className="text-[#E66D3D]">$100</span>
          </p>
          <span className="flex gap-2">
            <img
              src={
                darkMode
                  ? "src/assets/UserDashboard/developer-dark.svg"
                  : "src/assets/UserDashboard/developer.svg"
              }
              className="w-[15px] h-[15px] mt-1"
              alt="Developer"
            />
            Intermediate
          </span>
          <p>
            Tokens required for Proposal:{" "}
            <span className="text-[#E66D3D]">11</span>
          </p>
          <div className="flex gap-1">
            <p>
              Available Tokens: <span className="text-[#D84839]">{tokens}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between text-sm mt-4 border-b pb-2  pl-5 border-[#555555]">
          <p>One-Time Project</p>
          <p className="text-[#D84839] flex font-[400] gap-2 mt-2 sm:mt-0">
            <img
              src="src/assets/UserDashboard/flag-02.svg"
              className="w-[18px] mt-[3px]"
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
          <p className="w-full lg:w-[606px] text-[16px] font-[400] mt-2">
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
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <p className="sm:mr-[90px]">Your Profile Rate: {fixedAmount}</p>
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
            rate will increase automatically over the contract’s lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div className="relative w-full sm:w-[340px]">
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
            <div className="relative w-full sm:w-[340px]">
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
          <textarea
            ref={textareaRef}
            className="border border-[#555555] bg-transparent p-2 w-full rounded mt-1 resize-none overflow-hidden text-left"
            value={textData}
            readOnly
          ></textarea>
        </div>

        <div className="mt-2 pl-5 border-[#555555] pb-3">
          <p className="text-lg font-[400]">Attachments</p>
          <div className="p-4 border border-[#555555] rounded text-center mt-2 border-dashed">
            Drag or{" "}
            <span className="text-orange-500 underline cursor-pointer">
              upload
            </span>{" "}
            project files
          </div>
          <p className="text-xs mt-1">
            You may attach up to 10 files under the size of 25 MB each. Include
            work samples or other documents to support your application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProposalSuccessHourly;
