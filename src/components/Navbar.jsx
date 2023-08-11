import React, { useState } from 'react'
import { navLinks } from '../constants'
import { close, menu } from '../assets/images'

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)
  return (
    <nav className='w-full py-7 flex justify-between items-center navbar'>
      <h1 className='font-outfit font-bold txt-blue-gradient md:text-2xl  sm:text-xl text-[20px] cursor-pointer'>
        <a href="#home" className='text-gradient'>
          Legit Care
        </a>
      </h1>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
            key={index}
            className={`font-outfit font-medium text-white md:text-[20px] text-[16px] cursor-pointer ${navLinks.length - 1 === index ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='h-[32px] w-[32px] object-contain cursor-pointer' onClick={() => setToggle((prev) => !prev)}/>
      </div>

      <div
        className={`${toggle ? 'flex' : 'hidden'} sm:hidden bg-blue-gradient text-white p-6 absolute top-20 right-0 mx-4 my-2  min-w-[140px] rounded-xl`}
      >
        <ul className='list-none justify-center items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li 
              key={index}
              className={`font-outfit font-medium text-black md:text-[20px] text-[16px] cursor-pointer ${navLinks.length - 1 === index ? 'mb-0' : 'mb-3'}`}
              onClick={() => setToggle((prev) => !prev)}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
