import { Outlet, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import SideBar from "../component/sidebar";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop collapse
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile open/close

  // Optional: close mobile sidebar on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar, controlled via props */}
      <SideBar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto transition-all duration-300">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between p-3 border-b bg-white shadow-sm md:hidden">
          <button
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open sidebar"
            className="text-gray-700"
          >
            <FiMenu size={24} />
          </button>
          <Link
            to="/"
            className="italic text-blue-700 text-sm hover:text-blue-800 hover:underline"
          >
            Back to the main page
          </Link>
        </div>

        {/* Desktop back link */}
        <div className="hidden md:block px-3 pt-2">
          <Link
            to="/"
            className="italic text-blue-700 text-sm hover:text-blue-800 hover:underline"
          >
            Back to the main page
          </Link>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;