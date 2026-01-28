import React from 'react'
import {useState} from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SuccessToast from "./SuccessToast.jsx";

const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);

        //Clear Form Fields
        setName(''),
        setEmail(''),
        setSubject(''),
        setMessage('')
    };
        
  return (
      <section className='max-w-7xl mx-auto p-4 mt-20 py-20' id='contact'>
          <div className='flex flex-col items-center py-4 border-b border-zinc-500/20 w-full'>
              <h2 className='text-white font-serif text-3xl'>Let's get intouch</h2>
              <p className='text-white font-serif text-center'>Contact me for personalized solutions and <br/> dedicated support to achieve your goals.</p>
          </div>
          <div className='flex flex-col md:flex-row gap-8 p-6 my-20'>
              <div className='md:w-1/2'>
                  <div className='flex flex-row space-x-3 mb-6'>
                      <FaEnvelope className='text-amber-600' size={25} />
                      <div className='flex flex-col items-start'>
                          <h2 className='text-white font-serif text-md'>Have a question?</h2>
                          <p className='text-zinc-400 font-serif'>I am here to help you.</p>
                          <p className='text-amber-600 font-serif'>hello@youremail.com</p>
                      </div>
                  </div>
                  <div className='flex flex-row space-x-3 mb-6'>
                      <FaMapMarkerAlt className='text-amber-600' size={25} />
                      <div className='flex flex-col items-start'>
                          <h2 className='text-white font-serif text-md'>Current Location</h2>
                          <p className='text-zinc-400 font-serif'>Nairobi, Kenya</p>
                          <p className='text-amber-600 font-serif'>Serving clients worldwide</p>
                      </div>
                  </div>
              </div>
              <div className='flex flex-col space-y-4'>
                  <form onSubmit={handleSubmit}>
                      <div className='flex flex-col md:flex-row items-center space-y-2 my-3 md:space-y-0 md:space-x-2'>
                          <div className='w-full'>
                              <input className='rounded-md px-4 py-2 bg-zinc-600 text-zinc-300 placeholder-gray-400 focus:outline-none focus-ring-none'
                                  type="text"
                                  placeholder='Your Name'
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  required />
                          </div>
                          <div className='w-full'>
                              <input className='rounded-md px-4 py-2 bg-zinc-600 text-zinc-300 placeholder-gray-400 focus:outline-none focus-ring-none'
                                  type="email"
                                  placeholder='Your Email'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required />
                      </div>
                  </div>
                  <div>
                          <input className='w-full rounded-md px-4 py-2 my-3 bg-zinc-600 text-zinc-300 placeholder-gray-400 focus:outline-none focus-ring-none'
                              type='text'
                              placeholder='Subject'
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              required />
                  </div>
                  <div className='my-3'>
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full rounded-md bg-zinc-600 px-4 py-2
                               text-zinc-300 placeholder-gray-400
                             focus:outline-none  focus:ring-none"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                  </div>
                      <button className='rounded-full text-white font-serif bg-amber-600 px-3 py-1 hover:bg-amber-500 flex items-center gap-2 w-fit'>Send Message</button>
                  </form>
                   <SuccessToast message="Form submitted successfully!" show={success} onClose={() => setSuccess(false)}/>
              </div>
          </div>
    </section>
  )
}

export default Contacts