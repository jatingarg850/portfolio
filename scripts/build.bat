@echo off
echo 🚀 Starting SkillVerse production build...

echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

echo 📦 Installing dependencies...
npm ci --only=production

echo 🔍 Running type checks...
npm run type-check
if %errorlevel% neq 0 (
    echo ❌ Type check failed!
    exit /b 1
)

echo 🔧 Linting code...
npm run lint
if %errorlevel% neq 0 (
    echo ❌ Lint failed!
    exit /b 1
)

echo 🏗️ Building application...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    exit /b 1
)

echo ✅ Build completed successfully!
echo 🎉 SkillVerse is ready for production!