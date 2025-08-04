'use client';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonials from '../../../data/testimonials.json';


function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-arrow-control swiper-button-next',
      prevEl: '.swiper-arrow-control swiper-button-prev',
    },
  };
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-15">Testimonials</h6>
              <h3 className="fw-600">
                What People <span className="fw-200">Say?</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-8 position-re">
      <div
        className="testim-swiper"
        data-carousel="swiper"
        data-loop="true"
        data-space="30"
      >
        <Swiper
          id="content-carousel-container-unq-testim"
          className="swiper-container"
          data-swiper="container"
          spaceBetween={30}
          loop={true}
        >
          {testimonials.slice(0, 3).map((item, i) => (
            <SwiperSlide key={i}>
              <div className="item">
                <div className="content">
                  <div className="text">
                    <p className="fz-30">{item.desc}</p>
                  </div>
                  <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                    <div className="fit-img circle">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="ml-20">
                      <h5>{item.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
        </div>
      </div>
      <div className="small-line">
        <div className="line-overlay">
          <svg
            viewBox="0 0 1728 1101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
              style={{ strokeDasharray: 3246.53 }}
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
