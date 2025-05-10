import { useState } from 'react'
import './App.css'

function App() {
  const [len , setlen] = useState(0)
  const [ numberallow , setnumberallow] = useState(false)
  const [char , setchar]= useState(false)

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password generator</h1>
    </>
  )
}

export default App
