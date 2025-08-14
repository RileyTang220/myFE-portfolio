#!/bin/bash

# Frontend Portfolio Deployment Script

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'dist' directory"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Netlify: Upload 'dist' folder to Netlify"
    echo "2. Vercel: Run 'vercel' command"
    echo "3. GitHub Pages: Run 'npm run deploy'"
    echo "4. Manual: Upload 'dist' folder to your hosting provider"
    echo ""
    echo "📋 Next steps:"
    echo "- Customize your personal information in the component files"
    echo "- Update project details in src/components/Projects.tsx"
    echo "- Modify contact information in src/components/Contact.tsx"
    echo "- Update skills in src/components/Skills.tsx"
    echo "- Customize colors in tailwind.config.js"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
