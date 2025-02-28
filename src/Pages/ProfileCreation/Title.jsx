import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarr from "../../components/NavBarr";
import BottomNav from "../../components/BottomNav";
import { getUserProfile, updateProfile } from "../../utils/api";

const Title06 = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [progress] = useState(40);
  const [title, setTitle] = useState("");

  // Fetch user profile data on component mount
  useEffect(() => {
    getUserProfile("title").then(
      ({ data }) => {
        if (data?.data?.title) setTitle(data.data.title);
      },
      (err) => {
        console.error("Error fetching profile:", err);
      }
    );
  }, []);

  // Handle profile update
  const handleSubmit = () => {
    if (!title) return;

    updateProfile({
      title,
      profile_step: 6,
    }).then(
      () => {
        navigate("/work"); // Redirect on success
      },
      (err) => {
        console.error("Error updating profile:", err);
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
      <div className="container max-w-screen-xl mx-auto px-[120px] pt-3 pb-3 relative z-[20]">
        {/* Heading */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[24px] font-[400] font-inter">
            Got it! Now, add a title that highlights what you do best.
          </h3>
          <span className="text-sm">4/10</span>
        </div>
        <p className="text-sm font-inter font-[400] max-w-2xl">
          Your skills showcase what you can offer to clients and help us
          recommend the best jobs for you. Feel free to add or remove the
          suggested ones, or start typing to select more.
        </p>

        {/* Input Field */}
        <p className="block text-[16px] font-medium mb-2 mt-[30px]">
          Your Professional Role
        </p>
        <input
          type="text"
          placeholder="Enter role name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[500px] h-[45px] px-4 py-3 border rounded-lg text-black outline-none focus:border-orange-500 transition-all"
        />

        {/* Progress Bar */}
        <div className="mt-[200px]">
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

        {/* Bottom Navigation */}
        <BottomNav onBack={() => navigate("/about")} onNext={handleSubmit} />
      </div>
    </div>
  );
};

export default Title06;
