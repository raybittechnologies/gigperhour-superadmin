import { NavLink } from "react-router-dom";

const Role = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Select Your Role
      </h2>
      <div className="border-t-2 border-gray-300 my-4"></div>

      <div className="space-y-4">
        {/* Freelancer Card */}
        <NavLink to={"/signUp"} state={{ type: "freelancer" }}>
          <div className="p-6 bg-blue-100 hover:bg-blue-200 rounded-lg shadow-md cursor-pointer transition-all">
            <h3 className="text-xl font-medium text-blue-700 text-center">
              Freelancer
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Find work and collaborate on projects.
            </p>
          </div>
        </NavLink>

        {/* Client Card */}
        <NavLink to={"/signUp"} state={{ type: "client" }}>
          <div className="p-6 bg-green-100 hover:bg-green-200 rounded-lg shadow-md cursor-pointer transition-all">
            <h3 className="text-xl font-medium text-green-700 text-center">
              Client
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Hire freelancers and get your work done.
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Role;
