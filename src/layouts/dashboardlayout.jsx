import { Outlet } from "react-router-dom";
import SideBar from "../component/sidebar";
import { Link } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <main className="bg-gray-50 w-full">
        <Link to="/" className="italic text-blue-700 text-sm px-3 hover:text-blue-800 hover:underline">Back to the main page</Link>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;