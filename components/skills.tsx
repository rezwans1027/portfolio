"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { hoverScale } from "@/lib/motion-config"

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

export function Skills() {
  return (
    <section id="skills" className="w-full pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technical Skills"
          subtitle="A comprehensive toolkit for building modern, scalable, and performant applications."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <GlassCard key={category.title}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={hoverScale}
                    transition={{ duration: 0.2 }}
                    className="px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium cursor-default hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
