import { createBrowserRouter } from "react-router-dom";
import Layout from "../ui/Layout";
import Login from "../Pages/Auth/Login";
// import UserExists from "../Pages/Auth/UserExists";
import Dashboard from "../Pages/SuperAdmin/Dashboard";
import MarketPlace from "../Pages/SuperAdmin/MarketPlace";
import Analytics from "../Pages/SuperAdmin/Analytics";
import Users from "../Pages/SuperAdmin/Users";
import Verification from "../Pages/SuperAdmin/Verification";
import Disputes from "../Pages/SuperAdmin/Disputes";
import Blogs from "../Pages/SuperAdmin/Blogs";

const browserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      { path: "/adminDashboard", element: <Dashboard /> },
      { path: "/marketplace", element: <MarketPlace /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/users", element: <Users /> },
      { path: "/verification", element: <Verification /> },
      { path: "/disputes", element: <Disputes /> },
      { path: "/blogs", element: <Blogs /> },
    ],
  },
]);

export default browserRoutes;
