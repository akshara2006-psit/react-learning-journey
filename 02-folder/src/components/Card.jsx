import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
      <div className='parent'>
      <div className='child'>
        <img src="https://images.unsplash.com/photo-1762770663487-6c03bb94fe84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="pic" />
        <h4>{props.user}</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile</button>

      </div>
    </div>
    </div>
  )
}

export default Card
