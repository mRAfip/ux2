'use client';

import React, { useEffect, useRef } from 'react';
import { Download, UserPlus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const logos = [
  { src: '/logos/openedx.png', alt: 'Open edX' },
  { src: '/logos/blended.svg', alt: 'Blended' },
  { src: '/logos/cyra.png', alt: 'Cyra' },
  { src: '/logos/xandy.png', alt: 'Xandy' },
];

const Hero = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ticker = tickerRef.current;
      if (!ticker) return;

      gsap.to(ticker, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: 'linear',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-start bg-white pt-40 pb-12 px-4 relative overflow-hidden">
      <div className="flex px-6 flex-col w-full max-w-7xl mx-auto z-10 text-center md:text-left">
        <h1
          className="text-4xl md:text-9xl font-extrabold mb-6 tracking-tight leading-tight text-transparent bg-clip-text animate-gradient"
          style={{
            backgroundImage:
              'linear-gradient(270deg, #f78529, #ff1e74, #135de6, #00A405)',
            backgroundSize: '1200% 1200%',
            animation: 'gradientMove 32s ease-in-out infinite',
          }}
        >
          Beautiful Interfaces. <br className="hidden md:block" />
          Scalable Frontends.
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

        <p className="text-base md:text-3xl text-gray-700 max-w-4xl mb-8 mx-auto md:mx-0">
          I design and develop responsive web & mobile interfaces using{' '}
          <strong>Figma</strong>{' '}
          <Image
            src="/icons/figma.png"
            alt="Figma - UI/UX Design Tool"
            width={20}
            height={20}
            className="inline-block mb-1 ml-1 mr-3"
          />
          <strong>Next.js</strong>{' '}
          <Image
            src="/icons/next.png"
            alt="Next.js - React Framework"
            width={20}
            height={20}
            className="inline-block mb-1 ml-1 mr-3"
          />
          and <strong>Tailwind CSS</strong>{' '}
          <Image
            src="/icons/tailwind.svg"
            alt="Tailwind CSS - Utility-first CSS"
            width={20}
            height={20}
            className="inline-block mb-1 ml-1"
          />
          .
        </p>

                {/* GSAP-powered Logo Ticker */}
        <div className="overflow-hidden w-full mt-4">
          <div
            className="flex gap-10 grayscale opacity-50 w-max"
            ref={tickerRef}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={70}
                height={30}
                className="object-contain"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-sm justify-center md:justify-start mt-9">
          <Link
            href="/pages/contact"
            className="bg-[#66141A] text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Hire Me
          </Link>

          <Link
            href="/Muhammed-Rafi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-900 px-5 py-2 rounded-full hover:bg-gray-900 hover:text-white flex items-center gap-2"
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
