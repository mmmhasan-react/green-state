import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignOut from './pages/SignOut'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Header from './components/header/Header'

const App = () => {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-out' element={<SignOut />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 