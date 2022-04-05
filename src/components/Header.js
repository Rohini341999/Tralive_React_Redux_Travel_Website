import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar/Navbar.component";
import touristBus from "../img/post_header_bus.webp";
import "./header.css";

const Header = () => (
  <div className="header-container-block">
    <header className="header-container-tag">
      <div className="post-nav-header-container">
        <h1 className="post-nav-header-container-inner-title">
          Lifelong memories just a few seconds away
        </h1>
        <h4 className="post-nav-header-container-inner-subtitle">
          Let’s start your journey with us, your dream will come true
        </h4>
        <Link to="/explore" className="post-nav-header-container-inner-button">
          Explore Destinations
        </Link>
      </div>
    </header>

    <section className="post-header-section">
      <img
        className="section-inner-tourist-bus-img"
        src={touristBus}
        alt="a moving tourist bus"
      ></img>
    </section>
  </div>
);

export default Header;
