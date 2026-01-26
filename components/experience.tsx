"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { MapPin } from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    company: "Momen Technologies",
    position: "Software Engineer",
    period: "May 2025 - Present",
    location: "Orlando, FL (Remote)",
    achievements: [
      "Built LLM-powered knowledge assistant, cutting latency by 40%",
      "Developed React Native app with Firebase Auth for 500+ users",
      "Implemented real-time AI chat with sub-200ms response times",
    ],
    tech: ["React Native", "Firebase", "LLM", "TypeScript", "NestJS"],
  },
  {
    company: "Momen Technologies",
    position: "Software Engineer",
    period: "Feb 2025 - May 2025",
    location: "Orlando, FL (Remote)",
    achievements: [
      "Fine-tuned DeepSeek-Chat 7B with LoRA, +30% relevance",
      "Built RAG pipeline with LangChain + Pinecone",
      "Deployed NestJS on AWS EC2, -35% response times",
    ],
    tech: ["NestJS", "LangChain", "MongoDB", "Pinecone", "AWS"],
  },
  {
    company: "NEW EIC",
    position: "Software Engineering Intern",
    period: "Dec 2024 - Mar 2025",
    location: "Boston, MA (Remote)",
    achievements: [
      "Built interview platform with AWS S3, 3x faster retrieval",
      "Architected RBAC system with approval workflows",
    ],
    tech: ["MongoDB", "AWS S3", "Node.js", "TypeScript"],
  },
  {
    company: "Institute for ML",
    position: "Software Engineering Intern",
    period: "Sep 2024 - Dec 2024",
    location: "Queens, NY",
    achievements: [
      "Developed AWS infrastructure, +40% scalability",
      "Built time series models for financial analytics",
    ],
    tech: ["Java", "AWS EC2", "AWS RDS", "AWS Lambda"],
  },
]

export function Experience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={sectionRef} id="experience" className="py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
            <span className="section-number">03</span>
            <span className="text-muted-foreground uppercase tracking-widest">
              Career
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-foreground"
          >
            Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary"
            />
          </div>

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 500, delay: index * 0.1 }}
                  className="absolute left-0 md:left-4 top-0 w-2 h-2 bg-primary -translate-x-1/2 mt-2"
                />

                {/* Card */}
                <div className="card-brutal p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground uppercase tracking-tight">
                        {exp.position}
                      </h3>
                      <p className="text-primary font-medium text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground">
                      <span className="text-xs uppercase tracking-wider">{exp.period}</span>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="text-primary mt-1">→</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-border">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="skill-badge px-3 py-1 bg-transparent text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
