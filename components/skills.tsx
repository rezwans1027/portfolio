"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { hoverScale } from "@/lib/motion-config"

// Wave stagger animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
}

const categoryVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 250, damping: 20, duration: 0.3 }
  }
}

const skillBadgeVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 20, duration: 0.2 }
  }
}

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Nest.js", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS RDS", "AWS Lambda", "AWS S3", "Docker", "GitHub"],
  },
  {
    title: "AI / ML",
    skills: ["RAG", "LLM Fine-Tuning", "LoRA/QLoRA", "LangChain", "Pinecone", "Prompt Engineering"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Supabase", "Appwrite", "Sentry", "Postman", "Jira", "VS Code", "OpenAI", "Hugging Face"],
  },
]

function SkillBadge({ skill, categoryIndex, skillIndex }: { skill: string; categoryIndex: number; skillIndex: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.span
      key={skill}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: categoryIndex * 0.1 + skillIndex * 0.03,
        duration: 0.2
      }}
      whileHover={{
        scale: 1.1,
        y: -4,
        transition: { duration: 0.08, delay: 0 }
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium cursor-default transition-colors duration-75 ${
        isHovered ? 'skill-badge-hover' : ''
      }`}
    >
      {skill}
    </motion.span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="w-full pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technical Skills"
          subtitle="A comprehensive toolkit for building modern, scalable, and performant applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: categoryIndex * 0.1,
                duration: 0.4
              }}
            >
              <GlassCard>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      categoryIndex={categoryIndex}
                      skillIndex={skillIndex}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
