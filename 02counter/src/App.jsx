import { useState } from 'react'
import './App.css'

function App() {
const [ Counter, setCounter] = useState(0)

const addValue = () => {
  setCounter(Counter+1)
}

const removeValue = () => {
  setCounter(Counter-1)
}

 return (
  <>
   <h1>React learn with Me</h1>
   <h2>Counter : {Counter}</h2>
   <button onClick={addValue}>Add </button> {" "}
   <button onClick={removeValue}>Remove</button>
  </>
 )
}

export default App
