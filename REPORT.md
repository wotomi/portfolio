# Portfolio Project Design System Report

**Project Name:** Portfolio  
**Generated:** June 3, 2026  
**Framework:** Next.js 15.5.19 with React 19.0.0  
**Language:** TypeScript 5

---

## Table of Contents
1. [Design Framework](#design-framework)
2. [Styling System](#styling-system)
3. [Icon Libraries](#icon-libraries)
4. [Typography](#typography)
5. [UI Component Libraries](#ui-component-libraries)
6. [Animation Libraries](#animation-libraries)
7. [Utility Libraries](#utility-libraries)
8. [Design Patterns](#design-patterns)
9. [Color System](#color-system)
10. [Custom Animations](#custom-animations)

---

## Design Framework

### Component Architecture
- **shadcn/ui** - Component system preset: `new-york` style
- **Base Color:** Neutral
- **CSS Variables:** Enabled for theming
- **Icon Library:** Lucide (primary)

### Configuration
```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "baseColor": "neutral",
  "cssVariables": true,
  "iconLibrary": "lucide"
}
```

---

## Styling System

### CSS Framework
- **Tailwind CSS v4** - Latest version with enhanced features
- **PostCSS Plugin:** `@tailwindcss/postcss@4`
- **Additional Plugins:**
  - `tailwindcss-animate@1.0.7` - Animation utilities
  
### Utility Libraries
- **clsx@2.1.1** - Conditional className construction
- **tailwind-merge@3.0.2** - Merge Tailwind classes without conflicts
- **class-variance-authority@0.7.1** - Type-safe variant management

### Custom Utility Function
```typescript
// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## Icon Libraries

### Primary Icon Libraries (3 Libraries)

#### 1. **Lucide React** v0.479.0 (Primary)
- **Purpose:** Main icon library for UI elements
- **Usage:** Navigation, contact icons, section badges
- **Examples:**
  - `Menu`, `X` - Mobile navigation
  - `Mail`, `MessageSquare` - Contact section
  - `Lightbulb` - Skills section
  - `CalendarRange`, `ExternalLink` - Project cards

#### 2. **React Icons** v5.5.0 (Technology Icons)
- **Purpose:** Brand and technology icons
- **Sub-libraries used:**
  - `react-icons/fa` - Font Awesome (React, HTML5, CSS3, Python, Node.js, Docker, Git, GitHub)
  - `react-icons/fa6` - Font Awesome 6 (GitHub, LinkedIn, X/Twitter social icons)
  - `react-icons/si` - Simple Icons (TypeScript, MongoDB, Express, Prisma, Drizzle)
  - `react-icons/ri` - Remix Icons (Firebase, Supabase, Tailwind CSS, Database)
  - `react-icons/fi` - Feather Icons (Figma)
  - `react-icons/vsc` - VS Code Icons (VS Code)
  - `react-icons/bi` - BoxIcons (PostgreSQL)
  - `react-icons/di` - Devicons (Redis)
  - `react-icons/bs` - Bootstrap Icons (GitHub)
  - `react-icons/io` - Ionicons (JavaScript)

#### 3. **Tabler Icons React** v3.31.0
- **Purpose:** Supplementary icons
- **Usage:** Next.js brand icon
- **Example:** `IconBrandNextjs`

### Icon Color Strategy
Icons use brand-specific colors for immediate recognition:
- JavaScript: `#F7DF1E` (yellow)
- TypeScript: `#3178C6` (blue)
- React: `#61DAFB` (cyan)
- HTML: `#E34F26` (orange)
- CSS: `#1572B6` (blue)
- Python: `#3776AB` (blue)
- Git: `#F05032` (red)
- Docker: `#2496ED` (blue)
- MongoDB: `#47A248` (green)
- PostgreSQL: `#4169E1` (blue)
- And more...

---

## Typography

### Font Families
**Google Fonts via next/font/google:**

#### 1. **Geist Sans** (Primary)
- **Variable:** `--font-geist-sans`
- **Subsets:** Latin
- **Usage:** Body text, headings, general UI

#### 2. **Geist Mono** (Monospace)
- **Variable:** `--font-geist-mono`
- **Subsets:** Latin
- **Usage:** Code snippets, technical content

### Font Loading
```typescript
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

---

## UI Component Libraries

### Radix UI Primitives
Low-level, accessible component primitives:

1. **@radix-ui/react-slot@1.1.2**
   - Polymorphic component composition
   - Used in Button component

2. **@radix-ui/react-tooltip@1.2.7**
   - Accessible tooltips
   - Used in project cards for icon explanations

### Custom UI Components
Located in `components/ui/`:
- `button.tsx` - Variant-based button system
- `spotlight-card.tsx` - Interactive card with spotlight effect
- `tooltip.tsx` - Radix tooltip wrapper

---

## Animation Libraries

### Framer Motion v12.5.0
- **Purpose:** Advanced animations and transitions
- **Features:**
  - Page transitions
  - Component animations
  - Interactive hover effects
  - Gesture animations

### Tailwind CSS Animate
- **Plugin:** `tailwindcss-animate@1.0.7`
- **Custom Animations:**
  - `appear` - 1s ease-in-out fade in
  - `shimmer` - 2s linear infinite shimmer effect
  - `shine` - 3s infinite shine/sweep effect
  - `slow-spin` - 120s linear infinite rotation

---

## Utility Libraries

### Theme Management
- **next-themes@0.4.6**
  - Dark/light mode switching
  - System preference detection
  - Persistent theme storage
  - Default: Dark mode

### Development Tools
- **TypeScript@5** - Type safety
- **ESLint@9** - Code linting
- **eslint-config-next@15.2.2** - Next.js specific rules

---

## Design Patterns

### 1. **Glass Morphism**
```css
backdrop-blur-md
bg-white/80 dark:bg-[#0a0a0a]/80
```
Used in: Navbar when scrolled

### 2. **Spotlight Effect**
- Custom component: `SpotlightCard`
- Features:
  - Mouse-following gradient
  - Multi-spotlight support
  - Configurable gradient colors
  - Optional scale effects

### 3. **Shimmer/Shine Animations**
- Subtle gradient sweeps on hover
- Applied to buttons and active elements
- Keyframe-based CSS animations

### 4. **Radial Gradient Highlights**
- Mouse position tracking
- Dynamic gradient positioning
- Applied to navbar and interactive elements

---

## Color System

### Color Space
**OKLCH** - Perceptually uniform color space for better consistency

### Theme Variables

#### Light Theme
```css
--background: oklch(1 0 0)              /* Pure white */
--foreground: oklch(0.145 0 0)          /* Near black */
--primary: oklch(0.205 0 0)             /* Dark gray */
--secondary: oklch(0.97 0 0)            /* Light gray */
--muted: oklch(0.97 0 0)                /* Light gray */
--accent: oklch(0.97 0 0)               /* Light gray */
--border: oklch(0.922 0 0)              /* Light border */
--radius: 0.625rem                      /* 10px */
```

#### Dark Theme
```css
--background: #0a0a0a                   /* Near black */
--foreground: oklch(0.985 0 0)          /* Near white */
--primary: oklch(0.985 0 0)             /* Near white */
--secondary: oklch(0.269 0 0)           /* Dark gray */
--muted: oklch(0.269 0 0)               /* Dark gray */
--accent: oklch(0.269 0 0)              /* Dark gray */
--border: oklch(0.269 0 0)              /* Dark border */
```

### Semantic Colors
- **Destructive:** Red tones for errors
- **Chart Colors:** 5 distinct colors for data visualization
- **Sidebar Colors:** Dedicated sidebar theming

---

## Custom Animations

### Breakpoints
```css
--breakpoint-xs: 600px
--breakpoint-sm: 650px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
```

### Animation Definitions

#### 1. **Appear**
```css
@keyframes appear {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### 2. **Shimmer**
```css
@keyframes shimmer {
  from { background-position: 0 0; }
  to { background-position: -200% 0; }
}
```

#### 3. **Shine**
```css
@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

#### 4. **Slow Spin**
```css
@keyframes slow-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## Design Philosophy

### Key Characteristics

1. **Minimalist & Clean**
   - Subtle borders and spacing
   - Focus on content over decoration
   - Neutral color palette

2. **Interactive Feedback**
   - Hover effects on all interactive elements
   - Smooth transitions (300ms standard)
   - Visual feedback for active states

3. **Modern Aesthetics**
   - Glass morphism effects
   - Spotlight hover effects
   - Gradient accents
   - Smooth animations

4. **Accessibility First**
   - Radix UI primitives for a11y
   - Semantic HTML
   - Keyboard navigation support
   - Screen reader friendly

5. **Dark Mode Priority**
   - Default to dark mode
   - Full dark theme support
   - System preference detection

6. **Performance Optimized**
   - Lazy loading for videos
   - Intersection Observer for visibility
   - Optimized animations
   - Efficient re-renders

---

## Component Patterns

### Button Variants
- `default` - Primary action
- `destructive` - Dangerous actions
- `outline` - Secondary actions
- `secondary` - Tertiary actions
- `ghost` - Minimal styling
- `link` - Text link styling

### Button Sizes
- `default` - h-10 px-4 py-2
- `sm` - h-9 px-3
- `lg` - h-11 px-8
- `icon` - h-10 w-10

---

## External Resources

### Image Domains
Configured in `next.config.ts`:
- `images.unsplash.com` - Stock images
- `videos.pexels.com` - Stock videos

---

## Summary

This portfolio uses a modern, minimalist design system built on:
- **Next.js 15** with React 19
- **Tailwind CSS v4** for utility-first styling
- **shadcn/ui** for base components
- **Framer Motion** for animations
- **Three icon libraries** (Lucide, React Icons, Tabler)
- **OKLCH color space** for perceptual uniformity
- **Geist fonts** for clean typography
- **Dark mode first** approach
- **Glass morphism** and **spotlight effects**
- **Accessible** Radix UI primitives

The design emphasizes **interactivity**, **smooth transitions**, and **modern aesthetics** while maintaining **accessibility** and **performance**.
