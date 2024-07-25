import { Button } from '@/components/ui/button'
import LinkedIn from '/public/linkedin.svg'
import Github from '../public/Github.svg'

// TODO: make larger 

const Intro = () => {
  return (
    <div className='xs:px-12 flex select-none flex-col gap-8 p-6 px-2 lg:px-32'>
      <div>
        <h1 className='text-shadow-s pl-[2.5px] text-4xl font-bold text-black'>
          Hey, I'm
        </h1>
        <p className='text-shadow-sm mt-4 w-fit rounded-2xl bg-oxford p-2 px-5 text-6xl font-bold text-orange-500'>
          Rezwan Sheikh
        </p>
        <p className='text-shadow-sm mt-4 max-w-[40rem] rounded-2xl border-2 p-4 pl-[3.8px] text-center font-semibold text-white'>
          I am a full-time student and a full-stack developer. I create software
          solutions to real world problems.
        </p>
      </div>
      <div className='flex items-center gap-6 pl-[2.4px]'>
        <Button className='bg-orange-600 text-lg font-thin'>Download CV</Button>
        <Button className='h-6 p-0 hover:bg-slate-600'>
          <LinkedIn width={40} height={40} />
        </Button>
        <Button className='bg-white px-2 hover:bg-slate-300'>
          <Github width={24} height={32} />
        </Button>
      </div>
    </div>
  )
}

export default Intro
