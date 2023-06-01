import React from 'react'
import Headline from './Headline'
import Card from './Card'

const Services = () => {
  return (
    <section id='services' className='mx-auto px-4 py-10'>
      <Headline title={'Услуги'} />
      <div className='py-10 flex flex-wrap items-center  justify-center  '>
        <div className='flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-around items-center  container   '>
          <Card title='Генеральная уборка' />
          <Card title='Генеральная уборка' />
          <Card title='Генеральная уборка' />
        </div>
      </div>
    </section>
  )
}

export default Services
