import React from 'react'

// import components
import Header from './Header'
import Appointment from './Appointment'

// import lawyer image
import LawyerImage from '../assets/img/lawyer_banner2.png'

const Banner = () => {
  return (
    <section
      id='home'
      className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'
    >
      <Header />
      <div className='container mx-auto h-full lg:flex pt-32'>
        {/* left side */}
        <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
          <h1 className='font-primary font-black text-6xl lg:text-6xl text-primary mb-4 lg:mt-[70px] mt-10 leading-tight lg:leading-[90px]'>
            Tu Problema <br />{' '}
            <span className='text-accent'>Nuestro Objetivo.</span>
          </h1>
          <p className='max-w-sm mx-auto mb-[60px] mt-[50px] lg:mx-0 lg:max-w-[540px]'>
            Abogado especializado en derecho civil y penal. Ofrezco
            asesoramiento jurídico personalizado y representación en juicios. Su
            caso, mi prioridad. ¡Contácteme para una consulta sin compromiso!
          </p>
          {/* Appointment */}
          <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
            <Appointment />
          </div>
        </div>
        {/* Right side */}
        <div className='hidden flex-1 lg:flex lg:flex-col items-end mr-20'>
          <img src={LawyerImage} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Banner
