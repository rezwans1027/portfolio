"use client"

import { motion } from "motion/react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className={`card-brutal p-6 h-full ${isHovered ? "border-primary" : ""}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-muted-foreground uppercase tracking-wider text-xs ml-2">
              {project.category}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="skill-badge px-3 py-1.5 bg-transparent text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 pt-4 border-t-2 border-border">
          {project.github !== "#" ? (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
            >
              <Github className="w-4 h-4" />
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
      </div>
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
            <div className="marker-line" />
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
