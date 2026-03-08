// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    // <div>
    //   <h1>App</h1>              error
    //   <h2>App</h2>
    // </div>
    // <div></div>



    // <><div>
    //   <h1>App</h1>             
    //   <h2>App</h2>
    //  </div>
    //  <div><h1>Chacha</h1></div></>

    <div>
      {/* <div className='card'>
        <h1>Akshara Gupta</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione eaque iste quod iure vero reiciendis autem perspiciatis. Voluptatum odit rerum ratione! Fuga nam laborum molestiae rerum facere corporis. Repellat.</p>
      </div> */}
       <Navbar/>
      <Card />
     
    </div>
  )
}

export default App
