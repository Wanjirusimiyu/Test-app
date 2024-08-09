import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customGreen text-white py-3 font-urbanist">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0 flex items-center">
          <img src="/path/to/logo.png" alt="Taste Tribe" className="h-8 mr-2" />
          <span className="text-xl font-bold">TASTE TRIBE</span>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
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
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-200 hover:text-black">
            <FaTiktok size={24} />
          </a>
          <a href="#" className="text-gray-200 hover:text-blue-700">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-200 hover:text-pink-800">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-200 hover:text-red-600">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-4">
        <p>©️ 2024 TASTE TRIBE</p>
      </div>
    </footer>
  );
};

export default Footer;