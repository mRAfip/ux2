'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const BannerVideo: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5; // Adjust speed here
        galleryRef.current.style.transform = `translateX(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mixed media gallery items with different sizes
  const galleryItems = [
    { type: 'video', src: '/banner-2.mp4', width: 'w-80', height: 'h-96' },
    { type: 'image', src: '/work/1.jpg', width: 'w-64', height: 'h-80' },
    { type: 'image', src: '/work/2.jpg', width: 'w-72', height: 'h-64' },
    { type: 'video', src: '/banner.mp4', width: 'w-96', height: 'h-72' },
    { type: 'image', src: '/work/3.jpg', width: 'w-56', height: 'h-88' },
    { type: 'image', src: '/work/4.jpg', width: 'w-80', height: 'h-56' },
    { type: 'image', src: '/work/5.jpg', width: 'w-64', height: 'h-96' },
    { type: 'video', src: '/banner-2.mp4', width: 'w-72', height: 'h-80' },
    { type: 'image', src: '/work/1.jpg', width: 'w-88', height: 'h-64' },
    { type: 'image', src: '/work/2.jpg', width: 'w-56', height: 'h-72' },
  ];

  return (
    <section className="w-full h-screen relative overflow-hidden bg-gray-950">
      <div 
        ref={galleryRef}
        className="absolute inset-0 flex items-center gap-6"
        style={{ width: '200%' }}
      >
        {/* First set of gallery items */}
        {galleryItems.map((item, index) => (
          <div
            key={`first-${index}`}
            className={`${item.width} ${item.height} flex-shrink-0 rounded-lg overflow-hidden shadow-lg`}
          >
            {item.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item.src}
                alt={`Gallery item ${index + 1}`}
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {galleryItems.map((item, index) => (
          <div
            key={`second-${index}`}
            className={`${item.width} ${item.height} flex-shrink-0 rounded-lg overflow-hidden shadow-lg`}
          >
            {item.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item.src}
                alt={`Gallery item ${index + 1}`}
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerVideo;
