import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login-2")
  }
  return (
    <div className="w-60 bg-gray-700 max-h-screen px-5 text-white">
      <h1 className="text-3xl font-bold my-3">Admin</h1>
      <div className="flex">
        <div className="space-y-2">
          <p className="font-medium text-lg hover:text-blue-300 duration-300 flex items-center gap-1">
            <CiHome />
            <Link to="/dashboard" className="text-sm">
              Dashboard
            </Link>
          </p>
          <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
            <CiSettings />
            <Link to="/dashboard/settings" className="text-sm">
              Settings
            </Link>
          </p>
          <p className="mb-5 font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
            <CiUser />
            <Link to="/dashboard/users" className="text-sm">
              Users
            </Link>
          </p>
        </div>
      </div>

      <footer className="">
        <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
          <CiLogout />
          <button
          // onClick={handleLogout}
           className="text-sm">
            Logout
          </button>
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
