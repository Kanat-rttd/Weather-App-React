// import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='font-serif text-neutral-950 border-solid border-2 rounded-xl p-16 bg-green-100'>
      <h1>Weather App</h1>
      <Card />
    </div>
  )
}

export default App
