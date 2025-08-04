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



export default function Privacy() {
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
                                        <h1 className="" style={{ fontSize: '50px' }}>Privacy Policy </h1>
                                        <div className="mt-15">
                                            <a href="/dark/home-main">Home</a>
                                            <span className="padding-rl-20">|</span>
                                            <span className="main-color"> Privacy Policy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container ">
                                <div className="row">
                                    <div style={{ marginBottom: '87px', marginTop: '45px' }}><h3 style={{ display: 'flex', justifyContent: 'center', fontSize: '25px' }}>PRIVACY POLICY</h3>
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

                                                <li> 1. If you Use The Platform, You puresaas . This privacy policy sets out how www.puresaas.in uses and protects any information that you give www.puresaas.in when you use this website</li>
                                                <br />
                                                {/* <h6 style={{paddingBottom:'8px'}}>Building a Connected Ecosystem</h6> */}
                                                <li>2. www.puresaas.in is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. </li>
                                                <br />
                                                <h6 style={{ paddingBottom: '8px' }} >We may collect the following information:</h6>
                                                <br />
                                                {/* <h6 style={{paddingBottom:'8px'}} >Championing Customer Success</h6> */}
                                                <li>1. Contact information including email address
                                                </li>
                                                <br />
                                                <li> 2. Demographic information such as postcode, preferences and interests
                                                </li>
                                                <br />
                                                <h6 style={{ paddingBottom: '8px' }} >We require this information to understand your needs and provide you with a better service, and in particular for the following reasons.</h6>
                                                <li> 1. Internal record keeping
                                                </li>
                                                <br />
                                               
                                                <li>1.2. We may use the information to improve our products and services</li><br />
                                                <li>3. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided</li><br />
                                                <li>4. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.</li><br />


                                                <h6 style={{ paddingBottom: '8px' }} > DATA RETENTION /DELETION OF ACCOUNT :</h6><br />
                                                <li>We will retain your information for as long as your account is active, your information is needed to provide you services, or as required to fulfill our legal obligations. If you wish to delete your account or request that we no longer use your information to provide you services contact us at support@puresaas.in We will respond to your request within reasonable time. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes and enforce our agreements.
                                                </li><br />

                                                <h6 style={{ paddingBottom: '8px' }} > UNSUBSCRIBE/OPT OUT :</h6><br />
                                                <li>You may opt out of receiving puresaas  email updates, newsletters and/or partner emails by clicking on the "My Profile" link on the website and making the appropriate selections. The choice to opt out of such communications is also generally available during the sign-up process. puresaas will still contact you when there are changes to the Terms of Service or Submitter Terms of Service, as applicable. In addition, we will still send you service-related announcements including, but not limited to, a registration email, order related notifications and emails automatically triggered by actions you took on the Site. Generally, you may not opt-out of these communications, which are not promotional in nature.
                                                </li><br />

                                                
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
