import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
import MobileSidebar from "../../components/ClientScreen/mobileSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FinalizeJob() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "text-[#333333]"
      }`}
    >
      <NavBarUser changeMode={setDarkMode} role="client" />

      <div className="flex h-[calc(100vh-64px)] hide-scrollbar">
        <div className="md:w-[240px] hidden md:fixed md:left-0 md:top-[64px] md:px-[20px] md:py-[20px] md:bottom-0 md:z-10 md:block">
          <div className="h-full overflow-y-auto overflow-x-hidden hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>
        {/* Mobile Sidebar - shown only below 768px */}
        <div className="fixed top-[48px] pt-[20px]  bottom-0 z-10">
          <div className="block  h-full overflow-y-auto overflow-x-hidden hide-scrollbar py-[20px] md:hidden">
            <MobileSidebar />
          </div>
        </div>

        <div className="md:ml-[240px] ml-[100px] flex-1 overflow-y-auto md:p-6 px-3 py-6 hide-scrollbar">
          <div
            className={`md:p-6 px-3 py-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h2 className="md:text-2xl text-xl  mb-6">
              Choose the right option for you
            </h2>

            <div className="space-y-6">
              <div className="border border-[#555555] rounded-md px-4 py-3 flex items-start justify-between max-w-xl shadow-sm">
                <div className="w-full">
                  <h2 className="text-lg">Post a standard job</h2>
                  <p className="text-sm mt-1">Free</p>
                  <ul className="list-disc ml-5 mt-3 text-sm space-y-3">
                    <li>Get proposals from skilled freelancers and agencies</li>
                    <li>Invite up to 30 freelancers total to apply</li>
                  </ul>
                  <button className="mt-4 bg-[#E66D3D] font-semibold text-white px-9 py-2 rounded-[5px] transition">
                    Continue
                  </button>
                </div>

                <img
                  src="src/assets/clientscreen/client-img.svg"
                  className="hidden min-[876px]:block "
                  alt="client"
                />
              </div>

              <div className="bg-[#FFCBC6] rounded-lg px-4 py-3 max-w-xl flex items-center justify-between shadow-md">
                <div className="w-full md:w-auto">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Post as featured job
                  </h2>

                  {/* Mobile-only image */}
                  <div className="block md:hidden my-4 w-full">
                    <img
                      src="src/assets/clientscreen/premium-quality-ZHiohSfvUf.svg"
                      alt="Premium"
                      className="mx-auto max-w-[150px] w-full h-auto object-contain"
                    />
                  </div>

                  <button className="bg-[#E66D3D] font-semibold text-white px-9 py-2 md:mt-20 rounded-[5px] transition w-full  md:w-auto">
                    Continue
                  </button>
                </div>

                {/* Desktop-only image */}
                <div className="hidden md:block ml-4 w-[150px] h-[150px]">
                  <img
                    src="src/assets/clientscreen/premium-quality-ZHiohSfvUf.svg"
                    alt="Premium"
                  />
                </div>
              </div>

              <div className="text-orange-600 mt-20  text-sm underline">
                Save draft without posting.
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 w-full">
                <button
                  className="w-full sm:w-auto border border-[#E66D3D] font-[600] px-6 py-2 rounded-md"
                  onClick={() => navigate("/jobReview")}
                >
                  Back
                </button>
                <button
                  className="w-full sm:w-auto bg-[#E66D3D] font-[600] text-white px-6 py-2 rounded-md"
                  onClick={() => navigate("/jobSuccess")}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
