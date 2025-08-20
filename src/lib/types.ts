export interface Project {
  id: string;
  _id?: string;
  title: string;
  slug: string;
  tagline: string;
  category: 'Web' | 'UI/UX' | 'APIs' | 'Experiments';
  year: number;
  metrics: {
    lcp?: string;
    conversion?: string;
    a11y?: number;
    performance?: number;
  };
  stack: string[];
  gallery: string[];
  links: {
    live?: string;
    repo?: string;
  };
  caseStudy: {
    overview: string;
    problem: string;
    process: string[];
    outcome: string;
    timeline: TimelineItem[];
  };
  position: {
    x: number;
    y: number;
    orbit: number;
  };
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'decision' | 'launch';
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  quote: string;
  projectId?: string;
  tags: string[];
  avatar?: string;
}

export interface Skill {
  id: string;
  _id?: string;
  name: string;
  category: string;
  proficiency: number;
  proof: {
    repos?: string[];
    certificates?: string[];
    projects?: string[];
  };
  position: {
    x: number;
    y: number;
  };
}

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  role?: string;
  type: 'Landing Page' | 'Web App' | 'Redesign' | 'UI Audit' | 'Performance Optimization' | 'Custom';
  goals: string;
  scope: string[];
  budget: {
    min: number;
    max: number;
  };
  timeline: string;
  message?: string;
  createdAt: Date;
}

export interface ThemeConfig {
  mode: 'light' | 'dark';
  accentHue: number;
  reducedMotion: boolean;
  accessibleMode: boolean;
  language: 'en' | 'hi';
}