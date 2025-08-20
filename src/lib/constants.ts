// Application constants
export const APP_CONFIG = {
  name: 'SkillVerse',
  description: 'Interactive Developer Portfolio',
  version: '1.0.0',
  author: 'Your Name',
  url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
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
      ? [process.env.NEXTAUTH_URL!] 
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