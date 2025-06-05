import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkMode";

const AccountSuccess = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/about");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center px-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-lg w-full text-center">
        {/* Lottie Animation */}
        <div className="flex justify-center mb-6">
          <DotLottieReact
            className="w-[280px] md:w-[360px] lg:w-[390px] h-auto mt-[-50px]"
            src="src/assets/Animation - 1741239542947.lottie"
            loop
            autoplay
          />
        </div>

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          🎉 Congratulations!
        </h2>
        <p className="text-base md:text-lg mb-4">
          Your account has been successfully created.
        </p>

        {/* Redirecting Message */}
        <div className="flex items-center justify-center gap-2">
          <p className="text-[16px] md:text-[18px]">Redirecting you</p>
          {[...Array(3)].map((_, index) => (
            <motion.img
              key={index}
              src="src/assets/Ellipse-loader.svg"
              alt={`Loading ${index + 1}`}
              className="w-4 h-4 md:w-5 md:h-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSuccess;
