"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from 'gsap';

import { Helmet } from "react-helmet";
import Staring from "../src/data/portfolios/Starting.json";
// import Automotives from '../../data/portfolios/Automotives.json'
// import Automotives2 from '../../data/portfolios/Automotives2.json'
import CheckIcon from "@mui/icons-material/Check";
import LoadingScreen from "./components/dark/common/loader";
import Cursor from "./components/dark/common/cusor";
import ProgressScroll from "./components/dark/common/ProgressScroll";
import Lines from "./components/dark/common/Lines";
import CRMNavbar from "./components/dark/creative-agency/CRMNavbar";
import Footer from "./components/dark/home-main/Footer";
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
const Startups = () => {
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
          {/* <Navbar /> */}
          <CRMNavbar />

          <div id="smooth-content">
            <main className="main-bg">
              <section className="services section-padding pb-0">
                <div className="container">
                  <div style={{ paddingTop: "80px" }}>
                    <div>
                      <h3
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          marginBottom: "50px",
                          textAlign: "center",
                        }}
                      >
                        Accelerate Supercharge your growth with Puresaas CRM
                      </h3>
                    </div>
                    <div>
                      <p style={{ fontSize: "20px", textAlign: "center" }}>
                        Unlock the full potential of your business with Puresaas
                        CRM – the ultimate tool designed to accelerate your
                        growth and optimize your sales process. Whether you're
                        managing leads, tracking customer interactions, or
                        automating your workflows, Puresaas CRM provides an
                        all-in-one solution to streamline operations. With
                        intelligent features like real-time analytics,
                        customizable pipelines, and AI-powered insights, you'll
                        be able to make smarter decisions, enhance customer
                        relationships, and scale your business faster.
                        Experience seamless integration, effortless
                        collaboration, and a boost in productivity with Puresaas
                        CRM, and take your business to the next level.
                      </p>
                    </div>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <button
                        style={{
                          marginTop: "40px",
                          padding: "9px  30px",
                          borderRadius: "1.61765rem",
                          fontWeight: "400",
                          border: "0px",
                        }}
                      >
                        {" "}
                        <a href="/bookdemo">GET A DEMO</a>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container">

              <div style={{ marginTop: "20px" }}>
                <img src='/dark/assets/imgs/background/StartUp.png'/>
              </div>
              </div>
              <div className="container">
                <div
                  className="col-lg-12"
                  style={{
                    marginTop: "50px",
                    padding: "30px 20px",
                    border: "1px solid #fff",
                  }}
                >
                  <div className="item main-bg md-mb50">
                    <div className="row rest">
                      <div className="col-lg-6 col-md-5 img rest">
                        <h4 style={{ fontSize: "29px" }}>Problem </h4>
                        <p style={{ marginTop: "20px" }}>
                          Puresaas CRM is the powerful platform you need to
                          fast-track your business growth and drive
                          unprecedented success. With its intuitive interface
                          and advanced features, you can streamline your sales
                          pipeline, automate workflows, and enhance customer
                          engagement with ease. Whether you're looking to
                          improve lead conversion, boost team productivity, or
                          gain deeper insights into your business performance,
                          Puresaas CRM empowers you to achieve more, faster. Say
                          goodbye to inefficiencies and hello to a future of
                          accelerated growth and success with Puresaas CRM by
                          your side.
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-7 cont valign">
                        <div className="full-widthhh">
                          <div className="tags mb-15">
                            <h4 style={{ fontSize: "27px" }}>Solution</h4>
                            <p style={{ marginTop: "20px" }}>
                              Puresaas CRM empowers your business to accelerate
                              its growth while supercharging your success. With
                              powerful automation, data-driven insights, and
                              seamless integration, you can streamline
                              operations, improve customer relationships, and
                              drive better sales results. Whether you're
                              capturing leads or managing your pipeline,
                              Puresaas CRM equips your team with the tools
                              needed to achieve faster results and scale
                              efficiently. Make smarter decisions and achieve
                              sustained growth with a CRM built for success.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
              <div style={{ paddingTop: "60px" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-xl-6" style={{display:"flex",alignItems:"center"}}>
                      <h2>
                        Here's how you can take your startup to the next level
                        with a CRM
                      </h2>
                    </div>
                    <div className="col-12 col-xl-6" >
                      <div class="right-level">
                        <div class="first-part">
                          <div class="startup-nxtlvl-boxes anim1">
                            <p>
                              Track key performance indicators, including
                              current trends and future predictions.
                            </p>
                          </div>
                          <div class="startup-nxtlvl-boxes anim2">
                            <p>
                              Automate every aspect of your business and cut out
                              time-intensive, repetitive tasks.
                            </p>
                          </div>
                          <div class="startup-nxtlvl-boxes anim3">
                            <p>
                              Streamline your lead nurturing process and
                              maximize the potential of every incoming lead.
                            </p>
                          </div>
                        </div>
                        <div class="scnd-part">
                          <div class="startup-nxtlvl-boxes anim4">
                            <p>
                              Connect with your customers across multiple
                              platforms, like email, telephone, and social
                              media.
                            </p>
                          </div>
                          <div class="startup-nxtlvl-boxes anim5">
                            <p>
                              Get advanced lead and deal predictions so that you
                              can identify the leads that are likely to convert
                              and ultimately close more deals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              <section
                className="services section-padding"
                style={{ paddingBottom: "105px" }}
              >
                <div className="container">
                  <div className="sec-head mb-50">
                    <h6
                      className="sub-title mb-25"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        fontSize: "32px",
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      Why trust Pursaas CRM with your startup?{" "}
                    </h6>
                  </div>
                  <div>
                    <p style={{ fontSize: "20px", textAlign: "center" }}>
                      Puresaas CRM is the trusted partner that startups need to
                      scale and succeed in today’s competitive market. Designed
                      with flexibility and ease of use in mind, it provides
                      powerful features that help you manage leads, track
                      customer interactions, and automate processes – all in one
                      platform. For startups, every decision counts, and
                      Puresaas CRM ensures you have the insights, tools, and
                      support to make informed choices and grow your business.
                      With seamless integration, cost-effective pricing, and a
                      user-friendly interface, Puresaas CRM empowers your
                      startup to optimize operations, improve customer
                      relationships, and achieve rapid, sustainable growth.
                      Trust Puresaas CRM to help you build a solid foundation
                      and take your startup to the next level.
                    </p>
                  </div>
                </div>
              </section>

              <div style={{ paddingTop: "60px", paddingBottom: "105px" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      gap: "10px",
                      paddingTop: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div className="realestatepersantage">
                      <h3 style={{ margin: 0 }}>300%</h3>
                      <span style={{ fontSize: "20px" }}>
                        improvement in lead conversion rates
                      </span>
                    </div>

                    <div className="realestatepersantage">
                      <h3 style={{ margin: 0 }}>41%</h3>
                      <span style={{ fontSize: "20px" }}>
                        revenue increase per sales person
                      </span>
                    </div>

                    <div className="realestatepersantage">
                      <h3 style={{ margin: 0 }}>26%</h3>
                      <span style={{ fontSize: "20px" }}>
                        Improvement in customer retention rates
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                        width: "300px",
                        textAlign: "center",
                      }}
                    >
                      <h3 style={{ margin: 0 }}>47%</h3>
                      <span style={{ fontSize: "20px" }}>
                        Increase in customer satisfaction rates
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <section
                className="services section-padding"
                style={{ paddingTop: "0px" }}
              >
                <div className="container">
                  <div className="sec-head mb-50">
                    <h6
                      className="sub-title mb-25  main-color"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        fontSize: "32px",
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Puresaas CRM has everything a startup needs{" "}
                    </h6>
                  </div>
                  <div className="row">
                    {Staring.slice(0, 6).map((item, i) => (
                      <div
                        key={i}
                        className="col-lg-4"
                        style={{ marginBottom: "20px" }}
                      >
                        <div
                          className="item-box radius-15 md-mb30"
                          style={{ padding: "33px 26px" }}
                        >
                          <div className="icon mb-40 opacity-5">
                            <img src={item.img} alt="" />
                          </div>
                          <h5 className="mb-15">{item.title}</h5>

                          <p
                            style={{ listStyle: "disc", marginBottom: "10px" }}
                          >
                            {item.first}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
};

export default Startups;
