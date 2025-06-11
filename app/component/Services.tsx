"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Branding Identity",
    description:
      "Create a trusted, global brand with our expert designs and strategies. We help improve your brand's visibility, credibility, and connection with customers both online and offline.",
    points: [
      "Rebranding",
      "Brand Guidelines",
      "Brand Strategy",
      "Brand Collaterals",
      "Visual Identity Design",
      "Brand Experience",
      "Brand Audits",
    ],
    image: "/work/1.jpg",
    bg: "#3F2FEE",
    hover: "#EBFE5B",
    btnBg: "#fff",
    text: "white",
  },
  {
    title: "UX UI Design",
    description:
      "Design seamless and intuitive digital products that drive engagement and retention. We align design decisions with user behavior and business goals.",
    points: [
      "Wireframing",
      "User Flows",
      "Interactive Prototypes",
      "Design Systems",
      "UX Research",
    ],
    image: "/work/2.jpg",
    bg: "#FFFFFF",
    hover: "#3F2FEE",
    btnBg: "#000",
    text: "black",
  },
  {
    title: "Development",
    description:
      "Build fast, reliable, and scalable applications with modern web technologies. Our development process ensures clean code and smooth deployment.",
    points: [
      "Frontend Development",
      "Next.js & React",
      "Backend APIs",
      "CMS Integration",
      "Performance Optimization",
    ],
    image: "/work/3.jpg",
    bg: "#FFD500",
    hover: "#3F2FEE",
    btnBg: "#000",
    text: "black",
  },
  {
    title: "E-Commerce",
    description:
      "Launch powerful e-commerce platforms that scale with your business. We deliver high-converting, responsive stores with integrated payments.",
    points: [
      "Shopify Development",
      "WooCommerce Setup",
      "Custom Features",
      "Order Management",
      "Conversion Optimization",
    ],
    image: "/work/4.jpg",
    bg: "#FF531A",
    hover: "#EBFE5B",
    btnBg: "#fff",
    text: "white",
  },
  {
    title: "Marketing & SEO",
    description:
      "Drive traffic and grow visibility through tailored digital marketing and SEO strategies. We help your brand stay ahead in search rankings.",
    points: [
      "SEO Audits",
      "On-page Optimization",
      "Content Strategy",
      "Email Campaigns",
      "Analytics & Insights",
    ],
    image: "/work/5.jpg",
    bg: "#000",
    hover: "#EBFE5B",
    btnBg: "#fff",
    text: "white",
  },
];

export default function Services() {
  return (
    <section className="relative w-full">
      {services.map((service, index) => (
        <div
          key={index}
          className="sticky top-0 z-[1] w-full"
          style={{ backgroundColor: service.bg, zIndex: index + 1 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-5 py-16 gap-12">
           {/* Left Side: Title + Description + Points (Horizontal Layout) */}
            <div className="flex flex-col w-full md:w-2/3 gap-8">
            {/* Title */}
            <h2
                className="text-4xl font-bold leading-tight"
                style={{ color: service.text }}
            >
                {service.title}
            </h2>

            {/* Description + Points */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Description */}
                <p className="text-lg flex-1" style={{ color: service.text }}>
                {service.description}
                </p>

                {/* Points */}
                <ul
                className="list-disc pl-5 space-y-2 flex-1"
                style={{ color: service.text }}
                >
                {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
            </div>

<button
  className="relative overflow-hidden inline-flex items-center px-6 py-3 rounded-full font-medium w-fit group z-10"
  style={{
    backgroundColor: service.btnBg, // Default background color
    color: service.btnBg === "#000" ? "white" : "black", // Text color
  }}
>
  <span className="relative z-10">Build brand identity</span>
  <ArrowUpRight className="ml-2 relative z-10" size={18} />

  {/* Animated Hover Fill */}
  <span
    className="absolute inset-0 rounded-full scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0"
    style={{
      backgroundColor: service.hover, // Hover color
    }}
  ></span>
</button>




            </div>


            {/* Right Side: Image */}
            <div className="w-full md:w-[460px] lg:w-[520px] xl:w-[600px] mt-10 md:mt-0">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
