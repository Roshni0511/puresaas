'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import vission from '../../Image/Our Vision.png'

import { Helmet } from 'react-helmet';
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';



export default function Vission() {
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
                                        <h1 className="fz-100 ">Vision</h1>
                                        <div className="mt-15">
                                            <a href="/">Home</a>
                                            <span className="padding-rl-20">|</span>
                                            <span className="main-color">Vision </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container ">
                                <div className="row">
                                    <div style={{ marginBottom: '87px', marginTop: '45px' }}><h3 style={{ display: 'flex', justifyContent: 'center', fontSize: '32px;' }}>OUR Vision</h3></div>
                                    <div className="col-lg-5">
                                        {/* img mukvani che aya our vission ni jagiya pr */}
                                        <h6 className="sub-title main-color">OUR Vision</h6>
                                        <img src={vission} />
                                    </div>
                                    <div className="col-lg-7">

                                        <div className="text">
                                            {/* <h4>
                Whether you are a development agency looking to outsource design
                work, a company in search of a Product Designer or Product Team,
                a marketing agency that needs a landing page, a startup that
                wants to launch an app, or an enterprise that plans to rebrand
                or redesign its website, we welcome any challenge with our arms
                wide open.
              </h4> */}
                                            <h4 style={{paddingBottom:'8px'}}>Pioneering the Future of Software Solutions</h4>
                                            <p style={{ textAlign: 'justify' }}>our vision is to pioneer the future of software solutions by continually innovating and setting new standards in the industry. We aspire to be the go-to provider for businesses seeking reliable, cutting-edge software that transforms how they operate and grow.</p>
                                            <br />
                                            <ul style={{ paddingLeft: '0px', textAlign: 'justify' }}>


                                                <h6 style={{paddingBottom:'8px'}}>Empowering Businesses Worldwide</h6>

                                                <li>We envision a world where businesses, regardless of their size or location, have access to the best software tools to drive their success. By breaking down barriers and providing scalable solutions, we aim to empower businesses worldwide to achieve their full potential.</li>
                                                <br />


                                                <h6 style={{paddingBottom:'8px'}}>Building a Connected Ecosystem</h6>
                                                <li>Our vision extends to building a connected ecosystem where our software solutions seamlessly integrate with other technologies and platforms. By fostering interoperability, we enable businesses to create cohesive and efficient workflows that enhance productivity and innovation.
                                                </li>
                                                <br />


                                                <h6 style={{paddingBottom:'8px'}} >Championing Customer Success</h6>
                                                <li>our vision is the success of our customers. We aim to be more than just a software provider; we want to be a trusted partner in our customers' journeys. Our success is measured by the success of those we serve, and we are dedicated to supporting them every step of the way.

                                                </li>
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
