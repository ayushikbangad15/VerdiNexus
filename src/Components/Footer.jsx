import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-950  text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-10 text-s">
            To democratize sustainability by offering simple, effective, and regulation-ready ESG tools for growing businesses in Europe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-10 text-sm flex flex-col">
            <Link to='/'><a className="hover:text-white">Home</a></Link>
            <Link to='/about'><a className="hover:text-white">About</a></Link>
            <Link to='/services'><a className="hover:text-white">Services</a></Link>
            <Link to='/blog'><a className="hover:text-white">Blog</a></Link>
            <Link to='/contactus'><a className="hover:text-white">Contact</a></Link>
            <Link to='/FaQ'><a className="hover:text-white">F&Q</a></Link>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-10 text-sm">Email: 📧 support@verdinexus.eu</p>
          <p className="text-gray-10 text-sm">Phone: +91 9876543210</p>
          <p className="text-gray-10 text-sm">📍 Remote-first (Based in Madrid, Spain)</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/verdinexus" target="blank" className="text-gray-10 hover:text-white text-xl"><ImLinkedin2 /></a>
            {/* <a href="#" className="text-gray-400 hover:text-white text-xl"><AiFillGithub /></a> */}

          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-lg text-gray-10">
        © {new Date().getFullYear()} VerdiNexus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
