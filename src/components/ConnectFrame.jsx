export default function ConnectFrame() {
  return (
    <div>
      {/* Second Column - Freelance Card Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src="src/assets/Subtract.svg"
          className="h-[530px] mt-[25px]"
          alt="Background"
        />

        {/* Heading */}
        <img
          src="src/assets/Vector.svg"
          className="absolute top-[40px] left-1/2 transform -translate-x-1/2"
        />

        <h3 className="absolute top-[80px] text-white text-[20px] font-[400] font-inter px-[10px]">
          Connect with top clients and freelancers worldwide.
        </h3>

        {/* Left Image */}
        <img
          src="src/assets/leftUnderScore.svg"
          className="absolute top-[40%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"
          alt="Left Underscore"
        />

        {/* Text between images */}
        <h4 className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[17px] font-inter font-[400] w-[330px] px-[20px]">
          Unlock endless opportunities – Search for your dream jobs start your
          journey!
        </h4>

        {/* Right Image */}
        <img
          src="src/assets/rightUnderScore.svg"
          className="absolute top-[57%] right-[20%] transform translate-x-1/2 -translate-y-1/2"
          alt="Right Underscore"
        />

        {/* Centered VectorStar Image */}
        <img
          src="src/assets/VectorStar.svg"
          className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[5px] z-[10]"
          alt="Centered Icon"
        />

        {/* New Image (Above VectorStar) */}
        <img
          src="src/assets/Subtract-white.svg"
          className="absolute top-[83%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-[20px] pr-[20px] z-[20]"
          alt="New Image Above VectorStar"
        />
        <img
          src="src/assets/Ellipse 1.svg"
          className="absolute top-[68%] left-[85%] transform   z-[20] w-[37px] h-[37px]"
        />
        <img
          src="src/assets/Vector-ellipse.svg"
          className="absolute top-[68%] left-[86%] transform   z-[30] w-[28px] h-[35px]"
        />
        {/* New Text Above Subtract-white.svg */}
        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-black z-[30] w-[80%]">
          <h4 className="text-[16px] font-[500] w-[300px]">
            Perfect place to get your best job, best freelancer you have been
            looking for!
          </h4>
          <p className="text-[14px] font-[400] mt-[5px]">
            Be among the best to experience the best in the world.
          </p>
          <div className="flex mt-2 mb-[-20px] ">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="user1"
              className="w-7 h-7 rounded-full border-2 border-white -ml-2"
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
    </div>
  );
}
