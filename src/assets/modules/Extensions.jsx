import React, { Component } from "react";
import Chrome from "../images/logo-chrome.svg";
import Firefox from "../images/logo-firefox.svg";
import Opera from "../images/logo-opera.svg";
import Dot from "../images/bg-dots.svg";
import { item } from "./Header";

export default class Extensions extends Component {
  render() {
    return (
      <>
        <section className="tabcontent__browser-extension-section" id="pricing">
          <div className="tabcontent__browser-extension-section--container">
            <div className="tabcontent__browser-extension-section--description">
              <h2>Download the extension</h2>
              <p>
                We’ve got more browsers in the pipeline. Please do let us know
                if you’ve got a favourite you’d like us to prioritize.
              </p>
            </div>

            <div className="tabcontent__browser-extension-section--browser">
              <div>
                <img src={Chrome} alt="Chrome Logo" />
                <h4>Add to Chrome</h4>
                <p>Minimum version 62</p>
                <img src={Dot} alt="Dot Illustration" />
                <br />
                <button>Add and Install Extension</button>
              </div>
              <div>
                <img src={Firefox} alt="Firefox Logo" />
                <h4>Add to Firefox</h4>
                <p>Minimum version 55</p>
                <img src={Dot} alt="Dot Illustration" />
                <br />
                <button>Add and Install Extension</button>
              </div>
              <div>
                <img src={Opera} alt="Opera Logo" />
                <h4>Add to Opera</h4>
                <p>Minimum version 46</p>
                <img src={Dot} alt="Dot Illustration" />
                <br />
                <button>Add and Install Extension</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
