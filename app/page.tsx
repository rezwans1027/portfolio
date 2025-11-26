import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </div>
  )
}
