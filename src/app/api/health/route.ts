
import { createSuccessResponse, createErrorResponse, withErrorHandling } from '@/lib/api-helpers';
import connectDB from '@/lib/mongodb';
import { logger } from '@/lib/logger';

async function healthCheck() {
  const startTime = Date.now();

  try {
    // Check database connection
    await connectDB();

    const dbCheckTime = Date.now() - startTime;

    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      checks: {
        database: {
          status: 'healthy',
          responseTime: `${dbCheckTime}ms`
        },
        memory: {
          used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
          total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
          unit: 'MB'
        }
      }
    };

    logger.info('Health check completed', {
      responseTime: `${Date.now() - startTime}ms`,
      dbResponseTime: `${dbCheckTime}ms`
    });

    return createSuccessResponse('Service is healthy', healthData);

  } catch (error) {
    logger.error('Health check failed', error as Error);

    return createErrorResponse(
      'Service is unhealthy',
      503,
      process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    );
  }
}

export const GET = withErrorHandling(healthCheck);