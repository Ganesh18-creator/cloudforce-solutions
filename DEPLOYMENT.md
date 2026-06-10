# Deployment Guide

This guide covers deploying your CloudForce Solutions website to various platforms.

## 🚀 Vercel (Recommended - Easiest)

Vercel is the creators of Next.js and offers the best Next.js hosting experience.

### Steps:

1. **Push to Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Done!** Your site will be live in minutes with:
   - Automatic HTTPS
   - Global CDN
   - Automatic deployments on push
   - Preview deployments for PRs

### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

## 📦 Netlify

### Steps:

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

2. **Deploy**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Build
   npm run build

   # Deploy
   netlify deploy --prod
   ```

3. **Or use Netlify UI**:
   - Connect your Git repository
   - Configure build settings
   - Deploy

---

## 🐳 Docker

### Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Deploy:

```bash
# Build image
docker build -t cloudforce-solutions .

# Run container
docker run -p 3000:3000 cloudforce-solutions
```

---

## ☁️ AWS (Amplify)

### Steps:

1. **Connect Repository**:
   - Go to AWS Amplify Console
   - Click "New App" → "Host web app"
   - Connect your Git provider

2. **Build Settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy**: Amplify will auto-deploy on push

---

## 🌊 DigitalOcean App Platform

### Steps:

1. **Create App**:
   - Go to DigitalOcean App Platform
   - Click "Create App"
   - Connect your repository

2. **Configure**:
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: 3000

3. **Deploy**: Click "Create Resources"

---

## 🖥️ VPS / Dedicated Server

### Requirements:
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### Setup:

```bash
# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "cloudforce" -- start

# Configure PM2 to start on boot
pm2 startup
pm2 save
```

### Nginx Configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Environment Variables

For production, set these environment variables:

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Add any other required variables from `.env.example`

---

## ✅ Pre-Deployment Checklist

- [ ] Update all placeholder content
- [ ] Add your company information
- [ ] Update contact details
- [ ] Test contact form
- [ ] Configure analytics (optional)
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Set up custom domain
- [ ] Configure SSL/HTTPS
- [ ] Test performance with Lighthouse

---

## 📊 Performance Optimization

After deployment:

1. **Test with Lighthouse**:
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Aim for 90+ scores

2. **Monitor Performance**:
   - Use Vercel Analytics (if using Vercel)
   - Google Analytics
   - Web Vitals

3. **Optimize Images**:
   - Already optimized with Next.js Image
   - Use WebP format when possible

---

## 🔒 Security

- Keep dependencies updated: `npm audit`
- Use environment variables for secrets
- Enable HTTPS (automatic on most platforms)
- Set security headers in `next.config.js`

---

## 📱 Post-Deployment

1. **Test thoroughly**:
   - All pages load correctly
   - Forms work properly
   - Animations are smooth
   - Mobile responsiveness

2. **Submit to Google**:
   - Google Search Console
   - Submit sitemap

3. **Monitor**:
   - Set up uptime monitoring
   - Check analytics regularly
   - Monitor error logs

---

## 🆘 Troubleshooting

### Build Fails:
- Check Node.js version (18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Slow Performance:
- Check image sizes
- Review bundle size
- Enable caching headers
- Use CDN

### 404 Errors:
- Verify file paths are correct
- Check Next.js routing configuration
- Ensure all files are committed to Git

---

Need help? Contact support or check the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
