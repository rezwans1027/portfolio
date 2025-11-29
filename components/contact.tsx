"use client"

import { motion } from "framer-motion"
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
          subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
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
                    whileHover={hoverX}
                    transition={{ duration: 0.15 }}
                    className={`card-glossy flex items-center gap-4 p-5 rounded-2xl glass-card hover:glass-strong group ${link.color} transition-all duration-300`}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base mb-1 text-foreground">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                    </div>
                    <Send className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-base text-muted-foreground mb-6 font-medium">
              Open to internship and full-time opportunities
            </p>
            <Link href="mailto:rezwanswe23@gmail.com">
              <AnimatedButton className="px-8 py-4 rounded-2xl w-full sm:w-auto">
                <span className="relative z-10">Send Me an Email</span>
              </AnimatedButton>
            </Link>
          </motion.div>
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
