'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
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
    <div
      class="header page-header-cerv bg-img section-padding"
      data-background="assets/imgs/header/2.jpg"
      data-overlay-dark="4"
    >
      <div class="container pt-100 ontop">
        <div class="text-center">
          <h1 class="fz-100">Our Services.</h1>
          <div class="mt-15">
            <a href="/dark/home-main">Home</a>
            <span class="padding-rl-20">|</span>
            <span class="main-color">Services</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
