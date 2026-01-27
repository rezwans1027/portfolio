"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:rezwanswe23@gmail.com",
    label: "rezwanswe23@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rezwansheikh23",
    label: "linkedin.com/in/rezwansheikh23",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/rezwans1027",
    label: "github.com/rezwans1027",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="marker-line" />
            <span className="section-number">05</span>
            <span className="text-muted-foreground uppercase tracking-widest">
              Connect
            </span>
            <div className="marker-line" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-foreground"
          >
            Contact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-muted-foreground mt-6 max-w-md mx-auto"
          >
            Have a question or want to work together? Let's connect.
          </motion.p>
        </div>

        {/* Contact links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="border-2 border-border p-6 h-full hover:border-primary transition-colors duration-150 text-center">
                  <div className="w-14 h-14 border-2 border-border mx-auto flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors mb-4">
                    <link.icon className="w-6 h-6 group-hover:text-background transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground uppercase tracking-tight text-sm mb-2">
                    {link.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {link.label}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="mailto:rezwanswe23@gmail.com">
            <button className="btn-primary px-10 py-4 inline-flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </button>
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-8 border-t-2 border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
            <p className="text-xs uppercase tracking-wider">
              &copy; {new Date().getFullYear()} Rezwan Sheikh
            </p>
            <p className="text-xs uppercase tracking-wider">
              Built with Next.js + Tailwind + Framer Motion
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
