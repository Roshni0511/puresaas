import React, { useState } from "react";
import logoheader from "../../../Image/logoo.png";
import { FaHome } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";




const CRMNavbar = () => {
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
    <>
      <nav
        className="navbar navbar-expand-lg bord blur"
        style={{ padding: "10px" }}
      >
        <div className="container">
          <a className="logo icon-img-100" href="/">
            <img src={logoheader} alt="logo" style={{ width: "160%" }} />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-toggle="dropdown"
                  href="/RealEstateAgentCRM"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text"> features </span>
                </a>{" "}
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-toggle="dropdown"
                  href="/pricing"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text"> pricing </span>
                </a>{" "}
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href=""
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">solutions</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/Automotive">
                      Automotive CRM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Lifesci">
                      Life Sciences
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/Servicesfinancial">
                      Financial Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/RealEstatee">
                      Real Estate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Retail">
                      Retail
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Insurance">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Hospitality">
                      Hospitality
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Education">
                      Education
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Servicess">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Startup">
                      Startups
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Broadcast">
                      Broadcasting
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <a className="rolling-text">coustomers</a>
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-toggle="dropdown"
                  href="/contactus"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <a className="rolling-text">Contact Us</a>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href=""
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">More</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/faq">
                      FAQS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/blog">
                      Blogs
                    </a>
                  </li>
               
                  
                 
                </ul>
              </li> */}
              <li
                className="nav-item dropdown "
                style={{ display: "flex", alignItems: "center" }}
              >
                <a
                  className="nav-link b0order border-white  text-sm "
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ padding: "4px 10px 4px 10px",borderRadius:"15px",background:"white",color:"black",fontSize:"30px",display:"flex",alignItems:"center" }}
                >  
                <FaHome /> 
                </a>
              </li>
     
            </ul>
            <ul className='signpage' >
      <li className="text-lg">
        <a href="https://shubhamsingh.in/Application_Tracking_System/"  target='_blank' className="text-white">
          Sign In
        </a>
      </li>
      <li className="border border-white px-4 py-2 text-sm" style={{borderRadius:"15px"}}>
      <a href={productName ? `/Signup?product=${encodeURIComponent(productName)}` : "/Signup"}  onClick={handleSignupClick}>
          Sign Up
        </a>
      </li>
    </ul>
          </div>

          <div className="topnav-1">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu">
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href="/RealEstateAgentCRM">
                          <span className="fill-text" data-text="feactures">
                            feactures
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="solutions">
                          solutions
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Automotive">
                                <span
                                  className="fill-text"
                                  data-text="Automotive CRM"
                                >
                                  Automotive CRM
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Lifesci">
                                <span
                                  className="fill-text"
                                  data-text="Life Sciences"
                                >
                                  Life Sciences
                                </span>
                                {""}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Servicesfinancial">
                                <span
                                  className="fill-text"
                                  data-text="Financial Services"
                                >
                                  Financial Services
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/RealEstatee">
                                <span
                                  className="fill-text"
                                  data-text=" Real Estate"
                                >
                                  Real Estate
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Retail">
                                <span className="fill-text" data-text="Retail">
                                  Retail
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Insurance">
                                <span
                                  className="fill-text"
                                  data-text="Insurance"
                                >
                                  Insurance
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Hospitality">
                                <span
                                  className="fill-text"
                                  data-text="Hospitality"
                                >
                                  Hospitality
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Education">
                                <span
                                  className="fill-text"
                                  data-text="Education"
                                >
                                  Education
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Servicess">
                                <span
                                  className="fill-text"
                                  data-text="Services"
                                >
                                  Services
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Startup">
                                <span
                                  className="fill-text"
                                  data-text="Startups"
                                >
                                  Startups
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Broadcast  ">
                                <span
                                  className="fill-text"
                                  data-text="Broadcasting"
                                >
                                  Broadcasting
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="o-hidden">
                      <a href="/pricing" className="link">
                        <span className="fill-text" data-text="pricing">
                        pricing
                        </span>
                      </a>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="o-hidden">
                      <a href="/" className="link">
                        <span className="fill-text" data-text="coustomers">
                        coustomers
                        </span>
                      </a>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="More">
                        More
                        </span>
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/faq">
                                <span className="fill-text" data-text="FAQS">
                                  FAQS
                                </span>{" "}
                              </a>
                             
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/blog">
                                <span className="fill-text" data-text="Blogs">
                                  Blogs
                                </span>{" "}
                              </a>
                            
                            </div>
                          </div>
                        </li>
                       
                      </ul>
                    </div>
                  </li> */}
                  <li>
                    <div className="o-hidden">
                      <a href="/contactus" className="link">
                        <span className="fill-text" data-text="contact us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <a href="/" className="link">
                        <span className="fill-text" style={{color:"white",fontSize:"40px"}}>
                        <FaHome /> 
                        </span>
                      </a>
                    </div>
                  </li>
               
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRMNavbar;