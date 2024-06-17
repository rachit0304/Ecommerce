import React from 'react'
import MainCarousel from '../components/Carousel/MainCarousel'
import HomeSecCarousel from '../components/HomeSecCarousel/HomeSecCarousel'
import { kurtaPage1 } from "../data/kurta/kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSecCarousel data={kurtaPage1} sectionName={"Women's Dress"}/>
      <HomeSecCarousel data={kurtaPage1} sectionName={"Men's Kurta"}/>
      <HomeSecCarousel data={kurtaPage1} sectionName={"Men's shoes"}/>
      <HomeSecCarousel data={kurtaPage1} sectionName={"Women's Saree"}/>
     

      </div>
    </div>
  )
}

export default HomePage
