"use client"

import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"
import { fadeInUp, defaultViewport } from "@/lib/motion-config"

interface FadeInViewProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  duration?: number
  viewport?: typeof defaultViewport
}

export function FadeInView({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  duration = 0.5,
  viewport = defaultViewport,
}: FadeInViewProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
