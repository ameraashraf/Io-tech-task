export interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readMoreUrl: string;
  tags?: string[];
}

export const mockSearchResults: SearchResult[] = [
  {
    id: 1,
    title: "Law Firm is one of the leading legal offices",
    excerpt:
      "Our law firm specializes in corporate law, providing comprehensive legal services to businesses of all sizes. We have a team of experienced attorneys dedicated to protecting your interests.",
    category: "Services",
    readMoreUrl: "/services/corporate-law",
    tags: ["Corporate Law", "Business", "Legal Services"],
  },
  {
    id: 2,
    title: "Law Firm is one of the leading legal offices",
    excerpt:
      "With over 20 years of experience, our team of legal professionals has successfully handled thousands of cases across various practice areas including civil litigation, family law, and criminal defense.",
    category: "Team",
    readMoreUrl: "/about-us/team",
    tags: ["Experience", "Legal Professionals", "Practice Areas"],
  },
  {
    id: 3,
    title: "Law Firm is one of the leading legal offices",
    excerpt:
      "We provide expert legal consultation and representation in real estate law, helping clients navigate complex property transactions and disputes with confidence and professionalism.",
    category: "Services",
    readMoreUrl: "/services/real-estate",
    tags: ["Real Estate", "Property", "Legal Consultation"],
  },
  {
    id: 4,
    title: "Law Firm is one of the leading legal offices",
    excerpt:
      "Our intellectual property practice helps businesses protect their innovations, trademarks, and creative works through strategic legal counsel and enforcement actions.",
    category: "Services",
    readMoreUrl: "/services/intellectual-property",
    tags: ["Intellectual Property", "Trademarks", "Innovation"],
  },
  {
    id: 5,
    title: "Law Firm is one of the leading legal offices",
    excerpt:
      "The firm's founding partners bring decades of combined experience in international law, offering specialized services for cross-border transactions and disputes.",
    category: "Team",
    readMoreUrl: "/about-us/leadership",
    tags: ["International Law", "Cross-border", "Leadership"],
  },
];

export const categories = [
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
];
