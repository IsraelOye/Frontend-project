// import { Link } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// const Footer = () => {
//     return (
//       <div className="bg-gray-900 text-white px-20 pt-15">
//         <div className="flex justify-between mb-8">
//           <div>
//             <h2 className="mb-6 font-bold text-xl">COMPANY</h2>
//             <div className="leading-8 text-gray-400 grid">
//               <Link to="/about">About Us</Link>
//               <Link>Company</Link>
//               <Link>Privacy Policy</Link>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h2 className="mb-6 font-bold text-xl">OPEN HOUR</h2>
//             <p className="text-gray-400">Monday-Friday 8am-5pm</p>
//           </div>

//           <div>
//             <h2 className="mb-6 font-bold text-xl">CONNECT WITH US</h2>
//             <div className="flex items-center text-gray-400 space-x-6">
//               <a
//                 href="https://www.facebook.com/profile.php?id=100075381446900"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebookF />
//               </a>

//               <Link>
//                 <FaXTwitter />
//               </Link>
//               <Link>
//                 <FaInstagram />
//               </Link>
//               <Link>
//                 <FaLinkedinIn />
//               </Link>
//             </div>
//           </div>
//         </div>
//         <p className="text-center pb-3">
//           Copyright ©2025 All rights reserved{" "}
//           <span className="italic">TIND</span>
//         </p>
//       </div>
//     );
// };

// export default Footer;



import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-4 md:px-8 lg:px-20 pt-8 md:pt-12 lg:pt-15">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-8 md:space-y-0 mb-6 md:mb-8">
        <div className="w-full md:w-auto">
          <h2 className="mb-4 md:mb-6 font-bold text-lg md:text-xl">COMPANY</h2>
          <div className="leading-6 md:leading-8 text-gray-400 grid space-y-1 md:space-y-0">
            <Link
              to="/about"
              className="hover:text-white transition-colors duration-300"
            >
              About Us
            </Link>
            <Link to="/office" className="hover:text-white transition-colors duration-300">
              Company
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <h2 className="mb-4 md:mb-6 font-bold text-lg md:text-xl">
            OPEN HOUR
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Monday-Friday 8am-5pm
          </p>
        </div>

        <div className="w-full md:w-auto">
          <h2 className="mb-4 md:mb-6 font-bold text-lg md:text-xl">
            CONNECT WITH US
          </h2>
          <div className="flex items-center text-gray-400 space-x-4 md:space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100075381446900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-base hover:text-white transition-colors duration-300"
            >
              <FaFacebookF />
            </a>

            <Link className="text-lg md:text-base hover:text-white transition-colors duration-300">
              <FaXTwitter />
            </Link>
            <Link className="text-lg md:text-base hover:text-white transition-colors duration-300">
              <FaInstagram />
            </Link>
            <Link className="text-lg md:text-base hover:text-white transition-colors duration-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 md:pt-3">
        <p className="text-center text-sm md:text-base pb-3 text-gray-400">
          Copyright ©2025 All rights reserved{" "}
          <span className="italic text-white">TIND</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;