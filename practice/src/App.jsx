import React from 'react'
import { useState } from 'react'

const App = () => {

const [username, setusername] = useState("")
function submitHandler(e){
    e.preventDefault();
    console.log("The form has been submitted");
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input value= {username}
        onChange={(e)=>{
            setusername(e.target.value);
        }}
        className='px-4 py-5 m-3  border-double border-red-400 border-opacity-20 bg-white'
         type="text" 
         placeholder='Enter your name' />
       <br />
         <button className='px-2 py-3 m-9 bg-red-500 rounded'>Submit</button>
     </form>
    </div>
  )
}

export default App







// ---------------------We have prevented the submition of the form--------------------------

// import React from 'react'

// const App = () => {
//   function submitHandler(e){
//     e.preventDefault();
//     console.log("The form has been submitted");
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{submitHandler(e)}}>
//         <input className='px-4 py-5 m-3  border-double border-red-400 border-opacity-20 bg-white' type="text" placeholder='Enter your name' />
//         <br />
//         <button className='px-2 py-3 m-9 bg-red-500 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
