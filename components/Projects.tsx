import Link from 'next/link'
import React from 'react'

// TODO: add project images
// TODO: create ProjectCard component
// TODO: make responsive

const Projects = () => {
  return (
    <div id='projects' className='mt-32 w-full bg-oxford'>
      <div className='m-12 mt-32 select-none text-center text-5xl font-bold text-orange-600'>
        My Projects
      </div>
      <div className='my-4 grid grid-cols-3 gap-8 px-8'>
        <Link
          href='https://github.com/rezwans1027/stackOverflowClone'
          className='hover:bg-khakiDark rounded-xl bg-khaki p-8 shadow-xl transition duration-200'
        >
          <h1 className='text-2xl font-semibold'>DevOverflow</h1>
          <div className='mt-4 h-32 w-full bg-oxford'></div>
          <p className='mt-4 text-lg'>
            A full-stack web application that allows developers to ask and
            answer questions and share knowledge. Built with NextJS and MongoDB.
            Styled with Tailwind.
          </p>
        </Link>
        <Link
          href='https://github.com/rezwans1027/GoodEats-Frontend'
          className='hover:bg-khakiDark rounded-xl bg-khaki p-8 shadow-xl transition duration-200'
        >
          <h1 className='text-2xl font-semibold'>GoodEats</h1>
          <div className='mt-4 h-32 w-full bg-oxford'></div>
          <p className='mt-4 text-lg'>
            A full-stack web application that allows users to order food.
            Includes an admin page. Built with React and Express. Has full
            payment functionality with Stripe integration.
          </p>
        </Link>
        <Link
          href='https://github.com/rezwans1027/RecieptRangerFrontend'
          className='hover:bg-khakiDark rounded-xl bg-khaki p-8 shadow-xl transition duration-200'
        >
          <h1 className='text-2xl font-semibold'>ReceiptRadar</h1>
          <div className='mt-4 h-32 w-full bg-oxford'></div>
          <p className='mt-4 text-lg'>
            (WIP) A full-stack web application that allows companies to manage
            and verify employee transactions and receipts. Built with React and
            Express. Uses Supabase for database.
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Projects
