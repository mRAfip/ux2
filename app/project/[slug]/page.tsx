import { sanityClient } from '@/sanity/lib/sanityClient';
import { groq } from 'next-sanity';
import { urlFor } from '@/sanity/lib/imageBuilder';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

const query = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    summary,
    image,
    body
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
  const project = await sanityClient.fetch(query, { slug: params.slug });

  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Published on {new Date(project.publishedAt).toLocaleDateString()}
      </p>

      {project.image && (
        <div className="mb-6">
          <Image
            src={urlFor(project.image).width(1000).url()}
            alt={project.title}
            width={1000}
            height={600}
            className="rounded-xl object-cover"
          />
        </div>
      )}

      <p className="text-lg text-gray-700 mb-4">{project.summary}</p>

      <div className="prose">
        <PortableText value={project.body} />
      </div>
    </div>
  );
}
