import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'

function App() {

  return (
    <>
    <Products/>
    <Signup/>
    <Login/>
    </>
  )
}

export default App
