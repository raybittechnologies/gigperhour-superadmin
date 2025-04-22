import NavBarUser from "../../components/UserDashBoard/Navbar";
import SideBar from "../../components/ClientScreen/ClientSideBar";
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
        <div className="w-[240px] fixed left-0 top-[64px] px-[20px] py-[20px] bottom-0 z-10 ">
          <div className="h-full overflow-y-auto hide-scrollbar rounded-[8px]">
            <SideBar />
          </div>
        </div>

        <div className="ml-[240px] flex-1 overflow-y-auto p-6 hide-scrollbar">
          <div
            className={`p-6 border rounded-lg ${
              darkMode ? "border-[#E9E9E9]" : "border-[#555555]"
            }`}
          >
            <h2 className="text-2xl  mb-6">Choose the right option for you</h2>

            <div className="space-y-6">
              <div className="border border-[#555555] rounded-md px-4 py-3 flex items-center justify-between max-w-xl  shadow-sm">
                <div>
                  <h2 className="text-lg  ">Post a standard job</h2>
                  <p className="text-sm  mt-1">Free</p>
                  <ul className="list-disc ml-5 mt-3  text-sm space-y-3">
                    <li>Get proposals from skilled freelancers and agencies</li>
                    <li>Invite up to 30 freelancers total to apply</li>
                  </ul>
                  <button className="mt-4 bg-[#E66D3D] font-semibold text-white px-9 py-2 rounded-[5px] transition">
                    Continue
                  </button>
                </div>
                <img src="src/assets/clientscreen/client-img.svg" />
              </div>

              <div className="bg-[#FFCBC6] rounded-lg px-4 py-3 max-w-xl   flex items-center justify-between shadow-md">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Post as featured job
                  </h2>
                  <button className=" bg-[#E66D3D] font-semibold text-white px-9 py-2  mt-20 rounded-[5px] transition">
                    Continue
                  </button>
                </div>
                <div className="ml-4 w-[150px] h-[150px]">
                  <img src="src/assets/clientscreen/premium-quality-ZHiohSfvUf.svg" />
                </div>
              </div>

              <div className="text-orange-600 mt-20  text-sm underline">
                Save draft without posting.
              </div>

              <div className="flex justify-between pt-4">
                <button
                  className="border border-orange-500  font-semibold px-9 py-2 rounded-md  transition"
                  onClick={() => navigate("/jobReview")}
                >
                  Back
                </button>
                <button
                  className="bg-[#E66D3D] font-semibold text-white px-6 py-2 rounded-[6px] transition"
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
