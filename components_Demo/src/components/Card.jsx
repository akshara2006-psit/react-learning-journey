import React from 'react'

const Card = (props) => {
   console.log(props)
  return (
    <div className='bg-white text-black inline-block p-6 text-center rounded m-4'>
      <h1 className='text-black font-bold bg-white'>{props.user} {props.surname}</h1>
      <h2 className='text-black font-bold bg-white'>{props.age}</h2>
      <button className='font-bold'>Add Friend</button>
    </div>
  )
}

export default Card
