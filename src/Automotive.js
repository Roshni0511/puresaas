'use client';
import React, { useEffect, useLayoutEffect } from 'react';

import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import Automotives from '../src/data/portfolios/Automotives.json'
import Automotives2 from '../src/data/portfolios/Automotives2.json'
import CheckIcon from '@mui/icons-material/Check';
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import CRMNavbar from './components/dark/creative-agency/CRMNavbar';
import Footer from './components/dark/home-main/Footer';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';

const Automotivescrm = () => {
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
                    
                  {/* <Navbar /> */}
                <CRMNavbar />
                  <div id="smooth-content">
                      <main className="main-bg">
                      <section className="services section-padding pb-0">
                      <div className="container">
                          <div style={{paddingTop:'80px'}}>
                            <div>
                              <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px',textAlign:'center'}}>Accelerate your sales and rev up your customer relationships with Puresaas CRM</h3>
                          </div>
                      <div>
                        <p style={{fontSize:'20px', textAlign:'center'}}>Accelerate your sales and rev up your customer relationships with PURSAAS CRM, the ultimate solution designed to streamline your automotive business. From managing leads effortlessly to enhancing customer interactions with AI-driven insights, PURSAAS CRM empowers you to stay ahead of the competition. With advanced tools for omnichannel communication, inventory management, and real-time notifications, you can deliver a seamless and personalized experience to every customer. Drive growth, boost efficiency, and transform your dealership operations with a CRM built for the fast-paced world of automotive sales.
                      </p>
                </div>
                <div style={{justifyContent:'center',display:'flex'}}>
                <button style={{marginTop:'40px', padding:'9px  30px', borderRadius:'1.61765rem', fontWeight:'400', border:'0px',}} > <a href="/bookdemo">GET A DEMO</a></button>
                </div>
          </div>

          </div>
        </section>
        <div style={{marginTop:'20px'}}>
          <div className='container'>
               <img src='/dark/assets/imgs/background/Automotive CRM (1).png'/>
          </div>
        </div>
        <div className='container' > 

          <div className="col-lg-12" style={{marginTop:"50px",padding:'30px 20px',border:"1px solid #fff"}}>
            <div className="item main-bg md-mb50">
              <div className="row rest">
                <div className="col-lg-6 col-md-5 img rest">
                   <h4 style={{fontSize:"29px"}}>What is the role of CRM in the automotive industry? </h4>
                   <p  style={{marginTop:"20px"}}>
                   In the fast-evolving automotive industry, customer expectations are higher than ever, making efficient relationship management essential for success. A Customer Relationship Management (CRM) system helps automotive businesses streamline operations by organizing leads, enhancing customer engagement, and improving sales processes. With features like AI-driven insights, real-time notifications, and omnichannel communication, a CRM ensures that dealerships and service providers can deliver personalized experiences while optimizing inventory and service management. By leveraging data-driven strategies, automotive companies can nurture long-term customer loyalty, increase conversions, and stay ahead in a competitive market.</p>
                </div>
                <div className="col-lg-6 col-md-7 cont valign">
                  <div className="full-widthhh">
                    <div className="tags mb-15">
                      <h4 style={{fontSize:"27px"}}>Key features automotive companies should look for in a CRM</h4>
                    </div>
                   <ul style={{padding:"0px",lineHeight:"35px"}}>
                    <li><CheckIcon style={{marginRight:"15px"}}/>Omnichannel Communication</li>
                    <li><CheckIcon style={{marginRight:"15px"}}/>Social Media Management</li>
                    <li><CheckIcon style={{marginRight:"15px"}}/>AI-enhanced lead and deal management</li>
                    <li><CheckIcon style={{marginRight:"15px"}}/>360-degree customer view</li>
                    <li><CheckIcon style={{marginRight:"15px"}}/>Real-time notification system for customer interactions</li>
                    <li><CheckIcon style={{marginRight:"15px"}}/>Dealership and inventory management</li>
                    <li><CheckIcon style={{marginRight:"15px"}}/>Sales order and purchasing order generation </li>
                    <li><CheckIcon style={{marginRight:"15px"}}/> Billing & Payments Integration</li>
                   </ul>
                  </div>
                </div>
          
            </div>
          </div>
        
        </div>
        </div>
        <section className="services section-padding" style={{paddingBottom:"105px"}}>
      <div className="container">
        <div className="sec-head mb-50">
           
          <h6 className="sub-title mb-25" style={{justifyContent:'center' , display:'flex', fontSize:"32px",textAlign:"center",fontWeight:'700'}}>Why choose Pursaas CRM for your automotive business? </h6>
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
          {Automotives.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4" style={{marginBottom:'20px'}}>
              <div className="item-box radius-15 md-mb30" style={{padding: "33px 26px"}}>
              
                <h5 className="mb-15" style={{color:'#ffcf2a'}}>{item.title}</h5>
             <p style={{listStyle:'disc', marginBottom:'10px'}}>{item.first}</p>
           
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
    <section className="services section-padding" style={{paddingTop:'0px'}}>
      <div className="container">
        <div className="sec-head mb-50">
          
          <h6 className="sub-title mb-25 main-color"  style={{justifyContent:'center' , display:'flex', fontSize:"32px",textAlign:"center",fontWeight:'700'}}>Why is Puresaas CRM good for your automotive business?  </h6>
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
          {Automotives2.slice(0, 6).map((item, i) => (
            <div key={i} className="col-lg-4" style={{marginBottom:'20px'}}>
              <div className="item-box radius-15 md-mb30" style={{padding: "33px 26px"}}>
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15">{item.title}</h5>
            
              
            <p style={{listStyle:'disc', marginBottom:'10px'}}>{item.first}</p>
           
          

            {/* <div >
                <button style={{marginTop:'15px', padding:'9px  30px', borderRadius:'1.61765rem', fontWeight:'400', border:'0px'}}>Learn More</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>

                          {/* <RealCRM1 /> */}
                          {/* <Benifit /> */}
                          {/* <Brands /> */}
                          {/* <RealCRM2 /> */}
                          {/* <FAQS /> */}
                          {/* <Testimonials /> */}
                          {/* <RealTestimonials /> */}

                      </main>
                      <Footer />
                  </div>
              </div>
          </body>
      </>
  )
}

export default Automotivescrm
