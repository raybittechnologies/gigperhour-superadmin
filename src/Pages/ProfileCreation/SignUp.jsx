//sign up

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Star from "../../components/star";
import ConnectFrame from "../../components/ConnectFrame";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.type || "client";

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
    setPasswordVisible(!passwordVisible);
  };

  const googleLogin = async () => {
    window.location.href =
      "http://192.168.100.36:5050/api/v1/auth/google/signup/client";
  };

  const appleLogin = async () => {
    window.location.href =
      "http://localhost:5050/api/v1/auth/apple/signup/freelancer";
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (role === "client") {
      navigate("/clientSuccess");
    } else {
      navigate("/signUpSnd");
    }
  };

  return (
    <>
      <h3 className="text-[#000000] font-inter font-[400] text-[25px] absolute top-[6px] mt-[-14px] leading-[58.09px] tracking-[-1%] left-[6vw]">
        Elevance
      </h3>
      <h3 className="mt-[45px] left-[6vw] absolute">
        {" "}
        Create your account and create a world of opportunities
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center relative px-4  pt-6 gap-[4.4rem] min-h-screen">
        <Star />

        {/* Form Section */}
        <div className="flex flex-col w-full px-[10px] mb-5 md:mb-0 md:w-[573px] md:mt-[50px] mt-20 ">
          {/* Heading */}
          {/* <div className="mb-6 mt-[-28px] ">
            <h3 className="font-inter font-[400] text-[18px] md:text-[20px] mt-[45px] leading-[29.05px] tracking-[-0.01em] relative">
              Create your account and create a world of opportunities
            </h3>
          </div> */}

          {/* Form Container */}
          <div
            className="
    backdrop-blur-0 md:backdrop-blur-3xl
    bg-transparent md:bg-gradient-to-b md:from-black/10 md:to-black/30
    text-black md:text-white
    shadow-lg w-full border md:border-0
    h-auto md:min-h-[485px] mt-[-11px] px-6 md:px-[44px]
    rounded-[1px] md:rounded-md py-[6px]
  "
          >
            <div className="relative z-10">
              {/* Email */}
              <label className="block  py-[5px]">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email..."
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[45px] bg-white text-gray-800 placeholder:text-gray-400 text-[14px] rounded-[5px] pl-[20px] shadow-sm border border-gray-300"
              />

              {/* Password */}
              <label className="block  py-[5px]">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password..."
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-[45px] bg-white text-gray-800 placeholder:text-gray-400 text-[14px] rounded-[5px] pl-[20px] shadow-sm border border-gray-300"
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

              {/* Country Select */}
              <label className="block   py-[5px]">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className=" w-full appearance-none bg-white text-gray-800 text-[14px] rounded-[5px] pl-[20px] pr-[40px] shadow-sm border border-gray-300 h-[45px] mb-4"
                style={{
                  backgroundImage: "url(src/assets/arrow-down-01.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 10px center",
                  backgroundSize: "29px 22px",
                }}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>

              {/* Checkboxes */}
              <div className="flex items-start mb-2 md:mb-0">
                <input
                  type="checkbox"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                  className="mr-2 w-[18px] h-[25px] mt-[2px]  shrink-0 accent-[#E66D3D]"
                />
                <span className="text-[12px] md:text-[14px] leading-[20px] md:leading-[24px]">
                  Keep me updated with valuable jobs and exciting work
                  opportunities.
                </span>
              </div>

              <div className="flex items-start mb-4 gap-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-[6px] w-[18px] h-[18px] shrink-0 accent-[#E66D3D]"
                />
                <span className="text-[12px] md:text-[14px] leading-[20px] md:leading-[24px]">
                  I acknowledge and agree to Product 1’s Terms of Service,
                  including the{" "}
                  <a href="#" className="underline font-[600]">
                    User Agreement
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline font-[600]">
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  onClick={handleContinue}
                  className="w-[250px] h-[44px] rounded-[5px] bg-[#E66D3D] text-white font-inter text-[16px] pt-[9px] pb-[15px]"
                >
                  Continue
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-3">
              <button
                onClick={googleLogin}
                className="flex items-center text-black bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <span className="mr-2">
                  <img src="src/assets/google.svg" />
                </span>
                Continue with Google
              </button>

              <button
                onClick={appleLogin}
                className="flex items-center text-black bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <span className="mr-2">
                  <img src="src/assets/apple.svg" />
                </span>
                Continue with Apple
              </button>
            </div>

            <p className="text-center font-[400] text-sm  0 mt-4">
              Already have an account?{" "}
              <a href="#" className="font-[600] hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* ConnectFrame: only visible on large (lg+) beside form */}
        <div className="hidden lg:block ">
          <ConnectFrame />
        </div>
      </div>
    </>
  );
};

export default SignUp;
