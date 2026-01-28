"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:rezwanswe23@gmail.com",
    label: "rezwanswe23@gmail.com",
    color: "145 100% 40%",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rezwansheikh23",
    label: "linkedin.com/in/rezwansheikh23",
    color: "210 100% 50%",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/rezwans1027",
    label: "github.com/rezwans1027",
    color: "270 100% 60%",
  },
]

function ContactCard({ link, index }: { link: typeof socialLinks[0]; index: number }) {
  return (
    <motion.div
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
        <motion.div
          className="border-2 border-border p-8 h-full text-center relative overflow-hidden group-hover:border-primary transition-colors"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {/* Background glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 70%)`,
            }}
          />

          {/* Icon container */}
          <div className="w-16 h-16 border-2 border-border mx-auto flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
            <link.icon className="w-7 h-7 group-hover:text-primary transition-colors duration-200" />
          </div>

          {/* Name */}
          <h3 className="font-semibold text-foreground uppercase tracking-tight text-sm group-hover:text-primary transition-colors text-center mb-2">
            {link.name}
          </h3>

          {/* Label */}
          <p className="text-muted-foreground text-xs group-hover:text-foreground transition-colors text-center">
            {link.label}
          </p>

          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              className="marker-line"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <span className="section-number">05</span>
            <span className="text-muted-foreground uppercase tracking-widest">
              Connect
            </span>
            <motion.div
              className="marker-line"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
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
            <ContactCard key={link.name} link={link} index={index} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-8 border-t-2 border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
            <p className="text-xs uppercase tracking-wider hover:text-foreground transition-colors">
              &copy; {new Date().getFullYear()} Rezwan Sheikh
            </p>
            <p className="text-xs uppercase tracking-wider flex items-center gap-2 hover:text-foreground transition-colors">
              <span>Built with</span>
              <span className="text-primary">Next.js</span>
              <span>+</span>
              <span className="text-primary">Tailwind</span>
              <span>+</span>
              <span className="text-primary">Framer Motion</span>
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
