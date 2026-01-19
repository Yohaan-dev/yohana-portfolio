import React from 'react'

const MyResume = () => {
  return (
    <section className='max-w-7xl mx-auto mt-20' id='resume'>
              <div className='flex flex-col items-center justify-center space-y-4'>
                  <h2 className='text-4xl font-serif text-white text-center'>My Resume.</h2>
              <p className='text-white font-serif max-w-md text-center'>This resume showcases my path toward becoming a versatile full-stack developer.It emphasizes my expertise in front-end technologies,API integration,and portfolio projects that demonstrate production-ready skills.</p>
              <div className='flex flex-col items-center gap-6'>
                  <iframe src="/resume.pdf" title='Resume' className='w-full h-[600px] border rounded-lg shadow'></iframe>
                  <a href="/resume.pdf" target='_blank' download='resume.pdf' rel='noopener noreferrer' className='inline-flex items-center gap-2 bg-green-500 text-white font-serif px-5 py-3 rounded-lg shadow hover:bg-green-600 transition'>Download Resume</a>
              </div>
              </div>
        </section>
  )
}

export default MyResume