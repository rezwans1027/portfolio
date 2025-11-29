import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  glossy?: boolean
  hover?: boolean
}

export function GlassCard({
  children,
  className = "",
  glossy = true,
  hover = true
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl p-8",
        glossy && "card-glossy",
        hover && "hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  )
}
