import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-4xl font-bold text-blue-950'>Redux-Toolkit Todo</h1>
      <Addtodo />
      <Todos />
    </>
  )
}

export default App
