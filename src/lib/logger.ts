// Production-ready logging utility
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
  error?: Error;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';

  private formatMessage(entry: LogEntry): string {
    const { level, message, timestamp, context, error } = entry;
    let formatted = `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    
    if (context && Object.keys(context).length > 0) {
      formatted += ` | Context: ${JSON.stringify(context)}`;
    }
    
    if (error) {
      formatted += ` | Error: ${error.message}`;
      if (this.isDevelopment) {
        formatted += ` | Stack: ${error.stack}`;
      }
    }
    
    return formatted;
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>, error?: Error) {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      error,
    };

    const formatted = this.formatMessage(entry);

    // In production, you might want to send logs to a service like Sentry, LogRocket, etc.
    if (this.isProduction) {
      // Send to external logging service
      this.sendToExternalService(entry);
    }

    // Console logging based on level
    switch (level) {
      case 'debug':
        if (this.isDevelopment) console.debug(formatted);
        break;
      case 'info':
        console.info(formatted);
        break;
      case 'warn':
        console.warn(formatted);
        break;
      case 'error':
        console.error(formatted);
        break;
    }
  }

  private sendToExternalService(entry: LogEntry) {
    // Implement external logging service integration here
    // Examples: Sentry, LogRocket, DataDog, etc.
    if (entry.level === 'error' && entry.error) {
      // Send error to error tracking service
    }
  }

  debug(message: string, context?: Record<string, unknown>) {
    this.log('debug', message, context);
  }

  info(message: string, context?: Record<string, unknown>) {
    this.log('info', message, context);
  }

  warn(message: string, context?: Record<string, unknown>) {
    this.log('warn', message, context);
  }

  error(message: string, error?: Error, context?: Record<string, unknown>) {
    this.log('error', message, context, error);
  }

  // Specific logging methods for common scenarios
  apiRequest(method: string, path: string, statusCode: number, duration: number) {
    this.info(`API ${method} ${path}`, {
      method,
      path,
      statusCode,
      duration: `${duration}ms`,
    });
  }

  authEvent(event: string, userId?: string, success: boolean = true) {
    this.info(`Auth: ${event}`, {
      event,
      userId,
      success,
    });
  }

  dbOperation(operation: string, collection: string, duration: number, success: boolean = true) {
    this.info(`DB: ${operation} on ${collection}`, {
      operation,
      collection,
      duration: `${duration}ms`,
      success,
    });
  }
}

export const logger = new Logger();