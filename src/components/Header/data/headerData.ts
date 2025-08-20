// Header data - navigation links and services configuration
// Defines the main navigation structure and services dropdown content
import { NavLink, ServiceColumn } from "@/app/types/types";

/**
 * Main navigation links for the header
 * Each link includes translation keys for internationalization support
 * Some links have dropdown functionality (like Services)
 */
export const navLinks: NavLink[] = [
  {
    name: "About us",
    href: "/about-us",
    disabled: false,
    translationKey: "header.nav.aboutUs",
  },
  {
    name: "Services",
    href: "/services",
    dropdown: true, // Indicates this link has a dropdown menu
    translationKey: "header.nav.services",
  },
  {
    name: "Our team",
    href: "/our-team",
    disabled: false,
    translationKey: "header.nav.ourTeam",
  },
  {
    name: "Blogs",
    href: "/blogs",
    disabled: false,
    translationKey: "header.nav.blogs",
  },
  {
    name: "Contact us",
    href: "/contact-us",
    disabled: false,
    translationKey: "header.nav.contactUs",
  },
];

/**
 * Services dropdown configuration organized in columns
 * Each column contains a group of related services
 * Used to create a multi-column dropdown menu in the header
 */
export const services: ServiceColumn[] = [
  {
    items: [
      {
        name: "Legal Consultation Services",
        id: "legal-consultation",
        translationKey: "header.services.legalConsultation",
      },
      {
        name: "Foreign Investment Services",
        id: "foreign-investment",
        translationKey: "header.services.foreignInvestment",
      },
      {
        name: "Contracts",
        id: "contracts",
        translationKey: "header.services.contracts",
      },
      {
        name: "Insurance",
        id: "insurance",
        translationKey: "header.services.insurance",
      },
    ],
  },
  {
    items: [
      {
        name: "....... and Defense in All Cases",
        id: "defense-cases",
        translationKey: "header.services.defenseInAllCases",
      },
      {
        name: "Banks and Financial Institutions",
        id: "banks-financial",
        translationKey: "header.services.banksFinancial",
      },
      {
        name: "Corporate Governance,Companies Liquidation",
        id: "corporate-governance",
        translationKey: "header.services.corporateGovernance",
      },
      {
        name: "Internal Regulations for Companies",
        id: "internal-regulations",
        translationKey: "header.services.internalRegulations",
      },
    ],
  },
  {
    items: [
      {
        name: "Sevices for Companies and Institutions",
        id: "companies-institutions",
        translationKey: "header.services.servicesForCompanies",
      },
      {
        name: "Arbitration",
        id: "arbitration",
        translationKey: "header.services.arbitration",
      },
      {
        name: "Intellectual Property",
        id: "intellectual-property",
        translationKey: "header.services.intellectualProperty",
      },
      {
        name: "Corporate Restructuring and Reorganization",
        id: "corporate-restructuring",
        translationKey: "header.services.corporateRestructuring",
      },
    ],
  },
  {
    items: [
      {
        name: "Establishing National and Foreign Companies",
        id: "establishing-companies",
        translationKey: "header.services.establishingCompanies",
      },
      {
        name: "Commercial Agencies",
        id: "commercial-agencies",
        translationKey: "header.services.commercialAgencies",
      },
      {
        name: "Supporting Vision 2030",
        id: "vision-2030",
        translationKey: "header.services.supportingVision2030",
      },
      {
        name: "Companies Liquidation",
        id: "companies-liquidation",
        translationKey: "header.services.companiesLiquidation",
      },
    ],
  },
];
