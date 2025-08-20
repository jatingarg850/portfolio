#!/bin/bash

# Production build script for SkillVerse

echo "🚀 Starting SkillVerse production build..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Type check
echo "🔍 Running type checks..."
npm run type-check

# Lint code
echo "🔧 Linting code..."
npm run lint

# Build application
echo "🏗️ Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🎉 SkillVerse is ready for production!"
else
    echo "❌ Build failed!"
    exit 1
fi