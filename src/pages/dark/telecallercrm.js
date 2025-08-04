import React, { useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import { Dialog, DialogTitle, DialogContent, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Cards from '../../data/portfolios/Cards.json'
import Brands from '../../components/dark/modern-agency/Brands';
import Included from '../../data/portfolios/Included.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CRMNavbar from '../../components/dark/creative-agency/CRMNavbar';
import CRMdesign from '../../components/dark/home-main/CRMdesign';
import Bookingbutton from '../../components/dark/home-main/Bookingbutton';

const tables =[
    {
      title: "Accessibility",
      img: "/dark/assets/imgs/serv-icons/easy-access.png",
     desc: "1. Access To Critical Information Anytime, Anywhere, Providing Flexibility And Mobility.",
      desc2: "2. Real Estate Agents Can Manage Leads, Properties, And Communications On The Go.",
      link: "/dark/page-services-details",
    },
    {
      title: "Improved Productivity",
      img: "/dark/assets/imgs/serv-icons/productivity.png",
      desc: "1. Streamlined Workflows And Efficient Task Management.",
      desc2: "2. Instant Access To Property Information And Client Data Enhances Productivity. ",
      link: "/dark/page-services-details",
    },
    {
      "title": "Enhanced Communication",
      "img": "/dark/assets/imgs/serv-icons/message.png",
      "desc": "1. In-App Messaging Facilitates Quick And Direct Communication Between Team Members.",
      "desc2": "2. Push Notifications Keep Users Informed About Updates, Appointments, And Deadlines.",
      "link": "/dark/page-services-details"
    },
    {
      "title": "Client Engagement",
      "img": "/dark/assets/imgs/serv-icons/customer-management.png",
      "desc": "1. Clients Can Easily Browse And Search For Properties Using The Mobile App.",
      "desc2": "2. Push Notifications And Alerts Keep Clients Informed About New Listings Or Changes In Their Transactions.",
      "link": "/dark/page-services-details"
    }   
  ]
  const testi =[
    {
     "img": "/dark/assets/imgs/testim/user.jpg",
    "name": "Binal Parmar",
      "desc": "I’m thrilled with how TeleCaller CRM has simplified lead management for us. The system’s ability to segment and prioritize leads has allowed us to focus on the most promising opportunities."
    },
    {
      "img": "/dark/assets/imgs/testim/user.jpg",
      "name": "Mira Patel",
      "desc": "Since implementing TeleCaller CRM, our sales team's effectiveness has skyrocketed. The CRM's advanced lead management and call tracking capabilities allow us to focus on high-priority leads."
    },
    {
      "img": "/dark/assets/imgs/testim/user.jpg",
      "name": "Rina Gaykvad",
      "desc": "TeleCaller CRM has completely transformed the way we manage our telemarketing operations. The automated call scheduling and follow-up features have significantly improved our efficiency."
    },
    
  ]
const Telecallercrm = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const swiperOptions = {
        modules: [Navigation],
    
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        navigation: {
          nextEl: '.swiper-arrow-control .swiper-button-next',
          prevEl: '.swiper-arrow-control .swiper-button-prev',
        },
      };
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

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
                        <main className="main-bg" >
                        <CRMdesign />
                          <div className='container'>
                          <div className="sec-head mt-60 mb-50">
            <h6 style={{color:'#8c8c8c' , marginBottom:'10px', justifyContent:'center' , display:'flex', }}>Telecaller CRM</h6>
          <h6 className="sub-title mb-25 fontmanage" style={{justifyContent:'center' , display:'flex', fontSize:"35px"}}>WHY Telecaller CRM</h6>
        
        </div>
        <div className="row">
          {Cards.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4" style={{marginBottom:'20px'}}>
              <div className="item-box radius-15 md-mb30">
                <div className="icon mb-40 opacity-5" style={{width:"70px"}}>
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15" >{item.title}</h5>
              
            <p style={{listStyle:'disc', marginBottom:'10px'}}>{item.first}</p>
               
              </div>
            </div>
          ))}
        </div>


        <div style={{paddingTop:'80px'}}>
        <div style={{paddingBottom:'40px'}}>
           <h4 className='newfont' style={{justifyContent:'center', display:'flex', marginBottom:'15px'}}>SELECT BEST PLAN</h4>
           <h3 className='fontmanage' style={{justifyContent:'center', display:'flex', marginBottom:'15px'}}>Unbeatable prices, simple.</h3>
           <p style={{justifyContent:'center', display:'flex'}}>Your Path To Success Starts Here: Affordable Plans Tailored Just For You. Discover The Perfect Fit And Value With Our Range Of Pricing Options.</p>
        </div>
        <Box className="main-priceshead"
        
>
  {/* Card 1 */}
  <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
}}>
    <img src='/dark/assets/imgs/background/useres.png' style={{width:"55px"}}/>
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
  
       <a href="/dark/Checkout" style={{width:'100%'}}>
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

  {/* Card 2 */}
  <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
}}>
        <img src='/dark/assets/imgs/background/useres.png' style={{width:"55px"}}/>
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
      
        <a href="/dark/Checkout" style={{width:'100%'}}>
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
        <img src='/dark/assets/imgs/background/useres.png' style={{width:"55px"}}/>
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
     
       <a href="/dark/Checkout" style={{width:'100%'}}>
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


        <section className="services section-padding pb-20">
          <div className="container">
            <div className="sec-head mb-80">
              <h4 className='newfont'> Complimentary Android Application Valued At ₹2 Lakh Included With Your</h4>
                <h4 className="fw-600 text-u ls1 fontmanage" style={{display:'flex',justifyContent:'center',marginTop:'20px'}} >
                Subscription Plan
                </h4>
               
            </div>
            <div className="row">
              {tables.map((item, i) => (
                <div key={i} className="col-md-6">
                  <div className="item-box2 mb-30">
                    <div className="icon mb-40">
                      <img src={item.img} alt="" />
                    </div>
                    <h5 className="mb-15">{item.title}</h5>
                    <p>{item.desc}</p>
                    <p>{item.desc2}</p>
                    <a href={item.link} className="rmore">
                     
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Brands />
        <section className="services section-padding pb-0">
          <div className="container">
          <div className="sec-head mb-50">
            <h6 style={{color:'#8c8c8c' , marginBottom:'10px', justifyContent:'center' , display:'flex', }}>We Offer</h6>
          <h6 className="sub-title  mb-25 fontmanage" style={{justifyContent:'center' , display:'flex', fontSize:"35px"}}>FEATURES INCLUDED</h6>
        </div>
       
            <div className="row offercard">
              {Included.slice(0,6).map((item, i) => (
                <div key={i} className="col-md-6">
                  <div className="item-box2 mb-30" style={{display:'flex',background:'none',padding:'25px'}}>
                    <div className="icons " >
                      <img src={item.img} alt="" />
                    </div>
                    <div>
                    <h5 className="mb-15">{item.title}</h5>
                    <p style={{textAlign:'justify'}}>{item.p}</p>
                  
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{paddingTop:'60px'}}>
                <div>
                    <h4 style={{justifyContent:'center' , display:'flex',marginBottom:'20px'}}>Benefits of a Telecaller CRM software</h4>
                </div>
                <div>
                <div className='benifits1'
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   width: '100%',
      //   gap: '10px',
      //   paddingTop: '20px',
      //   flexWrap: 'wrap'

      // }}
    >
      <div className='realestatepersantage'
    
      >
        <h3 style={{ margin: 0 }}>90%</h3>
        <span style={{ fontSize: '20px' }}>Increased Accuracy</span>
      </div>

      <div className='realestatepersantage'
      
      >
        <h3 style={{ margin: 0 }}>50%</h3>
        <span style={{ fontSize: '20px' }}>Improved Efficiency</span>
      </div>

      <div className='realestatepersantage'
       
      >
        <h3 style={{ margin: 0 }}>40%</h3>
        <span style={{ fontSize: '20px' }}>Streamlined Workflows</span>
      </div>

      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          width: '300px', 
          textAlign: 'center',
        }}
      >
        <h3 style={{ margin: 0 }}>35%</h3>
        <span style={{ fontSize: '20px' }}>Financial Control</span>
      </div>
    </div>
  

</div>

            </div>



          </div>
        </section>

       

    <section className="faqs section-padding position-re">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="sec-head md-mb80" style={{ paddingBottom: "10px" }}>
              <h6 className="sub-title main-color mb-15">FAQS</h6>
              <h2>
                Frequently <br /> asked questions
              </h2>
            </div>
            <div className="list-serv">
              <div className="accordion bord">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title">
                    <h6>
                      {" "}
                    
                      How does TeleCaller CRM improve call management?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    TeleCaller CRM improves call management by offering features such as auto-dialing, call tracking, and call recording. These tools help streamline call processes, ensure accurate record-keeping, and provide a comprehensive overview of call activities.
                    </p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title">
                    <h6>
                    How does TeleCaller CRM handle lead management? </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    TeleCaller CRM offers advanced lead management features, including lead segmentation, scoring, and tracking. It helps prioritize and organize leads based on engagement levels and potential, improving the effectiveness of your telecalling efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list-serv">
              <div className="accordion bord">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title">
                    <h6>
                      {" "}
                     
                      Can TeleCaller CRM be accessed from mobile devices?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Yes, TeleCaller CRM is mobile-friendly and can be accessed from smartphones and tablets. This feature allows agents to manage calls, track leads, and update records while on-the-go, enhancing flexibility and productivity.
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="title">
                    <h6> 
                    How does TeleCaller CRM support agent performance monitoring?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-30">
                    TeleCaller CRM includes tools for tracking call metrics, productivity, and outcomes. This performance monitoring helps identify top performers, areas needing improvement, and training requirements, leading to enhanced overall team performance.
                    </p>
                  
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6>
                      {" "}
                      
                      What security features are included in TeleCaller CRM? 
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    TeleCaller CRM includes robust security features such as data encryption, access controls, and compliance with data protection regulations. These measures safeguard sensitive information and maintain customer trust.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title">
                    <h6> 
                    How does TeleCaller CRM improve team collaboration?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    TeleCaller CRM facilitates team collaboration through shared access and communication features. It provides a centralized platform for sharing updates, notes, and insights, improving coordination and teamwork among agents.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6>
                      {" "}
                     
                      How does TeleCaller CRM handle lead qualification?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    TeleCaller CRM’s lead qualification features include lead scoring, segmentation, and tracking. These tools help prioritize high-value leads and streamline the qualification process, improving overall lead conversion rates.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6> 
                    How does TeleCaller CRM facilitate multi-channel communication?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    TeleCaller CRM supports communication across multiple channels, including phone calls, emails, and SMS. This multi-channel capability allows for comprehensive engagement with leads and clients, improving outreach and response rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay up opacity-7">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-15">Testimonials</h6>
              <h3 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                  What People <span className="fw-200">Say?</span>
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-8 position-re">
            <div className="testim-swiper">
              <Swiper
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
                loop={true}
                {...swiperOptions}
              >
                {testi.slice(0, 3).map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256.721"
                            height="208.227"
                            viewBox="0 0 256.721 208.227"
                            className="qout-svg"
                          >
                            <path
                              data-name="Path"
                              d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                              transform="translate(121.55 640.568)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1"
                              opacity="0.322"
                            ></path>
                          </svg>
                          <p className="fz-30">{item.desc}</p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img src={item.img} alt="" />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>{item.name}</h5>
                            {/* <span className="sub-title main-color">
                              {item.subName}
                            </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-arrow-control control-abslout">
              <div className="swiper-button-prev">
                <span className="ti-arrow-left"></span>
              </div>
              <div className="swiper-button-next">
                <span className="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small-line">
        <div className="line-overlay">
          <svg
            viewBox="0 0 1728 1101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
              style={{ strokeDasharray: 3246.53 }}
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <section className="services section-padding pb-0">
          <div className="container">
      <div style={{paddingTop:'80px'}}>
          <div>
                    <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px'}} className='fontmanage'>How Puresaas How Puresaas works for Telecaller CRM?</h3>
                </div>
                <div>
                  <p style={{fontSize:'20px', textAlign:'justify'}}>With PureSaaS, TeleCaller CRM leverages advanced automation features to streamline your telecalling workflows. Automation handles repetitive tasks such as call scheduling, follow-ups, and data entry, reducing manual effort and minimizing errors.Contact us today to schedule a demo and explore how our intuitive and feature-rich CRM solution can streamline your sales processes.
</p>
                </div>
               <Bookingbutton />
          </div>

          </div>
        </section>
                          </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
    </>
  )
}

export default Telecallercrm