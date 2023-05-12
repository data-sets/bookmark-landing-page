import React, { Component } from "react";
import Illustration from "../images/illustration-hero.svg";
import Illustration1 from "../images/illustration-features-tab-1.svg";
export default class Navigation extends Component {
  render() {
    return (
      <>
        <header className="header-section">
          <div className="header-section__illustration">
            <div></div>
          </div>
          <div className="header-section__container">
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
              <img src={Illustration} alt="Illustration" />
            </div>
          </div>
        </header>

        <section className="features-section">
          <div className="features-section__container">
            <div>
              <h2>Features</h2>
              <p>
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go.
              </p>
            </div>
            <div className="features-section__navigation">
              <ul>
                <li>
                  <button>
                    <h3>Simple Bookmarking</h3>
                  </button>
                </li>
                <li>
                  <button>
                    <h3>Speedy Searching</h3>
                  </button>
                </li>
                <li>
                  <button>
                    <h3>Easy Sharing</h3>
                  </button>
                </li>
              </ul>
            </div>
            <div className="features-section__offers">
              <div>
                <div>
                  <img src={Illustration1} alt="Illustration" />
                </div>
              </div>
              <div>
                <h3>Bookmark in one click</h3>
                <p>
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button>More Info</button>
              </div>
            </div>
          </div>
          <div className="features-section__shape"></div>
        </section>
      </>
    );
  }
}
