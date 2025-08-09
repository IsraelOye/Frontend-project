// import { Outlet } from "react-router-dom";
// import SideBar from "../component/sidebar";
// import { Link } from "react-router-dom";
// const DashboardLayout = () => {
//   return (
//     <div className="flex h-screen">
//       <SideBar />

//       <main className="bg-gray-50 w-full">
//         <Link to="/" className="italic text-blue-700 text-sm px-3 hover:text-blue-800 hover:underline">Back to the main page</Link>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;


// DashboardLayout.jsx
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../component/sidebar";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main content */}
      <main className="bg-gray-50 w-full transition-all duration-300 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-white shadow px-4 py-2">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <FiMenu size={22} />
          </button>
          <Link
            to="/"
            className="italic text-blue-700 text-sm hover:text-blue-800 hover:underline"
          >
            Back to the main page
          </Link>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
