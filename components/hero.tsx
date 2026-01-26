"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight, Download, ArrowDown } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20"
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
              <div className="marker-line" />
              <span className="section-number">00</span>
              <span className="text-muted-foreground uppercase tracking-widest">
                Software Engineer
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-foreground"
              >
                Rezwan
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-primary glow-text"
              >
                Sheikh
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-muted-foreground max-w-lg leading-relaxed text-base"
            >
              Building secure, scalable applications with{" "}
              <span className="text-primary">Next.js</span>,{" "}
              <span className="text-primary">React Native</span>,{" "}
              <span className="text-primary">NestJS</span>, and{" "}
              <span className="text-primary">AI integrations</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary px-8 py-4 flex items-center gap-3 group"
                >
                  <span>View Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/Rezwan_Sheikh_Resume.pdf" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline px-8 py-4 flex items-center gap-3"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Stats column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="border-l-2 border-border pl-6 space-y-8"
            >
              {[
                { num: "03+", label: "Years Exp" },
                { num: "10+", label: "Projects" },
                { num: "AWS", label: "Certified" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-5xl font-semibold text-primary tracking-tighter">
                    {stat.num}
                  </div>
                  <div className="text-muted-foreground uppercase tracking-widest text-xs mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Scroll
            </span>
            <ArrowDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-16 h-16 bg-primary/10 hidden lg:block" />
    </section>
  )
}
