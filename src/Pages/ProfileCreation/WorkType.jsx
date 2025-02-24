

import NavBarr from "../../components/NavBarr";
import { useState } from "react";

const WorkType = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [progress, ] = useState(20); // Example progress value
  const [darkMode, setDarkMode] = useState(false);

  const categories = [
    "IT & Networking",
    "Accounting & Consulting",
    "Admin Support",
    "Customer Service",
    "Design & Creative",
    "Translation",
    "Sales & Marketing",
    "Legal",
    "Web, Mobile & Software Development",
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <div className={`container z-10 min-h-screen relative ${darkMode ? "bg-black text-white" : " text-black"}`}>

        <NavBarr changeMode={setDarkMode} />
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Awesome! What type of work are you looking to do?
        </h2>
        <span className="text-sm">2/10</span>
      </div>
      <p className="text-gray-400">
        Don’t worry you can change these choices later...
      </p>

      {/* Selection Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Category Selection */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Select 1 Category below:</h3>
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer mb-2 block">
              <input
                type="radio"
                name="category"
                className="accent-orange-500"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>

        {/* Specialties Selection */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Now Select 1-3 Specialities:</h3>
          {categories.map((specialty) => (
            <label key={specialty} className="flex items-center gap-2 cursor-pointer mb-2 block">
              <input
                type="checkbox"
                className="accent-orange-500"
                checked={selectedSpecialties.includes(specialty)}
                onChange={() => handleSpecialtyChange(specialty)}
              />
              {specialty}
            </label>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="h-1 w-full rounded-full relative" style={{ background: darkMode ? "#E9E9E9" : "#555555" }}>
          <div className="h-full bg-[#F99F39] rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-gray-700 text-white px-6 py-2 rounded">Back</button>
        <button className="bg-orange-500 text-white px-6 py-2 rounded">Next, Add your Skills</button>
      </div>
    </div>
  );
};

export default WorkType;
