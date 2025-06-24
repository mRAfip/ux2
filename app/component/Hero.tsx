"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-[#fff] h-[100vh] md:h-[100vh] px-6 flex items-center">
      <div className="max-w-7xl mx-auto px-7 w-full flex flex-col md:flex-row items-center justify-between gap-10 h-full">
        
       {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center h-full text-center md:text-left pt-48 md:pt-0">
        <p className="uppercase text-sm text-gray-600 font-semibold tracking-wide mb-2">
          Web Design, Hosting & Business Tools
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Top-Rated Web Design service,<span className=""></span>That Delivers Results{" "}
        </h1>
        <p className="text-gray-600 mt-6 text-lg max-w-xl">
          Stand out from the crowd with stunning websites, powerful hosting solutions, and next-gen AI business tools
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
        {/* Call Button */}
        <a
          href="tel:+917907977521"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium transition flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Call now
        </a>

        {/* Free Consultation Button */}
        <Link
          href="/pages/contact"
          className="border border-gray-500 text-gray-700 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-md text-sm font-medium transition flex items-center justify-center"
        >
          Free Consultation
        </Link>
      </div>




        <p className="text-gray-500 text-sm mt-3">
          Get a demo of our premium tools or try our free features today.
        </p>
      </div>


        {/* Right Image (Updated) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex items-center justify-center h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src="/myphoto.png" // Update with your new image path
              alt="muhammed Image"
              layout="fill"
              objectFit="cover" 
              className="object-center overflow-visible" // Centering the person
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
