import React from 'react'

// import components
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import Skills from './components/Skills'
// import Team from './components/Team'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn'
import Ubicacion from './components/Ubicacion'
import WhatsAppContact from './components/WhatsApp'

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      {/* <Team /> */}
      <Services />
      <Newsletter />
      <Contact />
      <Ubicacion />
      <Footer />
      <BackToTopBtn />
      <WhatsAppContact />
    </div>
  )
}

export default App
