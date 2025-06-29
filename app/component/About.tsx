'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section className="w-full h-screen bg-[#F4F8FE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 h-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div className="space-y-6 text-gray-800 z-10">

         {/* Section Label */}
          <div className="mb-6 text-md tracking-wider text-gray-400 uppercase">
            <span className="text-[#FF531A] font-bold">02</span> / ABOUT ME
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
           Building Beautiful, Usable, and Scalable Products
          </h1>

         <p className="text-lg">
            I'm <strong>Muhammed Rafi</strong>, a product-focused UI/UX Designer and Front-End Developer from Kerala, India. I help SaaS and tech startups turn ideas into user-friendly, high-performance digital products.
          </p>


          <p className="text-lg">
            I help businesses bring ideas to life through strong UX strategy, clean visual systems, and fast, scalable code — using <strong>Figma</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
          </p>

          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/openedx.png"
                alt="Open edX"
                width={100}
                height={70}
              />
              <h3 className="font-semibold text-lg">Open edX</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              I’ve contributed to Open edX — the open-source learning platform founded by Harvard and MIT. I collaborated with the UI/UX team, focusing on visual design and enhancing user interface components to improve the overall user experience.
            </p>
          </div>

          <p className="text-md text-gray-700">
              Whether you're launching a new product or refining an existing one — let's build something that works beautifully.
          </p>

          <a
            href="/pages/contact"
            className="inline-flex items-center gap-2 bg-[#3F2FEE] hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold mt-4"
          >
            Let’s Collaborate <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Right Image (Inside Grid) */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="hidden md:block w-full h-full relative"
>
  <Image
    src="/myphoto.png"
    alt="Profile Image"
    layout="fill"
    objectFit="contain"
    className="object-bottom"
    priority
  />
</motion.div>

      </div>
    </section>
  );
};

export default About;
