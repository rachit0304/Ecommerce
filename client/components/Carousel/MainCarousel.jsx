import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
   1,1,1,1
].map((item)=>(<img src="https://ruminim1.flixcart.com/image/612/612/xif0q/ethnic-set/j/t/a/xl-mk-01-peech-marudhara-original-imagzwze8huxjfgf.jpeg?"></img>))

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        autoPlay
        infinite
        disableButtonsControls
        autoPlayInterval={1200}
    />
);

export default MainCarousel;
