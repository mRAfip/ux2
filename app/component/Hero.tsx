"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  // Scroll-based animation logic
  const { scrollY } = useScroll();
  // Center card: slight up on scroll
  const centerY = useTransform(scrollY, [0, 300], [0, -30]);
  // 2 and 4: more up than center
  const sideY = useTransform(scrollY, [0, 300], [10, -50]);
  // 1 and 5: different speed, more dramatic
  const edgeY = useTransform(scrollY, [0, 300], [60, -70]);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-white pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Lighting effect at the top center */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 pointer-events-none" style={{ width: '600px', height: '180px' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#fff6] to-transparent blur-2xl opacity-70"></div>
      </div>
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto z-10">
        <h1
          className="text-6xl md:text-9xl font-extrabold text-center mb-6 tracking-tight leading-tight mt-35 text-transparent bg-clip-text animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #f78529, #ff1e74, #135de6, #00e6b8, #f7e029, #f78529)",
            backgroundSize: "1200% 1200%",
            animation: "gradientMove 32s ease-in-out infinite"
          }}
        >
          Design. Code. Deliver.
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
        <p className="text-lg md:text-2xl text-center text-gray-700 max-w-2xl mb-8">
          UI/UX designer, front-end developer (Next.js & Tailwind), and project manager crafting seamless digital experiences.
        </p>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-6 py-2 text-lg transition"
        >
          Book a call
        </button>

        {/* Animated phone mockup placeholders */}
        <div className="flex justify-center items-end gap-2 mt-16 w-full">
          {/* Card 1 */}
          <motion.div className="flex-1 flex justify-center" style={{ y: edgeY }}>
            <div className="w-75 h-auto bg-white rounded-3xl flex items-center justify-center overflow-hidden">
              <img src="/app1.avif" alt="App UI" className="object-cover w-full h-full" />
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div className="flex-1 flex justify-center" style={{ y: sideY }}>
            <div className="w-75 h-auto bg-white rounded-3xl flex items-center justify-center overflow-hidden">
              <img src="/app1.avif" alt="App UI" className="object-cover w-full h-full" />
            </div>
          </motion.div>
          {/* Card 3 (center) */}
          <motion.div className="flex-1 flex justify-center" style={{ y: centerY }}>
            <div className="w-80 h-auto bg-white rounded-3xl flex items-center justify-center overflow-hidden">
              <img src="/app1.avif" alt="App UI" className="object-cover w-full h-full" />
            </div>
          </motion.div>
          {/* Card 4 */}
          <motion.div className="flex-1 flex justify-center" style={{ y: sideY }}>
            <div className="w-75 h-auto bg-white rounded-3xl flex items-center justify-center overflow-hidden">
              <img src="/app3.avif" alt="App UI" className="object-cover w-full h-full" />
            </div>
          </motion.div>
          {/* Card 5 */}
          <motion.div className="flex-1 flex justify-center" style={{ y: edgeY }}>
            <div className="w-75 h-auto bg-white rounded-3xl flex items-center justify-center overflow-hidden">
              <img src="/app1.avif" alt="App UI" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
