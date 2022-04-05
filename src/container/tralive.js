import React from "react";
import "./tralive.css";
import Header from "../components/Header";
import BodyCardCarousel from "../components/BodyCardCarousel";
import AboutUs from "../components/AboutUs";
import WhatCustomersSay from "../components/WhatCustomersSay";
import Faq from "../components/Faq";
import ImageList from "../components/ImageList";
import Footer from "../components/Footer";

const Tralive = () => {
  return (
    <React.Fragment>
      <div className="header-parent">
        <Header />
      </div>
      <div className="carousel-parent">
        <BodyCardCarousel />
      </div>
      <div className="aboutus-parent">
        <AboutUs />
      </div>
      <div className="what-customers-say-parent">
        <WhatCustomersSay />
      </div>
      <div className="faq-parent">
        <Faq />
      </div>
      <div className="image-list-parent">
        <ImageList />
      </div>
    </React.Fragment>
  );
};

export default Tralive;
