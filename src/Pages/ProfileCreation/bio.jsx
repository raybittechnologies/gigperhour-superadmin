import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarr from "../../components/NavBarr";
// import { getUserProfile, updateProfile } from "../../utils/api";
import BottomNav from "../../components/BottomNav";
import { useDarkMode } from "../../context/DarkMode.jsx";
export default function Bio() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [progress] = useState(30);

  // const handleSubmit = () => {

  //   if (!bio.length) return;
  //   updateProfile({
  //     bio,
  //     profile_step: 5,
  //   }).then(
  //     () => {
  //       navigate("/rate");
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // };

  return (
    <div
      className={`z-10 min-h-screen relative ${
        darkMode ? "bg-black text-white" : "text-black"
      }`}
    >
      <NavBarr />

      <div className="md:px-[60px] px-[30px] pt-3 pb-3 relative z-[20]">
        <div className="w-full mb-4 flex justify-between items-start">
          <div className="md:max-w-2xl md:flex-grow">
            <h3 className="sm:text-[24px] text-[19px] font-[400] font-inter">
              Great! Now, craft a bio to introduce yourself to the world and
              showcase your expertise.
            </h3>
          </div>
          <span className="text-sm mt-2 font-[500] ml-2">8/10</span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full ">
            <p className=" font-inter font-[400] md:text-[15px] text-xs ">
              Help people get to know you at a glance! What work do you excel
              at? Clearly showcase your skills using paragraphs or bullet
              points. You can always edit later, but be sure to proofread now!
            </p>

            <div className="  ">
              <input
                type="text"
                placeholder="Start Typing ..."
                className="w-full h-[100px] mt-[30px] p-3 pt-2 leading-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="md:mt-[-35px] md:w-1/2 flex justify-center">
            <div
              className={`relative bg-opacity-30 backdrop-blur-[10px] shadow-xl p-6 rounded-lg md:w-[380px] md:h-[350px] text-center
                  ${
                    darkMode
                      ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.3)_100%)]"
                      : "bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.3)_100%)]"
                  } 
                  `}
            >
              <div className="flex justify-center mb-[10px]">
                <img
                  src="src/assets/profileImage.jpeg"
                  alt="Image"
                  className="w-[130px] h-[130px] rounded-full object-cover"
                />
              </div>
              <h2 className="text-[20px]  font-inter text-white font-[500] ">
                Basit Bashir
              </h2>
              <h4 className="text-[17px] font-inter text-white font-[500]">
                Product Designer & UI/UX Designer
              </h4>

              <div className="flex justify-center items-center gap-4 mt-2 text-white text-sm">
                <span className="flex items-center gap-1">
                  <img
                    src="src/assets/starIcon.svg"
                    className="w-[20px] h-[20px]"
                    alt="Star Icon"
                  />
                  5.0
                </span>
                <span className="flex items-center gap-1">
                  <img
                    src="src/assets/dollar-icon.svg"
                    className="w-[20px] h-[20px]"
                    alt="Star Icon"
                  />
                  15.00/hr
                </span>

                <span className="flex items-center gap-1">
                  <img
                    src="src/assets/briefcase-07.svg"
                    className="w-[20px] h-[20px]"
                    alt="Star Icon"
                  />
                  21 jobs
                </span>
              </div>

              <h4 className="mt-4 text-[15px] font-inter font-[400] text-white">
                “Product X has allowed me to increase my rates and recognize my
                true value. I love the feeling of helping a diverse range of
                clients.”
              </h4>
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
          // onNext={handleSubmit}
          onNext={() => navigate("/rate")}
          onBack={() => navigate("/languages")}
        />
      </div>
    </div>
  );
}
