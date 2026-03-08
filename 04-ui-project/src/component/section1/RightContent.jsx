import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

const RightContent = () => {
  return (
    <div className='h-full w-2/3  px-2 py-3 flex gap-5'>
      <Card />
      <Card2 />
      <Card3 />
    </div>
  )
}

export default RightContent
