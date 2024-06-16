import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};

const HomeSecCarousel = () => {
  const items = [1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          autoPlay
          disableButtonsControls
          disableDotsControls
          autoPlayInterval={1200}
        />
        <Button
          className="z-50"
          variant="contained"
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
        </Button>
        <Button
          className="z-50"
          variant="contained"
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
        </Button>
      </div>
    </div>
  );
};

export default HomeSecCarousel;
