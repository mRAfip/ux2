import React from "react";
import Image from "next/image";



const About = () => {
  return (
    <section className="relative w-full h-[75vh] bg-white flex items-center justify-center overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />

      {/* Blue Dots */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Pulsing ring */}
          <div className="absolute w-full h-full rounded-full border-2 border-blue-500 animate-ping opacity-75" />
          {/* Static center dot */}
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2 translate-y-1/2">
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Pulsing ring */}
          <div className="absolute w-full h-full rounded-full border-2 border-blue-500 animate-ping opacity-75" />
          {/* Static center dot */}
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
        </div>
      </div>

{/* About Me Section */}
<section className="w-full  text-black py-16">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Label */}
    <div className="mb-6 text-md tracking-wider text-gray-400 uppercase">
      <span className="text-red-500 font-bold">01</span> / About Me
    </div>

    {/* Main Intro Text */}
    <div className="text-4xl md:text-4xl font-semibold leading-snug mb-10 max-w-4xl">
      <p>Hey,</p>
      <p>I’m <span className="text-black">Muhammed Rafi</span>, an independent UI/UX and web designer based in Calicut, India. Specialized in creating clean, user-centered digital experiences.</p>
    </div>

    
  </div>
</section>

    </section>
  );
};

export default About;
