"use client"

import { motion } from "framer-motion"
import { ReactNode, ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { hoverScaleSubtle, fastTransition } from "@/lib/motion-config"

export type ButtonVariant = "primary" | "secondary" | "ghost"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  shiny?: boolean
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
  secondary: "glass-strong text-foreground",
  ghost: "hover:bg-secondary",
}

export function AnimatedButton({
  children,
  variant = "primary",
  shiny = true,
  className = "",
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={fastTransition}
      className={cn(
        "px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200",
        shiny && "btn-shiny",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
