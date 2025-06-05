import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarr from "../../components/NavBarr";
import BottomNav from "../../components/BottomNav";
import EducationModal from "../../components/ProfileCreation/EducationModal";
import EducationCard from "../../components/ProfileCreation/EducationCard";
import { useDarkMode } from "../../context/DarkMode.jsx";
import { addUserQualification, getUserQualification } from "../../utils/api";

const Education08 = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [progress] = useState(60);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userQualifications, setUserQualifications] = useState([]);

  useEffect(() => {
    getUserQualification().then(
      ({ data }) => {
        if (data.data) {
          setUserQualifications(data.data);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  const handleSave = (data) => {
    addUserQualification(data).then(
      ({ data }) => {
        setUserQualifications((prevState) => [...prevState, data.data]);
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
      <div className="md:px-[60px] px-[30px] pt-3 pb-3 relative z-[20]">
        <div className="w-full">
          <div className="flex flex-row justify-between items-start sm:items-center mb-2 gap-2">
            <h3 className="sm:text-[24px] text-[19px] font-[400] font-inter">
              Add your Education history, Clients love to see the education
              background!
            </h3>
            <span className="text-sm sm:mt-0 mt-3 font-[500]">6/10</span>
          </div>
          <p className="mb-3 w-full md:w-[690px]  sm:text-sm text-xs">
            Showcase your education to stand out—every detail brings you closer
            to the perfect opportunity!
          </p>

          {/* Work Experience List */}
          <div className="flex flex-wrap">
            {userQualifications.length > 0 &&
              userQualifications.map((el) => (
                <div key={el.id} className="mr-4 mb-4">
                  <EducationCard qualification={el} />
                </div>
              ))}

            {userQualifications.length > 0 && (
              <div className="w-[440px]">
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
          {userQualifications.length === 0 && (
            <div
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-dashed border-gray-500 p-6 flex justify-center items-center cursor-pointer rounded-lg hover:border-orange-500 sm:w-[440px] sm:h-[187px]"
            >
              <span className="text-orange-500 text-lg">+</span>
              <span className="ml-2">Add Education</span>
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
          <EducationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />

          <BottomNav
            onBack={() => navigate("/work")}
            onNext={() => navigate("/languages")}
          />
        </div>
      </div>
    </div>
  );
};

export default Education08;
