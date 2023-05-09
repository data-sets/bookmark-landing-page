import React, { Component } from "react";
import Logo from "../images/logo-bookmark.svg";
import Menu from "../images/icon-hamburger.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <nav className="nav-section">
          <div className="nav-section__content container">
            <div>
              <img src={Logo} alt="Book Mark Logo" />
            </div>
            <ul className="hide-for-mobile">
              <li>
                <Link
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.scrollToTop}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.scrollToTop}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.scrollToTop}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
            <ul className="hide-for-desktop">
              <button>
                <img src={Menu} alt="Hamburger Menu" />
              </button>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
