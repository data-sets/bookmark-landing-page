import React, { Component } from "react";
import Logo from "../images/logo-bookmark.svg";
import LogoWhite from "../images/logo-bookmark-white.png";
import { slide as Menubar } from "react-burger-menu";
import { Link, animateScroll as scroll } from "react-scroll";

let styles = {
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    right: "28px",
    top: "18px",
  },
  bmCross: {
    background: "white",
    width: "3px",
    height: "25px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
  },
  bmMenu: {
    background: "rgb(37, 43, 70, 0.9)",
    fontSize: "1.15em",
    top: "0",
    height: "100vh",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
    padding: "30px",
    margin: "70px 0 0 0",
  },
  bmOverlay: {
    background: "none",
  },
  bmBurgerBars: {
    background: "black",
  },
  bmBurgerButton: {
    position: "absolute",
    width: "20px",
    height: "18px",
    right: "19px",
    top: "26px",
  },
};

export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <nav role="navigation" className="nav-section">
          <div className="nav-section__content container">
            <div>
              <img src={Logo} alt="Book Mark Logo" />
            </div>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
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
                  onClick={this.scrollToTop}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
            <ul>
              <Menubar styles={styles} right active fallDown>
                <div className="nav-section__logo">
                  <img src={LogoWhite} alt="Book Mark Logo" />
                </div>
                <ul className="nav-section__menu-list">
                  <li>
                    <Link
                      activeClass="active"
                      to="features"
                      spy={true}
                      smooth={true}
                      offset={-70}
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
                      onClick={this.scrollToTop}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">login</Link>
                  </li>
                </ul>
                <ul className="nav-section__social-media">
                  <li>
                    <a href="/" aria-label="Facebook Link">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" aria-label="Facebook Link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </Menubar>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
