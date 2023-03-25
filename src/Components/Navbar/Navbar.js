import React, { useState } from "react";
import "./navbar.css";
import { TbBrain, TbGridDots } from "react-icons/tb/index";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState("navBar");
  const showNav = () => {
    setToggle("navBar activeNavbar");
  };
  const hideNav = () => {
    setToggle("navBar");
  };
  const navToggle = () => {
    setToggle(toggle === "navBar" ? showNav : hideNav);
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

        <div className={toggle}>
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

          <div onClick={navToggle} className="closeNavBar">
            <MdClose className="icon" />
          </div>
        </div>
        <div onClick={navToggle} className="toogleNavBar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
