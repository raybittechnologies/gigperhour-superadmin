import { createBrowserRouter } from "react-router-dom";
import Layout from "../ui/Layout";
import Login from "../Pages/Auth/Login";
import Welcome from "../Pages/User/Welcome";
import UserExists from "../Pages/Auth/UserExists";
import LandingPage from "../Pages/home/LandingPage";
import Agreement from "../Pages/ProfileCreation/Agreement";
import Role from "../Pages/ProfileCreation/Role";
import SignUp from "../Pages/ProfileCreation/SignUp";
import Experience from "../Pages/ProfileCreation/Experience01";
import Goal from "../Pages/ProfileCreation/Goal02";
import WorkPreference from "../Pages/ProfileCreation/WorkPreference03";
import Categories from "../Pages/ProfileCreation/Categories04";

const browserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/exists", element: <UserExists /> },
      { path: "/user", element: <Welcome /> },
      { path: "/role", element: <Role /> },
      { path: "/agreement", element: <Agreement /> },
      { path: "/experience", element: <Experience /> },
      { path: "/goal", element: <Goal /> },
      { path: "/work-preference", element: <WorkPreference /> },
      { path: "/categories", element: <Categories /> },
    ],
  },
]);
export default browserRoutes;
