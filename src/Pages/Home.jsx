import Navigation from "../Components/Navigation";
import { FaArrowRight } from "react-icons/fa";
import headerLeftImage from "../assets/header-left1.png";
import headerRightImage from "../assets/header-right2.png";
import header_left_shape_1 from "../assets/header-left-shape-1.png";
import header_left_shape_2 from "../assets/header-left-shape-2.png";
import header_left_shape_3 from "../assets/header-left-shape-3.png";
import header_left_shape_4 from "../assets/header-left-shape-4.png";
import RotateText from "../Components/RotateText";
import ListedItem from "../Components/ListedItem";
import line from "../assets/line.svg";
import Mint from "../Components/Mint";
import Connect from "../Components/Connect";
import About from "../Components/About";
import Owner from "../Components/Owner";
import Artworks from "../Components/Artworks";
import Footer from "../Components/Footer";
import Roadmap from "../Components/Roadmap";
import AskQuestion from "../Components/AskQuestion";
import LetsStart from "../Components/LetsStart";

function Home() {
  return (
    <div>
      <div className="container-fluid home-page-wrapper">
        <div className="home-header-wrapper" id="home">
          <Navigation />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="header-left-shape-wrapper"  >
                  <img
                    src={header_left_shape_1}
                    alt=""
                    className="header-left-shape-1"
                  />
                  <img
                    src={header_left_shape_2}
                    alt=""
                    className="header-left-shape-2"
                  />
                  <img
                    src={header_left_shape_3}
                    alt=""
                    className="header-left-shape-3"
                  />
                  <img
                    src={header_left_shape_4}
                    alt=""
                    className="header-left-shape-4"
                  />
                </div>
                <div className="header-left-part-wrapper" data-aos="fade-up" >
                  <h2>Little Rabbit</h2>
                  <p>
                  Whether you're seasoned investor or new to the world of cryptocurrency, Little Rabbit offers something for everyone.
                  </p>
                  <a href="https://littlerabbitswap.com/" target="blank" className="btn gradient-btn">
                    Launch App <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header-image-benner" data-aos="fade-up" >
                  <div className="round-circle-text">{/* <RotateText/> */}</div>
                  <div className="header-shape-image">
                    <div>
                      <svg
                        style={{ opacity: ".3" }}
                        className="shape-1"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#F796FF"
                          d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                          transform="translate(100 100)"
                        ></path>
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 186 186"
                      fill="none"
                      className="shape-2"
                    >
                      <path
                        d="M136.029 16.6624C148.445 25.5111 156.115 38.8896 165.366 51.7413C174.74 64.5931 185.696 77.0234 184.965 89.1378C184.357 101.252 172.062 112.945 162.81 126.007C153.558 139.07 147.472 153.291 135.663 164.879C123.977 176.361 106.569 184.999 89.1614 184.999C71.7536 185.104 54.3457 176.361 38.0335 167.196C21.5995 157.926 6.26113 148.235 2.24394 135.172C-1.89499 122.215 5.28727 105.782 9.30446 91.4553C13.4434 77.2341 14.539 64.9091 17.4606 50.2665C20.5039 35.624 25.6167 18.6639 37.9117 9.81517C50.0851 0.861095 69.6841 0.0183531 88.0658 1.70383C106.326 3.49464 123.612 7.81367 136.029 16.6624Z"
                        stroke="#fff"
                        stroke-miterlimit="3.97115"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-dasharray="4 4"
                      />
                    </svg>
                  </div>
                  <div className="main-header-image row">
                    <div className="col-6">
                    <a href="https://3dnftmint.littlerabbitswap.com/" target="blank"><img src={headerLeftImage} alt="Header Left Image" /></a>
                    </div>
                    <div className="col-6">
                    <a href="https://3dnftmint.littlerabbitswap.com/" target="blank"><img
                        src={headerRightImage}
                        alt="Header Right Image"
                        className="header-right-image"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="powerd-by-div-wrapper" >
        <div className="container-fluid">
          <div className="container">
            <div  data-aos="fade-up" > 
            <h5 className="text-center powerd-by-title" style={{letterSpacing:'1px'}} >
            Listed on :
            </h5>
            <div className="powerd-by-item-wrapper" >
              <ListedItem />
            </div>
            </div>
          </div>
          <div className="line-svg"  data-aos="zoom-in" >
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <div className="how-to-mint-section">
        <Mint />
      </div>
      <div className="connect-section">
        <Connect />
      </div>
      <div className="about-section">
        <About/>
      </div>
      <div className="owner-section">
        <Owner />
      </div>
      <div className="artworks-section">
        <Artworks />
      </div>
      <div className="roadmap-section">
        <Roadmap/>
      </div>
      <div className="ask-question-section">
        <AskQuestion/>
      </div>
      <div className="leats-start-section">
        <LetsStart/>
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
