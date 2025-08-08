import Logo from "../assets/logo-3.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink, Link, useNavigate} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isCheckingUser, setIsCheckingUser] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setIsCheckingUser(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    // navigate("/login");
  };

  const getInitials = () => {
    if (!user?.email) return "U";
    return user.email[0].toUpperCase();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-indigo-900 shadow-lg py-1 fixed top-0 left-0 w-full z-50">
        <section className="text-gray-400 text-sm py-2 my-1">
          <div className="flex justify-between items-center px-20 ">
            <div className="flex items-center space-x-25">
              <p>Care:(+234)8159879973</p>
              <p>Business:(+234)8097872172</p>
              <p>Email: info@tind-ng.com</p>
              <p>H/O: 129, Yaba Road, Yaba Lagos</p>
            </div>

            <div className="flex items-center text-gray-400 space-x-6">
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <FaXTwitter />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-gray-800" />
        </section>
        <section className=" flex justify-between items-center px-20">
          <Link to="/" className="w-17">
            <img src={Logo} alt="logo" />
          </Link>

          <div className="flex space-x-6 text-white text-[15px]">
            <NavLink
              to="/dashboard/shipment"
              className="hover:text-orange-400 transition mt-[8px]"
            >
              Dashboard
            </NavLink>
            {/* <NavLink to="/#" className="hover:underline">
              Shipments
            </NavLink> */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              Our Blogs
            </NavLink>
            <NavLink
              to="/office"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              Our Offices
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              FAQs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              About Us
            </NavLink>
          </div>
          {isCheckingUser ? (
            // Skeleton Loader
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          ) : user ? (
            <div className="relative" ref={dropdownRef}>
              {/* User Icon */}
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center text-lg font-medium cursor-pointer"
              >
                {getInitials()}
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-35 bg-white text-black rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b text-center">
                    <p className="text-sm text-gray-800">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:text-red-800 transition flex items-center gap-1 cursor-pointer"
                  >
                    <CiLogout className="text-sm" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 px-4 py-2 text-white hover:bg-red-800 duration-300 rounded-md"
            >
              Sign In/Sign Up
            </Link>
          )}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
