import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../../components/star";
const SignUpSnd = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Semi-transparent overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center relative pt-6  gap-[4.4rem]">
        <Star />
        {/* First Column (Two Rows: Heading + Sign-Up Form) */}
        <div className="flex flex-col w-[573px]">
          {/* First Row - Heading */}
          <div className="mb-6 mt-[38px]">
            <h3 className="text-[#000000] w-[122px] font-inter font-[400] text-[25px] absolute  top-[6px] mt-[-10px] leading-[58.09px] tracking-[-1%]">
              Elevance
            </h3>
            <h3 className="font-inter font-[400] text-[20px] mt-[-7px] leading-[29.05px] tracking-[-0.01em] relative">
              Create your account and create a world of opportunities
            </h3>
          </div>

          {/* Second Row - Sign Up Form */}
          <div className=" backdrop-blur-3xl py-[10px] rounded-2xl bg-gradient-to-b from-black/10 to-black/30 shadow-lg  border-0 border-solid border-white mt-[-11px] pl-[44px] pr-[44px] h-[480px]">
            <img
              src="src/assets/Email Marketing 3D Model.svg"
              alt="Illustration of a mailbox with a megaphone"
              className="mx-auto object-cover w-[200px] h-[200px]"
            />
            <div className="">
              <h3 className="text-[24px] font-inter font-[400] mb-4 text-white text-center">
                Verify your email to continue
              </h3>
              <h4 className="text-white font-[300] w-[493px] h-[72px] text-[19px] mb-6">
                We have sent a verification email to: ProductX@gmail.com. Please
                check your inbox and click the link to confirm your email
                address.
              </h4>
              <div className="flex justify-center mb-6">
                <button className="text-white bg-none mr-[130px]">
                  Send again
                </button>
                <button
                  className="bg-[#E66D3D] text-white px-4 py-2 rounded w-[170px]"
                  onClick={() => navigate("/gettingStarted")}
                >
                  Go to mail
                </button>
              </div>
              <div className="flex flex-col items-center">
                {/* Clickable Link */}
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="text-white text-center text-[14px] underline"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      setShowPopup(true);
                    }}
                  >
                    Didnt receive email?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column - Freelance Card Section */}
        <img src="src/assets\connetCard.svg" className="h-[530px] mt-[25px]" />
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center  z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg  w-[700px] left-[80px]  h-[458px] relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Didn’t receive email?</h2>
              <button
                className="text-black  font-black text-xl w-[24px] h-[24px]"
                onClick={() => setShowPopup(false)}
              >
                {"\u00d7"}
              </button>
            </div>
            <ol className="list-decimal list-inside space-y-4 text-gray-800">
              <li className="font-[400]  text-[16px] font-intertext-[black]">
                Resend the email.
              </li>
              <li className="font-[400]  text-[16px] font-intertext-[black]">
                Search for the email
                <p className=" text-[14px] font-inter font-[300] text-[black] mt-5 ml-[15px]">
                  We’ll send the email from ‘Product X’ to make it easy to find.
                  If you don’t see it in your inbox, check your other folders,
                  such as Spam, Junk, Trash, Deleted Items, or Archive, in case
                  it was filtered.
                </p>
              </li>
              <li className="font-[400] text-[black]">
                How do I confirm my email?
                <p className="text-[14px] font-inter font-[300] text-[black] mt-5  ml-[15px]">
                  If you’re unable to click the link, try copying the full URL
                  from the email and pasting it into a new browser window.
                </p>
              </li>
              <li className="font-[400] text-[black]">Update your email</li>
            </ol>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="border border-gray-300 rounded-lg p-2 w-[400px] focus:outline-none focus:ring-1 focus:ring-[#E66D3D] 
             placeholder:text-[14px] placeholder:leading-[16.94px] placeholder:tracking-[0] placeholder:font-light placeholder:text-gray-500 font-Inter pl-6"
              />

              <button className="bg-[#E66D3D] text-white px-4 py-2 rounded-lg ml-[36px] w-[200px] pt[15px] pb-[10px] h-[50px] ">
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
