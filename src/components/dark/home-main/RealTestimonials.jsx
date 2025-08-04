import React, { useState } from "react";

import Bookingbutton from "./Bookingbutton";

const   RealTestimonials = () => {


  return (
    <>
      <section className="services section-padding pb-0">
        <div className="container">
          <div style={{ paddingTop: '80px' }}>
            <div>
              <h3 style={{ justifyContent: 'center', display: 'flex', marginBottom: '50px' }} className="fontmanage">
                How Puresaas works for Real Estate Agent CRM?
              </h3>
            </div>
            <div>
              <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                Our Real Estate Agent CRM is equipped with advanced client relationship management features that help you
                build and maintain strong client relationships. Track client interactions, manage inquiries, and maintain
                detailed records effortlessly. With PureSaaS, you can enhance client satisfaction and foster long-term
                relationships, leading to increased referrals and repeat business.Contact us now to schedule a demo and
                explore how our intuitive and powerful CRM solution can streamline your operations, enhance client
                relationships, and drive your business forward.
              </p>
            </div>
            
            <Bookingbutton />
          </div>
        </div>
      </section>
    </>
  );
};

export default RealTestimonials;
