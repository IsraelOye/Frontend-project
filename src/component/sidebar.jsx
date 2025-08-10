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
// import { Link } from "react-router-dom";
// import { FiHome, FiMapPin, FiMenu, FiX } from "react-icons/fi";
// import { MdLocalShipping } from "react-icons/md";
// import { AiOutlineHistory } from "react-icons/ai";

// const SideBar = ({ isCollapsed, setIsCollapsed }) => {
//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsCollapsed(!isCollapsed)}
//         className="fixed top-4 left-4 z-50 lg:hidden bg-green-900 text-white p-2 rounded-lg shadow-lg"
//       >
//         {isCollapsed ? <FiMenu size={20} /> : <FiX size={20} />}
//       </button>

//       {/* Overlay for mobile */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300 ${
//           !isCollapsed ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => setIsCollapsed(true)}
//       ></div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed lg:static z-30 bg-green-900 text-white h-full transition-all duration-300 flex flex-col
//         ${
//           // Mobile: full width when open, hidden when collapsed
//           // Desktop: responsive width based on collapse state
//           isCollapsed
//             ? "w-0 lg:w-16 -translate-x-full lg:translate-x-0"
//             : "w-64 translate-x-0"
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex items-center justify-between p-4">
//           <span
//             className={`font-bold text-lg transition-opacity duration-300 ${
//               isCollapsed ? "lg:opacity-0 lg:hidden" : "opacity-100"
//             }`}
//           >
//             My Dashboard
//           </span>
//           <button
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="hidden lg:block text-white hover:text-gray-300 cursor-pointer text-2xl"
//           >
//             {isCollapsed ? "›" : "‹"}
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 px-2 space-y-2 overflow-hidden">
//           <NavItem
//             to="/dashboard"
//             icon={<FiHome />}
//             label="Home"
//             collapsed={isCollapsed}
//             onClick={() => setIsCollapsed(true)} // Close mobile menu on navigation
//           />
//           <NavItem
//             to="/dashboard/shipment"
//             icon={<MdLocalShipping />}
//             label="Create Shipment"
//             collapsed={isCollapsed}
//             onClick={() => setIsCollapsed(true)}
//           />
//           <NavItem
//             to="/dashboard/history"
//             icon={<AiOutlineHistory />}
//             label="Shipment History"
//             collapsed={isCollapsed}
//             onClick={() => setIsCollapsed(true)}
//           />
//           <NavItem
//             to="/dashboard/track"
//             icon={<FiMapPin />}
//             label="Track Shipment"
//             collapsed={isCollapsed}
//             onClick={() => setIsCollapsed(true)}
//           />
//         </nav>
//       </aside>
//     </>
//   );
// };

// const NavItem = ({ to, icon, label, collapsed, onClick }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="flex items-center gap-3 p-2 rounded hover:bg-green-800 transition-colors duration-200"
//     title={collapsed ? label : ""} // Show tooltip when collapsed
//   >
//     <span className="text-lg flex-shrink-0">{icon}</span>
//     <span
//       className={`transition-opacity duration-300 whitespace-nowrap ${
//         collapsed ? "lg:opacity-0 lg:w-0 lg:overflow-hidden" : "opacity-100"
//       }`}
//     >
//       {label}
//     </span>
//   </Link>
// );

// export default SideBar;


import { Link } from "react-router-dom";
import { FiHome, FiMapPin, FiX } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";

const SideBar = ({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50 bg-green-900 text-white h-full transition-all duration-300 flex flex-col
          ${
            // Mobile: slide in/out from left
            isMobileOpen
              ? "w-64 translate-x-0"
              : "w-64 -translate-x-full md:translate-x-0"
          }
          ${
            // Desktop: collapse/expand
            isCollapsed ? "md:w-16" : "md:w-64"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-green-800">
          {/* Logo/Title - hide when collapsed on desktop */}
          <span
            className={`font-bold text-lg transition-all duration-300 ${
              isCollapsed
                ? "md:opacity-0 md:w-0 md:overflow-hidden"
                : "opacity-100"
            }`}
          >
            My Dashboard
          </span>

          {/* Mobile close button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden text-white hover:text-gray-300 p-1"
            aria-label="Close sidebar"
          >
            <FiX size={20} />
          </button>

          {/* Desktop collapse/expand button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:block text-white hover:text-gray-300 text-3xl"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? "›" : "‹"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          <NavItem
            to="/dashboard"
            icon={<FiHome />}
            label="Home"
            collapsed={isCollapsed}
            onMobileClick={() => setIsMobileOpen(false)}
          />
          <NavItem
            to="/dashboard/shipment"
            icon={<MdLocalShipping />}
            label="Create Shipment"
            collapsed={isCollapsed}
            onMobileClick={() => setIsMobileOpen(false)}
          />
          <NavItem
            to="/dashboard/history"
            icon={<AiOutlineHistory />}
            label="Shipment History"
            collapsed={isCollapsed}
            onMobileClick={() => setIsMobileOpen(false)}
          />
          <NavItem
            to="/dashboard/track"
            icon={<FiMapPin />}
            label="Track Shipment"
            collapsed={isCollapsed}
            onMobileClick={() => setIsMobileOpen(false)}
          />
        </nav>

        {/* Footer (optional) */}
        <div
          className={`p-4 border-t border-green-800 ${
            isCollapsed ? "md:px-2" : ""
          }`}
        >
          <div
            className={`text-xs text-green-200 transition-all duration-300 ${
              isCollapsed
                ? "md:opacity-0 md:w-0 md:overflow-hidden"
                : "opacity-100"
            }`}
          >
            Dashboard v1.0
          </div>
          {isCollapsed && (
            <div className="hidden md:block text-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mx-auto"></div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

const NavItem = ({ to, icon, label, collapsed, onMobileClick }) => (
  <Link
    to={to}
    onClick={onMobileClick} // Close mobile sidebar when navigating
    className={`
      group flex items-center gap-3 p-3 rounded-lg transition-all duration-200
      hover:bg-green-800 active:bg-green-700
      ${collapsed ? "md:justify-center md:px-2" : ""}
    `}
    title={collapsed ? label : ""} // Tooltip for collapsed state
  >
    <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
      {icon}
    </span>
    <span
      className={`
        transition-all duration-300 whitespace-nowrap
        ${collapsed ? "md:opacity-0 md:w-0 md:overflow-hidden" : "opacity-100"}
      `}
    >
      {label}
    </span>
  </Link>
);

export default SideBar;