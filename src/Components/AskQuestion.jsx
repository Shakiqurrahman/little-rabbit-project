import React from "react";
import AskQuestionItem from "./AskQuestionItem";
import line from '../assets/line.svg'

function AskQuestion() {
  return (
    <div className="ask-question-wrapper" id="question" >
      <div className="container-fluid">
        <div className="container">
          <div className="mint-title" data-aos="fade-up" >
            <h2 className="text-center">Asked Questions</h2>
          </div>
          <div className="ask-question-item-wrapper"  data-aos="fade-up" >
            <AskQuestionItem/>
          </div>
        </div>
        <div className="line-svg">
          <img src={line} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
