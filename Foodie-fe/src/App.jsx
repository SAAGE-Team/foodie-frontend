import { useState } from 'react'
// import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import { Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/login' element ={<Login /> } ></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default App
