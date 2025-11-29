"use client"

import { motion } from "motion/react"
import { fadeInUp } from "@/lib/motion-config"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-20 ${className}`}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
