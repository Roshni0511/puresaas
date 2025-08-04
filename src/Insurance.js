import React, { useEffect, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import Insurances from '../src/data/portfolios/Insurances.json'
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import CRMNavbar from './components/dark/creative-agency/CRMNavbar';
import Footer from './components/dark/home-main/Footer';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
const Insurancess = () => {
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
                  <div style={{ paddingTop: '80px' }}>
                    <div className="col-lg-12">
                      <div className="row " style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                        <div className="col-lg-6 ">
                          <div className="d-flex flex-column align-items-center text-center w-100">
                            <h4 style={{ justifyContent: 'center', display: 'flex', marginBottom: '23px', textAlign: 'justify' }}>Best CRM Software for Insurance Agents</h4>
                          </div>
                          <div>
                            <p style={{ fontSize: '20px', textAlign: 'justify' }}>Choosing the right CRM software for insurance agents is essential for managing client relationships, streamlining workflows, and boosting sales efficiency. The best CRMs, like Pursaas CRM, HubSpot, and Salesforce, offer features such as lead tracking, automated follow-ups, customizable dashboards, and integration with various tools.
                            </p>
                          </div>
                          <div >
                            <button style={{ marginTop: '40px', padding: '9px  30px', borderRadius: '1.61765rem', fontWeight: '400', border: '0px', }} > <a href="/bookdemo">GET A DEMO</a></button>
                          </div>
                        </div>
                        <div className="col-lg-6 ">
                          <img src='/dark/assets/imgs/background/Insurance.png' />
                        </div>

                      </div>
                    </div>


                  </div>

                </div>
              </section>

              <div className='container' >

                <div className="col-lg-12" style={{ marginTop: "50px", padding: '30px 20px', border: "1px solid #fff" }}>
                  <div className="item main-bg md-mb50">
                    <div className="row rest">
                      <div className="col-lg-6 col-md-7 cont valign">
                        <div className="full-widthhh">
                          <div className="tags mb-15">
                            <h4 style={{ fontSize: "27px" }}>What is an insurance CRM?</h4>
                            <p style={{ marginTop: "10px" }}>

                              An insurance CRM (Customer Relationship Management) is a specialized software designed to help insurance agents and brokers manage client relationships, track leads, and streamline the sales process. It helps agents organize client data, policies, claims, and communications in one place. Key features often include automated follow-ups, lead management, personalized communication tools, and integration with other insurance platforms. By providing a centralized system to manage customer interactions, an insurance CRM improves efficiency, enhances customer service, and helps agents close more deals while maintaining long-term relationships with clients.
                            </p>
                          </div>

                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5 img rest">
                        <h4 style={{ fontSize: "29px" }}>How is CRM important for insurance agents and brokers?</h4>
                        <p style={{ marginTop: "20px" }}>

                          CRM is crucial for insurance agents and brokers as it helps streamline their operations and improve client relationships. By centralizing client data, policies, and interactions, it allows for efficient tracking of leads, follow-ups, and renewals. CRMs automate routine tasks, ensuring agents never miss an opportunity or deadline, while providing insights into customer needs and preferences. This personalized approach not only enhances customer satisfaction but also increases conversion rates, boosts retention, and simplifies day-to-day workflows, enabling agents and brokers to focus more on building relationships and growing their business.
                        </p>
                      </div>


                    </div>
                  </div>

                </div>
              </div>

              <section className="services section-padding" style={{ paddingTop: '100px' }}>
                <div className="container">
                  <div className="sec-head mb-50">

                    <h6 className="sub-title mb-25  main-color" style={{ justifyContent: 'center', display: 'flex', fontSize: "32px", textAlign: "center", fontWeight: '700' }}>Why choose Pursaas CRM for your insurance business? </h6>

                  </div>
                  <div className="row" >
                    {Insurances.slice(0, 6).map((item, i) => (
                      <div key={i} className="col-lg-4" style={{ marginBottom: '20px' }}>
                        <div className="item-box radius-15 md-mb30" style={{ padding: "33px 26px" }}>
                          <div className="icon mb-40 opacity-5">
                            <img src={item.img} alt="" />
                          </div>
                          <h5 className="mb-15">{item.title}</h5>


                          <p style={{ listStyle: 'disc', marginBottom: '10px' }}>{item.first}</p>



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

export default Insurancess