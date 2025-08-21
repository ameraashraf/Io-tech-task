// Type definitions for the application
// Defines interfaces for navigation, services, team members, and API responses

/**
 * Navigation link interface for header navigation
 * Supports dropdown functionality and internationalization
 */
export interface NavLink {
  name: string; // Display name for the navigation link
  href: string; // URL path for the link
  dropdown?: boolean; // Whether this link has a dropdown menu
  disabled?: boolean; // Whether the link is disabled
  translationKey?: string; // Key for internationalization
}

/**
 * Individual service item in the services dropdown
 * Represents a single service with its metadata
 */
export interface ServiceItem {
  name: string; // Service name
  id: string; // Unique identifier for the service
  description?: string; // Optional service description
  translationKey?: string; // Key for internationalization
}

/**
 * Column of services in the dropdown menu
 * Groups related services together for better organization
 */
export interface ServiceColumn {
  items: ServiceItem[]; // Array of services in this column
}

/**
 * Team member data structure for the team section
 * Includes personal information and social links
 */
export interface TeamMemberType {
  id?: number; // Optional unique identifier
  title: string; // Member's name
  position: string; // Job title or position
  image: string; // Profile image URL
  icons?: { [key: string]: string }; // Social media icons
  links?: { [key: string]: string }; // Social media links
}

// API response types for Strapi CMS integration

/**
 * Team member data structure from API response
 * Matches the Strapi content type structure
 */
export interface ApiTeamMember {
  id: number;
  name: string;
  description: string;
  memberImage: {
    id: number;
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
    };
  };
  memberIcons: {
    id: number;
  };
  Memberlinks: {
    id: number;
    whatsappLink: string;
    phoneNumber: string;
    email: string;
  };
}

/**
 * Team section data structure from API response
 * Contains section metadata and team members array
 */
export interface ApiTeamSection {
  id: number;
  documentId: string;
  sectionTitle: string;
  sectionDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  teamMembers: ApiTeamMember[]; // Array of team members
}

/**
 * Complete API response for team sections
 * Includes pagination metadata
 */
export interface TeamSectionResponse {
  data: ApiTeamSection[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Footer component types

/**
 * Social media icon configuration
 * Defines icon properties for footer social links
 */
export interface SocialIcon {
  src: string; // Icon image source
  alt: string; // Alt text for accessibility
  width: number; // Icon width
  height: number; // Icon height
  href: string; // Link URL
}

/**
 * Footer link structure
 * Simple link with URL and display text
 */
export interface FooterLink {
  href: string; // Link URL
  label: string; // Display text
}

/**
 * Testimonial data structure
 * Used for client testimonials and reviews
 */
export interface Testimonial {
  name: string; // Client name
  title: string; // Client title or company
  text: string; // Testimonial text
  image: string; // Client image URL
}

// Client Section API types

/**
 * Individual client item from API response
 * Contains client information and review data
 */
export interface ApiClientItem {
  id: number;
  name: string;
  review: string; // Client testimonial text
  position: string; // Client position or company
  clientImage?: {
    id: number;
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  } | null;
}

/**
 * Client section data structure from API response
 * Contains section metadata and client testimonials
 */
export interface ApiClientSection {
  id: number;
  documentId: string;
  sectionTitle: string;
  sectionDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  clientData: ApiClientItem[]; // Array of client testimonials
}

/**
 * Complete API response for client sections
 * Includes pagination metadata
 */
export interface ClientSectionResponse {
  data: ApiClientSection[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Hero Section API types

/**
 * Individual hero slide data structure
 * Represents a single slide in the hero carousel
 */
export interface ApiHeroSlide {
  id: number;
  title: string; // Slide title
  description: string; // Slide description
  ctaText: string; // Call-to-action button text
  ctaLink?: string; // Optional call-to-action link
}

/**
 * Hero section data structure from API response
 * Contains section metadata and hero slides
 */
export interface ApiHeroSection {
  id: number;
  documentId: string;
  sectionTitle?: string;
  sectionDescription?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  heroSection: ApiHeroSlide[]; // Array of hero slides
}

/**
 * Complete API response for hero sections
 * Includes pagination metadata
 */
export interface HeroSectionResponse {
  data: ApiHeroSection[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
