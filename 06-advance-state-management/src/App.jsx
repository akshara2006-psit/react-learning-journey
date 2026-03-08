import React, { useState } from 'react'

const App = () => {
  // const [num, setNum]=useState(10)
  const [num, setNum] = useState(10);
  const [username, setName] = useState("Akshara")
  function changeNum(){
    setNum(30);
    setName("Pari");
  }
  return (
    <div>
      <h1>Value of num is {num} <br />Username is {username}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0);
//   function Increase(){
//     setNum(num+1)
//   }
//   function Decrease(){
//     setNum(num-1)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={Increase}>Increase</button>
//       <button onClick={Decrease}>Decrease</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num,setNum] = useState([10,20,30])
//   const btnclicked=()=>{
//     const newNum=[...num]
//     newNum.push(40);
//     setNum(newNum);
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnclicked}>Click</button>
//     </div>
//   )
// }

// export default App
