import React, { useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Benifit from '../../components/dark/home-main/Benifit';
import Brands from '../../components/dark/modern-agency/Brands';
import B2b1 from '../../components/dark/home-main/B2b1';
import B2boffer from '../../components/dark/home-main/B2boffer';
import B2Bfaq from '../../components/dark/FAQS/B2Bfaq';
import B2bTestimonials from '../../components/dark/home-main/B2bTestimonials';
import CRMNavbar from '../../components/dark/creative-agency/CRMNavbar';
import CRMdesign from '../../components/dark/home-main/CRMdesign';
import Bookingbutton from '../../components/dark/home-main/Bookingbutton';
// import CRMNavbar from "./components/dark/creative-agency/CRMNavbar";

export default function B2b() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 

  // Check screen width on load and resize
  // useEffect(() => {
  //     const handleResize = () => {
  //         if (window.innerWidth <= 768) {
  //             setIsMobile(true);
  //         } else {
  //             setIsMobile(false);
  //         }
  //     };

  //     // Add event listener for window resize
  //     window.addEventListener('resize', handleResize);

  //     // Initial check on component mount
  //     handleResize();

  //     // Cleanup the event listener on component unmount
  //     return () => window.removeEventListener('resize', handleResize);
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change the value 100 based on when you want to hide the navbar
        setIsNavbarVisible(false); // Hide the Navbar when the user scrolls past 100px
      } else {
        setIsNavbarVisible(true); // Show the Navbar when the user is at the top of the page
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          {/* {isNavbarVisible && <Navbar />} */}
          {/* <Navbar /> */}
          <CRMNavbar />
          <div id="smooth-content"

          >
            <main className="main-bg">
              <CRMdesign />
              <B2b1 />
              <Benifit />
              <Brands />
              <B2boffer />
              <B2Bfaq />
              <B2bTestimonials />
              <section className="services section-padding pb-0">
                <div className="container">
                  <div style={{ paddingTop: '80px' }}>
                    <div>
                      <h3 style={{ justifyContent: 'center', display: 'flex', marginBottom: '50px' }}>How Puresaas works for B2B Textile ERP?</h3>
                    </div>
                    <div>
                      <p style={{ fontSize: '20px', textAlign: 'justify' }}>Puresaas simplifies B2B Textile ERP by providing an integrated platform for managing orders, inventory, production, and vendor relationships. It automates key processes, ensuring real-time tracking of stock levels, raw materials, and finished goods. With advanced analytics, businesses can make data-driven decisions, optimize resource allocation, and improve operational efficiency. Additionally, Puresaas offers seamless multi-channel sales management and vendor collaboration, streamlining the entire supply chain. Its cloud-based infrastructure ensures scalability, security, and remote accessibility, making it an ideal solution for textile manufacturers and distributors.
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
