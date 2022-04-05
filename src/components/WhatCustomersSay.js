import React from "react";
import "./whatcustomerssay.css";
import markAnthonyCEO from "../img/mark_anthony_ceo.webp";

function WhatCustomersSay() {
  return (
    <div className="what-customers-say-container">
      <h1 className="what-customers-say-title">What Customers Say</h1>
      <p className="what-customers-say-paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
        similique adipisci praesentium.Reprehenderit optio placeat quasi
        excepturi architecto, explicabo facilis perspiciatis error maxime
        magnam.
      </p>
      <div className="what-customers-say-person-intro-block">
        <img
          className="person-intro-img"
          src={markAnthonyCEO}
          alt="pic of Mark Anthony CEO of Tralive"
        ></img>
        <div className="person-intro-name-designation-block">
          <span className="person-intro-name">Mark Anthony</span>
          <span className="person-intro-designation">CEO of Tralive.</span>
        </div>
      </div>
    </div>
  );
}

export default WhatCustomersSay;
