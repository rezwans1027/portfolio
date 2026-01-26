"use client"

import { motion } from "motion/react"

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
    title: "Cloud",
    skills: ["AWS EC2", "AWS RDS", "AWS Lambda", "AWS S3", "Docker", "GitHub"],
  },
  {
    title: "AI/ML",
    skills: ["RAG", "LLM Fine-Tuning", "LoRA/QLoRA", "LangChain", "Pinecone"],
  },
  {
    title: "Tools",
    skills: ["Supabase", "Appwrite", "Sentry", "Postman", "OpenAI", "HuggingFace"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
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
            <span className="section-number">02</span>
            <span className="text-muted-foreground uppercase tracking-widest">
              Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-foreground"
          >
            Skills
          </motion.h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="border-2 border-border p-6 h-full hover:border-primary transition-colors duration-150">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="section-number">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground uppercase tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                        duration: 0.3
                      }}
                      whileHover={{
                        backgroundColor: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                        borderColor: "hsl(var(--primary))"
                      }}
                      className="skill-badge px-4 py-2 bg-transparent cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
