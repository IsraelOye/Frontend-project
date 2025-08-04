import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
      <div className="bg-gray-900 text-white px-20 pt-15">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="mb-6 font-bold text-xl">COMPANY</h2>
            <div className="leading-8 text-gray-400">
              <p>About Us</p>
              <p>Company</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="mb-6 font-bold text-xl">OPEN HOUR</h2>
            <p className="text-gray-400">Monday-Friday 8am-5pm</p>
          </div>

          <div>
            <h2 className="mb-6 font-bold text-xl">CONNECT WITH US</h2>
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
        </div>
        <p className="text-center pb-3">
          Copyright ©2025 All rights reserved{" "}
          <span className="italic">TIND</span>
        </p>
      </div>
    );
};

export default Footer;