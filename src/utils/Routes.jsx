import { createBrowserRouter } from "react-router-dom";
import Layout from "../ui/Layout";
import Login from "../Pages/Auth/Login";
import UserExists from "../Pages/Auth/UserExists";
import LandingPage from "../Pages/home/LandingPage";
import Agreement from "../Pages/ProfileCreation/Agreement";
import Role from "../Pages/ProfileCreation/Role";
import SignUp from "../Pages/ProfileCreation/SignUp";

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
import WorkExperience07 from "../Pages/ProfileCreation/Work07";
import Education08 from "../Pages/ProfileCreation/Education08";
import Languages from "../Pages/ProfileCreation/Languages";
import Bio from "../Pages/ProfileCreation/bio";
import Rate from "../Pages/ProfileCreation/Rate";
import PicUpload from "../Pages/ProfileCreation/PicUpload";
import Review from "../Pages/ProfileCreation/Review";
import FinishProfile from "../Pages/ProfileCreation/FinishProfile";
// -----------------------------------User Dashboard Routes-----------------------------------
import UserDashBoard from "../Pages/User/DashBoard";
import ConnectDetails from "../Pages/User/ConnectDetails";
import BuyConnects from "../Pages/User/BuyConnects";
import SavedJobs from "../Pages/User/SavedJobs";
import Proposals from "../Pages/User/Proposals";
import ApplyJob from "../Pages/User/ApplyJob-01";
import ProposalSuccess from "../Pages/User/ProposalSuccess";
import JobHourly from "../Pages/User/JobHourly";
import ProposalSuccessHourly from "../Pages/User/ProposalSuccessHourly";
import ContractsActive from "../Pages/User/ContractsActive";
import ContractHistory from "../Pages/User/ContractHistory";
import HourlyWork from "../Pages/User/HourlyWork";
import ContractDetails from "../Pages/User/ContractDetails";
import UserProfile from "../Pages/User/UserProfile";
import UserRole from "../Pages/User/UserRole";
import UserLanguage from "../Pages/User/UserLanguage";
import UserWorking from "../Pages/User/UserWorking";
import Portfolio from "../Pages/User/portfolio";
import WorkHistory from "../Pages/User/WorkHistory";
import Projects from "../Pages/User/Projects";
import Testimonials from "../Pages/User/Testimonials";
import Certifications from "../Pages/User/Certifications";
import Employment from "../Pages/User/Employment";
import UserExperience from "../Pages/User/UserExperience";
import ProfileSetting from "../Pages/User/ProfileSetting";
import Contact from "../Pages/User/Contact";
import MemberShip from "../Pages/User/MemberShip";
import GetPaid from "../Pages/User/GetPaid";
import Security from "../Pages/User/Security";
import Teams from "../Pages/User/Teams";
import Notifications from "../Pages/User/Notifications";
import Billing01 from "../Pages/User/Billing01";
import Billing02 from "../Pages/User/Billing02";
import Dashboard from "../Pages/ClientScreens/Dashboard";
import ClientSuccess from "../Pages/ClientScreens/ClientSuccess";
import PostJob from "../Pages/ClientScreens/PostJob";
import JobLong01 from "../Pages/ClientScreens/JobLong01";
// -------------------------------------------Client Routes--------------------------

const browserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/exists", element: <UserExists /> },
      { path: "/role", element: <Role /> },
      { path: "/agreement", element: <Agreement /> },

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
      { path: "/work", element: <WorkExperience07 /> },
      { path: "/education", element: <Education08 /> },
      { path: "/languages", element: <Languages /> },
      { path: "/bio", element: <Bio /> },
      { path: "/rate", element: <Rate /> },
      { path: "/picUpload", element: <PicUpload /> },
      { path: "/review", element: <Review /> },
      { path: "/finish", element: <FinishProfile /> },

      //-----------------------------------------User Dashboard Routes-----------------------------------------------
      { path: "/dashboard", element: <UserDashBoard /> },
      { path: "/details", element: <ConnectDetails /> },
      { path: "/connects", element: <BuyConnects /> },
      { path: "/savedJobs", element: <SavedJobs /> },
      { path: "/proposals", element: <Proposals /> },
      { path: "/ApplyJob", element: <ApplyJob /> },
      { path: "/proposalSuccess", element: <ProposalSuccess /> },
      { path: "/jobHourly", element: <JobHourly /> },
      { path: "/SuccessHourly", element: <ProposalSuccessHourly /> },
      { path: "/activeContracts", element: <ContractsActive /> },
      { path: "/contractHistory", element: <ContractHistory /> },
      { path: "/contractDetails", element: <ContractDetails /> },
      { path: "/hourlyWork", element: <HourlyWork /> },
      { path: "/profile", element: <UserProfile /> },
      { path: "/userRole", element: <UserRole /> },
      { path: "/userLanguage", element: <UserLanguage /> },
      { path: "/working", element: <UserWorking /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/workHistory", element: <WorkHistory /> },
      { path: "/projects", element: <Projects /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/certifications", element: <Certifications /> },
      { path: "/employment", element: <Employment /> },
      { path: "/userExperience", element: <UserExperience /> },
      { path: "/profileSetting", element: <ProfileSetting /> },
      { path: "/contact", element: <Contact /> },
      { path: "/memberShip", element: <MemberShip /> },
      { path: "/getPaid", element: <GetPaid /> },
      { path: "/security", element: <Security /> },
      { path: "/teams", element: <Teams /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/billing01", element: <Billing01 /> },
      { path: "/billing02", element: <Billing02 /> },

      //  --------------------------------------client routes---------------------------------
      { path: "/clientSuccess", element: <ClientSuccess /> },
      { path: "/Clientdashboard", element: <Dashboard /> },
      { path: "/postJob", element: <PostJob /> },
      { path: "/longTermJob01", element: <JobLong01 /> },
    ],
  },
]);

export default browserRoutes;
