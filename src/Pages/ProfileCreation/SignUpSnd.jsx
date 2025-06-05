import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConnectFrame from "../../components/ConnectFrame";
import Star from "../../components/star";
const SignUpSnd = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setShowPopup(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="">
      {/* Semi-transparent overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      <h3 className="text-[#000000] font-inter font-[400] text-[25px] absolute top-[6px] mt-[-14px] leading-[58.09px] tracking-[-1%] left-[6vw]">
        Elevance
      </h3>
      <h3 className="mt-[45px] left-[6vw] absolute">
        {" "}
        Create your account and create a world of opportunities
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center relative px-4  pt-6 gap-[4.4rem] min-h-screen">
        <Star />
        {/* First Column (Two Rows: Heading + Sign-Up Form) */}
        <div className="flex flex-col w-full px-[10px] mb-5 md:mb-0 md:w-[573px] md:mt-[65px] mt-20 ">
          {/* First Row - Heading */}

          {/* Second Row - Sign Up Form */}
          <div
            className=" backdrop-blur-0 md:backdrop-blur-3xl
    bg-transparent md:bg-gradient-to-b md:from-black/10 md:to-black/30
    text-black md:text-white
    shadow-lg w-full border md:border-0
    h-auto md:min-h-[485px] mt-[-11px] px-6 md:px-[44px]
    rounded-[1px] md:rounded-md py-[6px]"
          >
            <img
              src="src/assets/Email Marketing 3D Model.svg"
              alt="Illustration of a mailbox with a megaphone"
              className="mx-auto object-cover w-[150px] sm:w-[180px] md:w-[200px] h-auto"
            />
            <div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-[400] mb-4  text-center">
                Verify your email to continue
              </h3>
              <h4 className="font-[300] text-[16px] sm:text-[17px] md:text-[19px] mb-6 text-center md:text-left max-w-full md:max-w-[493px] mx-auto">
                We have sent a verification email to: ProductX@gmail.com. Please
                check your inbox and click the link to confirm your email
                address.
              </h4>
              <div className="flex flex-col md:flex-row justify-center items-center md:mb-6 gap-4 md:gap-0">
                <button className=" bg-none md:mr-[130px]">Send again</button>
                <button
                  className="bg-[#E66D3D]  px-4 py-2 rounded w-full max-w-[170px]"
                  onClick={() => navigate("/gettingStarted")}
                >
                  Go to mail
                </button>
              </div>
              <div className="flex flex-col items-center mt-4">
                {/* Clickable Link */}
                <div className="flex justify-center">
                  <a
                    href="#"
                    className={` text-center text-[14px] underline ${
                      isAnimating ? "animate-comeCloser" : ""
                    }`}
                    onClick={handleClick}
                  >
                    Didn t receive email?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ConnectFrame*/}
        <div className="hidden [@media(min-width:1119px)]:block ">
          <ConnectFrame />
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-[700px] h-auto max-h-[95vh] overflow-y-auto relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fadeInScale">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-semibold">
                Didn’t receive email?
              </h2>
              <button
                className="text-black font-black text-xl w-[24px] h-[24px]"
                onClick={() => setShowPopup(false)}
              >
                {"\u00d7"}
              </button>
            </div>

            {/* Instructions */}
            <ol className="list-decimal list-inside space-y-4 text-gray-800">
              <li className="font-[400] text-[16px] font-inter text-black">
                Resend the email.
              </li>
              <li className="font-[400] text-[16px] font-inter text-black">
                Search for the email
                <p className="text-[14px] font-inter font-[300] text-black mt-2 ml-[15px]">
                  We’ll send the email from ‘Product X’ to make it easy to find.
                  If you don’t see it in your inbox, check your other folders,
                  such as Spam, Junk, Trash, Deleted Items, or Archive, in case
                  it was filtered.
                </p>
              </li>
              <li className="font-[400] text-black">
                How do I confirm my email?
                <p className="text-[14px] font-inter font-[300] text-black mt-2 ml-[15px]">
                  If you’re unable to click the link, try copying the full URL
                  from the email and pasting it into a new browser window.
                </p>
              </li>
              <li className="font-[400] text-black">Update your email</li>
            </ol>

            {/* Input & Button */}
            <div className="mt-6 flex flex-col md:flex-row gap-4 md:items-center">
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="border border-gray-300 rounded-lg p-2 w-full md:w-[400px] focus:outline-none focus:ring-1 focus:ring-[#E66D3D] 
          placeholder:text-[14px] placeholder:font-light placeholder:text-gray-500 font-Inter pl-6"
              />
              <button className="bg-[#E66D3D] text-white px-4 py-2 rounded-lg w-full md:w-[200px] h-[50px]">
                Update & Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpSnd;
