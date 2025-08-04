import React, { useEffect, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet';
import Serviceses from '../src/data/portfolios/Serviceses.json'
import CheckIcon from '@mui/icons-material/Check';
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import CRMNavbar from './components/dark/creative-agency/CRMNavbar';
import Footer from './components/dark/home-main/Footer';
import { gsap } from 'gsap';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
const Servicesscrm = () => {
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
        <div style={{paddingTop:'80px'}}>
            <div>
                      <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px',textAlign:'center'}}>Puresaas CRM helps service driven industries drive lasting customer relationships</h3>
                  </div>
                  <div>
                    <p style={{fontSize:'20px', textAlign:'center'}}>
                    Puresaas CRM helps service-driven industries build and maintain lasting customer relationships by providing a unified platform for managing interactions across multiple touchpoints. With features like automation, personalized communication, and real-time tracking, Puresaas CRM enables businesses to understand customer needs better, respond faster, and deliver more tailored services. It helps improve customer satisfaction and loyalty by providing seamless support, tracking service requests, and automating follow-ups. Additionally, detailed analytics offer insights into customer behavior, allowing businesses to continuously improve their services and strengthen relationships.
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

            <img src='/dark/assets/imgs/background/Services.png'/>
            </div>
          </div>
          <div className='container' > 
  
            <div className="col-lg-12" style={{marginTop:"50px",padding:'30px 20px',border:"1px solid #fff"}}>
              <div className="item main-bg md-mb50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                     <h4 style={{fontSize:"29px"}}>How is the services industry different?  </h4>
                     <p  style={{marginTop:"20px"}}>
                    

                     The services industry differs from other sectors primarily in its intangible nature. Unlike product-based industries, services are not physically owned or stored; they are experienced and consumed in real time. This makes customer interaction and relationship management even more crucial, as the quality of service directly impacts satisfaction and loyalty. Services often involve direct customer involvement, such as consultations, problem-solving, or personalized experiences, requiring a high level of expertise and customer focus.</p>
                  </div>
                  <div className="col-lg-6 col-md-7 cont valign">
                    <div className="full-widthhh">
                      <div className="tags mb-15">
                        <h4 style={{fontSize:"27px"}}>What are the key functionalities service industries should look for in a CRM? </h4>
                      </div>
                     <ul style={{padding:"0px",lineHeight:"35px"}}>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Customer Interaction Tracking </li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Automated Service Requests </li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Appointment Scheduling</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Customizable Dashboards </li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Client History and Preferences</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Integration with Other Tools</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Real-time Analytics </li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Customer Feedback and Surveys </li>
                     </ul>
                    </div>
                  </div>
            
              </div>
            </div>
          
          </div>
          </div>
   
      <section className="services section-padding" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="sec-head mb-50">
            
            <h6 className="sub-title mb-25  main-color"  style={{justifyContent:'center' , display:'flex', fontSize:"32px",textAlign:"center",fontWeight:'700'}}>Why is Puresaas CRM good for service industries?   </h6>
         
          </div>
          <div className="row" >
            {Serviceses.slice(0, 4).map((item, i) => (
              <div key={i} className="col-lg-6" style={{marginBottom:'20px'}}>
                <div className="item-box radius-15 md-mb30" style={{padding: "33px 26px"}}>
                  <div className="icon mb-40 opacity-5">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="mb-15">{item.title}</h5>
              
                
              <p style={{listStyle:'disc', marginBottom:'10px'}}>{item.first}</p>
             
            
  
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
    )
}

export default Servicesscrm