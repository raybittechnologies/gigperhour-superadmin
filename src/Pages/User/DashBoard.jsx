import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import MobileSidebar from "../../components/UserDashBoard/MobileSidebar";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BsCCircle } from "react-icons/bs";
import { BsFolderPlus } from "react-icons/bs";
import { MdOutlineAddLocation } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Star, CheckCircle, MessageSquare, Heart } from "lucide-react";

const jobs = [
  {
    title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
    rating: 5.0,
    review: "Above and exceptional work",
    freelancerReview: "Above and exceptional work",
    freelancer: "Basit Bashir",
    price: "$100",
    duration: "Feb 2025 - Mar 2025",
    type: "Fixed Price · Expert · Est. Budget: $21",
    description:
      "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design...",
    skills: ["Figma", "Web Design", "Responsive design", "Adobe Illustrator"],
    verified: true,
    location: "Greece",
    proposals: "5 to 15",
  },
  {
    title: "Landing Page UI/UX Design",
    rating: 5.0,
    review: "Above and exceptional guy to work with.",
    freelancerReview:
      "Above and exceptional guy to work with . On time payment and good communication with Micheal .. exceptional guy to work with",
    freelancer: "Basit Bashir",
    price: "$100",
    duration: "Feb 2025 - Mar 2025",
    type: "Hourly Rate · Intermediate · Est. Budget: $30/hr",
    description:
      "Looking for a skilled designer to craft an engaging and visually appealing landing page...",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
    verified: true,
    location: "United States",
    proposals: "10 to 20",
  },
  {
    title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
    rating: 5.0,
    review: "Above and exceptional work",
    freelancer: "Basit Bashir",
    freelancerReview: "Above and exceptional work",
    price: "$100",
    duration: "Feb 2025 - Mar 2025",
    type: "Fixed Price · Expert · Est. Budget: $21",
    description:
      "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design...",
    skills: ["Figma", "Web Design", "Responsive design", "Adobe Illustrator"],
    verified: true,
    location: "Greece",
    proposals: "5 to 15",
  },
  {
    title: "Figma Tablet Responsive Design – Urgent (Complete Today)",
    rating: 5.0,
    review: "Above and exceptional work",
    freelancer: "Basit Bashir",
    freelancerReview: "Above and exceptional work",
    price: "$100",
    duration: "Feb 2025 - Mar 2025",
    type: "Fixed Price · Expert · Est. Budget: $21",
    description:
      "Passionate UI/UX Designer with a keen eye for aesthetics and a user-centric approach to design...",
    skills: ["Figma", "Web Design", "Responsive design", "Adobe Illustrator"],
    verified: true,
    location: "Greece",
    proposals: "5 to 15",
  },
];

const users = [
  { name: "Basit Bashir", role: "Product Designer", progress: 75 },
];

const JobCardSkeleton = ({ darkMode }) => (
  <div
    className={`p-4 rounded-lg shadow-lg border animate-pulse ${
      darkMode ? "bg-[#1c1c1c] border-[#333]" : "bg-white border-[#ddd]"
    }`}
  >
    <div
      className={`h-4 rounded w-1/4 mb-2 ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    ></div>
    <div
      className={`h-6 rounded w-3/4 mb-3 ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    ></div>
    <div
      className={`h-4 rounded w-1/2 mb-2 ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    ></div>
    <div
      className={`h-4 rounded w-full mb-2 ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    ></div>
    <div className="flex gap-2 mt-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`h-6 w-16 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
      ))}
    </div>
    <div
      className={`h-4 rounded w-1/3 mt-4 ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    ></div>
  </div>
);

const RightSectionSkeleton = ({ darkMode }) => (
  <div className="space-y-4 col-span-3">
    {/* Profile Card Skeleton */}
    <div
      className={`shadow-md p-4 rounded-md hidden md:block animate-pulse ${
        darkMode ? "bg-[#1c1c1c] border border-[#333]" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`w-12 h-12 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div>
          <div
            className={`h-4 rounded w-24 mb-2 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`h-3 rounded w-16 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></div>
        </div>
      </div>
      <div className="mt-4">
        <div
          className={`h-3 rounded w-20 mb-2 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div className="flex items-center gap-2 mt-1">
          <div
            className={`w-full h-2 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`h-3 w-8 rounded ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></div>
        </div>
      </div>
    </div>

    {/* Promote with ads Skeleton */}
    <div
      className={`shadow-md p-4 rounded-md hidden md:block animate-pulse ${
        darkMode ? "bg-[#1c1c1c] border border-[#333]" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          className={`h-4 rounded w-32 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`h-4 w-4 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
      </div>
      <div className="mt-4 space-y-2">
        <div
          className={`h-3 rounded w-24 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`h-3 rounded w-16 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`h-3 rounded w-20 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
      </div>
    </div>

    {/* Connects Skeleton */}
    <div
      className={`shadow-md p-4 rounded-md hidden md:block animate-pulse ${
        darkMode ? "bg-[#1c1c1c] border border-[#333]" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          className={`h-4 rounded w-20 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`h-4 w-4 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
      </div>
      <div className="mt-2 flex justify-center gap-2">
        <div
          className={`h-3 rounded w-16 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`h-3 rounded w-10 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`h-3 rounded w-16 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        ></div>
      </div>
    </div>

    {/* Sections Skeleton */}
    <div
      className={`shadow-md p-2 rounded-md hidden md:block animate-pulse ${
        darkMode ? "bg-[#1c1c1c] border border-[#333]" : "bg-white"
      }`}
    >
      {[...Array(3)].map((_, i) => (
        <div key={i} className="py-2">
          <div
            className={`h-3 rounded w-32 mb-2 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></div>
        </div>
      ))}
    </div>
  </div>
);

const UserDashBoard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory] = useState("Jobs");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Best Matches");
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [editPopupVisible, setEditPopupVisible] = useState(false);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [tokens, setTokens] = useState(11);
  const maxTokens = 21;
  const maxConnects = 21;
  const [selected, setSelected] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const isAnyPopupOpen = isPopupOpen || editPopupVisible || selectedJob;
  const dummyRating = 4;
  const [isOpenJobs, setIsOpenJobs] = useState(true);
  const [isFixed, setIsFixed] = useState(0);
  const [fixedAmount, setFixedAmount] = useState(0);
  const [hourlyAmount, setHourlyAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  const toggleDropdown = () => {
    setIsOpenJobs((prev) => !prev);
  };
  useEffect(() => {
    if (isAnyPopupOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isAnyPopupOpen]);

  useEffect(() => {
    setIsFixed(false);
    setFixedAmount(500);
    setHourlyAmount(20);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedJob(null);
  };
  const increaseTokens = () => {
    if (tokens < maxTokens) setTokens(tokens + 1);
  };

  const decreaseTokens = () => {
    if (tokens > 1) setTokens(tokens - 1);
  };
  const handleTabChange = (tab) => {
    if (tab === "Saved") {
      navigate("/savedJobs"); // Redirect to saved jobs screen
    } else {
      setSelectedTab(tab);
    }
  };
  const toggleShowAllJobs = () => {
    setShowAllJobs((prev) => !prev);
  };
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = ["Preferences", "Proposals", "Project Catalog"];

  const slides = [
    {
      title: "Upgrade your Profile to get Connects",
      description: "Get 100 monthly connects and more with Freelancer Plus",
      btnText: "Boost Now",
      imgSrc: "src/assets/Chasing Good Grades 3D Illustration.svg",
    },
    {
      title: "Premium Access to More Clients",
      description: "Stand out and get hired faster with Freelancer Plus",
      btnText: "Upgrade Now",
      imgSrc: "src/assets/Chasing Good Grades 3D Illustration.svg",
    },
    {
      title: "Increase Your Earnings",
      description: "Get exclusive perks and higher visibility on projects",
      btnText: "Join Now",
      imgSrc: "src/assets/Chasing Good Grades 3D Illustration.svg",
    },
  ];
  const openJobs = [
    { title: "UI UX Figma Designer", price: "Fixed Price" },
    { title: "UI UX Figma Designer", price: "Fixed Price" },
    { title: "UI UX Figma Designer", price: "Fixed Price" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      className={`min-h-screen relative  ${
        darkMode ? "bg-black text-white" : "text-[#333333] "
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="user" />
      <div className=" flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* Sidebar (Left) */}
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Mobile Sidebar - shown only below 768px */}
        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        <div className="md:ml-[200px] ml-[9px]  grid grid-cols-12  flex-1 overflow-y-auto p-6 hide-scrollbar">
          {/* Main Content (Center) */}
          <main className="md:col-span-9  col-span-full pl-4 pr-4 pb-4 w-full ">
            {/* Header */}
            <div className="w-full hidden md:block ">
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={index} className="pb-4 pl-2 pr-2">
                    <div className="bg-[#FFCBC6] rounded-lg p-3 flex items-center justify-between shadow-md  ">
                      {/* Text Section */}
                      <div>
                        <h3 className="text-[20px] font-[400] font-inter text-black">
                          {slide.title}
                        </h3>
                        <p className="text-black text-[14px] mt-1 ">
                          {" "}
                          {slide.description} <br />
                          <span className="text-[#E66D3D] ">
                            Freelancer Plus
                          </span>
                        </p>
                        <button className="mt-4 bg-[#E66D3D] text-white px-4 py-2 rounded-md font-medium  transition w-[150px]">
                          {slide.btnText}
                        </button>
                      </div>

                      {/* Image Section */}
                      <img
                        src={slide.imgSrc}
                        alt="Promo Image"
                        className="w-24 h-auto"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="md:hidden grid grid-cols-3 items-center gap-4 py-3">
              {/* Column 1 - Connect */}
              <Link
                to="/details"
                className="flex flex-col items-start cursor-pointer"
              >
                <BsCCircle className="w-6 h-6 mb-1" />
                <h2 className="text-[15px] font-semibold">Connect</h2>
              </Link>

              {/* Column 2 - Buy Connects */}
              <div className="flex flex-col items-start">
                <BsFolderPlus className="w-6 h-6  mb-1" />
                <h2 className="text-[15px] font-semibold ">Buy Connects</h2>
              </div>
              {/* Column 3 - Proposals */}
              <div className="flex flex-col items-start">
                <img
                  src={
                    darkMode
                      ? "src/assets/UserDashboard/zap-white.svg"
                      : "src/assets/UserDashboard/zap-black.svg"
                  }
                  className="w-7 h-7 mb-1"
                  alt="Zap Icon"
                />
                <h2 className="text-[15px] font-semibold">Proposals</h2>
              </div>
            </div>

            <div
              className={`flex items-center border ${
                darkMode ? "border-white" : "border-black"
              } rounded-[5px] overflow-hidden w-full relative bg-transparent mb-5`}
            >
              {/* Search Icon */}
              <div className="px-3">
                <img
                  src={
                    darkMode
                      ? "src/assets/search-dark.svg"
                      : "src/assets/search-01.svg"
                  }
                  alt="Search"
                  className="w-5 h-5"
                />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for jobs"
                className="flex-1 px-2 py-2 outline-none text-gray-700 bg-transparent"
              />
              {/* Dropdown */}
              <div
                className=" items-center px-3 border-l border-black cursor-pointer relative hidden md:flex"
                onClick={() => setIsOpen(!isOpen)}
              >
                <ChevronDown
                  className={`w-4 h-4 text-[#F09060] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="ml-2 ">{selectedCategory}</span>

                {/* Dropdown Menu */}
                {isOpen && (
                  <ul className="absolute right-0 top-full mt-1 w-32 bg-white border rounded-md shadow-lg"></ul>
                )}
              </div>
            </div>
            <h3 className="font-inter font-[400] text-[24px] mb-7">
              Explore Jobs
            </h3>
            {/* Filter Bar */}
            <div
              className={`flex space-x-6 border-b-[0.5px] ${
                darkMode ? "border-[#555555]" : "border-[#555555]"
              } mb-4`}
            >
              {["Best Matches", "Most Recent", "Saved"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`pb-2 md:text-lg text-[13px] font-inter font-[400] ${
                    selectedTab === tab
                      ? `border-b-2 ${
                          darkMode
                            ? "border-white text-white"
                            : "border-[#555555] text-black"
                        }`
                      : `${darkMode ? "text-white" : "text-[#555555]"}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Job Listings */}

            <div className="space-y-6 w-full">
              {loading
                ? // Show 3 shimmer cards while loading
                  [...Array(3)].map((_, i) => (
                    <JobCardSkeleton darkMode={darkMode} key={i} />
                  ))
                : jobs.map((job, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg shadow-lg border ${
                        darkMode
                          ? "bg-transparent text-white border-white"
                          : "bg-white text-black "
                      }`}
                      onClick={() => handleJobClick(job)}
                    >
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <p
                          className={`text-[#555555] text-sm font-[300] ${
                            darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                          }`}
                        >
                          {" "}
                          Posted 1 hour ago
                        </p>
                        <div className="flex space-x-3">
                          <MessageSquare
                            size={18}
                            className="text-gray-400 cursor-pointer"
                          />
                          <Heart
                            size={18}
                            className="cursor-pointer font-[300]"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[22px] font-[400] font-inter mt-2">
                        {job.title}
                      </h3>

                      {/* Budget & Type */}

                      <p
                        className={`text-[#555555] font-[300] text-sm mt-1 ${
                          darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                        }`}
                      >
                        {job.type}
                      </p>

                      {/* Description */}
                      <p className="font-[400] text-[15px] mt-3">
                        {job.description}{" "}
                        <span className="text-[#E66D3D] font-semibold cursor-pointer">
                          more
                        </span>
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-[#D9D9D9] text-[#555555] font-[300] px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex flex-wrap items-center mt-4 text-gray-300 text-sm">
                        {job.verified && (
                          <>
                            <CheckCircle size={16} className="text-gray-400" />
                            <span
                              className={`ml-2 text-[#555555] font-[300] ${
                                darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                              }`}
                            >
                              Payment Verified
                            </span>
                          </>
                        )}

                        <div className="flex ml-4 flex-wrap sm:flex-nowrap">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="text-[#FCE15A] fill-[#FCE15A]"
                            />
                          ))}
                        </div>

                        <span
                          className={`ml-4 text-[#555555] font-[300] ${
                            darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                          }`}
                        >
                          $7k+ spent
                        </span>

                        <span
                          className={`flex items-center ml-4 text-[#555555] font-[300] ${
                            darkMode ? "text-[#E9E9E9]" : " text-[#555555] "
                          }`}
                        >
                          <MdOutlineAddLocation size={16} className="mr-1" />
                          {job.location}
                        </span>
                      </div>

                      {/* Proposals */}
                      <p className="font-[400] text-sm mt-3">
                        Proposals:{" "}
                        <span className="text-black">{job.proposals}</span>
                      </p>
                    </div>
                  ))}
            </div>
            {/* Modal (Popup) */}
            {selectedJob && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10]">
                {/* Modal Container (Scrollable) */}
                <div className="bg-white w-full max-w-[1200px] rounded-lg mt-[65px] shadow-lg relative p-5 pl-7 overflow-auto h-[500px]">
                  <div className="w-full">
                    {/* Header */}
                    <div className="pb-2 flex flex-row justify-between items-start sm:items-center gap-2">
                      <h3 className="text-lg md:text-[22px] font-[400] text-[#333333]">
                        {selectedJob.title}
                      </h3>
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={closeModal}
                      >
                        <img
                          src="src/assets/UserDashboard/cancel-02.svg"
                          className="flex-shrink-0"
                        />
                      </button>
                    </div>

                    {/* Job Details */}
                    <div className="text-gray-500 text-sm flex flex-wrap gap-x-4 md:gap-x-8 gap-y-2 mt-2">
                      <span>1hr ago</span>
                      <span className="flex gap-2 items-center">
                        <img
                          src="src/assets/location-add-02.svg"
                          className="w-[15px] h-[15px]"
                          alt="location"
                        />
                        Worldwide
                      </span>

                      <p className="flex items-center">
                        {isFixed ? (
                          <>
                            Fixed:{" "}
                            <span className="text-[#E66D3D] ml-1">
                              ${fixedAmount}
                            </span>
                          </>
                        ) : (
                          <>
                            Hourly Rate:{" "}
                            <span className="text-[#E66D3D] ml-1">
                              ${hourlyAmount}/hr
                            </span>
                          </>
                        )}
                      </p>

                      <span className="flex gap-2 items-center">
                        <img
                          src="src/assets/UserDashboard/developer.svg"
                          className="w-[15px] h-[15px]"
                          alt="level"
                        />
                        Intermediate
                      </span>

                      <p className="flex items-center">
                        Tokens required for Proposal:{" "}
                        <span className="text-[#E66D3D] ml-1">11</span>
                      </p>
                    </div>

                    {/* Availability */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 text-gray-500">
                      <p>
                        Available Tokens:{" "}
                        <span className="text-[#E66D3D]">21</span>
                      </p>
                      <p>One-Time Project</p>
                    </div>

                    {/* Actions */}
                    <div className="border-b pt-4 pb-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 -mx-4 px-4">
                      <div className="flex flex-row items-start sm:items-center gap-3">
                        <Link to={isFixed ? "/applyJob" : "/jobHourly"}>
                          <button className="bg-[#E66D3D] w-full sm:w-[146px] font-[600] text-white px-4 py-2 rounded">
                            Apply
                          </button>
                        </Link>
                        <button className="border text-[#333333] border-[#E9E9E9] font-[600] flex gap-2 px-4 py-2 rounded">
                          <img
                            src="src/assets/UserDashboard/heart.svg"
                            className="w-[18px] h-[18px] mt-1"
                          />
                          Save for later
                        </button>
                      </div>
                      <p className="text-[#D84839] flex gap-2">
                        <img
                          src="src/assets/UserDashboard/flag-02.svg"
                          className="w-[18px] mt-[3px]"
                        />
                        Flag inappropriate
                      </p>
                    </div>

                    {/* Job Description */}
                    <p className="border-b text-[#333333] border-[#E9E9E9] pb-4 -mx-4 px-4">
                      I am looking for an individual who can create interactive
                      designs for me in Figma.
                      <br /> Need clean designs and responsive also
                    </p>

                    {/* Skills */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-[#333333]">
                        Required Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedJob.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-[#D9D9D9] px-3 py-1 rounded-[21px] text-sm font-[300]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Activity & Client Info */}
                    <div className="mt-4 border-t border-b pt-4 pb-4 flex flex-wrap md:flex-nowrap gap-x-6 gap-y-4">
                      {/* Activity */}
                      <div className="md:w-1/2 w-full">
                        <h3 className="font-semibold text-[#333333]">
                          Activity on this job:
                        </h3>
                        <div className="text-[15px] mt-2 text-[#333333] space-y-1">
                          <div>• Proposals: 15 to 20</div>
                          <div>• Interviewing: 0</div>
                          <div>• Invites sent: 0</div>
                          <div>• Unanswered invites: 0</div>
                        </div>
                        <p className="text-[#333333] text-[15px] mt-2">
                          Upgrade your membership to see the bid range
                          <span className="text-[#E66D3D] font-[500] underline cursor-pointer">
                            {" "}
                            Upgrade Now
                          </span>
                        </p>
                      </div>

                      {/* Client Info */}
                      <div className="md:w-1/2 w-full">
                        <h3 className="font-semibold text-[#333333]">
                          About the client:
                        </h3>
                        <div className="text-[15px] mt-2 text-[#333333] grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                          <div>
                            • Payment method{" "}
                            <span className="text-red-500">not verified</span>
                          </div>
                          <div>• Phone number verified ✅</div>
                          <div>• 41 jobs posted</div>
                          <div>• 35% hire rate, 10 open jobs</div>
                          <div>• Member since Mar 5, 2025</div>
                          <div>• ⭐ 4.00 of 8 reviews</div>
                          <div>• 💰 $1.8K total spent</div>
                          <div>• 15 hires, 5 active</div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Jobs */}
                    <div className="pb-3">
                      <h2 className="text-lg font-semibold mb-2 text-[#333333]">
                        Client’s Recent History (10):
                      </h2>
                      <div
                        className="mb-4 border-b pb-4 flex gap-3 items-center cursor-pointer text-[#333333]"
                        onClick={toggleDropdown}
                      >
                        Jobs in Progress
                        <img
                          src="src/assets/arrow-up.svg"
                          className={`mt-1 transition-transform ${
                            isOpenJobs ? "rotate-180" : ""
                          }`}
                          alt="Dropdown arrow"
                        />
                      </div>

                      {isOpenJobs && (
                        <>
                          {jobs
                            .slice(0, showAllJobs ? jobs.length : 3)
                            .map((job, index) => (
                              <div
                                key={index}
                                className="pt-2 pb-4 flex flex-col md:flex-row justify-between gap-4"
                              >
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-[#E66D3D] text-[17px] font-semibold">
                                    {job.title}
                                  </h3>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {Array(5)
                                      .fill(null)
                                      .map((_, i) => (
                                        <Star
                                          key={i}
                                          size={16}
                                          className={`mt-[4px] ${
                                            i < dummyRating
                                              ? "text-[#FCE15A] fill-[#FCE15A]"
                                              : "text-gray-300"
                                          }`}
                                        />
                                      ))}
                                    <span className="font-bold">
                                      {dummyRating}
                                    </span>
                                    <p className="text-gray-700 ml-4 break-words">
                                      {job.freelancerReview}
                                    </p>
                                  </div>

                                  <div className="flex flex-wrap gap-4 mt-2">
                                    <p className="text-gray-600">
                                      To Freelancer:{" "}
                                      <span className="text-[#E66D3D] font-[400] underline">
                                        {job.freelancer}
                                      </span>
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      <p className="text-gray-700">
                                        {job.review}
                                      </p>
                                      {Array(5)
                                        .fill(null)
                                        .map((_, i) => (
                                          <Star
                                            key={i}
                                            size={16}
                                            className={`mt-[4px] ${
                                              i < dummyRating
                                                ? "text-[#FCE15A] fill-[#FCE15A]"
                                                : "text-gray-300"
                                            }`}
                                          />
                                        ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-gray-500 text-sm whitespace-nowrap">
                                  <p>Fixed Price: {job.price}</p>
                                  <p>{job.duration}</p>
                                </div>
                              </div>
                            ))}
                          {jobs.length > 3 && (
                            <div className="mt-4">
                              <button
                                onClick={toggleShowAllJobs}
                                className="text-[#E66D3D] underline"
                              >
                                {showAllJobs
                                  ? "View Less"
                                  : `View More (${jobs.length - 3})`}
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Other Open Jobs */}
                    <div>
                      <h2 className="text-lg font-semibold mb-2 mt-2 border-t pt-3 text-[#333333]">
                        Other Open Jobs by Client ({openJobs.length}):
                      </h2>
                      {openJobs.map((job, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row gap-3 mb-2"
                        >
                          <h3 className="text-[#E66D3D] underline">
                            {job.title}
                          </h3>
                          <p className="text-sm text-[#333333]">{job.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Right Section (Profile & Ads) */}
          {loading ? (
            <RightSectionSkeleton darkMode={darkMode} />
          ) : (
            <div className="space-y-4  col-span-3 ">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-4 rounded-md hidden md:block  [@media(max-width:932px)]:p-2"
                >
                  {/* User Profile */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full">
                      <img
                        src="src/assets/profileImage.jpeg"
                        className="rounded-full flex-shrink-0"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#E66D3D]">
                        {user.name}
                      </h3>
                      <p className="text-sm text-[#333333]">{user.role}</p>
                    </div>
                  </div>

                  {/* Profile Completion */}
                  <div className="mt-4">
                    <p className="text-xs text-[#E66D3D]">
                      Complete your profile
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-full bg-[#555555] h-2 flex items-center rounded-full">
                        <div
                          className="h-2 rounded-full bg-[#F99F39]"
                          style={{ width: `${user.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-700">{user.progress}%</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* promote ads  */}
              <div className="bg-white shadow-md p-4 rounded-md hidden md:block [@media(max-width:932px)]:p-2">
                <div className="flex justify-between items-center cursor-pointer">
                  <h4 className="font-semibold text-[#333333] font-inter">
                    Promote with ads
                  </h4>
                  <span className="text-gray-500">
                    <img src="src/assets/arrow-down-01.svg" />{" "}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between items-center text-[#333333]">
                    <div className="">
                      <p className="text-sm font-[400] font-inter">
                        Hiring Status
                      </p>
                      <p className="text-xs text-[#555555]">off</p>
                      {/* Popup */}
                      {isPopupOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10] ">
                          <div className="bg-white rounded-lg shadow-lg p-6 w-[700px] ">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-[22px]  text-[black] font-inter font-[400]">
                                Turn on Hiring badge
                              </h3>
                              <button onClick={() => setPopupOpen(false)}>
                                <img src="src/assets/UserDashboard/cancel-02.svg" />
                              </button>
                            </div>

                            {/* Description */}
                            <p className="text-[14px] text-[black] font-[400]  mb-4">
                              Make it easier for clients to find you by enabling
                              the Hiring Badge! This feature highlights your
                              profile, helping you stand out in searches.
                              Freelancers who use the badge can receive up to
                              70% more job invites.
                            </p>

                            {/* Maximum Budget Section */}
                            <div className="flex items center gap-8">
                              <div>
                                <div className="flex justify-between items-center mb-4">
                                  <div>
                                    <h4 className="font-semibold text-[17px] flex items-center gap-5 text-[#000000] mb-2">
                                      Maximum Budget
                                      <img src="src/assets/UserDashboard/bubble-chat-question.svg" />
                                    </h4>
                                    <p className="text-sm font-[300] text-[#555555]">
                                      Current price: 11 Tokens per week
                                    </p>
                                  </div>
                                </div>

                                {/* Token Selector */}
                                <div className="flex items-center space-x-3 mb-4">
                                  <button
                                    onClick={decreaseTokens}
                                    className="w-7 h-7 border border-[#E66D3D] rounded-full flex items-center justify-center text-lg text-[#E66D3D] "
                                  >
                                    –
                                  </button>
                                  <input
                                    type="text"
                                    value={tokens}
                                    readOnly
                                    className="w-[80px] h-8 text-center border border-[#E66D3D] rounded-[5px]"
                                  />
                                  <button
                                    onClick={increaseTokens}
                                    className="w-7 h-7 border border-[#E66D3D] rounded-full flex items-center justify-center text-lg text-[#E66D3D]"
                                  >
                                    +
                                  </button>
                                  <span className="font-inter font-[400]">
                                    Tokens per week
                                  </span>
                                </div>

                                {/* Token Info */}
                                <p className="text-sm text-[black] font-[300]  mt-[20px]">
                                  You have{" "}
                                  <span className="">{maxTokens} Tokens.</span>{" "}
                                  <a
                                    href="#"
                                    className="text-[#E66D3D] underline"
                                  >
                                    Buy more Tokens
                                  </a>
                                </p>
                              </div>

                              {/* Preview Card */}
                              <div>
                                <h4 className="font-semibold text-[17px] text-[#000000] mb-2">
                                  Preview
                                </h4>
                                <div className="mt-4 p-2  pb-8 border border-[#E9E9E9] rounded-lg flex  space-x-6 w-[289px] ">
                                  <img
                                    src="src/assets/profileImage.jpeg"
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full"
                                  />
                                  <div>
                                    <p className="text-[#E66D3D] font-semibold underline">
                                      Basit Bashir
                                    </p>
                                    <p className="text-[14px] font-inter font-[300] ">
                                      Product Designer and a motivated Frontend
                                      Developer.
                                    </p>
                                    <button className=" flex items-center gap-2 mt-3 px-3 py-1 text-sm border font-[300] border-[#007AFF] text-[#007AFF] rounded-[21px]">
                                      <img src="src/assets/UserDashboard\zap.svg" />{" "}
                                      Active now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Footer Buttons */}
                            <div className="flex justify-end mt-6 gap-9">
                              <button
                                onClick={() => setPopupOpen(false)}
                                className="text-[#000000] font-[600]"
                              >
                                Cancel
                              </button>
                              <button className="bg-[#E66D3D] text-white px-4 py-2 rounded">
                                Turn on
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <img
                      src="src/assets/edit-02.svg"
                      className="w-[20px] h-[20px] cursor-pointer"
                      onClick={() => setPopupOpen(true)}
                      alt="Edit"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[#333333] mt-2">
                    <div className="">
                      <p className="text-sm font-[400] font-inter">
                        Boost Your Profile
                      </p>
                      <p className="text-xs text-[#555555]">off</p>
                      {/* Popup */}
                      {editPopupVisible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10]  ">
                          <div className="bg-white p-6 pl-8 rounded-lg w-[700px] shadow-lg max-h-[498px] mt-10 overflow-y-auto hide-scrollbar">
                            {/* Header */}
                            <div className="flex justify-between items-center border-b pb-2 mt-[-10px] mb-4">
                              <h3 className="text-[22px] text-[black] font-inter  font-[400]">
                                Boost Your Profile
                              </h3>
                              <button
                                onClick={() => setEditPopupVisible(false)}
                              >
                                <img src="src/assets/UserDashboard/cancel-02.svg" />
                              </button>
                            </div>

                            {/* Description */}
                            <p className="text-[14px] text-[black] font-[400] mb-4">
                              Boost your visibility by bidding Connects to
                              appear at the top of search results!
                              <br /> You’ll only be charged if a client clicks
                              on your profile.
                            </p>

                            {/* Audience Section */}
                            <div className="mb-4">
                              <h4 className="font-semibold font-inter">
                                Audience
                              </h4>
                              <div className="flex space-x-4 mt-2">
                                <div className="flex flex-col">
                                  <label
                                    htmlFor="category"
                                    className="text-[16px] text-black font-[300] mb-1"
                                  >
                                    Category
                                  </label>
                                  <select
                                    id="category"
                                    className="p-1 w-[205px]  h-[33px] border-[0.5px] border-[#555555] rounded-md text-sm font-[300] text-[#555555] focus:border-[#E66D3D] focus:outline-none"
                                  >
                                    <option>Select Category</option>
                                  </select>
                                </div>

                                <div className="flex flex-col">
                                  <label
                                    htmlFor="category"
                                    className="text-[16px] text-black font-[300] mb-1"
                                  >
                                    Specialty
                                  </label>
                                  <select
                                    id="category"
                                    className="p-1 w-[205px] h-[33px] border-[0.5px] border-[#555555] rounded-md text-sm font-[300] text-[#555555] focus:border-[#E66D3D] focus:outline-none"
                                  >
                                    <option>Select Specialty</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            {/* Budget Section */}
                            <div className="mb-4">
                              <h3 className="font-semibold ">Budget</h3>
                              <div className="flex space-x-4 mt-2">
                                <div className="flex flex-col">
                                  <label
                                    htmlFor="category"
                                    className="text-[16px] text-black font-[300] mb-1"
                                  >
                                    Bids per click
                                  </label>
                                  <input
                                    type="number"
                                    placeholder="Number of Connects"
                                    className="w-[205px]  h-[33px] p-1 border-[0.5px] border-[#555555] rounded-md text-sm font-[300] text-[#555555] focus:border-[#E66D3D] focus:outline-none"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <label
                                    htmlFor="category"
                                    className="text-[16px] text-black font-[300] mb-1"
                                  >
                                    Limit
                                  </label>
                                  <input
                                    type="number"
                                    placeholder="Number of Connects"
                                    className="w-[205px]  h-[33px] p-1 border-[0.5px] border-[#555555] rounded-md text-sm font-[300] text-[#555555] focus:border-[#E66D3D] focus:outline-none"
                                  />
                                </div>

                                <div className="mt-6 flex items-center space-x-4">
                                  <label
                                    className="flex items-center space-x-2 cursor-pointer"
                                    onClick={() => setSelected("daily")}
                                  >
                                    <div
                                      className={`w-5 h-5 border-2 rounded-full flex justify-center items-center ${
                                        selected === "daily"
                                          ? "border-2 border-[#E66D3D] "
                                          : "border-[0.5px] border-gray-500"
                                      }`}
                                    >
                                      {selected === "daily" && (
                                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                      )}
                                    </div>
                                    <span>Daily</span>
                                  </label>
                                  <label
                                    className="flex items-center space-x-2 cursor-pointer"
                                    onClick={() => setSelected("total")}
                                  >
                                    <div
                                      className={`w-5 h-5 border-2 rounded-full flex justify-center items-center ${
                                        selected === "total"
                                          ? "border-2 border-[#E66D3D] "
                                          : "border-[0.5px] border-gray-500"
                                      }`}
                                    >
                                      {selected === "total" && (
                                        <div className="w-3 h-3 bg-[#E66D3D] rounded-full"></div>
                                      )}
                                    </div>
                                    <span>Total</span>
                                  </label>
                                </div>
                              </div>

                              {/* Token Info */}
                              <p className="text-sm text-[black] font-[300]  mt-[20px]">
                                You have{" "}
                                <span className="">
                                  {maxConnects} Connects.
                                </span>{" "}
                                <a
                                  href="#"
                                  className="text-[#E66D3D] underline"
                                >
                                  Buy more Connects
                                </a>
                              </p>
                            </div>

                            {/* Schedule Section */}
                            <div className="mb-4">
                              <h3 className="font-semibold">Schedule</h3>
                              <p className="font-[300] text-[#333333]">
                                {" "}
                                End Date (Optional)
                              </p>
                              <input
                                type="date"
                                className="w-[205px] p-2 border-[0.5px] border-[#555555] rounded-md mt-2 focus:border-[#E66D3D] focus:outline-none"
                              />
                            </div>

                            <div className="flex items-center gap-8">
                              <div>
                                <div className="mt-4 p-2 pb-4 border border-[#E9E9E9] bg-[#eaeaea] rounded-lg w-[289px]">
                                  <h3 className="text-black font-[400]">
                                    Summary
                                  </h3>
                                  <p className="font-[300] mt-1">
                                    Bids per click
                                  </p>
                                  <p className="font-[300] mt-1">Limit</p>
                                  <hr className="border-[#555555] mt-3" />
                                  <p className="font-[300] mt-1">
                                    {" "}
                                    you will receive up to
                                  </p>
                                </div>
                              </div>

                              {/* Preview Card */}
                              <div>
                                <h4 className="font-semibold text-[17px] text-[#000000] mb-2">
                                  Preview
                                </h4>
                                <div className="mt-4 p-2 pb-8 border border-[#E9E9E9] rounded-lg flex space-x-6 w-[289px]">
                                  <img
                                    src="src/assets/profileImage.jpeg"
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full"
                                  />
                                  <div>
                                    <div className="flex  gap-4">
                                      <p className="text-[#E66D3D]  font-semibold underline">
                                        Basit Bashir
                                      </p>
                                      <span className="text-[#555555] font-[300] text-[13px] mt-[4px]  flex items center gap-1 ">
                                        <img
                                          src="src/assets/UserDashboard\zap.svg"
                                          className="w-[15px]"
                                        />
                                        Boosted
                                      </span>
                                    </div>

                                    <p className="text-[14px] font-inter font-[300]">
                                      Product Designer and a motivated Frontend
                                      Developer.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-end mt-6 gap-9">
                              <button
                                onClick={() => setEditPopupVisible(false)}
                                className="text-[#000000] font-[600]"
                              >
                                Cancel
                              </button>
                              <button className="bg-[#E66D3D] text-white px-4 py-2 rounded">
                                Turn on
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <img
                      src="src/assets/edit-02.svg"
                      className="w-[20px] h-[20px] cursor-pointer"
                      onClick={() => setEditPopupVisible(true)}
                      alt="Edit"
                    />
                  </div>
                </div>
              </div>
              {/* connect */}
              <div className="bg-white shadow-md p-4 rounded-md hidden md:block [@media(max-width:932px)]:p-2">
                <div className="flex justify-between items-center cursor-pointer">
                  <p className="font-semibold  text-[#333333]">Connects</p>
                  <span className="text-gray-500">
                    <img src="src/assets/arrow-down-01.svg" />
                  </span>
                </div>
                <div className="mt-2 flex justify-center  text-[#E66D3D] text-[14px]">
                  <Link to="/details" className="underline">
                    View details
                  </Link>
                  <span className="text-[#E66D3D] pl-1 pr-1">|</span>
                  <Link to="/connects" className="underline">
                    Buy Connects
                  </Link>
                </div>
              </div>

              <div className="bg-white shadow-md p-2 rounded-md hidden md:block [@media(max-width:932px)]:p-2">
                {sections.map((section, index) => (
                  <div key={index} className="">
                    <button
                      onClick={() => toggleSection(section)}
                      className="flex justify-between items-center w-full py-2 text-sm font-semibold text-gray-800  px-2 rounded-lg [@media(max-width:932px)]:px-0"
                    >
                      {section}
                      <ChevronDown
                        className={`transition-transform transform  z-0 ${
                          openSection === section ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
