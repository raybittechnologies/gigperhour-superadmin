import { Outlet } from "react-router-dom";
import Sidebar from "../components/superAdmin/sideBar";
import Navbar from "../components/superAdmin/navbar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#f3f4f6] overflow-hidden">

      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">

        <Navbar />

        <div className="flex-1 p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;