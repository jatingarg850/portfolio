# Admin Panel with Authentication - Design Document

## Overview

The SkillVerse admin panel will be a comprehensive content management system built with Next.js, featuring secure authentication, dynamic content management, and client interaction tools. The system will use NextAuth.js for authentication, MongoDB for data persistence, and a modern React-based interface for optimal user experience.

## Architecture

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Side   │    │   Server Side   │    │    Database     │
│                 │    │                 │    │                 │
│ • Admin Panel   │◄──►│ • Next.js API   │◄──►│ • MongoDB       │
│ • Auth Forms    │    │ • NextAuth.js   │    │ • Collections:  │
│ • Dashboard     │    │ • Middleware    │    │   - users       │
│ • CRUD Forms    │    │ • File Upload   │    │   - projects    │
│                 │    │ • Email Service │    │   - contacts    │
└─────────────────┘    └─────────────────┘    │   - calls       │
                                              │   - sessions    │
                                              └─────────────────┘
```

### Authentication Flow
```
User Login → NextAuth.js → JWT Token → Protected Routes → Admin Dashboard
     ↓
Credential Validation → Database Check → Session Creation → Access Control
```

## Components and Interfaces

### 1. Authentication System

#### Login Component
```typescript
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
```

#### Protected Route Wrapper
```typescript
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'super-admin';
  fallback?: React.ReactNode;
}
```

### 2. Admin Dashboard

#### Dashboard Layout
```typescript
interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  totalContacts: number;
  newContacts: number;
  scheduledCalls: number;
  completedCalls: number;
  portfolioViews: number;
  conversionRate: number;
}

interface DashboardProps {
  stats: DashboardStats;
  recentContacts: ContactSubmission[];
  upcomingCalls: DiscoveryCall[];
  projectMetrics: ProjectMetric[];
}
```

### 3. Project Management

#### Project Form Component
```typescript
interface ProjectFormData {
  title: string;
  slug: string;
  tagline: string;
  category: ProjectCategory;
  year: number;
  metrics: ProjectMetrics;
  stack: string[];
  gallery: File[];
  links: ProjectLinks;
  caseStudy: CaseStudy;
  status: 'draft' | 'active' | 'archived';
  featured: boolean;
}

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: string) => void;
}
```

### 4. Contact Management

#### Contact Dashboard
```typescript
interface ContactFilters {
  status: 'all' | 'new' | 'reviewed' | 'responded' | 'converted';
  priority: 'all' | 'low' | 'medium' | 'high';
  dateRange: { start: Date; end: Date };
  projectType: string;
}

interface ContactListProps {
  contacts: ContactSubmission[];
  filters: ContactFilters;
  onStatusUpdate: (id: string, status: string) => void;
  onPriorityUpdate: (id: string, priority: string) => void;
}
```

### 5. Discovery Call Scheduling

#### Call Scheduling Form
```typescript
interface DiscoveryCallData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  projectType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  preferredDate: Date;
  preferredTime: string;
  timezone: string;
  additionalNotes?: string;
}

interface CalendarProps {
  calls: DiscoveryCall[];
  availableSlots: TimeSlot[];
  onSlotSelect: (slot: TimeSlot) => void;
  onCallUpdate: (call: DiscoveryCall) => void;
}
```

## Data Models

### Enhanced User Model
```typescript
interface AdminUser extends IUser {
  role: 'admin' | 'super-admin';
  permissions: Permission[];
  lastLogin: Date;
  loginAttempts: number;
  accountLocked: boolean;
  twoFactorEnabled: boolean;
}
```

### Discovery Call Model
```typescript
interface DiscoveryCall {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  projectType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  scheduledDate: Date;
  scheduledTime: string;
  timezone: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  meetingLink?: string;
  notes?: string;
  followUpRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Analytics Model
```typescript
interface PortfolioAnalytics {
  id: string;
  date: Date;
  pageViews: number;
  uniqueVisitors: number;
  projectViews: { [projectId: string]: number };
  contactFormViews: number;
  contactFormSubmissions: number;
  discoveryCallRequests: number;
  averageSessionDuration: number;
  bounceRate: number;
  topReferrers: string[];
  deviceTypes: { desktop: number; mobile: number; tablet: number };
}
```

## Error Handling

### Authentication Errors
- Invalid credentials → Clear error message with retry option
- Account locked → Display lockout duration and contact information
- Session expired → Automatic redirect to login with return URL
- Network errors → Retry mechanism with exponential backoff

### Form Validation
- Client-side validation using Zod schemas
- Server-side validation for security
- Real-time field validation with debouncing
- Comprehensive error messages with field highlighting

### File Upload Errors
- File size validation (max 10MB per file)
- File type validation (images: jpg, png, webp; documents: pdf)
- Virus scanning for uploaded files
- Storage quota management

## Testing Strategy

### Unit Tests
- Authentication functions and middleware
- Form validation schemas
- Database operations and models
- Utility functions and helpers

### Integration Tests
- API endpoints with authentication
- Database operations with real data
- File upload and processing
- Email sending functionality

### End-to-End Tests
- Complete authentication flow
- Project creation and management
- Contact form submission and management
- Discovery call scheduling process

### Security Tests
- SQL injection prevention
- XSS attack prevention
- CSRF protection validation
- File upload security scanning

## Security Considerations

### Authentication Security
- Password hashing using bcrypt with salt rounds
- JWT tokens with short expiration times
- Refresh token rotation
- Rate limiting on login attempts
- Account lockout after failed attempts

### Data Protection
- Input sanitization and validation
- Parameterized database queries
- Encrypted sensitive data storage
- Secure session management
- HTTPS enforcement

### File Upload Security
- File type validation and sanitization
- Virus scanning for uploaded files
- Secure file storage with access controls
- Image processing to remove metadata

## Performance Optimization

### Database Optimization
- Proper indexing on frequently queried fields
- Connection pooling for database connections
- Query optimization and caching
- Pagination for large datasets

### Frontend Optimization
- Code splitting for admin routes
- Lazy loading of heavy components
- Image optimization and compression
- Caching strategies for static assets

### API Optimization
- Response caching for read-heavy operations
- Request debouncing for search functionality
- Batch operations for bulk updates
- Compression for API responses

## Deployment and Infrastructure

### Environment Configuration
- Separate configurations for development, staging, and production
- Environment variables for sensitive data
- Database connection string management
- File storage configuration (local/cloud)

### Monitoring and Logging
- Application performance monitoring
- Error tracking and alerting
- User activity logging
- Security event monitoring

### Backup and Recovery
- Automated database backups
- File storage backups
- Disaster recovery procedures
- Data retention policies