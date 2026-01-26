"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Work", href: "#projects", num: "01" },
  { name: "Skills", href: "#skills", num: "02" },
  { name: "Experience", href: "#experience", num: "03" },
  { name: "About", href: "#about", num: "04" },
  { name: "Contact", href: "#contact", num: "05" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ["home", ...navItems.map(item => item.href.substring(1))]
          let currentSection = sections[0]

          const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10

          if (isAtBottom) {
            currentSection = sections[sections.length - 1]
          } else {
            for (let i = sections.length - 1; i >= 0; i--) {
              const element = document.getElementById(sections[i])
              if (element) {
                const rect = element.getBoundingClientRect()
                if (rect.top <= 120) {
                  currentSection = sections[i]
                  break
                }
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
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b-2 border-border"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="#home">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2"
              >
                <span className="text-primary text-xl">//</span>
                <span className="text-lg font-semibold tracking-tight uppercase">
                  Rezwan
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="relative group"
                  >
                    <span className="section-number mr-1">{item.num}</span>
                    <span
                      className={`text-sm uppercase tracking-wider transition-colors duration-150 ${
                        activeSection === item.href.substring(1)
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 border-2 border-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div
          className="absolute inset-0 bg-background"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.div
          initial={false}
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background border-l-2 border-border pt-24 px-8"
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20
                }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block group"
                >
                  <span className="section-number block mb-1">{item.num}</span>
                  <span
                    className={`text-3xl font-semibold uppercase tracking-tight ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-foreground group-hover:text-primary"
                    } transition-colors`}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
