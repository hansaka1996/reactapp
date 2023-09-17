import React, { Component } from "react";
import logo from "./images/hansaka.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

const whiteText = {
  color: "white",
};

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <nav
          className="nav"
          id="navbar"
          style={{ backgroundColor: `rgb(79 181 241 / 41%)` }}
        >
          <div className="nav-content">
            <img
              src={logo}
              className="nav-logo"
              alt="Logo"
              onClick={this.scrollToTop}
              style={{ width: "253px", height: "65px" }}
            />

            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={whiteText}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={500}
                  style={whiteText}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                  style={whiteText}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                  style={whiteText}
                >
                  Timeline
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={500}
                  style={whiteText}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
