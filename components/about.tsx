"use client"

import { motion } from "motion/react"
import { Award, GraduationCap, Cpu, Zap } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "AWS Certified",
    description: "Solutions Architect Associate",
  },
  {
    icon: GraduationCap,
    title: "CS Student",
    description: "St. John's University, 3.6 GPA",
  },
  {
    icon: Cpu,
    title: "AI Specialist",
    description: "LLM fine-tuning & RAG systems",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Ship quality products quickly",
  },
]

export function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-card">
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
            <span className="section-number">04</span>
            <span className="text-muted-foreground uppercase tracking-widest">
              Background
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-foreground"
          >
            About
          </motion.h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student at{" "}
              <span className="text-foreground">St. John's University</span>{" "}
              (3.6 GPA, Dec 2026) passionate about building elegant solutions to complex problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently at{" "}
              <span className="text-primary">Momen Technologies</span>{" "}
              fine-tuning LLMs with LoRA, implementing RAG systems with LangChain and Pinecone, and building scalable cross-platform applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground">AWS Certified Solutions Architect</span>{" "}
              with expertise in AI/ML, full-stack development, and cloud infrastructure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-border">
              {[
                { value: "3.6", label: "GPA" },
                { value: "10+", label: "Projects" },
                { value: "500+", label: "Users" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-semibold text-primary tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="border-2 border-border p-6 h-full hover:border-primary transition-colors duration-150 group">
                  <highlight.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-foreground uppercase tracking-tight mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
