import React, { useState } from "react";
import "./navbar.css";
import { TbBrain, TbGridDots } from "react-icons/tb/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = (event) => {
    setToggle((toogle) => !toggle);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <TbBrain className="icon" /> Mood & Mind.
            </h1>
          </a>
        </div>

        <div className={!toggle ? "navBar" : "navBar activeNavbar"}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Services
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Providers
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Patient Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                (555)-555-555
              </a>
            </li>{" "}
            <button className="btn">
              <a href="#" className="navLink">
                REQUEST APPOINTMENT
              </a>
            </button>
          </ul>
        </div>
        <div onClick={handleClick} className="toogleNavBar iconButtonContainer">
          <TbGridDots className="icon iconButton" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
