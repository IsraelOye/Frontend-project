import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <div className="w-60 bg-gray-700 max-h-screen px-5 text-white">
      <h1 className="text-2xl font-bold my-3">My Dashboard</h1>
      <div className="flex">
        <div className="space-y-2">
          <p className="font-medium text-lg hover:text-blue-300 duration-300 flex items-center gap-1">
            <CiHome />
            <Link to="/dashboard" className="text-sm">
              Home
            </Link>
          </p>
          <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
            <CiSettings />
            <Link to="/dashboard/shipment" className="text-sm">
              Create Shipment
            </Link>
          </p>
          <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
            <CiUser />
            <Link to="/dashboard/history" className="text-sm">
              Shipment History
            </Link>
          </p>
          <p className="mb-5 font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
            <CiUser />
            <Link to="/dashboard/track" className="text-sm">
              Track Shipment
            </Link>
          </p>
        </div>
      </div>

      <footer className="">
        <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
          <CiLogout />
          <button onClick={handleLogout} className="text-sm">
            Logout
          </button>
        </p>
      </footer>

      {/* Mobile Toggle Button */}
      <button
        className="absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded lg:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  );
};

export default SideBar;
