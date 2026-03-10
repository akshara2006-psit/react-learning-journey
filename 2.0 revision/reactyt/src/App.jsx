import React from "react";
function App() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <h1 className="text-red-500 text-7xl font-bold">
        Tailwind Working
      </h1>
    </div>
  );
}

export default App;


// --------------------------------------------------

// defaullt example

// import React,{useState} from 'react'

// const App = () => {
//   // var A="Akshara"
//   var age=20
//   const [A, setA  ] = useState("Akshara")
//   function abc(){
//     setA("Pari")
//   }


 
//   return (
//     <div>
//       <h1>Hello {A},The age of {A} is {age}</h1>
//       <button onClick={abc}>Change User</button>
//     </div>
//   )
// }

// export default App



// -------------------------------------------------------------
// default function creation and then export

// function App(){
//   return <div>
//     <h1>Hello</h1>
//     <h2>This is Akshara!!!!</h2>
//     <h3>How are you!!!!!!!!</h3>
//   </div>
// }
// export default App