import React from "react";
import ChevronLeftIcon from "../icons/chevronLeftIcon";
import ChevronRightIcon from "../icons/chevronRightIcon";
// import "./queries.css";
import "./bodyCardCarousel.css";

import neverEndingRoad from "../img/slider_image1_never_ending_road.webp";
import twoElephantsGrazing from "../img/slider_image2_two_elephants_grazing.webp";
import twoMountainsAboveClouds from "../img/slider_image3_two_mountains_above_clouds.webp";

function BodyCardCarousel() {
  return (
    <div className="carousel-header">
      <header className="pre-carousel-heading-container">
        <p className="pre-carousel-sub-heading">
          Check our best promotional tours
        </p>
        <h1 className="pre-carousel-heading">Upcoming Events</h1>
      </header>

      <div className="carousel-container">
        <div className="carousel-block">
          <img
            className="carousel-img"
            src={neverEndingRoad}
            alt="never ending road"
          />
          <div className="carousel-name-amount-block">
            <h5 className="img-destination-name">Splitzberg</h5>
            <span className="img-destination-amount">$1200</span>
          </div>
          <div className="carousel-dates-days-block">
            <span className="img-destination-dates">12 Jan - 18 Jan</span>
            <span className="img-destination-days">5 Days</span>
          </div>
        </div>
        <div className="carousel-block">
          <img
            className="carousel-img"
            src={twoElephantsGrazing}
            alt="two elephants grazing"
          />
          <div className="carousel-name-amount-block">
            <h5 className="img-destination-name">Splitzberg</h5>
            <span className="img-destination-amount">$1200</span>
          </div>
          <div className="carousel-dates-days-block">
            <span className="img-destination-dates">12 Jan - 18 Jan</span>
            <span className="img-destination-days">5 Days</span>
          </div>
        </div>
        <div className="carousel-block">
          <img
            className="carousel-img"
            src={twoMountainsAboveClouds}
            alt="never ending road"
          />
          <div className="carousel-name-amount-block">
            <h5 className="img-destination-name">Splitzberg</h5>
            <span className="img-destination-amount">$1200</span>
          </div>
          <div className="carousel-dates-days-block">
            <span className="img-destination-dates">12 Jan - 18 Jan</span>
            <span className="img-destination-days">5 Days</span>
          </div>
        </div>
        <button className="carousel-left-icon">
          <ChevronLeftIcon />
        </button>
        <button className="carousel-right-icon">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

export default BodyCardCarousel;
