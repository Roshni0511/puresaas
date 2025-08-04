'use client';
import React, { useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import Navbar from './components/dark/creative-agency/Navbar';
import Footer from './components/dark/home-main/Footer';
import LoadingScreen from './components/dark/common/loader';
import Header from './components/dark/blog-classic/Header';
import Blogs from './components/dark/blog-classic/Blogs';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
export default function BlogClass() {
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
    const script = document.createElement('script');
    script.src = '/dark/assets/js/scripts.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,9display=swap" />
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600
       7display=swap" />
     </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Start_exploring />
        <Whatsapp/>
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header />
              <Blogs />
            </main>
            {/* <Footer /> */}
            <Footer/>
          </div>
        </div>
      </body>
    </>
  );
}
