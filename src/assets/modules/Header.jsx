// import React, { useState } from "react";
// import TabNavItem from "./TabNavItem";
// import TabContent from "./TabContent";
import Illustration from "../images/illustration-hero.svg";
import Illustration1 from "../images/illustration-features-tab-1.svg";

const Header = () => {
  // const [activeTab, setActiveTab] = useState("tab1");

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
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button>More Info</button>
            </div>
          </div>
        </div>
        <div className="features-section__shape"></div>
      </section>
      {/* <div>
        <ul>
          <TabNavItem
            title="Simple Bookmarking"
            id="tab1"
            className="Test"
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

        <div>
          <TabContent id="tab1" activeTab={activeTab}>
            <p>Tab 1 works!</p>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <p>Tab 2 works!</p>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <p>Tab 3 works!</p>
          </TabContent>
        </div>
      </div> */}
    </>
  );
};
export default Header;
