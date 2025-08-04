import { useState } from "react";
import BGimage from "../assets/logo-3.png";
import { Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${BGimage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Centered Login Box */}
      <div className="relative flex justify-center items-center min-h-screen backdrop-blur-sm bg-white/20">
        <div className="bg-transparen rounded-lg shadow-lg w-full max-w-lg p-8">
          <h1 className="text-4xl font-medium text-center mb-15">Login</h1>

          <form>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md w-full px-3 py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="block border border-gray-300 rounded-md w-full px-3 py-2 placeholder:text-sm placeholder:text-gray-900 mt-2 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    required
                  />
                  <div
                    className="absolute top-3.5 right-3 text-[18px] cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? <GoEye /> : <GoEyeClosed />}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center my-4">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" />
                Remember Me
              </label>
              <Link className="text-indigo-700 text-sm font-medium">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-indigo-700 py-2.5 text-white text-sm font-medium rounded-md mt-3 mb-5 cursor-pointer w-full hover:bg-indigo-800"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-5">
            Not registered yet?{" "}
            <Link to="/create" className="text-indigo-700 font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
