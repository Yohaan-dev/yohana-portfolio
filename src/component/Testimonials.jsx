import React from 'react'

const Testimonials = () => {
  return (
      <section className='max-w-7xl mx-auto p-4 my-20' id='testimonials'>
          <div className='flex flex-col items-center my-4'>
              <h2 className='text-white font-serif text-3xl'>Testimonials from my clients.</h2>
              <p className='text-white font-serif text-center'>A compilation of endorsements reflecting excellence,<br/>trustworthiness,and the impact of my professional services.</p>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center md:space-x-4 gap-6 space-y-4 px-4 mt-20'>
              <div>
                  <img className='rounded-full w-52 h-52' src="./testimonials.jpg" alt="testimonial image" />
              </div>
              <div className='flex flex-col md:items-start'>
                  <h2 className='text-white font-serif text-center text-lg'>"We are absolutely thrilled with Yohana's work! his <br />responsiveness.friendliness and expertise are truly exceptional."</h2>
                  <p className='text-amber-600 mt-6 font-serif text-center'>Isabella Miller</p>
                  <p className='text-white font-serif text-center'>SoftWare Developer | Spotify</p>
              </div>
          </div>
    </section>
  )
}

export default Testimonials