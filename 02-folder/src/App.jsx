import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><Card user='aman' age={18} />
    <Card user="akshara" age={19}/></div>
  )
}

export default App
