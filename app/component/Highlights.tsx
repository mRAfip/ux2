'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { supabase } from '@/lib/supabase';

type Project = {
  id: number;
  project_name: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  services_provided?: string;
};

export default function ProjectsSwiper() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('id, project_name, title, description, image_url, created_at, services_provided')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error.message);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative py-28">
      <div className="flex justify-between items-center mb-4 max-w-7xl mx-auto px-4">
        <div className="flex flex-col">
          <div className="mb-6 text-md tracking-wider text-gray-400 uppercase">
            <span className="text-[#FF531A] font-bold uppercase">01</span> / Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real work, real results
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-5 overflow-visible relative px-4">


<Swiper
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
    swiper.autoplay?.stop();
  }}
  modules={[Autoplay, Navigation]}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={24}
  slidesPerView={'auto'}
  className="!overflow-visible mt-7"
>
  {loading
    ? [...Array(3)].map((_, index) => (
        <SwiperSlide
          key={index}
          className="!h-auto !w-auto"
          style={{ width: '350px' }}
        >
          <div className="w-[350px] rounded-md bg-white overflow-hidden">
            <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-md" />
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse" />
              <div className="h-3 bg-gray-200 rounded w-full mb-2 animate-pulse" />
              <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse" />
            </div>
          </div>
        </SwiperSlide>
      ))
    : projects.map((project) => (
        <SwiperSlide
          key={project.id}
          className="!h-auto !w-auto"
          style={{ width: '350px' }}
        >
          <Link href={`/project/${project.id}`}>
            <div className="w-[350px] rounded-md bg-white overflow-hidden transition-all">
              <div className="relative w-full aspect-[3/4]"> {/* Makes vertical image */}
                <Image
                  src={project.image_url || '/placeholder.jpg'}
                  alt={project.project_name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="py-3 px-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.project_name}
                </h3>
                <span className="text-gray-500">{project.services_provided || 'N/A'}</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
</Swiper>


      </div>

      {/* Navigation Arrows */}
      <div className="flex max-w-7xl mx-auto items-center justify-start mt-10 gap-3 px-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-[50px] h-[50px] bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:opacity-80 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-[50px] h-[50px] bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:opacity-80 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
