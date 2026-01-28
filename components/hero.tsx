"use client"

import { motion, useScroll, useTransform, animate } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v) => setDisplayValue(Math.floor(v)),
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-5xl font-semibold text-primary tracking-tighter">
      {displayValue.toString().padStart(2, "0")}{suffix}
    </div>
  )
}

// Floating shape component
function FloatingShape({
  className,
  delay = 0,
  duration = 20,
  size = "w-32 h-32"
}: {
  className?: string
  delay?: number
  duration?: number
  size?: string
}) {
  return (
    <motion.div
      className={`absolute ${size} ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        y: [0, -30, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

// Text scramble effect
function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(true)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  useEffect(() => {
    if (!isAnimating) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsAnimating(false)
      }
      iteration += 1 / 3
    }, 40)

    return () => clearInterval(interval)
  }, [text, isAnimating])

  return <span className={`${className} text-inherit`} style={{ fontSize: 'inherit', letterSpacing: 'inherit', lineHeight: 'inherit' }}>{displayText}</span>
}

export function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <FloatingShape
        className="top-20 right-[15%] border-2 border-primary/30"
        delay={0}
        duration={25}
      />
      <FloatingShape
        className="top-[40%] right-[10%] bg-primary/10"
        size="w-24 h-24"
        delay={2}
        duration={20}
      />
      <FloatingShape
        className="bottom-[20%] right-[25%] border-2 border-primary/20"
        size="w-16 h-16"
        delay={4}
        duration={18}
      />
      <FloatingShape
        className="top-[30%] left-[5%] bg-primary/5"
        size="w-40 h-40"
        delay={1}
        duration={22}
      />
      <FloatingShape
        className="bottom-[30%] left-[15%] border border-primary/10"
        size="w-20 h-20"
        delay={3}
        duration={15}
      />

      {/* Gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ opacity, y, scale }}
        className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-20 relative z-10"
      >
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <motion.div
                className="marker-line"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span className="section-number">00</span>
              <span className="text-muted-foreground uppercase tracking-widest">
                Software Engineer
              </span>
            </motion.div>

            {/* Main heading with scramble effect */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-foreground tracking-wide"
              >
                <ScrambleText text="Rezwan" />
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-primary relative inline-block tracking-wide"
              >
                <ScrambleText text="Sheikh" />
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                />
              </motion.h1>
            </div>

            {/* Description with staggered word reveal */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-muted-foreground max-w-lg leading-relaxed text-base"
            >
              Full-stack engineer building{" "}
              <motion.span
                className="text-primary inline-block"
                whileHover={{ scale: 1.05 }}
              >
                AI-powered
              </motion.span>{" "}
              web and mobile applications.
              LLM assistants, RAG pipelines, and multi-tenant systems scaling to{" "}
              <motion.span
                className="text-primary inline-block"
                whileHover={{ scale: 1.05 }}
              >
                10K+ queries/day
              </motion.span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="#projects">
                <button className="btn-primary px-8 py-4 flex items-center gap-3 group">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link href="/Rezwan_Sheikh_Resume.pdf" target="_blank">
                <button className="btn-outline px-8 py-4 flex items-center gap-3">
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Stats column with animated counters */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="border-l-2 border-border pl-6 space-y-8"
            >
              {[
                { num: 3, suffix: "+", label: "Years Exp", text: null },
                { num: 10, suffix: "+", label: "Projects", text: null },
                { num: null, suffix: "", label: "Certified", text: "AWS" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  {stat.num !== null ? (
                    <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                  ) : (
                    <div className="text-5xl font-semibold text-primary tracking-tighter">
                      {stat.text}
                    </div>
                  )}
                  <div className="text-muted-foreground uppercase tracking-widest text-xs mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
