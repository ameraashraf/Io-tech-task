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
      "Law Firm provides comprehensive foreign investment services to help international investors establish and expand their presence in the region. Our expertise covers all aspects of foreign investment, from initial market entry to ongoing compliance and operational support.",
    sections: [
      {
        title: "Market Entry & Strategy",
        content:
          "We help foreign investors develop comprehensive market entry strategies tailored to their specific industry and investment goals.",
        items: [
          "Market analysis and feasibility studies.",
          "Entity selection and structure optimization.",
          "Licensing and regulatory pathway planning.",
          "Tax planning and optimization strategies.",
        ],
      },
      {
        title: "Regulatory & Compliance",
        content:
          "Our team ensures full compliance with all foreign investment regulations and reporting requirements.",
        items: [
          "Foreign ownership restrictions and exemptions.",
          "Sectoral investment regulations and limitations.",
          "Investment incentives and government support programs.",
          "Periodic reporting and compliance monitoring.",
        ],
      },
      {
        title: "Operational Support",
        content:
          "We provide ongoing operational support to ensure smooth business operations and regulatory compliance.",
        items: [
          "Banking coordination and account setup.",
          "Visa and work permit applications.",
          "Commercial contract drafting and negotiation.",
          "Dispute prevention and resolution strategies.",
        ],
      },
    ],
    conclusion:
      "Partner with Law Firm for comprehensive foreign investment support that ensures compliance, minimizes risks, and maximizes your investment success in the region.",

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
      "Law Firm specializes in drafting, reviewing, negotiating, and enforcing contracts that protect your interests and minimize legal risks. Our contract services cover all types of commercial and legal agreements.",
    sections: [
      {
        title: "Contract Drafting",
        content:
          "Our expert legal team drafts comprehensive contracts that clearly define rights, obligations, and dispute resolution mechanisms.",
        items: [
          "Commercial contracts and agreements.",
          "Employment contracts and policies.",
          "Real estate contracts and leases.",
          "Intellectual property licensing agreements.",
        ],
      },
      {
        title: "Contract Review & Negotiation",
        content:
          "We provide thorough contract review services to identify potential risks and negotiate favorable terms for our clients.",
        items: [
          "Risk assessment and mitigation strategies.",
          "Terms negotiation and optimization.",
          "Compliance verification with local laws.",
          "Performance monitoring and enforcement clauses.",
        ],
      },
      {
        title: "Contract Enforcement & Dispute Resolution",
        content:
          "When contract disputes arise, we provide effective enforcement and resolution services to protect your interests.",
        items: [
          "Breach of contract claims and defenses.",
          "Alternative dispute resolution (ADR) procedures.",
          "Litigation and arbitration representation.",
          "Settlement negotiation and mediation.",
        ],
      },
    ],
    conclusion:
      "Trust Law Firm to create, review, and enforce contracts that protect your business interests and provide clear legal frameworks for your commercial relationships.",

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
      "Law Firm provides comprehensive insurance legal services, helping clients navigate complex insurance policies, claims processes, and disputes. We ensure you receive the coverage you're entitled to under your insurance policies.",
    sections: [
      {
        title: "Insurance Policy Review",
        content:
          "Our team conducts thorough reviews of insurance policies to ensure adequate coverage and identify potential gaps or exclusions.",
        items: [
          "Policy coverage analysis and interpretation.",
          "Exclusion and limitation identification.",
          "Premium optimization and cost analysis.",
          "Policy comparison and selection guidance.",
        ],
      },
      {
        title: "Claims Assistance",
        content:
          "We provide expert assistance throughout the insurance claims process to ensure fair and timely settlements.",
        items: [
          "Claims preparation and documentation.",
          "Negotiation with insurance companies.",
          "Appeals and dispute resolution.",
          "Settlement evaluation and acceptance.",
        ],
      },
      {
        title: "Insurance Dispute Resolution",
        content:
          "When insurance disputes arise, we provide aggressive representation to protect your rights and secure fair compensation.",
        items: [
          "Bad faith insurance claims.",
          "Coverage disputes and denials.",
          "Subrogation and contribution claims.",
          "Arbitration and litigation representation.",
        ],
      },
    ],
    conclusion:
      "Law Firm ensures you receive the full benefits of your insurance coverage through expert policy review, claims assistance, and dispute resolution services.",

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
      "Law Firm provides comprehensive defense services across all legal areas, offering experienced representation in criminal, civil, administrative, and appellate matters. Our defense team is committed to protecting your rights and interests.",
    sections: [
      {
        title: "Criminal Defense",
        content:
          "Our criminal defense team provides aggressive representation for individuals and businesses facing criminal charges.",
        items: [
          "White-collar crime defense.",
          "Drug offenses and trafficking cases.",
          "Fraud and financial crime defense.",
          "Violent crime and assault cases.",
        ],
      },
      {
        title: "Civil Litigation Defense",
        content:
          "We defend clients in complex civil litigation matters, protecting their interests and minimizing legal exposure.",
        items: [
          "Commercial litigation defense.",
          "Personal injury defense.",
          "Contract dispute defense.",
          "Employment law defense.",
        ],
      },
      {
        title: "Administrative & Appellate Defense",
        content:
          "Our team handles administrative proceedings and appellate matters to ensure fair treatment and protect legal rights.",
        items: [
          "Administrative hearing representation.",
          "Regulatory compliance defense.",
          "Appellate court representation.",
          "Supreme court appeals.",
        ],
      },
    ],
    conclusion:
      "Trust Law Firm's experienced defense team to protect your rights and interests in all legal matters, from initial investigation through final resolution.",

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
      "Law Firm provides specialized legal services for banks, financial institutions, fintech companies, and other financial intermediaries. Our expertise covers regulatory compliance, transactions, and dispute resolution in the financial sector.",
    sections: [
      {
        title: "Regulatory Compliance",
        content:
          "We help financial institutions navigate complex regulatory requirements and maintain compliance with local and international financial regulations.",
        items: [
          "Banking license applications and maintenance.",
          "Anti-money laundering (AML) compliance.",
          "Know Your Customer (KYC) requirements.",
          "Capital adequacy and prudential regulations.",
        ],
      },
      {
        title: "Financial Transactions",
        content:
          "Our team provides legal support for complex financial transactions and structured finance arrangements.",
        items: [
          "Project finance and syndicated loans.",
          "Securitization and structured products.",
          "Mergers and acquisitions in financial sector.",
          "Islamic finance and Shariah-compliant structures.",
        ],
      },
      {
        title: "Dispute Resolution",
        content:
          "We represent financial institutions in complex disputes and regulatory enforcement actions.",
        items: [
          "Commercial loan disputes and enforcement.",
          "Regulatory investigations and enforcement.",
          "Fraud and financial crime defense.",
          "Arbitration and litigation representation.",
        ],
      },
    ],
    conclusion:
      "Law Firm provides comprehensive legal support to financial institutions, ensuring regulatory compliance, successful transactions, and effective dispute resolution.",

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
      "Law Firm provides comprehensive corporate governance advisory services and handles company liquidation processes. We help companies establish effective governance frameworks and manage orderly liquidations when required.",
    sections: [
      {
        title: "Corporate Governance Advisory",
        content:
          "We help companies establish and maintain effective corporate governance frameworks that enhance transparency and accountability.",
        items: [
          "Board structure and composition optimization.",
          "Corporate governance policies and procedures.",
          "Compliance monitoring and reporting systems.",
          "Stakeholder engagement and communication.",
        ],
      },
      {
        title: "Board Advisory Services",
        content:
          "Our team provides ongoing advisory services to boards of directors on governance matters and strategic decisions.",
        items: [
          "Board meeting preparation and facilitation.",
          "Director duties and responsibilities guidance.",
          "Conflict of interest management.",
          "Strategic decision-making support.",
        ],
      },
      {
        title: "Company Liquidation",
        content:
          "We handle all aspects of company liquidation, ensuring compliance with legal requirements and protecting stakeholder interests.",
        items: [
          "Voluntary and involuntary liquidation procedures.",
          "Creditor rights and debt settlement.",
          "Asset distribution and final accounting.",
          "Regulatory compliance and reporting.",
        ],
      },
    ],
    conclusion:
      "Law Firm provides expert guidance on corporate governance and liquidation matters, ensuring compliance, transparency, and stakeholder protection throughout the process.",

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
      "Law Firm helps companies develop and implement effective internal regulations and policies that promote compliance, efficiency, and organizational success. Our approach focuses on creating practical policies that teams actually use.",
    sections: [
      {
        title: "Policy Development",
        content:
          "We work with companies to develop comprehensive internal policies that align with business objectives and legal requirements.",
        items: [
          "Employee handbooks and workplace policies.",
          "Code of conduct and ethics policies.",
          "Data protection and privacy policies.",
          "Health and safety regulations.",
        ],
      },
      {
        title: "Policy Implementation",
        content:
          "Our team provides guidance on effectively implementing and communicating internal policies throughout the organization.",
        items: [
          "Policy rollout and training programs.",
          "Communication strategies and materials.",
          "Compliance monitoring and enforcement.",
          "Policy review and update procedures.",
        ],
      },
      {
        title: "Compliance Management",
        content:
          "We help companies establish systems to monitor and maintain compliance with internal regulations and external requirements.",
        items: [
          "Compliance auditing and reporting.",
          "Risk assessment and mitigation.",
          "Incident investigation and resolution.",
          "Continuous improvement processes.",
        ],
      },
    ],
    conclusion:
      "Law Firm transforms policy development into practical, effective internal regulations that drive compliance, efficiency, and organizational success.",

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
      "Law Firm provides comprehensive legal services for companies, institutions, and organizations of all sizes. Our full-spectrum support covers establishment, operations, expansion, and ongoing legal needs.",
    sections: [
      {
        title: "Company Establishment",
        content:
          "We provide complete legal support for establishing new companies and institutions, ensuring proper structure and compliance.",
        items: [
          "Entity selection and structure optimization.",
          "Registration and licensing procedures.",
          "Shareholder agreements and governance documents.",
          "Initial compliance setup and reporting.",
        ],
      },
      {
        title: "Operational Support",
        content:
          "Our team provides ongoing legal support for day-to-day operations and strategic initiatives.",
        items: [
          "Contract drafting and negotiation.",
          "Employment law and HR compliance.",
          "Intellectual property protection.",
          "Regulatory compliance and reporting.",
        ],
      },
      {
        title: "Expansion and Growth",
        content:
          "We support companies and institutions in their growth and expansion efforts with comprehensive legal guidance.",
        items: [
          "Mergers and acquisitions support.",
          "International expansion and market entry.",
          "Financing and investment transactions.",
          "Strategic partnerships and joint ventures.",
        ],
      },
    ],
    conclusion:
      "Law Firm serves as your comprehensive legal partner, supporting your organization's entire lifecycle from establishment through growth and expansion.",

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
      "Law Firm provides expert arbitration services for efficient and effective dispute resolution. Our arbitration team handles complex commercial disputes with enforceable awards and flexible procedures.",
    sections: [
      {
        title: "Arbitration Clauses",
        content:
          "We help clients draft effective arbitration clauses that provide clear dispute resolution mechanisms for their contracts.",
        items: [
          "Arbitration clause drafting and optimization.",
          "Institutional vs. ad hoc arbitration selection.",
          "Arbitrator selection and appointment procedures.",
          "Procedural rules and timeline establishment.",
        ],
      },
      {
        title: "Arbitration Proceedings",
        content:
          "Our team represents clients in arbitration proceedings, ensuring efficient and effective dispute resolution.",
        items: [
          "Case preparation and evidence gathering.",
          "Hearing representation and advocacy.",
          "Expert witness coordination.",
          "Award enforcement and collection.",
        ],
      },
      {
        title: "International Arbitration",
        content:
          "We handle complex international arbitration matters with expertise in cross-border enforcement and recognition.",
        items: [
          "Multi-jurisdictional dispute resolution.",
          "New York Convention enforcement.",
          "Investment treaty arbitration.",
          "Cross-border award recognition.",
        ],
      },
    ],
    conclusion:
      "Law Firm provides efficient arbitration services that resolve disputes quickly while preserving business relationships where possible.",

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
      "Law Firm provides comprehensive intellectual property services to protect, monetize, and enforce your IP assets. Our IP team helps clients safeguard their innovations, brands, and creative works across jurisdictions.",
    sections: [
      {
        title: "IP Protection",
        content:
          "We help clients secure comprehensive protection for their intellectual property assets through strategic registration and enforcement.",
        items: [
          "Trademark registration and protection.",
          "Patent applications and prosecution.",
          "Copyright registration and enforcement.",
          "Trade secret protection strategies.",
        ],
      },
      {
        title: "IP Monetization",
        content:
          "Our team helps clients maximize the value of their intellectual property through strategic licensing and commercialization.",
        items: [
          "Licensing agreements and negotiations.",
          "Technology transfer arrangements.",
          "IP valuation and assessment.",
          "Commercialization strategies.",
        ],
      },
      {
        title: "IP Enforcement",
        content:
          "We provide aggressive enforcement of intellectual property rights to protect against infringement and unauthorized use.",
        items: [
          "Infringement monitoring and detection.",
          "Cease and desist actions.",
          "Litigation and dispute resolution.",
          "Border enforcement and customs protection.",
        ],
      },
    ],
    conclusion:
      "Law Firm ensures your creativity and brand receive strong protection through comprehensive intellectual property services that safeguard your valuable assets.",

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
      "Law Firm provides expert guidance for corporate restructuring and reorganization efforts. We help companies stabilize operations, optimize structures, and navigate complex debt or ownership changes.",
    sections: [
      {
        title: "Strategic Restructuring",
        content:
          "We help companies develop and implement strategic restructuring plans that optimize operations and improve financial performance.",
        items: [
          "Business model optimization.",
          "Operational restructuring and efficiency improvements.",
          "Asset rationalization and divestitures.",
          "Organizational structure optimization.",
        ],
      },
      {
        title: "Financial Restructuring",
        content:
          "Our team provides comprehensive support for financial restructuring, including debt workouts and refinancing arrangements.",
        items: [
          "Debt restructuring and workout negotiations.",
          "Refinancing and capital structure optimization.",
          "Creditor negotiations and settlements.",
          "Financial covenant modifications.",
        ],
      },
      {
        title: "Legal Restructuring",
        content:
          "We handle all legal aspects of corporate restructuring, ensuring compliance and protecting stakeholder interests.",
        items: [
          "Merger and acquisition transactions.",
          "Spin-offs and divestitures.",
          "Bankruptcy and insolvency proceedings.",
          "Regulatory compliance and approvals.",
        ],
      },
    ],
    conclusion:
      "Law Firm provides structured corporate restructuring services that protect value, enable recovery, and position companies for sustainable growth.",

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
      "Law Firm provides comprehensive company formation services for both national and foreign investors. Our expertise ensures swift, compliant company establishment with full regulatory compliance.",
    sections: [
      {
        title: "Company Formation",
        content:
          "We handle all aspects of company formation, from initial planning through post-incorporation support.",
        items: [
          "Entity selection and structure optimization.",
          "Registration and licensing procedures.",
          "Corporate governance setup.",
          "Initial compliance and reporting requirements.",
        ],
      },
      {
        title: "Foreign Company Establishment",
        content:
          "Our team specializes in helping foreign investors establish companies with full compliance with local regulations.",
        items: [
          "Foreign investment approvals and permits.",
          "Local partnership and sponsorship arrangements.",
          "Visa and work permit applications.",
          "Cross-border compliance and reporting.",
        ],
      },
      {
        title: "Post-Incorporation Support",
        content:
          "We provide ongoing support after company establishment to ensure smooth operations and continued compliance.",
        items: [
          "Ongoing compliance monitoring and reporting.",
          "Corporate governance and board support.",
          "Regulatory updates and compliance adjustments.",
          "Expansion and growth planning support.",
        ],
      },
    ],
    conclusion:
      "Law Firm ensures quick and compliant company establishment for both national and foreign investors, with comprehensive post-incorporation support.",

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
      "Law Firm provides comprehensive legal services for commercial agency relationships. We help structure, register, and manage compliant agency arrangements that maximize performance and minimize risks.",
    sections: [
      {
        title: "Agency Structure and Registration",
        content:
          "We help establish and register commercial agency relationships with proper legal structure and compliance.",
        items: [
          "Agency agreement drafting and negotiation.",
          "Registration with commercial agencies registry.",
          "Exclusivity and territory arrangements.",
          "Performance standards and monitoring mechanisms.",
        ],
      },
      {
        title: "Agency Operations",
        content:
          "Our team provides ongoing legal support for agency operations and relationship management.",
        items: [
          "Operational compliance and reporting.",
          "Performance monitoring and evaluation.",
          "Dispute prevention and resolution.",
          "Contract amendments and renewals.",
        ],
      },
      {
        title: "Agency Disputes and Compensation",
        content:
          "We handle agency disputes and compensation claims, protecting the interests of both principals and agents.",
        items: [
          "Agency termination and compensation claims.",
          "Performance disputes and resolution.",
          "Exclusivity and territory conflicts.",
          "Arbitration and litigation representation.",
        ],
      },
    ],
    conclusion:
      "Law Firm ensures well-structured commercial agency relationships that reduce risks and increase performance through comprehensive legal support.",

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
      "Law Firm provides specialized legal services to support Vision 2030 initiatives and national transformation goals. Our expertise helps organizations align their legal workstreams with Vision 2030 objectives.",
    sections: [
      {
        title: "Vision 2030 Alignment",
        content:
          "We help organizations align their legal strategies and operations with Vision 2030 objectives and national transformation goals.",
        items: [
          "Strategic alignment assessment and planning.",
          "Regulatory compliance with Vision 2030 initiatives.",
          "Investment and partnership structuring.",
          "Performance monitoring and reporting.",
        ],
      },
      {
        title: "Public-Private Partnerships",
        content:
          "Our team provides legal support for public-private partnerships and collaborative initiatives aligned with Vision 2030.",
        items: [
          "PPP structure design and implementation.",
          "Government contracting and procurement.",
          "Risk allocation and management.",
          "Performance monitoring and evaluation.",
        ],
      },
      {
        title: "Incentive Programs",
        content:
          "We help organizations navigate and benefit from Vision 2030 incentive programs and support mechanisms.",
        items: [
          "Incentive program eligibility and application.",
          "Compliance with incentive requirements.",
          "Performance tracking and reporting.",
          "Benefit optimization and maximization.",
        ],
      },
    ],
    conclusion:
      "Law Firm helps organizations align their legal workstreams with Vision 2030 targets and timelines, ensuring compliance and maximizing benefits from national transformation initiatives.",

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
      "Law Firm provides comprehensive liquidation services for companies, ensuring compliant and orderly winding up processes. Our expertise covers all aspects of liquidation with minimal disruption and clear outcomes.",
    sections: [
      {
        title: "Liquidation Planning",
        content:
          "We help companies plan and prepare for liquidation, ensuring compliance with legal requirements and stakeholder protection.",
        items: [
          "Liquidation strategy development.",
          "Stakeholder communication and coordination.",
          "Asset inventory and valuation.",
          "Creditor notification and claims management.",
        ],
      },
      {
        title: "Liquidation Process",
        content:
          "Our team manages the entire liquidation process, ensuring compliance and protecting stakeholder interests.",
        items: [
          "Liquidator appointment and coordination.",
          "Asset realization and distribution.",
          "Creditor settlement and debt resolution.",
          "Regulatory compliance and reporting.",
        ],
      },
      {
        title: "Post-Liquidation Support",
        content:
          "We provide ongoing support after liquidation completion, ensuring proper closure and documentation.",
        items: [
          "Final accounting and reporting.",
          "Regulatory confirmations and certificates.",
          "Documentation and record keeping.",
          "Stakeholder communication and closure.",
        ],
      },
    ],
    conclusion:
      "Law Firm ensures compliant and orderly company liquidation with clear outcomes, stakeholder protection, and proper regulatory compliance throughout the process.",

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
