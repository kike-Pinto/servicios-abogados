import React from 'react'

// import team data
import { ServicioJuridico } from '../data'

const Services = () => {
  return (
    <section id='team' className='section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          Servicios Jurídicos
        </h2>
        <p className='max-w-[540px] mx-auto px-6 py-6 lg:px-0 mb-[60px]'>
          Ofrecemos servicios jurídicos especializados en derecho civil y penal,
          con asesoramiento personalizado, litigación y defensa. Nuestro
          compromiso es brindar soluciones efectivas y protección legal en cada
          caso. Su confianza, nuestra prioridad, garantizando que su caso esté
          en manos expertas.
        </p>

        {/* team members grid*/}
        <div className='lg:grid lg:grid-cols-3 lg:gap-x-[30px]'>
          {ServicioJuridico.map((item, index) => {
            const { image, name, description } = item
            return (
              <div className='text-center lg:text-left mb-20' key={index}>
                <img
                  className='w-[400px] h-[300px] object-cover mx-auto lg:mx-0 mb-10 px-2'
                  src={image}
                  alt=''
                />
                <div className='text-center'>
                  <h4 className='text-2xl mb-2 font-primary font-bold'>
                    {name}
                  </h4>
                  <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'></p>
                  <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>
                    {description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
