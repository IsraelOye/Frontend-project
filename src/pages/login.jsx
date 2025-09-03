// import { useState } from "react";
// import BGimage from "../assets/logo-3.png";
// import { Link } from "react-router-dom";
// import { GoEye, GoEyeClosed } from "react-icons/go";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loginData = {
//       email: email,
//       password: password
//     };

//     try {
//       const response = await fetch ("https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: JSON.stringify(loginData)
//       })
//       const data = await response.json();
//       console.log(data);
//       if (!response.ok) {
//         throw new Error("Login failed. Please check your credentials.");
//       }
      
//       localStorage.setItem("user", JSON.stringify({email}));
//       localStorage.setItem("token", data.access_token);
//       console.log(localStorage.getItem("token"));
//       toast.success("Login successful!");
//       navigate("/") 
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error(`Error: ${error.message}`);
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div
//       className="relative min-h-screen bg-contain bg-no-repeat bg-center"
//       style={{ backgroundImage: `url(${BGimage})` }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* Centered Login Box */}
//       <div className="relative flex justify-center items-center min-h-screen backdrop-blur-sm bg-white/20">
//         <div className="rounded-lg shadow-lg w-full max-w-lg p-8">
//           <h1 className="text-4xl font-medium text-center mb-1 text-gray-900">
//             Login
//           </h1>
//           <p className=" font-medium text-sm text-center mb-12 text-gray-900">
//             Hi, Welcome back👋
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm font-medium">Email</label>
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="border border-gray-300 rounded-md w-full px-3 py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-medium">Password</label>
//                 <div className="relative">
//                   <input
//                     type={isPasswordVisible ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     className="block border border-gray-300 rounded-md w-full px-3 py-2 placeholder:text-sm placeholder:text-gray-900 mt-2 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
//                     required
//                   />
//                   <div
//                     className="absolute top-3.5 right-3 text-[18px] cursor-pointer"
//                     onClick={() => setIsPasswordVisible(!isPasswordVisible)}
//                   >
//                     {isPasswordVisible ? <GoEye /> : <GoEyeClosed />}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center my-4">
//               <label className="flex items-center gap-2 text-sm font-medium">
//                 <input type="checkbox" />
//                 Remember Me
//               </label>
//               <Link className="text-gray-900 text-sm font-medium">
//                 Forgot Password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               className="bg-indigo-700 py-2.5 text-white text-sm font-medium rounded-md mt-3 mb-5 cursor-pointer w-full hover:bg-indigo-800"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <p className="text-center text-sm mt-5">
//             Not registered yet?{" "}
//             <Link to="/create" className="text-gray-900 font-medium">
//               Create an account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import BGimage from "../assets/logo-3.png";
import { Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      localStorage.setItem("user", JSON.stringify({ email }));
      localStorage.setItem("token", data.access_token);
      console.log(localStorage.getItem("token"));
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-contain bg-no-repeat bg-center sm:bg-cover"
      style={{ backgroundImage: `url(${BGimage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Centered Login Box */}
      <div className="relative flex justify-center items-center min-h-screen backdrop-blur-sm bg-white/20 px-4 py-6">
        <div className="rounded-lg shadow-lg w-full max-w-lg p-4 sm:p-6 md:p-8 mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-1 text-gray-900">
            Login
          </h1>
          <p className="font-medium text-sm text-center mb-8 sm:mb-10 md:mb-12 text-gray-900">
            Hi, Welcome back👋
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-900 block">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md w-full px-3 py-2.5 sm:py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition text-base sm:text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="block border border-gray-300 rounded-md w-full px-3 py-2.5 sm:py-2 placeholder:text-sm placeholder:text-gray-900 mt-2 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition text-base sm:text-sm pr-12"
                    required
                  />
                  <div
                    className="absolute top-4 sm:top-3.5 right-3 text-lg sm:text-[18px] cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? <GoEye /> : <GoEyeClosed />}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 my-4 sm:my-4">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-900">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 focus:ring-indigo-500 focus:ring-2"
                />
                Remember Me
              </label>
              <Link className="text-gray-900 text-sm font-medium hover:text-indigo-700 transition-colors">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-indigo-700 py-3 sm:py-2.5 text-white text-base sm:text-sm font-medium rounded-md mt-4 sm:mt-3 mb-4 sm:mb-5 cursor-pointer w-full hover:bg-indigo-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-4 sm:mt-5 text-gray-900">
            Not registered yet?{" "}
            <Link
              to="/create"
              className="text-indigo-700 font-medium hover:text-indigo-800 transition-colors"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;