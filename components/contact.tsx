"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedButton } from "@/components/ui/animated-button"
import { fadeInUp, fadeInLeft, hoverX } from "@/lib/motion-config"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:rezwanswe23@gmail.com",
    label: "rezwanswe23@gmail.com",
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rezwan-sheikh-68085a25b",
    label: "linkedin.com/in/rezwan-sheikh-68085a25b",
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/rezwans1027",
    label: "github.com/rezwans1027",
    color: "hover:text-purple-500",
  },
]

export function Contact() {
  return (
    <section id="contact" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Whether you have a question or just want to say hi, feel free to reach out!"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong rounded-3xl p-6 sm:p-8"
        >
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInLeft}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.08, ease: "easeOut" }}
                    className={`card-glossy flex items-center gap-4 p-5 rounded-2xl glass-card hover:glass-strong group ${link.color} transition-all duration-300`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.08, ease: "easeOut" }}
                      className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200"
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base mb-1 text-foreground">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-border text-center text-base text-muted-foreground"
        >
          <p>© 2025 Rezwan Sheikh. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </motion.footer>
      </div>
    </section>
  )
}
