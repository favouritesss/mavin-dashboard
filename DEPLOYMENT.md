# Mavin Records Digital Intelligence Dashboard - Deployment Guide

## Quick Vercel Deployment (Recommended)

1. **Push to GitHub:**
   \`\`\`bash
   git add .
   git commit -m "Mavin Records presentation dashboard"
   git push origin main
   \`\`\`

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed)
   - Get your live URL: `your-project-name.vercel.app`

## Alternative: GitHub Pages (Static Export)

1. **Enable static export** in `next.config.mjs`:
   \`\`\`js
   output: 'export',
   trailingSlash: true,
   \`\`\`

2. **Build and deploy:**
   \`\`\`bash
   npm run build
   # Upload the 'out' folder to GitHub Pages
   \`\`\`

## Environment Variables (if needed)
- No environment variables required for this presentation
- All data is mock/demo data for presentation purposes

## Custom Domain (Optional)
- Add your custom domain in Vercel dashboard
- Update DNS settings to point to Vercel

Your presentation is now ready for professional deployment!
