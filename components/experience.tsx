"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "IPG Health",
    position: "Software Engineering Intern",
    period: "Summer 2024",
    location: "Remote",
    description: "Built task management calendar for internal dashboard, improving workflow clarity for 30+ employees.",
    achievements: [
      "Developed interactive calendar component using React and TypeScript",
      "Integrated with backend API for real-time task synchronization",
      "Improved team productivity by 25% through streamlined task visualization",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "ML4Fin Research Lab",
    position: "Machine Learning Intern",
    period: "Spring 2024",
    location: "University",
    description: "Researched and implemented ML models for financial data analysis and prediction.",
    achievements: [
      "Developed predictive models for stock price analysis using Python and TensorFlow",
      "Processed and analyzed large financial datasets with pandas and NumPy",
      "Presented research findings to faculty and industry partners",
    ],
    tech: ["Python", "TensorFlow", "Pandas", "NumPy", "Jupyter"],
  },
  {
    company: "Freelance Development",
    position: "Full Stack Developer",
    period: "2023 - Present",
    location: "Remote",
    description: "Building custom web applications and SaaS products for clients across various industries.",
    achievements: [
      "Delivered 10+ successful projects with 100% client satisfaction",
      "Specialized in Next.js, NestJS, and cloud deployment solutions",
      "Implemented payment integrations using Stripe and Plaid",
    ],
    tech: ["Next.js", "NestJS", "AWS", "Stripe", "MongoDB"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent gradient-animate" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(271, 76%, 63%), hsl(280, 90%, 70%), hsl(271, 76%, 53%), hsl(var(--foreground)))' }}>
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across different domains and technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-border md:before:left-1/2"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={item}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content */}
              <div className="md:w-1/2 ml-16 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="glass-card rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
