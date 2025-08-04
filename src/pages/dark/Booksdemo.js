'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Bookcontact from '../../components/dark/home-main/Bookcontact';

const Booksdemo = () => {
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
                <LoadingScreen />
                <Cursor />
                <ProgressScroll />
                <Lines />
                <div id="smooth-wrapper">
                    <Navbar />
                    <div id="smooth-content">
                        <main className="main-bg">

                            <div
                                className="header page-header bg-img section-padding"
                                data-background="/dark/assets/imgs/header/bg1.jpg"
                                data-overlay-dark="9"
                            >
                                <div className="container pt-100 ontop">
                                    <div className="text-center">
                                        <h1 style={{fontSize:'45px'}}>BOOK A DEMO</h1>
                                        <div className="mt-15">
                                            <a href="/">Home</a>
                                            <span className="padding-rl-20">|</span>
                                            <span className="main-color">Book a demo </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                        </main>
                        <Bookcontact/>
                        <Footer />
                    </div>
                </div>
            </body>
    </>
  )
}

export default Booksdemo
