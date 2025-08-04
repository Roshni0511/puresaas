
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';

import RealCRM2 from '../../components/dark/home-main/RealCRM2';
import FAQS from '../../components/dark/FAQS/FAQS';
import Testimonials from '../../components/dark/home-main/Testimonials';
import RealTestimonials from '../../components/dark/home-main/RealTestimonials';
import Benifit from '../../components/dark/home-main/Benifit';
import Brands from '../../components/dark/modern-agency/Brands';
import Realstatecrm from '../../components/dark/home-main/Realstatecrm';
import Realestatecrm1 from '../../components/dark/home-main/Realestatecrm1';
import Realestatecrmfaq from '../../components/dark/FAQS/Realestatecrmfaq';
import Tsrealestatecrm from '../../components/dark/creative-portfolio/Tsrealestatecrm';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik"
import CRMNavbar from '../../components/dark/creative-agency/CRMNavbar';
import CRMdesign from '../../components/dark/home-main/CRMdesign';
import Bookingbutton from '../../components/dark/home-main/Bookingbutton';


export default function Realestatecrm() {
         const [open, setOpen] = useState(false);
      const [isMobile, setIsMobile] = useState(false);
          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);
    return (
        <>
            <Helmet>
                <title>Puresaas</title>
                <link rel="icon" href="/dark/imgs/favicon.ico" />
                <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="/dark/assets/css/plugins.css" />
                <link rel="stylesheet" type="text/css" href="/dark/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="/dark/assets/css/satoshi.css" />
                <link rel="stylesheet" type="text/css" href="/public/dark/assets/css/base.css" />
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
                <LoadingScreen />
                <Cursor />
                <ProgressScroll />
                <Lines />
                <div id="smooth-wrapper">
                    {/* Conditionally render Navbar based on scroll position */}
                   {/* <Navbar /> */}
                    {/* <Navbar /> */}
                    <CRMNavbar />
                    <div id="smooth-content"                    >
                        <main className="main-bg">
                        <CRMdesign />
                            <Realstatecrm />
                            <Benifit />
                            <Brands />
                            <Realestatecrm1 />
                            <Realestatecrmfaq />
                            {/* <Testimonials />  */}
                            <Tsrealestatecrm/>
                            {/* <RealTestimonials /> */}
                            <section className="services section-padding pb-0">
          <div className="container">
      <div style={{paddingTop:'80px'}}>
          <div>
                    <h3 className='fontmanage' style={{justifyContent:'center' , display:'flex',marginBottom:'50px'}}>How Puresaas works for Bulder/Broker CRM?</h3>
                </div>
                <div>
                  <p style={{fontSize:'20px', textAlign:'justify'}}>PureSaaS offers a comprehensive Bulder/Broker CRM (Customer Relationship Management) solution designed to streamline operations and enhance efficiency for Builder/Broker professionals. Transform your operations, enhance client relationships, and drive business growth with our intuitive and powerful CRM solution.Contact us now to schedule your demo and discover the power of PureSaaS Bulder/Broker CRM in action.
</p>
                </div>
               <Bookingbutton />
          </div>

          </div>
        </section>
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </>
    );
}
