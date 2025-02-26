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
import Skill from "../Pages/ProfileCreation/Skills05";
import SignUpSnd from "../Pages/ProfileCreation/SignUpSnd";
import GettingStarted from "../Pages/ProfileCreation/GettingStarted";
import Answer01 from "../Pages/ProfileCreation/Answer01";
import Answer02 from "../Pages/ProfileCreation/Answer02";
import Answer03 from "../Pages/ProfileCreation/Answer03";
import AccountSuccess from "../Pages/ProfileCreation/AccountSuccess";
import AboutYourself from "../Pages/ProfileCreation/AboutYourself";
import Title from "../Pages/ProfileCreation/Title";
import Work from "../Pages/ProfileCreation/Work";

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
      { path: "/skills", element: <Skill /> },
      { path: "/signUpSnd", element: <SignUpSnd /> },
      { path: "/gettingStarted", element: <GettingStarted /> },
      { path: "/answerOne", element: <Answer01 /> },
      { path: "/answerTwo", element: <Answer02 /> },
      { path: "/answerThree", element: <Answer03 /> },
      { path: "/success", element: <AccountSuccess /> },
      { path: "/about", element: <AboutYourself /> },
      { path: "/title", element: <Title /> },
      { path: "/work", element: <Work /> },
    ],
  },
]);

export default browserRoutes;
