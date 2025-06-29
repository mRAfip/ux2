"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "User Experience Design (UX)",
    description:
      "I create user-focused digital experiences that are intuitive, goal-driven, and easy to navigate. Through research, flow mapping, and usability analysis, I ensure every product delivers real value to the end user.",
    points: [
      "User Research & Persona Development",
      "User Flow Mapping",
      "UX Audits & Heuristic Evaluation",
      "Wireframing & Low-Fidelity Prototyping",
      "Information Architecture",
      "Usability Testing",
    ],
    image: "/work/1.jpg",
    bg: "#3F2FEE",
    hover: "#EBFE5B",
    btnBg: "#fff",
    text: "white",
  },
  {
    title: "Visual & UI Design",
    description:
      "I design clean, modern, and consistent UI for websites, dashboards, and mobile apps using Figma — focused on accessibility, brand alignment, and user engagement.",
    points: [
      "High-Fidelity UI Design",
      "Responsive & Mobile-First Design",
      "Design Systems & Component Libraries",
      "Interactive Prototypes in Figma",
      "Visual Branding & Style Guides",
      "Pixel-perfect Detailing",
    ],
    image: "/work/2.jpg",
    bg: "#FFFFFF",
    hover: "#3F2FEE",
    btnBg: "#000",
    text: "black",
  },
  {
    title: "Front-End Development",
    description:
      "I build responsive, fast-loading, and accessible websites and dashboards using Next.js and Tailwind CSS — translating design into scalable, real-world web interfaces.",
    points: [
      "Next.js & Tailwind CSS Development",
      "Design-to-Code Conversion",
      "Component-based Architecture",
      "Dashboard UI Integration",
      "Landing Page Development",
      "Performance Optimization",
    ],
    image: "/work/3.jpg",
    bg: "#FFD500",
    hover: "#3F2FEE",
    btnBg: "#000",
    text: "black",
  },
  {
    title: "Project Management & Consulting",
    description:
      "I guide digital projects from idea to launch, offering UX strategy, design consulting, and end-to-end creative leadership to help teams deliver meaningful products.",
    points: [
      "Product Design Consultation",
      "Project Scoping & Planning",
      "Design & Dev Team Collaboration",
      "UI/UX Audits & Strategy",
      "Client Communication & Reporting",
      "Creative Project Management",
    ],
    image: "/work/4.jpg",
    bg: "#FF531A",
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
                <span className="relative z-10">View Work</span>
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
