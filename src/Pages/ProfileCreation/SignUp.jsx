import { useLocation } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const { state } = useLocation();
  console.log(state);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "India",
    receiveEmails: false,
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
    window.location.href =
      "http://localhost:5050/api/v1/auth/google/signup/client";
  };

  const appleLogin = async () => {
    window.location.href =
      "http://localhost:5050/api/v1/auth/apple/signup/freelancer";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">SIGN UP</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password (8 or more characters)"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="receiveEmails"
              checked={formData.receiveEmails}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span>
              Send me helpful emails to find rewarding work and job leads.
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span>
              Yes, I understand and agree to the Upwork Terms of Service,
              including the User Agreement and Privacy Policy.
            </span>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <button
            onClick={googleLogin}
            className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 mr-2"
          >
            GOOGLE
          </button>
          <button
            onClick={appleLogin}
            className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800"
          >
            APPLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
