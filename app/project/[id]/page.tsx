'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Footer from "@/app/component/Footer";

type Project = {
  id: number;
  project_name: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  start_date?: string;
  end_date?: string;
  services_provided?: string;
  testimonial_body?: string;
  client_name?: string;
  project_screens?: string[]; // Array of image URLs for project screens
  final_ui_screens?: string[]; // Array of image URLs for final UI grid
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching project:', error.message);
      } else {
        setProject(data);
      }
      setLoading(false);
    };

    if (id) fetchProject();
  }, [id]);


  // Function to format date strings
  // This will format the date to a more readable format like "Jan 1,

    const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Parse project_screens from string or array
  // This handles both cases where it might be a JSON string or a simple comma-separated string

    let screens: string[] = [];

    if (typeof project?.project_screens === 'string') {
      try {
        const parsed = JSON.parse(project.project_screens as string);
        screens = Array.isArray(parsed) ? parsed : [];
      } catch {
        screens = (project.project_screens as string).split(',').map((s) => s.trim());
      }
    } else if (Array.isArray(project?.project_screens)) {
      screens = project.project_screens;
    }


    // final UI screens

    let finalScreens: string[] = [];

    if (typeof project?.final_ui_screens === 'string') {
      try {
        const parsed = JSON.parse(project.final_ui_screens as string);
        finalScreens = Array.isArray(parsed) ? parsed : [];
      } catch {
        finalScreens = (project.final_ui_screens as string).split(',').map((s) => s.trim());
      }
    } else if (Array.isArray(project?.final_ui_screens)) {
      finalScreens = project.final_ui_screens;
    }



  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!project) return <div className="text-center py-20">Project not found.</div>;

  return (
    <>
      {/* Hero Section */}
      <div className="relative  w-full h-[90vh] overflow-hidden">
        {/* Background image */}
        <Image
          src={project.image_url}
          alt={project.project_name}
          fill
          priority
          className="object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl pl-48 text-white">
            <div className="max-w-5xl">
              <p className="text-md uppercase tracking-widest text-gray-300">
                {project.project_name}
              </p>
              <h1 className="text-4xl md:text-8xl font-bold leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-200">{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Project Section (blank for now) */}
<section className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
  {/* Section Header */}
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
    <p className="text-gray-600 text-lg">
      This project demonstrates our ability to create cohesive, high-converting digital experiences. Every detail is crafted to help our clients succeed.
    </p>
  </div>

  {/* Info Rows */}
  <div className="space-y-6 text-sm text-gray-700 border-t border-gray-200 pt-6">
    <div className="flex justify-between">
      <span className="font-medium">Timeline</span>
      <span className="text-gray-500">
        {formatDate(project.start_date)} – {formatDate(project.end_date)}
      </span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Services provided</span>
      <span className="text-gray-500">{project.services_provided || 'N/A'}</span>

    </div>

  </div>



  {/* Testimonial */}
  <div className="mt-12 border-t border-gray-200 pt-6">
    <h4 className="text-lg font-semibold mb-2">Client Testimonial</h4>
      {project.testimonial_body && (
        <blockquote className="italic text-gray-700 bg-gray-50 p-4 rounded-lg">
          “{project.testimonial_body}”
        </blockquote>
      )}

    {project.client_name && (
      <p className="mt-2 text-sm text-gray-500">– {project.client_name}</p>
    )}

  </div>
</section>




<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
    
    {/* LEFT: Sticky Title/Intro */}
    <div className="lg:col-span-2">
      <div className="sticky top-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Design System Screens</h2>
        <p className="text-gray-600 text-lg">
          Here’s a detailed look at our design system screens — including typography, colors, components,
          layout rules, and UI elements that ensure consistency and scalability.
        </p>
      </div>
    </div>

    {/* RIGHT: Vertical list of image cards (no scroll container) */}
    <div className="lg:col-span-3 space-y-6">
      {screens.map((url: string, idx: number) => (
        <div
          key={idx}
          className="w-full h-[500px] bg-white rounded-xl shadow overflow-hidden"
        >
          <img
            src={url}
            alt={`UI screen ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

  </div>
</section>





{finalScreens.length > 0 && (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Final UI Screens</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* First full-width image */}
      <div className="md:col-span-3 h-[400px] rounded-2xl overflow-hidden">
        <img
          src={finalScreens[0]}
          alt="Final UI screen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle grid images */}
      {finalScreens.slice(1, -1).map((url, idx) => (
        <div key={idx} className="h-[250px] rounded-2xl overflow-hidden">
          <img
            src={url}
            alt={`UI Screen ${idx + 2}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Last full-width image */}
      {finalScreens.length > 1 && (
        <div className="md:col-span-3 h-[400px] rounded-2xl overflow-hidden">
          <img
            src={finalScreens[finalScreens.length - 1]}
            alt="Final UI screen"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  </section>
)}


      <Footer/>

    </>
  );
}
