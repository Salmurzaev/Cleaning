import React from 'react'
import Headline from './Headline'
import Card from './Card'
const items = [
  {
    id: 0,
    title: 'Генеральная уборка',
    price: '60 с/м2',
    description: [
      { id: 0, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 1, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 2, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 3, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 4, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' }
    ]
  },
  {
    id: 1,
    title: 'Ежедневная уборка',
    price: '39 с/м2',
    description: [
      { id: 0, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 1, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 2, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 3, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 4, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' }
    ]
  },
  {
    id: 2,
    title: 'Уборка после ремонта',
    price: '80 с/м2',
    description: [
      { id: 0, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 1, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 2, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 3, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' },
      { id: 4, content: 'Tempor velit commodo est officia. Ullamco pariatur adipisicing ' }
    ]
  }
]

const Services = () => {
  return (
    <section id='services' className='mx-auto px-4 py-10'>
      <Headline title={'Услуги'} />
      <div className='py-10 flex flex-wrap items-center  justify-center  '>
        <div className='flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-around items-center  container'>
          {items.map(el => (
            <Card item={el} key={el.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
