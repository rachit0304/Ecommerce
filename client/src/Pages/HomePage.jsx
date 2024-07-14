import React from "react";
import HomeCarousel from "../../components/Carousel/HomeCarousel";
import { homeCarouselData } from "../../components/Carousel/HomeCaroselData";
import HomeProductSection from "../../components/Home/HomeProductSection";
import { mens_kurta } from "../Data/Men/men_kurta";
import { mens_jeans } from "../Data/Men/men_jeans";
import { mens_shirt } from "../Data/Men/men_shirt";
import { women_jeans } from "../Data/Women/women_jeans";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={women_jeans} section={"Women Jeans"} />
        <HomeProductSection data={mens_shirt} section={"Men's Shirt"} />
        <HomeProductSection data={mens_jeans} section={"Mens Jeans"} />
      </div>

      
    </div>
  );
};

export default Homepage;
