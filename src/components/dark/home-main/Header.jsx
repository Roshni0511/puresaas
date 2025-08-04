'use client';
import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

function Header() {
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
      className="header main-header bg-img"
      data-background="/dark/assets/imgs/header/bg1.jpg"
      data-overlay-dark="8"
    >
      <div className="container">
        <div className="row justify-content-end" style={{ alignItems: 'center' }}>
          <div className="col-lg-6">
            <div className="crm-grid">
              {[
                { text: 'Real Estate Agent CRM', icon: '/dark/assets/imgs/icon-img/developer.png', path: '/RealEstateAgentCRM'},
                { text: 'B2B Textile ERP', icon: '/dark/assets/imgs/icon-img/b2b (1).png', path: '/b2bcrm' },
                { text: 'Office ERP', icon: '/dark/assets/imgs/icon-img/organization (1).png', path: '/Officeerp' },
                { text: 'Real Estate CRM', icon: '/dark/assets/imgs/icon-img/real-estate.png',path:'/Realestatecrm' },
                { text: 'Telecaller CRM', icon: '/dark/assets/imgs/icon-img/phone-call.png',path:'/telecallercrm' },
                { text: 'Sales CRM', icon: '/dark/assets/imgs/icon-img/crm (1).png',path:'/salescrm' },
                { text: 'ATS', icon: '/dark/assets/imgs/icon-img/feature.png' ,path:'/ATS'},
                { text: 'Service CRM', icon: '/dark/assets/imgs/icon-img/customer-service.png',path:'/Servicecrm' },
                { text: 'Payroll System', icon: '/dark/assets/imgs/icon-img/money.png',path:'/PayrollSystem' },
              ].map((item, index) => (
                <a key={index} href={item.path} className="crm-card">
                  <img src={item.icon} alt={item.text} className="crm-icon" />
                  <span className="crm-text" style={{color:'black'}}>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text ">
              <h3>
                 Welcome to Puresaas, where your life's work is powered by our life's dedication.
              </h3>
              <p style={{marginTop:'15px',marginBottom:'20px'}}>Our unique and powerful software suite is designed to transform the way you work, enhancing productivity and efficiency at every turn.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     
          <style jsx>{`
        .crm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          padding: 20px 20px 40px 20px;
          max-width: 400px;
          margin: auto;
        }
           @media (max-width: 425px) {
          .crm-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .crm-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #8a8787, #9f9d9d, #8c8c8c);
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .crm-card:hover {
          transform: scale(1.05);
           background: white;
        }

        .crm-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 10px;
        }

        .crm-text {
          font-size: 0.9rem;
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Header;