import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import CRMNavbar from './components/dark/creative-agency/CRMNavbar';
import CRMdesign from './components/dark/home-main/CRMdesign';
import Tsspayroll15 from './components/dark/creative-portfolio/Tsspayroll15';
import Bookingbutton from './components/dark/home-main/Bookingbutton';
import Footer from './components/dark/home-main/Footer';
import Payroll14 from '../src/data/portfolios/Payroll.json'
import offer from '../src/data/Benifit.json'
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
import india from '../src/Image/make-in-india.png';
import degital from '../src/Image/digital-india-power-to-empower.png'
import numberone from '../src/Image/number-one-crm.png'
import data from '../src/Image/data-security.png'
import artificial from '../src/Image/artificial-intelligence.png'
import iso from '../src/Image/iso-27001-certified.png'
import offeres12 from '../src/data/portfolios/Payroll2.json'
import { Navigation } from 'swiper/modules';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Brands from './components/dark/modern-agency/Brands';
import datas from '../src/data/portfolios/Tspayroll16.json';
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
import "react-phone-input-2/lib/style.css"; // Import styles
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline, MdPhone } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import { Modal, ModalDialog, IconButton } from '@mui/joy';
import { Close } from '@mui/icons-material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const extractFeatures = (featureString) => {
  return featureString.split(',');
};

function PlanPopup({ open, onClose, plan }) {
  const discount = plan.originalPrice - plan.price;
  const [openSection, setOpenSection] = useState('plan'); // default open

  const toggleSection = (section) => {
    setOpenSection(section);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        sx={{
          width: '700px',
          maxWidth: '90%',
          background: `linear-gradient(rgba(29, 29, 29, 0.77), rgba(29, 29, 29, 0.84)), url("/dark/assets/imgs/header/bg1.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          boxShadow: 24,
          p: 3,
          overflowY: 'auto',
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': {
            display: 'none' // Chrome, Safari, Edge
          }
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: '#fff' }}
        >
          <Close />
        </IconButton>

        {/* Title */}
        <Typography level="h4" sx={{ fontWeight: '600', mb: 2, color: '#fff' }}>
          Great choice! Review your cart
        </Typography>

        <Divider sx={{ mb: 2, background: '#fff' }} />

        {/* Two Column Layout */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {/* Left - Plan Details */}
          <Box sx={{ flex: 1, minWidth: '250px', border: '1px solid #ccc', borderRadius: 2, p: 2 }}>

            {/* 14 Days Plan Header */}
            <Box
              sx={{
                backgroundColor: '#979797',
                borderRadius: "5px",
                p: 1,
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => toggleSection('plan')}
            >
              <span>14 Days Plan</span>
              <span>
                ₹1350/-{' '}
                <FontAwesomeIcon
                  icon={openSection === 'plan' ? faAngleDown : faAngleRight}
                  style={{ marginLeft: 8 }}
                />
              </span>

            </Box>

            {/* 14 Days Plan Content */}
            {openSection === 'plan' && (
              <ul style={{ paddingLeft: 18, margin: '10px 0', color: '#fff', fontFamily: "math" }}>
                <li style={{ marginBottom: 5 }}><Check /> Unlimited Candidate Responses</li>
                <li style={{ marginBottom: 5 }}><Check /> 50 candidate unlocks</li>
                <li style={{ marginBottom: 5 }}><Check /> 1 Job live at a time</li>
                <li style={{ marginBottom: 5 }}><Check /> Valid for 14 days</li>
                <li style={{ marginBottom: 5 }}><Check /> 3 Job boosts</li>
              </ul>
            )}

            {/* Job Boost Header */}
            <Box
              sx={{
                backgroundColor: '#979797',
                borderRadius: "5px",
                p: 1,
                fontWeight: 700,
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => toggleSection('boost')}
            >
              <span>For urgent hiring, add more Job Boosts!</span>
              <span>

                <FontAwesomeIcon
                  icon={openSection === 'boost' ? faAngleDown : faAngleRight}
                  style={{ marginLeft: 8 }}
                />
              </span>
            </Box>

            {/* Job Boost Content */}
            {openSection === 'boost' && (
              <ul style={{ paddingLeft: 18, margin: '10px 0', color: '#fff', fontFamily: "math" }}>
                <li style={{ marginBottom: 5 }}>  <Check /> Increased reach of job post</li>
                <li style={{ marginBottom: 5 }}>  <Check /> Notify all relevant candidates in real-time</li>
                <li style={{ marginBottom: 5 }}>  <Check /> Get 2x more calls!</li>
              </ul>
            )}
          </Box>
          {/* Right - Order Summary */}
          <Box sx={{ flex: 1, minWidth: '250px', border: '1px solid #ccc', borderRadius: 2, p: 2, color: '#fff' }}>
            <Typography level="title-md" sx={{ fontWeight: 'bold', mb: 1, color: '#fff' }}>
              Order Summary:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Plan Amount:</span><span>₹10,000</span>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Discount:</span><span>- ₹300</span>
            </Box>
            <Divider sx={{ my: 1, background: '#fff', mt: 4 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
              <span>Grand Total:</span><span>₹9,700</span>
            </Box>
          </Box>
        </Box>

        {/* Payment Icons */}
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontWeight: 600, mb: 1, color: '#fff' }}>
            Supported payments:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              gap: 2,
            }}
          >
            {[
              'Mastercard-logo.png',
              'visa.png',
              'Rupay-Logo.png',
              'Google_Pay_Logo.png',
              'PhonePe-Logo.png',
              'upi_transactions.png'
            ].map((img, idx) => (
              <img
                key={idx}
                src={`/dark/assets/imgs/background/${img}`}
                alt={`Payment method ${idx + 1}`}
                style={{
                  width: '70px',
                  height: 'auto',
                  margin: '8px'
                }}
              />
            ))}
          </Box>
        </Box>
        <Divider sx={{ mb: 2, background: '#fff' }} />
        {/* Checkout Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            variant="solid"
            color="success"
            sx={{ px: 4 }}
            onClick={() => alert('Proceeding to checkout...')}
          >
            Checkout
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
}

export default function PayrollSystems() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const swiperOptions = {

    speed: 600,
    loop: true,

    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
  };
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





  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const canvasRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent invalid characters in name
    }
    if (name === "companyname" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent invalid characters in name
    }

    // if (name === "number" && !/^[0-9]{0,10}$/.test(value)) {
    //   return; // Allow only digits up to 10
    // }

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = async (event) => {
    // Add 'async' here
    event.preventDefault();

    if (captchaInput !== captchaCode) {
      Swal.fire({
        icon: "error",
        title: "Invalid CAPTCHA",
        text: "Please try again.",
        confirmButtonColor: "#808080",
      });

      setCaptchaInput("");
      return;
    }

    const apiUrl =
      "https://shubhamsingh.in/Application_Tracking_System/payroll_demo";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Typically POST should be used for form submissions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          number: formData.number,
          // Include other necessary fields
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User created successfully:", result);

        // Display SweetAlert success message
        Swal.fire({
          title: "Success!",
          text: "Thank you for contacting us! Our Team will contact you as soon as possible.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#808080",
        }).then((result) => {
          // Check if the user clicked 'OK'
          if (result.isConfirmed) {
            // Refresh the page after the user clicks 'OK'
            window.location.reload();
          }
        });
      } else {
        console.error("Error:", result);
        alert(`Error: ${result.error}`);
        // Handle API errors here (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("password:", formData.password);
    console.log("Phone Number:", formData.number);

    setFormData({
      name: "",
      email: "",
      password: "",
      number: "",
    });

    setCaptchaInput("");
    // Show SweetAlert after successful submission
    Swal.fire({
      icon: "success",
      title: "Demo Booked!",
      text: "Thank you for Inquiry !",
      confirmButtonColor: "#808080",
    });
  };

  const [plans, setPlans] = useState([]);
  const [view, setView] = useState('monthly'); // Toggle between monthly and yearly
  const location = useLocation();

  const pathToTitle = {
    "/RealEstateAgentCRM": "Real Estate Agent CRM",
    "/Realestatecrm": "Real Estate CRM",
    "/salescrm": "Sales CRM",
    "/Servicecrm": "Service CRM",
    "/b2bcrm": "B2B Textile ERP",
    "/telecallercrm": "Telecaller CRM",
    "/ATS": "ATS (Application Tracking System)",
    "/PayrollSystem": "Payroll System",
    "/Officeerp": "Office ERP",
  };
  const pageTitle = pathToTitle[location.pathname] || "Pricing Plan";
  useEffect(() => {
    // Fetch the data based on the selected view (monthly or yearly)
    const fetchPlans = async () => {
      try {
        const apiUrl = view === 'monthly'
          ? 'https://shubhamsingh.in/new_crm/monthly_plan_view/'
          : 'https://shubhamsingh.in/new_crm/plan_view/';

        const response = await fetch(apiUrl);
        const data = await response.json();
        setPlans(data.data || []); // Assuming data is returned in { data: [...] }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlans();
  }, [view]);

  const extractFeatures = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return Array.from(doc.querySelectorAll("p")).map((p) => p.textContent);
  };

  // if (!plans.length) return <p>Loading...</p>;

  // Filter plans based on pageTitle (remove checkbox filtering logic)
  const filteredPlans = plans.filter(plan => plan.plan === pageTitle);
  const [selectedPlan, setSelectedPlan] = useState(null);
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
        <Whatsapp />
        <Lines />
        <div id="smooth-wrapper">

          <CRMNavbar />

          <div
            className="header main-header bg-img"
            data-background="/dark/assets/imgs/header/bg1.jpg"
            data-overlay-dark="8"
          >
            <section className="contact " style={{ padding: '70px 0px' }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <h2>Book a Demo</h2>
                    <p>
                      Thank you for your interest in Puresaas CRM. We're here to help.
                      Just fill in the form below, and we'll have our best product
                      expert reach out to you.
                    </p>
                  </div>
                  <div className="col-lg-7 offset-lg-1 valign">
                    <div
                      className="full-width"
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "10px",
                      }}
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="messages"></div>
                        <div className="controls row">
                          <div className="col-lg-12" style={{ position: "relative" }}>
                            <div className="form-group mb-30">
                              <label htmlFor="form_name" style={{ marginBottom: "15px" }}>Full Name:</label>
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "28px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                document.getElementById("form_name").focus()
                              }
                            >
                              <MdOutlineDriveFileRenameOutline size={20} color="#555" />
                            </div>
                          </div>
                          <div className="col-lg-12" style={{ position: "relative" }}>
                            <div className="form-group mb-30">
                              <label htmlFor="email" style={{ marginBottom: "15px" }}>Email:</label>
                              <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "28px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => document.getElementById("email").focus()}
                            >
                              <MdOutlineMail size={20} color="#555" />
                            </div>
                          </div>


                          <div className="col-lg-12" style={{ position: "relative" }}>
                            <div className="form-group mb-30">
                              <label style={{ marginBottom: "15px" }}>Phone Number:</label>
                              <input
                                id='phone'
                                type="text"
                                name="number"
                                value={formData.number}
                                onChange={(e) => {
                                  const newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric input
                                  if (newValue.length <= 10) { // Restrict to max 10 digits
                                    setFormData({ ...formData, number: newValue });
                                  }
                                }}
                                required


                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "28px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => document.getElementById("phone").focus()}
                            >
                              <MdPhone size={20} color="#555" />
                            </div>
                          </div>


                          <div
                            className="mt-15"
                            style={{ justifyContent: "center", display: "flex" }}
                          >
                            <button
                              type="submit"
                              className="butn butn-full butn-bord radius-30"
                              style={{ padding: " 7px 25px" }}
                            >
                              <span className="text">BOOK DEMO</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

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


          {/* Toggle Button */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                border: "1px solid #fff",
                borderRadius: "32px",
                background: "#fff",
                padding: "5px",
                width: "188px",
                justifyContent: "space-between",
                overflow: "hidden",
                top: "-28px"
              }}
            >
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
                onClick={() => setView("monthly")}
                style={{
                  borderRadius: "25px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  color: view === "monthly" ? "#fff" : "#000",
                  width: "50%",
                  zIndex: 1,
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Monthly
              </button>

              <button
                onClick={() => setView("yearly")}
                style={{
                  borderRadius: "25px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  color: view === "yearly" ? "#fff" : "#000",
                  width: "50%",
                  zIndex: 1,
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Yearly
              </button>
            </div>

            <input
              type="text"
              value={pageTitle}
              readOnly
              style={{ display: "none", textAlign: "center", marginBottom: "10px" }}
            />
          </div>


          <div id="smooth-content"                    >
            <main className="main-bg">
              <input type="text" value={pageTitle} style={{ textAlign: "center", marginBottom: "10px", display: "none", }} />
              {/* <Payroll/> */}
              <section className="services " style={{ paddingBottom: '100px' }}>

                <div className="container">
                  <div style={{ paddingTop: '0px', paddingBottom: '100px' }}>
                    <div style={{ paddingBottom: '40px' }}>
                      <h4 style={{ justifyContent: 'center', display: 'flex', marginBottom: '15px' }} className='newfont'>SELECT BEST PLAN</h4>
                      <h3 style={{ justifyContent: 'center', display: 'flex', marginBottom: '15px' }} className='fontmanage'>Unbeatable prices, simple.</h3>
                      <p style={{ justifyContent: 'center', display: 'flex' }}>Your Path To Success Starts Here: Affordable Plans Tailored Just For You. Discover The Perfect Fit And Value With Our Range Of Pricing Options.</p>
                    </div>
                    {/* Pricing Cards */}
                    <Box className="main-priceshead">
                      {filteredPlans.length > 0 ? filteredPlans.map(plan => (
                        <Card size="lg" variant="outlined" key={plan.id} style={{
                          backgroundColor: '#1a1a1a',
                          border: '1px solid rgba(255, 255, 255, 0.12)'
                        }}>
                          <h6 style={{ margin: '0px', fontWeight: '500', color: '#fff' }}>{plan.title}</h6>
                          <Typography level="h2" style={{ margin: '0px', color: '#fff' }}>
                            ₹ {plan.price}
                          </Typography>
                          <span style={{ color: '#fff', fontWeight: '700' }}>{plan.duration}</span>
                          <div>
                            <button style={{ padding: "5px 10px", borderRadius: "25px" }}>{plan.type}</button>
                          </div>
                          <List size="sm">
                            {extractFeatures(plan.feature).map((feature, idx) => (
                              <ListItem key={idx} sx={{ color: "#fff" }}>
                                <ListItemDecorator>
                                  <Check />
                                </ListItemDecorator>
                                {feature}
                              </ListItem>
                            ))}
                          </List>

                          <Divider inset="none" />
                          <CardActions>
                            {/* <a href="https://shubhamsingh.in/Application_Tracking_System/" target='_blank' style={{ width: '100%' }}>
                      <Button
                        variant="soft"
                        style={{ backgroundColor: '#fff', color: '#000', marginBottom: '10px', width: '100%' }}
                        endDecorator={<KeyboardArrowRight />}
                      >
                        Buy now
                      </Button>
                    </a> */}
                            <Button
                              variant="soft"
                              style={{ backgroundColor: '#fff', color: '#000', marginBottom: '10px', width: '100%' }}
                              endDecorator={<KeyboardArrowRight />}
                              onClick={() => setSelectedPlan(plan)}
                            >
                              Buy now
                            </Button>
                          </CardActions>
                          <span style={{ color: '#fff', fontWeight: '500', paddingBottom: '20px' }}>
                            <a href="/contactus">Contact To Sales Department</a>
                          </span>
                        </Card>
                      )) : (
                        <div style={{ textAlign: 'center', color: '#fff', marginTop: '20px' }}>
                          <h4>No plans available</h4>
                        </div>
                      )}
                    </Box>
                    {/* Popup Modal */}
                    {selectedPlan && (
                      <PlanPopup
                        open={Boolean(selectedPlan)}
                        onClose={() => setSelectedPlan(null)}
                        plan={selectedPlan}
                      />
                    )}

                  </div>
                </div>

 <div className='testimonials '>
                <div className="container">
                  <div className="sec-head mb-50">
                    <h6 style={{ color: '#8c8c8c', marginBottom: '10px', justifyContent: 'center', display: 'flex', }}> Payroll System</h6>
                    <h6 className="sub-title mb-25 fontmanage" style={{ justifyContent: 'center', display: 'flex', fontSize: "35px" }}>WHY Payroll System</h6>

                  </div>
                  <div className="row">
                    {Payroll14.slice(0, 3).map((item, i) => (
                      <div key={i} className="col-lg-4" style={{ marginBottom: '20px' }}>
                        <div className="item-box radius-15 md-mb30">
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
<div class="line-overlay up opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style={{strokeDasharray: "3246.53"}}></path></svg></div>
</div>
              </section>
              {/* <CRMdesign /> */}
              {/* <Benifit /> */}
              <section className="services  pb-20">
                <div className="container">
                  <div className="sec-head mb-80 fontmanage">

                    <h2 className="fw-600 text-u ls1 fontmanage" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                      Your Benefit
                    </h2>

                  </div>
                  <div className="row">
                    {offer.map((item, i) => (
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
              {/* <Brands /> */}
              <Brands />
              {/* <div className="clients-carso2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="swiper5">
              <Swiper
                id="content-carousel-container-unq-clients"
                className="swiper-container"
                data-swiper="container"
                {...swiperOptions}
              >
                <SwiperSlide className="swiper-slide" >
                  <div className="item" >
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={india} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={degital} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={numberone} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={data} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={artificial} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={iso} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div> */}
              {/* <Payroll1/> */}
              <section className="services section-padding pb-0">
                <div className="container">
                  <div className="sec-head mb-50">
                    <h6 style={{ color: '#8c8c8c', marginBottom: '10px', justifyContent: 'center', display: 'flex', }}>We Offer</h6>
                    <h6 className="sub-title  mb-25 fontmanage" style={{ justifyContent: 'center', display: 'flex', fontSize: "35px" }}>FEATURES INCLUDED</h6>
                  </div>

                  <div className="row offercard">
                    {offeres12.map((item, i) => (
                      <div key={i} className="col-md-6">
                        <div className="item-box2 mb-30" style={{ display: 'flex', background: 'none', padding: '25px' }}>
                          <div className="icons " >
                            <img src={item.img} alt="" />
                          </div>
                          <div>
                            <h5 className="mb-15">{item.title}</h5>
                            <p style={{ textAlign: 'justify' }}>{item.p}</p>

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ paddingTop: '60px' }}>
                    <div>
                      <h4 style={{ justifyContent: 'center', display: 'flex', marginBottom: '20px' }} className='newfont'>Benefits of a Payroll CRM software</h4>
                    </div>
                    <div>
                      <div className='benifits1'

                      >
                        <div className='realestatepersantage'

                        >
                          <h3 style={{ margin: 0 }}>90%</h3>
                          <span style={{ fontSize: '20px' }}>Enhanced Customer
                            Satisfaction</span>
                        </div>

                        <div className='realestatepersantage'

                        >
                          <h3 style={{ margin: 0 }}>50%</h3>
                          <span style={{ fontSize: '20px' }}>Improved Response
                            Times</span>
                        </div>

                        <div className='realestatepersantage'

                        >
                          <h3 style={{ margin: 0 }}>40%</h3>
                          <span style={{ fontSize: '20px' }}>Increased Operational
                            Efficiency</span>
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
                          <span style={{ fontSize: '20px' }}>Enhanced Data
                            Security</span>
                        </div>
                      </div>


                    </div>

                  </div>



                </div>
              </section>
              {/* <Payroll3/> */}
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
                                What is a payroll system?
                              </h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="">
                                A payroll system is a software solution designed to manage and automate the calculation and distribution of employee salaries. It includes features such as salary calculation, tax deductions, attendance tracking, payslip generation, and compliance with legal requirements.
                              </p>
                            </div>
                          </div>
                          <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                            <div className="title">
                              <h6>How does the payroll system calculate employee salaries?</h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="">
                                The payroll system calculates salaries based on predefined salary structures, employee attendance, leave records, overtime, bonuses, and applicable deductions such as taxes, insurance, and provident fund contributions. It automates the entire process to ensure accuracy and compliance.
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
                                Can the payroll system generate payslips?
                              </h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="">
                                Yes, the payroll system automatically generates digital payslips for employees after salary calculations. Employees can access their payslips through the self-service portal, which includes details like basic salary, allowances, deductions, and net pay.
                              </p>
                            </div>
                          </div>

                          <div
                            className="item active mb-15 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="title">
                              <h6>  How does the system handle taxes and compliance?</h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="mb-30">
                                The payroll system is configured to automatically apply tax rates based on local laws and regulations. It calculates income tax deductions, contributions to social security or provident funds, and ensures compliance with labor laws to avoid penalties.
                              </p>
                              {/* <p className="mb-10">
                          Taken possession of my entire soul, like these sweet
                          mornings of spring which i enjoy with my whole.
                        </p>
                        <p className="">
                          Taken possession of my entire soul, like these sweet
                          mornings of spring which i enjoy with my whole.
                        </p> */}
                            </div>
                          </div>

                          <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                            <div className="title">
                              <h6>
                                {" "}
                                Can the payroll system integrate with other software?

                              </h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="">
                                Yes, the payroll system can integrate with accounting software, HR management systems, and payment gateways to streamline processes like financial reporting, tax filing, and salary disbursement.


                              </p>
                            </div>
                          </div>

                          <div className="item wow fadeInUp" data-wow-delay=".5s">
                            <div className="title">
                              <h6>Can I customize the payroll system to fit my business needs?</h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="">
                                Yes, the payroll system can be customized to suit your business requirements, such as salary components, benefits, and leave policies. It is flexible to adapt to different industries and business models.
                              </p>
                            </div>
                          </div>

                          <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                            <div className="title">
                              <h6>
                                {" "}
                                What kind of support is available for the payroll system?
                              </h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="">

                                We offer comprehensive support, including setup assistance, ongoing troubleshooting, and training for your HR and finance teams. Support is available through email, phone, and a knowledge base with FAQs and guides.


                              </p>
                            </div>
                          </div>

                          <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                            <div className="title">
                              <h6>  How often is the payroll system updated?</h6>
                              <span className="ico ti-plus"></span>
                            </div>
                            <div className="accordion-info">
                              <p className="">
                                The payroll system is regularly updated to ensure compliance with changing tax laws, labor regulations, and software improvements. Updates are rolled out automatically, so your business always stays current with legal requirements.
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

              <Tsspayroll15 />

              <section className="services section-padding pb-0">
                <div className="container">
                  <div style={{ paddingTop: '80px' }}>
                    <div>
                      <h3 style={{ justifyContent: 'center', display: 'flex', marginBottom: '50px' }} className='fontmanage'>How Puresaas works for Payroll System ?</h3>
                    </div>
                    <div>
                      <p style={{ fontSize: '20px', textAlign: 'justify' }}>PureSaaS offers a comprehensive Payroll System solution designed to streamline payroll operations and enhance efficiency for businesses. With its intuitive and powerful platform, Puresaas automates payroll processes, ensuring accurate salary calculations, tax deductions, and compliance with legal requirements.
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