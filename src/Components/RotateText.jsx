import React from 'react'
import './RotateText.css'
import { FaArrowRight } from "react-icons/fa";

function RotateText() {
  return (
    <div className="circle">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        preserveAspectRatio="xMidYMid meet"
      >
        <div style={{width:'5rem', height:'5rem', background:'#ddd'}} ></div>
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
          />
        </defs>
        <circle cx="150" cy="100" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text fill="#000">
            <textPath xlinkHref="#circlePath">
            view in opensea • view in opensea • 
            </textPath>
          </text>
        </g>
      </svg>
    <FaArrowRight className='icon' />
    </div>
  )
}

export default RotateText