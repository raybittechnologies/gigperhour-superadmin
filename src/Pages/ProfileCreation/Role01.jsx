import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Role = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (selected) {
      navigate(`/signUp`, { state: { type: selected } });
    } else {
      alert("Please select either Client or Freelancer before continuing.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Heading */}
      <h3 className="text-xl font-semibold mb-6 text-center">
        Please Select To Continue
      </h3>

      {/* Cards Container */}
      <div className="flex justify-center items-center space-x-6">
        <img
          src="src/assets/Blob.png" // Change this to your image path
          alt="Background"
          className="absolute object-cover opacity-1 pointer-events-none z-[-10] "
        />

        {/* Client Card */}
        <div
          className={`w-60 h-55 border-2 rounded-lg p-6 flex flex-col cursor-pointer transition-all duration-300 ${
            selected === "client" ? "border-orange-500" : "border-gray-400"
          } z-10`}
          onClick={() => setSelected("client")}
        >
          <img
            src="src/assets/image 1.png" // Replace with actual client image
            alt="Client"
            className="w-24 h-24"
          />
          <p className="font-semibold mt-4">Sign up as Client</p>
          <div
            className={`mt-4 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
              selected === "client" ? "border-orange-500" : "border-gray-400"
            }`}
          >
            {selected === "client" && (
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            )}
          </div>
        </div>

        {/* Freelancer Card */}
        <div
          className={`w-60 h-55 border-2 rounded-lg p-6 flex flex-col  cursor-pointer transition-all duration-300 ${
            selected === "freelancer" ? "border-orange-500" : "border-gray-400"
          } z-10`}
          onClick={() => setSelected("freelancer")}
        >
          <img
            src="src/assets/image 2.png" // Replace with actual freelancer image
            alt="Freelancer"
            className="w-24 h-24"
          />
          <p className="font-semibold mt-4">Sign up as Freelancer</p>
          <div
            className={`mt-4 w-6 h-6 border-2 rounded-full flex justify-center items-center ${
              selected === "freelancer"
                ? "border-orange-500"
                : "border-gray-400"
            }`}
          >
            {selected === "freelancer" && (
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
      {/* button */}

      <button
        onClick={handleCreateAccount}
        className="bg-[#E66D3D] text-white font-semibold p-[15px_100px] mt-[25px] rounded-lg shadow-md hover:bg-[#d45f34] transition duration-300"
      >
        Create an Account
      </button>
      <h4>
        Already have an account?{" "}
        <NavLink to="/login" className=" hover:underline">
          Login
        </NavLink>
      </h4>
    </div>
  );
};

export default Role;
