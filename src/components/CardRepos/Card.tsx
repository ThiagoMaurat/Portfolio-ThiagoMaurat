import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import PokeImg from '../../assets/images/PokePage.png';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Card() {
  return (
    <Carousel 
    responsive={responsive}
    swipeable={false}
  draggable={false}
  showDots={true}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
    >
    <div>
      <a href="https://github.com/ThiagoMaurat?tab=repositories">
      <Image src={PokeImg} alt=""/>
      </a>     
    </div>
    <div>
      <a href="https://github.com/ThiagoMaurat?tab=repositories">
      <Image src={PokeImg} alt=""/>
      </a>     
    </div>
    <div>
      <a href="https://github.com/ThiagoMaurat?tab=repositories">
      <Image src={PokeImg} alt=""/>
      </a>     
    </div>
    <div>
      <a href="https://github.com/ThiagoMaurat?tab=repositories">
      <Image src={PokeImg} alt=""/>
      </a>     
    </div>
    
  </Carousel>
  )
}
