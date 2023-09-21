import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Illustration from "../images/illustration-hero.svg";
import Illustration1 from "../images/illustration-features-tab-1.svg";
import Illustration2 from "../images/illustration-features-tab-2.svg";
import Illustration3 from "../images/illustration-features-tab-3.svg";

export const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  hiddenx: { x: 30, opacity: 0 },
  visiblex: {
    x: 0,
    opacity: 1,
  },
};

const Header = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <header role="banner" className="header-section">
        <div className="header-section__illustration">
          <div></div>
        </div>
        <div className="header-section__container">
          <div>
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
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
          <div
            id="features"
            className="features-section__container--description"
          >
            <h2>Features</h2>
            <p className="description">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <div className="features-section__navigation">
            <ul>
              <TabNavItem
                title="Simple Bookmarking"
                id="tab1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <TabNavItem
                title="Speedy Searching"
                id="tab2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <TabNavItem
                title="Easy Sharing"
                id="tab3"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>
          </div>
          <div className="features-section__offers">
            <TabContent id="tab1" activeTab={activeTab}>
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
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <div
                initial="hiddenx"
                whileInView="visiblex"
                transition={{ duration: 0.7 }}
                variants={item}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div>
                  <img src={Illustration2} alt="Illustration" />
                </div>
              </div>
              <div
                initial="hiddenx"
                whileInView="visiblex"
                transition={{ duration: 0.7 }}
                variants={item}
                viewport={{ once: true, amount: 0.8 }}
              >
                <h3>Intelligent search</h3>
                <p>
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <button>More Info</button>
              </div>
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
              <div
                initial="hiddenx"
                whileInView="visiblex"
                transition={{ duration: 0.7 }}
                variants={item}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div>
                  <img src={Illustration3} alt="Illustration" />
                </div>
              </div>
              <div
                initial="hiddenx"
                whileInView="visiblex"
                transition={{ duration: 0.7 }}
                variants={item}
                viewport={{ once: true, amount: 0.8 }}
              >
                <h3>Share your bookmarks</h3>
                <p>
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
                <button>More Info</button>
              </div>
            </TabContent>
          </div>
        </div>
        <div className="features-section__shape"></div>
      </section>
    </>
  );
};
export default Header;
