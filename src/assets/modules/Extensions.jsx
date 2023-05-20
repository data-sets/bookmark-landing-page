import React, { Component } from "react";
import { motion } from "framer-motion";
import Chrome from "../images/logo-chrome.svg";
import Firefox from "../images/logo-firefox.svg";
import Opera from "../images/logo-opera.svg";
import Dot from "../images/bg-dots.svg";
import { item } from "./Header";

export default class Extensions extends Component {
  render() {
    return (
      <>
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          variants={item}
          viewport={{ once: true, amount: 0.8 }}
          className="browser-extension-section"
        >
          <div className="browser-extension-section__container">
            <div>
              <h2>Download the extension</h2>
              <p>
                We’ve got more browsers in the pipeline. Please do let us know
                if you’ve got a favourite you’d like us to prioritize.
              </p>
            </div>

            <div className="browser-extension-section__browser">
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
        </motion.section>
      </>
    );
  }
}
