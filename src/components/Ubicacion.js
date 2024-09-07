import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'

const Ubicacion = () => {
  return (
    <section id='ubicacion' className='py-20 bg-[#f8f3eca1]'>
      <h2 className='text-center text-5xl font-primary font-extrabold mb-16 text-blue-950'>
        ¿Dónde Estámos?
      </h2>
      <div className='container mx-auto p-14 bg-white shadow-lg rounded-lg'>
        <div className='lg:flex lg:space-x-12'>
          {/* Left side: Contact information */}

          <div className='lg:w-1/2 mb-12 lg:mb-0'>
            <h2 className='text-4xl font-bold text-blue-900 mb-8'>
              ¿Dónde Ubicarnos?
            </h2>
            <div className='flex items-center mb-8'>
              <FaMapMarkerAlt className='text-3xl text-blue-700 mr-4' />
              <p className='text-lg font-semibold'>
                <span className='text-xl font-bold'>Dirección: </span>
                <span>Villa Puchuldiza, Iquique</span>
              </p>
            </div>

            <div className='flex items-center mb-8'>
              <FaPhone className='text-3xl text-blue-700 mr-4' />
              <p className='text-lg font-semibold'>
                <span className='text-xl font-bold'>Teléfono: </span>
                <span>+1 (123) 456-7890</span>
              </p>
            </div>

            <div className='flex items-center'>
              <FaClock className='text-4xl text-blue-700 mr-4' />
              <p className='text-lg font-semibold'>
                <span className='text-xl font-bold'>Horario de atención: </span>
                <span className='text-xl font-bold text-accent'>
                  Lunes a Viernes, 9:00 AM - 6:00 PM
                </span>
              </p>
            </div>
          </div>

          {/* Right side: Google Map */}
          {/* https://maps.app.goo.gl/X8DVbKPymM2hktnj8 */}

          {/* <div className='lg:w-1/2 h-[400px] lg:h-auto'> */}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3743.312198869026!2d-70.1362972882024!3d-20.245882981136376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE0JzQ1LjIiUyA3MMKwMDgnMDEuNCJX!5e0!3m2!1sen!2scl!4v1725686870610!5m2!1sen!2scl'
            width='600'
            height='450'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            title='Iquique, Primera Region, Chile'
          ></iframe>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Ubicacion

//
