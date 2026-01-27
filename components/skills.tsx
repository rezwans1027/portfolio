"use client"

import { motion } from "motion/react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["React", "React Native", "Next.js", "Node.js", "Express", "NestJS", "TailwindCSS", "Socket.IO"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Appwrite", "Redis", "Elasticsearch"],
  },
  {
    title: "AI / ML",
    skills: ["NLP", "Prompt Engineering", "RAG", "Agentic AI", "LangChain", "Pinecone", "Hugging Face"],
  },
  {
    title: "Cloud & CI/CD",
    skills: ["AWS", "Docker", "GitHub Actions", "Jest", "Vitest", "Playwright"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jira", "Postman", "Sentry"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-card">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
