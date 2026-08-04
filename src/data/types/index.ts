export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface MegaMenuSection {
  exploreText?: string;
  viewAllText: string;
  viewAllLink: string;
}

export interface NavbarData {
  logo: string;
  navLinks: NavLink[];
  megaMenu: {
    services: MegaMenuSection;
    solutions: MegaMenuSection;
    industries: MegaMenuSection;
  };
  actions: {
    getQuote: string;
    getQuoteLink: string;
  };
  mobileMenu: {
    contact: string;
    contactLink: string;
  };
}

export interface FooterData {
  brand: {
    name: string;
    description: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    github: string;
    youtube: string;
  };
  columns: {
    quickLinks: {
      title: string;
      links: NavLink[];
    };
    services: {
      title: string;
      links: NavLink[];
      viewAll: {
        label: string;
        href: string;
      };
    };
    company: {
      title: string;
      links: NavLink[];
    };
  };
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  bottom: {
    copyright: string;
    links: NavLink[];
  };
}

export interface HomeData {
  stats: { value: string; label: string }[];
  companyIntro: {
    image: string;
    imageAlt: string;
    subtitle: string;
    title: string;
    paragraphs: string[];
    bulletPoints: string[];
    cta: { text: string; link: string };
  };
  servicesPreview: { subtitle: string; title: string; ctaText: string };
  advantages: { subtitle: string; title: string; items: { title: string; desc: string }[] };
  process: { title: string; steps: { step: string; name: string; desc: string }[] };
  technologies: { title: string; categories: { label: string; techs: string[] }[] };
  featuredWork: {
    title: string;
    subtitle: string;
    topShowcase: { image: string; imageAlt: string; tag: string; title: string; desc: string; ctaText: string; link: string };
    bottomShowcases: { image: string; imageAlt: string; tag: string; title: string; ctaText: string; link: string }[];
  };
  industries: { image: string; imageAlt: string; title: string; description: string; items: string[]; link: string };
  insightsPreview: { subtitle: string; title: string; ctaText: string; link: string; readArticleText: string };
  testimonials: { subtitle: string; title: string; items: { text: string; author: string }[] };
  ctaBanner: {
    title: string;
    description: string;
    primaryBtn: { text: string; link: string };
    secondaryBtn: { text: string; link: string };
  };
}

export interface AboutData {
  hero: {
    image: string;
    imageAlt: string;
    subtitle: string;
    title: string;
    description: string;
    primaryBtn: { text: string; link: string };
    secondaryBtn: { text: string; link: string };
  };
  story: {
    title: string;
    paragraphs: string[];
    quote: string;
    image: string;
    imageAlt: string;
  };
  missionVision: {
    mission: { subtitle: string; text: string };
    vision: { subtitle: string; text: string };
  };
  values: {
    title: string;
    description: string;
    items: { title: string; text: string }[];
  };
  timeline: {
    title: string;
    nodes: { year: string; title: string; desc: string }[];
  };
  operations: {
    title: string;
    rows: { num: string; title: string; desc: string; img: string }[];
  };
  culture: {
    image: string;
    imageAlt: string;
    title: string;
    points: string[];
    btn: { text: string; link: string };
  };
  cta: {
    title: string;
    btn: { text: string; link: string };
  };
}

export interface ServicesListData {
  hero: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    btn: { text: string; link: string };
  };
  intro: {
    title: string;
    description: string;
  };
  labels: {
    coreService: string;
    keyCapabilities: string;
    explorePrefix: string;
    specializedTitle: string;
    viewService: string;
  };
  faq: {
    title: string;
    description: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    btn: { text: string; link: string };
  };
}

export interface ServiceDetailData {
  hero: {
    subtitle: string;
    btnPrimary: { text: string; link: string };
    btnSecondary: { text: string; link: string };
  };
  overview: {
    title: string;
  };
  challenges: {
    subtitle: string;
    title: string;
  };
  solution: {
    image: string;
    imageAlt: string;
    title: string;
    descriptionPrefix: string;
    descriptionSuffix: string;
  };
  process: {
    title: string;
  };
  technologies: {
    title: string;
    descriptionPrefix: string;
    descriptionSuffix: string;
  };
  benefits: {
    title: string;
  };
  industries: {
    title: string;
  };
  faq: {
    title: string;
  };
  cta: {
    titlePrefix: string;
    titleSuffix: string;
    btn: { text: string; link: string };
  };
}

export interface IndustriesListData {
  hero: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    btn: { text: string; link: string };
  };
  labels: {
    keySolutions: string;
    explorePrefix: string;
    moreSectorsTitle: string;
    viewDetails: string;
  };
  cta: {
    title: string;
    description: string;
    btn: { text: string; link: string };
  };
}

export interface IndustryDetailData {
  hero: {
    subtitle: string;
    btnPrefix: string;
    btnSuffix: string;
    btnLink: string;
  };
  overview: {
    title: string;
  };
  challenges: {
    title: string;
  };
  solutions: {
    title: string;
  };
  technologies: {
    title: string;
  };
  faq: {
    title: string;
  };
  cta: {
    title: string;
    btn: { text: string; link: string };
  };
}

export interface ContactData {
  hero: { title: string; description: string };
  info: {
    title: string;
    paragraphs: string[];
    contactCards: { label: string; value: string; href?: string; subValue?: string }[];
    followLabel: string;
  };
  form: {
    fields: {
      fullName: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      service: { label: string; placeholder: string; options: { value: string; label: string }[] };
      budget: { label: string; placeholder: string; options: { value: string; label: string }[] };
      details: { label: string; placeholder: string };
    };
    submitBtn: string;
    privacyNote: string;
  };
  whyContact: { title: string; desc: string }[];
  faq: { title: string; items: { q: string; a: string }[] };
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  badge?: string;
}

export interface PortfolioData {
  hero: {
    title: string;
    breadcrumb: string;
    backgroundImage: string;
  };
  categories: string[];
  items: PortfolioItem[];
  cta: {
    title: string;
    subtitle: string;
    btnText: string;
    btnLink: string;
  };
}

export interface InsightsData {
  hero: { title: string; description: string };
  categories: string[];
  readArticleText: string;
  loadMoreText: string;
  newsletter: { title: string; description: string; placeholder: string; submitText: string };
}

export interface CareersData {
  hero: { image: string; imageAlt: string; subtitle: string; title: string; description: string };
  whyJoin: { title: string; items: { icon: string; title: string; desc: string }[] };
  perks: { title: string; items: { icon: string; title: string; desc: string }[] };
  culture: { image: string; imageAlt: string; title: string; description: string };
  hiring: { title: string; steps: { step: string; title: string; desc: string }[] };
  openPositions: {
    title: string; description: string;
    callout: { title: string; description: string; email: string; linkText: string };
  };
}

export interface ProcessData {
  hero: { image: string; imageAlt: string; subtitle: string; title: string; description: string };
  philosophy: { title: string; paragraphs: string[] };
  steps: { title: string; desc: string; deliverables: string[]; img: string }[];
  deliverablesLabel: string;
  toolkit: { title: string; tools: string[] };
  stats: { value: string; label: string }[];
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; btn: { text: string; link: string } };
}

export interface SolutionsData {
  hero: { image: string; imageAlt: string; title: string; description: string; btn: { text: string; link: string } };
  intro: { title: string; description: string };
  labels: { integratedSolution: string; exploreSolution: string; moreSolutionsTitle: string };
  cta: { title: string; btn: { text: string; link: string } };
}

export interface TechCategory {
  name: string;
  desc: string;
  techs: { name: string; icon: string; desc: string; tag: string }[];
}

export interface TechnologiesData {
  hero: { image: string; imageAlt: string; subtitle: string; title: string };
  intro: { title: string; description: string };
  categories: TechCategory[];
  architecturePatterns: {
    title: string; description: string;
    items: { icon: string; title: string; desc: string }[];
  };
  cta: { title: string; description: string; btn: { text: string; link: string } };
}

export interface ThankYouData {
  title: string;
  description: string;
  btn: { text: string; link: string };
}

export interface LegalSection {
  heading: string;
  content?: string;
  listItems?: { strong: string; text: string }[];
}

export interface LegalPageData {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface SolutionDetailData {
  hero: {
    subtitle: string;
    btn: { text: string; link: string };
  };
  overview: {
    title: string;
  };
  problems: {
    title: string;
  };
  architecture: {
    title: string;
  };
  benefits: {
    title: string;
  };
  technologies: {
    title: string;
  };
  faq: {
    title: string;
  };
  cta: {
    title: string;
    btn: { text: string; link: string };
  };
}

export interface NotFoundData {
  title: string;
  subtitle: string;
  description: string;
  btn: { text: string; link: string };
}

export interface InsightDetailData {
  backText: string;
  writtenBy: string;
  shareArticle: string;
  banner: {
    title: string;
    description: string;
    btn: { text: string; link: string };
  };
  relatedTitle: string;
  cta: {
    title: string;
    btn: { text: string; link: string };
  };
}



