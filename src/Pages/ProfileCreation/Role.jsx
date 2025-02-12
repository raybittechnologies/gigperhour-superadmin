import { NavLink ,useNavigate} from "react-router-dom";
import  { useState,  } from "react";

const Role = () => {

  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();


  const handleCreateAccount = () => {
    if (selected) {
      navigate(`/signUp?role=${selected}`); // Navigate to signup with role
    } else {
      alert("Please select either Client or Freelancer before continuing.");
    }
  };
  return (
    // <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    //   <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
    //     Select Your Role
    //   </h2>
    //   <div className="border-t-2 border-gray-300 my-4"></div>

    //   <div className="space-y-4">
    //     {/* Freelancer Card */}
    //     <NavLink to={"/signUp"} state={{ type: "freelancer" }}>
    //       <div className="p-6 bg-blue-100 hover:bg-blue-200 rounded-lg shadow-md cursor-pointer transition-all">
    //         <h3 className="text-xl font-medium text-blue-700 text-center">
    //           Freelancer
    //         </h3>
    //         <p className="text-gray-600 text-center mt-2">
    //           Find work and collaborate on projects.
    //         </p>
    //       </div>
    //     </NavLink>

    //     {/* Client Card */}
    //     <NavLink to={"/signUp"} state={{ type: "client" }}>
    //       <div className="p-6 bg-green-100 hover:bg-green-200 rounded-lg shadow-md cursor-pointer transition-all">
    //         <h3 className="text-xl font-medium text-green-700 text-center">
    //           Client
    //         </h3>
    //         <p className="text-gray-600 text-center mt-2">
    //           Hire freelancers and get your work done.
    //         </p>
    //       </div>
    //     </NavLink>
    //   </div>
    // </div>


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
      <div className={`w-60 h-55 border-2 rounded-lg p-6 flex flex-col cursor-pointer transition-all duration-300 ${
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
            selected === "freelancer" ? "border-orange-500" : "border-gray-400"
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
