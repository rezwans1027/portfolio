"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { MapPin, Briefcase } from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    company: "Momen Technologies",
    position: "Full-Stack Software Engineer",
    period: "Aug 2025 - Present",
    location: "Orlando, FL (Remote)",
    achievements: [
      "Built DriveLead, a multi-tenant CRM managing 10,000+ leads with 30+ REST APIs and row-level security",
      "Developed agentic AI system automating sales tasks, reducing manual workflows by 60%",
      "Implemented CI/CD with GitHub Actions, cutting build times by 60% with 85%+ code coverage",
      "Designed AI deal risk prediction engine analyzing 10+ signals with 85% accuracy",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "GitHub Actions", "AI"],
    current: true,
  },
  {
    company: "Momen Technologies",
    position: "Mobile Software Engineer",
    period: "Feb 2025 - Aug 2025",
    location: "Orlando, FL (Remote)",
    achievements: [
      "Developed React Native app with real-time multiplayer, 500+ concurrent matches with sub-100ms latency",
      "Built LLM-powered knowledge assistant scaling to 10K+ queries/day with 40% latency reduction",
      "Implemented RAG pipeline indexing 10K+ documents, reducing hallucinations by 35%",
    ],
    tech: ["React Native", "WebSockets", "LangChain", "Pinecone", "LLM"],
    current: false,
  },
  {
    company: "NEW EIC",
    position: "Software Engineering Intern",
    period: "Dec 2024 - Mar 2025",
    location: "Boston, MA (Remote)",
    achievements: [
      "Developed interview management platform with MongoDB and AWS S3, 3x faster retrieval",
      "Architected strategy management system with RBAC, reducing approval time by 40%",
      "Implemented full-text search indexing 50K+ records with Elasticsearch",
    ],
    tech: ["MongoDB", "AWS S3", "Elasticsearch", "Node.js"],
    current: false,
  },
  {
    company: "Institute for Machine Learning",
    position: "Software Engineering Intern",
    period: "Sep 2024 - Dec 2024",
    location: "Queens, NY",
    achievements: [
      "Architected AWS infrastructure with auto-scaling, supporting 2x traffic growth",
      "Developed time series forecasting models processing 500K+ data points in Java",
      "Designed automated data pipelines from 5+ external APIs, reducing bad records by 50%",
    ],
    tech: ["Java", "AWS EC2", "AWS RDS", "AWS Lambda"],
    current: false,
  },
]

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="relative pl-8 md:pl-16 group"
    >
      {/* Timeline dot with pulse effect for current role */}
      <motion.div
        className="absolute left-0 md:left-4 top-0 -translate-x-1/2 mt-2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 500, delay: index * 0.08 }}
      >
        <div className={`w-3 h-3 ${exp.current ? 'bg-primary' : 'bg-muted-foreground/50'}`}>
          {exp.current && (
            <motion.div
              className="absolute inset-0 bg-primary"
              animate={{
                scale: [1, 2, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        className="card-brutal p-6 relative overflow-hidden group-hover:border-primary transition-colors"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Current role indicator */}
        {exp.current && (
          <motion.div
            className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider"
            initial={{ x: 100 }}
            animate={isInView ? { x: 0 } : { x: 100 }}
            transition={{ delay: index * 0.08 + 0.15 }}
          >
            Current
          </motion.div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-1"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.08 + 0.05 }}
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <h3 className="text-xl font-semibold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                {exp.position}
              </h3>
            </motion.div>
            <motion.p
              className="text-primary font-medium text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.08 + 0.08 }}
            >
              {exp.company}
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col items-start md:items-end gap-1 text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: index * 0.08 + 0.1 }}
          >
            <span className="text-xs uppercase tracking-wider font-medium">{exp.period}</span>
            <span className="flex items-center gap-1 text-xs">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </motion.div>
        </div>

        {/* Achievements with staggered animation */}
        <div className="space-y-2 mb-4">
          {exp.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ delay: index * 0.08 + i * 0.04 + 0.12 }}
              className="flex items-start gap-3 text-sm group/item"
            >
              <motion.span
                className="text-primary mt-1"
                whileHover={{ x: 3 }}
              >
                →
              </motion.span>
              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                {achievement}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-border">
          {exp.tech.map((tech) => (
            <span
              key={tech}
              className="skill-badge px-3 py-1 bg-transparent text-xs hover:-translate-y-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export function Experience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={sectionRef} id="experience" className="py-32 px-6 lg:px-8">
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
            <motion.div
              className="marker-line"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
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

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl"
          >
            Building impactful software across startups and research institutions
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line background */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-border" />

          {/* Animated timeline progress */}
          <motion.div
            className="absolute left-0 md:left-4 top-0 w-0.5 bg-primary origin-top"
            style={{ height: lineHeight }}
          />

          {/* Experience items */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.period}`}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
