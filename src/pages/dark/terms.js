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



export default function Terms() {
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
                                        <h1 className="" style={{fontSize:'50px'}}>Terms of Service</h1>
                                        <div className="mt-15">
                                            <a href="/dark/home-main">Home</a>
                                            <span className="padding-rl-20">|</span>
                                            <span className="main-color">Our Terms </span>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <div className="container ">
                                <div className="row">
                                    <div style={{ marginBottom: '87px', marginTop: '45px' }}><h3 style={{ display: 'flex', justifyContent: 'center', fontSize: '25px' }}>TERMS OF SERVICE</h3>
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

                                                <li> 1. This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</li>
                                                <br />
                                                {/* <h6 style={{paddingBottom:'8px'}}>Building a Connected Ecosystem</h6> */}
                                                <li>2. This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name https://puresaas.in/ ('Website'), including the related mobile site and mobile application (hereinafter referred to as 'Platform'). </li>
                                                <br />
                                                {/* <h6 style={{paddingBottom:'8px'}} >Championing Customer Success</h6> */}
                                                <li>3. Your use of the Platform and services and tools are governed by the following terms and conditions (“Terms of Use”) as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with the Platform Owner and these terms and conditions including the policies constitute Your binding obligations, with Platform Owner. These Terms of Use relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, 'Services'). Any terms and conditions proposed by You which are in addition to or which conflict with these Terms of Use are expressly rejected by the Platform Owner and shall be of no force or effect. These Terms of Use can be modified at any time without assigning any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates..
                                                </li>
                                                <br />
                                                <li> 4. For the purpose of these Terms of Use, wherever the context so requires ‘you’, 'your' or ‘user’ shall mean any natural or legal person who has agreed to become a user/buyer on the Platform..
                                                </li>
                                                <br />
                                                <li> 5. ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING..
                                                </li>
                                                <br />
                                                <h6 style={{paddingBottom:'8px'}} > 6. The use of Platform and/or availing of our Services is subject to the following Terms of Use:</h6>
                                                   <li>1. To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account on the Platform..</li><br />
                                                   <li>2. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law..</li><br />
                                                   <li>3. Your use of our Services and the Platform is solely and entirely at your own risk and discretion for which we shall not be liable to you in any manner. You are required to independently assess and ensure that the Services meet your requirements..</li><br />
                                                   <li>4. The contents of the Platform and the Services are proprietary to us and are licensed to us. You will not have any authority to claim any intellectual property rights, title, or interest in its contents. The contents includes and is not limited to the design, layout, look and graphics..</li><br />
                                                   <li>5. You acknowledge that unauthorized use of the Platform and/or the Services may lead to action against you as per these Terms of Use and/or applicable laws..
                                                   </li><br />
                                                   <li>6. You agree to pay us the charges associated with availing the Services..
                                                   </li><br />
                                                   <li>7. You agree not to use the Platform and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
                                                   </li><br />
                                                   <li>8. You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites. These links are provided for your convenience for provide further information..
                                                   </li><br />
                                                   <li>9. You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the Platform Owner for the Services..
                                                   </li><br />
                                                   <li>
                                                   10. You shall indemnify and hold harmless Platform Owner, its affiliates, group companies (as applicable) and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorney's fees, made by any third party or penalty imposed due to or arising out of Your breach of this Terms of Use, privacy Policy and other Policies, or Your violation of any law, rules or regulations or the rights (including infringement of intellectual property rights) of a third party.
                                                   </li><br />
                                                   <li>11. Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event..
                                                   </li><br />
                                                   <li>12. These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India..
                                                   </li><br />
                                                   <li>13. All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Rajkot and Gujarat.
                                                   </li><br />
                                                   <li>14. All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website
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
