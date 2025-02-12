// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const SignUp = () => {
//   const { state } = useLocation();
//   console.log(state);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     country: "India",
//     receiveEmails: false,
//     agreeTerms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const googleLogin = async () => {
//     window.location.href =
//       "http://localhost:5050/api/v1/auth/google/signup/client";
//   };

//   const appleLogin = async () => {
//     window.location.href =
//       "http://localhost:5050/api/v1/auth/apple/signup/freelancer";
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">SIGN UP</h2>
//         <form className="space-y-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password (8 or more characters)"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="India">India</option>
//             <option value="USA">USA</option>
//             <option value="Canada">Canada</option>
//           </select>
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               name="receiveEmails"
//               checked={formData.receiveEmails}
//               onChange={handleChange}
//               className="w-4 h-4"
//             />
//             <span>
//               Send me helpful emails to find rewarding work and job leads.
//             </span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               name="agreeTerms"
//               checked={formData.agreeTerms}
//               onChange={handleChange}
//               className="w-4 h-4"
//             />
//             <span>
//               Yes, I understand and agree to the Upwork Terms of Service,
//               including the User Agreement and Privacy Policy.
//             </span>
//           </label>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={googleLogin}
//             className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 mr-2"
//           >
//             GOOGLE
//           </button>
//           <button
//             onClick={appleLogin}
//             className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800"
//           >
//             APPLE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import { useState } from "react";
const SignUp = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "",
    receiveUpdates: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const googleLogin = async () => {
    window.location.href = "http://localhost:5050/api/v1/auth/google/signup/client";
  };

  const appleLogin = async () => {
    window.location.href = "http://localhost:5050/api/v1/auth/apple/signup/freelancer";
  }
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen  p-6 gap-6">
      {/* Sign Up Section */}
      <div className="backdrop-blur-3xl p-[2rem] rounded-2xl bg-gradient-to-b from-black/10 to-black/30 shadow-lg w-[576px]">
      <form>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email..."
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mb-3"
        />

        <label className="block text-gray-700">Password</label>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password..."
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
          />
          <span className="absolute right-[20px] top-3 cursor-pointer">👁️</span>
        </div>

        <label className="block text-gray-700">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mb-3"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-sm text-gray-600">
            Keep me updated with valuable jobs and exciting work opportunities.
          </span>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-sm text-gray-600">
            I acknowledge and agree to Product 1’s Terms of Service, including the User Agreement and Privacy Policy.
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
        >
          Continue
        </button>
      </form>

      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={googleLogin}
          className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <span className="mr-2">🔴</span> Continue with Google
        </button>
        <button
          onClick={appleLogin}
          className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <span className="mr-2">🍏</span> Continue with Apple
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account? <a href="#" className="text-blue-500">Sign in</a>
      </p>
    </div>
      {/* Freelance Card Section */}
      <div className="bg-orange-500 text-white p-6 rounded-3xl relative max-w-md">
        {/* Star Icon at Top Right */}
        <div className="absolute top-2 right-2 bg-orange-600 p-2 rounded-full">
          ⭐
        </div>
        <h2 className="text-2xl font-semibold text-center">
          Connect with top clients and freelancers worldwide.
        </h2>
        {/* Quote Section */}
        <div className="mt-4 relative">
          <span className="text-4xl">“</span>
          <p className="text-lg font-medium px-4">
            Unlock endless opportunities – Search for your dream jobs, start your journey!
          </p>
          <span className="text-4xl absolute right-0">”</span>
        </div>
        {/* Job Description Box */}
        <div className="bg-white text-black p-4 rounded-xl mt-6 relative shadow-md">
          {/* Small Icon at Top Right */}
          <div className="absolute top-2 right-2 bg-orange-500 p-1 rounded-full text-white text-xs">
            ✳️
          </div>
          <p className="font-semibold">
            Perfect place to get your best job, best freelancer you have been looking for!
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Be among the best to experience the best in the world.
          </p>
          {/* User Profile Images */}
          <div className="flex items-center mt-3">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/46.jpg"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <span className="ml-2 text-gray-600">+2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
