// import { useState } from "react";
// import { Link } from "react-router-dom";
// import BGimage from "../assets/logo-3.png";
// import { GoEye, GoEyeClosed } from "react-icons/go";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const createAccount = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [error, setError] = useState(null);
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [loading, setLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true)

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!")
//       // {error.}
//       setLoading(false);
//       return;
//     }

//     if (password.length < 6) {
//       toast.error("Password must be at least 6 characters long!");
//       setLoading(false);
//       return;
//     }

//     const formData = {
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       password: password
//     }

//     try {
//       const response = await fetch("https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/register", {
//         method:"POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "Application/json"
//         },
//         body: JSON.stringify(formData)
//       })

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data?.detail || "Unable to create account. Please check your details and try again.");
//         }
//       // console.log("Status:", response.status);
//       // console.log("Response:", data);
//       console.log(data)
//       toast.success("Account created!");
//       navigate("/login");
//     } catch (error) {
//       console.error("Error", error);
//       setError(error.message);
//       toast.error(`Error: ${error.message}`);
//     } finally{
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
//           <h1 className="text-4xl font-medium text-center mb-15">
//             Create An Accouunt
//           </h1>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   placeholder="First Name"
//                   className="border border-gray-300 rounded-md w-full px-3 py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   placeholder="Last Name"
//                   className="border border-gray-300 rounded-md w-full px-3 py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Adress"
//                   className="border border-gray-300 rounded-md w-full px-3 py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
//                   required
//                 />
//               </div>

//               <div>
//                 <div className="relative">
//                   <input
//                     type={isPasswordVisible ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
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
//               <div>
//                 <div className="relative">
//                   <input
//                     type={isConfirmPasswordVisible ? "text" : "password"}
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm Password"
//                     className="block border border-gray-300 rounded-md w-full px-3 py-2 placeholder:text-sm placeholder:text-gray-900 mt-2 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
//                     required
//                   />
//                   <div
//                     className="absolute top-3.5 right-3 text-[18px] cursor-pointer"
//                     onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
//                   >
//                     {isConfirmPasswordVisible ? <GoEye /> : <GoEyeClosed />}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="bg-indigo-700 py-2.5 text-white text-sm font-medium rounded-md mt-10 mb-2 cursor-pointer w-full hover:bg-indigo-800"
//             >
//               {loading ? "Creating account..." : "Sign up"}
//             </button>
//             {error && <p className="text-red-700 text-sm">{error}</p>}
//           </form>

//           <p className="text-center text-sm mt-5">
//             Already have an account?{" "}
//             <Link to="/login" className="text-indigo-700 font-medium">
//               Log in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default createAccount;


import { useState } from "react";
import { Link } from "react-router-dom";
import BGimage from "../assets/logo-3.png";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const createAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      // {error.}
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      setLoading(false);
      return;
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "Application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data?.detail ||
            "Unable to create account. Please check your details and try again."
        );
      }
      // console.log("Status:", response.status);
      // console.log("Response:", data);
      console.log(data);
      toast.success("Account created!");
      navigate("/login");
    } catch (error) {
      console.error("Error", error);
      setError(error.message);
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-6 sm:mb-8 md:mb-15">
            Create An Account
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="border border-gray-300 rounded-md w-full px-3 py-2.5 sm:py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition text-base sm:text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-md w-full px-3 py-2.5 sm:py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition text-base sm:text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-md w-full px-3 py-2.5 sm:py-2 outline-none placeholder:text-sm placeholder:text-gray-900 mt-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition text-base sm:text-sm"
                  required
                />
              </div>

              <div>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
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
              <div>
                <div className="relative">
                  <input
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="block border border-gray-300 rounded-md w-full px-3 py-2.5 sm:py-2 placeholder:text-sm placeholder:text-gray-900 mt-2 outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition text-base sm:text-sm pr-12"
                    required
                  />
                  <div
                    className="absolute top-4 sm:top-3.5 right-3 text-lg sm:text-[18px] cursor-pointer"
                    onClick={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                  >
                    {isConfirmPasswordVisible ? <GoEye /> : <GoEyeClosed />}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-indigo-700 py-3 sm:py-2.5 text-white text-base sm:text-sm font-medium rounded-md mt-6 sm:mt-8 md:mt-10 mb-2 cursor-pointer w-full hover:bg-indigo-800 transition-colors"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
            {error && <p className="text-red-700 text-sm mt-2">{error}</p>}
          </form>

          <p className="text-center text-sm mt-4 sm:mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-700 font-medium hover:text-indigo-800 transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default createAccount;