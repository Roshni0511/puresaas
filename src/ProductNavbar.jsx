import React, { useState } from "react";
import logo from '../src/Image/logoo.png';
import { useLocation, useNavigate } from "react-router-dom";
export default function ProductNavbar() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/Singnup", {
      state: {
        from: window.location.pathname, // current page no path
      },
    });
  };
  const [menuOpen, setMenuOpen] = useState(false);
        const location = useLocation(); // ✅ Get the current page
      const normalizedPath = location.pathname.replace(/\/$/, "").toLowerCase();
      const allowedPages = {
    "/realestateagentcrm": "Real Estate Agent CRM",
    "/realestatecrm": "Real Estate CRM",
    "/salescrm": "Sales CRM",
    "/servicecrm": "Service CRM",
    "/b2bcrm": "B2B Textile ERP",
    "/telecallercrm": "Telecaller CRM",
    "/ats": "ATS (Application Tracking System)",
    "/payrollsystem": "payroll System",
    "/officeerp": "Office ERP",
  };
  const productName = allowedPages[normalizedPath] ? allowedPages[normalizedPath] : null;
  return (
    <div className='navbar'>
      <nav className="navbar custom_navbar" style={{background:'#1f1f1f'}}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo"  className="logo responsive-logo" />
          </a>

          {/* Enquiry Button */}
          <a href="/contactus" className="enquiryBtn d-none d-md-inline-block ctaButton">
            Enquiry Now
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler toggle-animate"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end stylish-offcanvas"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{background:'#1f1f1f',borderLeft:'5px solid white',borderTopLeftRadius:'16px',borderBottomLeftRadius:'16px',width:'300px'}}
        >
          <div className="offcanvas-header">
            <img src={logo} alt="logo" className="logo1" style={{ width: "160px" }}/>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body custom-offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link custom-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/RealEstateAgentCRM">features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/blog">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/contactus">CONTACT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="https://shubhamsingh.in/Application_Tracking_System/" target='_blank'> Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href={productName ? `/Signup?product=${encodeURIComponent(productName)}` : "/Signup"}  onClick={handleSignupClick}>Sign Up</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
