import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarr from "../../components/NavBarr";
import { getUserProfile, updateProfile } from "../../utils/api";
import BottomNav from "../../components/BottomNav";
import Star from "../../components/star";

export default function Skill() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [progress] = useState(30);
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill.id !== skillToRemove.id));
    setSuggestedSkills((prev) => [
      ...prev,
      { id: skillToRemove.id, title: skillToRemove.title },
    ]);
  };
  const addSkill = function () {
    const skill = this;
    setSkills((prev) => [...prev, { id: skill.id, title: skill.title }]);
    setSuggestedSkills(suggestedSkills.filter((skill) => skill.id !== this.id));
  };
  useEffect(() => {
    getUserProfile(["services", "skills"]).then(
      ({ data }) => {
        if (data.data.suggestedSkills) {
          setSuggestedSkills(data.data.suggestedSkills);
        }
        if (data.data.skills) {
          const skillsSet = new Set(data.data.skills.map(({ id }) => id));
          setSuggestedSkills((prev) =>
            prev.filter(({ id }) => !skillsSet.has(id))
          );
          setSkills(data.data.skills);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleSubmit = () => {
    console.log("hjola");
    if (!skills.length) return;
    updateProfile({
      skills,
      profile_step: 5,
    }).then(
      () => {
        navigate("/title");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr changeMode={setDarkMode} />
      {/* Background Star Component */}
      <div className="absolute inset-0 flex justify-center items-center z-[0]  pointer-events-none">
        <Star />
      </div>

      <div className="container max-w-screen-xl mx-auto px-[120px] pt-3 pb-3 relative z-[20]">
        <div className="w-full mb-5 flex justify-between items-start">
          <div className="max-w-2xl flex-grow">
            <h3 className="text-[24px] font-[400] font-inter">
              Almost there! What kind of work are you here to do?
            </h3>
            <p className="text-sm font-inter font-[400] mt-[10px]">
              Your skills showcase what you can offer to clients and help us
              recommend the best jobs for you.
            </p>
          </div>
          <span className="text-[18px] font-inter font-[500] ml-auto">
            3/10
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2">
            <h4 className="font-inter text-[18px] font-[500] mb-2">
              Your Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center text-black bg-gray-200 rounded-full py-1 px-3 text-sm"
                >
                  {skill.title}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-black hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Enter skills here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none mt-[5px]"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    const skill = {
                      id: Date.now(),
                      title: e.target.value.trim(),
                    };
                    addSkill.bind(skill)(); // ✅ Binding skill object to addSkill
                    e.target.value = "";
                  }
                }}
              />
            </div>
            <p className="text-[13px] font-[300] mt-1">Max 10 skills</p>

            <div className="mt-6">
              <h3 className="font-medium mb-3">Suggested Skills</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border rounded-lg text-sm transition bg-white border-gray-300 text-black hover:bg-gray-100"
                    onClick={addSkill.bind(skill)}
                  >
                    + {skill.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className={`shadow-[0px_4px_30px_0px_rgba(0,0,0,0.2)] 
              backdrop-blur-[10px] 
              ${
                darkMode
                  ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.3)_100%)]"
                  : "bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.3)_100%)]"
              } 
              rounded-[8px] p-4 text-center w-[335px]`}
            >
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User"
                className="w-[80px] h-[80px] rounded-full mx-auto mb-2"
              />
              <h4 className="text-[16px] font-inter font-[400] mt-8">
                Product X’s algorithm will suggest job posts tailored to your
                skills. Choose them wisely to ensure the best matches!
              </h4>
              <span className="text-xs block mt-5">Product X Pro</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
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
          onNext={handleSubmit}
          onBack={() => navigate("/categories")}
        />
      </div>
    </div>
  );
}
