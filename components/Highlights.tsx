'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: number;
  project_name: string;
  title: string;
  description: string;
  image_url: string;
  services_provided?: string;
};

export default function ProjectsSwiper() {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Static project data with random images from public folder
  const projects: Project[] = [
    {
      id: 1,
      project_name: "E-commerce Platform",
      title: "Modern Shopping Experience",
      description: "A complete e-commerce solution with modern design and seamless user experience.",
      image_url: "/work/1.jpg",
      services_provided: "Web Design, Development"
    },
    {
      id: 2,
      project_name: "Mobile App Design",
      title: "iOS & Android App",
      description: "Cross-platform mobile application with intuitive user interface and smooth interactions.",
      image_url: "/work/2.jpg",
      services_provided: "Mobile Design, UX/UI"
    },
    {
      id: 3,
      project_name: "Brand Identity",
      title: "Complete Brand System",
      description: "Comprehensive brand identity including logo, guidelines, and marketing materials.",
      image_url: "/work/3.jpg",
      services_provided: "Branding, Design"
    },
    {
      id: 4,
      project_name: "Web Application",
      title: "SaaS Platform",
      description: "Full-stack web application with modern architecture and scalable design.",
      image_url: "/work/4.jpg",
      services_provided: "Web Development, Design"
    },
    {
      id: 5,
      project_name: "Dashboard Design",
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with clean interface and powerful analytics tools.",
      image_url: "/work/5.jpg",
      services_provided: "UI/UX Design, Development"
    },
    {
      id: 6,
      project_name: "Landing Page",
      title: "Marketing Website",
      description: "High-converting landing page designed to drive user engagement and conversions.",
      image_url: "/work/1.jpg",
      services_provided: "Web Design, Marketing"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrolled = window.pageYOffset;
        const sectionElement = galleryRef.current.closest('.sticky-section') as HTMLElement;
        const sectionTop = sectionElement?.offsetTop || 0;
        const windowHeight = window.innerHeight;
        
        // Calculate when section should stick (when it reaches top of viewport)
        const stickyStart = sectionTop;
        
        // Calculate the total width that needs to be scrolled
        const containerWidth = galleryRef.current.scrollWidth / 2; // Half because we have duplicate sets
        const maxTranslate = -containerWidth;
        
        // Calculate how much scroll is needed to complete the animation
        // This ensures the last card reaches the right end
        const animationScrollDistance = windowHeight * 2; // 2 screen heights for smooth animation
        const stickyEnd = stickyStart + animationScrollDistance;
        
        if (scrolled >= stickyStart && scrolled < stickyEnd) {
          // Section is sticky - calculate animation progress
          const scrollProgress = (scrolled - stickyStart) / animationScrollDistance;
          const progress = Math.min(Math.max(scrollProgress, 0), 1);
          
          // Apply the animation (forward when scrolling down, reverse when scrolling up)
          const translateX = maxTranslate * progress;
          galleryRef.current.style.transform = `translateX(${translateX}px)`;
          
          // Keep website sticky during entire animation
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrolled}px`;
          document.body.style.width = '100%';
        } else if (scrolled < stickyStart) {
          // Before sticky section - reset animation and restore scroll
          galleryRef.current.style.transform = `translateX(0px)`;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
        } else if (scrolled >= stickyEnd) {
          // After animation completes - keep final position and restore scroll
          galleryRef.current.style.transform = `translateX(${maxTranslate}px)`;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Cleanup: restore body scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  return (
    <div className="sticky-section h-screen bg-white">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="pt-20 pb-8 flex-shrink-0">
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
        </div>

        {/* Animated Gallery */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4">
              <div 
                ref={galleryRef}
                className="flex gap-6"
                style={{ width: '200%' }}
              >
                {/* First set of projects */}
                <div className="flex gap-6">
                  {projects.map((project) => (
                    <div key={`first-${project.id}`} className="flex-shrink-0 w-80">
                      <Link href={`/project/${project.id}`}>
                        <div className="w-full rounded-4xl bg-white overflow-hidden transition-all hover:shadow-lg">
                          <div className="relative w-full aspect-[2.5/4]">
                            <Image
                              src={project.image_url}
                              alt={project.project_name}
                              fill
                              className="object-cover rounded-4xl"
                            />
                          </div>
                          <div className="py-3 px-3">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {project.project_name}
                            </h3>
                            <span className="text-gray-500">{project.services_provided}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-6">
                  {projects.map((project) => (
                    <div key={`second-${project.id}`} className="flex-shrink-0 w-80">
                      <Link href={`/project/${project.id}`}>
                        <div className="w-full rounded-4xl bg-white overflow-hidden transition-all hover:shadow-lg">
                          <div className="relative w-full aspect-[2.5/4]">
                            <Image
                              src={project.image_url}
                              alt={project.project_name}
                              fill
                              className="object-cover rounded-4xl"
                            />
                          </div>
                          <div className="py-3 px-3">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {project.project_name}
                            </h3>
                            <span className="text-gray-500">{project.services_provided}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to allow normal scrolling after animation */}
      <div className="h-screen"></div>
    </div>
  );
}
