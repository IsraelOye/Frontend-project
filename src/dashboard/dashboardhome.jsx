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
      const response = await fetch("https://dummyjson.com/auth/me", {
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
        <div className="px-10 flex items-center gap-5 py-3 bg-white rounded-2xl mb-4">
          <div>
            <img
              src={
                user.image ||
                "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(user.firstName + " " + user.lastName)
              }
              alt="user avatar"
              className="h-24 w-24 object-cover rounded-full border border-gray-300"
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-green-900 font-medium">
              {user.firstName} {user.lastName}
            </h2>
            <p className="capitalize text-gray-700 text-sm">{user.role}</p>
            <p className="text-gray-700 text-sm">
              {user.address.city}, {user.address.country}
            </p>
          </div>
        </div>
        <div className="px-10 bg-white rounded-2xl">
          <div className="flex justify-between items-center py-5">
            <h2 className="text-green-900 font-medium text-lg">
              Personal Information
            </h2>
            <button className="flex items-center text-sm text-white bg-yellow-600 px-3 py-1 rounded-md gap-2 cursor-pointer">
              Edit <LuPencilLine className="text-sm" />
            </button>
          </div>
          <hr className="text-gray-300 " />
          <div className="grid grid-cols-3 text-sm font-medium my-4 space-y-1 mb-4">
            <p className="capitalize text-gray-700 text-sm">First Name</p>
            <p className="capitalize text-gray-700 text-sm">Last Name</p>
            <p className="capitalize text-gray-700 text-sm">Date of Birth</p>

            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.birthDate}</p>
          </div>
          <div className="grid grid-cols-3 text-sm font-medium my-4 space-y-1 mb-4">
            <p className="capitalize text-gray-700 text-sm">Email Address</p>
            <p className="capitalize text-gray-700 text-sm">Phone Number</p>
            <p className="capitalize text-gray-700 text-sm">User Role</p>

            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p className="capitalize">{user.role}</p>
          </div>
        </div>

        <div className="px-10 bg-white rounded-2xl pb-2">
          <div className="flex items-center justify-between py-5">
            <h2 className="text-green-900 font-medium text-lg">Address</h2>
            <button className="flex items-center text-sm px-3 py-1 rounded-md gap-2 border border-gray-500 cursor-pointer">
              Edit <LuPencilLine className="text-sm" />
            </button>
          </div>
          <hr className="text-gray-300 " />
          <div className="grid grid-cols-3 text-sm font-medium my-4 space-y-1 mb-4">
            <p className="capitalize text-gray-700 text-sm">Country</p>
            <p className="capitalize text-gray-700 text-sm">City</p>
            <p className="capitalize text-gray-700 text-sm">Postal Code</p>

            <p>{user.address.country}</p>
            <p>{user.address.city}</p>
            <p>{user.address.postalCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
