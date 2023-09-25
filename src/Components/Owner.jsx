import ownerImg from "../assets/owner-img.png";
import line from '../assets/line.svg'

const Owner = () => {
  return (
    <div className="owner-wrapper mt-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="owner-details col-md-6"  data-aos="fade-left" >
              <p className="short-title">OWNER OF THE CONTRACT</p>
              <h2>Who is the owner of the Contract?</h2>
              <p>
                The ownership of the contract is renounced permanently that is
                the contract's functions including buy/sell fee cannot change be
                changed. Now $LTRBT is even more Decentralised.
              </p>
            </div>
            <div className="owner-img col-md-6" data-aos="fade-right">
              <img src={ownerImg} alt="Owner image" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="line-svg"  data-aos="zoom-in">
          <img src={line} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Owner;
