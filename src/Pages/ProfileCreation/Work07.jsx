import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarr from "../../components/NavBarr";
import BottomNav from "../../components/BottomNav";
import WorkExperienceModal from "../../components/ProfileCreation/WorkExperienceModal";
import WorkExperienceCard from "../../components/ProfileCreation/WorkExperienceCard";
import { addWorkExpreience, getUserWorkExperiences } from "../../utils/api";
import { useDarkMode } from "../../context/DarkMode.jsx";
const WorkExperience07 = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [progress] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userWorkExperiences, setUserWorkExperiences] = useState([]);

  useEffect(() => {
    getUserWorkExperiences().then(
      ({ data }) => {
        console.log("Response from getUser WorkExperiences:", data);
        if (data.data) {
          setUserWorkExperiences(data.data);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  const handleSave = (data) => {
    addWorkExpreience(data).then(
      ({ data }) => {
        setUserWorkExperiences((prevState) => [...prevState, data.data]);
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr />
      <div className="md:px-[60px] px-[30px]  pt-2 pb-3 relative z-[20]">
        <div className="w-full">
          <div className="flex flex-row justify-between items-start sm:items-center  gap-2">
            <h3 className="sm:text-[24px] text-[19px] font-[400] font-inter">
              Do you have any previous relevant experience in this field?
            </h3>
            <span className="text-sm sm:mt-0 mt-3 font-[500]">5/10</span>
          </div>
          <p className="mb-3 w-full md:w-[690px] sm:text-sm text-xs sm:pt-0 pt-2 ">
            Freelancers who showcase their work experience have a higher chance
            of landing jobs on our platform. You can still create a profile, but
            adding experience gives you an extra edge!
          </p>

          {/* Work Experience List */}
          <div className="flex flex-wrap">
            {userWorkExperiences.length > 0 &&
              userWorkExperiences.map((el) => (
                <div key={el.id} className="mr-4 mb-4">
                  <WorkExperienceCard experience={el} />
                </div>
              ))}

            {userWorkExperiences.length > 0 && (
              <div className="w-[350px] ">
                <div
                  className="w-[48px] h-[48px] mt-4"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src="src/assets/add-square.svg"
                    alt="Add Experience"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Add Experience Button */}
          {userWorkExperiences.length === 0 && (
            <div
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-dashed border-gray-500 p-6 flex justify-center items-center cursor-pointer rounded-lg hover:border-orange-500 sm:w-[440px] sm:h-[187px]"
            >
              <span className="text-orange-500 text-lg">+</span>
              <span className="ml-2">Add Experience</span>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mt-[100px]">
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

          {/* Work Experience Modal */}
          <WorkExperienceModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />

          <BottomNav
            onBack={() => navigate("/title")}
            onNext={() => navigate("/education")}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience07;
