import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";

/**
 * Search result interface representing a single searchable item
 * Used for both suggestions and full search results
 */
export interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readMoreUrl: string;
  tags?: string[];
  // Arabic versions for bilingual support
  titleAr?: string;
  excerptAr?: string;
  categoryAr?: string;
  tagsAr?: string[];
}

/**
 * Search suggestion interface for autocomplete functionality
 * Simplified version of SearchResult for quick suggestions
 */
export interface SearchSuggestion {
  id: number;
  title: string;
  category: string;
  readMoreUrl: string;
  // Arabic versions for bilingual support
  titleAr?: string;
  categoryAr?: string;
}

/**
 * Complete search state interface
 * Manages query, results, loading states, and pagination
 */
interface SearchState {
  query: string;
  suggestions: SearchSuggestion[];
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  showSuggestions: boolean;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  };
}

// Initial state for the search slice
const initialState: SearchState = {
  query: "",
  suggestions: [],
  results: [],
  isLoading: false,
  error: null,
  showSuggestions: false,
  pagination: {
    currentPage: 1,
    itemsPerPage: 5,
  },
};

/**
 * Enhanced mock data with Arabic translations
 * Supports bilingual search functionality
 * Contains services, team members, and other content types
 */
const mockData: SearchResult[] = [
  {
    id: 1,
    title: "Corporate Law & Business Services",
    titleAr: "القانون التجاري وخدمات الأعمال",
    excerpt:
      "Comprehensive corporate legal services including company formation, mergers & acquisitions, corporate restructuring, and regulatory compliance. Our experienced team ensures your business operates within legal frameworks while maximizing growth opportunities.",
    excerptAr:
      "خدمات قانونية شاملة للشركات تشمل تأسيس الشركات والاندماج والاستحواذ وإعادة هيكلة الشركات والامتثال التنظيمي. يضمن فريقنا ذو الخبرة أن يعمل عملك ضمن الأطر القانونية مع تعظيم فرص النمو.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/corporate-law",
    tags: [
      "Corporate Law",
      "Business Formation",
      "Mergers & Acquisitions",
      "Compliance",
    ],
    tagsAr: [
      "القانون التجاري",
      "تأسيس الأعمال",
      "الاندماج والاستحواذ",
      "الامتثال",
    ],
  },
  {
    id: 2,
    title: "Real Estate & Property Law",
    titleAr: "قانون العقارات والممتلكات",
    excerpt:
      "Expert legal services for all real estate matters including property transactions, development projects, leasing agreements, and dispute resolution. We help clients navigate complex property laws and protect their real estate investments.",
    excerptAr:
      "خدمات قانونية متخصصة لجميع مسائل العقارات بما في ذلك معاملات العقارات ومشاريع التطوير وعقود الإيجار وحل النزاعات. نساعد العملاء على التنقل في قوانين العقارات المعقدة وحماية استثماراتهم العقارية.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/real-estate",
    tags: ["Real Estate", "Property Transactions", "Development", "Leasing"],
    tagsAr: ["العقارات", "معاملات العقارات", "التطوير", "الإيجار"],
  },
  {
    id: 3,
    title: "Intellectual Property Protection",
    titleAr: "حماية الملكية الفكرية",
    excerpt:
      "Comprehensive IP services including trademark registration, patent applications, copyright protection, and IP litigation. Our specialists help businesses protect their innovations, brands, and creative works in domestic and international markets.",
    excerptAr:
      "خدمات شاملة للملكية الفكرية تشمل تسجيل العلامات التجارية وطلبات البراءات وحماية حقوق النشر والمنازعات المتعلقة بالملكية الفكرية. يساعد متخصصونا الشركات على حماية ابتكاراتها وعلاماتها التجارية وأعمالها الإبداعية في الأسواق المحلية والدولية.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/intellectual-property",
    tags: ["Intellectual Property", "Trademarks", "Patents", "Copyright"],
    tagsAr: ["الملكية الفكرية", "العلامات التجارية", "البراءات", "حقوق النشر"],
  },
  {
    id: 4,
    title: "International Arbitration Services",
    titleAr: "خدمات التحكيم الدولي",
    excerpt:
      "Specialized international arbitration and dispute resolution services for complex cross-border commercial disputes. Our arbitration experts provide efficient, confidential, and cost-effective resolution of international business conflicts.",
    excerptAr:
      "خدمات متخصصة للتحكيم الدولي وحل النزاعات للمنازعات التجارية المعقدة عبر الحدود. يوفر خبراء التحكيم لدينا حلاً فعالاً وسرياً ومنخفض التكلفة للنزاعات التجارية الدولية.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/arbitration",
    tags: [
      "Arbitration",
      "International Disputes",
      "Commercial Law",
      "Cross-border",
    ],
    tagsAr: ["التحكيم", "النزاعات الدولية", "القانون التجاري", "عبر الحدود"],
  },
  {
    id: 5,
    title: "Banking & Financial Services Law",
    titleAr: "قانون الخدمات المصرفية والمالية",
    excerpt:
      "Expert legal counsel for banks, financial institutions, and fintech companies. We provide regulatory compliance, transaction structuring, risk management, and dispute resolution services tailored to the financial sector.",
    excerptAr:
      "استشارات قانونية متخصصة للبنوك والمؤسسات المالية وشركات التكنولوجيا المالية. نقدم خدمات الامتثال التنظيمي وهيكلة المعاملات وإدارة المخاطر وحل النزاعات المصممة خصيصاً للقطاع المالي.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/banking-financial",
    tags: [
      "Banking Law",
      "Financial Services",
      "Regulatory Compliance",
      "Fintech",
    ],
    tagsAr: [
      "قانون البنوك",
      "الخدمات المالية",
      "الامتثال التنظيمي",
      "التكنولوجيا المالية",
    ],
  },
  {
    id: 6,
    title: "Employment & Labor Law",
    titleAr: "قانون العمل والعمال",
    excerpt:
      "Comprehensive employment law services including workplace policies, employment contracts, labor disputes, and regulatory compliance. We help employers and employees navigate complex labor laws and protect their rights.",
    excerptAr:
      "خدمات شاملة لقانون العمل تشمل سياسات مكان العمل وعقود العمل ونزاعات العمل والامتثال التنظيمي. نساعد أصحاب العمل والموظفين على التنقل في قوانين العمل المعقدة وحماية حقوقهم.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/employment-law",
    tags: [
      "Employment Law",
      "Labor Disputes",
      "Workplace Policies",
      "Contracts",
    ],
    tagsAr: ["قانون العمل", "نزاعات العمل", "سياسات مكان العمل", "العقود"],
  },
  {
    id: 7,
    title: "Tax Law & Planning",
    titleAr: "قانون الضرائب والتخطيط",
    excerpt:
      "Strategic tax planning and compliance services for individuals and businesses. Our tax experts help clients optimize their tax positions while ensuring full compliance with local and international tax regulations.",
    excerptAr:
      "خدمات التخطيط الضريبي الاستراتيجي والامتثال للأفراد والشركات. يساعد خبراء الضرائب لدينا العملاء على تحسين أوضاعهم الضريبية مع ضمان الامتثال الكامل للوائح الضريبية المحلية والدولية.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/tax-law",
    tags: ["Tax Law", "Tax Planning", "Compliance", "International Tax"],
    tagsAr: ["قانون الضرائب", "التخطيط الضريبي", "الامتثال", "الضرائب الدولية"],
  },
  {
    id: 8,
    title: "Criminal Defense & Litigation",
    titleAr: "الدفاع الجنائي والمرافعة",
    excerpt:
      "Expert criminal defense representation for individuals and businesses facing criminal charges. Our litigation team provides aggressive defense strategies and ensures clients receive fair treatment throughout the legal process.",
    excerptAr:
      "تمثيل متخصص للدفاع الجنائي للأفراد والشركات التي تواجه تهم جنائية. يوفر فريق المرافعة لدينا استراتيجيات دفاع قوية ويضمن حصول العملاء على معاملة عادلة طوال العملية القانونية.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/criminal-defense",
    tags: [
      "Criminal Defense",
      "Litigation",
      "Legal Representation",
      "Criminal Law",
    ],
    tagsAr: [
      "الدفاع الجنائي",
      "المرافعة",
      "التمثيل القانوني",
      "القانون الجنائي",
    ],
  },
  {
    id: 9,
    title: "Family Law & Divorce Services",
    titleAr: "قانون الأسرة وخدمات الطلاق",
    excerpt:
      "Compassionate family law services including divorce proceedings, child custody, alimony, and family mediation. Our family law specialists help clients navigate emotional legal matters with sensitivity and expertise.",
    excerptAr:
      "خدمات قانون الأسرة الرحيمة تشمل إجراءات الطلاق وحضانة الأطفال والنفقة والوساطة الأسرية. يساعد متخصصو قانون الأسرة لدينا العملاء على التنقل في المسائل القانونية العاطفية بحساسية وخبرة.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/family-law",
    tags: ["Family Law", "Divorce", "Child Custody", "Mediation"],
    tagsAr: ["قانون الأسرة", "الطلاق", "حضانة الأطفال", "الوساطة"],
  },
  {
    id: 10,
    title: "Environmental Law & Compliance",
    titleAr: "قانون البيئة والامتثال",
    excerpt:
      "Environmental law services for businesses and organizations including compliance, permitting, environmental impact assessments, and sustainability legal counsel. We help clients operate responsibly while meeting environmental regulations.",
    excerptAr:
      "خدمات قانون البيئة للشركات والمنظمات تشمل الامتثال والتراخيص وتقييمات الأثر البيئي والاستشارات القانونية للاستدامة. نساعد العملاء على العمل بمسؤولية مع الوفاء باللوائح البيئية.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/environmental-law",
    tags: ["Environmental Law", "Compliance", "Sustainability", "Permitting"],
    tagsAr: ["قانون البيئة", "الامتثال", "الاستدامة", "التراخيص"],
  },
  {
    id: 11,
    title: "Ahmed Al-Rashid - Senior Partner",
    titleAr: "أحمد الراشد - شريك أول",
    excerpt:
      "Ahmed Al-Rashid leads our corporate law practice with over 25 years of experience in international business law. He specializes in cross-border transactions, mergers & acquisitions, and has successfully represented Fortune 500 companies in complex legal matters.",
    excerptAr:
      "يقود أحمد الراشد ممارسة القانون التجاري لدينا مع أكثر من 25 عاماً من الخبرة في قانون الأعمال الدولية. يتخصص في المعاملات عبر الحدود والاندماج والاستحواذ ونجح في تمثيل شركات فورتشن 500 في المسائل القانونية المعقدة.",
    category: "Team",
    categoryAr: "الفريق",
    readMoreUrl: "/our-team/ahmed-al-rashid",
    tags: ["Senior Partner", "Corporate Law", "International Business", "M&A"],
    tagsAr: [
      "شريك أول",
      "القانون التجاري",
      "الأعمال الدولية",
      "الاندماج والاستحواذ",
    ],
  },
  {
    id: 12,
    title: "Sarah Johnson - Intellectual Property Specialist",
    titleAr: "سارة جونسون - متخصصة الملكية الفكرية",
    excerpt:
      "Sarah Johnson heads our intellectual property practice with expertise in patent law, trademark registration, and IP litigation. She has helped numerous tech startups and established companies protect their innovations and brands globally.",
    excerptAr:
      "ترأس سارة جونسون ممارسة الملكية الفكرية لدينا مع خبرة في قانون البراءات وتسجيل العلامات التجارية والمنازعات المتعلقة بالملكية الفكرية. ساعدت العديد من شركات التكنولوجيا الناشئة والشركات الراسخة على حماية ابتكاراتها وعلاماتها التجارية عالمياً.",
    category: "Team",
    categoryAr: "الفريق",
    readMoreUrl: "/our-team/sarah-johnson",
    tags: ["IP Specialist", "Patent Law", "Trademarks", "Tech Law"],
    tagsAr: [
      "متخصصة الملكية الفكرية",
      "قانون البراءات",
      "العلامات التجارية",
      "قانون التكنولوجيا",
    ],
  },
  {
    id: 13,
    title: "Mohammed Hassan - Real Estate Expert",
    titleAr: "محمد حسن - خبير العقارات",
    excerpt:
      "Mohammed Hassan specializes in real estate law with extensive experience in property development, commercial leasing, and real estate litigation. He has successfully handled multi-million dollar property transactions and complex development projects.",
    excerptAr:
      "يتخصص محمد حسن في قانون العقارات مع خبرة واسعة في تطوير العقارات والإيجار التجاري والمنازعات العقارية. نجح في التعامل مع معاملات العقارات بملايين الدولارات ومشاريع التطوير المعقدة.",
    category: "Team",
    categoryAr: "الفريق",
    readMoreUrl: "/our-team/mohammed-hassan",
    tags: [
      "Real Estate Expert",
      "Property Development",
      "Commercial Leasing",
      "Litigation",
    ],
    tagsAr: ["خبير العقارات", "تطوير العقارات", "الإيجار التجاري", "المرافعة"],
  },
  {
    id: 14,
    title: "Emily Chen - International Arbitration",
    titleAr: "إيميلي تشين - التحكيم الدولي",
    excerpt:
      "Emily Chen leads our international arbitration practice with expertise in resolving complex cross-border commercial disputes. She has served as arbitrator and counsel in numerous international arbitration proceedings across multiple jurisdictions.",
    excerptAr:
      "تقود إيميلي تشين ممارسة التحكيم الدولي لدينا مع خبرة في حل النزاعات التجارية المعقدة عبر الحدود. عملت كمحكم ومستشار في العديد من إجراءات التحكيم الدولية عبر ولايات قضائية متعددة.",
    category: "Team",
    categoryAr: "الفريق",
    readMoreUrl: "/our-team/emily-chen",
    tags: [
      "International Arbitration",
      "Cross-border Disputes",
      "Commercial Law",
      "Arbitrator",
    ],
    tagsAr: [
      "التحكيم الدولي",
      "النزاعات عبر الحدود",
      "القانون التجاري",
      "محكم",
    ],
  },
  {
    id: 15,
    title: "David Rodriguez - Banking & Finance",
    titleAr: "ديفيد رودريغيز - الخدمات المصرفية والمالية",
    excerpt:
      "David Rodriguez specializes in banking and financial services law with deep expertise in regulatory compliance, fintech regulations, and financial transactions. He advises major banks and fintech companies on complex regulatory matters.",
    excerptAr:
      "يتخصص ديفيد رودريغيز في قانون الخدمات المصرفية والمالية مع خبرة عميقة في الامتثال التنظيمي ولوائح التكنولوجيا المالية والمعاملات المالية. ينصح البنوك الكبرى وشركات التكنولوجيا المالية في المسائل التنظيمية المعقدة.",
    category: "Team",
    categoryAr: "الفريق",
    readMoreUrl: "/our-team/david-rodriguez",
    tags: [
      "Banking Law",
      "Financial Services",
      "Regulatory Compliance",
      "Fintech",
    ],
    tagsAr: [
      "قانون البنوك",
      "الخدمات المالية",
      "الامتثال التنظيمي",
      "التكنولوجيا المالية",
    ],
  },
  {
    id: 16,
    title: "Legal Consultation Process",
    titleAr: "عملية الاستشارة القانونية",
    excerpt:
      "Our legal consultation process begins with a comprehensive assessment of your legal needs. We provide personalized legal strategies, clear communication throughout the process, and dedicated support to achieve the best possible outcomes for your case.",
    excerptAr:
      "تبدأ عملية الاستشارة القانونية لدينا بتقييم شامل لاحتياجاتك القانونية. نقدم استراتيجيات قانونية مخصصة وتواصل واضح طوال العملية ودعم مخصص لتحقيق أفضل النتائج الممكنة لقضيتك.",
    category: "Services",
    categoryAr: "الخدمات",
    readMoreUrl: "/services/consultation",
    tags: ["Legal Consultation", "Legal Strategy", "Client Support", "Process"],
    tagsAr: [
      "الاستشارة القانونية",
      "الاستراتيجية القانونية",
      "دعم العملاء",
      "العملية",
    ],
  },
  {
    id: 17,
    title: "Client Success Stories",
    titleAr: "قصص نجاح العملاء",
    excerpt:
      "Discover how we've helped clients achieve successful outcomes in complex legal matters. Our track record includes landmark cases in corporate law, successful IP protection strategies, and favorable resolutions in international disputes.",
    excerptAr:
      "اكتشف كيف ساعدنا العملاء على تحقيق نتائج ناجحة في المسائل القانونية المعقدة. يتضمن سجلنا حالات بارزة في القانون التجاري واستراتيجيات حماية الملكية الفكرية الناجحة والحلول المواتية في النزاعات الدولية.",
    category: "About",
    categoryAr: "حولنا",
    readMoreUrl: "/about-us/success-stories",
    tags: [
      "Success Stories",
      "Case Studies",
      "Client Outcomes",
      "Track Record",
    ],
    tagsAr: ["قصص النجاح", "دراسات الحالة", "نتائج العملاء", "سجل الأداء"],
  },
  {
    id: 18,
    title: "Legal Blog - Latest Insights",
    titleAr: "المدونة القانونية - أحدث الرؤى",
    excerpt:
      "Stay informed with our latest legal insights, industry updates, and expert analysis. Our blog covers topics ranging from corporate law developments to international legal trends, providing valuable information for businesses and individuals.",
    excerptAr:
      "ابق على اطلاع بأحدث رؤانا القانونية وتحديثات الصناعة والتحليل الخبير. تغطي مدونتنا مواضيع تتراوح من تطورات القانون التجاري إلى الاتجاهات القانونية الدولية، مما يوفر معلومات قيمة للشركات والأفراد.",
    category: "Blog",
    categoryAr: "المدونة",
    readMoreUrl: "/blogs",
    tags: [
      "Legal Blog",
      "Industry Insights",
      "Legal Updates",
      "Expert Analysis",
    ],
    tagsAr: [
      "المدونة القانونية",
      "رؤى الصناعة",
      "التحديثات القانونية",
      "التحليل الخبير",
    ],
  },
  {
    id: 19,
    title: "Contact Our Legal Team",
    titleAr: "اتصل بفريقنا القانوني",
    excerpt:
      "Ready to discuss your legal needs? Contact our experienced legal team for a confidential consultation. We offer flexible appointment scheduling and are committed to providing responsive, professional legal services tailored to your specific requirements.",
    excerptAr:
      "هل أنت مستعد لمناقشة احتياجاتك القانونية؟ اتصل بفريقنا القانوني ذو الخبرة للحصول على استشارة سرية. نقدم جدولة مواعيد مرنة ونلتزم بتقديم خدمات قانونية استجابة ومهنية مصممة خصيصاً لمتطلباتك.",
    category: "Contact",
    categoryAr: "اتصل بنا",
    readMoreUrl: "/contact-us",
    tags: [
      "Contact",
      "Legal Consultation",
      "Appointment",
      "Professional Services",
    ],
    tagsAr: ["اتصل بنا", "الاستشارة القانونية", "الموعد", "الخدمات المهنية"],
  },
  {
    id: 20,
    title: "Office Locations & Hours",
    titleAr: "مواقع المكاتب وساعات العمل",
    excerpt:
      "Visit our conveniently located offices in major business districts. We offer flexible appointment hours and are available for urgent legal matters. Our modern facilities provide a professional environment for confidential legal consultations.",
    excerptAr:
      "زر مكاتبنا المتمركزة بسهولة في المناطق التجارية الرئيسية. نقدم ساعات مواعيد مرنة ومتاحون للمسائل القانونية العاجلة. توفر مرافقنا الحديثة بيئة مهنية للاستشارات القانونية السرية.",
    category: "Contact",
    categoryAr: "اتصل بنا",
    readMoreUrl: "/contact-us/locations",
    tags: ["Office Locations", "Business Hours", "Appointments", "Facilities"],
    tagsAr: ["مواقع المكاتب", "ساعات العمل", "المواعيد", "المرافق"],
  },
];

/**
 * Helper function to detect if text contains Arabic characters
 * @param text - Text to check for Arabic characters
 * @returns boolean indicating if text contains Arabic
 */
const containsArabic = (text: string): boolean => {
  const arabicRegex =
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
};

/**
 * Helper function to normalize Arabic text for better search matching
 * @param text - Arabic text to normalize
 * @returns normalized Arabic text
 */
const normalizeArabicText = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/[\u064B-\u065F]/g, "") // Remove Arabic diacritics
    .replace(/[أإآ]/g, "ا") // Normalize alef variations
    .replace(/[ىي]/g, "ي") // Normalize yaa variations
    .replace(/[ةه]/g, "ه") // Normalize taa marbouta and haa
    .replace(/[ؤئ]/g, "و") // Normalize waw and hamza variations
    .toLowerCase();
};

/**
 * Enhanced search function that supports both English and Arabic
 * Works regardless of the current website language setting
 * @param item - Search result item to check
 * @param searchTerm - Search term to match against
 * @returns boolean indicating if item matches search term
 */
const matchesSearchTerm = (item: SearchResult, searchTerm: string): boolean => {
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const isArabicSearch = containsArabic(searchTerm);

  // If searching in Arabic, search in Arabic fields
  if (isArabicSearch) {
    const normalizedArabicSearch = normalizeArabicText(searchTerm);

    return (
      (item.titleAr &&
        normalizeArabicText(item.titleAr).includes(normalizedArabicSearch)) ||
      (item.excerptAr &&
        normalizeArabicText(item.excerptAr).includes(normalizedArabicSearch)) ||
      (item.categoryAr &&
        normalizeArabicText(item.categoryAr).includes(
          normalizedArabicSearch
        )) ||
      (item.tagsAr &&
        item.tagsAr.some((tag) =>
          normalizeArabicText(tag).includes(normalizedArabicSearch)
        )) ||
      false
    );
  }

  // For English search, search in both English and Arabic fields
  // This allows finding Arabic content even when searching in English
  return (
    // Search in English fields
    item.title.toLowerCase().includes(normalizedSearchTerm) ||
    item.excerpt.toLowerCase().includes(normalizedSearchTerm) ||
    item.tags?.some((tag) =>
      tag.toLowerCase().includes(normalizedSearchTerm)
    ) ||
    item.category.toLowerCase().includes(normalizedSearchTerm) ||
    // Also search in Arabic fields for English terms (for better discoverability)
    (item.titleAr &&
      item.titleAr.toLowerCase().includes(normalizedSearchTerm)) ||
    (item.excerptAr &&
      item.excerptAr.toLowerCase().includes(normalizedSearchTerm)) ||
    (item.categoryAr &&
      item.categoryAr.toLowerCase().includes(normalizedSearchTerm)) ||
    (item.tagsAr &&
      item.tagsAr.some((tag) =>
        tag.toLowerCase().includes(normalizedSearchTerm)
      )) ||
    false
  );
};

/**
 * Async thunk for fetching search suggestions
 * Simulates API call with delay and filters data based on search query
 * Returns simplified suggestion objects for autocomplete functionality
 * Now supports both English and Arabic search regardless of website language
 */
export const fetchSearchSuggestions = createAsyncThunk(
  "search/fetchSuggestions",
  async (query: string) => {
    // Simulate API delay for realistic user experience
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!query.trim()) return [];

    // Filter data based on enhanced search logic
    const filtered = mockData.filter((item) => matchesSearchTerm(item, query));

    // Return only first 5 suggestions to keep UI responsive
    return filtered.slice(0, 5).map((item) => ({
      id: item.id,
      title: item.title,
      titleAr: item.titleAr,
      category: item.category,
      categoryAr: item.categoryAr,
      readMoreUrl: item.readMoreUrl,
    }));
  }
);

/**
 * Async thunk for performing full search
 * Simulates API call with delay and returns complete search results
 * Used when user submits search or clicks on suggestion
 * Now supports both English and Arabic search regardless of website language
 */
export const performSearch = createAsyncThunk(
  "search/performSearch",
  async (query: string) => {
    // Simulate API delay for realistic user experience
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!query.trim()) return [];

    // Filter data based on enhanced search logic
    const filtered = mockData.filter((item) => matchesSearchTerm(item, query));

    return filtered;
  }
);

/**
 * Search slice with reducers and async thunk handling
 * Manages all search-related state including suggestions, results, and pagination
 */
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Update search query and clear suggestions if query is empty
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      if (!action.payload.trim()) {
        state.suggestions = [];
        state.showSuggestions = false;
      }
    },
    // Control visibility of suggestions dropdown
    setShowSuggestions: (state, action: PayloadAction<boolean>) => {
      state.showSuggestions = action.payload;
    },
    // Reset all search state to initial values
    clearSearch: (state) => {
      state.query = "";
      state.suggestions = [];
      state.results = [];
      state.showSuggestions = false;
      state.error = null;
      state.pagination.currentPage = 1;
    },
    // Update current page for pagination
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
    // Update items per page and reset to first page
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.pagination.itemsPerPage = action.payload;
      state.pagination.currentPage = 1; // Reset to first page when changing items per page
    },
    // Reset pagination to first page
    resetPagination: (state) => {
      state.pagination.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle search suggestions async thunk states
      .addCase(fetchSearchSuggestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSearchSuggestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suggestions = action.payload;
        state.showSuggestions = action.payload.length > 0;
      })
      .addCase(fetchSearchSuggestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch suggestions";
        state.suggestions = [];
      })
      // Handle full search async thunk states
      .addCase(performSearch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(performSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
        state.showSuggestions = false;
        state.pagination.currentPage = 1; // Reset to first page when new results are loaded
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to perform search";
        state.results = [];
      });
  },
});

// Export action creators
export const {
  setQuery,
  setShowSuggestions,
  clearSearch,
  setCurrentPage,
  setItemsPerPage,
  resetPagination,
} = searchSlice.actions;

/**
 * Selectors for accessing search state
 * These provide computed values and help with performance optimization
 */

// Basic pagination selector
export const selectPagination = (state: { search: SearchState }) =>
  state.search.pagination;

// Current page selector
export const selectCurrentPage = (state: { search: SearchState }) =>
  state.search.pagination.currentPage;

// Items per page selector
export const selectItemsPerPage = (state: { search: SearchState }) =>
  state.search.pagination.itemsPerPage;

// Calculate total pages based on results and items per page
export const selectTotalPages = createSelector(
  [
    (state: { search: SearchState }) => state.search.results,
    (state: { search: SearchState }) => state.search.pagination.itemsPerPage,
  ],
  (results, itemsPerPage) => Math.ceil(results.length / itemsPerPage)
);

// Get results for current page only
export const selectCurrentPageResults = createSelector(
  [
    (state: { search: SearchState }) => state.search.results,
    (state: { search: SearchState }) => state.search.pagination.currentPage,
    (state: { search: SearchState }) => state.search.pagination.itemsPerPage,
  ],
  (results, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return results.slice(startIndex, endIndex);
  }
);

// Comprehensive pagination information for UI components
export const selectPaginationInfo = createSelector(
  [
    (state: { search: SearchState }) => state.search.results,
    (state: { search: SearchState }) => state.search.pagination.currentPage,
    (state: { search: SearchState }) => state.search.pagination.itemsPerPage,
  ],
  (results, currentPage, itemsPerPage) => {
    const totalPages = Math.ceil(results.length / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, results.length);

    return {
      currentPage,
      itemsPerPage,
      totalPages,
      totalResults: results.length,
      startItem,
      endItem,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  }
);

export default searchSlice.reducer;
