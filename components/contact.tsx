"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent gradient-animate" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(271, 76%, 63%), hsl(280, 90%, 70%), hsl(271, 76%, 53%), hsl(var(--foreground)))' }}>
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to
            say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 sm:p-12"
        >
          <div className="space-y-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`flex items-center gap-4 p-6 rounded-2xl glass hover:glass-strong group ${link.color}`}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{link.name}</h3>
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
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Open to internship and full-time opportunities
            </p>
            <Link href="mailto:rezwanswe23@gmail.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-200"
              >
                Send me an email
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-sm text-muted-foreground"
        >
          <p>© 2025 Rezwan Sheikh. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </motion.footer>
      </div>
    </section>
  )
}
