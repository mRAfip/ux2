'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const slides = [
 {
    src: '/work/1.jpg',
    alt: 'Project 1 Screenshot',
    title: 'Project Title One',
    description: 'A brief and engaging description of this project.'
  },

   {
    src: '/work/2.jpg',
    alt: 'Project 1 Screenshot',
    title: 'Project Title One',
    description: 'A brief and engaging description of this project.'
  },

   {
    src: '/work/3.jpg',
    alt: 'Project 1 Screenshot',
    title: 'Project Title One',
    description: 'A brief and engaging description of this project.'
  },

     {
    src: '/work/3.jpg',
    alt: 'Project 1 Screenshot',
    title: 'Project Title One',
    description: 'A brief and engaging description of this project.'
  },

     {
    src: '/work/3.jpg',
    alt: 'Project 1 Screenshot',
    title: 'Project Title One',
    description: 'A brief and engaging description of this project.'
  },

];

export default function Highlights() {
  const swiperRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPaused) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
    setIsPaused(!isPaused);
  };

  return (
    <section className="w-full py-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Highlights</h2>
      </div>

      {/* Swiper */}
     <div className="w-full overflow-visible">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        wrapperClass="px-4 md:px-82" // ✅ aligns first slide with heading/buttons
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!h-auto !w-auto">
            {/* Card container with reduced max-width */}
            <div className="max-w-[350px] rounded-xl bg-white overflow-hidden">
              {/* Image container */}
              <div className="relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={550} // Reduced width
                  height={700} // Adjusted height for aspect ratio
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Title and Description Section */}
              <div className="py-4">
                <h3 className="text-xl font-bold text-gray-800">{slide.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> 

      {/* Controls */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 mt-10">
        {/* Pause/Play */}


<div className="w-[60px] h-[60px] bg-gray-100 rounded-full flex items-center justify-center">
  <button
    onClick={toggleAutoplay}
    className="text-gray-500 hover:opacity-80 transition"
  >
    {isPaused ? <Play size={24} /> : <Pause size={24} />}
  </button>
</div>

        

        {/* Navigation Buttons */}

        <div className="flex gap-3">
  {/* Prev Button */}
  <div className="w-[60px] h-[60px] bg-gray-100 rounded-full flex items-center justify-center">
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="text-gray-500 hover:opacity-80 transition"
    >
      <ChevronLeft size={24} />
    </button>
  </div>

  {/* Next Button */}
  <div className="w-[60px] h-[60px] bg-gray-100 rounded-full flex items-center justify-center">
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="text-gray-500 hover:opacity-80 transition"
    >
      <ChevronRight size={24} />
    </button>
  </div>
</div>





      </div>
    </section>
  );
}
