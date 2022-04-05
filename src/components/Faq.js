import React from "react";
import "./faq.css";
import PlusIcon from "../icons/plusIcon";
import MinusIcon from "../icons/minusIcon";
import middleLady from "../img/middle_lady.webp";

function Faq() {
  return (
    <>
      <div className="faq-title-heading-block">
        <h5 className="faq-title">FAQ </h5>
        <h1 className="faq-heading">Full range of travel service</h1>
      </div>
      <div className="faq-container">
        <div className="faq-left-block">
          <div className="faq-questions-dropdown-block">
            <a className="faq-questions-dropdown-content-link" href="#">
              <span className="dropdown-icon">
                <PlusIcon />
              </span>
              <span className="dropdown-title">
                Starts the automated process.
              </span>
            </a>
            <a className="faq-questions-dropdown-content-link" href="#">
              <span className="dropdown-icon">
                <PlusIcon />
              </span>
              <span className="dropdown-title">
                The automated process starts.
              </span>
            </a>
            <a
              className="faq-questions-dropdown-content-link collapsed"
              href="#"
            >
              <span className="dropdown-icon">
                <MinusIcon />
              </span>
              <span className="dropdown-title">Automated process starts.</span>
            </a>
            <div className="collapsed-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              similique adipisci praesentium.Reprehenderit optio placeat quasi
              excepturi architecto, explicabo facilis perspiciatis error maxime
              magnam.
            </div>
            <a className="faq-questions-dropdown-content-link" href="#">
              <span className="dropdown-icon">
                <PlusIcon />
              </span>
              <span className="dropdown-title">
                Process the automated magic.
              </span>
            </a>
          </div>
        </div>
        <div className="faq-right-block">
          <img
            className="faq-lady-img-block"
            src={middleLady}
            alt="Lady showing multiple travel options"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Faq;
