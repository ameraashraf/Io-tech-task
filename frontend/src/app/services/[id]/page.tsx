import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceData } from "./data/services";
import { buildServiceMetadata, getServiceById } from "./utils";
import ServicePageClient from "./components/ServicePageClient";

/**
 * Generate static parameters for all service pages
 * This enables static site generation (SSG) for better performance
 * Each service ID becomes a pre-rendered page at build time
 */
export function generateStaticParams() {
  return Object.keys(serviceData).map((id) => ({ id: id }));
}

/**
 * Generate dynamic metadata for each service page
 * Provides SEO-friendly titles and descriptions based on service data
 * This runs at build time for static pages and on-demand for dynamic routes
 */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const service = getServiceById((await params).id);
  return buildServiceMetadata(service);
}

/**
 * Service page component that renders individual service details
 * Uses static generation for performance and SEO benefits
 * Falls back to 404 if service is not found
 * Note: Translation is handled client-side to prevent hydration mismatches
 */
export default async function ServicePage({ params }: any) {
  const serviceId = (await params).id;
  const service = getServiceById(serviceId);

  // Return 404 page if service doesn't exist
  if (!service) return notFound();

  // Render the client component with service data
  // Translation will be handled client-side to prevent SSR/CSR mismatches
  return <ServicePageClient service={service} />;
}
