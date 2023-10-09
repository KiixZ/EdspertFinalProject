// import { useState } from 'react'
import React from 'react'
import NavBar from '../components/MainProduct/Nav'
import MainProduct from '../components/MainProduct/Main.jsx'
import Pagination from '../components/Pagnation'
import Foot from '../components/Footer'

// import './homess.css'
function App() {
  return (
    <>
    <NavBar/>
    <MainProduct/>
    <Pagination/>
    <Foot/>
    </>
  )
}

export default App
