"use client"

import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  category: string
}

const projects: Project[] = [
  {
    title: "DriveLeads",
    description: "Multi-tenant lead management platform with secure row-level access controls, automated intake pipeline, and real-time analytics.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
    github: "#",
    demo: "#",
    category: "Full Stack",
  },
  {
    title: "Horizon",
    description: "Financial web app using Plaid for bank linking and Dwolla for secure transfers with real-time error tracking via Sentry.",
    tech: ["React", "Next.js", "Plaid", "Dwolla"],
    github: "#",
    demo: "#",
    category: "FinTech",
  },
  {
    title: "LLM Assistant",
    description: "LLM-powered knowledge assistant with context-aware responses, 40% latency reduction, scaling to 10K+ daily queries.",
    tech: ["React Native", "Firebase", "NestJS", "LLM"],
    github: "#",
    demo: "#",
    category: "AI/Mobile",
  },
  {
    title: "ReceiptRanger",
    description: "Expense management with bank integration, rule-based verification, and RBAC for approval workflows.",
    tech: ["React", "Express", "Supabase", "Plaid"],
    github: "https://github.com/rezwans1027/RecieptRangerBackend",
    demo: "#",
    category: "Enterprise",
  },
  {
    title: "DevOverflow",
    description: "Q&A platform for coding questions with recommendation system, real-time voting, and optimized search.",
    tech: ["Next.js", "MongoDB", "Clerk", "React"],
    github: "https://github.com/rezwans1027/stackOverflowClone",
    demo: "#",
    category: "Community",
  },
  {
    title: "Goodeats",
    description: "Restaurant app with menu search, checkout flow, and admin panel. Optimized images and payment processing.",
    tech: ["Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/rezwans1027/GoodEats-Backend",
    demo: "#",
    category: "E-Commerce",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse position for tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation
  const springConfig = { stiffness: 150, damping: 15 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)

  // Shine effect position
  const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig)
  const shineY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group cursor-default"
    >
      <motion.div
        className="card-brutal p-6 h-full relative overflow-hidden"
        whileHover={{ borderColor: "hsl(var(--primary))" }}
      >
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${shineX}% ${shineY}%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-primary/0 border-l-transparent"
          whileHover={{ borderTopColor: "hsl(var(--primary) / 0.3)" }}
          transition={{ duration: 0.2 }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div>
            <motion.span
              className="section-number"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
            <span className="text-muted-foreground uppercase tracking-wider text-xs ml-2">
              {project.category}
            </span>
          </div>
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 45, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3
          className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors relative z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm relative z-10">
          {project.description}
        </p>

        {/* Tech stack with staggered animation */}
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              whileHover={{
                y: -2,
                transition: { duration: 0.15 }
              }}
              className="skill-badge px-3 py-1.5 bg-transparent text-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 pt-4 border-t-2 border-border relative z-10">
          {project.github !== "#" ? (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Github className="w-4 h-4" />
              </motion.div>
              <span className="link-underline">Code</span>
            </Link>
          ) : (
            <span className="flex items-center gap-2 text-muted-foreground/40 cursor-not-allowed">
              <Github className="w-4 h-4" />
              <span>Private</span>
            </span>
          )}
          <span className="flex items-center gap-2 text-muted-foreground/40 cursor-not-allowed">
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </span>
        </div>

        {/* Animated border glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="pt-8 pb-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              className="marker-line"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <span className="section-number">01</span>
            <span className="text-muted-foreground uppercase tracking-widest">
              Selected Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-foreground"
          >
            Projects
          </motion.h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
