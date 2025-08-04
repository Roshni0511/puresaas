import React, { useEffect, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet';
import Educations from '../src/data/portfolios/Educations.json';
import CheckIcon from '@mui/icons-material/Check';
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import { gsap } from 'gsap';

import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import CRMNavbar from './components/dark/creative-agency/CRMNavbar';
import Footer from './components/dark/home-main/Footer';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';

const Educationcrm = () => {
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
                      <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px',textAlign:'center'}}>Boost interest, increase enrollments, and streamline operations</h3>
                  </div>
                  <div>
                    <p style={{fontSize:'20px', textAlign:'center'}}>
                   
Boosting interest, increasing enrollments, and streamlining operations are key to success in the hospitality industry. Engaging marketing strategies and personalized guest experiences attract more customers, while an efficient CRM helps automate tasks, manage bookings, and enhance guest satisfaction. By leveraging technology, businesses can optimize workflows, reduce manual efforts, and focus on delivering exceptional service, ultimately driving growth and profitability.
  </p>
                  </div>
                  <div style={{justifyContent:'center',display:'flex'}}>
                  <button style={{marginTop:'40px', padding:'9px  30px', borderRadius:'1.61765rem', fontWeight:'400', border:'0px',}} > <a href="/bookdemo">GET A DEMO</a></button>
                  </div>
            </div>
  
            </div>
          </section>
          
          <div className='container' > 
  
            <div className="col-lg-12" style={{marginTop:"50px",padding:'30px 20px',border:"1px solid #fff"}}>
              <div className="item main-bg md-mb50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                     <h4 style={{fontSize:"29px"}}>Why does the education sector need a CRM? </h4>
                     <p  style={{marginTop:"20px"}}>
                    

                     The education sector needs a CRM to manage student relationships, streamline admissions, and enhance communication. With a centralized system, institutions can track inquiries, automate follow-ups, and personalize interactions, improving student engagement. A CRM also helps in managing enrollments, scheduling, and alumni relations while providing data-driven insights for better decision-making. By automating administrative tasks, it allows educators to focus more on delivering quality education, ultimately increasing efficiency and student satisfaction.</p>
                  </div>
                  <div className="col-lg-6 col-md-7 cont valign">
                    <div className="full-widthhh">
                      <div className="tags mb-15">
                        <h4 style={{fontSize:"27px"}}>Features to look for in an education CRM </h4>
                      </div>
                     <ul style={{padding:"0px",lineHeight:"35px"}}>
                      <li><CheckIcon style={{marginRight:"15px"}}/> Track and manage student inquiries efficiently</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Send reminders and personalized messages.</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/> Monitor application progress in real-time</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Connect via email, SMS, and WhatsApp.</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Streamline payments and reminders.</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/> Automate administrative processes for efficiency.</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Gain insights into student behavior and trends.</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/> Sync with LMS, payment gateways, and other tools.</li>
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
            
            <h6 className="sub-title  main-color mb-25"  style={{justifyContent:'center' , display:'flex', fontSize:"32px",textAlign:"center",fontWeight:'700'}}>Why choose Puresaas CRM for your business?</h6>
         
          </div>
          <div className="row">
            {Educations.slice(0, 6).map((item, i) => (
              <div key={i} className="col-lg-4" style={{marginBottom:'20px'}}>
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

export default Educationcrm