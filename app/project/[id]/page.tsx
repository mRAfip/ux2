'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Footer from '@/app/component/Footer';

type Project = {
  id: number;
  project_name: string;
  title: string;
  description: string;
  short_description: string;
  image_url: string;
  cover_page: string;
  created_at: string;
  start_date?: string;
  end_date?: string;
  services_provided?: string;
  testimonial_body?: string;
  client_name?: string;
  project_screens?: string[]; // Array of image URLs for process/flow
  project_link?: string; // ✅ New field for Figma/Behance link
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

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

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

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!project) return <div className="text-center py-20">Project not found.</div>;

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src={project.cover_page || project.image_url}
          alt={project.project_name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center">
          <div className="max-w-7xl pl-48 text-white">
            <div className="max-w-5xl">
              <p className="text-md uppercase tracking-widest text-gray-300">
                {project.project_name}
              </p>
              <h1 className="text-4xl md:text-8xl font-bold leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-200">{project.short_description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg text-gray-500">{project.description}</p>
        </div>



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

          {project.project_link && (
            <div className="flex justify-between">
              <span className="font-medium">Full Case Study</span>
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on Figma/Behance →
              </a>
            </div>
          )}
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

      {/* Design Process Screens */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Behind the Design – Process & Challenges
              </h2>
              <p className="text-gray-600 text-lg">
                We followed a structured design process, creating a scalable system with
                clear styles and reusable components to solve UI challenges and ensure
                consistency.
              </p>
            </div>
          </div>

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

      {/* Redirect Button to Case Study */}

        {project.project_link && (
          <section className="max-w-7xl mx-auto py-4 pb-9">
            <div className="text-left">
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold transition hover:bg-gray-800"
              >
                🚀 View Final UI 
              </a>
            </div>
          </section>
        )}


      <Footer />
    </>
  );
}
