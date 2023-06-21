import React, { Component } from "react";
import { motion } from "framer-motion";
import FaqItem from "../modules/data/FaqItem";
import { item } from "./Header";

export const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.",
  },
  {
    question: "How can I request a new browser?",
    answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. `,
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.",
  },
];

export default class Faq extends Component {
  render() {
    return (
      <>
        <section className="faq-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            variants={item}
            viewport={{ once: true, amount: 0.8 }}
            className="faq-section__container"
          >
            <div>
              <h2>Frequently Asked Questions</h2>
              <p>
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
            </div>
            <div>
              <ul>
                {faqs.map((faq, index) => (
                  <FaqItem key={index} faq={faq} />
                ))}
              </ul>
              <div>
                <button>More Info</button>
              </div>
            </div>
          </motion.div>
        </section>
      </>
    );
  }
}
