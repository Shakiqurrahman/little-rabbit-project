import React from "react";
import mint1 from "../assets/mint-01.png";
import mint2 from "../assets/mint-02.png";
import mint3 from "../assets/mint-03.png";
import mint4 from "../assets/mint-04.png";
import line from '../assets/line.svg'
import shape1 from '../assets/circle-01.png'
import shape2 from '../assets/circle-02.png'
import shape3 from '../assets/header-left-shape-4.png'
import tocenomics from '../assets/tocenomics.png'

function Mint() {
  return (
    <div className="how-to-mint-wrapper" id="mint" >
      <div className="container-fluid">
        <div className="container">
            <div className="shape-wrapper-mint">
                <img src={shape1} alt="" className="mint-shape-1" />
                <img src={shape2} alt="" className="mint-shape-2" />
                <img src={shape3} alt="" className="mint-shape-3" />
            </div>
          <div className="mint-title"  data-aos="fade-up" >
            <h2 className="text-center">Tokenomics</h2>
          </div>
          <div className="tocenomics-section-wrapper"  data-aos="fade-up" >
            <div className="row">
              <div className="col-md-6">
                <div className="tokenomics-img">
                  <img src={tocenomics} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tocenomics-details-wrapper">
                  <h2>Token Distribution</h2>
                  <div className="token-list">
                    <div className="token-list-item" >
                      <span style={{background:'#E86448'}} ></span>
                      <span>Total Supply - 1,000,000,000,000,000</span>
                    </div>
                    <div className="token-list-item" >
                      <span style={{background:'#4E7EEB'}} ></span>
                      <span>Liqudity - 0.5%</span>
                    </div>
                    <div className="token-list-item" >
                      <span style={{background:'#40EC98'}} ></span>
                      <span>Ecosystem - 10%</span>
                    </div>
                    <div className="token-list-item" >
                      <span style={{background:'#B80064'}} ></span>
                      <span>Burn - 63%</span>
                    </div>
                    <div className="token-list-item" >
                      <span style={{background:'#9F9F3A'}} ></span>
                      <span>NFT treasury - 5%</span>
                    </div>
                    <div className="token-list-item" >
                      <span style={{background:'#03FD00'}} ></span>
                      <span>P2E game - 6.5%</span>
                    </div>
                    <div className="token-list-item" >
                      <span style={{background:'#9B4273'}} ></span>
                      <span>Marketing - 5%</span>
                    </div>
                    <div className="token-list-item" >
                      <span style={{background:'#8A8A8A'}} ></span>
                      <span>Staking - 10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-svg" data-aos="zoom-in" >
          <img src={line} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mint;
