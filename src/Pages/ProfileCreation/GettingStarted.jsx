
import Star from "../../components/star";
// import { useState } from "react";
export default function GettingStarted() {
  return (
    <div>
         <nav className="flex justify-between items-center py-3 bg-white h-[60px] shadow-md">
       {/* Logo */}
       <div className="text-3xl font-bold tracking-wider text-black dark:text-white">
        <img src="src/assets/Logo-Text.svg"  className="relative pl-[120px] " alt="Logo" />
       </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-4 right-[50px] relative">
     
        <img src="src/assets/Toggle-mode.svg" className="w-[110px] h-[40px] top-[10px] left-[1088px]"/>

        {/* User Icon */}
        <img src="src/assets/user.svg" className="w-[32px] h-[32px] left-[75px]"/>
      </div>
    </nav>



         {/* Main Content */}
         <div className="flex flex-col md:flex-row justify-center items-start pl-[120px]  pr-[120px] relative mx-auto mt-[1rem] gap-8">
          <Star/>
  {/* Left Section */}
  <div className="w-full md:w-1/2 space-y-6">
    <h3 className="text-[24px]  font-inter font-[400]">Hey Basit, are you ready for your next big opportunity?</h3>

    {/* Steps */}
    <div className="space-y-4">
      <div className="flex items-center gap-3  pb-1 pt-1">
       <img src="src/assets/user.svg" className="w-[30px] h-[30px]"/>
        <p  className="text-[15px] font-inter font-[400] pl-[20px]">Answer a few quick questions to begin building your profile.</p>
      </div>
      <hr className="border-t border-black border-opacity-100 h-[0.5px]" />
      <div className="flex items-center gap-3  pb-1 pt-1">
      <img src="src/assets/edit-02.svg" className="w-[30px] h-[30px]"/>
        <p className="text-[15px] font-inter font-[400] pl-[20px]">Apply for open roles or showcase your services for clients to purchase.</p>
      </div>
      <hr className="border-t border-black border-opacity-100 h-[0.5px]" />
      <div className="flex items-center gap-3  pb-1 pt-1">
      <img src="src/assets/dollar-02.svg" className="w-[30px] h-[30px]"/>
        <p  className="text-[15px] font-inter font-[400] pl-[20px]">Get paid securely with confidence, knowing were here to support you.</p>

      </div>
      <hr className="border-t border-black border-opacity-100 h-[0.5px]" />
     
    </div>

    {/* Continue Button */}
    <div className="flex flex-row">
  <button className="bg-[#E66D3D] text-white  h-[50px] pt-[12px] pb-[15px] pr-[50px] pl-[50px] rounded-lg font-semibold w-[172px]">Continue</button>
  <p className="text-[15px]  text-[#555555] mt-[2px] h-[50px] ml-[20px]">
    It takes just 5-10 minutes, and you can{" "}
    edit it anytime. Your progress is saved{" "}
   automatically
  </p>
</div>

  </div>

  {/* Right Section (Profile Card) */}
  <div className="relative  ">
 
   

    <div className="relative bg-opacity-30 backdrop-blur-[10px] shadow-xl p-6 rounded-lg w-[519px] h-[470px] text-center" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)' }}>
      <div className="flex justify-center mb-[25px]">
    
      <img 
  src="src/assets/profileImage.jpeg" 
  alt="Image" 
  className="w-[180px] h-[180px] rounded-full object-cover"
/>




      </div>
      <h2 className="text-[34px]  font-inter text-white font-[500] mt-4">Basit Bashir</h2>
      <h4 className="text-[17px] font-inter text-white font-[500]">Product Designer & UI/UX Designer</h4>

      <div className="flex justify-center items-center gap-4 mt-2 text-white text-sm">
      <span className="flex items-center gap-1">
  <img src="src/assets/starIcon.svg" className="w-[20px] h-[20px]" alt="Star Icon" />
  5.0
</span>
<span className="flex items-center gap-1">
  <img src="src/assets/dollar-icon.svg" className="w-[20px] h-[20px]" alt="Star Icon" />
  15.00/hr
</span>

        
<span className="flex items-center gap-1">
  <img src="src/assets/briefcase-07.svg" className="w-[20px] h-[20px]" alt="Star Icon" />
  21 jobs
</span>
      </div>

      <h4 className="mt-4 text-[15px] font-inter font-[400] text-white">
        “Product X has allowed me to increase my rates and recognize my true value. I love the feeling of helping a
        diverse range of clients.”
      </h4>
    </div>
  </div>
</div>

    </div>
  )
}





