import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '044zqvyy',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-06',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
