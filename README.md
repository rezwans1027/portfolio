# Portfolio Website

A beautiful, responsive portfolio website built with Next.js, featuring Apple.com-inspired UI principles and smooth animations.

## Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for fluid, professional animations
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Looks great on all devices
- **Apple-Inspired UI**: Clean, minimalist design following Apple's design principles
- **Performance Optimized**: Fast loading times and smooth interactions

## Color Scheme

- **Dark Mode**: Black background with purple accents
- **Light Mode**: White background with purple accents

## Sections

1. **Hero**: Eye-catching introduction with name, tagline, and CTA buttons
2. **Projects**: Showcase of 6 featured projects with tech stacks and links
3. **Skills**: Organized display of technical skills by category
4. **Experience**: Timeline of work experience and internships
5. **About**: Personal background and what I'm looking for
6. **Contact**: Easy ways to get in touch (Email, LinkedIn, GitHub)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Customization

To customize the portfolio with your own information:

1. **Personal Info**: Update the hero section in `components/hero.tsx`
2. **Projects**: Modify the projects array in `components/projects.tsx`
3. **Skills**: Update skill categories in `components/skills.tsx`
4. **Experience**: Edit experiences in `components/experience.tsx`
5. **About**: Personalize the about section in `components/about.tsx`
6. **Contact**: Update social links in `components/contact.tsx`
7. **Colors**: Adjust the color scheme in `app/globals.css`

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles and theme colors
├── components/
│   ├── hero.tsx         # Hero section
│   ├── projects.tsx     # Projects showcase
│   ├── skills.tsx       # Skills display
│   ├── experience.tsx   # Work experience
│   ├── about.tsx        # About section
│   ├── contact.tsx      # Contact section
│   ├── navbar.tsx       # Navigation header
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx # Dark/light mode toggle
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
\`\`\`

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with Next.js, Tailwind CSS, and Framer Motion.
