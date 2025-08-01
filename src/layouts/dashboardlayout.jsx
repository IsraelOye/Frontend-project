import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";
const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <main className="bg-gray-200 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;