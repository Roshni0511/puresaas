'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import india from '../../../Image/makeindia.png';
import degital from '../../../Image/digital-india-power-to-empower.png'
import numberone from '../../../Image/number-one-crm.png'
import data from '../../../Image/datasecure1.png'
import artificial from '../../../Image/AIlogo1.png'
// import iso from '../../../Image/iso-27001-certified.png'

function Brands() {
  const swiperOptions = {
    speed: 600,
    loop: true,

    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
  };
  return (
    <div className="clients-carso2">
      <div className="container">
        <div className="row ">
          <div className="col-lg-11">
            <div className="swiper5">
              <Swiper
                id="content-carousel-container-unq-clients"
                className="swiper-container"
                data-swiper="container"
                {...swiperOptions}
              >
                <SwiperSlide className="swiper-slide" >
                  <div className="item" >
                    <div className="img icon-img-100">
                      <a href="">
                        <img src={india} alt=""  style={{ width: '160px', height: '160px', objectFit: 'contain' }}/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="">
                        <img src={degital} alt="" style={{ width: '160px', height: '160px', objectFit: 'contain' }}/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="">
                        <img src={numberone} alt="" style={{ width: '140px', height: '110px', objectFit: 'contain' }}/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="">
                        <img src={data} alt="" style={{ width: '150px', height: '150px', objectFit: 'contain' }}/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="">
                        <img src={artificial} alt="" style={{ width: '150px', height: '150px', objectFit: 'contain' }}/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="">
                        <img src={iso} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
