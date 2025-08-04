
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { gsap } from 'gsap';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';

import Footer from './components/dark/home-main/Footer';
import Navbar from './components/dark/creative-agency/Navbar';
import CRMNavbar from './components/dark/creative-agency/CRMNavbar';

const 



PricingCard = ({ plan }) => (
  <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', textAlign: 'center', width: '250px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
    <h6>{plan.title}</h6>
    <h3>{plan.price}</h3>
    <span style={{ fontSize: "13px" }}>{plan.first}</span>
    <a href="/signup">
      <button style={{ backgroundColor: '#fff', color: '#000', padding: '10px', borderRadius: '5px', border: 'none', margin: '15px' }}>START FREE TRIAL</button>
    </a>
    <h6 style={{ margin: "10px", fontSize: '15px', color: "#c6c8c9", textAlign: 'start' }}>{plan.description}</h6>
    <ul style={{ textAlign: 'left', padding: '0px', lineHeight: '35px' }}>
      {plan.features.map((feature, i) => (
        <li key={i}>✓ {feature}</li>
      ))}
    </ul>
  </div>
);

const Pricingss = () => {
  const [view, setView] = useState('monthly');
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
  const pricingData = {
    monthly: [
      {
        title: 'Standard',
        price: '₹1300',
        first: '/user/month billed annually',
        description: 'All the essentials:',
        features: [
          'Mass email', 'Custom fields', 'Workflows', 'Sales forecasting',
          'Lookup fields', 'Canvas', 'Office 365 integration', 'Google Calendar sync', 'Pursaas Marketplace'
        ],
      },
      {
        title: 'Professional',
        price: '₹2100',
        first: '/user/month billed annually',
        description: 'Everything in Standard +',
        features: [
          'Blueprint', 'CPQ', 'SalesSignals', 'Inventory management',
          'Webhooks', 'Assignment rules', 'Validation rules', 'Kiosk Studio', 'Google Ads integration'
        ],
      },
      {
        title: 'Enterprise',
        price: '₹3000',
        first: '/user/month billed annually',
        description: 'Everything in Professional +',
        features: [
          'Zia – AI Assistant', 'Territory management', 'Custom modules', 'Custom functions',
          'Journey orchestration', 'Multi-user portals', 'Page layouts', 'Client scripts', 'Sandbox'
        ],
      },
      {
        title: 'Ultimate',
        price: '₹3200',
        first: '/user/month billed annually',
        description: 'Everything in Enterprise +',
        features: [
          'Enhanced feature limits', 'Extended AI capabilities', 'Advanced customization',
          'Data preparation', 'Augmented analytics', 'Data storytelling', 'Unified business insights', 'Advanced administration'
        ],
      }
    ],
    yearly: [
      {
        title: 'Standard',
        price: '₹800',
        first: '/user/month billed annually',
        description: 'All the essentials:',
        features: [
          'Mass email', 'Custom fields', 'Workflows', 'Sales forecasting',
          'Lookup fields', 'Canvas', 'Office 365 integration', 'Google Calendar sync', 'Pursaas Marketplace'
        ],
      },
      {
        title: 'Professional',
        price: '₹1,400',
        first: '/user/month billed annually',
        description: 'Everything in Standard +',
        features: [
          'Blueprint', 'CPQ', 'SalesSignals', 'Inventory management',
          'Webhooks', 'Assignment rules', 'Validation rules', 'Kiosk Studio', 'Google Ads integration'
        ],
      },
      {
        title: 'Enterprise',
        price: '₹2,400',
        first: '/user/month billed annually',
        description: 'Everything in Professional +',
        features: [
          'Zia – AI Assistant', 'Territory management', 'Custom modules', 'Custom functions',
          'Journey orchestration', 'Multi-user portals', 'Page layouts', 'Client scripts', 'Sandbox'
        ],
      },
      {
        title: 'Ultimate',
        price: '₹2,600',
        first: '/user/month billed annually',
        description: 'Everything in Enterprise +',
        features: [
          'Enhanced feature limits', 'Extended AI capabilities', 'Advanced customization',
          'Data preparation', 'Augmented analytics', 'Data storytelling', 'Unified business insights', 'Advanced administration'
        ],
      }
    ]
  };

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

      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        {/* <Navbar /> */}
        <CRMNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <div style={{ paddingTop: "60px" }}>
              <div className='themess' style={{ paddingBottom: '100px' }}>

                <section className="services section-padding" style={{ paddingBottom: "0px" }}>
                  <div className="container">
                    <div className="sec-head mb-50">
                      <h5 className="sub-title mb-25 targetfont" style={{ textAlign: "center", fontSize: "45px", fontWeight: "800" }}>
                        Sensational software, Sensible price
                      </h5>
                    </div>
                  </div>
                </section>

                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
                  {['Free trial', 'Flexible contracts', 'Minimal learning curve', 'Intuitive UX'].map((text, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "start", maxWidth: "280px" }}>
                      <CheckCircleOutlineIcon style={{ fontSize: "35px", marginRight: "10px" }} />
                      <div>
                        <h5 style={{ margin: 0, fontSize: '24px' }}>{text}</h5>
                        <span style={{ fontSize: "17px" }}>{index === 0 ? 'No credit card required' : index === 1 ? 'Flexible plans, no long-term commitment.' : index === 2 ? 'Easy to learn, quick to master.' : 'Easy-to-use, seamless experience.'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", margin: "-20px 0px 46px" }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  border: "1px solid #fff",
                  borderRadius: "32px",
                  background: "#fff",
                  padding: "5px",
                  width: "188px",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}>

                  {/* Background Slider */}
                  <div
                    style={{
                      position: "absolute",
                      width: "87px",
                      height: "78%",
                      borderRadius: "25px",
                      backgroundColor: "#000",
                      transform: view === "monthly" ? "translateX(0)" : "translateX(100%)",
                      transition: "transform 0.4s ease-in-out",
                    }}
                  ></div>

                  <button
                    onClick={() => setView('monthly')}
                    style={{
                      borderRadius: '25px',
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      color: view === 'monthly' ? '#fff' : '#000',
                      width: "50%",
                      zIndex: 1,
                      transition: "color 0.3s ease-in-out",
                    }}
                  >
                    Monthly
                  </button>

                  <button
                    onClick={() => setView('yearly')}
                    style={{
                      borderRadius: '25px',
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      color: view === 'yearly' ? '#fff' : '#000',
                      width: "50%",
                      zIndex: 1,
                      transition: "color 0.3s ease-in-out",
                    }}
                  >
                    Yearly
                  </button>

                </div>
              </div>

              {/* <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
                {pricingData[view].map((plan, index) => <PricingCard key={index} plan={plan} />)}
              </div> */}
              <div className='container'>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
                {pricingData[view].map((plan, index) => <PricingCard key={index} plan={plan} />)}
              </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Pricingss;
