import React from "react";
import "./navbar.css";
import { TbBrain, TbGridDots } from "react-icons/tb/index";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <TbBrain className="icon" /> Mood & Mind
            </h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="listItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="navLink">
                Services
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="navLink">
                Providers
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="navLink">
                Patient Resources
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="listItem">
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

          <div className="closeNavBar">
            <MdClose className="icon" />
          </div>
        </div>
        <div className="toogleNavBar">
          <TbGridDots />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
