import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import heroImage from '../assets/images/portfolio-Image.png'

const Hero = () => {
  return (
      <section className='w-full my-8 py-8'>
          <div className='max-w-5xl mx-auto p-4'>
              <div className='flex flex-col md:flex-row gap-4 items-center md:space-x-4 space-y-3'>
                  <div className='flex flex-col space-y-3 items-center md:items-start md:text-left'>
                      <h1 className='text-amber-600 font-serif'>hey, i am yohana.</h1>
                      <p className='text-white text-3xl font-serif'>I build & Design <br /> Web Interfaces.</p>
                      <p className='text-white font-serif text-w-sm'>Blending design finesse and technical expertise to build visually captivating and functional websites</p>
                      <button><a className='rounded-full text-white font-serif bg-amber-600 px-4 py-2 hover:bg-amber-500 flex items-center gap-2 w-fit' href="#contact">Get in touch<ArrowRightIcon className="w-4 h-4 text-white" /></a></button>
                  </div>
                  <div className='w-1/2'>
                      <img className='rounded-md w-96 h-96 object-contain'
                          src={heroImage}
                          alt="hero image" />
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Hero