import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='px-16 py-4 flex items-center gap-10 h-[90vh]'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1content
