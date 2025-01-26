"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaDownload, FaCity } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

const testimonials = [
  {
    quote:
      "BYJU'S is the best app for my daughter to strengthen her Science basics.",
    name: "Mother of Devananda",
    details: "Class 6 | Bangalore",
    image: "/images/poster1.jpeg", // Add your image URLs here
  },
  {
    quote: "This platform has transformed the way my son studies!",
    name: "Father of Aarav",
    details: "Class 8 | Delhi",
    image: "/images/poster2.jpeg",
  },
  {
    quote: "The personal attention and doubt-solving are unmatched.",
    name: "Mother of Siya",
    details: "Class 5 | Mumbai",
    image: "/images/poster3.jpeg",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-[#f5f2f5]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Our students and parents love us
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div>
            <FaDownload size={32} className="text-[#813588] mx-auto mb-2" />
            <p className="text-lg font-bold text-[#813588]">150+ Million</p>
            <p className="text-sm text-gray-500">downloads</p>
          </div>
          <div>
            <FaStar size={32} className="text-[#813588] mx-auto mb-2" />
            <p className="text-lg font-bold text-[#813588]">4.7+ Star</p>
            <p className="text-sm text-gray-500">app rating</p>
          </div>
          <div>
            <FaCity size={32} className="text-[#813588] mx-auto mb-2" />
            <p className="text-lg font-bold text-[#813588]">1701+ Cities</p>
            <p className="text-sm text-gray-500">worldwide</p>
          </div>
          <div>
            <MdTimer size={32} className="text-[#813588] mx-auto mb-2" />
            <p className="text-lg font-bold text-[#813588]">71 mins avg.</p>
            <p className="text-sm text-gray-500">time spent daily</p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 text-[#813588] bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="mx-auto rounded-full w-20 h-20 mb-4"
            />
            <p className="italic text-gray-600">{`"${testimonials[current].quote}"`}</p>
            <h3 className="text-lg font-bold text-[#813588] mt-4">
              {testimonials[current].name}
            </h3>
            <p className="text-sm text-gray-500">{testimonials[current].details}</p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 text-[#813588] bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
