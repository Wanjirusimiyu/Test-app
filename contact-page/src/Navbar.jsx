import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-customGreen text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold">Taste Tribe</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-400">HOME</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">RECIPES</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">ABOUT US</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">CONTACT US</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <FaTiktok size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;