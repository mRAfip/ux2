'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    company: 'Kodezi',
    quote: '“Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive”',
    name: 'Israqh Khan',
    role: 'CEO',
    image: '/images/person1.jpg',
  },
  {
    company: 'Another Co.',
    quote: '“They helped our brand grow from scratch to recognition in months. Reliable & efficient!”',
    name: 'Anaya Patel',
    role: 'Marketing Head',
    image: '/images/person2.jpg',
  },
  {
    company: 'Another Co.',
    quote: '“They helped our brand grow from scratch to recognition in months. Reliable & efficient!”',
    name: 'Anaya Patel',
    role: 'Marketing Head',
    image: '/images/person2.jpg',
  },
  // ... more testimonials
];

export default function Highlights() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="w-full py-16 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Find your best design into us. <br />
          We guarantee next success is yours!
        </h2>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6">
        {/* Rating Panel */}
        <div className="w-full md:w-[350px] sticky top-24 self-start">
          <div className="h-[440px] bg-white rounded-xl p-6 text-center border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-8xl font-bold text-gray-400 tracking-tighter">4.9</h3>
              <div className="flex justify-center mt-2 mb-1">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-red-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">200+ reviews</p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap items-center">
              <Image src="/logos/clutch.png" alt="Clutch" width={60} height={24} />
              <Image src="/logos/upwork.png" alt="Upwork" width={60} height={24} />
              <Image src="/logos/fiverr.png" alt="Fiverr Pro" width={60} height={24} />
            </div>
          </div>
        </div>

        {/* Testimonial Swiper */}
        <div className="flex-1 overflow-visible">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1.2 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto !w-auto">
                <div className="h-[440px] max-w-[350px] bg-white rounded-xl border border-gray-100 p-6 flex flex-col justify-between">
                  <p className="text-sm text-gray-400 mb-2">{item.company}</p>
                  <blockquote className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
                    {item.quote.split(' ').map((word, i) => {
                      if (['reliable', 'truly', 'impressive'].includes(word.toLowerCase().replace(/[^a-z]/gi, ''))) {
                        return <strong key={i} className="font-bold text-black">{word} </strong>;
                      }
                      return word + ' ';
                    })}
                  </blockquote>
                  <div className="flex items-center gap-3 mt-auto">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-black">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Navigation Buttons Only */}
      <div className="flex items-center justify-end max-w-7xl mx-auto px-4 mt-10">
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
