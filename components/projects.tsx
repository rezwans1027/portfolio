"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInScale } from "@/lib/motion-config"

const projects = [
  {
    title: "Horizon",
    description: "Developed a financial web application using Plaid for bank account linking and Dwolla for secure fund transfers. Implemented real-time error tracking with Sentry, reducing error resolution time by 50%.",
    tech: ["React", "Next.js", "TailwindCSS", "Plaid", "Dwolla", "Appwrite", "Sentry"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "LLM Knowledge Assistant",
    description: "Built an LLM-powered knowledge assistant with context-aware responses, cutting latency by 40% and scaling to 10K+ queries/day. Developed a React Native mobile app with Firebase Authentication supporting 500+ concurrent users.",
    tech: ["React Native", "Firebase", "TypeScript", "NestJS", "LLM", "AI"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    title: "AI RAG Pipeline",
    description: "Fine-tuned DeepSeek-Chat 7B with LoRA, improving response relevance by 30%. Built a RAG pipeline with LangChain, MongoDB, and Pinecone, boosting factual accuracy by 20% and deployed scalable NestJS backend on AWS EC2.",
    tech: ["NestJS", "LangChain", "MongoDB", "Pinecone", "AWS EC2", "LoRA", "DeepSeek"],
    github: "#",
    demo: "#",
    image: "bg-gradient-to-br from-emerald-500 to-teal-500",
  },
  {
    title: "ReceiptRanger",
    description: "Built an expense management platform with bank integration and both manual and rule-based receipt verification. Implemented RBAC for admins, managers, and employees, enabling transaction approval workflows. Enhanced user onboarding with AWS SES automation, improving completion by 40%.",
    tech: ["React", "Express", "Supabase", "Plaid", "AWS SES"],
    github: "https://github.com/rezwans1027/RecieptRangerBackend",
    demo: "#",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    title: "DevOverflow",
    description: "Developed a Q&A application for coding questions with a recommendation system based on user interactions. Added real-time voting, pagination, filtering, and search features, reducing search times by 50%. Created MongoDB indexes improving query performance by 40%.",
    tech: ["Next.js", "MongoDB", "Mongoose", "Clerk", "React"],
    github: "https://github.com/rezwans1027/stackOverflowClone",
    demo: "#",
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    title: "Goodeats",
    description: "Created a restaurant app with menu search, filtering, seamless checkout, and admin panel for order management. Reduced image load time by 45% through Cloudinary optimization. Streamlined Stripe webhook processing, decreasing payment processing times by 25%.",
    tech: ["Node.js", "Express", "MongoDB", "Stripe", "Auth0", "Cloudinary"],
    github: "https://github.com/rezwans1027/GoodEats-Backend",
    demo: "#",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
]

export function Projects() {
  return (
    <section id="projects" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of projects showcasing full-stack development, AI integration, and scalable product design."
        />

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeInScale}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="card-glossy group relative glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full">
                    <div className={`h-48 ${project.image} relative`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-border">
                        <Link href={project.github}>
                          <motion.button
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </motion.button>
                        </Link>
                        <Link href={project.demo}>
                          <motion.button
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="hidden md:flex glass-strong md:-left-4 border-border hover:bg-primary/20 h-11 w-11 z-10"
            aria-label="Previous project"
          />
          <CarouselNext
            className="hidden md:flex glass-strong md:-right-4 border-border hover:bg-primary/20 h-11 w-11 z-10"
            aria-label="Next project"
          />
        </Carousel>
      </div>
    </section>
  )
}
