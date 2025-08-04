'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';


import { Helmet } from 'react-helmet';
// import Footer from '../../components/dark/blog-list/Footer';
import Header from '../../components/dark/about3/Header';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Intro from '../../components/dark/about3/Intro';
import Intro2 from '../../components/dark/about3/Intro2';
import Testimonials from '../../components/dark/about3/Testimonials';
// import Team from '../../components/dark/about3/Team';
// import Brands from '../../components/dark/about3/Brands';
// import Blog from '../../components/dark/about3/Blog';
import Footer from '../../components/dark/home-main/Footer';
import Brands from '../../components/dark/modern-agency/Brands';

export default function Enterprise() {
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
    <>
      <Helmet>
        <title>Puresaas</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
        {/* <LoadingScreen />  */}
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              {/* <Header /> */}
              <Intro />
              <Intro2 />
              <Testimonials />
              {/* <Team /> */}
              {/* <Brands /> */}
              {/* <Blog /> */}
              <Brands/>
            </main>
            <Footer/>
          </div>
        </div>
      </body>
    </>
  );
}
