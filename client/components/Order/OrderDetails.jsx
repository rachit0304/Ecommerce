import React from 'react'
import OrderTracker from './OrderTracker'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
      <div>
        <h1 className='font-bold text-xl py-2'>Delievery address</h1>
      </div>

      <div className='py-20'>
        <OrderTracker activeStep={3} />
      </div>
    </div>
  )
}

export default OrderDetails
