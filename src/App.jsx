
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
