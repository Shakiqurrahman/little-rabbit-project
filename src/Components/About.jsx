import about from "../assets/about.png";
import dex from '../assets/about-dex.png'
import staking from '../assets/about-staking.png'

function About() {
  return (
    <div className="about-section-wapper" id="about" >
      <div className="container-fluid">
        <div className="container">
          <div className="mint-title"  data-aos="fade-up" >
            <h2 className="text-center">About the platform</h2>
          </div>
          <div className="about-main-section">
            <div className="row">
              <div className="col-md-6">
                <div className="about-left-part" data-aos="fade-left">
                  <div className="about-img">
                    <img src={about} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-details-wrapper" data-aos="fade-right">
                  <p className="about-title-short">Little Rabit</p>
                  <h2>What is Little Rabbit?</h2>
                  <p className="about-details">
                  Littlerabbit is an incredibly promising project, goal achieving success on the Binance Smart Chain. LTRBT project utilizes LTRBT token as the governance token and in-game rewards for a massively multiplayer online role-playing game (MMORPG). LTRBT With a huge base of holders and a strong presence on multiple social platforms, Little Rabbit is quickly becoming a leader in the crypto space.
                  </p>
                </div>
                <div className="row about-contact">
                  <div className="col-6 about-contact-left">
                  <a href="https://littlerabbitswap.com/" target="blank"><img src={dex} className="img-fluid" /></a>
                  </div>
                  <div className="col-6 about-contact-right">
                    <a href="https://littlerabbitswap.com/" target="blank"><img src={staking} className="img-fluid" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
