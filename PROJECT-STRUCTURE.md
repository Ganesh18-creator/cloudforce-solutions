# Project Structure

Complete overview of the CloudForce Solutions Next.js project structure.

```
cloudforce-solutions/
│
├── app/                          # Next.js 15 App Directory
│   ├── layout.tsx               # Root layout with metadata & fonts
│   ├── page.tsx                 # Home page (imports all sections)
│   └── globals.css              # Global styles & Tailwind imports
│
├── components/                   # React Components
│   ├── Navbar.tsx               # Navigation bar with mobile menu
│   ├── Hero.tsx                 # Hero section with animations
│   ├── About.tsx                # About Us section
│   ├── Services.tsx             # Services grid (15 services)
│   ├── WhyUs.tsx                # Why Choose Us section
│   ├── Portfolio.tsx            # Portfolio/Case Studies
│   ├── Testimonials.tsx         # Client testimonials
│   ├── Careers.tsx              # Careers/Job listings
│   ├── Contact.tsx              # Contact form with validation
│   └── Footer.tsx               # Footer with links
│
├── public/                       # Static assets
│   └── (add your images here)
│
├── node_modules/                 # Dependencies (auto-generated)
│
├── .next/                        # Next.js build output (auto-generated)
│
├── .env.example                  # Environment variables template
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
│
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Locked dependency versions
│
├── README.md                    # Main documentation
├── SETUP.md                     # Setup instructions
├── DEPLOYMENT.md                # Deployment guide
└── PROJECT-STRUCTURE.md         # This file
```

## 📁 Directory Breakdown

### `/app` - Application Core

The App Router directory contains:

**`layout.tsx`**
- Root layout wrapping all pages
- Metadata configuration (SEO)
- Font imports
- Common HTML structure

**`page.tsx`**
- Main home page
- Imports and renders all section components
- Server component by default

**`globals.css`**
- Tailwind CSS directives
- Custom CSS utilities
- Global styles

### `/components` - UI Components

All reusable React components with TypeScript:

| Component | Purpose | Features |
|-----------|---------|----------|
| `Navbar.tsx` | Navigation | Sticky header, mobile menu, smooth scroll |
| `Hero.tsx` | Hero section | Animated counters, gradient background |
| `About.tsx` | About section | Mission, vision, values with images |
| `Services.tsx` | Services grid | 15 service cards with icons |
| `WhyUs.tsx` | Benefits | 6 reasons with animated icons |
| `Portfolio.tsx` | Case studies | 4 project cards with images |
| `Testimonials.tsx` | Reviews | 3 client testimonials with ratings |
| `Careers.tsx` | Jobs | Current openings with apply button |
| `Contact.tsx` | Contact form | Validated form, notifications |
| `Footer.tsx` | Footer | Links, contact info, social media |

### `/public` - Static Files

Place your static assets here:

```
public/
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── ...
├── favicon.ico
└── robots.txt
```

Files in `/public` are served from root URL:
- `/public/images/logo.png` → `/images/logo.png`

## 🔧 Configuration Files

### `next.config.js`
```javascript
- Image optimization settings
- Remote image patterns
- Environment variables
- Redirects & rewrites
```

### `tailwind.config.ts`
```typescript
- Custom colors (primary, dark, light)
- Custom fonts
- Animation utilities
- Responsive breakpoints
```

### `tsconfig.json`
```json
- TypeScript compiler options
- Path aliases (@/* = ./*)
- Include/exclude patterns
```

### `package.json`
```json
Scripts:
  - dev: Start development server
  - build: Create production build
  - start: Start production server
  - lint: Run ESLint
```

## 🎨 Styling Architecture

### Tailwind Utility Classes
```typescript
// In components
className="bg-primary text-white p-6 rounded-lg"
```

### Custom Utilities (globals.css)
```css
.gradient-primary  // Primary gradient background
.gradient-dark     // Dark gradient background
.text-gradient     // Gradient text effect
```

### Responsive Design
```typescript
// Mobile-first approach
className="text-base md:text-lg lg:text-xl"
//         mobile     tablet      desktop
```

## 🎭 Animation System

### Framer Motion Integration

**Scroll Animations**
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>
```

**Hover Effects**
```typescript
<motion.div
  whileHover={{ scale: 1.05, y: -8 }}
/>
```

**Stagger Animations**
```typescript
// Used in service cards, portfolio items
transition={{ delay: index * 0.1 }}
```

## 📊 Component Data Flow

```
page.tsx (Server Component)
    ↓
Layout (with metadata)
    ↓
┌─────────────────────────────────┐
│  Navbar (Client Component)      │
│  - Fixed position               │
│  - State for mobile menu        │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│  Hero (Client Component)        │
│  - Counter animations           │
│  - Scroll animations            │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│  Section Components             │
│  - Each section independent     │
│  - Framer Motion animations     │
│  - Viewport triggers            │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│  Footer (Client Component)      │
│  - Links and contact info       │
└─────────────────────────────────┘
```

## 🔄 State Management

### Component-Level State
```typescript
// Example from Contact.tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  // ...
})
```

No global state management needed for this project. Each component manages its own state.

## 🚀 Build Process

### Development (`npm run dev`)
```
1. Start Next.js dev server
2. Hot Module Replacement enabled
3. TypeScript checking
4. Tailwind JIT compilation
```

### Production (`npm run build`)
```
1. TypeScript compilation
2. React component optimization
3. Image optimization
4. CSS purging (removes unused styles)
5. JavaScript minification
6. Static page generation
```

## 📦 Dependencies

### Core Dependencies
- **next** (^15.0.0): React framework
- **react** (^18.3.1): UI library
- **react-dom** (^18.3.1): React DOM renderer
- **framer-motion** (^11.0.0): Animation library
- **lucide-react** (^0.344.0): Icon library

### Dev Dependencies
- **typescript** (^5.3.3): Type checking
- **tailwindcss** (^3.4.1): Utility CSS
- **postcss** (^8.4.33): CSS processing
- **autoprefixer** (^10.4.17): CSS vendor prefixes
- **eslint** (^8.56.0): Code linting

## 🎯 Component Responsibilities

### Smart Components (with logic)
- `Contact.tsx`: Form validation, state management
- `Hero.tsx`: Counter animation logic
- `Navbar.tsx`: Scroll detection, mobile menu

### Presentation Components (pure display)
- `About.tsx`: Static content display
- `Services.tsx`: Service data mapping
- `Portfolio.tsx`: Project cards display
- `Testimonials.tsx`: Review cards display
- `Footer.tsx`: Static footer content

## 🔍 File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.tsx`)
- **Config files**: kebab-case (e.g., `next.config.js`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: PascalCase (e.g., `types.ts`)

## 📝 Code Organization Best Practices

1. **One component per file**
2. **Group related data near component**
3. **Export component as default**
4. **Keep components under 300 lines**
5. **Use TypeScript for type safety**
6. **Follow Next.js conventions**

## 🔗 Import Aliases

Using `@/*` alias for clean imports:

```typescript
// Instead of:
import Component from '../../../components/Component'

// Use:
import Component from '@/components/Component'
```

Configured in `tsconfig.json`:
```json
"paths": {
  "@/*": ["./*"]
}
```

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript**: https://www.typescriptlang.org/docs

---

**Note**: This structure follows Next.js 15 best practices and modern React patterns.
