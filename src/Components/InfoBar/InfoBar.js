import React from "react";
import "./infoBar.css";

const InfoBar = () => {
  return (
    <section className="container">
      <div className="contactInfo">
        <div className="phoneNumber">
          <span> P: </span>
          <a href="tel:+16234147715" className="element">
            623.414.7715
          </a>
        </div>
        <p className="spacer"> | </p>
        <div className="email">
          <p> E: </p>
          <a href="mailto:someemail@gmail.com" className="element">
            someemail@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
