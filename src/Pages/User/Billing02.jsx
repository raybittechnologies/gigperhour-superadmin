import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SettingSideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSettings";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import countries from "world-countries";
const cardDetailsShimmer = (darkMode) => (
  <div className="mt-6">
    {/* Shimmer heading */}
    <div
      className={`h-6 w-48 rounded mb-4 ${
        darkMode ? "bg-gray-700" : "bg-gray-300"
      } animate-pulse`}
    ></div>

    {/* Shimmer grid for inputs - 6 fields */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`h-10 rounded ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          } animate-pulse`}
        ></div>
      ))}
    </div>

    {/* Shimmer heading for Billing Address */}
    <div
      className={`h-6 w-48 rounded mt-6 mb-4 ${
        darkMode ? "bg-gray-700" : "bg-gray-300"
      } animate-pulse`}
    ></div>

    {/* Shimmer grid for Billing Address inputs - 4 fields */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`h-10 rounded ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          } animate-pulse`}
        ></div>
      ))}
    </div>

    {/* Shimmer Save button */}
    <div
      className={`h-10 w-full sm:w-32 rounded mt-4 ${
        darkMode ? "bg-gray-700" : "bg-gray-300"
      } animate-pulse`}
    ></div>
  </div>
);

export default function Billing02() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} darkMode={darkMode} />
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Desktop Sidebar */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed top-[48px] pt-[20px] bottom-0 z-10">
          <div className="block h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>
        <div className="md:p-6 py-6 pl-4 pr-4 md:pr-7 md:pl-6 col-span-full md:ml-[220px] ml-[20px] flex-1 overflow-y-auto hide-scrollbar">
          <div
            className={`border rounded-lg px-3 pt-2 pb-4 ${
              darkMode ? "border-white" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl font-medium mb-4">Billing & Payment</h2>

            <div className="flex flex-row justify-between md:items-center mb-4 gap-3">
              <p className="font-semibold">Add a Billing Method</p>

              <button
                onClick={() => navigate("/billing01")}
                className="border border-[#E66D3D] text-[#E66D3D] px-4 md:py-1 rounded-[4px] lg:mr-[140px] hover:bg-[#E66D3D] hover:text-white transition"
              >
                Cancel
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full md:w-[55vw] gap-4 mb-4">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setSelectedMethod("card")}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0 ${
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
                  className={`${
                    darkMode ? "text-white" : "text-gray-700"
                  } text-sm md:text-base`}
                >
                  Payment Card{" "}
                  <span className="text-sm">
                    (Visa, Mastercard, American Express, Discover)
                  </span>
                </span>
              </div>

              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setSelectedMethod("paypal")}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
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
                  className={`${
                    darkMode ? "text-white" : "text-gray-700"
                  } text-sm md:text-base`}
                >
                  PayPal
                </span>
              </div>
            </div>

            {selectedMethod === "paypal" && (
              <div className="mt-3 flex flex-col items-center text-center px-4">
                <div className="flex justify-center items-center w-full h-full">
                  <DotLottieReact
                    src="src/assets/UserDashboard/Animation - billing.lottie"
                    loop
                    autoplay
                    className="w-[250px] md:w-[300px] h-[200px]"
                  />
                </div>
                <h3 className="font-[600] text-[16px] mb-2">
                  You are about to leave Elevance
                </h3>
                <p className="text-sm">
                  You will be redirected to PayPal so you can connect your
                  PayPal account to Elevance.
                </p>
                <div className="mt-6 flex justify-center">
                  <button className=" w-[200px] bg-[#E66D3D] text-white py-2 rounded-[5px] font-semibold">
                    Pay with PayPal
                  </button>
                </div>
              </div>
            )}

            {selectedMethod === "card" && (
              <div className="mt-6">
                {loading ? (
                  cardDetailsShimmer(darkMode)
                ) : (
                  <>
                    <h3 className="text-lg font-semibold mb-4">
                      Enter Card Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-[400] mb-1">
                          Card Number
                        </label>
                        <div
                          className={`relative flex items-center justify-between border bg-transparent rounded px-3 py-2 w-full ${
                            darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
                          }`}
                        >
                          <input
                            type="text"
                            placeholder="1234 1234 1234 1234"
                            className="bg-transparent flex-1 min-w-0 mr-2 focus:ring-[#E66D3D] focus:border-[#E66D3D] outline-none"
                          />
                          <div className="flex items-center space-x-2 shrink-0">
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
                              } text-[15px] whitespace-nowrap`}
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
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
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
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
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
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
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
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
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
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <label className="block mb-1">Country</label>
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className={`w-full border bg-transparent rounded-md p-2 text-left flex items-center justify-between focus:ring-[#E66D3D] focus:border-[#E66D3D] transition ${
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
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
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
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
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
                          placeholder="Enter Code"
                          className={`focus:ring-[#E66D3D] border bg-transparent rounded px-3 py-2 w-full focus:outline-none focus:border-[#E66D3D] ${
                            darkMode
                              ? "border-[#E9E9E9] text-white"
                              : "border-[#555555] text-[#555555]"
                          }`}
                        />
                      </div>
                    </div>

                    <button className="mt-4 font-[600] px-6 py-2 bg-[#E66D3D] text-white rounded hover:bg-[#cc572a] transition w-full sm:w-auto">
                      Save Details
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
