import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "044zqvyy",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});