export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductModel {
  name: string;
  tagline: string;
  specs: SpecRow[];
}

export interface ComparisonColumn {
  feature: string;
  values: string[];
}

export interface ProductCardData {
  name: string;
  slug: string;
  description: string;
  keySpec: string;
  href: string;
  imageAlt: string;
  imageSrc?: string;
}

export interface DecisionGuideItem {
  title: string;
  description: string;
  recommendation: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  organization: string;
  context?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  outcome: string;
  savings?: string;
  testimonialId?: string;
}

export interface USPItem {
  icon: string;
  title: string;
  description: string;
}

export interface VideoItem {
  title: string;
  description: string;
  src?: string;
  productSlug?: string;
}

export interface Industry {
  name: string;
  description: string;
  slug?: string;
}

export interface CategoryContent {
  slug: string;
  headline: string;
  intro: string;
  keyMessage: string;
  decisionGuide?: DecisionGuideItem[];
  comparisonTable?: ComparisonColumn;
  comparisonHeaders?: string[];
  products: ProductCardData[];
  faqs: FAQItem[];
  relatedLinks: RelatedLink[];
  seo: PageSEO;
  inlineCta?: string;
}

export interface ProductDetailContent {
  slug: string;
  category: "sliding" | "folding" | "modular" | "clean-room";
  categoryLabel: string;
  categoryHref: string;
  series: string;
  headline: string;
  keyMessage: string;
  intro: string;
  models: ProductModel[];
  modelComparison?: ComparisonColumn;
  modelComparisonHeaders?: string[];
  options: string[];
  applications?: string[];
  testimonialId?: string;
  faqs: FAQItem[];
  relatedProducts: RelatedLink[];
  seo: PageSEO;
  quoteModelParam: string;
  upgradeNote?: RelatedLink;
  downgradeNote?: RelatedLink;
  videoNote?: string;
}

export interface TrustPageContent {
  slug: string;
  headline: string;
  intro: string;
  usps?: USPItem[];
  caseStudies?: CaseStudy[];
  testimonialIds?: string[];
  seo: PageSEO;
  relatedLinks: RelatedLink[];
}

export interface ResourcePageContent {
  slug: string;
  headline: string;
  intro: string;
  sections: { title: string; content: string; items?: string[] }[];
  faqs?: FAQItem[];
  videos?: VideoItem[];
  seo: PageSEO;
  relatedLinks: RelatedLink[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message: string;
  website?: string;
}
