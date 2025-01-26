"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#813588] text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Contact Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm mt-2">
            123 Learning Street, Knowledge City, EduWorld
          </p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <p className="text-sm">Email: support@learningplatform.com</p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm">
            <a href="#about" className="hover:underline hover:text-gray-300">
              About Us
            </a>
            <a href="#services" className="hover:underline hover:text-gray-300">
              Services
            </a>
            <a href="#testimonials" className="hover:underline hover:text-gray-300">
              Testimonials
            </a>
            <a href="#contact" className="hover:underline hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-[#813588] hover:bg-gray-200 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-[#813588] hover:bg-gray-200 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-[#813588] hover:bg-gray-200 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-[#813588] hover:bg-gray-200 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} Learning Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
