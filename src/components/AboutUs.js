import React from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";
import twoPassengersImage from "../img/middle_header_two_passengers.webp";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-leftside-img-block-container">
        <img
          className="aboutus-leftside-img-block"
          src={twoPassengersImage}
          alt="Two passengers ready to travel"
        ></img>
      </div>
      <div className="aboutus-information-block-container">
        <h5 className="aboutus-information-title">About Us </h5>
        <h1 className="aboutus-information-heading">
          Get ready for real time adventure
        </h1>
        <p className="aboutus-information-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          similique adipisci praesentium.Reprehenderit optio placeat quasi
          excepturi architecto, explicabo facilis perspiciatis error maxime
          magnam.Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
          omnis est laudantium voluptatem voluptas!
        </p>
        <Link to="/explore" className="post-aboutus-booking-button">
          Book your Destination
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
