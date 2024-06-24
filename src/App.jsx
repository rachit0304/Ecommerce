import { useState } from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import HomePage from '../pages/HomePage'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'

function App() {

  return (
    <div>
      <Navigation/>
      <div>
        <Product/>
      </div>
      {/* <HomePage/> */}
      <Footer/> 
    </div>
  )
}

export default App
