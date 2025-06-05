import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4">
      {/* Nav Text (Top-Left Logo) */}
      <h3 className="text-[#000000] font-inter font-[400] text-[24px] absolute top-[12px] left-[10vw] leading-[58.09px] tracking-[-1%]">
        Elevance
      </h3>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-[500px] mt-[80px]">
        {/* Heading */}
        <h3 className="font-inter font-medium text-[22px] leading-[29.05px] mb-6 text-center">
          Please Select To Continue
        </h3>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[50px] mt-4">
          <Star />

          {/* Client Card */}

          <div
            className={`relative w-[270px] h-[220px] border rounded-lg p-6 flex flex-col items-center md:items-start transition-all duration-300 cursor-pointer z-10 box-border ${
              selected === "client" ? "border-[#E66D3D]" : "border-[#555555]/50"
            }`}
            onClick={() => setSelected("client")}
          >
            <img
              src="src/assets/image-1.svg"
              alt="Client"
              className="w-[145px] h-[145px] mb-2 ml-0 md:ml-[-20px]"
            />
            <p className="font-inter text-[16px] font-[500] text-center md:text-[14px] md:font-bold md:text-left leading-[19.36px]">
              Sign up as Client
            </p>
            <div
              className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
                selected === "client"
                  ? "border-[#E66D3D]"
                  : "border-[1px] border-gray-500"
              }`}
            >
              {selected === "client" && (
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              )}
            </div>
          </div>

          {/* Freelancer Card */}

          <div
            className={`relative w-[270px] h-[220px] border rounded-lg p-6 flex flex-col items-center md:items-start transition-all duration-300 cursor-pointer z-10 box-border ${
              selected === "freelancer"
                ? "border-[#E66D3D]"
                : "border-[#555555]/50"
            }`}
            onClick={() => setSelected("freelancer")}
          >
            <img
              src="src/assets/image 2.svg"
              alt="Freelancer"
              className="w-[145px] h-[145px] mb-2 ml-0 md:ml-[-20px]"
            />
            <p className="font-inter text-[16px] font-[500] text-center md:text-[14px] md:font-bold md:text-left leading-[19.36px]">
              Sign up as Freelancer
            </p>
            <div
              className={`absolute top-2 right-2 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
                selected === "freelancer"
                  ? "border-[#E66D3D]"
                  : "border-[1px] border-gray-500"
              }`}
            >
              {selected === "freelancer" && (
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              )}
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-[40px] text-center">
          <button
            onClick={handleCreateAccount}
            className="bg-[#E66D3D] text-white font-semibold px-[100px] py-[11px] mt-[25px] rounded-lg shadow-md hover:bg-[#d45f34] transition duration-300"
          >
            Create account
          </button>
          <h4 className="mt-[35px] mb-2 font-inter font-medium text-[17px] leading-[24.2px] tracking-[1%]">
            Already have an account?{" "}
            <NavLink to="/login" className="underline text-[20px]">
              Login
            </NavLink>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Role;
