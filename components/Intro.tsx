import { Button } from '@/components/ui/button'
import LinkedIn from '/public/linkedin.svg'
import Github from '../public/Github.svg'
import Link from 'next/link'

// TODO: Link CV

const Intro = () => {
  return (
    <div className='flex select-none flex-col gap-8 p-6 px-2 xs:px-12 lg:px-32'>
      <div className='max-w-6xl'>
        <h1 className='text-shadow-s pl-[2.5px] text-4xl font-bold text-black md:text-5xl'>
          Hey, I'm
        </h1>
        <p className='mt-4 w-fit rounded-2xl bg-oxford p-2 px-5 text-6xl font-bold text-orange-500 text-shadow-sm sm:text-7xl md:text-8xl'>
          Rezwan Sheikh
        </p>
        <p className='mt-4 rounded-2xl border-2 p-4 pl-[3.8px] text-center font-semibold border-black text-black max-md:max-w-[40rem] sm:text-2xl md:text-3xl'>
          I am a full-time student and a full-stack developer. I create software
          solutions to real world problems.
        </p>
      </div>
      <div className='flex items-center gap-6 pl-[2.4px]'>
        <Button className='bg-orange-600 text-lg font-thin'>Download CV</Button>
        <Link href='https://www.linkedin.com/in/rezwan-sheikh-68085a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='p-0 hover:bg-slate-600'>
          <LinkedIn width={40} height={40} />
        </Link>
        <Link href='https://github.com/rezwans1027' className='bg-white px-2 hover:bg-slate-300'>
          <Github width={24} height={32} />
        </Link>
      </div>
    </div>
  )
}

export default Intro
