import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobLong01() {
  const [darkMode, setDarkMode] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalCategory, setModalCategory] = useState("");
  const [modalJobTitle, setModalJobTitle] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulated backend fetch
    setTimeout(() => {
      const backendData = {
        jobTitle: "UI/UX Designer",
        categories: [
          "Product Design",
          "UI/UX Design",
          "Web Design",
          "Mobile Design",
        ],
        selectedCategory: "Product Design",
      };

      setJobTitle(backendData.jobTitle);
      setCategories(backendData.categories);
      setSelectedCategory(backendData.selectedCategory);
    }, 500);
  }, []);

  const handleContinue = () => {
    if (categories.length === 0) {
      navigate("/longTermJob02");
    } else if (selectedCategory) {
      navigate("/longTermJob02");
    } else {
      console.log("Select a category.");
    }
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (categories.length === 0) {
      setJobTitle(newTitle);
    } else {
      setModalJobTitle(newTitle);
      setModalCategory(selectedCategory);
      setShowModal(true);
    }
  };

  const confirmModalChanges = () => {
    setJobTitle(modalJobTitle);
    setSelectedCategory(modalCategory);
    setShowModal(false);
  };

  const cancelModalChanges = () => {
    setModalJobTitle("");
    setShowModal(false);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      {/* <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]"> */}
      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        {/* <div className="col-span-2"> */}
        {/* <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 overflow-y-auto hide-scrollbar z-10 border-r">
          <SideBar />
        </div> */}
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10 ">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        {/* <div className="col-span-10 pl-6"> */}
        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`p-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-[400]">
                Let s start with a strong title.
              </h3>
              <span className="text-xl">1/5</span>
            </div>

            <p className="text-sm mb-6">
              This helps your job post stand out to the right candidates. <br />
              It’s the first thing they’ll see, so make it count!
            </p>

            <label className="block mb-2 text-sm font-[400]">
              Title for the Job
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={handleTitleChange}
              placeholder="e.g., UI UX Designer"
              className="w-[35vw] border border-[#555555] bg-transparent rounded-[5px] p-2 mb-6 focus:outline-none focus:ring-orange-500"
            />

            {/* Example Titles */}
            <div className="mb-6">
              <p className="mb-2 font-[400] text-sm">Example titles</p>
              <ul className="list-disc ml-5 text-sm  space-y-1">
                <li>
                  Build responsive WordPress site with booking/payment
                  functionality
                </li>
                <li>
                  Graphic designer needed to design ad creative for multiple
                  campaigns
                </li>
                <li>Facebook ad specialist needed for product launch</li>
              </ul>
            </div>

            {/* Job Categories */}
            {categories.length > 0 && (
              <div className="mb-6">
                <p className="mb-2 font-medium">Job Category</p>
                <div className="space-y-3">
                  {(showAllCategories
                    ? categories
                    : categories.slice(0, 3)
                  ).map((category) => (
                    <div
                      key={category}
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          selectedCategory === category
                            ? "border-2 border-[#E66D3D]"
                            : darkMode
                            ? "border border-white"
                            : "border border-gray-400"
                        }`}
                      >
                        {selectedCategory === category && (
                          <div className="w-2.5 h-2.5 bg-[#E66D3D] rounded-full" />
                        )}
                      </div>
                      <span className="text-sm">{category}</span>
                    </div>
                  ))}
                </div>

                {/* Toggle button */}
                {categories.length > 3 && (
                  <p
                    className="text-[#E66D3D] text-sm cursor-pointer mb-10 hover:underline mt-4"
                    onClick={() => setShowAllCategories(!showAllCategories)}
                  >
                    {showAllCategories ? "Show less" : "See all categories"}
                  </p>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                className="px-8 py-2 border border-orange-500 font-[600] rounded-md  transition"
                onClick={() => navigate("/postJob")}
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className={`px-6 py-2 rounded-md transition font-[600] ${
                  jobTitle && (categories.length === 0 || selectedCategory)
                    ? "bg-[#E66D3D] text-white "
                    : "bg-[#E66D3D] text-white"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl py-3 px-4 w-[100%] max-w-[35rem]">
            <div className="flex justify-between mb-4">
              <h3 className="text-[22px] text-[#333333] font-[400]">
                Change Category
              </h3>
              <button onClick={cancelModalChanges}>
                <img src="src/assets/UserDashboard/cancel-02.svg" />
              </button>
            </div>

            <div className="mb-10">
              {/* Editable Title */}
              <div className="relative w-full mb-4">
                <label className="block text-[#333333] font-[500] text-[20px] mb-1">
                  Speciality
                </label>
                <select
                  className="w-full border text-[15px] border-[#555555] rounded-[5px] p-2 pr-8 focus:border-[#E66D3D] focus:outline-none appearance-none"
                  value={modalJobTitle}
                  onChange={(e) => setModalJobTitle(e.target.value)}
                >
                  <option value="" disabled>
                    Select a job title
                  </option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="Product Designer">Product Designer</option>
                  <option value="Mobile App Developer">
                    Mobile App Developer
                  </option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <img
                    src="src/assets/arrow-down-01.svg"
                    alt="Dropdown arrow"
                    className="h-5 w-5 mr-4 mt-9"
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-[#333333] font-[500] text-[20px] mb-1">
                  Category
                </label>
                <div className="relative w-full">
                  <select
                    className="flex items-center border text-[15px] w-full  border-[#555555] rounded-[5px] p-2 focus:border-[#E66D3D] focus:outline-none appearance-none pr-8"
                    value={modalCategory}
                    onChange={(e) => setModalCategory(e.target.value)}
                  >
                    <option value="" disabled>
                      Select your category
                    </option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <img
                      src="src/assets/arrow-down-01.svg"
                      alt="Dropdown arrow"
                      className="h-5 w-5 mr-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-10">
              <button
                onClick={cancelModalChanges}
                className="px-5 py-2 border  font-[600] border-[#E66D3D] rounded-[5px] hover:bg-gray-100 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={confirmModalChanges}
                className="px-5 py-2 bg-[#E66D3D] font-[600] text-white rounded-[5px]  text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
