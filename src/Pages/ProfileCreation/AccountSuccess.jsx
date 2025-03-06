import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const AccountSuccess = () => {
  const [darkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/about");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`min-h-screen z-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container text-center">
        <div className="flex justify-center mb-4 ">
          <DotLottieReact
            className="w-[390px] h-[390px]"
            src="src/assets/Animation - 1741239542947.lottie"
            loop
            autoplay
          />
        </div>
        <h2 className="text-lg md:text-xl font-semibold">
          Congratulations, your account has been successfully created..!
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <p className="text-[17px]">Redirecting you...</p>
          {[...Array(3)].map((_, index) => (
            <motion.img
              key={index}
              src="src/assets/Ellipse-loader.svg"
              alt={`Loading ${index + 1}`}
              className="w-5 h-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2, // Each dot appears with a delay
                repeat: Infinity, // Loop infinitely
                repeatType: "reverse", // Creates a smooth in-out effect
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSuccess;
