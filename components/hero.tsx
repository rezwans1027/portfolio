"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight, Download, Mail } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { staggerContainer, fadeInUp } from "@/lib/motion-config"

export function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Word-by-word reveal animation
  const title = "Rezwan Sheikh"
  const words = title.split(" ")

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Enhanced animated background gradient with parallax */}
      <motion.div className="absolute inset-0 -z-10" style={{ opacity }}>
        <motion.div
          style={{ y: y1, willChange: "transform" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, willChange: "transform" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Word-by-word reveal with blur effect */}
        <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              style={{
                display: "inline-block",
                marginRight: i === 0 ? "0.25em" : 0,
                backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(271, 76%, 63%), hsl(280, 90%, 70%), hsl(271, 76%, 53%), hsl(var(--foreground)))',
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
              className="gradient-animate"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-6"
        >
          Full-Stack Software Engineer
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Building secure and scalable applications with Next.js, React Native, Node, and TypeScript.
        </motion.p>

        {/* Action buttons */}
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

          <Link href="/Rezwan_Sheikh_Resume.pdf" className="w-full sm:w-auto">
            <AnimatedButton variant="secondary" className="w-full sm:w-auto">
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Resume</span>
            </AnimatedButton>
          </Link>

          <Link href="#contact" className="w-full sm:w-auto">
            <AnimatedButton variant="secondary" className="w-full sm:w-auto">
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </AnimatedButton>
          </Link>
        </motion.div>

        {/* Enhanced scroll indicator */}
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
            whileHover={{ scale: 1.2 }}
            className="inline-block cursor-pointer"
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
