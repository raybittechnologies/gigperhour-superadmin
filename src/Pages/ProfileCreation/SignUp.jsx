import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Star from "../../components/star";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle the password visibility state
  };

  const googleLogin = async () => {
    window.location.href =
      // "http://localhost:5050/api/v1/auth/google/signup/client";
      "http://192.168.100.36:5050/api/v1/auth/google/signup/client";
  };

  const appleLogin = async () => {
    window.location.href =
      "http://localhost:5050/api/v1/auth/apple/signup/freelancer";
  };

  //comment for push
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center relative  pt-6 pr-6 pl-6 gap-[4.4rem]">
      <Star />

      {/* First Column (Two Rows: Heading + Sign-Up Form) */}
      <div className="flex flex-col w-[573px] ">
        {/* First Row - Heading */}
        <div className="mb-6 mt-[-28px] ">
          {/* <img
            src="src/assets/Logo-Text.svg"
            alt="Logo Text"
            className="relative"
          /> */}

          <h3 className="text-[#000000] w-[122px] font-inter font-[400] text-[25px] absolute  top-[6px] mt-[-10px] leading-[58.09px] tracking-[-1%]">
            Elevance
          </h3>
          <h3 className="font-inter font-[400] text-[20px]  mt-[52px] leading-[29.05px] tracking-[-0.01em]  relative ">
            Create your account and create a world of opportunities
          </h3>
        </div>

        {/* Second Row - Sign Up Form */}
        <div className="backdrop-blur-3xl py-[10px] rounded-2xl bg-gradient-to-b from-black/10 to-black/30 shadow-lg w-full border-0 border-solid border-white w-[573px] h-[485px]  mt-[-11px] pl-[44px] pr-[44px]">
          <form>
            <label className="block text-white py-[5px]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[45px] text-[14px] rounded-[5px] placeholder:text-[12px] pl-[20px]"
            />

            <label className="block text-white mb-1 py-[5px]">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"} // Change input type based on state
                name="password"
                placeholder="Enter Your Password..."
                value={formData.password}
                onChange={handleChange}
                className="w-full h-[45px] text-[14px] abc rounded-[5px] placeholder:text-[12px] pl-[20px]"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-[20px] top-3 cursor-pointer w-[20px] h-[14px]"
              >
                <img
                  src={
                    passwordVisible
                      ? "src/assets/view.svg"
                      : "src/assets/view-off-slash.svg"
                  }
                  alt="toggle visibility"
                />
              </span>
            </div>

            <label className="block text-white mb-1 p-[5px]">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{
                appearance: "none",
                WebkitAppearance: "none", // For Webkit browsers (Chrome, Safari)
                MozAppearance: "none", // For Firefox
                backgroundColor: "white",
                backgroundImage: "url(src/assets/arrow-down-01.svg)", // Path to your custom icon
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                backgroundSize: "29px 22px",
                paddingRight: "30px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                height: "45px",
                fontSize: "14px",
                paddingLeft: "20px",
                marginBottom: "1rem",
              }}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={handleChange}
                className="mr-2 w-[18px] h-[25px]"
              />
              <span className="text-white text-[14px] leading-[24px]">
                Keep me updated with valuable jobs and exciting work
                opportunities.
              </span>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2 w-[18px] h-[25px]"
              />
              <span className="text-white text-[14px] leading-[24px]">
                I acknowledge and agree to Product 1’s Terms of Service.
              </span>
            </div>

            <div className="flex justify-center  mt-4">
              <button
                type="submit"
                onClick={() => navigate("/signUpSnd")}
                className="w-[250px] h-[44px] rounded-[5px] bg-[#E66D3D] text-white font-inter text-[16px] pt-[9px] pb-[15px]"
              >
                Continue
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-4 space-x-4">
            {/* Google Login Button */}
            <button
              onClick={googleLogin}
              className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <span className="mr-2">
                <img src="src/assets/google.svg" />
              </span>{" "}
              Continue with Google
            </button>

            {/* Apple Login Button */}
            <button
              onClick={appleLogin}
              className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <span className="mr-2">
                <img src="src/assets/apple.svg" />
              </span>{" "}
              Continue with Apple
            </button>
          </div>

          {/* Sign-in Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* Second Column - Freelance Card Section */}
      <img src="src/assets\connetCard.svg" className="h-[530px] mt-[25px]" />
    </div>
  );
};

export default SignUp;
