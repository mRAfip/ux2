'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    company: 'Blend-Ed Calicut',
    quote: '“Muhammed Rafi’s UI/UX work on our projects, especially Blend-ed (Open edX LMS), helped us gain recognition in the Open edX Community. His direct collaboration with the Open edX UI/UX team and consistent design support made a real difference.”',
    name: 'Adel ',
    role: 'Project Manager',
  },
  {
    company: 'XandY.',
    quote: '“Muhammed Rafi played a key role in designing our company website for Xandy Learnings, focused on K–12 education. ”',
    name: 'Ajmal',
    role: 'CEO',
  },
  {
    company: 'Relish Herbals',
    quote: '“Muhammed Rafi designed and built our eCommerce website with great attention to user experience. His work gave us a clean, professional platform that truly supports our online business.”',
    name: 'Sreekanth Kurup',
    role: 'Founder',
  },
  {
    company: 'Hire You Soon',
    quote: '“Muhammed Rafi helped design the UI/UX for our new hiring platform. His user-focused approach made the platform intuitive and easy to navigate for both recruiters and applicants.”',
    name: 'Vibhu',
    role: 'CEO',
  },
  {
    company: 'Cyra Learnings',
    quote: '“Muhammed Rafi served as a UI/UX mentor and trainer for our students. His clear teaching style and real-world insights greatly enhanced their understanding and skills in design.”',
    name: 'Navas Muhammed',
    role: 'CEO',
  },
  {
    company: 'Open edX',
    quote: '“Muhammed Rafi contributed to the Open edX project, focusing on Visual design. His work helped improve the user interface and experience of the platform.”',
    name: 'Nadheem',
    role: 'Open Project',
  },
];

export default function Highlights() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="w-full py-16 bg-black text-white">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-10">

       <div className="mb-6 text-md tracking-wider text-gray-400 uppercase">
              <span className="text-[#FF531A] font-bold">05</span> / TESTIMONIALS
         </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-50">
          Real Results. Real Feedback.
        </h2>
      </div>

      {/* Testimonial Swiper */}
      <div className="max-w-7xl mx-auto px-4">
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
              <div className="h-[440px] max-w-[350px] bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6 flex flex-col justify-between shadow-md hover:bg-[#1a1a1a] transition">
                <p className="text-sm text-gray-500 mb-2">{item.company}</p>
                <blockquote className="text-xl font-medium text-gray-300 mb-6 leading-relaxed">
                  {item.quote.split(' ').map((word, i) => {
                    if (['reliable', 'truly', 'impressive'].includes(word.toLowerCase().replace(/[^a-z]/gi, ''))) {
                      return <strong key={i} className="text-gray-50">{word} </strong>;
                    }
                    return word + ' ';
                  })}
                </blockquote>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-50">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-end mt-10 gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-[50px] h-[50px] bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#222] hover:text-white transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-[50px] h-[50px] bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#222] hover:text-white transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
