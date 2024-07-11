import { useState } from 'react'
import './App.css'
import CustomerRoutes from './Routers/CustomerRoutes'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
        <Route></Route>
      </Routes>

    </div>
  )
}

export default App
