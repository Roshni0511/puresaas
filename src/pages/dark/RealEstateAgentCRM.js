import React, { useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import CRMNavbar from '../../components/dark/creative-agency/CRMNavbar';
import RealCRM1 from '../../components/dark/home-main/RealCRM1';
import RealCRM2 from '../../components/dark/home-main/RealCRM2';
import FAQS from '../../components/dark/FAQS/FAQS';
import RealTestimonials from '../../components/dark/home-main/RealTestimonials';
import Benifit from '../../components/dark/home-main/Benifit';
import Brands from '../../components/dark/modern-agency/Brands';
import Tsrealestatecrm from '../../components/dark/creative-portfolio/Tsrealestatecrm';
import CRMdesign from '../../components/dark/home-main/CRMdesign';

export default function RealEstateAgentCRM() {
   
   

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
                   
                    <CRMNavbar />   
                    <div id="smooth-content"  >
                        <main className="main-bg">
                            <CRMdesign />
                            <RealCRM1 />
                            <Benifit />
                            <Brands />
                            <RealCRM2 />
                            <FAQS />
                            <Tsrealestatecrm />
                            <RealTestimonials />
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </>
    );
}