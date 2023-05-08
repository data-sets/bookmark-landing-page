import React, { Component } from "react";
import Monitor from "../images/illustration-hero.svg";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <header className="header-section">
          <div className="container">
            <div>
              <h1>A Simple Bookmark Manager</h1>
              <p>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div>
                <a href="/">Get in on Chrome</a>
                <a href="/">Get in on Firefox</a>
              </div>
            </div>
            <div className="header-section__illustration">
              <img src={Monitor} alt="" />
              <div className="shape"></div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
