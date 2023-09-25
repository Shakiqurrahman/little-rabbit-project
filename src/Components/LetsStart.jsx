import React from "react";
import line from '../assets/line.svg'
import shape1 from '../assets/circle-01.png'
import shape2 from '../assets/header-left-shape-3.png'
import shape3 from '../assets/shape-03.png'
import shape4 from '../assets/header-left-shape-4.png'

function LetsStart() {
  return (
    <div className="leats-start-wrapper">
      <div className="container-fluid">
        
        <div className="container">
        
          <div className="text-center">
          <h2 className="text-center">
            Let's start <br /> minting
          </h2>
          <div className="leats-start-btn">
            <a href="#" target="blank" className="btn">
              Join Community
            </a>
            <div className="leats-start-shape-wrapper" >
              <img src={shape1} alt="" className="leats-start-shape-1" />
              <img src={shape2} alt="" className="leats-start-shape-2" />
              <img src={shape3} alt="" className="leats-start-shape-3" />
              <img src={shape4} alt="" className="leats-start-shape-4" />
            </div>
          </div>
          
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LetsStart;
