import React, { Component } from "react";
import Arrow from "../images/icon-arrow.svg";

export default class Faq extends Component {
  render() {
    return (
      <>
        <section className="faq-section">
          <div className="faq-section__container">
            <div>
              <h2>Frequently Asked Questions</h2>
              <p>
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <div>
                    <h3>What is Bookmark?</h3>
                  </div>
                  <div>
                    <img src={Arrow} alt="Dropdown Arrow" />
                  </div>
                </li>
                <li>
                  <div>
                    <h3>How can I request a new browser?</h3>
                  </div>
                  <div>
                    <div>
                      <img src={Arrow} alt="Dropdown Arrow" />
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Is there a mobile app?</h3>
                  </div>
                  <div>
                    <div>
                      <img src={Arrow} alt="Dropdown Arrow" />
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>What about other Chromium browsers?</h3>
                  </div>
                  <div>
                    <div>
                      <img src={Arrow} alt="Dropdown Arrow" />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="btn-container">
                <button className="btn-container__btn">More Info</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
