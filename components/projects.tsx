"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Sheikh AI",
    description: "AI-powered platform with RAG implementation using Pinecone and LLMs for intelligent document processing and natural language understanding.",
    tech: ["Next.js", "NestJS", "Pinecone", "LangChain", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    title: "DriveLeads",
    description: "SaaS platform for lead generation and management with real-time analytics, automated workflows, and CRM integrations.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "FinTech Dashboard",
    description: "Financial analytics dashboard with real-time market data visualization, portfolio tracking, and ML-powered predictions.",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management platform with calendar integration, team analytics, and automated reporting features.",
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Stripe integration, inventory management, and real-time order tracking.",
    tech: ["Next.js", "NestJS", "Stripe", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics platform for social media metrics with sentiment analysis, trend prediction, and automated reporting.",
    tech: ["React", "FastAPI", "MongoDB", "Docker", "AWS Lambda"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent gradient-animate" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(271, 76%, 63%), hsl(280, 90%, 70%), hsl(271, 76%, 53%), hsl(var(--foreground)))' }}>
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development,
            AI integration, and product design.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group relative glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-200"
            >
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <Link href={project.github}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>
                  </Link>
                  <Link href={project.demo}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-150"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
