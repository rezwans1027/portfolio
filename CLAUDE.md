# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A portfolio website built with Next.js 15 (App Router), TypeScript, and Tailwind CSS, featuring Apple-inspired UI design with smooth animations and glassmorphism effects.

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Core Structure

- **App Router**: Uses Next.js 15 App Router (`app/` directory)
- **Single Page App**: Main page (`app/page.tsx`) composes six section components in order: Hero, Projects, Skills, Experience, About, Contact
- **Layout**: Root layout (`app/layout.tsx`) provides theme infrastructure and global navigation

### Theme System

The theme system is built on CSS variables defined in `app/globals.css`:

- **Light/Dark Modes**: Controlled via next-themes with `defaultTheme="dark"`
- **Color Tokens**: Uses HSL-based CSS variables (e.g., `--background`, `--foreground`, `--primary`)
- **Design System**: Purple accent color (`271 76% 53%`) across both themes
- **Backgrounds**: Animated radial gradients in dark mode (`moving-lights` animation)

To modify colors, edit the CSS variables in `app/globals.css` under `:root` (light) and `.dark` (dark mode).

### Animation System

All animations are configured through Framer Motion:

- **Global Config**: `MotionWrapper` component sets default transition settings (0.3s ease-in-out)
- **Respects User Preferences**: `reducedMotion="user"` honors prefers-reduced-motion
- **Custom Animations**: Glass effect animations, pulse effects, gradient flows defined in globals.css

### Styling Patterns

**Glassmorphism Effects**:
- `.glass` - Basic glass effect with backdrop blur
- `.glass-strong` - Enhanced glass with stronger blur and shadows
- `.glass-card` - Card variant with subtle shadows

**Custom Utilities**:
- `.btn-shiny` - Buttons with shine-on-hover effect
- `.card-glossy` - Cards with glossy overlay and hover glow
- `.gradient-animate` - Animated gradient backgrounds

All custom classes are defined in the `@layer utilities` section of `app/globals.css`.

### Client vs Server Components

- **Server Components (default)**: Main page layout, static sections
- **Client Components** (`"use client"`): ThemeProvider, MotionWrapper, Navbar, ThemeToggle, and all interactive section components (hero, projects, skills, experience, about, contact)

### Import Paths

Uses TypeScript path alias `@/*` mapping to repository root:
```typescript
import { Hero } from "@/components/hero"
import { cn } from "@/lib/utils"
```

### Component Patterns

**Section Components** follow this pattern:
- Export named component function (not default)
- Wrapped with `motion.section` from framer-motion
- Include `id` attribute for navigation anchor links
- Use semantic HTML with ARIA attributes where needed

**Utilities**:
- `lib/utils.ts` exports `cn()` helper for conditional Tailwind classes (combines clsx + tailwind-merge)

## Customization Workflow

To personalize the portfolio:

1. **Hero Section**: Name, title, tagline, CTA buttons in `components/hero.tsx`
2. **Projects**: Update projects array in `components/projects.tsx` (each project has title, description, tech stack, links)
3. **Skills**: Modify skill categories array in `components/skills.tsx`
4. **Experience**: Edit experiences array in `components/experience.tsx`
5. **About**: Personal background text in `components/about.tsx`
6. **Contact**: Social links in `components/contact.tsx`
7. **Metadata**: Update SEO metadata in `app/layout.tsx`
8. **Colors**: Adjust theme colors via CSS variables in `app/globals.css`

## Technical Details

- **TypeScript**: Strict mode enabled, target ES2017
- **Node Requirements**: Node.js 18.17+
- **Fonts**: Inter from Google Fonts (configured in layout.tsx)
- **Icons**: lucide-react icon library
- **Scrolling**: Smooth scroll enabled, sections offset by 100px for fixed navbar
- **Performance**: Hardware acceleration applied to animations, optimized backdrop filters
