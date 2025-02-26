import { useEffect, useState } from "react";
import NavBarr from "../../components/NavBarr";
import Star from "../../components/star";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import SubWorkCategories from "../../components/SubWorkCategories";
import { getUserProfile, getWorkCategories } from "../../utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [progress] = useState(20);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [subCat, setSubCat] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState();

  useEffect(() => {
    getWorkCategories()
      .then((res) => {
        if (res.data && res.data.data) {
          setCategories(res.data.data); // Set categories from API
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    getUserProfile(["services"])
      .then((res) => {
        if (res.data && res.data.data && res.data.data.services) {
          const servicesId = Object.keys(res.data.data.services)[0];
          setSubCat(servicesId);
          setSelectedSubCats(Object.values(res.data.data.services));
        }
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr changeMode={setDarkMode} />
      <div className="absolute inset-0 flex justify-center items-center z-[0] pointer-events-none">
        <Star />
      </div>

      <div className="container max-w-screen-xl mx-auto px-[120px] pt-3 pb-3 relative z-[20]">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[24px] font-[400] font-inter">
            Awesome! What type of work are you looking to do?
          </h3>
          <span className="text-sm">2/10</span>
        </div>
        <p className="text-sm font-inter font-[400]">
          Don’t worry you can change these choices later...
        </p>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-[#F99F39] font-[700] text-[16px] font-inter mb-2">
              Select 1 Category below:
            </h3>
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-2 cursor-pointer font-[300] font-inter mb-2"
              >
                <input
                  type="radio"
                  name="category"
                  className="accent-[#F99F39]"
                  checked={subCat === category.id}
                  onChange={() => setSubCat(category.id)}
                />
                {category.title}
              </label>
            ))}
          </div>

          {subCat && (
            <SubWorkCategories
              id={subCat}
              selectedSpecialties={selectedSpecialties}
              setSelectedSpecialties={setSelectedSpecialties}
              alreadySelected={selectedSubCats}
            />
          )}
        </div>

        <div className="mt-6">
          <div
            className="h-1 w-full rounded-full relative"
            style={{ background: darkMode ? "#E9E9E9" : "#555555" }}
          >
            <div
              className="h-full bg-[#F99F39] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <BottomNav
          onNext={() => navigate("/skills")}
          onBack={() => navigate("/about")}
        />
      </div>
    </div>
  );
};

export default Categories;
