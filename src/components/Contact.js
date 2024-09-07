import React from 'react'

// import social data
import { social } from '../data'

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-primary text-white min-h-[732px] section'
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-10'>
          Contáctanos
        </h2>
        <p className='max-w-[540px] mx-auto text-center px-6 lg:px-0 mb-[64px]'>
          ¡Contáctenos para una consulta sin compromiso! Estamos aquí para
          ayudarle con sus necesidades legales en derecho civil y penal.
          Llámenos o envíenos un correo electrónico para obtener asesoramiento
          personalizado y representación eficaz. Su caso, nuestra prioridad.
        </p>
        {/* form */}
        <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]'>
          <input
            className='form-control'
            placeholder='Nombre completo'
            type='text'
          />
          <input
            className='form-control'
            placeholder='Correo electronico'
            type='email'
          />
          <textarea className='textarea' placeholder='Mensaje'></textarea>
          <button className='btn bg-accent hover:bg-accent-hover transition-all'>
            Enviar mensaje
          </button>
        </form>
        {/* socials */}
        <div className='flex items-center justify-between max-w-[205px] mx-auto'>
          {social.map((item, index) => {
            return (
              <a href='#' key={index}>
                <img src={item.icon} alt='' />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
