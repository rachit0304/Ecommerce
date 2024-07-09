import { useState } from 'react'
import './App.css'
import Navigation from '../components/Navigation/Navigation'
import HomePage from '../pages/HomePage'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Cart from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Checkout'
import Order from '../components/Order/Order'
import CustomerRouters from './Routers/CustomerRouters'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        <Route></Route>
      </Routes>

    </div>
  )
}

export default App
