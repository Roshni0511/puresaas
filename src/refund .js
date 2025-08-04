'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


import { Helmet } from 'react-helmet';
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import Navbar from './components/dark/creative-agency/Navbar';
import Footer from './components/dark/home-main/Footer';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';



export default function Refundpolicy() {
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
                             <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" />
                             <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap" />
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

                            <div
                                className="header page-header bg-img section-padding"
                                data-background="/dark/assets/imgs/header/bg1.jpg"
                                data-overlay-dark="9"
                            >
                                <div className="container pt-100 ontop">
                                    <div className="text-center">
                                        <h1 className="" style={{ fontSize: '50px' }}>Refund Policy </h1>
                                        <div className="mt-15">
                                            <a href="/">Home</a>
                                            <span className="padding-rl-20">|</span>
                                            <span className="main-color">Refund Policy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container ">
                                <div className="row">
                                    <div style={{ marginBottom: '87px', marginTop: '45px' }}><h3 style={{ display: 'flex', justifyContent: 'center', fontSize: '25px' }}>REFUND POLICY </h3>
                                    </div>
                                    {/* <div className="col-lg-5"> */}
                                    {/* img mukvani che aya our vission ni jagiya pr */}
                                    {/* <h6 className="sub-title main-color">OUR Terms</h6> */}
                                    {/* </div> */}
                                    <div className="col-lg-12">

                                        <div className="text">
                                            {/* <h4>
                Whether you are a development agency looking to outsource design
                work, a company in search of a Product Designer or Product Team,
                a marketing agency that needs a landing page, a startup that
                wants to launch an app, or an enterprise that plans to rebrand
                or redesign its website, we welcome any challenge with our arms
                wide open.
              </h4> */}
                                            {/* <h4 style={{paddingBottom:'8px'}}>Pioneering the Future of Software Solutions</h4>
                                            <p style={{ textAlign: 'justify' }}> 1. zour vision is to pioneer the future of software solutions by continually innovating and setting new standards in the industry. We aspire to be the go-to provider for businesses seeking reliable, cutting-edge software that transforms how they operate and grow.</p>
                                            <br /> */}
                                            <ul style={{ paddingLeft: '0px', textAlign: 'justify' }}>


                                                {/* <h6 style={{paddingBottom:'8px'}}>Empowering Businesses Worldwide</h6> */}

                                                <li> 1. In any Case of Refund Initiated Approved amount will be Refund within 7 to 10 Days</li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </>
    )
}
