"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "Expo", "React Native"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "Supabase", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS S3", "AWS EC2", "Docker", "GitHub Actions"],
  },
  {
    title: "AI / ML",
    skills: ["RAG", "Pinecone", "LLM Integration", "LangChain", "Llama", "DeepSeek"],
  },
  {
    title: "Tools & Services",
    skills: ["Git", "Stripe", "Plaid", "Firebase Auth", "Prisma", "Mongoose"],
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
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent gradient-animate" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(271, 76%, 63%), hsl(280, 90%, 70%), hsl(271, 76%, 53%), hsl(var(--foreground)))' }}>
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="glass-card rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-200"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 glass text-foreground rounded-xl text-sm font-medium cursor-default hover:bg-primary/10 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
