import React from 'react'
import './ProductCard.css'

const ProductCard = ({item}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
       <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={item.image} alt={item.title} />
       </div>

       <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{item.brand}</p>
            <p>{item.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{item.selling_price}</p>
            <p className='line-through opacity-50'>{item.price}</p>
            <p className='text-green-600 font-semibold'>{item.disscount}</p>
        </div>
       </div>

    </div>
  )
}

export default ProductCard
