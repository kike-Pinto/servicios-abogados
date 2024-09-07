// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='bg-primary-darker py-[24px] text-white text-sm text-center'>
//       2024 &copy; Kike Pinto
//     </footer>
//   )
// }

// export default Footer

import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white py-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex mb-4'>
          <a
            href='https://www.facebook.com/TU_PAGINA'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-gray-300 mr-4'
          >
            <FaFacebook className='text-2xl' />
          </a>
          <a
            href='https://www.twitter.com/TU_PAGINA'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-gray-300 mr-4'
          >
            <FaTwitter className='text-2xl' />
          </a>
          <a
            href='https://www.instagram.com/TU_PAGINA'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-gray-300'
          >
            <FaInstagram className='text-2xl' />
          </a>
        </div>
        <p className='text-sm text-gray-300 mb-4'>
          &copy; 2024 Kike Pinto. Todos los derechos reservados.
        </p>
        <p className='text-sm text-gray-300'>
          Dirección: Villa Puchuldiza, Teléfono: +1 (123) 456-7890
        </p>
      </div>
    </footer>
  )
}

export default Footer
