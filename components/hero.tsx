"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { staggerContainer, fadeInUp } from "@/lib/motion-config"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background gradient - CSS optimized */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight bg-clip-text text-transparent gradient-animate"
          style={{
            backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(271, 76%, 63%), hsl(280, 90%, 70%), hsl(271, 76%, 53%), hsl(var(--foreground)))'
          }}
        >
          Rezwan Sheikh
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-6"
        >
          Full-Stack Software Engineer
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Skilled in Next.js, React Native, Node, and TypeScript, with experience building secure and scalable web and mobile applications. Proven ability to ship production-quality projects and deliver end-to-end solutions.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-2xl mx-auto"
        >
          <Link href="#projects" className="w-full sm:w-auto">
            <AnimatedButton className="w-full sm:w-auto group">
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
            </AnimatedButton>
          </Link>

          <a href="/Rezwan_Sheikh_Resume.pdf" download className="w-full sm:w-auto">
            <AnimatedButton variant="secondary" className="w-full sm:w-auto">
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Resume</span>
            </AnimatedButton>
          </a>

          <Link href="#contact" className="w-full sm:w-auto">
            <AnimatedButton variant="secondary" className="w-full sm:w-auto">
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </AnimatedButton>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-20"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground"
            >
              <path
                d="M12 5V19M12 19L6 13M12 19L18 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
