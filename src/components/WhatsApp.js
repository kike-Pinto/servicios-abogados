import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppContact = () => {
  return (
    <div className='fixed z-50' style={{ top: '100px', right: '10px' }}>
      <a
        href='https://wa.me/YOUR_PHONE_NUMBER?text=Hola,%20quiero%20más%20información.'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300'
      >
        <FaWhatsapp className='text-white text-2xl' />
      </a>
    </div>
  )
}

export default WhatsAppContact
