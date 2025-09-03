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
          fixed md:static z-50 bg-blue-900 text-white h-full transition-all duration-300 flex flex-col
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
          className={`p-4 border-t border-blue-800 ${
            isCollapsed ? "md:px-2" : ""
          }`}
        >
          <div
            className={`text-xs text-blue-200 transition-all duration-300 ${
              isCollapsed
                ? "md:opacity-0 md:w-0 md:overflow-hidden"
                : "opacity-100"
            }`}
          >
            Dashboard v1.0
          </div>
          {isCollapsed && (
            <div className="hidden md:block text-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto"></div>
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
      hover:bg-blue-800 active:bg-blue-700
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
