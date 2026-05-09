 HEAD
import React from 'react'
import Navbar from './Components/Features/Navbar';

function App() {
  return (
    <>
   <Navbar />
   </>
  )
}
export default App

import React from 'react' 

import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'


function App() {
  

  return (
    <>
<BrowserRouter>

<Routes>

<Route path="/" element={<Register/>} />
<Route path="/login" element={<Login/>}/>



</Routes>
  
</BrowserRouter>
      
    </>
  )
}

export default App