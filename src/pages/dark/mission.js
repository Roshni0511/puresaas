
'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import mission from '../../Image/Our Mission.png'

import { Helmet } from 'react-helmet';
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';



export default function Mission() {
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
                                        <h1 className="fz-100 ">Mission</h1>
                                        <div className="mt-15">
                                            <a href="/dark/home-main">Home</a>
                                            <span className="padding-rl-20">|</span>
                                            <span className="main-color">Mission </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container ">
                                <div className="row">
                                    <div style={{ marginBottom: '87px', marginTop: '45px' }}><h3 style={{ display: 'flex', justifyContent: 'center', fontSize: '32px;' }}>OUR COMMITMENT</h3></div>
                                    <div className="col-lg-5">
                                        <h6 className="sub-title main-color">Our Mission</h6>
                                        <img src={mission} />
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
                                            <h4 style={{paddingBottom:'8px'}}>Empowering Growth and Innovation</h4>
                                            <p style={{ textAlign: 'justify' }}>our mission is to empower businesses of all sizes with innovative software solutions that drive growth, efficiency, and success. We are dedicated to developing cutting-edge technology that addresses the unique needs of our clients, helping them to navigate the complexities of their industries with ease and confidence.</p>
                                            <br />
                                            <ul style={{ paddingLeft: '0px', textAlign: 'justify' }}>


                                                <h6 style={{paddingBottom:'8px'}}>Commitment to Excellence</h6>

                                                <li>We believe in setting the highest standards for our products and services. Our commitment to excellence is reflected in every aspect of our operations, from the initial design and development of our software to the ongoing support and updates we provide. We strive to deliver solutions that not only meet but exceed the expectations of our clients.</li>
                                                <br />


                                                <h6 style={{paddingBottom:'8px'}}>Building Long-Term Partnerships</h6>
                                                <li>We value long-term relationships with our clients and partners. Our goal is to build lasting partnerships based on trust, reliability, and mutual success. By delivering consistent value and exceptional service, we foster relationships that go beyond transactional interactions, contributing to the sustained growth and success of our clients.
                                                </li>
                                                <br />


                                                <h6 style={{paddingBottom:'8px'}} >Relentless Innovation</h6>
                                                <li>In the ever-evolving world of technology, staying ahead of the curve is crucial. We invest heavily in research and development to keep our software solutions at the forefront of the industry. Our focus on innovation ensures that our clients benefit from the latest advancements and features, providing them with a competitive edge in their respective markets.

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
