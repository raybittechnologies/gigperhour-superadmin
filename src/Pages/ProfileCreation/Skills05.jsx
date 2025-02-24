import { useEffect, useState } from "react";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../utils/api";

const Skill = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([
    "Smartphone",
    "Construction Document Preparation",
    "Web Application",
    "Ecommerce Website",
    "Ecommerce",
    "Desktop Application",
  ]);

  const suggestedSkills = [
    "Specifications",
    "International Development",
    "Product Development",
    "COMSOL Multiphysics",
    "Personal Computer",
    "Software Development",
  ];

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  useEffect(() => {
    getUserProfile("skills");
  }, []);

  return (
    <div className="p-4 max-w-lg mx-auto font-sans">
      <div>
        <h2 className="text-lg font-semibold mb-2">Your skills</h2>
        <div className="border p-3 rounded-lg flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
          ))}
          <input
            type="text"
            placeholder="Enter skills here"
            className="outline-none text-sm"
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">Max 15 skills</p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Suggested skills</h2>
        <div className="flex flex-wrap gap-2">
          {suggestedSkills.map((skill, index) => (
            <button
              key={index}
              className="border rounded-full px-3 py-1 text-sm hover:bg-gray-200"
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>
      <BottomNav onBack={() => navigate("/categories")} />
    </div>
  );
};

export default Skill;
