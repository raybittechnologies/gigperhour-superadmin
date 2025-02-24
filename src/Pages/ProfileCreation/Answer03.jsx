
import { useState } from "react";

import path from '../../assets/path.svg'; 
import pecent from '../../assets/pecent.svg';


import Star from "../../components/star";
import NavBarr from "../../components/NavBarr";
import { useNavigate } from "react-router-dom";

const Answer03 = () => {
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  const navigate = useNavigate();

  const options = [
    { id: 1, text: "I prefer to find opportunities on my own.", newText:" Bid for client projects, or get invited by client.", image: path }, 
    { id: 2, text: "I want to package my work as services.", newText:"Define your service with prices and timeline.",  image: pecent  },
  
  ];
  const handleNext = () => {
    if (selected) {
      navigate(`/success`, { state: { type: selected } });
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
        <div className="mt-1 text-center">
          <div className="flex justify-center items-center gap-4">
<img src="src/assets/line03.svg"/>
          </div>
          <p className="mt-6 text-lg">Got it! Whats your main goal for freelancing?</p>
        </div>

        <div className="mt-6 flex justify-center gap-6">
  {options.map((option) => (
    <div
      key={option.id}
      className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all w-[240px] h-[210px] ${
        selected === option.id ? "border-2 border-[#E66D3D]" : "border-[0.5px] border-[#555555]"
      }`}
      onClick={() => setSelected(option.id)}
    >
      <img src={option.image} alt={option.text} className="w-[130px] h-[110px] ml-[-10px] mt-[-10px]"/>
      <p className="mt-1 text-sm text-[14px] font-inter font-[700]">{option.text}</p>
      <p className="mt-2 text-[12px] font-inter font-[300] ">{option.newText}</p>



      

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

<div className="flex items-center justify-center mt-5 ">
             <div className="flex items-center ml-[-12rem] ">
             <input
                type="checkbox"
                name="receiveUpdates"
                
                className="mr-5 w-[18px] h-[25px]"
              />
              <span className="text-[14px] leading-[24px] font-inter font-[400]">
              I’m open to contract-to-hire opportunities.
              </span>
             </div>
            </div>





        <div className="mt-10 flex justify-between pl-[120px] pr-[120px]">
          <button className=""  onClick={() => navigate("/answerTwo")}>Back</button>
          <div className="flex gap-4">
            <button className="">Skip for now</button>
            <button className="bg-[#E66D3D] text-white px-6 py-2 rounded w-[137px] ml-[20px]" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer03;
