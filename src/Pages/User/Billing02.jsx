import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import countries from "world-countries";
export default function Billing02() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} darkMode={darkMode} />
      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <SideBar />
        <div className="col-span-10 pl-6">
          <div
            className={`border rounded-lg px-3 pt-2 pb-4 ${
              darkMode ? "border-white" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-medium mb-4">Billing & Payment</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Add a Billing Method</p>

              {/* Cancel Button */}
              <button
                onClick={() => navigate("/billing01")}
                className="border border-[#E66D3D] text-[#E66D3D] px-4 py-1 rounded-[2px] mr-[140px] hover:bg-[#E66D3D] hover:text-white transition"
              >
                Cancel
              </button>
            </div>

            {/* Billing Options */}
            <div className="flex justify-between items-center w-[55vw]">
              {/* Payment Card Option */}
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setSelectedMethod("card")}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
      ${
        selectedMethod === "card"
          ? "border-2 border-[#E66D3D]"
          : "border border-[#E66D3D]"
      }`}
                >
                  {selectedMethod === "card" && (
                    <div className="w-2.5 h-2.5 bg-[#E66D3D] rounded-full" />
                  )}
                </div>
                <span
                  className={`${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  Payment Card{" "}
                  <span className="text-sm ">
                    (Visa, Mastercard, American Express, Discover)
                  </span>
                </span>
              </div>

              {/* PayPal Option */}
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setSelectedMethod("paypal")}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
      ${
        selectedMethod === "paypal"
          ? "border-2 border-[#E66D3D]"
          : "border border-[#E66D3D]"
      }`}
                >
                  {selectedMethod === "paypal" && (
                    <div className="w-2.5 h-2.5 bg-[#E66D3D] rounded-full" />
                  )}
                </div>
                <span
                  className={`${darkMode ? "text-white" : "text-gray-700"}`}
                >
                  PayPal
                </span>
              </div>
            </div>

            {/* Show PayPal Animation & Description */}
            {selectedMethod === "paypal" && (
              <div className="mt-3 flex flex-col items-center">
                {/* Handshake Animation */}
                <div className="flex justify-center items-center w-full h-full">
                  <DotLottieReact
                    src="src/assets/UserDashboard/Animation - billing.lottie"
                    loop
                    autoplay
                    className="w-[300px] h-[200px]"
                  />
                </div>

                {/* Description */}
                <h3 className="text-center font-[600] text-[16px] mb-2">
                  You are about to leave Elevance
                </h3>
                <p>
                  You will be redirected to PayPal so you can connect your
                  PayPal account to Elevance.
                </p>
                <div className="mt-6 flex justify-center">
                  <button className="w-[200px] bg-[#E66D3D] text-white py-2 rounded-[5px] font-semibold">
                    Pay with PayPal
                  </button>
                </div>
              </div>
            )}

            {/* Show Card Payment Form When Payment Card is Selected */}
            {selectedMethod === "card" && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Enter Card Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      Card Number
                    </label>
                    <div
                      className={`relative flex  border items-center bg-transparent rounded px-3 py-2 w-full ${
                        darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        className="bg-transparent flex-1 focus:ring-[#E66D3D] focus:border-[#E66D3D] outline-none"
                      />
                      <div className="flex items-center space-x-2">
                        <img
                          src={
                            darkMode
                              ? "src/assets/UserDashboard/gala_secure-dark.svg"
                              : "src/assets/UserDashboard/gala_secure.svg"
                          }
                          alt="Secured"
                          className="w-5 h-5"
                        />
                        <span
                          className={`${
                            darkMode ? "text-white" : "text-gray-500"
                          } text-[15px]`}
                        >
                          Secured
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      Expiration Month
                    </label>
                    <input
                      type="text"
                      placeholder="MM"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      Expiration Year
                    </label>
                    <input
                      type="text"
                      placeholder="YY"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      CVV / CVC
                    </label>
                    <input
                      type="text"
                      placeholder="3 digits"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                </div>

                <h3 className="text-lg font-[500] mt-6 mb-4">
                  Billing Address
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-full">
                    <label className="block mb-1 ">Country</label>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full border bg-transparent rounded-md p-2 text-left flex items-center justify-between
       focus:ring-[#E66D3D] focus:border-[#E66D3D] transition
      ${
        darkMode
          ? "border-[#E9E9E9] text-white"
          : "border-[#555555] text-[#555555]"
      }`}
                    >
                      {selectedCountry || "Select Country"}
                      <img
                        src={
                          darkMode
                            ? "src/assets/UserDashboard/arrow-light.svg"
                            : "src/assets/UserDashboard/arror dark.svg"
                        }
                        alt="Dropdown Icon"
                        className={`w-3 h-3 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        role="listbox"
                        className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-[150px] overflow-auto"
                      >
                        {countries.map((country) => (
                          <div
                            key={country.cca2}
                            role="option"
                            onClick={() => {
                              setSelectedCountry(country.name.common);
                              setIsOpen(false);
                            }}
                            className={`p-2 cursor-pointer transition-colors duration-150 ${
                              selectedCountry === country.name.common
                                ? "bg-[#E66D3D] text-white"
                                : "hover:bg-[#E66D3D] hover:text-white text-black"
                            }`}
                          >
                            {country.name.common}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Address"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter City Name"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[400] mb-1">
                      Zip / Pincode
                    </label>
                    <input
                      type="text"
                      placeholder="Enter  Code"
                      className={`focus:ring-[#E66D3D] border  focus:outline-none focus:border-[#E66D3D] bg-transparent rounded px-3 py-2 w-full ${
                        darkMode
                          ? "border-[#E9E9E9] text-white"
                          : "border-[#555555] text-[#555555]"
                      }`}
                    />
                  </div>
                </div>

                {/* Save Button */}
                <button className="mt-4  font-[600] px-6 py-2 bg-[#E66D3D] text-white rounded hover:bg-[#cc572a] transition">
                  Save Details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
