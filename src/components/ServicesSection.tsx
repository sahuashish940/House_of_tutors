"use client";

import { useEffect, useState } from "react";

const services = [
  {
    title: "LKG - Class 3",
    description: "BYJU'S Early Learn Program",
    image: "/images/service1.jpg", // Replace with your image URL
    link: "#",
  },
  {
    title: "Class 4 - 10",
    description: "BYJU'S The Learning App",
    image: "/images/service2.jpg",
    link: "#",
  },
  {
    title: "Class 4 - 10",
    description: "BYJU'S Live Classes",
    image: "/images/service3.jpg",
    link: "#",
  },
  {
    title: "Class 8 - 10",
    description: "Aakash BYJU'S Foundation Program",
    image: "/images/service4.jpg",
    link: "#",
  },
];

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services-section"
      className="py-12 bg-gradient-to-b from-[#f5f2f5] to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Explore our Learning Programs
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-1/3 object-cover"
              />
              <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                  <h3 className="text-lg font-bold text-[#813588]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <a
                  href={service.link}
                  className="text-sm text-[#813588] font-medium mt-4 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
