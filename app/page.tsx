import About from '@/components/About'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Techstack from '@/components/Techstack'

export default function Home() {
  return (
    <div className='flex bg-khaki h-[100vh] flex-col items-center pt-36'>
      <Intro />
      <Techstack />
      <About />
      <Projects />
    </div>
  )
}
