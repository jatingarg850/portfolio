// Application constants
export const APP_CONFIG = {
  name: 'SkillVerse',
  description: 'Interactive Developer Portfolio',
  version: '1.0.0',
  author: 'Your Name',
  url: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000',
} as const;

// Database constants
export const DB_CONFIG = {
  maxConnections: 10,
  bufferCommands: false,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as const;

// Authentication constants
export const AUTH_CONFIG = {
  sessionMaxAge: 24 * 60 * 60, // 24 hours
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
} as const;

// API constants
export const API_CONFIG = {
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? true // Allow same origin in production
      : ['http://localhost:3000'],
    credentials: true,
  },
} as const;

// UI constants
export const UI_CONFIG = {
  animations: {
    duration: 0.6,
    ease: 'easeInOut',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Default skills data (fallback when API is unavailable)
export const DEFAULT_SKILLS = [
  // Frontend
  { id: '1', _id: '1', name: 'React', category: 'Frontend', proficiency: 95, proof: { repos: [], projects: ['5+ projects'] }, position: { x: 0, y: 0 } },
  { id: '2', _id: '2', name: 'Next.js', category: 'Frontend', proficiency: 92, proof: { repos: [], projects: ['3+ projects'] }, position: { x: 0, y: 0 } },
  { id: '3', _id: '3', name: 'TypeScript', category: 'Frontend', proficiency: 88, proof: { repos: [], projects: ['4+ projects'] }, position: { x: 0, y: 0 } },
  { id: '4', _id: '4', name: 'Vue.js', category: 'Frontend', proficiency: 80, proof: { repos: [], projects: ['2+ projects'] }, position: { x: 0, y: 0 } },
  { id: '5', _id: '5', name: 'Tailwind CSS', category: 'Frontend', proficiency: 90, proof: { repos: [], projects: ['6+ projects'] }, position: { x: 0, y: 0 } },
  
  // Backend
  { id: '6', _id: '6', name: 'Node.js', category: 'Backend', proficiency: 90, proof: { repos: [], projects: ['4+ projects'] }, position: { x: 0, y: 0 } },
  { id: '7', _id: '7', name: 'Python', category: 'Backend', proficiency: 85, proof: { repos: [], projects: ['3+ projects'] }, position: { x: 0, y: 0 } },
  { id: '8', _id: '8', name: 'Express.js', category: 'Backend', proficiency: 88, proof: { repos: [], projects: ['4+ projects'] }, position: { x: 0, y: 0 } },
  { id: '9', _id: '9', name: 'MongoDB', category: 'Backend', proficiency: 85, proof: { repos: [], projects: ['5+ projects'] }, position: { x: 0, y: 0 } },
  { id: '10', _id: '10', name: 'PostgreSQL', category: 'Backend', proficiency: 80, proof: { repos: [], projects: ['2+ projects'] }, position: { x: 0, y: 0 } },
  
  // Design
  { id: '11', _id: '11', name: 'Figma', category: 'Design', proficiency: 85, proof: { repos: [], projects: ['10+ designs'] }, position: { x: 0, y: 0 } },
  { id: '12', _id: '12', name: 'Adobe XD', category: 'Design', proficiency: 75, proof: { repos: [], projects: ['5+ designs'] }, position: { x: 0, y: 0 } },
  { id: '13', _id: '13', name: 'UI/UX Design', category: 'Design', proficiency: 88, proof: { repos: [], projects: ['8+ projects'] }, position: { x: 0, y: 0 } },
  
  // Tools
  { id: '14', _id: '14', name: 'Git', category: 'Tools', proficiency: 92, proof: { repos: [], projects: ['All projects'] }, position: { x: 0, y: 0 } },
  { id: '15', _id: '15', name: 'Docker', category: 'Tools', proficiency: 80, proof: { repos: [], projects: ['3+ projects'] }, position: { x: 0, y: 0 } },
  { id: '16', _id: '16', name: 'AWS', category: 'Tools', proficiency: 75, proof: { repos: [], projects: ['2+ projects'] }, position: { x: 0, y: 0 } },
  { id: '17', _id: '17', name: 'Vercel', category: 'Tools', proficiency: 90, proof: { repos: [], projects: ['5+ deployments'] }, position: { x: 0, y: 0 } },
];