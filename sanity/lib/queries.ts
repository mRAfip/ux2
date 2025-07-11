export const projectsQuery = `*[_type == "project"]{
    _id,
    title,
    "slug": slug.current,
    summary,
    "image": image.asset->url
  } | order(_createdAt desc)`
  