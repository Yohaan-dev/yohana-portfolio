import React from 'react'
import { FaYoutube, FaInstagram, FaGithub, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
      <footer className='footer px-6 my-8 border-b border-zinc-600/50 pb-8'>
          <div className='flex md:flex-row flex-col gap-4 space-x-4 items-center justify-center md:justify-between'>
              <div className='flex items-center space-x-3 rounded-md bg-gray-700/20 px-4 p-2'>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                     <FaYoutube size={20} className='text-amber-600'/>
                  </a>
                  <a href="https://www.instagram.com/samoe000/" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                     <FaInstagram size={20} className='text-amber-600'/>
                  </a>
                  <a href="https://github.com/Yohaan-dev" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                     <FaGithub size={20} className='text-amber-600'/>
                  </a>
                  <a href="https://wa.me/+254743955900" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                     <FaWhatsapp size={20} className='text-amber-600'/>
                  </a>
              </div>
              <div>
                  <p className='text-zinc-400 font-serif text-2xl'>Yohana Kipruto</p>
              </div>
              <div>
                  <p className='text-zinc-400'>© 2025 Yohana Kipruto. All rights reserved.</p>
              </div>
          </div>
    </footer>
  )
}

export default Footer