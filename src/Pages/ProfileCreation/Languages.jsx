import { useState } from "react";
import NavBarr from "../../components/NavBarr";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
const Languages = () => {
  const [languages, setLanguages] = useState([
    { name: "English", proficiency: "Fluent" },
    { name: "Urdu", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" },
  ]);

  const languageOptions = ["English", "Urdu", "Hindi", "Spanish", "French"];
  const proficiencyOptions = ["Basic", "Intermediate", "Fluent"];
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [progress] = useState(70);
  const addLanguage = () => {
    setLanguages([...languages, { name: "", proficiency: "" }]);
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][field] = value;
    setLanguages(updatedLanguages);
  };

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr changeMode={setDarkMode} />
      <div className="container mx-auto px-[120px]   pt-3 pb-3min-h-screen">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[24px] font-[400] font-inter">
            Great! Now, let us know which languages you speak.
          </h3>
          <span className="text-sm">7/10</span>
        </div>
        <p className="mb-6 w-full md:w-[690px]">
          Elevance is a global platform, and clients often want to know the
          languages you speak. English is a must, but do you speak any others?
        </p>

        <div className=" rounded-lg">
          {/* Headings */}
          <div className="grid grid-cols-2 gap-4 text-[16px] font-[700] font-inter text-[#F99F39]">
            <div>Language</div>
            <div>Proficiency</div>
          </div>

          {/* Language & Proficiency Dropdowns */}
          {languages.map((lang, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 mt-3 items-center"
            >
              <div className="flex flex-col">
                <select
                  value={lang.name}
                  onChange={(e) =>
                    handleLanguageChange(index, "name", e.target.value)
                  }
                  className="w-[115px] h-[40px] p-2  bg-transparent border border-gray-600 rounded"
                >
                  <option value="">Select Language</option>
                  {languageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Wrap Proficiency & Delete button together */}
              <div className="flex items-center ">
                <select
                  value={lang.proficiency}
                  onChange={(e) =>
                    handleLanguageChange(index, "proficiency", e.target.value)
                  }
                  className="w-[115px] p-2 pr-8 bg-transparent border border-gray-600 rounded"
                >
                  <option value="">Select Proficiency</option>
                  {proficiencyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {/* Delete Button beside Proficiency */}
                {index > 0 && (
                  <button
                    onClick={() => removeLanguage(index)}
                    className="text-gray-400 ml-[40px] hover:text-[#E66D3D]"
                  >
                    <img
                      src={
                        darkMode
                          ? "src/assets/delete-throw-light.svg"
                          : "src/assets/delete-throw.svg"
                      }
                      className="w-[20px] h-[20px]"
                    />
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Add Language Button */}
          <button
            onClick={addLanguage}
            className="mt-8 w-[213px] bg-[#E66D3D] text-white py-2 rounded-[5px]   transition"
          >
            Add Language
          </button>
        </div>

        {/* Navigation Buttons */}
        {/* Progress Bar */}
        <div className="mt-[60px]">
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
          onBack={() => navigate("/education")}
          onNext={() => navigate("/bio")}
        />
      </div>
    </div>
  );
};

export default Languages;
