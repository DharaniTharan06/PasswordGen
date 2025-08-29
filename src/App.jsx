import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen inset-0 fixed' style={{backgroundColor: "lavenderblush"}}>
      <div className='flex flex-wrap ' style={{backgroundColor:"grey"}}>
        <div></div>
      </div>
    </div>
  )
}

export default App
