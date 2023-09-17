import React, { Component } from "react";
import "./Timeline.css";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";

import portfolio1 from "./images/portfolio1.png";
import portfolio2 from "./images/portfolio2.png";
import portfolio3 from "./images/portfolio3.png";
import portfolio4 from "./images/portfolio4.png";



function CarouselComponent() {
  return (
    <div

    >
      <Carousel
      
      data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
