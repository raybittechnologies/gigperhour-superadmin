import { useState, useEffect } from "react";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import { Link } from "react-router-dom";

const ApplyJob = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [tokens] = useState(10);
  const [milestones, setMilestones] = useState([{ id: 1 }]);

  const addMilestone = () => {
    setMilestones((prev) => [...prev, { id: prev.length + 1 }]);
  };
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
      <div className="px-6    pt-3 pb-3 relative z-[20]">
        <h3 className="text-lg sm:text-xl md:text-2xl font-[400]">
          Submit a Proposal
        </h3>

        <div className="text-sm flex flex-wrap gap-4 sm:gap-6 md:gap-8 pl-0 sm:pl-5 mt-2">
          <p>
            Fixed: <span className="text-[#E66D3D] ">$100</span>
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
            <span className="text-[#E66D3D] ">11</span>
          </p>
          <div className="flex flex-wrap gap-1">
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

        <div className="flex flex-col sm:flex-row sm:justify-between text-sm mt-4 border-b pb-2 pl-0 sm:pl-5 border-[#555555]">
          <p>One-Time Project</p>
          <p className="text-[#D84839] flex items-center font-[400] gap-2 mt-2 sm:mt-0">
            <img
              src="src/assets/UserDashboard/flag-02.svg"
              className="w-[18px]"
            />
            Flag inappropriate
          </p>
        </div>

        <div className="pt-2 pl-0 sm:pl-5 border-b border-[#555555] pb-2">
          <h2 className="text-base sm:text-lg font-[600]">Job Details</h2>
          <div className="flex flex-col sm:flex-row justify-between">
            <p className="text-base font-[600] mt-1">
              Front End Designer Needed for Engaging Web Projects
            </p>
            <p className="font-[400] text-sm sm:text-base mt-1 sm:mt-0">
              Posted 06-03-2025
            </p>
          </div>
          <p className="max-w-full sm:max-w-[606px] text-sm sm:text-base font-[400] mt-2">
            I am looking for an individual who can create interactive designs
            for me in Figma. Need clean designs and responsive also.
          </p>
        </div>

        <div className="mt-2 pl-0 sm:pl-5 border-b border-[#555555] pb-3">
          <h3 className="text-lg font-[400]">Required Skillss:</h3>
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

        {/* Terms */}
        <div className="pt-2 pl-0 sm:pl-5 border-b border-[#555555] pb-3">
          <h3 className="text-lg font-[400]">Terms</h3>

          <div className="mb-6">
            <p className="text-base mb-2">How do you want to be paid?</p>

            {/* Milestone & Project */}
            <div className="flex flex-col gap-4">
              {[
                [
                  "milestone",
                  "By Milestone",
                  "Divide the project into smaller segments, called milestones. You’ll be paid for milestones as they are completed and approved.",
                ],
                [
                  "project",
                  "By Project",
                  "Get your entire payment at the end, when all work has been delivered.",
                ],
              ].map(([key, title, desc]) => (
                <label
                  key={key}
                  className="flex items-start gap-2 cursor-pointer"
                  onClick={() => setSelectedPayment(key)}
                >
                  <div
                    className={`w-5 h-5 mt-1 border-2 rounded-full flex justify-center items-center flex-shrink-0 ${
                      selectedPayment === key
                        ? "border-[#E66D3D]"
                        : darkMode
                        ? "border-[#E9E9E9]"
                        : "border-[#555555]"
                    }`}
                  >
                    {selectedPayment === key && (
                      <div className="w-3 h-3 bg-orange-500 rounded-full" />
                    )}
                  </div>
                  <div>
                    <p className="font-[400]">{title}</p>
                    <p
                      className={`${
                        darkMode ? "text-[#E9E9E9]" : "text-[#555555]"
                      } text-sm`}
                    >
                      {desc}
                    </p>
                  </div>
                </label>
              ))}
            </div>

            {/* Bid Section (Only if By Project is selected) */}
            {selectedPayment === "project" && (
              <div className="mt-6">
                <p className="font-[400]">
                  What is the full amount you’d like to bid for this job?
                </p>

                <div className="flex flex-col md:flex-row justify-between gap-6 mt-4">
                  {/* Bid */}
                  <div className=" flex-1 max-w-[400px] md:mx-auto">
                    <p className="text-sm mb-1">
                      <span className="font-[600]">Bid</span> (Total amount the
                      client will see on your proposal)
                    </p>
                    <div className="border border-gray-400 rounded px-4 py-2 mt-2 font-[600] w-full md:max-w-[230px]  ">
                      $500
                    </div>
                  </div>

                  {/* Wrap Service Fee + Amount Received in flex-row even on mobile */}
                  <div className="flex flex-row gap-6 flex-1 md:flex-row md:justify-center">
                    {/* Service Fee */}
                    <div className="md:text-center flex-1">
                      <p className="font-[600] text-sm mb-1">5% Service Fee</p>
                      <div
                        className={`rounded px-4 py-2 mt-2 font-[600] w-full max-w-[230px] md:mx-auto ${
                          darkMode
                            ? "bg-white text-black"
                            : "bg-[#555555] text-white"
                        }`}
                      >
                        $25
                      </div>
                    </div>

                    {/* Amount Received */}
                    <div className="text-center flex-1">
                      <p className="text-sm mb-1">
                        <span className="font-[600]">You’ll Receive</span>
                        <span className="hidden min-[1129px]:inline">
                          {" "}
                          (The estimated amount you’ll receive after service
                          fees)
                        </span>
                      </p>
                      <div className="border border-gray-400 rounded px-4 py-2 mt-2 font-[600] w-full max-w-[230px] mx-auto">
                        $475
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Milestone Inputs */}
            {selectedPayment === "milestone" && (
              <div className="">
                <p className="font-[400] mt-4">
                  How many milestones would you like to include?
                </p>
                {milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="flex flex-col gap-4 mt-4 [@media(min-width:751px)]:flex-row [@media(min-width:751px)]:gap-4"
                  >
                    {/* Description */}
                    <div>
                      <p className="text-sm mb-1">
                        <span className="font-[600]">Description</span>
                      </p>
                      <input
                        type="text"
                        className="border border-gray-400 rounded px-4 py-2 mt-2 font-[600] w-full [@media(min-width:1103px)]:w-[400px] bg-transparent"
                        placeholder="Enter Text"
                      />
                    </div>

                    {/* Due Date + Amount in a row on small screens */}
                    <div className="flex sm:flex-row flex-col gap-4">
                      {/* Due Date */}
                      <div>
                        <p className="font-[600] text-sm mb-1">Due Date</p>
                        <input
                          type="date"
                          className="rounded border h-[42px] border-gray-400 w-full [@media(min-width:1103px)]:w-[280px] px-4 py-2 mt-2 font-[600] bg-transparent appearance-none"
                          style={{
                            WebkitAppearance: "none",
                            MozAppearance: "textfield",
                            appearance: "none",
                            lineHeight: "normal",
                          }}
                        />
                      </div>

                      {/* Amount */}
                      <div>
                        <p className="font-[600] text-sm mb-1">Amount</p>
                        <input
                          type="text"
                          className="rounded border border-gray-400 w-full [@media(min-width:1103px)]:w-[280px] px-4  h-[43px] py-2 mt-2 font-[600] bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={addMilestone}
                  className="text-[#E66D3D] font-[600] flex gap-2 mt-4 mb-7"
                >
                  <img
                    src="src/assets/UserDashboard/plus-sign.svg"
                    alt="Add Milestone"
                  />
                  Add Milestone
                </button>

                {/* Summary Section */}
                <div className="flex flex-col md:flex-row justify-between gap-6 mt-4">
                  {/* Bid */}
                  <div className=" flex-1 max-w-[400px] md:mx-auto">
                    <p className="text-sm mb-1">
                      <span className="font-[600]">Total Price</span>
                    </p>
                    <div className="border border-gray-400 rounded px-4 py-2 mt-2 font-[600] w-full md:max-w-[230px]  ">
                      $500
                    </div>
                  </div>

                  {/* Wrap Service Fee + Amount Received in flex-row even on mobile */}
                  <div className="flex flex-row gap-6 flex-1 md:flex-row md:justify-center">
                    {/* Service Fee */}
                    <div className="md:text-center flex-1">
                      <p className="font-[600] text-sm mb-1">5% Service Fee</p>
                      <div
                        className={`rounded px-4 py-2 mt-2 font-[600] w-full max-w-[230px] md:mx-auto ${
                          darkMode
                            ? "bg-white text-black"
                            : "bg-[#555555] text-white"
                        }`}
                      >
                        $25
                      </div>
                    </div>

                    {/* Amount Received */}
                    <div className="text-center flex-1">
                      <p className="text-sm mb-1">
                        <span className="font-[600]">You’ll Receive</span>
                      </p>
                      <div className="border border-gray-400 rounded px-4 py-2 mt-2 font-[600] w-full max-w-[230px] mx-auto">
                        $475
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Duration */}
        <div className="mt-2 pl-0 sm:pl-5 border-b border-[#555555] pb-3">
          <h3 className="text-lg font-[400]">
            How long will the project take?
          </h3>
          <div className="relative max-w-full sm:max-w-[340px] mt-2">
            <input
              type="text"
              placeholder="Enter Text"
              className="border p-2 w-full rounded-[5px] font-[300] text-sm focus:border-[#E66D3D] focus:outline-none pr-8"
            />
            <img
              src="src/assets/arrow-down-01.svg"
              alt="Dropdown Icon"
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {/* Cover Letter */}
        <div className="mt-2 pl-0 sm:pl-5 border-[#555555] pb-3">
          <h3 className="text-lg font-[400]">Additional Details</h3>
          <p className="font-[400] text-sm mt-3">Cover Letter</p>
          <textarea className="border border-[#555555] bg-transparent h-[170px] p-2 w-full rounded mt-1"></textarea>
        </div>

        {/* Attachments */}
        <div className="mt-2 pl-0 sm:pl-5 border-b border-[#555555] pb-3">
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
            work samples or other documents to support your application. Do not
            attach your resume — your Upwork profile is automatically forwarded
            to the client with your proposal
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
          <Link to="/proposalSuccess">
            <button className="bg-[#E66D3D] text-white font-[600] px-6 py-2 rounded w-full sm:w-auto">
              Submit for 11 Tokens
            </button>
          </Link>
          <button className="border border-[#E66D3D] font-[600] px-6 py-2 rounded w-full sm:w-auto">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
