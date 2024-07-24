import Link from 'next/link'
import React from 'react'

// TODO: add underline to active link
// TODO: add hamburger menu for mobile
// TODO: change href to section id with smooth scroll

const Header = () => {
  return (
    <div className='fixed w-full select-none'>
      <div className='flex items-center justify-between bg-oxford p-6 text-white shadow-2xl'>
        <Link
          className='flex items-center gap-2 text-3xl font-semibold text-orange-600 transition duration-200 hover:text-amber-900'
          href='/'
        >
          Portfolio
          <div className='pt-1 text-sm font-thin text-white max-sm:hidden'>
            by Rezwan Sheikh
          </div>
        </Link>
        <div className='max-xs:hidden flex gap-6'>
          <Link
            className='underline-offset-8 transition duration-200 hover:text-slate-400'
            href='#about'
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
    </div>
  )
}

export default Header
