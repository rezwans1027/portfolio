"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  )

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = navItems.map(item => item.href.substring(1))

          // Find the section whose top is closest to the navbar (accounting for scroll-margin-top)
          let currentSection = sections[0]

          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i])
            if (element) {
              const rect = element.getBoundingClientRect()
              // Check if this section has scrolled past the scroll threshold (100px + 20px buffer)
              if (rect.top <= 120) {
                currentSection = sections[i]
                break
              }
            }
          }

          setActiveSection(currentSection)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{
        background: 'rgba(var(--glass-bg))',
        backdropFilter: 'blur(30px) saturate(200%)',
        WebkitBackdropFilter: 'blur(30px) saturate(200%)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-xl font-bold bg-clip-text text-transparent gradient-animate"
            style={{
              backgroundImage: 'linear-gradient(90deg, hsl(271, 76%, 53%), hsl(280, 90%, 70%), hsl(290, 80%, 60%), hsl(271, 76%, 53%))'
            }}
          >
            RS
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative px-4 py-2 rounded-lg"
                >
                  <span
                    className={`relative z-10 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary rounded-lg"
                      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
