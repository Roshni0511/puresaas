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
    <div className="header full-showcase">
      <div className="swiper-container parallax-slider">
        <div className="swiper-wrapper">
          {data.map((item, i) => (
            <div key={i} className="swiper-slide">
              <div
                className="bg-img valign"
                data-background={item.img}
                data-overlay-dark="3"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-11 offset-lg-1">
                      <div className="caption">
                        <h6
                          className="sub-title mb-30"
                          data-swiper-parallax="-1000"
                        >
                          © 2024 <br />
                          {item.subTitle}
                        </h6>
                        <h1>
                          <a href={item.link}>
                            <span data-swiper-parallax="-2000">
                              {item.title}
                            </span>
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
}

export default Header;
