'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const clientBlocks = [
  {
    logo: { src: '/logos/openedx.png', alt: 'openedx' },
    description: 'Open edX: Global e-learning platform reaching millions of students.',
  },
  {
    logo: { src: '/logos/blended.svg', alt: 'blended' },
  },
  {
    logo: { src: '/logos/xandy.png', alt: 'xandy' },
  },
  {
    logo: { src: '/logos/hireyousoon.png', alt: 'hireyousoon' },
    description: 'Helping companies hire better talent, faster with AI-driven tools.',
  },
  {
    logo: { src: '/logos/traveleo.png', alt: 'traveleo' },
  },
  {
    logo: { src: '/logos/amaala.png', alt: 'amaala global' },
  },
  {
    logo: { src: '/logos/phonix.png', alt: 'phonix' },
    description: 'Reimagining telecom experiences for the next generation.',
  },
  {
    logo: { src: '/logos/rahmania.png', alt: 'rahmania' },
  },
  {
    logo: { src: '/logos/ftric.png', alt: 'ftric' },
  },
];

export default function Clients() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    animationRef.current = gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 40,
        ease: 'linear',
        repeat: -1,
      }
    );
  }, []);

  const handleHover = (isHovering: boolean) => {
    if (!animationRef.current) return;
    if (isHovering) {
      animationRef.current.pause();
    } else {
      animationRef.current.resume();
    }
  };

  const groupedBlocks = Array.from({ length: Math.floor(clientBlocks.length / 3) }).map(
    (_, groupIndex) => {
      const [large, small1, small2] = clientBlocks.slice(groupIndex * 3, groupIndex * 3 + 3);
      return (
        <div
          key={groupIndex}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          className="flex flex-col md:flex-row gap-3 flex-shrink-0 w-full md:w-auto"
        >
          {/* Large Rectangle */}
          {large && (
            <div className="group flex flex-col justify-between border border-gray-200 hover:border-gray-400 transition-colors rounded-xl p-6 w-full md:w-[400px] h-full bg-white">
              <Image
                src={large.logo.src}
                alt={large.logo.alt}
                width={120}
                height={60}
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {large.description && (
                <p className="text-sm text-gray-600 mt-4">{large.description}</p>
              )}
            </div>
          )}

          {/* Two Small Stacked Rectangles */}
          <div className="flex flex-col gap-3 w-full md:w-[200px]">
            {[small1, small2].map(
              (item, idx) =>
                item && (
                  <div
                    key={idx}
                    className="group flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors rounded-xl p-6 h-full bg-white"
                  >
                    <Image
                      src={item.logo.src}
                      alt={item.logo.alt}
                      width={100}
                      height={50}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      );
    }
  );

  return (
    <section className="bg-white text-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-3 text-sm tracking-widest text-gray-600 uppercase">
            <span className="text-[#FF531A] font-bold">03</span> / CLIENTS & COLLABORATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Companies & Projects I’ve Worked With
          </h2>
        </div>

        {/* Ticker container */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-6 w-max" ref={tickerRef}>
            {[...groupedBlocks, ...groupedBlocks]}
          </div>
        </div>
      </div>
    </section>
  );
}
