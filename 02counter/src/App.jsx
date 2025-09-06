import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
     <h1>Learn react with Me</h1>
     <h2>counter value: {count} </h2>
     <button onClick={addvalue}>Add Value</button> {" "}
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
