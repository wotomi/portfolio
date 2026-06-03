# Portfolio - Subhadip

A modern, minimalist portfolio website built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- **Modern Design System**: Built following the REPORT.md specifications
- **Dark Mode**: Default dark theme with system preference detection
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Components**: Spotlight cards with mouse-tracking effects
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Server-side rendering with Next.js 16

## Tech Stack

- **Framework**: Next.js 16.2.7 with React 19.2.4
- **Styling**: Tailwind CSS v4 with custom OKLCH color system
- **Animations**: Framer Motion v12.5.0
- **Icons**: Lucide React, React Icons, Tabler Icons
- **UI Components**: Custom components with Radix UI primitives
- **Typography**: Geist Sans & Geist Mono fonts
- **Theme**: next-themes for dark/light mode switching

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── navbar.tsx          # Navigation with glass morphism
│   ├── theme-provider.tsx  # Theme context provider
│   ├── ui/                 # Base UI components
│   │   ├── button.tsx
│   │   ├── spotlight-card.tsx
│   │   └── tooltip.tsx
│   └── sections/           # Page sections
│       ├── hero.tsx
│       ├── about.tsx
│       ├── skills.tsx
│       ├── work.tsx
│       ├── journey.tsx
│       ├── notes.tsx
│       ├── lab.tsx
│       ├── library.tsx
│       └── contact.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Sections

1. **Hero**: Introduction with animated headline and CTAs
2. **About**: Personal introduction and journey
3. **Skills & Stack**: Technology stack with branded icons
4. **Selected Work**: Project portfolio with spotlight cards
5. **Journey**: Experience timeline
6. **Notes**: Blog/article cards
7. **Lab**: Experiments and side projects
8. **Library**: Currently reading and research interests
9. **Contact**: Social links and contact information

## Customization

### Update Personal Information

- `components/sections/hero.tsx` - Update headline, subheadline, and status
- `components/sections/about.tsx` - Update your bio
- `components/sections/skills.tsx` - Update your tech stack
- `components/sections/work.tsx` - Add your projects
- `components/sections/journey.tsx` - Update your work experience
- `components/sections/contact.tsx` - Update your email and social links

### Update Colors

Colors are defined in `app/globals.css` using OKLCH color space.

### Update Metadata

Edit `app/layout.tsx` to update SEO metadata.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
