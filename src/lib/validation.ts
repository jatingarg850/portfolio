import { z } from 'zod';

// Common validation schemas
export const emailSchema = z.string().email('Please enter a valid email address');
export const passwordSchema = z.string().min(8, 'Password must be at least 8 characters');
export const nameSchema = z.string().min(2, 'Name must be at least 2 characters');
export const urlSchema = z.string().url('Please enter a valid URL');

// User schemas
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Contact form schema
export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: z.string().optional(),
  role: z.string().optional(),
  type: z.enum(['Landing Page', 'Web App', 'Redesign', 'UI Audit', 'Performance Optimization', 'Custom']),
  goals: z.string().min(10, 'Please provide more details about your goals'),
  scope: z.array(z.string()).min(1, 'Please select at least one scope item'),
  budget: z.object({
    min: z.number().min(0),
    max: z.number().min(0),
  }).refine((data) => data.max >= data.min, {
    message: 'Maximum budget must be greater than or equal to minimum budget',
  }),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().optional(),
});

// Project schema
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  tagline: z.string().min(1, 'Tagline is required'),
  category: z.enum(['Web', 'UI/UX', 'APIs', 'Experiments']),
  year: z.number().min(2020).max(new Date().getFullYear()),
  metrics: z.object({
    lcp: z.string().optional(),
    conversion: z.string().optional(),
    a11y: z.number().min(0).max(100).optional(),
    performance: z.number().min(0).max(100).optional(),
  }),
  stack: z.array(z.string()).min(1, 'Please add at least one technology'),
  gallery: z.array(z.string().url()).min(1, 'Please add at least one image'),
  links: z.object({
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
  caseStudy: z.object({
    overview: z.string().min(1, 'Overview is required'),
    problem: z.string().min(1, 'Problem description is required'),
    process: z.array(z.string()).min(1, 'Please add at least one process step'),
    outcome: z.string().min(1, 'Outcome description is required'),
  }),
});

// Skill schema
export const skillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  category: z.string().min(1, 'Category is required'),
  proficiency: z.number().min(0).max(100),
  proof: z.object({
    repos: z.array(z.string().url()).optional(),
    certificates: z.array(z.string().url()).optional(),
    projects: z.array(z.string()).optional(),
  }),
});

// Discovery call schema
export const discoveryCallSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: z.string().optional(),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().min(1, 'Budget range is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  description: z.string().min(10, 'Please provide more details about your project'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
});

// API response schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.unknown().optional(),
  error: z.string().optional(),
});

export const paginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).default('desc'),
});

// Validation helper functions
export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success;
}

export function validatePassword(password: string): boolean {
  return passwordSchema.safeParse(password).success;
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function validateAndSanitize<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean;
  data?: T;
  errors?: string[];
} {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.issues.map((err: { message: string }) => err.message),
      };
    }
    return {
      success: false,
      errors: ['Validation failed'],
    };
  }
}