import { useState } from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import HomePage from '../pages/HomePage'

function App() {

  return (
    <div>
      <Navigation/>
      <HomePage/>
    </div>
  )
}

export default App
