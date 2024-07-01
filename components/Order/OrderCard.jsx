import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent: "space-between"}}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img src="" alt="" />
            <div className="ml-5 space-y-2">
              <p className="">title</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>

            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹4442</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
           <p>
            <AdjustIcon sx={{width: "15px" , height: "15px"}} className='mr-2 text-green-600' />
            <span>
              Delieverd on march 23
            </span>
            <p className='text-xs'>

            </p>
          </p>
          </div>}
          {false && <p>
            <span>

            Expected delievery on mar 22
            </span>
          </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
