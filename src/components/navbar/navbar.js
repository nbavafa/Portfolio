import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.css'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="overview"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="nav-text-top">overview</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              <p className="nav-text-top">about</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              <p className="nav-text-top">portfolio</p>

              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              <p className="nav-text-top">resume</p>

              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ><p className="nav-text-top">contact</p></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
