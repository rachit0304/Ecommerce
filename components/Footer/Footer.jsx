import { Box, Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' 
      container
      sx={{bgcolor: 'black' , color: 'white' , py:3}}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Company </Typography>
          <Box>
          <Button className='pb-5' gutterBottom> About </Button>
          </Box>
          <Box>
          <Button className='pb-5' gutterBottom> Blog </Button>
          </Box>          
          <Box>
          <Button className='pb-5' gutterBottom> Press </Button>
          </Box>          
          <Box>
          <Button className='pb-5' gutterBottom> Partners </Button>
          </Box>          
          <Box>
          <Button className='pb-5' gutterBottom> Jobs </Button>
          </Box>        
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Solutions </Typography>
          <Box>
          <Button className='pb-5' gutterBottom> Marketing </Button>
          </Box>
          <Box>
          <Button className='pb-5' gutterBottom> Analytics </Button>
          </Box>          
          <Box>
          <Button className='pb-5' gutterBottom> Commerce </Button>
          </Box>          
          <Box>
          <Button className='pb-5' gutterBottom> Insights </Button>
          </Box>          
          <Box>
          <Button className='pb-5' gutterBottom> Support </Button>
          </Box>        
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Documentation </Typography>
          <Box>
          <Button className='pb-5' gutterBottom> Guides </Button>
          </Box>
          <Box>
          <Button className='pb-5' gutterBottom> API Status </Button>
          </Box>                 
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Legal </Typography>
          <Box>
          <Button className='pb-5' gutterBottom> Claim </Button>
          </Box>
          <Box>
          <Button className='pb-5' gutterBottom> Privacy </Button>
          </Box>          
          <Box>
          <Button className='pb-5' gutterBottom> Terms </Button>
          </Box>          
      
          </Grid>


          <Grid className='pt-20' item xs={12}>
            <Typography variant='body2' component="p" align='center'>
              &copy; 2023 Rachit Company. All rights reserved.
            </Typography>
            <Typography variant='body2' component="p" align='center'>
              Made with love by Rachit Sharma
            </Typography>

            <Typography variant='body2' component="p" align='center'>
              Icons made by {' '}
              <Link href="">Freepik {''}</Link>
              from{' '}
              <Link href="https://www.flaticon.com/">
              www.flaticon.com</Link>
            </Typography>
          </Grid>

      </Grid>
    </div>
  )
}

export default Footer
