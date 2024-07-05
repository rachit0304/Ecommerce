import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";



const HomeSecCarousel = ({data, sectionName}) => {

  const[activeIdx , setActiveIdx] = useState(0);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  
  const slidePrev = ()=>setActiveIdx(activeIdx-1);
  const slideNext = ()=>setActiveIdx(activeIdx+1);

  const syncActiveIdx = ({item})=>setActiveIdx(item);

  const items = data.slice(0,10).map((item) => <HomeSectionCard product = {item}/>);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIdx}
          activeIndex={activeIdx}
        />
       {activeIdx !== items.length - 5 && <Button
          className="z-50"
          variant="contained"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            background: "white",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
        {activeIdx !== 0 && <Button
          className="z-50"
          variant="contained"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            background: "white",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSecCarousel;
