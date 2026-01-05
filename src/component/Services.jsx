import React from 'react'
import Services1 from '../assets/images/codereview1.jpg'
import Services3 from '../assets/images/codereview3.jpg'

const Services = () => {
  return (
      <section className='max-w-7xl mx-auto mt-10' id='services'>
          <div className='flex flex-col items-center justify-center space-y-4'>
              <h2 className='text-4xl font-serif text-white text-center'>What I do for Clients.</h2>
              <p className='text-white font-serif max-w-md text-center'>I provide tailored solutions,insights,and guidance to meet needs,ensuring their success and satisfaction in various endeavors.</p>
          </div>
          <div className='max-w-7xl flex md:flex-row flex-col items-center justify-center md:justify-between my-10 gap-6 px-6'>
              <div className='rounded-md bg-zinc-800/80 '>
                  <div className='service1 w-full min-h-[40vh] rounded-t-md bg-cover bg-center bg-fixed'
                  style={{ backgroundImage: `url(${Services1})` }}
                  >
                  </div>
                  <h2 className='font-serif text-2xl text-amber-600 p-4'>Web Design.</h2>
                  <p className='font-serif text-white p-4'>Crafting captivating online experiences through innovative<br/>design,user-centric interfaces,and seamless functionality.</p>
              </div>

              <div className='rounded-md bg-zinc-800/80 '>
                  <div className='service3 w-full min-h-[40vh] rounded-t-md bg-cover bg-center bg-fixed'
                  style={{ backgroundImage: `url(${Services3})` }}
                  >
                  </div>
                      <h2 className='font-serif text-2xl text-amber-600 p-4'>Branding.</h2>
                  <p className='font-serif text-white p-4'>Shaping brand identities with strategic visuals,messaging,<br/>and emotional resonance,fostering recognition and loyalty.</p>
              </div>
         </div>
    </section>
  )
}

export default Services