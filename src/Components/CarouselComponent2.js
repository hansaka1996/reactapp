import React, { Component } from "react";
import "./Timeline.css";
import Carousel from "react-bootstrap/Carousel";
import crime1 from "./images/crime1.png";
import crime2 from "./images/crime2.png";
import crime3 from "./images/crime3.png";
import crime4 from "./images/crime4.png";
import crime5 from "./images/crime5.png";





function CarouselComponent2() {
  return (
    <div

    >
      <Carousel
      
      data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={crime1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={crime2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={crime3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={crime4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={crime5} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselComponent2;
