import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/UserDashBoard/SideBar";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
  Star,
  CheckCircle,
  MessageSquare,
  Heart,
  PlusCircle,
} from "lucide-react";

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
  const [isFixed, setIsFixed] = useState(null); // null initially
  const [fixedAmount, setFixedAmount] = useState(0);
  const [hourlyAmount, setHourlyAmount] = useState(0);

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
    // Example dummy data (You can switch between fixed and hourly by changing isFixed)
    setIsFixed(false); // Change to false for hourly
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
      <div
        className=" grid grid-cols-12   px-[20px]  "
        style={{ padding: "2%" }}
      >
        {/* Sidebar (Left) */}
        <SideBar />

        {/* Main Content (Center) */}
        <main className="col-span-8 pl-4 pr-4 pb-4 w-full ">
          {/* Header */}
          <div className="w-full ">
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
                        <span className="text-[#E66D3D] ">Freelancer Plus</span>
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
              className="flex items-center px-3 border-l border-black cursor-pointer relative"
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
                className={`pb-2 text-lg font-inter font-[400] ${
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
            {jobs.map((job, index) => (
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
                    <Heart size={18} className="cursor-pointer font-[300]" />
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
                <div className="flex items-center mt-4 text-gray-300 text-sm">
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

                  <div className="flex ml-4">
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
                    <PlusCircle size={16} className="mr-1 " />
                    {job.location}
                  </span>
                </div>

                {/* Proposals */}
                <p className="font-[400] text-sm mt-3">
                  Proposals: <span className="text-black">{job.proposals}</span>
                </p>
              </div>
            ))}
          </div>
          {/* Modal (Popup) */}
          {selectedJob && (
            <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-[10] ">
              {/* Modal Container (Scrollable) */}
              <div className="bg-white w-[1200px]  rounded-lg mt-[65px] shadow-lg relative p-5  pl-7 overflow-y-auto h-[500px]">
                {/* Header (Will Scroll) */}
                <div className=" pb-2 flex justify-between items-center">
                  <h3 className="text-[22px] font-[400] text-[#333333]">
                    {selectedJob.title}
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                  >
                    <img src="src/assets/UserDashboard/cancel-02.svg" />
                  </button>
                </div>

                {/* Job Details */}
                <div className="text-gray-500 text-sm flex gap-8 mt-2">
                  <span>1hr ago </span>
                  <span className="flex gap-2">
                    <img
                      src="src/assets/location-add-02.svg"
                      className="w-[15px] h-[15px] mt-1"
                    />{" "}
                    Worldwide
                  </span>
                  <p>
                    {isFixed ? (
                      <>
                        Fixed:{" "}
                        <span className="text-[#E66D3D] ">${fixedAmount}</span>
                      </>
                    ) : (
                      <>
                        Hourly Rate:{" "}
                        <span className="text-[#E66D3D] ">
                          ${hourlyAmount}/hr
                        </span>
                      </>
                    )}
                  </p>
                  <span className="flex gap-2">
                    <img
                      src="src/assets/UserDashboard/developer.svg"
                      className="w-[15px] h-[15px] mt-1"
                    />{" "}
                    Intermediate
                  </span>

                  <p>
                    Tokens required for Proposal:{" "}
                    <span className="text-[#E66D3D] ">11</span>
                  </p>
                </div>

                {/* Job Description */}
                <div className="flex gap-4">
                  <p className=" mt-4 text-gray-500 ">
                    Availiable Tokens:{" "}
                    <span className="text-[#E66D3D] ">21</span>
                  </p>
                  <p className="mt-4 text-gray-500">One-Time Project</p>
                </div>

                <div className="border-b pt-4  pb-4 mb-4 flex items-center justify-between -mx-4 px-4">
                  <div className="flex items-center gap-5">
                    <Link to={isFixed ? "/applyJob" : "/jobHourly"}>
                      <button className="bg-[#E66D3D] w-[146px] font-[600] text-white px-4 py-2 rounded">
                        Apply
                      </button>
                    </Link>
                    <button className="border text-[#333333]  border-[#E9E9E9]  font-[600] flex  gap-2  px-4 py-2 rounded">
                      <img
                        src="src/assets/UserDashboard/heart.svg"
                        className="w-[18px] h-[18px] mt-1"
                      />{" "}
                      Save for later
                    </button>
                  </div>
                  <p className="text-[#D84839] flex gap-2">
                    {" "}
                    <img
                      src="src/assets/UserDashboard/flag-02.svg"
                      className="w-[18px] mt-[3px]"
                    />{" "}
                    Flag inappropriate
                  </p>
                </div>

                <p className="border-b text-[#333333] border-[#E9E9E9] pb-4  -mx-4 px-4">
                  I am looking for an individual who can create interactive
                  designs for me in figma. <br /> Need clean designs and
                  responsive also
                </p>

                {/* Required Skills */}
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
                <div className="mt-4 border-t  border-b pt-4 pb-4 flex flex-col md:flex-row gap-6">
                  {/* Activity on this Job */}
                  <div className="md:w-1/2 h-[150px] overflow-hidden relative ">
                    {" "}
                    {/* Adjust padding-bottom as needed */}
                    <h3 className="font-semibold text-[#333333]">
                      Activity on this job:
                    </h3>
                    <div className="text-[15px] mt-2 text-[#333333] flex flex-col flex-wrap h-[120px] ">
                      {/* List items */}
                      <div>• Proposals: 15 to 20</div>
                      <div>• Interviewing: 0</div>
                      <div>• Invites sent: 0</div>
                      <div>• Unanswered invites: 0</div>
                    </div>
                    <div>
                      {/* Paragraph positioned absolutely at the bottom */}

                      <p className="absolute bottom-0 text-[#333333] left-0 text-[15px] mt-[5px]">
                        Upgrade your membership to see the bid range
                        <span className="text-[#E66D3D] font-[500] underline cursor-pointer">
                          {" "}
                          Upgrade Now
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* About the Client */}
                  <div className="md:w-1/2 h-[150px] overflow-hidden">
                    <h3 className="font-semibold text-[#333333]">
                      About the client:
                    </h3>
                    <div className="text-[15px] mt-2  text-[#333333] flex flex-col flex-wrap h-[120px] ">
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

                <div className="md pb-3">
                  <h2 className="text-lg font-semibold mb-2 text-[#333333]">
                    Client s Recent History (10):
                  </h2>

                  {/* Dropdown */}
                  <div
                    className="mb-4 border-b pb-4 flex gap-3 cursor-pointer text-[#333333]"
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

                  {/* Job History */}
                  {isOpenJobs && (
                    <>
                      {jobs
                        .slice(0, showAllJobs ? jobs.length : 3)
                        .map((job, index) => (
                          <div
                            key={index}
                            className="pt-2 pb-2 flex justify-between"
                          >
                            <div>
                              <h3 className="text-[#E66D3D]  text-[17px] font-semibold">
                                {job.title}
                              </h3>
                              {/* Rating */}
                              <div className="flex flex-row   gap-1 mt-1">
                                {Array(5)
                                  .fill(null)
                                  .map((_, i) => (
                                    <Star
                                      key={i}
                                      size={16}
                                      className={` mt-[4px] ${
                                        i < dummyRating
                                          ? "text-[#FCE15A] fill-[#FCE15A]"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                <span className="font-bold">{dummyRating}</span>

                                {/* Freelancer Review */}
                                <p className="text-gray-700 w-[700px] ml-5">
                                  {job.freelancerReview}
                                </p>
                              </div>

                              <div className="flex flex-row  gap-4">
                                {/* Freelancer */}
                                <p className="text-gray-600 mt-1">
                                  To Freelancer:{" "}
                                  <span className="text-[#E66D3D] font-[400] underline">
                                    {job.freelancer}
                                  </span>
                                </p>

                                {/* Review */}
                                <div className="flex  ">
                                  <p className="text-gray-700 mt-1 mr-4 ">
                                    {job.review}
                                  </p>
                                  {Array(5)
                                    .fill(null)
                                    .map((_, i) => (
                                      <Star
                                        key={i}
                                        size={16}
                                        className={` mt-[8px]   ${
                                          i < dummyRating
                                            ? "text-[#FCE15A] fill-[#FCE15A]"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                </div>
                              </div>
                            </div>

                            {/* Job Details */}
                            <div className="text-gray-500 text-sm mt-1">
                              <p>Fixed Price: {job.price}</p>
                              <p>{job.duration}</p>
                            </div>
                          </div>
                        ))}

                      {/* View More / View Less */}
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
                <div>
                  <h2 className="text-lg font-semibold mb-2 mt-2 border-t pt-3 text-[#333333]">
                    Other Open Jobs by Client ({openJobs.length}):
                  </h2>

                  {openJobs.map((job, index) => (
                    <div key={index} className="flex gap-3 text-center  mb-2">
                      <h3 className="text-[#E66D3D] underline">{job.title}</h3>
                      <p className=" text-sm mt-1 text-[#333333]">
                        {job.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Right Section (Profile & Ads) */}
        <div className="space-y-4  col-span-2">
          {users.map((user, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-md">
              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full">
                  <img
                    src="src/assets/profileImage.jpeg"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#E66D3D]">{user.name}</h3>
                  <p className="text-sm text-[#333333]">{user.role}</p>
                </div>
              </div>

              {/* Profile Completion */}
              <div className="mt-4">
                <p className="text-xs text-[#E66D3D]">Complete your profile</p>
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
          <div className="bg-white shadow-md p-4 rounded-md">
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
                  <p className="text-sm font-[400] font-inter">Hiring Status</p>
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
                          Make it easier for clients to find you by enabling the
                          Hiring Badge! This feature highlights your profile,
                          helping you stand out in searches. Freelancers who use
                          the badge can receive up to 70% more job invites.
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
                              <a href="#" className="text-[#E66D3D] underline">
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
                          <button onClick={() => setEditPopupVisible(false)}>
                            <img src="src/assets/UserDashboard/cancel-02.svg" />
                          </button>
                        </div>

                        {/* Description */}
                        <p className="text-[14px] text-[black] font-[400] mb-4">
                          Boost your visibility by bidding Connects to appear at
                          the top of search results!
                          <br /> You’ll only be charged if a client clicks on
                          your profile.
                        </p>

                        {/* Audience Section */}
                        <div className="mb-4">
                          <h4 className="font-semibold font-inter">Audience</h4>
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
                            <span className="">{maxConnects} Connects.</span>{" "}
                            <a href="#" className="text-[#E66D3D] underline">
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
                              <h3 className="text-black font-[400]">Summary</h3>
                              <p className="font-[300] mt-1">Bids per click</p>
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
          <div className="bg-white shadow-md p-4 rounded-md">
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

          <div className="bg-white shadow-md p-2 rounded-md">
            {sections.map((section, index) => (
              <div key={index} className="">
                <button
                  onClick={() => toggleSection(section)}
                  className="flex justify-between items-center w-full py-2 text-sm font-semibold text-gray-800  px-2 rounded-lg"
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
      </div>
    </div>
  );
};

export default UserDashBoard;
