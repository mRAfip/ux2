import { sanityClient } from '@/sanity/lib/sanityClient';
import { groq } from 'next-sanity';
import { urlFor } from '@/sanity/lib/imageBuilder';
import { notFound } from 'next/navigation';

const query = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    summary,
    image,
    body,
    coverVideo
  }
`;

type SlugResult = {
  current: string;
};

export async function generateStaticParams() {
  const slugs: SlugResult[] = await sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)][].slug`
  );

  return slugs.map((slug) => ({
    slug: slug.current,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? '';
  const project = await sanityClient.fetch(query, { slug });

  if (!project) return notFound();

  const backgroundImageUrl = project.image ? urlFor(project.image).width(1600).url() : '';

  return (
    <div>
      {/* Hero Section with Background Image from Sanity */}
      <div
        className="relative w-full h-[90vh] flex items-center justify-center text-white text-center px-6"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-11xl font-bold leading-tight mb-6">
            Finance without <br className="hidden sm:block" /> the middleman.
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Do more with your digital assets. The self-custody platform that brings the best of DeFi directly to you.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Join the waitlist →
          </a>
        </div>
      </div>

      {/* Project About Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Introduction + Problem */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">About the Project</h2>
              <p className="text-gray-700 leading-relaxed">
                This section introduces the project, describing its purpose, target audience, and the core idea behind its execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Statement</h3>
              <p className="text-gray-700 leading-relaxed">
                The client faced challenges in reaching their audience through their outdated web presence. The project aimed to redesign and modernize the entire brand experience.
              </p>
            </div>
          </div>

          {/* Right Side: Timeline + Testimonial */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Timeline</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li><strong>Start:</strong> January 5, 2024</li>
                <li><strong>Design Phase:</strong> Jan 10 – Jan 25</li>
                <li><strong>Development:</strong> Jan 26 – Feb 18</li>
                <li><strong>Delivery:</strong> Feb 20, 2024</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
              <blockquote className="text-gray-800 italic leading-relaxed">
                “Working with Rafi was seamless. The final product exceeded our expectations and helped us attract more customers.”
              </blockquote>
              <div className="mt-4 text-sm text-gray-600">
                — <span className="font-medium">Mohammed Salman</span>, Founder @ Saltech Innovations
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
