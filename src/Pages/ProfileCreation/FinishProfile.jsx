import NavBarr from "../../components/NavBarr";
import { useState } from "react";
const FinishProfile = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      {/* Navbar */}
      <NavBarr changeMode={setDarkMode} />
      <div className="container max-w-screen-xl mx-auto px-[120px] pt-3 pb-9 relative z-[20]">
        {/* Subscription Section */}
        <div className="bg-[#FFCBC6]  pl-6 pr-6 pb-4 pt-4 rounded-lg relative">
          <h3 className="text-[22px] text-black font-[400]">
            Receive 100 monthly tokens and additional benefits with
            <span className="block text-[#E66D3D] "> Elevance Plus</span>
          </h3>
          <ul className="mt-3 text-[#333333]  font-inter font-[300] space-y-2  ">
            <li className=" flex items-center gap-3">
              <img
                src="src/assets/tick-04.svg"
                className="text-[#333333] w-[15px]"
              />
              100 Tokens per month
            </li>
            <li className=" flex items-center gap-3">
              <img
                src="src/assets/tick-04.svg"
                className="text-[#333333] w-[15px]"
              />{" "}
              Elevance Chat Pro
            </li>
            <li className=" flex items-center gap-3">
              <img
                src="src/assets/tick-04.svg"
                className="text-[#333333] w-[15px]"
              />{" "}
              View Competitor Bids
            </li>
            <li className=" flex items-center gap-3">
              <img
                src="src/assets/tick-04.svg"
                className="text-[#333333] w-[15px]"
              />{" "}
              And More
            </li>
            <li className=" flex items-center gap-3">
              <img
                src="src/assets/tick-04.svg"
                className="text-[#333333] w-[15px]"
              />{" "}
              Cancel Anytime
            </li>
          </ul>

          <div className="flex items-center gap-8">
            <button className="bg-[#E66D3D] text-white font-medium px-5 py-2 rounded-md mt-4 w-[300px] h-[50px]">
              Subscribe for $18.99/month
            </button>
            <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
              <img
                src="src/assets/alarm-clock-dark.svg"
                className=" w-[25px] h-[24px]"
              />{" "}
              Get 50 Tokens free for a limited time
            </p>
          </div>

          {/* Floating Card */}
          <div className="absolute top-1/2  transform   right-[7vw] -translate-y-1/2 bg-white p-3 shadow-md rounded-md max-w-[300px] h-[auto] ">
            <h4 className="text-[15px] font-medium text-gray-700">
              Relied upon by the finest—half of our subscribers are highly-rated
              professionals!
            </h4>
            <div className="flex mt-2 ">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="user1"
                className="w-7 h-7 rounded-full border-2 border-white -ml-2"
              />
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="user2"
                className="w-7 h-7 rounded-full border-2 border-white -ml-2"
              />
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="user3"
                className="w-7 h-7 rounded-full border-2 border-white -ml-2"
              />
              <img
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt="user4"
                className="w-7 h-7 rounded-full border-2 border-white -ml-2"
              />
            </div>
          </div>
        </div>

        {/* Profile Ready Section */}
        <div className="mt-6">
          <h3 className="text-[21px] font-[400] ">
            Your profile is ready to go! <br />
            Now, youll need Tokens to start bidding on jobs.
          </h3>

          <p
            className={`text-sm font-[400] text-[#333333]  mt-2 ${
              darkMode ? "text-[white]" : "text-[#333333]"
            }`}
          >
            Tokens are virtual tokens youll use to pursue jobs and start
            earning.{" "}
            <span className="text-[#E66D3D] cursor-pointer underline ml-3">
              Learn more
            </span>
          </p>
        </div>

        {/* Tokens Pack Section */}
        <div className="mt-8">
          <h3 className="text-[21px] font-[400] ">
            Or get a 100 Tokens starter pack
          </h3>

          <p
            className={`text-sm font-[400]  font-inter text-[#333333]  mt-2 ${
              darkMode ? "text-[white]" : "text-[#333333]"
            }`}
          >
            Utilize this feature to apply for jobs, indicate your availability
            for work, and enhance your visibility through advertisements.
          </p>
          <div className="flex items-center gap-8">
            <button className="bg-[#E66D3D] text-white font-medium px-5 py-2 rounded-[5px] mt-5 w-[215px]">
              Buy for $14.99
            </button>

            <p
              className={`mt-2 text-sm  flex items-center gap-2 ${
                darkMode ? "text-[white]" : "text-[#333333]"
              }`}
            >
              <img
                src={
                  darkMode
                    ? "src/assets/alarm-clock-light.svg"
                    : "src/assets/alarm-clock-dark.svg"
                }
                alt="Mode Icon"
                className="w-[25px] h-[24px]"
              />
              Get 50 Tokens free for a limited time
            </p>
          </div>
        </div>

        {/* Browse without bidding */}

        <p
          className={`mt-6 text-sm  font-inter font-[400] ${
            darkMode ? "text-[white]" : "text-[#333333]"
          }`}
        >
          Register now or buy later to start bidding on job openings.{" "}
          <span className="text-[#E66D3D] cursor-pointer underline ml-3">
            Browse without bidding →
          </span>
        </p>
      </div>
    </div>
  );
};

export default FinishProfile;
