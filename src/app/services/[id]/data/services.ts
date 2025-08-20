// Service data configuration for the law firm website
// Contains detailed information about all legal services offered
// Each service includes sections, metadata, and SEO optimization data
// This data structure supports both English and Arabic translations via i18n

/**
 * Comprehensive service data object containing all legal services
 * Each service has detailed sections, metadata for SEO, and structured content
 * Used for static site generation and dynamic service pages
 * Note: Translations are handled via i18n system, not directly in this data structure
 */
export const serviceData = {
  // 1) Legal Consultation Services
  "legal-consultation": {
    id: "legal-consultation",
    title: "Legal Consultation Services",
    description:
      "Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients' needs and offer the best legal solutions in various cases and legal fields, we provide our legal consultations services as a follow:",
    sections: [
      {
        title: "General Legal Consultations",
        content:
          "At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.",
        items: [],
      },
      {
        title: "Corporate Legal Consultations",
        content:
          "We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses.",
        items: [
          "Establishing and registering companies.",
          "All kinds of contracts and agreements.",
          "Commercial disputes.",
          "Compliance with local and international laws and regulations.",
        ],
      },
      {
        title: "Individual Legal Consultations",
        content:
          "Law Firm offers customized advisory services for individuals, including:",
        items: [
          "Family issues such as divorce, alimony, and custody.",
          "Real estate matters like buying, selling, and renting properties.",
          "Employment issues such as hiring and wrongful termination.",
          "Criminal cases and defending personal rights.",
        ],
      },
    ],
    conclusion:
      "At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us today to receive professional and comprehensive legal consultation.",

    // SEO metadata for search engine optimization
    meta: {
      title: "Legal Consultation Services | Law Firm",
      description:
        "Comprehensive legal consultations for individuals and companies: corporate, individual, and general legal advice aligned with local and international laws.",
      keywords: [
        "legal consultation",
        "law firm advisory",
        "corporate legal advice",
        "individual legal advice",
        "contracts review",
      ],
      ogImage: "/og/service-legal-consultation.png",
    },
  },

  // 2) Foreign Investment Services
  "foreign-investment": {
    id: "foreign-investment",
    title: "Foreign Investment Services",
    description:
      "End-to-end guidance for foreign investors to enter, establish, or expand in the region with clarity and compliance.",
    sections: [
      {
        title: "Market Entry & Strategy",
        content:
          "Plan market entry based on sector regulations and risk profile.",
        items: [
          "Entity selection",
          "Licensing pathways",
          "Tax posture",
          "Local partnerships",
        ],
      },
      {
        title: "Regulatory & Compliance",
        content:
          "Navigate investment controls and reporting obligations confidently.",
        items: [
          "Foreign ownership rules",
          "Sectoral restrictions",
          "Investment incentives",
          "Periodic reporting",
        ],
      },
      {
        title: "Operational Support",
        content: "Practical support from incorporation to daily operations.",
        items: [
          "Banking coordination",
          "Visas & work permits",
          "Commercial contracts",
          "Dispute prevention",
        ],
      },
    ],
    conclusion: "Invest with confidence and a clear, compliant roadmap.",

    // SEO metadata for foreign investment services
    meta: {
      title: "Foreign Investment Services | Law Firm",
      description:
        "Advisory for foreign investors: market entry, licensing, compliance, operations, and dispute prevention across sectors.",
      keywords: [
        "foreign investment",
        "market entry",
        "licensing",
        "FDI compliance",
        "company setup",
      ],
      ogImage: "/og/service-foreign-investment.png",
    },
  },

  // 3) Contracts
  contracts: {
    id: "contracts",
    title: "Contracts",
    description:
      "Drafting, negotiating, and enforcing contracts that protect value and reduce disputes.",
    sections: [
      /* ... */
    ],
    conclusion: "Strong contracts build strong business relationships.",
    meta: {
      title: "Contracts | Law Firm",
      description:
        "Drafting, review, negotiation, and enforcement of commercial agreements with clear risk allocation.",
      keywords: [
        "contracts",
        "drafting",
        "review",
        "negotiation",
        "enforcement",
      ],
      ogImage: "/og/service-contracts.png",
    },
  },

  // 4) Insurance
  insurance: {
    id: "insurance",
    title: "Insurance",
    description:
      "Coverage review, claims assistance, and dispute resolution for corporate and personal lines.",
    sections: [
      /* ... */
    ],
    conclusion: "Get the coverage you paid for—on time and in full.",
    meta: {
      title: "Insurance | Law Firm",
      description:
        "Policy review, claims assistance, and insurance dispute resolution for corporate and individual clients.",
      keywords: [
        "insurance",
        "policy review",
        "claims",
        "coverage",
        "disputes",
      ],
      ogImage: "/og/service-insurance.png",
    },
  },

  // 5) Defense in All Cases
  "defense-cases": {
    id: "defense-cases",
    title: "Defense in All Cases",
    description:
      "Experienced defense in criminal, civil, administrative, and appellate matters.",
    sections: [
      /* ... */
    ],
    conclusion: "Your rights and interests defended with rigor and clarity.",
    meta: {
      title: "Defense in All Cases | Law Firm",
      description:
        "Criminal, civil, administrative, and appellate defense with proactive, discreet representation.",
      keywords: ["defense", "criminal defense", "civil litigation", "appeals"],
      ogImage: "/og/service-defense.png",
    },
  },

  // 6) Banks and Financial Institutions
  "banks-financial": {
    id: "banks-financial",
    title: "Banks and Financial Institutions",
    description:
      "Specialized advisory for banks, lenders, fintechs, and financial intermediaries.",
    sections: [
      /* ... */
    ],
    conclusion: "Align legal risk with financial outcomes.",
    meta: {
      title: "Banks & Financial Institutions | Law Firm",
      description:
        "Regulatory compliance, transactions structuring, and dispute resolution for financial institutions.",
      keywords: [
        "banks",
        "fintech",
        "regulatory compliance",
        "project finance",
      ],
      ogImage: "/og/service-banks.png",
    },
  },

  // 7) Corporate Governance & Companies Liquidation
  "corporate-governance": {
    id: "corporate-governance",
    title: "Corporate Governance & Companies Liquidation",
    description:
      "Board advisory, governance frameworks, and orderly liquidations when required.",
    sections: [
      /* ... */
    ],
    conclusion: "Strengthen governance or close with certainty.",
    meta: {
      title: "Corporate Governance & Liquidation | Law Firm",
      description:
        "Governance frameworks, compliance oversight, and compliant liquidation processes.",
      keywords: [
        "corporate governance",
        "liquidation",
        "board policies",
        "compliance",
      ],
      ogImage: "/og/service-governance.png",
    },
  },

  // 8) Internal Regulations for Companies
  "internal-regulations": {
    id: "internal-regulations",
    title: "Internal Regulations for Companies",
    description:
      "Design and implement practical internal policies teams actually use.",
    sections: [
      /* ... */
    ],
    conclusion: "Turn policies into daily practice and measurable compliance.",
    meta: {
      title: "Internal Regulations for Companies | Law Firm",
      description:
        "Policy development, rollout, audits, and continuous improvement for effective internal controls.",
      keywords: ["policies", "internal regulations", "handbooks", "compliance"],
      ogImage: "/og/service-internal-regs.png",
    },
  },

  // 9) Services for Companies and Institutions
  "companies-institutions": {
    id: "companies-institutions",
    title: "Services for Companies and Institutions",
    description:
      "Full-spectrum legal support for corporates, SMEs, NGOs, and public institutions.",
    sections: [
      /* ... */
    ],
    conclusion: "One legal partner across your organization's lifecycle.",
    meta: {
      title: "Services for Companies & Institutions | Law Firm",
      description:
        "Setup, operations, and expansion support for companies and institutions across sectors.",
      keywords: [
        "company services",
        "institutional",
        "operations",
        "expansion",
      ],
      ogImage: "/og/service-companies.png",
    },
  },

  // 10) Arbitration
  arbitration: {
    id: "arbitration",
    title: "Arbitration",
    description:
      "Efficient dispute resolution with enforceable awards and flexible procedures.",
    sections: [
      /* ... */
    ],
    conclusion:
      "Resolve disputes faster—preserving relationships where possible.",
    meta: {
      title: "Arbitration | Law Firm",
      description:
        "Arbitration clauses, proceedings management, and enforcement of awards across jurisdictions.",
      keywords: ["arbitration", "enforcement", "hearings", "ADR"],
      ogImage: "/og/service-arbitration.png",
    },
  },

  // 11) Intellectual Property
  "intellectual-property": {
    id: "intellectual-property",
    title: "Intellectual Property",
    description:
      "Protect, monetize, and enforce IP assets across jurisdictions.",
    sections: [
      /* ... */
    ],
    conclusion: "Your creativity and brand deserve strong protection.",
    meta: {
      title: "Intellectual Property | Law Firm",
      description:
        "Trademarks, copyrights, patents coordination, licensing, and IP enforcement.",
      keywords: ["IP", "trademark", "copyright", "licensing", "enforcement"],
      ogImage: "/og/service-ip.png",
    },
  },

  // 12) Corporate Restructuring and Reorganization
  "corporate-restructuring": {
    id: "corporate-restructuring",
    title: "Corporate Restructuring and Reorganization",
    description:
      "Stabilize operations, optimize structures, and navigate debt or ownership changes.",
    sections: [
      /* ... */
    ],
    conclusion: "A structured process to protect value and enable recovery.",
    meta: {
      title: "Corporate Restructuring & Reorganization | Law Firm",
      description:
        "Strategic options, debt workouts, and operational change programs to restore health.",
      keywords: ["restructuring", "workout", "mergers", "refinancing"],
      ogImage: "/og/service-restructuring.png",
    },
  },

  // 13) Establishing National and Foreign Companies
  "establishing-companies": {
    id: "establishing-companies",
    title: "Establishing National and Foreign Companies",
    description:
      "From idea to incorporation: swift, compliant company formation for locals and foreigners.",
    sections: [
      /* ... */
    ],
    conclusion: "Launch quickly with confidence and full compliance.",
    meta: {
      title: "Establishing National & Foreign Companies | Law Firm",
      description:
        "Entity selection, licensing, documentation, and post-incorporation support.",
      keywords: ["company formation", "licensing", "incorporation", "visas"],
      ogImage: "/og/service-establishing.png",
    },
  },

  // 14) Commercial Agencies
  "commercial-agencies": {
    id: "commercial-agencies",
    title: "Commercial Agencies",
    description:
      "Structure, register, and manage compliant agency relationships.",
    sections: [
      /* ... */
    ],
    conclusion:
      "Well-structured agencies reduce risk and increase performance.",
    meta: {
      title: "Commercial Agencies | Law Firm",
      description:
        "Agency setup, operations, and dispute resolution including compensation claims.",
      keywords: [
        "commercial agency",
        "registration",
        "exclusivity",
        "compensation",
      ],
      ogImage: "/og/service-agencies.png",
    },
  },

  // 15) Supporting Vision 2030
  "vision-2030": {
    id: "vision-2030",
    title: "Supporting Vision 2030",
    description:
      "Legal enablement for initiatives aligned with national transformation goals.",
    sections: [
      /* ... */
    ],
    conclusion:
      "Align legal workstreams with Vision 2030 targets and timelines.",
    meta: {
      title: "Supporting Vision 2030 | Law Firm",
      description:
        "PPP structures, incentives, and governance for Vision 2030-aligned initiatives.",
      keywords: ["vision 2030", "PPP", "incentives", "governance"],
      ogImage: "/og/service-vision2030.png",
    },
  },

  // 16) Companies Liquidation
  "companies-liquidation": {
    id: "companies-liquidation",
    title: "Companies Liquidation",
    description:
      "Plan and execute compliant liquidation with minimal disruption and clear outcomes.",
    sections: [
      /* ... */
    ],
    conclusion: "Close with certainty, compliance, and stakeholder clarity.",
    meta: {
      title: "Companies Liquidation | Law Firm",
      description:
        "Preparation, liquidation process, and post-closure documentation with regulator confirmations.",
      keywords: [
        "liquidation",
        "winding up",
        "creditors",
        "final distribution",
      ],
      ogImage: "/og/service-liquidation.png",
    },
  },
} as const;

/**
 * TypeScript type for service IDs
 * Provides type safety when referencing service identifiers
 * This type ensures only valid service IDs can be used throughout the application
 */
export type ServiceId = keyof typeof serviceData;
