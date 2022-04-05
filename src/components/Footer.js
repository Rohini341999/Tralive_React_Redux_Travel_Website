import React from "react";
import "./footer.css";
import logo from "../img/tralive_logo.webp";
import TwitterIcon from "../icons/twitterIcon";
import FacebookIcon from "../icons/facebookIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import PinterestIcon from "../icons/pinterestIcon";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-intro-social-icons-block">
          <img className="footer-logo-img" src={logo} alt="logo"></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            similique adipisci praesentium.Reprehenderit optio placeat quasi
            excepturi architecto, explicabo facilis perspiciatis error maxime
            magnam.
          </p>
          <div className="footer-social-icons-block">
            <TwitterIcon />
            <FacebookIcon />
            <LinkedinIcon />
            <PinterestIcon />
          </div>
        </div>
        <div className="footer-navigation-menu-block">
          <h2>Navigation</h2>
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="footer-services-block">
          <h2>Services</h2>
          <p>Blackforest</p>
          <p>Bodhubon</p>
          <p>Rongdhonu</p>
          <p>Meghrong</p>
        </div>
        <div className="footer-contact-us-block">
          <h2>Contact Us</h2>
          <p>76/A, Green Lane, Dhanmondi, NYC</p>
          <p>demomail89@gmail.com</p>
          <p>+10 (78) 738-9083</p>
        </div>
      </div>
      <footer className="footer-copyright-statement">
        Copyright &#169; 2021 All rights reserved | Made with love{" "}
        <strong>&#10084;</strong> by Tralive.
      </footer>
    </>
  );
}

export default Footer;
