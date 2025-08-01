import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";


const Settings = () => {
  return (
    <div className="py-6 px-10 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      {/* Profile Settings */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h3 className="text-lg font-semibold mb-3">Profile Settings</h3>
        <div className="space-y-4">
          <div className="relative">
            <span className="text-lg absolute top-3 left-2">
              <CiUser />
            </span>
            <input
              type="text"
              placeholder="Full name"
              className="w-full py-2 px-7 border border-gray-700 rounded-xl placeholder:text-gray-700 placeholder:text-[15px] outline-cyan-500"
            />
          </div>

          <div className="relative">
            <span className="text-lg text-gray-800 absolute top-3 left-2">
              <AiOutlineMail />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-2 px-7 border border-gray-700  rounded-xl placeholder:text-gray-700 placeholder:text-[15px] outline-cyan-500"
            />
          </div>

          <div className="relative">
            <span className="text-lg text-gray-800 absolute top-3 left-2">
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              placeholder="New Password"
              className="w-full py-2 px-7 border border-gray-700 rounded rounded-xl placeholder:text-gray-700 placeholder:text-[15px] outline-cyan-500"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Update Profile
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Preferences</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Enable Dark Mode
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Email Notifications
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;