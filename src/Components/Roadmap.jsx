import React from "react";
import Roadmap_Cart from "./Roadmap_Cart";
import line from '../assets/line.svg'

function Roadmap() {
  return (
    <div className="roadmap-wrapper" id="roadmap">
      <div className="container-fluid">
        <div className="container">
          <div className="mint-title" data-aos="fade-up">
            <h2 className="text-center">Little Rabbit Roadmap</h2>
          </div>
          <div className="roadmap-main-section-wrapper">
            <Roadmap_Cart/>
          </div>
        </div>
        <div className="line-svg" data-aos="zoom-in" >
          <img src={line} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
