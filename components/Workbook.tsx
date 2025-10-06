'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    src: '/workbook1.jpg',
    title: 'Run algorithms with MATLAB',
  },
  {
    src: '/workbook1.jpg',
    title: 'Build apps with Xcode',
  },
  {
    src: '/workbook1.jpg',
    title: 'Edit images with Affinity',
  },
  {
    src: '/workbook1.jpg',
    title: 'Write papers with Word',
  },
];

export default function Workbook() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="w-full mx-auto px-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center">Highlights</h2>
      </div>

      <div className="relative w-full overflow-visible">
        <div className="mx-auto overflow-visible">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1.5}
            spaceBetween={10}
            centeredSlides={true}
            loop={false}
            className="overflow-visible"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`flex justify-center transition-opacity duration-300 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0.6 }}
                  animate={
                    index === activeIndex
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.96, opacity: 0.6 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 170,
                    damping: 26,
                    mass: 1,
                  }}
                  className="bg-white rounded-3xl p-6 md:p-10 text-center shadow-md w-full"
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    width={800}
                    height={400}
                    className="mx-auto rounded-xl"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-gray-800">{slide.title}</h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex justify-center gap-3 flex-wrap">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              swiperRef.current?.slideTo(index);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              index === activeIndex ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index === 0 && 'STEM'}
            {index === 1 && 'Coding'}
            {index === 2 && 'Creativity'}
            {index === 3 && 'Productivity'}
          </button>
        ))}
      </div>
    </section>
  );
}
