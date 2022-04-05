import React from "react";
import "./imageList.css";
import highway from "../img/pre-footer-image1.webp";
import hotAirBalloon from "../img/pre-footer-image2.webp";
import moutains from "../img/pre-footer-image3.webp";
import island from "../img/pre-footer-image4.webp";
import clockTower from "../img/pre-footer-image5.webp";
import statueIsland from "../img/pre-footer-image6.webp";

function ImageList() {
  return (
    <div className="image-list-container">
      <img
        className="pre-footer-image-block"
        src={highway}
        alt="A International Highway"
      ></img>
      <img
        className="pre-footer-image-block"
        src={hotAirBalloon}
        alt="A Hot Air Balloon"
      ></img>
      <img
        className="pre-footer-image-block"
        src={moutains}
        alt="A range of Mountains"
      ></img>
      <img
        className="pre-footer-image-block"
        src={island}
        alt="An Island"
      ></img>
      <img
        className="pre-footer-image-block"
        src={clockTower}
        alt="A Greek Clock Tower"
      ></img>
      <img
        className="pre-footer-image-block"
        src={statueIsland}
        alt="A statue and an Island"
      ></img>
    </div>
  );
}

export default ImageList;
