import { NextRequest, NextResponse } from 'next/server';
import { logger } from './logger';

interface RateLimitConfig {
  windowMs: number;
  max: number;
  message?: string;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class RateLimiter {
  private store: RateLimitStore = {};
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = {
      message: 'Too many requests, please try again later.',
      ...config,
    };
  }

  private getKey(req: NextRequest): string {
    // Use IP address as the key, with fallback to a default
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
    return ip;
  }

  private cleanupExpiredEntries() {
    const now = Date.now();
    Object.keys(this.store).forEach(key => {
      if (this.store[key].resetTime <= now) {
        delete this.store[key];
      }
    });
  }

  check(req: NextRequest): { allowed: boolean; remaining: number; resetTime: number } {
    const key = this.getKey(req);
    const now = Date.now();
    
    // Cleanup expired entries periodically
    if (Math.random() < 0.1) {
      this.cleanupExpiredEntries();
    }

    // Get or create entry for this key
    let entry = this.store[key];
    
    if (!entry || entry.resetTime <= now) {
      // Create new entry or reset expired entry
      entry = {
        count: 0,
        resetTime: now + this.config.windowMs,
      };
      this.store[key] = entry;
    }

    // Increment count
    entry.count++;

    const allowed = entry.count <= this.config.max;
    const remaining = Math.max(0, this.config.max - entry.count);

    if (!allowed) {
      logger.warn('Rate limit exceeded', {
        ip: key,
        count: entry.count,
        max: this.config.max,
        resetTime: new Date(entry.resetTime).toISOString(),
      });
    }

    return {
      allowed,
      remaining,
      resetTime: entry.resetTime,
    };
  }

  middleware() {
    return (req: NextRequest) => {
      const result = this.check(req);
      
      if (!result.allowed) {
        return NextResponse.json(
          { error: this.config.message },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': this.config.max.toString(),
              'X-RateLimit-Remaining': result.remaining.toString(),
              'X-RateLimit-Reset': new Date(result.resetTime).toISOString(),
              'Retry-After': Math.ceil((result.resetTime - Date.now()) / 1000).toString(),
            }
          }
        );
      }

      return null; // Allow request to continue
    };
  }
}

// Create default rate limiter
export const defaultRateLimit = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Create strict rate limiter for sensitive endpoints
export const strictRateLimit = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many attempts, please try again later.',
});

// Helper function to apply rate limiting to API routes
export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  rateLimiter: RateLimiter = defaultRateLimit
) {
  return async (req: NextRequest) => {
    const rateLimitResponse = rateLimiter.middleware()(req);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }
    
    return handler(req);
  };
}