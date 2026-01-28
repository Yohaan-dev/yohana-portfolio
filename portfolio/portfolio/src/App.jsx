import React from 'react'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Framework from './component/Framework.jsx'
import Services from './component/Services.jsx'
import Testimonials from './component/Testimonials.jsx'
import Contacts from './component/Contacts.jsx'
import Footer from './component/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="about"><Framework /></div>
      <div id="services"><Services /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contacts /></div>
      <Footer />
    </>
  )
}

export default App