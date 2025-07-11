'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link'; // Add this import
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

import { sanityClient } from '@/sanity/lib/sanityClient';
import { projectsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/imageBuilder';

type Project = {
  _id: string;
  title: string;
  summary: string;
  image: any; // Sanity image object
  slug: string; // ✅ Add this line

};

export default function Highlights() {
  const swiperRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    isPaused ? swiperRef.current.autoplay.start() : swiperRef.current.autoplay.stop();
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    sanityClient.fetch(projectsQuery).then((data) => setProjects(data));
  }, []);

  return (
    <section id="work" className="w-full py-28 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="d-flex flex-col">
          <div className="mb-6 text-md tracking-wider text-gray-400 uppercase">
            <span className="text-[#FF531A] font-bold">01</span> / FEATURED PROJECTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-15">
            Crafted Interfaces. Real Results.
          </h2>
        </div>
      </div>

      {/* Swiper */}
      <div className="w-full overflow-visible">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay.stop();
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          wrapperClass="px-4 md:px-82"
        >
        {projects.map((slide) => (
          <SwiperSlide key={slide._id} className="!h-auto !w-auto">
            <Link href={`/project/${slide.slug}`}>
              <div className="max-w-[350px] rounded-xl bg-white overflow-hidden cursor-pointer">
                <div className="relative">
                  <Image
                    src={urlFor(slide.image).width(550).height(700).url()}
                    alt={slide.title}
                    width={550}
                    height={700}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="py-4">
                  <h3 className="text-xl font-bold text-gray-800">{slide.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{slide.summary}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 mt-10">
        {/* Play/Pause Button */}
        <div className="w-[60px] h-[60px] bg-gray-100 rounded-full flex items-center justify-center">
          <button
            onClick={toggleAutoplay}
            className="text-gray-500 hover:opacity-80 transition"
          >
            {isPaused ? <Play size={24} /> : <Pause size={24} />}
          </button>
        </div>

        {/* Prev/Next Buttons */}
        <div className="flex gap-3">
          <div className="w-[60px] h-[60px] bg-gray-100 rounded-full flex items-center justify-center">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-gray-500 hover:opacity-80 transition"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
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
