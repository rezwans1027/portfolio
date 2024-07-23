import { Button } from '@/components/ui/button'
import LinkedIn from '/public/linkedin.svg'
import Github from '../public/Github.svg'

export default function Home() {
  return (
    <div className='flex h-[100vh] flex-col items-center p-6 pt-24'>
      <div className='flex flex-col gap-8 lg:px-32 xs:px-12 px-2'>
        <div>
          <h1 className='pl-[2.5px] text-4xl font-bold'>Hey, I'm</h1>
          <p className='px text-burg text-6xl font-bold'>
            Rezwan Sheikh
          </p>
          <p className='pl-[3.8px] pt-2 font-semibold text-white'>
            I am a full-time student and a full-stack developer. I create
            software solutions to real world problems.{' '}
          </p>
        </div>
        <div className='flex items-center gap-6 pl-[2.4px]'>
          <Button className='bg-oxford text-lg font-thin'>Download CV</Button>
          <Button className='h-6 p-0 hover:bg-slate-600'>
            <LinkedIn width={40} height={40} />
          </Button>
          <Button className='bg-white px-2 hover:bg-slate-300'>
            <Github width={24} height={32} />
          </Button>
        </div>
      </div>
    </div>
  )
}
