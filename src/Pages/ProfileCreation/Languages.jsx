import { useState } from "react";
import NavBarr from "../../components/NavBarr";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import ISO6391 from "iso-639-1";
import { useDarkMode } from "../../context/DarkMode.jsx";
const Languages = () => {
  const [languages, setLanguages] = useState([
    { name: "English", proficiency: "Fluent" },
    { name: "Urdu", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" },
  ]);

  const languageOptions = ISO6391.getAllNames();
  const proficiencyOptions = ["Basic", "Intermediate", "Fluent"];
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [progress] = useState(70);
  const addLanguage = () => {
    setLanguages([...languages, { name: "", proficiency: "", open: false }]);
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
      <NavBarr />
      <div className="md:px-[60px] px-[30px]  pt-3 pb-3 ">
        <div className="flex flex-row justify-between items-start sm:items-center mb-2 gap-2">
          <h3 className="sm:text-[24px]  text-[19px] font-[400] font-inter">
            Great! Now, let us know which languages you speak.
          </h3>
          <span className="text-sm sm:mt-0 mt-3 font-[500]">7/10</span>
        </div>
        <p className="mb-6 w-full md:w-[690px] md:text-sm text-xs">
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
                <div className="relative text-sm w-[115px] ">
                  <button
                    type="button"
                    onClick={() =>
                      setLanguages((prev) =>
                        prev.map((l, i) =>
                          i === index
                            ? { ...l, open: !l.open }
                            : { ...l, open: false }
                        )
                      )
                    }
                    className="w-full border border-[#555555] bg-transparent rounded px-2 py-2 flex justify-between items-center  text-[14px]"
                  >
                    {lang.name || "Language"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {lang.open && (
                    <ul className="absolute z-10 mt-1 w-[200px] bg-white border border-[#555555] rounded shadow-lg max-h-[190px] overflow-y-auto">
                      {languageOptions.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            const updated = [...languages];
                            updated[index].name = option;
                            updated[index].open = false;
                            setLanguages(updated);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white text-[#222] "
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Wrap Proficiency & Delete button together */}
              <div className="flex items-center ">
                <div className="relative text-sm w-[115px]">
                  <button
                    type="button"
                    onClick={() =>
                      setLanguages((prev) =>
                        prev.map((l, i) =>
                          i === index
                            ? { ...l, profOpen: !l.profOpen }
                            : { ...l, profOpen: false }
                        )
                      )
                    }
                    className="w-full border border-gray-600 bg-transparent rounded px-2 py-2 flex justify-between items-center text-[14px]"
                  >
                    {lang.proficiency || "Fluency"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {lang.profOpen && (
                    <ul className="absolute z-10 mt-1 sm:w-[200px] bg-white border border-gray-600 rounded shadow-lg">
                      {proficiencyOptions.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            handleLanguageChange(index, "proficiency", option); // ✅ keep your handler
                            setLanguages((prev) =>
                              prev.map((l, i) =>
                                i === index ? { ...l, profOpen: false } : l
                              )
                            );
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-[#E66D3D] hover:text-white text-[#222]"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Delete Button beside Proficiency */}
                {index > 0 && (
                  <button
                    onClick={() => removeLanguage(index)}
                    className="text-gray-400 sm:ml-[40px] ml-2 hover:text-[#E66D3D] flex-shrink-0"
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
