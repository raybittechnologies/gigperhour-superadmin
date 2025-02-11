import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { createProfile } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "India",
  "Australia",
  "Germany",
  "France",
  "Pakistan",
  "Bangladesh",
];

const Agreement = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [token, setToken] = useState("");
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      setToken(token);
      try {
        const tokenData = jwtDecode(token);
        setUser(tokenData);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const handleCreateProfile = () => {
    createProfile(
      {
        profilePicture: user.picture,
        country: selectedCountry,
        name: user.name,
      },
      token
    ).then(
      () => {
        navigate("/experience");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
          {/* User Info */}
          <img
            src={user.picture}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            {user.name}
          </h2>
          <p className="text-gray-600 text-sm">{user.email}</p>
          {!user.name && (
            <div className="flex flex-col gap-4 p-4 border rounded-lg shadow">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                placeholder="First Name"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                placeholder="Last Name"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Country Dropdown */}
          <div className="mt-4 text-left">
            <label className="block text-gray-700 font-medium mb-1">
              Select Your Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Email Notifications Checkbox */}
          <div className="mt-4 text-left">
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                checked={receiveEmails}
                onChange={() => setReceiveEmails(!receiveEmails)}
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>
                Send me helpful emails to find rewarding work and job leads.
              </span>
            </label>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="mt-4 text-left">
            <label className="flex items-start space-x-2 text-gray-700">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>
                Yes, I understand and agree to the{" "}
                <a
                  href="https://www.upwork.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Upwork Terms of Service
                </a>
                , including the User Agreement and Privacy Policy.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleCreateProfile}
            disabled={!agreeToTerms || !selectedCountry}
            className={`mt-6 w-full px-4 py-2 rounded-lg text-white font-medium transition ${
              agreeToTerms
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      ) : (
        <p className="text-gray-700 text-lg font-medium">
          Loading user data...
        </p>
      )}
    </div>
  );
};

export default Agreement;
