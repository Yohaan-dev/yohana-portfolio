import React from 'react'
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
      <nav className='fixed top-0 left-0 right-0 z-50 bg-zinc-800/95 text-white mt-4 mx-4 px-4 py-3 rounded-md shadow-md'>
          <div className='max-w-5xl mx-auto'>
              <div className='md:flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between'>
                  <h1 className='text-2xl text-white font-serif hidden md:block'>Yohana Kipruto</h1>
                  <button onClick={()=> setOpen((prevState)=> !prevState)} className='md:hidden'>{ open? <X size={25} /> : <Menu size={25} /> }</button>
                  <div className='hidden md:flex flex-col md:flex-row gap-6 items-center my-4'>
                      <a href="#home" className='hover:text-amber-600 transition duration-300 text-sm'>HOME</a>
                      <a href="#about" className='hover:text-amber-600 transition duration-300 text-sm'>ABOUT</a>
                      <a href="#services" className='hover:text-amber-600 transition duration-300 text-sm'>SERVICES</a>
                      <a href="#portfolio" className='hover:text-amber-600 transition duration-300 text-sm'>MY RESUME</a>
                      <a href="#testimonials" className='hover:text-amber-600 transition duration-300 text-sm'>TESTIMONIALS</a>
                      <a href="#contact" className='hover:text-amber-600 transition duration-300 text-sm'>CONTACT ME</a>
                  </div>
                   <div className="social-icons hidden md:flex md:flex-row gap-4 items-center justify-center rounded-md bg-gray-700/20 px-4 p-2">
                       <a href="https://youtube.com" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                           <FaYoutube size={20} className='text-amber-600'/>
                       </a>
                       <a href="https://x.com/KiprutoYohana" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                       <FaXTwitter size={20} className='text-amber-600' />
                       </a>
                          <a href="https://www.instagram.com/samoe000/" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                        <FaInstagram size={20} className='text-amber-600' />
                       </a>
                      <a href="https://wa.me/+254743955900" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                      <FaWhatsapp size={20} className='text-amber-600' />
                      </a>
                  </div>
                  {open && (
                      <>
                      <div className='flex flex-col md:flex-row gap-6 items-center my-4'>
                      <a href="#home" className='hover:text-amber-600 transition duration-300 text-sm'>HOME</a>
                      <a href="#about" className='hover:text-amber-600 transition duration-300 text-sm'>ABOUT</a>
                      <a href="#services" className='hover:text-amber-600 transition duration-300 text-sm'>SERVICES</a>
                      <a href="#portfolio" className='hover:text-amber-600 transition duration-300 text-sm'>MY RESUME</a>
                      <a href="#testimonials" className='hover:text-amber-600 transition duration-300 text-sm'>TESTIMONIALS</a>
                      <a href="#contact" className='hover:text-amber-600 transition duration-300 text-sm'>CONTACT ME</a>
                      </div>
                      <div className="social-icons flex md:flex-row gap-4 items-center justify-center rounded-md bg-gray-700/20 px-4 p-2">
                       <a href="https://youtube.com" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                           <FaYoutube size={20} className='text-amber-600'/>
                       </a>
                       <a href="https://x.com/KiprutoYohana" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                       <FaXTwitter size={20} className='text-amber-600' />
                       </a>
                          <a href="https://www.instagram.com/samoe000/" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                        <FaInstagram size={20} className='text-amber-600' />
                       </a>
                      <a href="https://wa.me/+254743955900" target="_blank" rel="noreferrer" className='hover:scale-110 transition duration-300'>
                      <FaWhatsapp size={20} className='text-amber-600' />
                      </a>
                  </div>
                      </>
                  )}
          </div>
          </div>
    </nav>
  )
}

export default Navbar