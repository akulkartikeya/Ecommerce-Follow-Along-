import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'
import { BrowserRouter } from 'react-router-dom'
import AllRouting from './AllRouting'

function App() {

  return (
    <>
    <BrowserRouter>
      <AllRouting/>
    </BrowserRouter>

    </>
  )
}

export default App
