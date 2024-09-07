import React from 'react'

// import team data
import { team } from '../data'

const Team = () => {
  return (
    <section id='team' className='section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          Nuestros Representantes
        </h2>
        <p className='max-w-[540px] mx-auto px-6 py-6 lg:px-0 mb-[60px]'>
          Nuestros abogados representantes se destacan por su dedicación y
          experiencia en derecho civil y penal. Brindan asesoramiento jurídico
          personalizado y una representación eficaz en juicios, garantizando que
          su caso esté en manos expertas.
        </p>

        {/* team members grid*/}
        <div className='lg:grid lg:grid-cols-3 lg:gap-x-[30px]'>
          {team.map((item, index) => {
            const { image, name, position, description } = item
            return (
              <div className='text-center lg:text-left mb-12' key={index}>
                <img className='mx-auto lg:mx-0 mb-6' src={image} alt='' />
                <h4 className='text-2xl mb-2 font-primary font-bold'>{name}</h4>
                <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'>
                  {position}
                </p>
                <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
