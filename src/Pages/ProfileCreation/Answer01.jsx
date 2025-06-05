import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkMode.jsx";
import newImage from "../../assets/new.svg";
import experience from "../../assets/experience.svg";
import expert from "../../assets/expert.svg";

import Star from "../../components/star";
import NavBarr from "../../components/NavBarr";
import { IoIosArrowDropleft } from "react-icons/io";

const Answer01 = () => {
  const navigate = useNavigate();
  const [freelanceExp, setFreelanceExp] = useState(null);
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    getUserProfile("freelanceExp").then(
      (res) => {
        if (res.data.data && res.data.data.freelanceExp) {
          setFreelanceExp(res.data.data.freelanceExp);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  const options = [
    { value: "new", label: "I am new to this", image: newImage },
    {
      value: "intermediate",
      label: "I have some experience",
      image: experience,
    },
    { value: "expert", label: "I am an expert", image: expert },
  ];
  const handleSelection = (e) => {
    setFreelanceExp(e.target.dataset.level);
  };

  const handleSubmit = () => {
    if (!freelanceExp) return;
    updateProfile({ freelanceExp, profile_step: 1 }).then(
      () => {
        navigate("/answerTwo");
      },
      (err) => {
        console.error(err);
      }
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
        {/* Star Background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-[20]">
          <Star className="" />
        </div>

        {/* Header */}
        <div className="mt-5 text-center">
          <div className="flex justify-center items-center gap-4">
            <img src="src/assets/line1.svg" alt="line" />
          </div>
          <h3 className="mt-6 sm:text-[20px] text-[17px] font-[400] font-inter">
            A few quick questions to get started: Have you freelanced before?
          </h3>
        </div>

        {/* Option Cards */}
        <div className="mt-6 flex justify-center gap-6 flex-col md:flex-row items-center">
          {options.map((card, index) => (
            <div
              key={index}
              className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all w-[280px] h-[210px] z-[30] ${
                freelanceExp === card.value
                  ? "border-2 border-[#E66D3D]"
                  : "border-[1px] border-[#555555]"
              }`}
              data-level={card.value}
              onClick={handleSelection}
            >
              <img
                src={card.image}
                alt={card.label}
                className="w-[130px] h-[130px] ml-[-22px] z-[30] relative"
              />
              <p className="mt-2">{card.label}</p>
              <div
                className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
                  freelanceExp === card.value
                    ? "border-2 border-[#E66D3D]"
                    : "border-[1px] border-[#717070]"
                }`}
              >
                {freelanceExp === card.value && (
                  <div className="w-3 h-3 bg-[#E66D3D] rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="mt-10 flex justify-between md:px-[120px]">
          <button onClick={() => navigate("/gettingStarted")}>
            {/* Mobile (icon) */}
            <span className="sm:hidden">
              <IoIosArrowDropleft className="text-3xl mt-1 text-[#E66D3D]" />
            </span>
            {/* Small screens and up (text) */}
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="flex gap-4">
            <button>Skip for now</button>
            <button
              className="bg-[#E66D3D] text-white px-6 py-2 rounded w-[137px] sm:ml-[20px]"
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

export default Answer01;
