'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import data from '../src/data/Aboutservices.json'
import about from '../src/Image/about-3 (3).png.png'

function Intro() {
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
          <div
      className="header page-header bg-img section-padding"
      data-background="/dark/assets/imgs/header/bg1.jpg"
      data-overlay-dark="9"
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1 style={{fontsize: "40px"}}>Enterprise Puresaas</h1>
          <div className="mt-15">
            <a href="/">Home</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">Enterprise</span>
          </div>
        </div>
      </div>
    </div>
    <section className="page-intro position-re mt-4">
      {/* <div className="container-fluid rest">
        <div className="img fit-img">
          <img src="/dark/assets/imgs/background/4.jpg" alt="" />
        </div>
      </div> */}
      <div className="container ">
        <div className="row">
        <div style={{marginBottom:'45px'}}><h3 style={{display:'flex', justifyContent:'center'}}>ENTERPRISE</h3></div>
          <div className="col-lg-5">
            <h6 className="sub-title main-color" style={{marginLeft:'30px'}}>About Company</h6>
            <img src={about} alt="" />
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
              <p style={{textAlign:'justify'}}>Welcome to Puresaas, where we transform the way businesses connect with their customers through advanced CRM solutions. Since our inception, we've been on a mission to help businesses build stronger, more meaningful relationships that drive growth and success.</p>
              <br />
              <ul style={{paddingLeft:'0px' , textAlign:'justify'}}>
                <li>At Puresaas, we know that every thriving business is built on a foundation of satisfied customers. Our CRM platform is designed to streamline your operations, enhance workflows, and provide actionable insights into customer behavior, regardless of your business size or industry. Our solutions are scalable and tailored to meet the unique needs of both startups and large enterprises.</li>
                <br />
                <li>With a focus on innovation, we continually integrate the latest advancements to keep your business ahead in today's fast-paced market. Our user-friendly interface ensures seamless adoption, empowering your team to make the most of our CRM technology.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
      <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-50">
          <h6 className="sub-title main-color mb-25" style={{justifyContent:'center' , display:'flex', fontSize:"35px"}}>WHY  CHOOSE US</h6>
          {/* <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              What We Have <span className="fw-200">to Offer</span>
            </h2>
            <div className="ml-auto">
              <a href="/dark/page-services" className="go-more">
                <span className="text">View all services</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div> */}
        </div>
        <div className="row">
          {data.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="item-box radius-15 md-mb30">
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15">{item.title}</h5>
                <p>{item.desc}</p>
                {/* <a href={item.link} className="rmore mt-30">
                  <span className="sub-title">Read More</span>
                  <img
                    src="/dark/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
    
    
    </>

  );
}

export default Intro;
