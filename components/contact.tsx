"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
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
      <div className="max-w-4xl mx-auto">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="border-2 border-border p-8"
        >
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-center gap-4 p-4 border-2 border-transparent hover:border-primary transition-colors duration-150">
                    <div className="w-12 h-12 border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
                      <link.icon className="w-5 h-5 group-hover:text-background transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground uppercase tracking-tight text-sm">
                        {link.name}
                      </h3>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {link.label}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t-2 border-border text-center">
            <Link href="mailto:rezwanswe23@gmail.com">
              <button className="btn-primary px-10 py-4 inline-flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </button>
            </Link>
          </div>
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
