import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkMode.jsx";
import path from "../../assets/path.svg";
import pecent from "../../assets/pecent.svg";
import Star from "../../components/star";
import NavBarr from "../../components/NavBarr";
import { IoIosArrowDropleft } from "react-icons/io";
const Answer03 = () => {
  const [modeOfWork, setModeOfWork] = useState({});
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    getUserProfile("modeOfWork").then(
      (res) => {
        if (res.data.data && res.data.data.modeOfWork) {
          setModeOfWork(res.data.data.modeOfWork);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  const options = [
    {
      id: "find",
      text: "I prefer to find opportunities on my own.",
      newText: "Bid for client projects, or get invited by client.",
      image: path,
    },
    {
      id: "sell",
      text: "I want to package my work as services.",
      newText: "Define your service with prices and timeline.",
      image: pecent,
    },
  ];

  const handleCheck = (id) => {
    setModeOfWork((state) => {
      let prevState = { ...state };
      prevState[id] ? delete prevState[id] : (prevState[id] = true);
      return { ...prevState };
    });
  };

  const handleSubmit = () => {
    if (Object.keys(modeOfWork).length < 1) return;
    updateProfile({ modeOfWork, profile_step: 3 }).then(
      () => {
        navigate("/success");
      },
      () => {}
    );
  };

  return (
    <div
      className={`min-h-screen  ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      <NavBarr />
      <div className="container relative mx-auto p-6">
        <div className="absolute inset-0 flex justify-center items-center z-[20] pointer-events-none">
          <Star />
        </div>
        <div className="mt-1 text-center">
          <div className="flex justify-center items-center gap-4">
            <img src="src/assets/line03.svg" alt="line" />
          </div>
          <p className="mt-6 text-lg">
            Got it! Whats your main goal for freelancing?
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-6 sm:flex-row flex-col items-center z-[30] relative">
          {options.map((option) => (
            <div
              key={option.id}
              className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all w-[240px] h-[210px] ${
                modeOfWork[option.id]
                  ? "border-2 border-[#E66D3D]"
                  : "border-[1px] border-[#555555]"
              }`}
              onClick={() => handleCheck(option.id)}
            >
              <img
                src={option.image}
                alt={option.text}
                className="w-[130px] h-[110px] ml-[-10px] mt-[-10px]"
              />
              <p className="mt-1 text-sm text-[14px] font-inter font-[700]">
                {option.text}
              </p>
              <p className="mt-2 text-[12px] font-inter font-[300]">
                {option.newText}
              </p>
              <div
                className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
                  modeOfWork[option.id]
                    ? "border-2 border-[#E66D3D]"
                    : "border-[1px] border-[#555555]"
                }`}
              >
                {modeOfWork[option.id] && (
                  <div className="w-3 h-3 bg-[#E66D3D] rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <div className="flex items-center sm:ml-[-12rem]">
            <input
              type="checkbox"
              name="receiveUpdates"
              className="mr-5 w-[18px] h-[18px] appearance-none border border-[#555555] rounded-sm checked:bg-[#E66D3D] checked:border-[#E66D3D] focus:outline-none relative before:content-[''] before:absolute before:top-[3px] before:left-[5px] before:w-[4px] before:h-[9px] before:border-r-[2px] before:border-b-[2px] before:border-white before:rotate-45 before:opacity-0 checked:before:opacity-100"
            />
            <span className="text-[14px] leading-[24px] font-inter font-[400]">
              I’m open to contract-to-hire opportunities.
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-between md:px-[120px]">
          <button
            onClick={() => navigate("/answerTwo")}
            className="flex items-center gap-1"
          >
            {/* Icon for mobile */}
            <span className="sm:hidden text-[#E66D3D] text-3xl mt-1">
              <IoIosArrowDropleft />
            </span>
            {/* Text for small and up */}
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="flex gap-4">
            <button>Skip for now</button>
            <button
              className="bg-[#E66D3D] text-white px-6 py-2 rounded w-[137px]"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer03;
