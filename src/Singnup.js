import React, { useEffect, useLayoutEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Swal from 'sweetalert2';
import { gsap } from 'gsap';
import Navbar from './components/dark/creative-agency/Navbar';
import { Helmet } from 'react-helmet';
import LoadingScreen from './components/dark/common/loader';
import Cursor from './components/dark/common/cusor';
import ProgressScroll from './components/dark/common/ProgressScroll';
import Lines from './components/dark/common/Lines';
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
import { MdPhone } from "react-icons/md";
import { MdVisibility, MdVisibilityOff, MdOutlineMail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import { useSearchParams, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import Footer from './components/dark/home-main/Footer';
import { useLocation } from 'react-router-dom';
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
const Signuppage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const location = useLocation();
    const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planId = location.state?.planId || null;
  const productParam = searchParams.get("product");
  const currentPath = location.state?.from;
  
  const pageNames = {
    "Real Estate Agent CRM": "Real Estate Agent CRM",
    "Real Estate CRM": "Real Estate CRM",
    "Sales CRM": "Sales CRM",
    "Service CRM": "Service CRM",
    "B2B Textile ERP": "B2B Textile ERP",
    "Telecaller CRM": "Telecaller CRM",
    "ATS (Application Tracking System)": "ATS (Application Tracking System)",
    "payroll System": "Payroll System",
    "Office ERP": "Office ERP",
  };
  
  const currentPageName = pageNames[productParam || currentPath] || "Signup";


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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Validation logic for name
    if (name === "name" && !/^[A-Za-z ]*$/.test(value)) {
      return;
    }

    // Validation logic for phone number (Ensure 10 digits input)
    if (name === "mobile" && (!/^[0-9]*$/.test(value) || value.length > 10)) {
      return;
    }
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.agree) {
      Swal.fire({
        title: 'Error!',
        text: 'You must agree to the Terms of Service and Privacy Policy.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: "#808080",
      });
      return;
    }
    if (formData.mobile.length !== 10) {
      Swal.fire({
        title: 'Error!',
        text: 'Phone number must be exactly 10 digits!',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: "#808080",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match!',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: "#808080",
      });
      return;
    }

    const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/pusesaas_reg";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          mobile: formData.mobile,
        }),
      });

      const result = await response.json();
       const routeMap = {
        "Real Estate Agent CRM": "RealEstateAgentCRM",
        "Real Estate CRM": "RealEstateCRM",
        "Sales CRM": "SalesCRM",
        "Service CRM": "ServiceCRM",
        "B2B Textile ERP": "B2BTextileERP",
        "Telecaller CRM": "TelecallerCRM",
        "ATS (Application Tracking System)": "ATS",
        "payroll System": "PayrollSystem",
        "Office ERP": "OfficeERP",
      };
       if (response.ok) {
             // Extract userId from the API response
             const userId = result.userId;
       
             // Store userId in sessionStorage
             sessionStorage.setItem("userId", userId);
       
             Swal.fire({
               title: 'Success!',
               text: 'Thank you for registering!',
               icon: 'success',
               confirmButtonText: 'OK',
               confirmButtonColor: "#808080",
             }).then(() => {
               sessionStorage.setItem("planId", planId);
               sessionStorage.setItem("selectedPlanId", planId); // Store for reload-safe access
               // console.log("Navigating to ATS with planId:", planId);
               
               const selectedKey = productParam || currentPath || "ATS";
               const routePath = routeMap[selectedKey] || "ATS"; // fallback
     
               navigate(`/${routePath}`, { state: { planId } });
             });
           } else {
             console.error("Error:", result);
             alert(`Error: ${result.error}`);
           }
         } catch (error) {
           console.error("Error submitting form:", error);
         }

    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    });

  };
  const [phone, setPhone] = useState("");
  

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
      <Start_exploring />
      <Whatsapp />
      <Lines />
      <Navbar />
      <body>
        <div style={{ height: '100vh' }}>
          <div className="row" style={{ height: '100vh', margin: '0' }}>
            <div className="col-md-4 col-lg-3 imagese" style={{ padding: '20px', textAlign: 'center', color: 'white', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              {/* <div style={{ justifyContent: 'center', display: 'flex', marginBottom: '13px' }}>
              <img src='/dark/assets/imgs/icon-img/shubhamsir02.png' style={{ width: '25%', borderRadius: '100%' }} />
            </div>
            <p style={{ textAlign: 'justify' }}>
              "The ease and simplicity of the program and the way that the Puresaas Team have continued to             develop solutions around and integrated with the CRM. We utilize projects for clients and the              Puresaas meeting for training and presentations. From the mobile device, the automated calling               and tracking is Fabulous.            </p>
            <h5 style={{ color: '#00add5', fontWeight: '700',marginTop:'35px' }}>SHUBHAM SINGH</h5> */}
            </div>

            <div className="col-md-8 col-lg-9" style={{ background: '#fff', marginTop: '50px' }}>
              <div className="flex flex-col items-center justify-center bg-gray-100 " style={{ padding: '50px 0', minHeight: '100vh', alignItems: 'center' }}>
                <div className="container">
                  <div className="p-8 rounded-md w-full max-w-md news">
                    <h5 className='h5' style={{ color: '#000' }}>Sign Up</h5>
                    <h2 className="text-xl font-bold text-center mb-4" style={{ color: '#000' }}>CREATE <span className="text-blue-600">ACCOUNT</span></h2>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          {/* <div className="col-12">
                      <label  style={{color:'#000'}}>Name:</label>
                      <input type="text" id="name"  name="name" value={formData.name} onChange={handleInputChange} required className="form-control mb-3" placeholder="User Name" />                   
                    </div>  */}
                    
                            <input style={{margin:'10px'}} value={currentPageName}/>
                          <div className="col-12" style={{ position: "relative" }}>
                            {/* <label style={{ color: "#000" }}>Name:</label> */}
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="form-control mb-3"
                              placeholder="User Name"
                              style={{ paddingRight: "40px" }} // Ensure space for the icon
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "10px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => document.getElementById("name").focus()}
                            >
                              <MdOutlineDriveFileRenameOutline size={20} color="#555" />
                            </div>
                          </div>


                          <div className="col-12" style={{ position: "relative" }}>
                            {/* <label  style={{color:'#000'}}>Email:</label> */}
                            <input type="email" id='email' name="email" value={formData.email} onChange={handleInputChange} required className="form-control mb-3" placeholder="Email Address" />
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "10px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => document.getElementById("email").focus()}
                            >
                              <MdOutlineMail size={20} color="#555" />
                            </div>
                          </div>

                          <div className="col-12" style={{ position: "relative" }}>
                            <input
                              id='phone'
                              type="text"
                              value={formData.mobile}
                              name="mobile"
                              required
                              className="form-control mb-3"
                              placeholder="Enter phone number"
                              pattern="[0-9]{10}" // Ensures exactly 10 digits
                              maxLength="10"
                              onChange={(e) => {
                                const newValue = e.target.value.replace(/[^0-9]/g, ""); // Removes non-numeric input
                                setFormData({ ...formData, mobile: newValue }); // Update state
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "10px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => document.getElementById("phone").focus()}
                            >
                              <MdPhone size={20} color="#555" />
                            </div>
                          </div>



                          <div className="col-12" style={{ position: "relative" }}>
                            {/* <label style={{ color: "#000" }}>Password:</label> */}
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                              className="form-control mb-3"
                              placeholder="Password"
                              style={{ paddingRight: "40px" }} // Ensure space for the icon
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "10px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <MdVisibility size={20} color="#555" /> : <MdVisibilityOff size={20} color="#555" />}
                            </div>
                          </div>
                          <div className="col-12" style={{ position: "relative" }}>
                            {/* <label style={{ color: "#000" }}>Confirm Password:</label> */}
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              required
                              className="form-control mb-3"
                              placeholder="Confirm Password"
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "10px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <MdVisibility size={20} color="#555" />
                              ) : (
                                <MdVisibilityOff size={20} color="#555" />
                              )}
                            </div>
                          </div>
                          <div className="flex items-center mb-4">
                            <input type="checkbox" name="agree" className="mr-2" checked={formData.agree} onChange={handleInputChange} />
                            <label style={{ marginLeft: '10px', fontSize: '16px', color: '#000' }}>
                              I agree to the{' '}
                              <a href="/terms" className="text-blue-600" target='_blank' style={{ textDecoration: 'underline' }}>Terms of Service</a> and{' '}
                              <a href="/privacy" className="text-blue-600" target='_blank' style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
                            </label>
                          </div>
                          <button type="submit" className="btn btn-dark w-100">GET STARTED</button>
                        </div>
                        <div className="col-12 col-md-6" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div>
                            <div className="mt-6 text-center text-sm text-gray-600">
                              <p className='need' style={{ fontWeight: '500' }}>Need assistance?</p>
                              <p className='title' style={{ marginTop: '15px' }}> Contact our toll free number</p>
                              <p className='number' style={{ textAlign: 'center' }}><a href="tel:+919638373601" >📞 9638373601 </a></p>
                              <p className='title' style={{ marginTop: '15px' }}>Reach out to us</p>
                              <p style={{ textAlign: 'center', color: '#494a4b' }}> <a href="mailto:info@puresaas.com">📧 info@puresaas.com</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>


                    {/* <div className="col-12" style={{ margin: '26px 0px', display: 'flex', justifyContent: 'start' }}>
                      <ul style={{ listStyle: 'none', display: 'flex', padding: '0px' }}>
                      <li style={{ border: '1px solid #6b7499', borderRadius: '100%', marginRight: '10px' }}>
    <a 
      href="https://www.facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FacebookIcon style={{ color: '#4969a8', padding: '6px 8px', fontSize: '40px' }} />
    </a>
  </li>

  <li style={{ border: '1px solid #6b7499', borderRadius: '100%', marginRight: '10px' }}>
    <a 
      href="https://www.instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <InstagramIcon style={{ color: '#e8715c', padding: '6px 8px', fontSize: '40px' }} />
    </a>
  </li>

                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </body>
    </>
  );
};

export default Signuppage;