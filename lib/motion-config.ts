import { Transition, Variants } from "motion/react"

// Optimized default transition for better performance
export const defaultTransition: Transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
}

// Fast transition for interactive elements
export const fastTransition: Transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.15,
}

// Smooth transition for section reveals
export const smoothTransition: Transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.4,
}

// Reduce motion preference check
export const reduceMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

// Shared Animation Variants

// Fade in from bottom with configurable offset
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

// Simple fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

// Fade in with scale
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
}

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
}

// Container with stagger effect - configurable delays
export const staggerContainer = (
  staggerDelay = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
})

// Common viewport settings
export const defaultViewport = {
  once: true,
  margin: "0px 0px -100px 0px",
}

// Common hover animations
export const hoverScale = {
  scale: 1.05,
}

export const hoverScaleSubtle = {
  scale: 1.02,
}

export const hoverX = {
  x: 4,
}
