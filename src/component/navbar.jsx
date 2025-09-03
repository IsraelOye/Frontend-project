import Logo from "../assets/logo-3.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isCheckingUser, setIsCheckingUser] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const navigate = useNavigate();

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

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-indigo-900 shadow-lg py-1 fixed top-0 left-0 w-full z-50">
        {/* Top section with contact info - hidden on mobile */}
        <section className="text-gray-400 text-sm py-2 my-1 hidden lg:block">
          <div className="flex justify-between items-center px-4 lg:px-20">
            <div className="flex items-center space-x-6 xl:space-x-8">
              <p className="whitespace-nowrap">Care:(+234)8159879973</p>
              <p className="whitespace-nowrap">Business:(+234)8097872172</p>
              <p className="whitespace-nowrap">Email: info@tind-ng.com</p>
              <p className="whitespace-nowrap">
                H/O: 129, Yaba Road, Yaba Lagos
              </p>
            </div>

            <div className="flex items-center text-gray-400 space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=100075381446900"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <Link className="hover:text-white transition-colors">
                <FaXTwitter />
              </Link>
              <Link className="hover:text-white transition-colors">
                <FaInstagram />
              </Link>
              <Link className="hover:text-white transition-colors">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <hr className="mt-3 text-gray-800" />
        </section>

        {/* Main navbar section */}
        <section className="flex justify-between items-center px-4 lg:px-20 py-2">
          {/* Logo */}
          <Link to="/" className="w-12 md:w-16 lg:w-17 flex-shrink-0">
            <img src={Logo} alt="logo" className="w-full h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 text-white text-[15px]">
            <NavLink
              to="/dashboard"
              className="hover:text-orange-400 transition mt-[8px]"
            >
              Dashboard
            </NavLink>
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

          {/* Right side - User/Auth section */}
          <div className="flex items-center space-x-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white text-2xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* User section */}
            {isCheckingUser ? (
              // Skeleton Loader
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full animate-pulse"></div>
            ) : user ? (
              <div className="relative" ref={dropdownRef}>
                {/* User Icon */}
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center text-sm md:text-lg font-medium cursor-pointer"
                >
                  {getInitials()}
                </div>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-3 w-48 lg:w-35 bg-white text-black rounded-lg shadow-lg z-50">
                    <div className="p-3 border-b text-center">
                      <p className="text-sm text-gray-800 truncate">
                        {user.email}
                      </p>
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
                className="bg-red-600 px-2 py-1 md:px-4 md:py-2 text-white text-sm md:text-base hover:bg-red-800 duration-300 rounded-md whitespace-nowrap"
              >
                Sign In/Sign Up
              </Link>
            )}
          </div>
        </section>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-indigo-800 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile contact info */}
          <div className="px-4 py-3 border-b border-indigo-700">
            <div className="text-gray-300 text-xs space-y-1">
              <p>Care: (+234)8159879973</p>
              <p>Business: (+234)8097872172</p>
              <p>Email: info@tind-ng.com</p>
              <p>H/O: 129, Yaba Road, Yaba Lagos</p>
            </div>
          </div>

          {/* Mobile navigation links */}
          <div className="px-4 py-3 space-y-1">
            <NavLink
              to="/dashboard"
              onClick={closeMobileMenu}
              className="block py-2 text-white hover:text-orange-400 transition"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/blog"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-orange-500" : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              Our Blogs
            </NavLink>
            <NavLink
              to="/office"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-orange-500" : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              Our Offices
            </NavLink>
            <NavLink
              to="/faq"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-orange-500" : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              FAQs
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "text-orange-500" : "text-white"
                } hover:text-orange-400 transition`
              }
            >
              About Us
            </NavLink>
          </div>

          {/* Mobile social links */}
          <div className="px-4 py-3 border-t border-indigo-700">
            <div className="flex items-center text-gray-400 space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=100075381446900"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <Link className="hover:text-white transition-colors">
                <FaXTwitter />
              </Link>
              <Link className="hover:text-white transition-colors">
                <FaInstagram />
              </Link>
              <Link className="hover:text-white transition-colors">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;