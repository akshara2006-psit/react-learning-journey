import React from 'react'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      
      <form className='flex gap-10'><div className='flex flex-col gap-5 justify-between px-2.5 py-4.5'>
        <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 border-2 rounded text-amber-500 w-full' />
        <input type="text" placeholder='Enter details' className='px-5 py-2.5 border-2 rounded text-amber-500 w-full '/>
        <button className='bg-white w-1/2 text-black px-5 py-2 rounded'>Add Note</button>
        </div>
         <img src="https://th.bing.com/th/id/OIP.PMzwz5Pvv5SYvPqyxieX0AHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=""  className=' '/>
      </form>
     
    
    </div>
  )
}

export default App
