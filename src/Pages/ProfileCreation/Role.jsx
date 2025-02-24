import { NavLink ,useNavigate} from "react-router-dom";
import  { useState,  } from "react";
import Star from "../../components/star";

const Role = () => {

  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();


  const handleCreateAccount = () => {
    if (selected) {
      navigate(`/signUp`, { state: { type: selected } });
    } 
  };
  return (
    <div className=" relative flex flex-col items-center justify-center  ">
     
       <img src="src/assets/Logo-Text.svg" className="absolute  top-[12px] left-[110px] leading-[58.09px] tracking-[-1%]" alt="Logo Text" />

      
    {/* Heading */}
    <h3 className="font-inter font-medium text-[22px] leading-[29.05px] mb-6 text-center relative top-[126px] ">
      Please Select To Continue
    </h3>
   
    {/* Cards Container */}
    <div className="flex justify-center items-center space-x-6  relative top-[140px] h-[250px]   gap-[50px]
 ">
      <Star/>
      {/* Client Card */}
      <div className={` relative w-[270px] h-[220px] border-2 rounded-lg p-6 flex flex-col cursor-pointer transition-all duration-300 ${
          selected === "client" ? "border-2 border-[#E66D3D]" : "border-[0.5px] border-[#555555]"
        } z-10`}
        onClick={() => setSelected("client")}
      >
        <img
          src="src/assets/image-1.svg" 
          alt="Client"
          className="w-[145px] h-[145px] self-start ml-[-20px] relative top-[-15px]"
        />
        <p className="font-bold font-inter leading-[19.36px] text-[14px] ">Sign up as Client</p>
        <div
    className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
      selected === "client" ? "border-2 border-[#E66D3D]" : "border-[0.5px] border-white"
    }`}
  >
    {selected === "client" && (
      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
    )}
  </div>
      </div>

      {/* Freelancer Card */}
      <div
        className={` relative w-[270px] h-[220px] border-2 rounded-lg p-6 flex flex-col  cursor-pointer transition-all duration-300 ${
          selected === "freelancer" ? "border-2 border-[#E66D3D]" : "border-[0.5px] border-[#555555]"
        } z-10`}
        onClick={() => setSelected("freelancer")}
      >
        <img
          src="src/assets/image 2.svg" 
          alt="Freelancer"
          className="w-[145px] h-[145px] self-start  ml-[-20px]  relative top-[-15px]"
        />
        <p className="font-bold font-inter leading-[19.36px] text-[14px]  ">Sign up as Freelancer</p>
        <div
          className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
            selected === "freelancer" ? "border-2 border-[#E66D3D]" : "border-[0.5px] border-white"
          }`}
        >
          {selected === "freelancer" && (
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          )}
        </div>
      </div>

  

     
    </div>
        {/* button */}

<div className=" relative top-[155px] text-center">
<button
        onClick={handleCreateAccount}
        className="bg-[#E66D3D] text-white   font-semibold p-[11px_100px] mt-[25px] rounded-lg shadow-md hover:bg-[#d45f34] transition duration-300"
      >
        Create account
      </button>
      <h4 className="mt-[10px] font-inter font-medium text-[17px] leading-[24.2px] tracking-[1%]">
  Already have an account?{" "}
  <NavLink to="/login" className="underline text-[20px]">
    Login
  </NavLink>
</h4>
</div>
     
  </div>

  );
};

export default Role;
