import React from 'react'

const Card2 = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-3xl '>
        <img  className='h-full w-full object-cover'src="https://i.pinimg.com/736x/77/71/68/7771683223d86b237a3304d6f32828b9.jpg" alt="" />
      
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex items-center justify-center'>2</h2>
        
        <div>
            <p className='text-xs text-blue-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga, illo quo exercitationem tenetur numquam nemo suscipit deserunt quidem fugit quam assumenda pariatur voluptatibus a debitis corrupti eius? Laudantium, nemo!</p>
            <div className='flex gap-4'>
                <button className='bg-blue-600 text-white font-semibold px-7 rounded-full'>Satisfied</button>
                <button className='bg-blue-600 px-3 py-2 rounded-full'><i ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></i></button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card2
