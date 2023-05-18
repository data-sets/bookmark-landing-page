import React, { Component } from "react";
import Logo from "../images/logo-bookmark.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import BookMark from "../images/logo-bookmark-1.png";

export default class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer-contact-section">
          <div className="footer-contact-section__container">
            <h5>35,000+ ALREADY JOINED</h5>
            <h2>Stay up-to-date with what we’re doing</h2>
            <div>
              <input type="text" placeholder="Enter your email address" />
              <button>Contact Us</button>
            </div>
          </div>
        </section>
        <section className="footer-links">
          <div className="footer-links__section">
            <div>
              <ul>
                <li>
                  <a href="/">
                    <img src={Logo} alt="Logo" />
                    <img src={BookMark} alt="Logo" />
                  </a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="/">
                    <img src={Facebook} alt="Facebook Logo" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={Twitter} alt="Twitter Logo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}
