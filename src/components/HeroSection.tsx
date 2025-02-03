"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const posters = [
  "/images/poster1.jpeg",
  "/images/poster2.jpeg",
  "/images/poster3.jpeg",
];

export default function HeroSection() {
  const [currentPoster, setCurrentPoster] = useState(0);
  const [customCity, setCustomCity] = useState(""); // For other city input
  const [city, setCity] = useState(""); // Selected city

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
          <Image
            src={posters[currentPoster]}
            alt={`Poster ${currentPoster + 1}`}
            fill
            className="object-cover transition-opacity duration-1000"
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
          {/* Name Field */}
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

          {/* Phone Field */}
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

          {/* Tuition For Dropdown */}
          <div>
            <label
              htmlFor="tuition"
              className="block text-sm font-medium text-gray-700"
            >
              Tuition For
            </label>
            <select
              id="tuition"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#813588] focus:border-[#813588]"
            >
              <option value="">Select Class</option>
              {[...Array(13)].map((_, index) =>
                index === 0 ? (
                  <option key={index} value="playgroup">
                    Play Group
                  </option>
                ) : (
                  <option key={index} value={`class-${index}`}>
                    Class {index}
                  </option>
                )
              )}
            </select>
          </div>

          {/* City Dropdown with Dynamic Input */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#813588] focus:border-[#813588]"
            >
              <option value="">Select City</option>
              <option value="GUNA">GUNA</option>
              <option value="INDORE">INDORE</option>
              <option value="Other">Other</option>
            </select>

            {city === "Other" && (
              <div className="mt-4">
                <label
                  htmlFor="customCity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Your City
                </label>
                <input
                  id="customCity"
                  type="text"
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  list="city-suggestions"
                  placeholder="Type your city name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#813588] focus:border-[#813588]"
                />
                <datalist id="city-suggestions">
                  {/* Replace this list with dynamic suggestions */}
                  <option value="Mumbai" />
                  <option value="Delhi" />
                  <option value="Bangalore" />
                  <option value="Chennai" />
                  <option value="Kolkata" />
                </datalist>
              </div>
            )}
          </div>

          {/* Submit Button */}
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
