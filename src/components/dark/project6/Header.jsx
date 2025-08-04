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
    <div className="header header-project6 section-padding">
      <div className="container-xl">
        <div className="info d-flex align-items-center mb-10">
          <div>
            <span className="category">Apps</span>
            <span className="category">Design</span>
          </div>
          <div className="date">August 7, 2023</div>
        </div>
        <h1 className="fz-80">TH3 Web Design</h1>
      </div>
    </div>
  );
}

export default Header;
