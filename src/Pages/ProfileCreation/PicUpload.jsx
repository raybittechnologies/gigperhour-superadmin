import { useState, useEffect } from "react";
import NavBarr from "../../components/NavBarr";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkMode.jsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const PicUpload = () => {
  const { darkMode } = useDarkMode();
  const [progress] = useState(100);
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr />
      <div className="md:px-[60px] px-[20px] pt-1 pb-3 relative z-[20]">
        <div className="flex flex-row justify-between sm:items-center items-start gap-2">
          <h3 className="text-[17px] sm:text-[24px] font-[400] font-inter">
            Just a few final details, then you ll be ready to review and publish
            your profile!
          </h3>
          <span className="text-sm font-[500] mt-2 sm:mt-0">10/10</span>
        </div>

        <p className="md:mb-4 mb-9 w-full md:w-[690px] sm:text-sm text-xs sm:pt-0 pt-2">
          A professional photo helps build trust with clients. For a secure
          experience, payments will be processed through us—so we need your
          personal details.
        </p>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center mt-[-20px]">
          <div className="w-[70px] h-[70px] bg-gray-300 rounded-full flex items-center justify-center">
            <img
              src="/user-avatar.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="bg-[#E66D3D] w-[160px] h-[35px] text-white px-3 py-1 rounded-[5px] mt-2">
            Add Photo
          </button>
        </div>

        {/* Form Section */}
        <form className="mt-4 w-full max-w-[60rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Date of Birth */}
            <div>
              <p className="text-sm font-inter font-[400]">
                Date of Birth <span className="text-red-500">*</span>
              </p>
              <input
                type="date"
                className={`block w-full max-w-full min-w-0 h-[39px] px-3 py-2 mt-1 rounded border focus:border-[#E66D3D] focus:outline-none bg-white
      ${darkMode ? "text-black" : "border-[#818181]"}`}
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                  appearance: "none",
                  width: "100%",
                  lineHeight: "normal",
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <p className="text-sm font-inter font-[400]">
                Phone <span className="text-red-500">*</span>
              </p>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass={`border p-2 mt-1 w-full h-[39px] rounded focus:border-[#E66D3D] focus:outline-none text-[#3333333] ${
                  darkMode
                    ? "border-[#E9E9E9] bg-[#222] text-black"
                    : "border-[#818181] bg-white text-black"
                }`}
                containerClass="w-full"
              />
            </div>

            {/* Country */}
            <div>
              <p className="text-sm font-inter font-[400]">
                Country <span className="text-red-500">*</span>
              </p>
              <select
                className={`border p-2 mt-1 w-full h-[39px] rounded focus:border-[#E66D3D] focus:outline-none ${
                  darkMode
                    ? "border-[#E9E9E9] bg-white text-black"
                    : "border-[#818181] bg-white text-black"
                }`}
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.length > 0 ? (
                  countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))
                ) : (
                  <option>Loading...</option>
                )}
              </select>
            </div>

            {/* City */}
            <div>
              <p className="text-sm font-inter font-[400]">
                City <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter here"
                className={`border p-2 mt-1 w-full h-[39px] rounded focus:border-[#E66D3D] focus:outline-none ${
                  darkMode ? "border-[#E9E9E9]" : "border-[#818181]"
                } bg-white`}
              />
            </div>

            {/* State / Province */}
            <div>
              <p className="text-sm font-inter font-[400]">State / Province</p>
              <input
                type="text"
                placeholder="Enter here"
                className={`border p-2 mt-1 w-full h-[39px] rounded focus:border-[#E66D3D] focus:outline-none ${
                  darkMode ? "border-[#E9E9E9]" : "border-[#818181]"
                } bg-white`}
              />
            </div>

            {/* ZIP / Pincode */}
            <div>
              <p className="text-sm font-inter font-[400]">ZIP / Pincode</p>
              <input
                type="text"
                placeholder="Enter here"
                className={`border p-2 mt-1 w-full h-[39px] rounded focus:border-[#E66D3D] focus:outline-none ${
                  darkMode ? "border-[#E9E9E9]" : "border-[#818181]"
                } bg-white`}
              />
            </div>

            {/* Street Address (Full Width) */}
            <div className="sm:col-span-2 lg:col-span-2">
              <p className="text-sm font-inter font-[400]">
                Street Address <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter here"
                className={`border mt-1 p-2 w-full h-[39px] rounded focus:border-[#E66D3D] focus:outline-none ${
                  darkMode ? "border-[#E9E9E9]" : "border-[#818181]"
                } bg-white`}
              />
            </div>
          </div>
        </form>

        {/* Progress Bar */}
        <div className="mt-6">
          <div
            className="h-1 w-full rounded-full relative"
            style={{ background: darkMode ? "#E9E9E9" : "#555555" }}
          >
            <div
              className="h-full bg-[#F99F39] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <BottomNav
          onBack={() => navigate("/rate")}
          onNext={() => navigate("/review")}
        />
      </div>
    </div>
  );
};

export default PicUpload;
