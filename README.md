# CloudForce Solutions - Next.js 15 Corporate Website

A modern, professional, and fully responsive corporate website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

## ✨ Features

- ⚡️ **Next.js 15 App Router** - Latest Next.js features with server components
- 🎨 **Modern UI/UX** - Clean, professional design with premium aesthetics
- 📱 **Fully Responsive** - Optimized for all devices
- 🎭 **Smooth Animations** - Framer Motion for engaging interactions
- 🎯 **SEO Optimized** - Built-in Next.js SEO features
- ⚡ **Fast Performance** - Optimized images and lazy loading
- 🔧 **TypeScript** - Type-safe code for better maintainability
- 🎨 **Tailwind CSS** - Utility-first styling with custom design system

## 📋 Sections

1. **Hero Section** - Animated hero with live statistics counters
2. **About Us** - Company mission, vision, and values
3. **Services** - 15+ Salesforce services with animated cards
4. **Why Choose Us** - Key benefits and competitive advantages
5. **Portfolio** - Case studies with beautiful image cards
6. **Testimonials** - Client reviews with star ratings
7. **Careers** - Job listings with animated cards
8. **Contact** - Working form with validation and notifications
9. **Footer** - Complete footer with links and contact info

## 🛠️ Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Steps

1. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services grid
│   ├── WhyUs.tsx           # Why choose us section
│   ├── Portfolio.tsx       # Portfolio/case studies
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Careers.tsx         # Careers section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#0176D3',    // Main brand color
    dark: '#032D60',       // Dark variant
    light: '#00A1E0',      // Light variant
  },
}
```

### Modify Content

All components are in the `components/` directory. Simply edit the content in each component file.

### Add/Remove Services

Edit `components/Services.tsx` and modify the `services` array:

```typescript
const services = [
  {
    icon: YourIcon,
    title: 'Your Service',
    description: 'Service description...',
  },
  // Add more services...
]
```

### Update Company Information

1. **Company Name**: Search and replace "CloudForce Solutions"
2. **Contact Details**: Update in `components/Contact.tsx` and `components/Footer.tsx`
3. **Metadata**: Edit `app/layout.tsx` for SEO information

## 🎭 Animations

The website uses Framer Motion for animations:

- **Scroll animations**: Elements animate when scrolling into view
- **Hover effects**: Interactive hover states on cards and buttons
- **Counter animations**: Statistics counter in hero section
- **Page transitions**: Smooth transitions between sections

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Email format checking
- Success/error notifications
- Form reset after submission

**To make it functional**:
1. Create an API route in `app/api/contact/route.ts`
2. Add your email service (SendGrid, Nodemailer, etc.)
3. Update form submission in `components/Contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance

- ✅ Server-side rendering with Next.js
- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle
- ✅ Fast Time to First Byte (TTFB)

## 🎯 SEO Features

- Meta tags and descriptions
- Semantic HTML structure
- Open Graph tags
- Responsive images with alt text
- Fast loading times
- Mobile-friendly design

## 💼 Services Highlighted

- Salesforce Administration & Development
- Apex Programming
- Lightning Web Components (LWC)
- Salesforce Flows & Automation
- Sales Cloud & Salesforce CPQ
- REST & SOAP API Integrations
- SOQL & SOSL
- Validation Rules & Visualforce
- Git & VS Code Development
- CI/CD & Deployment Management
- Salesforce AI Solutions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Support

For questions or support:
- Email: contact@cloudforcesolutions.com
- Phone: +1 (555) 123-4567

## 📄 License

This is a template website. Feel free to customize and use it for your organization.

---

**Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and Framer Motion**
