"use client";

import { useState, useEffect } from "react";

const posters = [
  "/images/poster1.jpeg",
  "/images/poster2.jpeg",
  "/images/poster3.jpeg",
];

export default function HeroSection() {
  const [currentPoster, setCurrentPoster] = useState(0);

  // Loop through posters every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prevPoster) => (prevPoster + 1) % posters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-gradient-to-r from-[#f5f2f5] to-white py-12 px-6">
      {/* Poster Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={posters[currentPoster]}
            alt="Poster"
            className="object-cover h-full w-full transition-opacity duration-1000"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-[#813588] mb-4">
          Book Your Free Session
        </h2>
        <p className="text-gray-600 mb-6">
          Learn from top instructors with personalized attention.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#813588] focus:border-[#813588]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#813588] focus:border-[#813588]"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#813588] focus:border-[#813588]"
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <select
              id="state"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#813588] focus:border-[#813588]"
            >
              <option>Select your state</option>
              <option>California</option>
              <option>New York</option>
              <option>Texas</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#813588] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#6b2b72] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
