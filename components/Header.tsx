import Link from 'next/link'
import React from 'react'

// TODO: add underline to active link
// TODO: add hamburger menu for mobile

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-oxford p-6 text-white shadow-2xl'>
      <Link
        className='text-burg flex items-center gap-2 text-3xl font-semibold transition duration-200 hover:text-amber-950'
        href='/'
      >
        Portfolio
        <div className='pt-1 text-sm font-thin text-white max-sm:hidden'>
          by Rezwan Sheikh
        </div>
      </Link>
      <div className='flex gap-6 max-xs:hidden'>
        <Link
          className='underline-offset-8 transition duration-200 hover:text-slate-400'
          href='/about'
        >
          About
        </Link>
        <Link
          className='underline-offset-8 transition duration-200 hover:text-slate-400'
          href='/projects'
        >
          Projects
        </Link>
        <Link
          className='underline-offset-8 transition duration-200 hover:text-slate-400'
          href='/contact'
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
