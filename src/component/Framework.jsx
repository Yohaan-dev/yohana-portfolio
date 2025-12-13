import React from 'react'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt,
} from 'react-icons/fa';

const Framework = () => {
  return (
      <section>
          <div className='max-w-2xl mx-auto p-4 space-y-8 my-20'>
              <h2 className='text-3xl font-serif text-white text-center'>Frameworks & Languages.</h2>
              <div className='flex flex-row items-center justify-around md:space-x-8 space-x-4'>
                  <FaHtml5 className="text-orange-500 text-4xl" />
                  <FaCss3Alt className="text-blue-500 text-4xl" />
                  <FaJs className="text-yellow-500 text-4xl" />
                  <FaReact className="text-cyan-500 text-4xl" />
                  <FaGitAlt className="text-red-500 text-4xl" />
              </div>
          </div>
    </section>
  )
}

export default Framework