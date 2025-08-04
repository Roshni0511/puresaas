// import React, { useLayoutEffect, useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { Helmet } from 'react-helmet';
// import Footer from '../../components/dark/home-main/Footer';
// import Lines from '../../components/dark/common/Lines';
// import ProgressScroll from '../../components/dark/common/ProgressScroll';
// import Cursor from '../../components/dark/common/cusor';
// import LoadingScreen from '../../components/dark/common/loader';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import Divider from '@mui/joy/Divider';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import Typography from '@mui/joy/Typography';
// import Check from '@mui/icons-material/Check';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import Newcard from '../../data/portfolios/Newcard.json'
// import Brands from '../../components/dark/modern-agency/Brands';
// import Officeerp from '../../components/dark/home-main/Officeerp';
// import Officefaq from '../../components/dark/home-main/Officefaq';
// import Officetesti from '../../components/dark/home-main/Officetesti';
// import CRMNavbar from '../../components/dark/creative-agency/CRMNavbar';
// import CRMdesign from '../../components/dark/home-main/CRMdesign';



// const tables = [
//   {
//     title: "Accessibility",
//     img: "/dark/assets/imgs/serv-icons/easy-access.png",
//     desc: "1. Access To Critical Information Anytime, Anywhere, Providing Flexibility And Mobility.",
//     desc2: "2. Real Estate Agents Can Manage Leads, Properties, And Communications On The Go.",
//     link: "/dark/page-services-details",
//   },
//   {
//     title: "Improved Productivity",
//     img: "/dark/assets/imgs/serv-icons/productivity.png",
//     desc: "1. Streamlined Workflows And Efficient Task Management.",
//     desc2: "2. Instant Access To Property Information And Client Data Enhances Productivity. ",
//     link: "/dark/page-services-details",
//   },
//   {
//     "title": "Enhanced Communication",
//     "img": "/dark/assets/imgs/serv-icons/message.png",
//     "desc": "1. In-App Messaging Facilitates Quick And Direct Communication Between Team Members.",
//     "desc2": "2. Push Notifications Keep Users Informed About Updates, Appointments, And Deadlines.",
//     "link": "/dark/page-services-details"
//   },
//   {
//     "title": "Client Engagement",
//     "img": "/dark/assets/imgs/serv-icons/customer-management.png",
//     "desc": "1. Clients Can Easily Browse And Search For Properties Using The Mobile App.",
//     "desc2": "2. Push Notifications And Alerts Keep Clients Informed About New Listings Or Changes In Their Transactions.",
//     "link": "/dark/page-services-details"
//   }
// ]


// const OfficeERP = () => {
//   const swiperOptions = {
//     modules: [Navigation],

//     spaceBetween: 30,
//     speed: 1000,
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-arrow-control .swiper-button-next',
//       prevEl: '.swiper-arrow-control .swiper-button-prev',
//     },
//   };
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen width on load and resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setIsMobile(true);
//       } else {
//         setIsMobile(false);
//       }
//     };

//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Initial check on component mount
//     handleResize();

//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) { // Change the value 100 based on when you want to hide the navbar
//         setIsNavbarVisible(false); // Hide the Navbar when the user scrolls past 100px
//       } else {
//         setIsNavbarVisible(true); // Show the Navbar when the user is at the top of the page
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useLayoutEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
//     tl.fromTo(
//       '.header .container',
//       { opacity: 0, translateY: 40 },
//       { opacity: 1, translateY: 0 },
//       '-=0'
//     );

//     // Cleanup function
//     return () => tl.kill();
//   }, []);


//   return (
//     <>
//       <Helmet>
//         <title>Puresaas</title>
//         <link rel="icon" href="/dark/imgs/favicon.ico" />
//         <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
//         <link rel="stylesheet" type="text/css" href="/dark/assets/css/plugins.css" />
//         <link rel="stylesheet" type="text/css" href="/dark/assets/css/style.css" />
//         <link rel="stylesheet" type="text/css" href="/dark/assets/css/satoshi.css" />
//         <link rel="stylesheet" type="text/css" href="/public/dark/assets/css/base.css" />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
//         />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
//         />
//         <script src="/dark/assets/js/scripts.js"></script>
//         <script src="/dark/assets/js/smoother-script.js"></script>
//       </Helmet>
//       <body>
//         <LoadingScreen />
//         <Cursor />
//         <ProgressScroll />
//         <Lines />
//         <div id="smooth-wrapper">
//           {/* Conditionally render Navbar based on scroll position */}
//           {/* {isNavbarVisible && <Navbar />} */}
//           {/* <Navbar /> */}
//           <CRMNavbar />
//           <div id="smooth-content"

//           >
//             <main className="main-bg" >
//               <CRMdesign />
//               <div className='container'>
//                 <div className="sec-head mt-50 mb-50">
//                   <h6 style={{ color: '#8c8c8c', marginBottom: '10px', justifyContent: 'center', display: 'flex', }}>Office ERP CRM</h6>
//                   <h6 className="sub-title mb-25 fontmanage" style={{ justifyContent: 'center', display: 'flex', fontSize: "35px" }}>WHY Office ERP CRM</h6>

//                 </div>
//                 <div className="row">
//                   {Newcard.slice(0, 3).map((item, i) => (
//                     <div key={i} className="col-lg-4" style={{ marginBottom: '20px' }}>
//                       <div className="item-box radius-15 md-mb30">
//                         <div className="icon mb-40 opacity-5" style={{ width: "70px" }}>
//                           <img src={item.img} alt="" />
//                         </div>
//                         <h5 className="mb-15" >{item.title}</h5>

//                         <p style={{ listStyle: 'disc', marginBottom: '10px' }}>{item.first}</p>

//                       </div>
//                     </div>
//                   ))}
//                 </div>


//                 <div style={{ paddingTop: '80px' }}>
//                   <div style={{ paddingBottom: '40px' }}>
//                     <h4 className='newfont' style={{ justifyContent: 'center', display: 'flex', marginBottom: '15px' }}>SELECT BEST PLAN</h4>
//                     <h3
//                       className='fontmanage' style={{ justifyContent: 'center', display: 'flex', marginBottom: '15px' }}>Unbeatable prices, simple.</h3>
//                     <p style={{ justifyContent: 'center', display: 'flex' }}>Your Path To Success Starts Here: Affordable Plans Tailored Just For You. Discover The Perfect Fit And Value With Our Range Of Pricing Options.</p>
//                   </div>
//                   <Box className="main-priceshead"

//                   >
//                     {/* Card 1 */}
//                     <Card size="lg" variant="outlined" style={{
//                       backgroundColor: '#1a1a1a', border: '1px solid rgba(255, 255, 255, 0.12)'
//                     }}>
//                       <img src='/dark/assets/imgs/background/useres.png' style={{ width: "55px" }} />
//                       <h6 style={{ margin: '0px', fontWeight: '500', color: '#fff' }}>individual</h6>
//                       <Typography level="h2" style={{ Margin: '0px', color: '#fff' }}>₹ 2999</Typography>
//                       <span style={{ color: '#fff', fontWeight: '700' }}>Per month</span>

//                       <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Today Work
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Vexillologist pitchfork
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Basic report
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Leads
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Property Management
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Notification
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Partial Property
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Theme Setting
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Whatsapp Integration
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Marketing (Add on)
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Screenshot & Screen Recording
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Master setting
//                         </ListItem>
//                       </List>
//                       <Divider inset="none" />
//                       <CardActions>

//                         <a href="/dark/Checkout" style={{ width: '100%' }}>
//                           <Button
//                             variant="soft"
//                             style={{ backgroundColor: '#fff', color: '#000', marginBottom: '10px', width: '100%' }}
//                             endDecorator={<KeyboardArrowRight />}
//                           >
//                             Buy now
//                           </Button>
//                         </a>

//                       </CardActions>
//                       <span style={{ color: '#fff', fontWeight: '500', paddingBottom: '20px' }}>Contact To sales Person</span>
//                     </Card>

//                     {/* Card 2 */}
//                     <Card size="lg" variant="outlined" style={{
//                       backgroundColor: '#1a1a1a', border: '1px solid rgba(255, 255, 255, 0.12)'
//                     }}>
//                       <img src='/dark/assets/imgs/background/useres.png' style={{ width: "55px" }} />
//                       <h6 style={{ margin: '0px', fontWeight: '500', color: '#fff' }}>Enterprise</h6>
//                       <Typography level="h2" style={{ Margin: '0px', color: '#fff' }}>₹ 4999</Typography>
//                       <span style={{ color: '#fff', fontWeight: '700' }}>Per month</span>
//                       <div>

//                         <button style={{ padding: '5px 10px', borderRadius: '25px' }}>Business + Enterprise</button>
//                       </div>
//                       <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Multi Business
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Multi report
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Internal Chat
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Property Map
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Account
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Third Party Integration/leads
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Marketing
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Workflow
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Call Recording
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Whatsapp Integration
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Mobile Application
//                         </ListItem>

//                       </List>
//                       <Divider inset="none" />
//                       <CardActions>

//                         <a href="/dark/Checkout" style={{ width: '100%' }}>
//                           <Button
//                             variant="soft"
//                             style={{ backgroundColor: '#fff', color: '#000', marginBottom: '10px', width: '100%' }}
//                             endDecorator={<KeyboardArrowRight />}
//                           >
//                             Buy now
//                           </Button>
//                         </a>

//                       </CardActions>
//                       <span style={{ color: '#fff', fontWeight: '500', paddingBottom: '20px' }}>Contact To sales Person</span>
//                     </Card>

//                     {/* Card 3 */}
//                     <Card size="lg" variant="outlined" style={{
//                       backgroundColor: '#1a1a1a', border: '1px solid rgba(255, 255, 255, 0.12)'
//                     }}>
//                       <img src='/dark/assets/imgs/background/useres.png' style={{ width: "55px" }} />
//                       <h6 style={{ margin: '0px', fontWeight: '500', color: '#fff' }}>Business</h6>
//                       <Typography level="h2" style={{ Margin: '0px', color: '#fff' }}>₹ 3999</Typography>
//                       <span style={{ color: '#fff', fontWeight: '700' }}>Per month</span>
//                       <div>

//                         <button style={{ padding: '5px 10px', borderRadius: '25px' }}>Business + Enterprise</button>
//                       </div>
//                       <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Branch Setting
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Selected Report
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Full Property
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Inventory
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Call logs
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           My Task
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Lead Reminder
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Property work
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Whatsapp Integration
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Property live status
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Property Web
//                         </ListItem>
//                         <ListItem sx={{ color: '#fff' }}>
//                           <ListItemDecorator>
//                             <Check />
//                           </ListItemDecorator>
//                           Mobile Application
//                         </ListItem>
//                       </List>
//                       <Divider inset="none" />
//                       <CardActions>

//                         <a href="/dark/Checkout" style={{ width: '100%' }}>
//                           <Button
//                             variant="soft"
//                             style={{ backgroundColor: '#fff', color: '#000', marginBottom: '10px', width: '100%' }}
//                             endDecorator={<KeyboardArrowRight />}
//                           >
//                             Buy now
//                           </Button>
//                         </a>

//                       </CardActions>
//                       <span style={{ color: '#fff', fontWeight: '500', paddingBottom: '20px' }}>Contact To sales Person</span>
//                     </Card>
//                   </Box>

//                 </div>


//                 <section className="services section-padding pb-20">
//                   <div className="container">
//                     <div className="sec-head mb-80">
//                       <h4 className='newfont'>Complimentary Android Application Valued At ₹2 Lakh Included With Your</h4>
//                       <h4 className="fw-600 text-u ls1 fontmanage" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} >
//                         Subscription Plan
//                       </h4>

//                     </div>
//                     <div className="row">
//                       {tables.map((item, i) => (
//                         <div key={i} className="col-md-6">
//                           <div className="item-box2 mb-30">
//                             <div className="icon mb-40">
//                               <img src={item.img} alt="" />
//                             </div>
//                             <h5 className="mb-15">{item.title}</h5>
//                             <p>{item.desc}</p>
//                             <p>{item.desc2}</p>
//                             <a href={item.link} className="rmore">

//                             </a>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </section>

//                 <Brands />
//                 <Officeerp />
//                 <Officefaq />
//                 <Officetesti />

//               </div>
//             </main>
//             <Footer />
//           </div>
//         </div>
//       </body>
//     </>
//   )
// }

// export default OfficeERP