import React from 'react'

// TODO: add project images
// TODO: link to project pages

const Projects = () => {
  return (
    <div className='mt-8 w-full bg-oxford'>
      <div
        id='projects'
        className='m-12 text-center text-5xl font-bold text-orange-600'
      >
        My Projects
      </div>
      <div className='mt-4 grid grid-cols-3 gap-8 px-8'>
        <div className='rounded-xl bg-white p-8 shadow-xl'>
          <h1 className='text-2xl font-semibold'>Project 1</h1>
          <div className='mt-4 h-32 w-full bg-oxford'></div>
          <p className='mt-4 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
          </p>
        </div>
        <div className='rounded-xl bg-white p-8 shadow-xl'>
          <h1 className='text-2xl font-semibold'>Project 2</h1>
          <div className='mt-4 h-32 w-full bg-oxford'></div>
          <p className='mt-4 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
          </p>
        </div>
        <div className='rounded-xl bg-white p-8 shadow-xl'>
          <h1 className='text-2xl font-semibold'>Project 3</h1>
          <div className='mt-4 h-32 w-full bg-oxford'></div>
          <p className='mt-4 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
