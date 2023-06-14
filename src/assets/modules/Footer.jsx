import React, { Component } from "react";
import { motion } from "framer-motion";
import Logo from "../images/logo-bookmark.png";
import BookMark from "../images/logo-bookmark-1.png";
import { item } from "./Header";
export default class Footer extends Component {
  render() {
    return (
      <>
        <section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          variants={item}
          viewport={{ once: true, amount: 0.8 }}
          className="footer-contact-section"
        >
          <div className="footer-contact-section__container">
            <h5>35,000+ ALREADY JOINED</h5>
            <h2>Stay up-to-date with what we’re doing</h2>
            <div>
              <input type="text" placeholder="Enter your email address" />
              <button>Contact Us</button>
            </div>
          </div>
        </section>
        <section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          variants={item}
          viewport={{ once: true, amount: 0.8 }}
          className="footer-links"
        >
          <div className="footer-links__section">
            <div>
              <ul>
                <li>
                  <a href="/">
                    <img src={Logo} alt="Logo" />
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
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
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
