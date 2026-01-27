"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

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

function SkillBadge({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: delay * 0.6,
        duration: 0.25,
        type: "spring",
        stiffness: 150,
      }}
      className="skill-badge px-4 py-2 bg-transparent cursor-default relative overflow-hidden group/skill"
    >
      {/* Animated background on hover */}
      <motion.span
        className="absolute inset-0 bg-primary/0 group-hover/skill:bg-primary transition-colors duration-200"
        initial={false}
      />
      <span className="relative z-10 group-hover/skill:text-primary-foreground transition-colors duration-200">
        {skill}
      </span>
    </motion.span>
  )
}

function SkillCategory({ category, categoryIndex }: { category: typeof skillCategories[0]; categoryIndex: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.25, delay: categoryIndex * 0.06 }}
      className="group"
    >
      <motion.div
        className="border-2 border-border p-6 h-full relative overflow-hidden"
        whileHover={{ borderColor: "hsl(var(--primary))" }}
        transition={{ duration: 0.15 }}
      >
        {/* Animated corner decoration */}
        <motion.div
          className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rotate-45"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: categoryIndex * 0.06 + 0.15, duration: 0.25 }}
        />

        {/* Category header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.span
            className="section-number"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: categoryIndex * 0.06 + 0.1 }}
          >
            {String(categoryIndex + 1).padStart(2, "0")}
          </motion.span>
          <motion.h3
            className="text-xl font-semibold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: categoryIndex * 0.06 + 0.12 }}
          >
            {category.title}
          </motion.h3>
        </div>

        {/* Skills with wave animation */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <SkillBadge
              key={skill}
              skill={skill}
              delay={categoryIndex * 0.06 + skillIndex * 0.03 + 0.15}
            />
          ))}
        </div>

        {/* Animated line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-primary"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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

          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
