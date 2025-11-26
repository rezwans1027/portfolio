"use client"

import { MotionConfig } from "framer-motion"
import { ReactNode } from "react"

export function MotionWrapper({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      }}
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  )
}
