import Link from 'next/link'
import React from 'react'

// TODO: add hamburger menu for mobile

const Header = () => {
  return (
    <div className='fixed z-50 w-full select-none'>
      <div className='flex items-center justify-between bg-oxford p-6 text-white shadow-2xl'>
        <Link
          className='group flex items-center gap-2 text-3xl font-semibold text-orange-600 transition duration-200 hover:text-amber-900'
          href='/'
        >
          <div>Portfolio</div>

          <div className='pt-1 text-sm font-thin text-white transition duration-200 group-hover:text-slate-500 max-sm:hidden'>
            by Rezwan Sheikh
          </div>
        </Link>
        <div className='flex gap-6 max-xs:hidden'>
          <Link
            className='underline-offset-8 transition duration-200 hover:text-slate-400'
            href='#about'
          >
            About
          </Link>
          <Link
            className='underline-offset-8 transition duration-200 hover:text-slate-400'
            href='#projects'
          >
            Projects
          </Link>
          <Link
            className='underline-offset-8 transition duration-200 hover:text-slate-400'
            href='#contact'
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
