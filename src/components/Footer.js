import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-green-600 min-h-[450px] md:min-h-[250px] px-2'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16 md:py-8'>
          <div className='flex gap-1 items-center text-xl  md:text-2xl md:pt-16 lg:text-3xl font-bold'>
            <span className='italic text-white'>Clean </span>
            <span className='italic text-white'>House</span>
          </div>
          <div className='flex flex-col md:flex-row md:pt-16 gap-6 tracking-wider text-gray-800 text-center'>
            <Link href={'/'} className='hover:text-white'>
              Главная
            </Link>
            <Link href={'#services'} className='hover:text-white'>
              Наши услуги
            </Link>
            <Link href={'/'} className='hover:text-white'>
              Прайс лист
            </Link>
            <Link href={'/'} className='hover:text-white'>
              Контакты
            </Link>
          </div>
          <div className='flex  gap-x-5 items-center md:pt-16 '>
            <Link href='/' target='_blank'>
              <AiOutlineInstagram
                size={25}
                className='text-gray-700 hover:text-white hover:translate-y-1 duration-300'
              />
            </Link>
            <Link href='/' target='_blank'>
              <AiOutlineWhatsApp
                size={25}
                className='text-gray-700 hover:text-white hover:translate-y-1 duration-300'
              />
            </Link>
          </div>
        </div>
        <p className='text-white text-center text-sm pb-3 md:mt-12'>Something ? </p>
      </div>
    </footer>
  )
}

export default Footer
