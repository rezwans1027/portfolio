import { Transition } from "framer-motion"

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
