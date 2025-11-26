"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, Rocket, Target } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Product-Minded Engineer",
    description: "I don't just write code—I build solutions that solve real problems and create value for users.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Constantly exploring new technologies and approaches to build better, more efficient systems.",
  },
  {
    icon: Rocket,
    title: "Fast Execution",
    description: "Shipping quality products quickly with modern tools like Next.js, NestJS, and cloud infrastructure.",
  },
  {
    icon: Target,
    title: "User-Centered",
    description: "Every technical decision is made with the end user in mind, ensuring the best possible experience.",
  },
]

export function About() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent gradient-animate" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--foreground)), hsl(271, 76%, 63%), hsl(280, 90%, 70%), hsl(271, 76%, 53%), hsl(var(--foreground)))' }}>
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building great software and solving complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Building Software, Solving Problems</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a full-stack developer with a passion for creating elegant solutions to complex
                problems. My journey in software engineering has been driven by curiosity and a
                desire to build products that make a real impact.
              </p>
              <p>
                Currently, I'm working on <span className="text-primary font-medium">Sheikh AI</span> and{" "}
                <span className="text-primary font-medium">DriveLeads</span>, where I'm leveraging
                cutting-edge AI technologies and modern web frameworks to build scalable SaaS
                products.
              </p>
              <p>
                My product-minded approach means I think beyond just the code—considering user
                experience, business value, and long-term maintainability in every decision I make.
              </p>
              <p>
                <span className="text-foreground font-medium">What I'm looking for:</span> I'm
                seeking SWE internship or junior developer opportunities where I can contribute to
                meaningful projects, learn from experienced engineers, and continue growing my
                skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.3, ease: "easeOut" } }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-200"
              >
                <highlight.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
