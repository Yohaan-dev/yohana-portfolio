import React from 'react'

const About = () => {
  return (
     <section className='about w-full my-20 py-20'>
          {/* dark overlay */}
          <div className='absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/20 pointer-events-none'></div>

          {/* content container */}
          <div className='max-w-5xl mx-auto p-4 relative z-10'>
              <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
                  <div className='mb-4'>
                      <img className='w-72 h-72 rounded-md object-contain' src="/linkedIn-Portfolio.jpeg" alt="about image" />
                  </div>
                  <div className='flex flex-col space-y-3 items-center md:items-end md:text-right'>
                      <h1 className='text-white font-serif text-4xl'>Yohana Kipruto.</h1>
                      <p className='text-amber-600 border-b border-gray-500'>FrontEnd Developer | Freelancer.</p>
                      <p className='text-white font-serif text-center md:text-right'>Yohana Kipruto is a talented and versatile frontEnd developer and freelancer,<br />with a passion for crafting visually stunning websites that deliver<br />seamless user experiences.</p>
                      <p className='text-amber-600 font-serif'>"Delivering excellence,exceeding your expectations,ensuring client satisfaction."</p>
                      <button className='rounded-full text-white font-serif bg-amber-600 px-3 py-1 hover:bg-amber-500'><a href="#contact">Contact Me</a></button>
                  </div>
              </div>
          </div>
        </section>
  )
}

export default About