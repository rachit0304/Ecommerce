import { useState } from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import HomePage from '../pages/HomePage'
import Footer from '../components/Footer/Footer'

function App() {

  return (
    <div>
      <Navigation/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
