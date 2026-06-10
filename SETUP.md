# Quick Setup Guide

Get your CloudForce Solutions website up and running in minutes!

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm** package manager
- A code editor (VS Code recommended)
- Git installed (optional, for version control)

## 🚀 Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

Or pnpm:

```bash
pnpm install
```

This will install all required packages:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

### 2. Start Development Server

```bash
npm run dev
```

Or:

```bash
yarn dev
# or
pnpm dev
```

### 3. Open Your Browser

Navigate to: **http://localhost:3000**

You should see your website running! 🎉

## 🎨 Customization

### Update Company Information

1. **Company Name**:
   - Search for "CloudForce Solutions" across all files
   - Replace with your company name

2. **Contact Details**:
   - Edit `components/Contact.tsx`
   - Edit `components/Footer.tsx`
   - Update email, phone, and address

3. **Logo**:
   - Replace the Cloud icon in `components/Navbar.tsx`
   - You can use a custom image or keep the icon

### Modify Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#0176D3',  // Your main brand color
    dark: '#032D60',     // Darker shade
    light: '#00A1E0',    // Lighter shade
  },
}
```

### Update Services

Edit `components/Services.tsx`:

```typescript
const services = [
  {
    icon: YourIcon,
    title: 'Your Service Name',
    description: 'Service description...',
  },
  // Add or remove services as needed
]
```

### Update Portfolio Projects

Edit `components/Portfolio.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    image: 'https://your-image-url.com',
    tags: ['Tag1', 'Tag2'],
  },
]
```

### Update Team Testimonials

Edit `components/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    name: 'Client Name',
    role: 'Client Role',
    image: 'https://avatar-url.com',
    text: 'Testimonial text...',
    rating: 5,
  },
]
```

### Update Job Listings

Edit `components/Careers.tsx`:

```typescript
const jobs = [
  {
    title: 'Job Title',
    location: 'Location',
    type: 'Job Type',
  },
]
```

## 📧 Contact Form Setup

The contact form currently displays success/error messages. To make it functional:

### Option 1: Email Service (Recommended)

1. Create an API route: `app/api/contact/route.ts`

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Add your email sending logic here
  // Using SendGrid, Nodemailer, etc.
  
  return NextResponse.json({ success: true })
}
```

2. Update form submission in `components/Contact.tsx`

### Option 2: Third-party Form Service

- [Formspree](https://formspree.io/)
- [Getform](https://getform.io/)
- [Web3Forms](https://web3forms.com/)

Simply update the form action URL.

## 🖼️ Images

### Using Custom Images

Replace Unsplash URLs with your own images:

1. Add images to `public/images/` folder
2. Update image paths in components:

```typescript
// Instead of:
src="https://images.unsplash.com/..."

// Use:
src="/images/your-image.jpg"
```

### Image Optimization

Next.js automatically optimizes images using the `Image` component. No extra work needed!

## 🎭 Animations

Animations are powered by Framer Motion. To customize:

1. **Scroll Animations**: Edit `initial`, `whileInView`, and `transition` props
2. **Hover Effects**: Modify `whileHover` props
3. **Duration**: Change `duration` in transition objects

Example:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}  // Adjust timing
>
```

## 🔧 Configuration Files

### `next.config.js`
- Image domains
- Redirects
- Environment variables

### `tailwind.config.ts`
- Colors
- Fonts
- Custom utilities
- Animations

### `tsconfig.json`
- TypeScript settings
- Path aliases

## 📱 Testing

### Test on Different Devices

1. **Desktop**: Test in browser at full width
2. **Tablet**: Resize browser or use DevTools
3. **Mobile**: Use Chrome DevTools device emulation

### Test All Features

- [ ] Navigation works
- [ ] All sections scroll correctly
- [ ] Contact form validates
- [ ] Animations are smooth
- [ ] Images load properly
- [ ] Links work correctly

## 🏗️ Building for Production

### Test Production Build

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server.

### Check for Errors

The build process will show any TypeScript or build errors. Fix them before deploying.

## 📊 Performance

### Run Lighthouse Audit

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Aim for 90+ scores

### Optimization Tips

- ✅ Images auto-optimized by Next.js
- ✅ Code splitting enabled by default
- ✅ Minimal JavaScript bundle
- ✅ Server-side rendering for SEO

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
```

### TypeScript Errors

```bash
# Check for errors
npm run build

# Most errors show in editor with TypeScript extension
```

### Styling Not Applying

```bash
# Restart dev server
# Ctrl+C to stop, then npm run dev again
```

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

### Tailwind CSS

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Framer Motion

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

## 🆘 Getting Help

Need assistance?

1. **Check Documentation**: See README.md and DEPLOYMENT.md
2. **Search Issues**: Look for similar problems
3. **Community**: Next.js Discord or GitHub Discussions
4. **Support**: Contact your development team

## ✅ Checklist Before Going Live

- [ ] Updated all company information
- [ ] Changed placeholder images
- [ ] Tested contact form
- [ ] Verified all links work
- [ ] Tested on mobile devices
- [ ] Checked for console errors
- [ ] Optimized images
- [ ] Set up analytics (optional)
- [ ] Configured custom domain
- [ ] Enabled HTTPS
- [ ] Tested in multiple browsers
- [ ] Set up error monitoring

## 🎉 You're Ready!

Your website is now set up and ready for customization. Start by updating the content to match your business, then test thoroughly before deploying.

For deployment instructions, see **DEPLOYMENT.md**.

---

**Questions?** Check the documentation or reach out to your development team!
