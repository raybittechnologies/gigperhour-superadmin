import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile, updateProfile } from "../../utils/api";
import income from "../../assets/Income 3D Model.svg";
import moneyBag from "../../assets/Money Bag.svg";
import expert from "../../assets/expert.svg";
import medal from "../../assets/Star Medal.svg";
import Star from "../../components/star";
import NavBarr from "../../components/NavBarr";

const Answer02 = () => {
  const navigate = useNavigate();
  const [freelanceGoals, setFreelanceGoal] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getUserProfile("freelanceGoals").then(
      (res) => {
        if (res.data.data && res.data.data.freelanceGoals) {
          setFreelanceGoal(res.data.data.freelanceGoals);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  const options = [
    {
      value: "primary",
      label: "Make it primary source of income.",
      image: income,
    },
    {
      value: "side",
      label: "To earn extra income on the side.",
      image: moneyBag,
    },
    {
      value: "learning",
      label: "To gain experience for a full-time job.",
      image: medal,
    },
    {
      value: "exploring",
      label: "I don’t have a specific goal in mind yet.",
      image: expert,
    },
  ];

  const handleSelection = (e) => {
    setFreelanceGoal(e.target.dataset.level);
  };

  const handleSubmit = () => {
    if (!freelanceGoals) return;
    updateProfile({ freelanceGoals, profile_step: 2 }).then(
      () => {
        navigate("/answerThree");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <div
      className={`min-h-screen z[20] ${
        darkMode ? "bg-black text-white" : " text-black"
      }`}
    >
      <NavBarr changeMode={setDarkMode} />
      <div className="container relative mx-auto p-6">
        <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
          <Star />
        </div>
        <div className="mt-5 text-center">
          <div className="flex justify-center items-center gap-4">
            <img src="src/assets/line02.svg" />
          </div>
          <p className="mt-6 text-lg">
            Got it! Whats your main goal for freelancing?
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          {options.map((card, index) => (
            <div
              key={index}
              className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all w-[240px] h-[210px] ${
                freelanceGoals === card.value
                  ? "border-2 border-[#E66D3D]"
                  : "border-[0.5px] border-[#555555]"
              }`}
              data-level={card.value}
              onClick={handleSelection}
            >
              <img
                src={card.image}
                alt={card.label}
                className="w-[130px] h-[130px] ml-[-20px]"
              />
              <p className="mt-1 text-[14px] font-inter font-[400]">
                {card.label}
              </p>
              <div
                className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
                  freelanceGoals === card.value
                    ? "border-2 border-[#E66D3D]"
                    : "border-[0.5px] border-white"
                }`}
              >
                {freelanceGoals === card.value && (
                  <div className="w-3 h-3 bg-[#E66D3D] rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-between pl-[120px] pr-[120px]">
          <button onClick={() => navigate("/answerOne")}>Back</button>
          <div className="flex gap-4">
            <button>Skip for now</button>
            <button
              className="bg-[#E66D3D] text-white px-6 py-2 rounded w-[137px] ml-[20px]"
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

export default Answer02;
