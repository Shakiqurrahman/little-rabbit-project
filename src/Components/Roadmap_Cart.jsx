import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiOutlineCheckCircle } from 'react-icons/ai';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Roadmap_cart.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Roadmap_Cart() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 2;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={window.innerWidth > 768 ? 2 : 1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper ${window.innerWidth < 768 ? 'left-align' : ''}`}
      >
        <SwiperSlide  >
          <div className="roadmap-cart-wrapper">
            <div className="r-cart-top">
              <div className="d-flex">
                <p>PHASE 01</p>
                <div className='roadmap-percent' >
                  <span>25</span>
                  <span>%</span>
                </div>
              </div>
              
            </div>
            <h3>Planning</h3>
              <p className='roadmap-details' >Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
              <div className="phase-item-wrapper">
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>Bitmart Listing</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>Little Rabbit Swap 2.0</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>Hotbit Listing</span></div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="roadmap-cart-wrapper">
            <div className="r-cart-top">
              <div className="d-flex">
                <p>PHASE 02</p>
                <div className='roadmap-percent' >
                  <span>50</span>
                  <span>%</span>
                </div>
              </div>
              
            </div>
            <h3>Production</h3>
              <p className='roadmap-details' >Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
              <div className="phase-item-wrapper">
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>Little Rabbit Website 2.0</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>Little Rabbit Website 2.0</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>NFT mint and NFT staking</span></div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  >
          <div className="roadmap-cart-wrapper">
            <div className="r-cart-top">
              <div className="d-flex">
                <p>PHASE 03</p>
                <div className='roadmap-percent' >
                  <span>75</span>
                  <span>%</span>
                </div>
              </div>
              
            </div>
            <h3>Launch</h3>
              <p className='roadmap-details' >Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
              <div className="phase-item-wrapper">
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>New Staking Partnership</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>New CEX Listing</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>Update WhitePaper</span></div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  >
          <div className="roadmap-cart-wrapper">
            <div className="r-cart-top">
              <div className="d-flex">
                <p>PHASE 04</p>
                <div className='roadmap-percent' >
                  <span>100</span>
                  <span>%</span>
                </div>
              </div>
              
            </div>
            <h3>Minting</h3>
              <p className='roadmap-details' >Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
              <div className="phase-item-wrapper">
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>New Farms and Pools</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>More Events to earn $LTRBT</span></div>
                <div className='phase-single-item d-flex' > <AiOutlineCheckCircle/> <span>and lots to come...</span></div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>

      
    </>
  );
}