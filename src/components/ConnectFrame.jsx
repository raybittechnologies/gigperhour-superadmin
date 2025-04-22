export default function ConnectFrame() {
  return (
    <div className="relative w-[380px] h-[550px] lg:h-[513px] overflow-hidden rounded-2xl mt-8">
      {" "}
      {/* Background Image */}
      <img
        src="src/assets/Subtract.svg"
        className="w-full h-full object-cover absolute inset-0 z-0"
        alt="Background"
      />
      {/* Heading Icon */}
      <img
        src="src/assets/Vector.svg"
        className="absolute top-[30px] left-1/2 transform -translate-x-1/2 z-10"
        alt="Star Icon"
      />
      {/* Top Heading */}
      <h3 className="absolute top-[70px] left-[30px] text-white text-[20px] font-[400] font-inter px-4 z-10">
        Connect with top clients and freelancers worldwide.
      </h3>
      {/* Decorative Underscores */}
      <img
        src="src/assets/leftUnderScore.svg"
        className="absolute top-[45%] left-[12%] transform -translate-x-1/2 -translate-y-1/2 z-10"
        alt="Left Underscore"
      />
      <img
        src="src/assets/rightUnderScore.svg"
        className="absolute top-[52%] right-[15%] transform translate-x-1/2 -translate-y-1/2 z-10"
        alt="Right Underscore"
      />
      {/* Center Quote */}
      <h4 className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[17px] font-inter font-[400] w-[300px] text-center z-10 px-4">
        Unlock endless opportunities – Search for your dream jobs start your
        journey!
      </h4>
      {/* Center Icon */}
      <img
        src="src/assets/VectorStar.svg"
        className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[5px] z-[10]"
        alt="Centered Icon"
      />
      {/* Bottom Card (White Sub-section) */}
      <img
        src="src/assets/Subtract-white.svg"
        className="absolute top-[78%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[20px] z-10"
        alt="White Card BG"
      />
      {/* Highlight Bubble */}
      <img
        src="src/assets/Ellipse 1.svg"
        className="absolute top-[64%] left-[85%] z-20 w-[37px] h-[37px]"
        alt="Ellipse"
      />
      <img
        src="src/assets/Vector-ellipse.svg"
        className="absolute top-[64%] left-[86%] z-30 w-[28px] h-[35px]"
        alt="Vector Ellipse"
      />
      {/* Bottom Text Content */}
      <div className="absolute top-[78%] left-[20px]  pl-3 transform -translate-y-1/2 text-black z-30 w-[320px]">
        <h4 className="text-[16px] font-[500]">
          Perfect place to get your best job, <br /> best freelancer you have
          been looking for!
        </h4>
        <p className="text-[14px] font-[400] mt-[5px]">
          Be among the best to experience the best in the world.
        </p>

        {/* Avatars */}
        <div className="flex justify-start mt-2">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="user1"
            className="w-7 h-7 rounded-full border-2 border-white -ml-2 first:ml-0"
          />
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="user2"
            className="w-7 h-7 rounded-full border-2 border-white -ml-2"
          />
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="user3"
            className="w-7 h-7 rounded-full border-2 border-white -ml-2"
          />
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="user4"
            className="w-7 h-7 rounded-full border-2 border-white -ml-2"
          />
        </div>
      </div>
    </div>
  );
}
