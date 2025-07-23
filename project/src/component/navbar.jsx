import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center shadow-md">
       
        <div className="text-2xl font-bold">MyDashboard</div>

        <div className="flex space-x-6">
          <Link className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link className="hover:text-gray-300">
            Shipments
          </Link>
          <Link className="hover:text-gray-300">
            Reports
          </Link>
          <Link className="hover:text-gray-300">
            Settings
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <span className="cursor-pointer hover:text-gray-300">🔔</span>
          <span className="cursor-pointer hover:text-gray-300">👤</span>
        </div>
      </nav>
    );
}

export default Navbar;