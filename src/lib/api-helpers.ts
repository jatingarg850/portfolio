import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { logger } from './logger';
import { z } from 'zod';
import type { Session } from 'next-auth';

// API response helper
export function createApiResponse(
  success: boolean,
  message: string,
  data?: unknown,
  status: number = 200
) {
  const response: Record<string, unknown> = {
    success,
    message,
    timestamp: new Date().toISOString(),
  };
  
  if (data !== undefined) {
    response.data = data;
  }
  
  return NextResponse.json(response, { status });
}

// Error response helper
export function createErrorResponse(
  message: string,
  status: number = 500,
  error?: string
) {
  logger.error(`API Error: ${message}`, undefined, { status, error });
  
  const response: Record<string, unknown> = {
    success: false,
    message,
    timestamp: new Date().toISOString(),
  };
  
  if (error && process.env.NODE_ENV === 'development') {
    response.error = error;
  }
  
  return NextResponse.json(response, { status });
}

// Success response helper
export function createSuccessResponse(
  message: string,
  data?: unknown,
  status: number = 200
) {
  return createApiResponse(true, message, data, status);
}

// Authentication helper
export async function requireAuth(req: NextRequest, requiredRole?: string) {
  try {
    const session = await getServerSession(authOptions) as Session | null;
    
    if (!session?.user) {
      return { error: createErrorResponse('Authentication required', 401) };
    }

    const user = session.user;
    
    if (requiredRole && user.role !== requiredRole && user.role !== 'super-admin') {
      return { error: createErrorResponse('Insufficient permissions', 403) };
    }

    return { user };
  } catch (error) {
    logger.error('Authentication check failed', error as Error);
    return { error: createErrorResponse('Authentication failed', 401) };
  }
}

// Request validation helper
export async function validateRequest<T>(
  req: NextRequest,
  schema: z.ZodSchema<T>
): Promise<{ data?: T; error?: NextResponse }> {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);
    
    if (!result.success) {
      const errors = result.error.issues.map((err) => `${err.path.join('.')}: ${err.message}`);
      return {
        error: createErrorResponse(
          'Validation failed',
          400,
          errors.join(', ')
        )
      };
    }
    
    return { data: result.data };
  } catch {
    return {
      error: createErrorResponse('Invalid JSON in request body', 400)
    };
  }
}

// Method validation helper
export function validateMethod(req: NextRequest, allowedMethods: string[]) {
  if (!allowedMethods.includes(req.method)) {
    return createErrorResponse(
      `Method ${req.method} not allowed`,
      405
    );
  }
  return null;
}

// Pagination helper
export function getPaginationParams(req: NextRequest) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '10'), 100);
  const skip = (page - 1) * limit;
  const sort = url.searchParams.get('sort') || 'createdAt';
  const order = url.searchParams.get('order') === 'asc' ? 1 : -1;
  
  return { page, limit, skip, sort, order };
}

// Search helper
export function getSearchParams(req: NextRequest) {
  const url = new URL(req.url);
  const search = url.searchParams.get('search') || '';
  const category = url.searchParams.get('category') || '';
  const status = url.searchParams.get('status') || '';
  
  return { search, category, status };
}

// API route wrapper with error handling
export function withErrorHandling(
  handler: (req: NextRequest, context?: unknown) => Promise<NextResponse>
) {
  return async (req: NextRequest, context?: unknown) => {
    const startTime = Date.now();
    
    try {
      const response = await handler(req, context);
      const duration = Date.now() - startTime;
      
      logger.apiRequest(
        req.method,
        new URL(req.url).pathname,
        response.status,
        duration
      );
      
      return response;
    } catch (error) {
      const duration = Date.now() - startTime;
      logger.error(
        `API Error in ${req.method} ${new URL(req.url).pathname}`,
        error as Error,
        { duration }
      );
      
      return createErrorResponse(
        'Internal server error',
        500,
        process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      );
    }
  };
}

// CORS helper
export function setCorsHeaders(response: NextResponse, origin?: string) {
  const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://skillverse.netlify.app'] // Replace with your actual domain
    : ['http://localhost:3000'];
  
  const requestOrigin = origin || '';
  
  if (allowedOrigins.includes(requestOrigin)) {
    response.headers.set('Access-Control-Allow-Origin', requestOrigin);
  }
  
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  
  return response;
}

// Rate limiting helper
export function isRateLimited(req: NextRequest, maxRequests: number = 100, windowMs: number = 15 * 60 * 1000) {
  // This is a simple in-memory rate limiter
  // In production, you'd want to use Redis or a similar solution
  // For now, return false (not rate limited)
  // TODO: Implement proper rate limiting logic here using req, maxRequests, and windowMs
  console.log(`Rate limiting check for ${req.url} - Max: ${maxRequests}, Window: ${windowMs}ms`);
  return false;
}