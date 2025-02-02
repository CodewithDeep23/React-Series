import { useState } from 'react'
import './App.css'
// UI updation controlled by react

function App() {

  // let counter = Math.floor(Math.random()*10)
  let [counter, setCounter] = useState(1)
  const addValue = ()=>{
    // console.log("value", Math.floor(Math.random()*10))
    if(counter<20){
      setCounter(counter+1)
    }
  }
  const subValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  // Use hooks
  return (
    <>
     <h1>Hello counter</h1>
     <h3>Value: {counter}</h3>

     <button onClick={addValue}>Add value</button><br />
     <button onClick={subValue}>Remove value</button>
    </>
  )
}

export default App
