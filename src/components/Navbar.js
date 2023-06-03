'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='fixed bg-white top-0 w-[100%] z-20 shadow-md'>
      <div className='container mx-auto flex justify-between items-center px-4 py-4'>
        <div className='flex gap-1 items-center text-xl  md:text-2xl font-bold'>
          <Link href={'/'}>
            <span className='italic'>Clean </span>
            <span className='italic text-green-600'>Time</span>
          </Link>
        </div>
        <div className='hidden md:flex justify-around gap-6 tracking-wider text-gray-600'>
          <Link href={'/'} className='hover:text-green-700'>
            Главная
          </Link>
          <Link href={'#services'} className='hover:text-green-700'>
            Наши услуги
          </Link>
          <Link href={'/'} className='hover:text-green-700'>
            Прайс лист
          </Link>
         
        </div>
        <div className=''>
          <button className='hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-700 hover:text-white'>
            Позвонить
          </button>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className='md:hidden block cursor-pointer'
            size={28}
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            className='md:hidden block cursor-pointer'
            size={28}
          />
        )}
      </div>
      {/* Responsive menu */}
      <div
        className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[60px] 
        ${toggle ? `left-[0]` : `left-[-100%]`}`}>
        <Link href={'/'} className='hover:text-green-700 p-5'>
          Главная
        </Link>
        <Link href={'/'} className='hover:text-green-700 p-5'>
          Наши услуги
        </Link>
        <Link href={'/'} className='hover:text-green-700 p-5'>
          Прайс лист
        </Link>
      
        <div className='flex flex-col gap-5 items-center mt-48'>
          <div className='bg-green-600 w-[250px] h-[1px]'></div>
          <div className='flex gap-8 '>
            <Link href='/' target='_blank'>
              <AiOutlineInstagram
                size={25}
                className='text-green-600 hover:translate-y-1 duration-300'
              />
            </Link>
            <Link href='/' target='_blank'>
              <AiOutlineWhatsApp
                size={25}
                className='text-green-600 hover:translate-y-1 duration-300'
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
