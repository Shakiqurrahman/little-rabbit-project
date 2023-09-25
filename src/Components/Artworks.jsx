import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

import line from '../assets/line.svg'

const Artworks = () => {
    const artworksData = [
        {
            id : 1,
            img : img1,
            title : '2D NFT',
            author : 'Little Rabbit'
        },
        {
            id : 2,
            img : img2,
            title : '2D NFT',
            author : 'Little Rabbit'
        },
        {
            id : 3,
            img : img3,
            title : '2D NFT',
            author : 'Little Rabbit'
        },
        {
            id : 4,
            img : img4,
            title : '2D NFT',
            author : 'Little Rabbit'
        },
        {
            id : 5,
            img : img5,
            title : '2D NFT',
            author : 'Little Rabbit'
        },
        {
            id : 6,
            img : img6,
            title : '2D NFT',
            author : 'Little Rabbit'
        },
        {
            id : 7,
            img : img7,
            title : '2D NFT',
            author : 'Little Rabbit'
        },
        {
            id : 8,
            img : img8,
            title : '2D NFT',
            author : 'Little Rabbit'
        },

    ]
  return (
    <>
      <div className="artworks-wrapper" id='artworks'>
        <div className="container-fluid">
          <div className="container">
            <div className="mint-title" data-aos="fade-up">
              <h2 className="text-center">Latest artworks</h2>
            </div>
            <div className="cards row">
              {
                artworksData.map((data) => (
                  <div key={data.id} className="card"  data-aos="fade-up" >
                    <a href="https://3dnftmint.littlerabbitswap.com/" target="blank"><img className="img-fluid" src={data.img} alt="" /></a>
                    <h3>#{data.title}</h3>
                    <p>By <a href="https://3dnftmint.littlerabbitswap.com/" target="blank">{data.author}</a></p>
                  </div>
                ))
              }
            </div>
            <div>
            <div className="artworks-btn">
            <a href="https://littlerabbitswap.com/" target="blank" className="btn">
                    View more in DESK <FaArrowRight />
                  </a>
            </div>
            </div>
          </div>
          <div className="line-svg" data-aos="zoom-in">
          <img src={line} alt="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Artworks;
