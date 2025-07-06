"use client";

import React from "react";
import { Download, UserPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start bg-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 relative overflow-hidden">
      <div className="flex px-6 flex-col w-full max-w-7xl mx-auto z-10">
        <h1
          className="text-5xl md:text-9xl font-extrabold mb-6 tracking-tight leading-tight mt-10 text-transparent bg-clip-text animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #f78529, #ff1e74, #135de6, #00A405)",
            backgroundSize: "1200% 1200%",
            animation: "gradientMove 32s ease-in-out infinite",
          }}
        >
          An Indian,
          <br />
          <span className="text-blue-500">UI/UX</span> Designer &<br />
          <span className="text-blue-500">Front-end</span> Developer
        </h1>

        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            25% { background-position: 50% 100%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 50% 0%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }
        `}</style>

        <p className="text-base md:text-2xl text-gray-700 max-w-2xl mb-8">
          I design web and mobile experiences in <strong>Figma</strong>{" "}
          <Image
            src="/icons/figma.png"
            alt="Figma"
            width={20}
            height={20}
            className="inline-block mb-1"
          />
          <br />— and build websites & dashboards using{" "}
          <strong>Next.js</strong>{" "}
          <Image
            src="/icons/next.png"
            alt="Next.js"
            width={20}
            height={20}
            className="inline-block mb-1"
          />{" "}
          and <strong>Tailwind CSS</strong>{" "}
          <Image
            src="/icons/tailwind.svg"
            alt="Tailwind CSS"
            width={20}
            height={20}
            className="inline-block mb-1"
          />
          .
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm">
          <Link
            href="/pages/contact"
            className="bg-[#3F2FEE] hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Hire Me
          </Link>

          <Link
            href="/Muhammed-Rafi-CV.pdf" // replace with actual path
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-900 px-4 py-2 rounded-full hover:bg-gray-900 hover:text-white flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
