import React from 'react'

const App = () => {
  function btnclicked(){
    console.log("button is clicked");
  }
  return (
    <div>
      <h1>Hello,Sarthak</h1>
      <button onClick={btnclicked}>Change user</button>
    </div>
  )
}

export default App
