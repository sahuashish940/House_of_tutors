"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#813588] to-[#6b2b72] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/images/circle-cropped.png" // Corrected path
                  alt="Logo"
                  width={56} // Adjust dimensions as needed
                  height={56}
                  className="h-14 w-auto"
                />
              </a>
            </Link>
          </div>

          {/* Mobile Call Button + Menu Button */}
          <div className="flex items-center md:hidden">
            {/* Call Button with Circular Waves Animation */}
            <div className="relative">
              <a
                href="tel:9111867729"
                className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#813588] shadow-lg hover:bg-gray-200 focus:outline-none transition"
              >
                <FiPhone size={24} />
              </a>
              {/* Circular Waves */}
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#813588] opacity-50 animate-wave"></span>
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#813588] opacity-30 animate-wave delay-1"></span>
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#813588] opacity-20 animate-wave delay-2"></span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none ml-4"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* Desktop Menu + Call Button */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Menu Links */}
            {["Home", "Services", "Testimonial", "Contact"].map((item, index) => (
              <Link key={index} href={`#${item.toLowerCase()}`}>
                <a className="text-sm font-medium hover:text-yellow-300 transition duration-300 ease-in-out">
                  {item}
                </a>
              </Link>
            ))}

            {/* Call Button */}
            <div className="relative">
              <a
                href="tel:9111867729"
                className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#813588] shadow-lg hover:bg-gray-200 transition"
              >
                <FiPhone size={20} />
              </a>
              {/* Circular Waves */}
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#813588] opacity-50 animate-wave"></span>
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#813588] opacity-30 animate-wave delay-1"></span>
              <span className="absolute inset-0 w-full h-full rounded-full bg-[#813588] opacity-20 animate-wave delay-2"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden bg-gradient-to-r from-[#813588] to-[#6b2b72] transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-4 px-4 py-6 text-center">
          {["Home", "Services", "Testimonial", "Contact"].map((item, index) => (
            <Link key={index} href={`#${item.toLowerCase()}`}>
              <a
                className="block text-sm font-medium hover:text-yellow-300 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
