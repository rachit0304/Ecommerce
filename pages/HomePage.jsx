import React from 'react'
import MainCarousel from '../components/Carousel/MainCarousel'
import HomeSecCarousel from '../components/HomeSecCarousel/HomeSecCarousel'

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSecCarousel/>
      <HomeSecCarousel/>
      <HomeSecCarousel/>
      <HomeSecCarousel/>

      </div>
    </div>
  )
}

export default HomePage
