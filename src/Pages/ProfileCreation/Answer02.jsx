


import { useState } from "react";

import income from '../../assets/Income 3D Model.svg'; 
import moneyBag from '../../assets/Money Bag.svg';   
import expert from '../../assets/expert.svg';
import medal from '../../assets/Star Medal.svg';
import Star from "../../components/star";
import NavBarr from "../../components/NavBarr";
import { useNavigate } from "react-router-dom";

const Answer02 = () => {
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  const navigate = useNavigate();

  const options = [
    { id: 1, text: "Make it primary source of income.", image: income }, 
    { id: 2, text: "To earn extra income on the side.", image: moneyBag },
    { id: 3, text: "To gain experience for a full-time job.", image: medal  },
    { id: 4, text: "I don’t have a specific goal in mind yet.", image: expert  },
  ];

  
  const handleNext = () => {
    if (selected) {
      navigate(`/answerThree`, { state: { type: selected } });
    } 
  };
  return (
    <div className={`min-h-screen z[20] ${darkMode ? "bg-black text-white" : " text-black"}`}>
      {/* Navigation Bar */}
      
      

    <NavBarr changeMode={setDarkMode}/>
   

      {/* Survey Content */}
      <div className="container  relative mx-auto p-6">
       
      <div className="absolute inset-0 flex justify-center items-center z-10  pointer-events-none" >
          <Star />
        </div>
        <div className="mt-5 text-center">
          <div className="flex justify-center items-center gap-4">
<img src="src/assets/line02.svg"/>
          </div>
          <p className="mt-6 text-lg">Got it! Whats your main goal for freelancing?</p>
        </div>

        <div className="mt-6 flex justify-center gap-6">
  {options.map((option) => (
    <div
      key={option.id}
      className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all w-[240px] h-[210px] ${
        selected === option.id ? "border-2 border-[#E66D3D]" : "border-[0.5px] border-[#555555]"
      }`}
      onClick={() => setSelected(option.id)}
    >
      <img src={option.image} alt={option.text} className="w-[130px] h-[130px] ml-[-20px]"/>
      <p className="mt-1 text-[14px] font-inter font-[400]">{option.text}</p>

      {/* Round circle indicator on top right */}
      <div
        className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
          selected === option.id ? "border-2 border-[#E66D3D]" : "border-[0.5px] border-white"
        }`}
      >
        {selected === option.id && <div className="w-3 h-3 bg-[#E66D3D] rounded-full"></div>}
      </div>
    </div>
  ))}
</div>



        <div className="mt-10 flex justify-between pl-[120px] pr-[120px]">
          <button className=""  onClick={() => navigate("/answerOne")}>Back</button>
          <div className="flex gap-4">
            <button className="">Skip for now</button>
            <button className="bg-[#E66D3D] text-white px-6 py-2 rounded w-[137px] ml-[20px]" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer02;
