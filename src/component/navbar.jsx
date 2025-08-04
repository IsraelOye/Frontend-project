import Logo from "../assets/logo-3.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
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
            <NavLink className="hover:underline">Dashboard</NavLink>
            <NavLink to="/#" className="hover:underline">Shipments</NavLink>
            <NavLink to="/#" className="hover:underline">Our Blogs</NavLink>
            <NavLink to="/#" className="hover:underline">Our Offices</NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-3 py-2 ${
                  isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-white"
                  } hover:text-orange-400 transition`
              }
            >
              FAQs
            </NavLink>
          </div>

          <NavLink
            to="/login"
            className="bg-red-700 text-white text-sm font- px-2 py-2.5 rounded-sm hover:bg-red-800 duration-300 flex items-center gap-2"
          >
            Sign In/Sign Up
            <FaRegCircleUser className="text-xl" />
          </NavLink>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
