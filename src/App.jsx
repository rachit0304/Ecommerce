import { useState } from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import HomePage from '../pages/HomePage'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Cart from '../components/Cart/Cart'

function App() {

  return (
    <div>
      <Navigation/>
      {/* <div>
        <Product/>
      </div> */}
      <div>
        {/* <ProductDetails/> */}
      </div>
      <Cart/>
      {/* <HomePage/> */}
      <Footer/> 
    </div>
  )
}

export default App
