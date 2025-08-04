'use client';
import React, { useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import Navbar from './components/dark/creative-agency/Navbar';
import Intro2 from './components/dark/about3/Intro2';
import Testimonials from './components/dark/about3/Testimonials';
import Brands from './components/dark/modern-agency/Brands';
import Footer from './components/dark/home-main/Footer';
import Intro from './Intro';
import Sit from './components/dark/modern-agency/Sit';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
// import Intro from './Intro';

export default function Enterprises() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = '/dark/assets/js/scripts.js';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = '/dark/assets/js/smoother-script.js';
    script2.async = true;
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Puresaas</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/dark/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/dark/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/dark/assets/css/satoshi.css" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap" />
      </Helmet>
      <body>
        {/* <LoadingScreen />  */}
        <Cursor />
        <ProgressScroll />
         <Start_exploring />
              <Whatsapp/>
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              {/* <Header /> */}
              {/* <Intro /> */}
              <Intro />
              <Intro2 />
              {/* <Testimonials /> */}
              {/* <Team /> */}
              {/* <Brands /> */}
              {/* <Blog /> */}
              <Sit/>
              <Brands/>
            </main>
            <Footer/>
          </div>
        </div>
      </body>
    </>
  );
}
