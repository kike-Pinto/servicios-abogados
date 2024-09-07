import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-accent pt-[54px] pb-[74px] mt-[-70px]'>
      <div className='container mx-auto px-8 text-center'>
        <h3 className='font-primary text-[40px] font-extrabold leading-[1.2] text-white mb-[12px]'>
          Subscríbete a nuestro Boletín Informativo
        </h3>
        <p className='mb-[40px] mt-[40px] text-white text-sm'>
          Sé el primero en recibir las últimas noticias sobre nosotros
        </p>
        <form className='max-w-[600px] mx-auto flex flex-col lg:flex-row'>
          <input
            className='form-control mb-4'
            placeholder='Tu correo elecronico'
            type='email'
          />
          <button className='btn bg-primary hover:bg-primary-hover lg:max-w-[250px] lg:ml-4 px-2'>
            Unete a nosotros
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
