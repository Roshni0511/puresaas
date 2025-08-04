'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import data from '../../../data/portfolios/worksfull.json';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div className="header half-slider">
      <div className="gallery-img">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {data.map((item, i) => (
              <div key={i} className="swiper-slide">
                <div
                  className="bg-img"
                  data-background={item.img}
                  data-overlay-dark="3"
                >
                  <a href={item.link}></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gallery-text">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {data.map((item, i) => (
              <div key={i} className="swiper-slide">
                <div className="text cursor-pointer">
                  <h6>
                    <span>{item.subTitle}</span>
                  </h6>
                  <h4 className="f-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="swiper-controls">
        <div className="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Header;
