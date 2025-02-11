import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to={"/"}>
          <p className="text-lg font-bold">ELEVANCE</p>
        </NavLink>
        <div className="flex space-x-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/role"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-all ${
                isActive ? "bg-green-600" : "hover:bg-gray-700"
              }`
            }
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
