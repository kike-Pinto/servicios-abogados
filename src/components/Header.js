import React, { useEffect, useState } from 'react'

// import components
import Nav from './Nav'
import NavMobible from './NavMobile'

// import Logo
// import Logo from '../assets/img/Logo2.jpg'
import Logo from '../assets/img/logo11.png'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setBg(true)
      } else {
        setBg(false)
      }
    })
  })

  return (
    <header
      className={`${
        bg && 'bg-white shadow-md py-4'
      } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <a href='/'>
          <img className='w-[230px] h-[100px]' src={Logo} alt='' />
        </a>
        {/* Nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobible />
      </div>
    </header>
  )
}

export default Header
