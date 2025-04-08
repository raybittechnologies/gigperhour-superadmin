import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobLong01() {
  const [darkMode, setDarkMode] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Dummy data (simulate backend)
  useEffect(() => {
    setCategories(["UI/UX Design", "Web Design", "Mobile Design"]);

    // setCategories([]);
  }, []);

  const handleContinue = () => {
    if (!jobTitle) {
      console.log("Job title is required.");
      return;
    }

    if (categories.length === 0) {
      navigate("/address");
    } else if (selectedCategory) {
      navigate("/yescat");
    } else {
      console.log("Select a category.");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="grid grid-cols-12 gap-4 px-[20px] py-[20px]">
        <div className="col-span-2">
          <SideBar />
        </div>

        <div className="col-span-10 pl-6">
          <div
            className={`p-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Lets start with a strong title.
              </h2>
              <span className="text-sm text-gray-500">1/5</span>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              This helps your job post stand out to the right candidates. <br />
              It’s the first thing they’ll see, so make it count!
            </p>

            <label className="block mb-2 text-sm font-medium">
              Title for the Job
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g., UI UX Designer"
              className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <div className="mb-6">
              <p className="mb-2 font-medium text-sm">Example titles</p>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
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

            {categories.length > 0 && (
              <div className="mb-6">
                <p className="mb-2 font-medium">Job Category</p>
                <div className="space-y-3">
                  {categories.map((category) => (
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
                <p className="text-orange-600 text-sm cursor-pointer mb-10 hover:underline mt-4">
                  See all categories
                </p>
              </div>
            )}

            <div className="flex justify-between">
              <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition">
                Back
              </button>
              <button
                onClick={handleContinue}
                className={`px-6 py-2 rounded-md transition ${
                  jobTitle && (categories.length === 0 || selectedCategory)
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-orange-300 text-white"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
