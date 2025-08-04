'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import data from '../../data/portfolios/Financialservice.json' 
import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Footer from '../../components/dark/home-main/Footer';
import CRMNavbar from '../../components/dark/creative-agency/CRMNavbar';
export default function Servicesfinancial() {
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
            {/* <Navbar /> */}
            <CRMNavbar />
            <div id="smooth-content">
              <main className="main-bg">
                {/* <Header /> */}
                <section className="services section-padding pb-0">
            <div className="container">
        <div style={{paddingTop:'80px'}}>
            <div className="d-flex flex-column align-items-center text-center w-100">
            <h3 style={{marginBottom:'30px'}} >
   Build client loyalty while delivering <br /> exceptional financial services
  </h3>
                  </div>
                  <div>
                    <p className='text-center'style={{fontSize:'20px', textAlign:'justify'}}>
                    To build strong client loyalty while delivering exceptional financial services, it's crucial to understand your clients' needs and consistently exceed their expectations. With Puresaas CRM, you can centralize client data, streamline communication, and personalize your services to provide value at every interaction.
  </p>
                  </div>
                  <div style={{justifyContent:'center',display:'flex'}}>
                  <button style={{marginTop:'40px', padding:'9px  30px', borderRadius:'1.61765rem', fontWeight:'400', border:'0px',}} > <a href="../dark/Booksdemo">BOOK A DEMO</a></button>
                  </div>
            </div>
  
            </div>
          
  
          </section>
          <div className='container'>
  
  <div style={{marginTop:'30px'}}>
  <img src='/dark/assets/imgs/background/Financial Services (1).png'/>
  </div>
  </div>
                <section className="services section-padding">
        <div className="container">
          <div className="sec-head mb-50 d-flex flex-column align-items-center text-center w-100">
          <h6 className="sub-title main-color mb-3 d-flex justify-content-center text-center fs-3">
      Why choose Puresaas CRM <br /> for
    financial services?
  </h6>
  
          </div>
          <div className="row " style={{rowGap:'20px'}}   >
            {data.slice(0, 6).map((item, i) => (
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
               
                
              </main>
              <Footer/>
            </div>
          </div>
        </body>
      </>
    );
}
