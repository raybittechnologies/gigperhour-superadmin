import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add API call here
  };

  const googleLogin = () => {
    window.location.href =
      "http://localhost:5050/api/v1/auth/google/signup/freelancer";
  };

  const appleLogin = () => {
    window.location.href =
      "http://localhost:5050/api/v1/auth/apple/signup/freelancer";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-all"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-2 text-gray-500 text-sm w-fit mx-auto">
            OR
          </div>
        </div>

        {/* Social Login Buttons */}
        <button
          onClick={googleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md mb-4 transition-all flex items-center justify-center"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <button
          onClick={appleLogin}
          className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 rounded-md transition-all flex items-center justify-center"
        >
          <img
            src="https://www.svgrepo.com/show/452108/apple.svg"
            alt="Apple"
            className="w-5 h-5 mr-2"
          />
          Continue with Apple
        </button>
      </div>
    </div>
  );
};

export default Login;
