# Quick Reference Guide

Fast access to common tasks and commands for CloudForce Solutions website.

## ⚡ Quick Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint

# Shortcuts
npm run dev -- -p 3001  # Use different port
```

## 🎨 Quick Customization

### Change Brand Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: '#0176D3',  // ← Change this
    dark: '#032D60',     // ← And this
    light: '#00A1E0',    // ← And this
  },
}
```

### Update Company Name

**Search & Replace** in all files:
- `CloudForce Solutions` → `Your Company Name`

### Change Contact Info

**Files to update**:
1. `components/Contact.tsx` (lines 50-80)
2. `components/Footer.tsx` (lines 60-75)

```typescript
// Replace:
contact@cloudforcesolutions.com
+1 (555) 123-4567
```

### Add/Remove Services

**File**: `components/Services.tsx`

```typescript
const services = [
  {
    icon: YourIcon,           // From lucide-react
    title: 'Service Name',
    description: 'Description...',
  },
  // Add more here
]
```

### Update Statistics (Hero)

**File**: `components/Hero.tsx`

```typescript
const stats = [
  { target: 500, label: 'Projects' },  // ← Change numbers
  { target: 150, label: 'Clients' },
  { target: 15, label: 'Years' },
  { target: 98, label: '% Success' },
]
```

## 🔧 Common Code Snippets

### Add New Section

```typescript
// 1. Create component: components/NewSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function NewSection() {
  return (
    <section id="new-section" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>New Section</h2>
          {/* Content */}
        </motion.div>
      </div>
    </section>
  )
}

// 2. Import in app/page.tsx
import NewSection from '@/components/NewSection'

// 3. Add to page
<NewSection />
```

### Add Animation

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}      // Starting state
  whileInView={{ opacity: 1, y: 0 }}   // When in view
  viewport={{ once: true }}             // Animate once
  transition={{ duration: 0.6 }}        // Animation speed
  whileHover={{ scale: 1.05 }}         // On hover
>
  Content
</motion.div>
```

### Add New Navigation Link

**File**: `components/Navbar.tsx`

```typescript
const navLinks = [
  // ... existing links
  { href: '#new-section', label: 'New Section' },
]
```

### Custom Gradient

**File**: `app/globals.css`

```css
.gradient-custom {
  @apply bg-gradient-to-br from-blue-500 to-purple-600;
}
```

## 📱 Responsive Breakpoints

```typescript
// Tailwind breakpoints:
className="text-base     // < 768px (mobile)
          md:text-lg     // ≥ 768px (tablet)
          lg:text-xl"    // ≥ 1024px (desktop)

// Available breakpoints:
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large
2xl: 1536px // 2X Extra large
```

## 🎨 Common Tailwind Classes

```css
/* Spacing */
p-4       /* padding: 1rem */
m-4       /* margin: 1rem */
px-6      /* padding-left & right: 1.5rem */
py-8      /* padding-top & bottom: 2rem */

/* Colors */
bg-primary        /* Background: primary color */
text-white        /* Text: white */
text-gray-600     /* Text: gray */

/* Layout */
flex              /* display: flex */
grid              /* display: grid */
gap-4             /* gap: 1rem */

/* Typography */
text-xl           /* font-size: 1.25rem */
font-bold         /* font-weight: 700 */
leading-relaxed   /* line-height: 1.625 */

/* Effects */
rounded-lg        /* border-radius: 0.5rem */
shadow-lg         /* box-shadow: large */
hover:scale-105   /* Scale on hover */
transition-all    /* Smooth transitions */
```

## 🖼️ Image Optimization

```typescript
import Image from 'next/image'

// Local image
<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>

// External image (configure in next.config.js)
<Image
  src="https://example.com/image.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

## 📧 Form Validation

```typescript
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  // Show error
}

// Required fields
if (!name || !email) {
  // Show error
}
```

## 🔍 Icons (Lucide React)

```typescript
import { IconName } from 'lucide-react'

<IconName className="w-6 h-6 text-primary" />

// Common icons:
// Mail, Phone, MapPin, User, Check, X
// ArrowRight, Menu, Cloud, Star, etc.
```

## 🎭 Animation Patterns

```typescript
// Fade in on scroll
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}

// Stagger children
transition={{ delay: index * 0.1 }}

// Hover scale
whileHover={{ scale: 1.05 }}

// Rotate on hover
whileHover={{ rotate: 360 }}

// Slide in
initial={{ x: -100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
```

## 🚨 Debugging

```bash
# Check for errors
npm run build

# TypeScript errors
npm run type-check  # (if configured)

# View console
# Open browser DevTools (F12)
# Check Console tab

# Clear cache
rm -rf .next
npm run dev
```

## 📊 Performance Tips

```typescript
// Use Next.js Image component
import Image from 'next/image'

// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'))

// Optimize animations
transition={{ duration: 0.3 }}  // Faster = better performance
```

## 🔐 Environment Variables

```bash
# .env.local (create this file)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Access in code:
process.env.NEXT_PUBLIC_SITE_URL
```

## 📝 Git Commands

```bash
# Initialize repo
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin your-repo-url
git push -u origin main

# Update
git add .
git commit -m "Update description"
git push
```

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port in use | `lsof -ti:3000 \| xargs kill -9` |
| Module not found | `rm -rf node_modules && npm install` |
| Build fails | `rm -rf .next && npm run build` |
| Styles not updating | Restart dev server |
| TypeScript errors | Check `tsconfig.json` |
| Images not loading | Check `next.config.js` domains |

## 📞 Key Files Reference

| File | Purpose | Edit Frequency |
|------|---------|---------------|
| `app/page.tsx` | Main page | Rarely |
| `components/*.tsx` | UI sections | Often |
| `tailwind.config.ts` | Colors/styles | Sometimes |
| `next.config.js` | Next.js settings | Rarely |
| `package.json` | Dependencies | Rarely |

## ✅ Pre-Launch Checklist

```
[ ] Update company name
[ ] Change contact info
[ ] Replace placeholder images
[ ] Test contact form
[ ] Test on mobile
[ ] Check all links
[ ] Run Lighthouse audit
[ ] Set up analytics
[ ] Configure domain
[ ] Enable HTTPS
```

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://framer.com/motion
- **Lucide Icons**: https://lucide.dev
- **Vercel Deploy**: https://vercel.com

## 💡 Pro Tips

1. **Use DevTools**: Chrome DevTools (F12) is your friend
2. **Mobile First**: Always design for mobile first
3. **Test Early**: Test on real devices early and often
4. **Version Control**: Commit changes frequently
5. **Backup**: Keep backups before major changes
6. **Performance**: Keep bundle size small
7. **Accessibility**: Use semantic HTML
8. **SEO**: Add proper meta tags

---

**Need more help?** Check README.md, SETUP.md, or DEPLOYMENT.md
