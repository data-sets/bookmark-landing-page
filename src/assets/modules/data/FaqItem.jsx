import { useState } from "react";
import { useRef } from "react";
import Arrow from "./icon-arrow.svg";

const FaqItem = ({ faq }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {question}
        <span className="control">
          {clicked ? (
            <img className="arrow" src={Arrow} alt="Arrow Icon" />
          ) : (
            <img src={Arrow} alt="Arrow Icon" />
          )}{" "}
        </span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default FaqItem;
