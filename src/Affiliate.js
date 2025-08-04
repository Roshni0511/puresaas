"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";
import LoadingScreen from "./components/dark/common/loader";
import Cursor from "./components/dark/common/cusor";
import ProgressScroll from "./components/dark/common/ProgressScroll";
import Lines from "./components/dark/common/Lines";
import Navbar from "./components/dark/creative-agency/Navbar";
import AffiliateProgram from "./components/dark/home-main/AffiliateProgram";
import AffiliateWork from "./components/dark/home-main/AffiliateWork";
import Pricing from "./components/dark/home-main/Pricing";
import Benifit from "./components/dark/home-main/Benifit";
import Brands from "./components/dark/modern-agency/Brands";
import PackagesInclude from "./components/dark/home-main/PackagesInclude";
import Footer from "./components/dark/home-main/Footer";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function Affiliates() {
 
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
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <div
                className="header page-header bg-img section-padding"
                data-background="/dark/assets/imgs/header/bg1.jpg"
                data-overlay-dark="9"
              >
                <div className="container pt-100 ontop">
                  <div className="text-center">
                    <h1 style={{ fontSize: "50px" }}>Affiliate Program</h1>
                    <div className="mt-15">
                      <a href="/">Home</a>
                      <span className="padding-rl-20">|</span>
                      <span className="main-color">Affiliate Program</span>
                    </div>
                  </div>
                </div>
              </div>
              <AffiliateProgram />
              <AffiliateWork />
              {/* <Affiliatetesti /> */}
              {/* <Pricing/> */}
          <div className="container">

              <div >
       <div >
          </div>
          <h4 style={{justifyContent:'center', display:'flex', marginBottom:'15px'}} className='newfont'>SELECT BEST PLAN</h4>
          <h3 style={{justifyContent:'center', display:'flex', marginBottom:'15px'}} className='fontmanage'>Unbeatable prices, simple.</h3>
          <p style={{justifyContent:'center', display:'flex',paddingBottom:'10px'}}>Your Path To Success Starts Here: Affordable Plans Tailored Just For You. Discover The Perfect Fit And Value With Our Range Of Pricing Options.</p>
       </div>
       <Box className="main-priceshead"
       
>
 {/* Card 1 */}
 <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
}}>
  <h6 style={{margin:'0px',fontWeight:'500', color:'#fff'}}>individual</h6>
   <Typography level="h2" style={{Margin:'0px',color:'#fff'}}>₹ 2999</Typography>
   <span style={{color:'#fff' , fontWeight:'700'}}>Per month</span>
   
   <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Today Work
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Vexillologist pitchfork
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Basic report
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Leads
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Property Management
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Notification
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Partial Property
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Theme Setting
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Whatsapp Integration
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Marketing (Add on)
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Screenshot & Screen Recording
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Master setting
     </ListItem>
   </List>
   <Divider inset="none" />
   <CardActions>
     {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
       3.990€{' '}
       <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
         / month
       </Typography>
     </Typography> */}
      <a href="https://shubhamsingh.in/Application_Tracking_System/" target='_blank' style={{width:'100%'}}>
     <Button
       variant="soft"
     style={{backgroundColor:'#fff',color:'#000',marginBottom:'10px',width:'100%'}}
       endDecorator={<KeyboardArrowRight />}
     >
       Buy now
     </Button>
     </a>
    
   </CardActions>
   <span style={{color:'#fff' , fontWeight:'500',paddingBottom:'20px'}}> <a href="/contactus">Contact To sales Person
    </a></span>
 </Card>

 {/* Card 2 */}
 <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
}}>
  <h6 style={{margin:'0px',fontWeight:'500', color:'#fff'}}>Enterprise</h6>
   <Typography level="h2" style={{Margin:'0px',color:'#fff'}}>₹ 4999</Typography>
   <span style={{color:'#fff' , fontWeight:'700'}}>Per month</span>
 <div>

 <button style={{padding:'5px 10px', borderRadius:'25px'}}>Business + Enterprise</button>
 </div>
   <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Multi Business
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Multi report
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Internal Chat
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Property Map
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Account
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Third Party Integration/leads
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Marketing
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Workflow
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Call Recording
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Whatsapp Integration
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Mobile Application
     </ListItem>
    
   </List>
   <Divider inset="none" />
   <CardActions>
     {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
       3.990€{' '}
       <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
         / month
       </Typography>
     </Typography> */}
       <a href="https://shubhamsingh.in/Application_Tracking_System/" target='_blank' style={{width:'100%'}}>
     <Button
       variant="soft"
     style={{backgroundColor:'#fff',color:'#000',marginBottom:'10px',width:'100%'}}
       endDecorator={<KeyboardArrowRight />}
     >
       Buy now
     </Button>
     </a>
    
   </CardActions>
   <span style={{color:'#fff' , fontWeight:'500',paddingBottom:'20px'}}>Contact To sales Person</span>
 </Card>

 {/* Card 3 */}
 <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
}}>
  <h6 style={{margin:'0px',fontWeight:'500', color:'#fff'}}>Business</h6>
   <Typography level="h2" style={{Margin:'0px',color:'#fff'}}>₹ 3999</Typography>
   <span style={{color:'#fff' , fontWeight:'700'}}>Per month</span>
 <div>

 <button style={{padding:'5px 10px', borderRadius:'25px'}}>Business + Enterprise</button>
 </div>
   <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Branch Setting
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Selected Report
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Full Property
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Inventory
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Call logs
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       My Task
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Lead Reminder
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Property work
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Whatsapp Integration
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Property live status
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Property Web
     </ListItem>
     <ListItem sx={{color:'#fff'}}>
       <ListItemDecorator>
         <Check />
       </ListItemDecorator>
       Mobile Application
     </ListItem>
   </List>
   <Divider inset="none" />
   <CardActions>
     {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
       3.990€{' '}
       <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
         / month
       </Typography>
     </Typography> */}
      <a href="https://shubhamsingh.in/Application_Tracking_System/" target='_blank' style={{width:'100%'}}>
     <Button
       variant="soft"
     style={{backgroundColor:'#fff',color:'#000',marginBottom:'10px',width:'100%'}}
       endDecorator={<KeyboardArrowRight />}
     >
       Buy now
     </Button>
     </a>
    
   </CardActions>
   <span style={{color:'#fff' , fontWeight:'500',paddingBottom:'20px'}}>Contact To sales Person</span>
 </Card>
</Box>

       </div>
              <Benifit />
              <Brands />
              <PackagesInclude />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
