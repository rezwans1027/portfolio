import React from 'react'
import NextLogo from '../public/tech/NextLogo.svg'

const About = () => {
  return (
    <div
      id='about'
      className='flex w-full items-center justify-center bg-white px-16 py-12'
    >
      <div className='mt-24 max-w-4xl rounded-2xl bg-khaki p-8 shadow-xl'>
        <h1 className='rounded-t-2xl p-4 text-5xl text-black'>About Me</h1>
        <div className='bg-orange mt-8 rounded-2xl border-2 border-black p-4 text-lg text-black'>
          <p className='mb-4'>
            Hello! I'm Rezwan Sheikh, a junior studying Computer Science. My journey in tech has been
            fueled by a passion for problem-solving and innovation, and a
            relentless drive to achieve my goals.
          </p>
          <p className='mb-4'>
            Although I'm from Bangladesh, I was born and raised in New York City. Growing up in NYC, I've always had a curious mind
            and a love for learning. This curiosity eventually led me to the
            world of computer science, where I found my true calling. Aside from
            coding, I enjoy playing basketball, which helps me stay active and
            focused.
          </p>
          <p className='mb-4'>
            At the start of 2024, I made a pivotal decision to switch my major
            to Computer Science. The past seven months have been a whirlwind of
            learning and growth as I embarked on the path of becoming a
            self-taught full stack developer. This journey has been challenging
            yet incredibly rewarding, as I've gained expertise in both front-end
            and back-end development.
          </p>
          <p className='mb-4'>
            My core skills lie in web development, with a specialization in React and Node.js. I pride myself on being versatile
            and capable of handling various aspects of web development, from
            creating responsive user interfaces to building robust server-side
            applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
