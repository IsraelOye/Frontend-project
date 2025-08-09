// import { Link } from "react-router-dom";
// import { CiLogout } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";
// import { CiSettings } from "react-icons/ci";
// import { CiHome } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const SideBar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");

//     navigate("/");
//   };
//   return (
//     <div className="w-60 bg-gray-700 max-h-screen px-5 text-white">
//       <h1 className="text-2xl font-bold my-3">My Dashboard</h1>
//       <div className="flex">
//         <div className="space-y-2">
//           <p className="font-medium text-lg hover:text-blue-300 duration-300 flex items-center gap-1">
//             <CiHome />
//             <Link to="/dashboard" className="text-sm">
//               Home
//             </Link>
//           </p>
//           <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
//             <CiSettings />
//             <Link to="/dashboard/shipment" className="text-sm">
//               Create Shipment
//             </Link>
//           </p>
//           <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
//             <CiUser />
//             <Link to="/dashboard/history" className="text-sm">
//               Shipment History
//             </Link>
//           </p>
//           <p className="mb-5 font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
//             <CiUser />
//             <Link to="/dashboard/track" className="text-sm">
//               Track Shipment
//             </Link>
//           </p>
//         </div>
//       </div>

//       <footer className="">
//         <p className="font-medium hover:text-blue-300 duration-300 flex items-center gap-1">
//           <CiLogout />
//           <button onClick={handleLogout} className="text-sm">
//             Logout
//           </button>
//         </p>
//       </footer>

//       {/* Mobile Toggle Button */}
//       <button
//         className="absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded lg:hidden"
//         onClick={toggleSidebar}
//       >
//         ☰
//       </button>
//     </div>
//   );
// };

// export default SideBar;



// SideBar.jsx
import { Link } from "react-router-dom";
import { FiHome, FiMapPin } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";

const SideBar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300 ${
          isCollapsed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCollapsed(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-30 bg-green-900 text-white h-full transition-all duration-300 flex flex-col
        ${isCollapsed ? "w-16" : "w-64"} `}
      >
        {/* Logo */}
        <div className="flex items-end justify-between p-4">
          {!isCollapsed && (
            <span className="font-bold text-lg">My Dashboard</span>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:block text-white hover:text-gray-300 cursor-pointer text-2xl"
          >
            {isCollapsed ? "›" : "‹"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-2">
          <NavItem
            to="/dashboard"
            icon={<FiHome />}
            label="Home"
            collapsed={isCollapsed}
          />
          <NavItem
            to="/dashboard/shipment"
            icon={<MdLocalShipping />}
            label="Create Shipment"
            collapsed={isCollapsed}
          />
          <NavItem
            to="/dashboard/history"
            icon={<AiOutlineHistory />}
            label="Shipment History"
            collapsed={isCollapsed}
          />
          <NavItem
            to="/dashboard/track"
            icon={<FiMapPin />}
            label="Track Shipment"
            collapsed={isCollapsed}
          />
        </nav>
      </aside>
    </>
  );
};

const NavItem = ({ to, icon, label, collapsed }) => (
  <Link
    to={to}
    className="flex items-center gap-3 p-2 rounded hover:bg-green-800"
  >
    <span className="text-lg">{icon}</span>
    {!collapsed && <span>{label}</span>}
  </Link>
);

export default SideBar;
