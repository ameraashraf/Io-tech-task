import type { Metadata } from "next";
import { serviceData } from "./data/services";

/**
 * Retrieve a service by its ID from the service data
 * Returns undefined if the service doesn't exist
 * This function provides type-safe access to service data
 * @param id - The service identifier (e.g., "legal-consultation", "contracts")
 * @returns Service object or undefined if not found
 */
export function getServiceById(id: string) {
  return serviceData[id as keyof typeof serviceData];
}

/**
 * Build comprehensive metadata for a service page
 * Generates SEO-friendly metadata including Open Graph and Twitter Card data
 * Falls back to default values if specific meta data is not provided
 * This ensures proper SEO optimization for search engines and social media sharing
 * @param service - The service object containing metadata and content
 * @returns Next.js Metadata object for the service page
 */
export function buildServiceMetadata(service: any): Metadata {
  if (!service) return {};

  // Extract metadata with fallbacks to service content for better SEO
  const title = service.meta?.title ?? service.title;
  const description = service.meta?.description ?? service.description;
  const keywords = service.meta?.keywords ?? [];
  const ogImage = service.meta?.ogImage;

  return {
    title,
    description,
    keywords,
    // Open Graph metadata for social media sharing (Facebook, LinkedIn, etc.)
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: "article",
    },
    // Twitter Card metadata for Twitter sharing
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    // Canonical URL for SEO to prevent duplicate content issues
    alternates: {
      canonical: `/services/${service.id}`,
    },
  };
}
