import React, { useEffect, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import RealState from '../src/data/portfolios/RealState.json'
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import CRMNavbar from './components/dark/creative-agency/CRMNavbar';
import Footer from './components/dark/home-main/Footer';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
const RealEstates = () => {
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
                      <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px',textAlign:'center'}}>Real estate CRM software for accelerated sales</h3>
                  </div>
                  <div>
                    <p style={{fontSize:'20px', textAlign:'center'}}>In today's fast-paced real estate market, staying ahead of the competition requires not just effort but smart tools that empower your sales team. Our Real Estate CRM software is designed to streamline client management, enhance communication, and automate critical processes, allowing agents to focus more on closing deals. With features like advanced lead tracking, seamless portfolio management, and automated follow-ups, our CRM helps real estate professionals convert leads faster, nurture long-term relationships, and boost sales performance. Experience the power of contextual AI and an intuitive user interface that drives growth and accelerates your business.
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

            <img src='/dark/assets/imgs/background/RealEstate.png'/>
            </div>
          </div>
          <div className='container' > 
  
            <div className="col-lg-12" style={{marginTop:"50px",padding:'30px 20px',border:"1px solid #fff"}}>
              <div className="item main-bg md-mb50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                     <h4 style={{fontSize:"29px"}}>What is a real estate CRM software?  </h4>
                     <p  style={{marginTop:"20px"}}>
                     A Real Estate CRM (Customer Relationship Management) software is a specialized tool designed to help real estate professionals manage leads, clients, properties, and transactions more efficiently. It streamlines communication, automates follow-ups, and provides insights through analytics, helping agents and brokers stay organized and close deals faster. With features like lead tracking, automated reminders, email marketing, and document management, a real estate CRM enhances productivity and ensures no opportunity is missed. Whether managing multiple property listings or nurturing client relationships, a good CRM simplifies the workflow, improves customer engagement, and boosts sales conversions.</p>
                  </div>
                  <div className="col-lg-6 col-md-7 cont valign">
                    <div className="full-widthhh">
                      <div className="tags mb-15">
                        <h4 style={{fontSize:"27px"}}>How is CRM important for realtors? </h4>
                        <p style={{marginTop:'12px'}}> 
                        A CRM (Customer Relationship Management) system is crucial for realtors as it helps them stay organized, manage leads effectively, and build stronger client relationships. In the competitive real estate industry, timely follow-ups and personalized communication can make a big difference. A CRM automates tasks like sending reminders, tracking property inquiries, and managing client interactions, ensuring that no potential deal is lost due to missed communication. It also provides insights into client preferences, helping realtors offer more tailored property recommendations. 
   </p>
                      </div>
             
                    </div>
                  </div>
            
              </div>
            </div>
          
          </div>
          </div>
        
      <section className="services section-padding" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="sec-head mb-50">
            
            <h6 className="sub-title mb-25  main-color"  style={{justifyContent:'center' , display:'flex', fontSize:"32px",textAlign:"center",fontWeight:'700'}}>Why choose Puresaas CRM for your real estate business? </h6>
           
          </div>
          <div className="row">
            {RealState.slice(0, 6).map((item, i) => (
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
  
                            
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </>
    )
}

export default RealEstates