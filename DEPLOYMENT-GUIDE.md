# Vercel Deployment Guide via Git

## 🚀 Deploy Your Website to Vercel

Follow these steps to deploy your CloudForce Solutions website to Vercel through Git.

---

## Step 1: Initialize Git Repository

First, let's initialize a Git repository and make your first commit.

### Commands to Run:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: CloudForce Solutions website"
```

---

## Step 2: Create GitHub Repository

### Option A: Using GitHub CLI (if installed)

```bash
# Login to GitHub
gh auth login

# Create a new repository
gh repo create cloudforce-solutions --public --source=. --remote=origin --push
```

### Option B: Manual Setup (Recommended)

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `cloudforce-solutions`
3. Description: "Professional Salesforce consulting and development website"
4. Choose: **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

---

## Step 3: Connect Local Repository to GitHub

After creating the GitHub repository, connect it:

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cloudforce-solutions.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel**: [https://vercel.com](https://vercel.com)

2. **Sign Up/Login**:
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select your `cloudforce-solutions` repository
   - Click "Import"

4. **Configure Project**:
   - **Project Name**: `cloudforce-solutions` (or your preferred name)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. **Environment Variables** (Optional):
   - Click "Environment Variables" if you have any
   - Add any from your `.env.example` file
   - For now, you can skip this

6. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - ✅ Your site will be live!

---

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? cloudforce-solutions
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## Step 5: Access Your Deployed Website

After deployment completes:

1. **You'll receive a URL** like:
   - `https://cloudforce-solutions.vercel.app`
   - Or your custom domain if configured

2. **Vercel Dashboard** shows:
   - ✅ Deployment status
   - 🔗 Live URL
   - 📊 Analytics
   - ⚙️ Settings

---

## 🎯 Automatic Deployments

**Now Every Git Push Deploys Automatically!**

```bash
# Make changes to your code
# Stage changes
git add .

# Commit changes
git commit -m "Update content"

# Push to GitHub
git push origin main

# Vercel automatically deploys! ✨
```

### Deployment Types:
- **Push to `main`**: Production deployment
- **Push to other branches**: Preview deployment
- **Pull Requests**: Automatic preview URLs

---

## 🌐 Custom Domain Setup (Optional)

### Add Your Own Domain:

1. **Go to Project Settings** in Vercel Dashboard
2. Click **"Domains"** tab
3. Click **"Add"**
4. Enter your domain: `yourdomain.com`
5. **Configure DNS** (Vercel provides instructions):
   - Add A record or CNAME
   - Wait for DNS propagation (5 min - 48 hours)
6. ✅ SSL certificate auto-generated

### Example DNS Configuration:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 What You Get with Vercel

### Free Tier Includes:
- ✅ Unlimited deployments
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Automatic CI/CD
- ✅ 100GB bandwidth/month
- ✅ Serverless functions
- ✅ Analytics
- ✅ DDoS protection

---

## 🔧 Deployment Settings

### Build Settings (Auto-configured):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Environment Variables (if needed):
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🐛 Troubleshooting

### Build Fails?

**Check Build Logs** in Vercel Dashboard:

1. Common issues:
   - Missing dependencies: `npm install` locally
   - TypeScript errors: `npm run build` locally
   - Environment variables missing

2. Fix locally first:
   ```bash
   npm run build
   npm start
   # If works locally, commit and push again
   ```

### Deployment Stuck?

1. Check Vercel status: [https://vercel.com/status](https://vercel.com/status)
2. Try redeploying from dashboard
3. Check GitHub webhook settings

### Custom Domain Not Working?

1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check domain registrar settings
4. Use Vercel's DNS checker

---

## 📱 Monitor Your Deployment

### Vercel Dashboard Shows:
- 📈 **Analytics**: Page views, visitors
- ⚡ **Performance**: Load times, Core Web Vitals
- 🔍 **Logs**: Function logs, errors
- 🌍 **Domains**: All connected domains
- ⚙️ **Settings**: Project configuration

---

## 🔄 Development Workflow

### Standard Workflow:

```bash
# 1. Create feature branch
git checkout -b feature/new-content

# 2. Make changes
# Edit files...

# 3. Test locally
npm run dev

# 4. Commit changes
git add .
git commit -m "Add new content"

# 5. Push to GitHub
git push origin feature/new-content

# 6. Create Pull Request on GitHub
# Vercel creates preview deployment automatically

# 7. Review preview, then merge to main
# Production auto-deploys!
```

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] All content is finalized
- [ ] Contact information is correct
- [ ] Images are optimized
- [ ] Forms work correctly
- [ ] Mobile responsive tested
- [ ] No console errors
- [ ] Build succeeds locally (`npm run build`)
- [ ] All links work
- [ ] SEO meta tags are set
- [ ] Analytics configured (optional)

---

## 🎉 Post-Deployment

### Immediate Actions:
1. ✅ Test live website thoroughly
2. ✅ Test on mobile devices
3. ✅ Test contact form
4. ✅ Check all page links
5. ✅ Verify images load correctly

### Share Your Website:
- 📧 Email clients your URL
- 📱 Update social media profiles
- 🔗 Add to business cards
- 📊 Submit to Google Search Console

---

## 📚 Useful Vercel Commands

```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm cloudforce-solutions

# Link local project to Vercel project
vercel link

# Pull environment variables
vercel env pull

# Deploy specific branch
vercel --prod
```

---

## 🆘 Need Help?

### Resources:
- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [https://vercel.com/support](https://vercel.com/support)
- **Community**: [https://github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### Common Questions:

**Q: How much does Vercel cost?**
A: Free tier is generous. Pro plan ($20/month) for more features.

**Q: Can I use my own domain?**
A: Yes! Add any domain in settings.

**Q: How fast is deployment?**
A: Usually 2-3 minutes from push to live.

**Q: Can I rollback?**
A: Yes! Instant rollback to any previous deployment.

---

## 🎯 You're Ready!

Your CloudForce Solutions website will be:
- ✅ Live on the internet
- ✅ Fast and secure (CDN + HTTPS)
- ✅ Auto-updating on every push
- ✅ Professionally hosted

**Start with Step 1 above and you'll be live in 10 minutes!** 🚀

