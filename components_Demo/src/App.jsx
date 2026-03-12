// import React from 'react'
// import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Card from './components/Card'

// const App = () => {
//   const User="Akshara"
//   return (
//     // <>
//     // <Header />
//     // <Navbar />
//     // <Footer />
//     // </>
//     <div >
//       <Card user={User}/>
//       {/* <Card user="Pari" /> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Card from './components/Card'
// const App = () => {
//   return (
//     <div>
//       <div className='p-6 '>
//         <Card user="Akshara" surname="Gupta" age='69' />
//       </div>

//     </div>
//   )
// }

// export default App


//--------------API Calling-------------------------------
import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])
  async function getData(){
   const response=await axios.get('https://picsum.photos/v2/list')
   console.log(response.data)
   setdata(response.data)
   
  }
  return (
    <div>
      <button onClick={getData}className='bg-orange-500 m-4 text-2xl text-white rounded px-6 py-3 active:scale-95'>Get Data</button>
      <div className='p-5 mt-5 bg-gray-600'>
      {
        data.map(function(elem,idx){
          return <div key={idx} className='h-40 bg-white flex items-center justify-between m-3 px-4'>
              <img className='h-30 p-2 w-32'src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
          </div>
       
        })
      }
      </div>
    </div>
  )
}

export default App

