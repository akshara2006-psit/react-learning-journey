import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className='flex px-5 py-10  items-center justify-between bg-emerald-700 text-bold'>
      <h2 className='text-2xl'>Akshara</h2>
      <div className='flex gap-8 items-center justify-items-end'>
        <h4 className='text-xl'>About</h4>
        <h4 className='text-xl'>Contact</h4>
        <h4 className='text-xl'>Services</h4>
        <h4 className='text-xl'>Your Account</h4>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
