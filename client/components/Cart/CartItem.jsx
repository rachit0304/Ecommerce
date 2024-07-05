import { IconButton , Button } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className="flex items center">
            <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="" />

            </div>

            <div className='ml-5 space-y-1'>
              <p className='font-semibold'>Title</p>
              <p className='opacity-70'>Size: L, White</p>
              <p className='opacity-70 mt-2'>Seller : Brand name</p>
              <div className='flex space-x-5 items-center text-gray-900 pt-6'>
            <p className='font-semibold'>
                ₹199
            </p>
            <p className='opacity-60 line-through'>
                ₹250
            </p>
            <p className='text-green-600 font-semibold'>
                5% off
            </p>
            </div>
            </div>


        </div>

        
        <div className="lg:flex items-center lg:space-x-10 pt-4">
              <div className='flex items-center lg:space-x-2'>
                <IconButton>
                  <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>3
                </span>
                <IconButton sx={{color: "RGB(145 85 253)"}}><AddCircleOutlineIcon/></IconButton>


                <div>
                  <Button>Remove</Button>
                </div>

              </div>
            </div>
      
    </div>
  )
}

export default CartItem
