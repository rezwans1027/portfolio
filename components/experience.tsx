"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { staggerContainer, fadeIn } from "@/lib/motion-config"

const experiences = [
  {
    company: "Momen Technologies",
    position: "Software Engineer",
    period: "May 2025 - Present",
    location: "Orlando, FL (Remote)",
    description: "Building AI-powered mobile and web applications with React Native, Firebase, and LLM integrations.",
    achievements: [
      "Built an LLM-powered knowledge assistant with context-aware responses, cutting latency by 40% and scaling to 10K+ queries/day",
      "Developed a React Native mobile app with Firebase Authentication, reducing login time by 30% and supporting 500+ concurrent users",
      "Implemented a real-time AI chat interface with smooth animations and persistent sessions, enabling sub-200ms response times",
    ],
    tech: ["React Native", "Firebase", "LLM", "TypeScript", "NestJS"],
  },
  {
    company: "Momen Technologies",
    position: "Software Engineer",
    period: "Feb 2025 - May 2025",
    location: "Orlando, FL (Remote)",
    description: "Developed and deployed AI systems with LLM fine-tuning, RAG pipelines, and scalable backend infrastructure.",
    achievements: [
      "Fine-tuned DeepSeek-Chat 7B with LoRA, improving response relevance by 30% and reducing memory and training time by 40%",
      "Built a RAG pipeline with LangChain, MongoDB, and Pinecone, boosting factual accuracy by 20% and reducing hallucinations",
      "Deployed a scalable NestJS backend on AWS EC2, reducing API response times by 35% through optimized load balancing and efficient request handling",
    ],
    tech: ["NestJS", "LangChain", "MongoDB", "Pinecone", "AWS EC2", "LoRA"],
  },
  {
    company: "NEW EIC",
    position: "Software Engineering Intern",
    period: "Dec 2024 - Mar 2025",
    location: "Boston, MA (Remote)",
    description: "Architected enterprise management platforms with cloud storage, RBAC, and real-time collaboration features.",
    achievements: [
      "Built a scalable interview management platform with cloud storage using MongoDB and AWS S3, achieving 3x faster retrieval and 70% lower storage usage",
      "Architected a strategy management system with RBAC, real-time collaboration, and approval workflows, reducing approval time by 40%",
    ],
    tech: ["MongoDB", "AWS S3", "Node.js", "TypeScript"],
  },
  {
    company: "Institute for Machine Learning",
    position: "Software Engineering Intern",
    period: "Sep 2024 - Dec 2024",
    location: "Queens, NY",
    description: "Built cloud infrastructure and time series models for real-time financial analytics on AWS.",
    achievements: [
      "Developed AWS infrastructure (EC2, RDS, Lambda) to improve scalability and system performance",
      "Increased scalability by 40% and reduced data processing time by 25% through cloud infrastructure optimizations",
      "Built time series models in Java, integrated econometric modules, and deployed real-time financial analytics",
    ],
    tech: ["Java", "AWS EC2", "AWS RDS", "AWS Lambda", "Python"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="Building impactful solutions across different domains and technologies."
        />

        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={fadeIn}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-2 md:-translate-x-2 z-10" />

                {/* Content - alternating sides on desktop */}
                <div className={`ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}>
                  {/* Card */}
                  <GlassCard
                    className={`${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}`}
                  >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{exp.position}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Briefcase className="w-7 h-7 text-primary flex-shrink-0 ml-4" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-border">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-base text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2.5 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  </GlassCard>

                  {/* Empty spacer for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
