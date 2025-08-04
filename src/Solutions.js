import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import icon1 from "../src/Image/icon1.png";
import icon2 from "../src/Image/icon2.png";
import icon3 from "../src/Image/icon3.png";
import icon4 from "../src/Image/icon4.png";
import icon5 from "../src/Image/icon5.png";
import icon6 from "../src/Image/icon6.png";


import { useLayoutEffect } from "react";
import gsap from "gsap";
import LoadingScreen from "./components/dark/common/loader";
import Cursor from "./components/dark/common/cusor";
import ProgressScroll from "./components/dark/common/ProgressScroll";
import Lines from "./components/dark/common/Lines";
import Navbar from "./components/dark/creative-agency/Navbar";
import Footer from "./components/dark/home-main/Footer";
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';

export default function Solution() {
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
  }, []); useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    // Cleanup function
    return () => tl.kill();
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
                    <h1 style={{ fontSize: "50px" }}>Seamless Solutions</h1>
                    <div className="mt-15">
                      <a href="/">Home</a>
                      <span className="padding-rl-20">|</span>
                      <span className="main-color">Seamless Solutions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="title">
                <h2>Seamless Solutions for Every Work Environment</h2>
                {/* <!--<p><a href="https://htmlcodex.com/css-timeline">More timeline designs</a></p>--> */}
              </div>
              <div class="timeline">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="timeline-container">
                        <div class="timeline-end">
                          <p>Now</p>
                        </div>
                        <div class="timeline-continue">
                          <div class="row timeline-right">
                            <div class="col-md-6">
                              <p class="timeline-date">
                                {/* <!--  01 Jun 2020--> */}
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="timeline-box">
                                <div class="timeline-icon">
                                  <img src={icon1} />
                                </div>
                                <div class="timeline-text">
                                  <h3>Enduring Commitment</h3>
                                  <p>
                                    {" "}
                                    With over 25 years of successful operation,
                                    we have a deep understanding of the evolving
                                    challenges businesses face. Our longevity is
                                    a testament to our dedication to
                                    sustainability and profitability. We take
                                    immense pride in running a thriving,
                                    customer-powered organization, committed to
                                    your long-term success.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row timeline-left">
                            <div class="col-md-6 d-md-none d-block">
                              <p class="timeline-date">
                                {/* <!--  01 Jan 2020--> */}
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="timeline-box">
                                <div class="timeline-icon d-md-none d-block">
                                  {/* <img src={icon2} />     */}
                                </div>
                                <div class="timeline-text">
                                  <h3>Dedicated to Innovation</h3>
                                  <p>
                                    At the heart of our business lies a
                                    relentless pursuit of excellence in software
                                    development. Our commitment to research and
                                    development is unparalleled. We invest
                                    heavily in innovation and control the entire
                                    technology stack, including global data
                                    centers, to ensure that our solutions remain
                                    at the cutting edge of technology.
                                  </p>
                                </div>
                                <div class="timeline-icon d-md-block-1 d-none">
                                  <img src={icon2} />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 d-md-block d-none">
                              {/* <p class="timeline-date-1"> */}
                              {/* <!--  01 Jan 2020--> */}
                              {/* </p> */}
                            </div>
                          </div>

                          {/* <!--<div class="row">-->
            <!--  <div class="col-12">-->
            <!--    <div class="timeline-year">-->
            <!--      <p>2020</p>-->
            <!--    </div>-->
            <!--  </div>-->
            <!--</div>--> */}

                          <div class="row timeline-right">
                            <div class="col-md-6">
                              <p class="timeline-date">
                                {/* <!--  01 Dec 2019--> */}
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="timeline-box">
                                <div class="timeline-icon">
                                  <img src={icon3} />
                                </div>
                                <div class="timeline-text">
                                  <h3>Client-Focused Strategy</h3>
                                  <p>
                                    Our success is built on the trust and
                                    support of our customers. We prioritize your
                                    needs and are dedicated to fostering your
                                    growth, regardless of your business size. We
                                    are always here to provide the support and
                                    solutions you need to succeed.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row timeline-left">
                            <div class="col-md-6 d-md-none d-block">
                              <p class="timeline-date">
                                {/* <!--  01 Sep  2019--> */}
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="timeline-box">
                                <div class="timeline-icon d-md-none d-block">
                                  {/* <img src="assets/images/menu-icon/software-development.png"> */}
                                </div>
                                <div class="timeline-text">
                                  <h3>Complete Software Suite</h3>
                                  <p>
                                    We offer a full range of software products
                                    designed to meet your business needs. From
                                    powerful CRM systems to advanced data
                                    management tools, our software solutions are
                                    crafted to drive your success and simplify
                                    your operations.
                                  </p>
                                </div>
                                <div class="timeline-icon d-md-block-1 d-none">
                                  <img src={icon4} />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 d-md-block d-none">
                              <p class="timeline-date-1">
                                {/* <!--  01 Sep  2019--> */}
                              </p>
                            </div>
                          </div>

                          <div class="row timeline-right">
                            <div class="col-md-6">
                              <p class="timeline-date">
                                {/* <!--  01 Jun 2019--> */}
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="timeline-box">
                                <div class="timeline-icon">
                                  <img src={icon5} />
                                </div>
                                <div class="timeline-text">
                                  <h3>Cutting-Edge Technology</h3>
                                  <p>
                                    Our proprietary technology stack ensures you
                                    receive the most advanced and secure
                                    software solutions. We handle everything
                                    from development to data center management,
                                    providing a seamless and reliable
                                    experience.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row timeline-left">
                            <div class="col-md-6 d-md-none d-block">
                              <p class="timeline-date">
                                {/* <!--  01 Mar 2019--> */}
                              </p>
                            </div>
                            <div class="col-md-6">
                              <div class="timeline-box">
                                <div class="timeline-icon d-md-none d-block">
                                  {/* <img src="assets/images/menu-icon/evolve.png"> */}
                                </div>
                                <div class="timeline-text">
                                  <h3>Ongoing Evolution</h3>
                                  <p>
                                    Our dedication to continuous improvement
                                    means we are always enhancing our products
                                    and services. We listen to your feedback and
                                    adapt our offerings to meet the
                                    ever-changing demands of the business
                                    landscape.
                                  </p>
                                </div>
                                <div class="timeline-icon d-md-block-1 d-none">
                                  <img src={icon6} />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 d-md-block d-none">
                              <p class="timeline-date-1">
                                {/* <!--  01 Mar 2019--> */}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-start">
                          {/* <!--<p>Launch</p>--> */}
                        </div>
                        {/* <!--<div class="timeline-launch">-->
          <!--  <div class="timeline-box">-->
          <!--    <div class="timeline-text">-->
          <!--      <h3>Launched our company on 01 Jan 2019</h3>-->
          <!--      <p>Lorem ipsum dolor sit amet</p>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>--> */}
                      </div>
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
  );
}
