import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./image.png";
import image2 from "./image1.png";
import "./App.css";

function CarouselPage() {
  return (
    <div>
      <Carousel fade interval={1000}>
        <Carousel.Item>
          <div className="bg">
            <img className="d-block w-100" src={image1} alt="First slide" />
          </div>

          <Carousel.Caption className="caption-top-center">
            <div class="carousel-overlay">
              <h1>Welcome to Edugain!!</h1>
              <p>
                "A vibrant campus, a friendly face. A brighter future, a better
                place."
              </p>
              <p>
                Skill up, level up, your career's ascent. A world-class
                education, truly excellent exposure
              </p>
              <h2>Come and join us </h2>
              <h2> For admissions</h2>
              <button class="click-button">Click here</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg">
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <Carousel.Caption className="caption-top-center">
            <div class="carousel-overlay">
              <h1>Welcome to Edugain!!</h1>
              <p>
                "A vibrant campus, a friendly face. A brighter future, a better
                place."
              </p>
              <p>
                Skill up, level up, your career's ascent. A world-class
                education, truly excellent exposure
              </p>
              <h2>Come and join us </h2>
              <h2> For admissions</h2>
              <button class="click-button">Click here</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
