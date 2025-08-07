import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import { LuPencilLine } from "react-icons/lu";

const DashboardHome = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const fetchprofile = async () => {
    try {
      const response = await fetch("https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/user", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch profile. Please log in again");
      }

      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchprofile();
  }, []);

  if (loading) {
    return (
      <p className="px-3 py-6 text-center text-blue-700">
        Fetching user profile...
      </p>
    );
  }

  if (error) {
    return <p className="px-3 py-6 text-center text-red-700">Error: {error}</p>;
  }

  if (!user) {
    return (
      <p className="px-3 py-6 text-center text-gray-700">
        No user data available
      </p>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen pt-2">
      <div className="max-w-5xl mx-auto px-10">
        <h1 className="text-green-900 text-2xl my-5 font-medium flex items-center gap-4">
          My Profile <hr className="flex-1 text-gray-300" />
        </h1>
      </div>
    </div>
  );
};

export default DashboardHome;
