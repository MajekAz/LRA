
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  result: string;
  image: string;
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}
