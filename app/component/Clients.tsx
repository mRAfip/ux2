'use client';

import Image from 'next/image';

const clientLogos = [
  { src: '/logos/openedx.png', alt: 'openedx' },
  { src: '/logos/rahmania.png', alt: 'rahmania' },
  { src: '/logos/xandy.png', alt: 'xandy' },
  { src: '/logos/openedx.png', alt: 'openedx' },
  { src: '/logos/rahmania.png', alt: 'rahmania' },
  { src: '/logos/xandy.png', alt: 'xandy' },
  { src: '/logos/openedx.png', alt: 'openedx' },
  { src: '/logos/rahmania.png', alt: 'rahmania' },
  { src: '/logos/xandy.png', alt: 'xandy' },
  { src: '/logos/openedx.png', alt: 'openedx' },
  { src: '/logos/rahmania.png', alt: 'rahmania' },
  { src: '/logos/xandy.png', alt: 'xandy' },
];

export default function Clients() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="d-flex flex-col">
            {/* Section Label */}
    <div className="mb-6 text-md tracking-wider text-gray-400 uppercase">
      <span className="text-red-500 font-bold">01</span> / About Me
    </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">Highlights</h2>
          
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-25 gap-y-20 mt-28">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center " // add padding to each item
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
