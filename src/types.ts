export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  features: string[];
  imageSrc: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'drilling' | 'solar' | 'tanks' | 'maintenance' | 'comprehensive';
  location: string;
  imageSrc: string;
  description: string;
  specs: string[];
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  propertyType: string;
  servicesNeeded: string[];
  message: string;
  urgency: string;
}
