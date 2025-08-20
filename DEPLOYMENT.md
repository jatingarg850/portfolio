# SkillVerse Deployment Guide

## Production Deployment Checklist

### 1. Environment Variables
Create a `.env.production` file with:
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-super-secret-production-key-here
NEXTAUTH_URL=https://yourdomain.com
```

### 2. MongoDB Atlas Setup
1. Create a MongoDB Atlas cluster
2. Whitelist your deployment platform's IP addresses
3. Create a database user with read/write permissions
4. Update the MONGODB_URI with your connection string

### 3. Security Considerations
- [ ] Generate a strong NEXTAUTH_SECRET (32+ characters)
- [ ] Enable MongoDB Atlas IP whitelisting
- [ ] Set up proper CORS policies
- [ ] Enable HTTPS in production
- [ ] Review and update security headers in next.config.js

### 4. Performance Optimizations
- [ ] Enable image optimization
- [ ] Configure CDN for static assets
- [ ] Set up proper caching headers
- [ ] Enable compression
- [ ] Monitor bundle size

### 5. Deployment Platforms

#### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Render
1. Create a new Web Service
2. Connect your repository
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Add environment variables

#### Railway
1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

### 6. Post-Deployment Steps
1. Run database seeding via `/setup` page
2. Test admin login functionality
3. Verify all API endpoints work
4. Test contact form submissions
5. Check MongoDB connection and data persistence

### 7. Monitoring & Maintenance
- Set up error tracking (Sentry, LogRocket)
- Monitor database performance
- Regular security updates
- Backup database regularly
- Monitor uptime and performance

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Yes |
| `NEXTAUTH_URL` | Full URL of your application | Yes |

## Troubleshooting

### Common Issues
1. **MongoDB Connection Failed**: Check IP whitelist and connection string
2. **NextAuth Errors**: Verify NEXTAUTH_SECRET and NEXTAUTH_URL
3. **Build Failures**: Check TypeScript errors and dependencies
4. **404 on API Routes**: Ensure proper file structure in app/api

### Debug Mode
Set `NODE_ENV=development` to enable detailed logging and error messages.