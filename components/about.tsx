"use client"

import { motion } from "motion/react"
import { Code2, Lightbulb, Rocket, Target } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { fadeInLeft, fadeInRight } from "@/lib/motion-config"

const highlights = [
  {
    icon: Code2,
    title: "Product-Minded Engineer",
    description: "I don't just write code—I build solutions that solve real problems and create value for users.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Constantly exploring new technologies and approaches to build better, more efficient systems.",
  },
  {
    icon: Rocket,
    title: "Fast Execution",
    description: "Shipping quality products quickly with modern tools like Next.js, NestJS, and cloud infrastructure.",
  },
  {
    icon: Target,
    title: "User-Centered",
    description: "Every technical decision is made with the end user in mind, ensuring the best possible experience.",
  },
]

export function About() {
  return (
    <section id="about" className="w-full pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Passionate about building great software and solving complex problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInLeft}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-foreground">Building Software, Solving Problems</h3>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student at <span className="text-foreground font-semibold">St. John's University</span> (GPA: 3.6/4.0, Expected Dec 2026) with a passion for creating elegant solutions to complex problems. My journey in software engineering has been driven by curiosity and a desire to build products that make a real impact.
              </p>
              <p>
                Currently, I'm working at <span className="text-primary font-semibold">Momen Technologies</span> as a Software Engineer, where I'm fine-tuning LLMs with LoRA, implementing RAG systems with LangChain and Pinecone, and building scalable cross-platform applications with React Native and Firebase that serve 500+ concurrent users.
              </p>
              <p>
                I'm <span className="text-foreground font-semibold">AWS Certified Solutions Architect - Associate</span> (Feb 2025) with expertise in AI/ML, full-stack development, and cloud infrastructure. My experience spans building secure authentication systems, real-time features, API integrations, and deploying scalable backends on AWS.
              </p>
              <p className="text-foreground font-medium text-lg">
                I'm seeking SWE internship or full-time opportunities where I can contribute to meaningful projects, solve complex problems, and deliver end-to-end solutions that create real value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInRight}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <GlassCard>
                  <div>
                    <highlight.icon className="w-10 h-10 text-primary mb-4" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-foreground">{highlight.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">{highlight.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
