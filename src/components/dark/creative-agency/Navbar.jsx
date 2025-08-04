import React from "react";
import logoheader from "../../../Image/logoo.png";
function Navbar() {
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
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Home</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/dark/home-main">
                    Main Home
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Modern Startup
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-creative-agency"
                  >
                    Creative Agency
                  </a>
                  <a className="dropdown-item" href="/dark/home-modern-agency">
                    Modern Agency
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-creative-portfolio"
                  >
                    Creative Portfolio
                  </a>
                  <a className="dropdown-item" href="/dark/home-digital-agency">
                    Digital Agency
                  </a>
                  <a className="dropdown-item" href="/dark/home-freelancer">
                    Freelancer
                  </a>
                  <a className="dropdown-item" href="/dark/home-personal-vcard">
                    Personal vCard
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-minimal-portfolio"
                  >
                    Minimal Portfolio
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-asymmetric-portfolio"
                  >
                    Asymmetric Portfolio
                  </a>
                </div>
              </li> */}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href=""
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Product</span>
                </a>
                <div className="dropdown-menu mega-menu">
                  <div className="container">
                    <div className="row">
                      <div>
                        <div className="clumn">
                          {/* <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Type
                            </h6>
                          </div> */}
                          <div className="links row">
                            <div className="col-lg-4">
                              <div style={{ marginBottom: "10px" }}>
                                <a
                                  className="dropdown-item "
                                  href="/RealEstateAgentCRM"
                                  style={{ fontSize: "18px" }}
                                >
                                
                                  {" "}
                                  Real Estate Agent CRM
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Quickly create, manage, and offload sites to
                                  clients with ease.
                                </p>
                              </div>
                              <div style={{ marginBottom: "10px" }}>
                                <a
                                  className="dropdown-item"
                                  href="/Realestatecrm"
                                  style={{ fontSize: "18px" }}
                                >
                                  Real Estate CRM
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Early Create sites & offload them to clients
                                </p>
                              </div>
                              <div style={{ marginBottom: "10px" }}>
                                <a
                                  className="dropdown-item"
                                  href="/salescrm"
                                  style={{ fontSize: "18px" }}
                                >
                                  Sales CRM
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Streamline your sales process, manage leads,
                                  and close deals faster.
                                </p>
                              </div>
                              <div style={{ marginBottom: "10px" }}>
                                <a
                                  className="dropdown-item"
                                  href="/Servicecrm"
                                  style={{ fontSize: "18px" }}
                                >
                                  Service CRM
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Streamline support and boost customer
                                  satisfaction.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div style={{ marginBottom: "10px" }}>
                                {" "}
                                <a
                                  className="dropdown-item"
                                  href="/b2bcrm"
                                  style={{ fontSize: "18px" }}
                                >
                                  B2B Textile ERP
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Simplify operations, manage inventory, and
                                  streamline production.
                                </p>
                              </div>
                              <div style={{ marginBottom: "10px" }}>
                                <a
                                  className="dropdown-item"
                                  href="/telecallercrm"
                                  style={{ fontSize: "18px" }}
                                >
                                  Telecaller CRM
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Boost productivity, manage calls, and track
                                  leads effortlessly.
                                </p>
                              </div>

                              <div style={{ marginBottom: "10px" }}>
                                <a
                                  className="dropdown-item"
                                  href="/ATS"
                                  style={{ fontSize: "18px" }}
                                >
                                  ATS (Application Tracking System)
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Simplify recruitment, track candidates, and
                                  streamline your hiring process.
                                </p>
                              </div>
                              <div style={{ marginBottom: "10px" }}>
                                <a
                                  className="dropdown-item"
                                  href="/PayrollSystem"
                                  style={{ fontSize: "18px" }}
                                >
                                  payroll System
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  {" "}
                                  Streamline payroll processing, ensure
                                  accuracy, and simplify compliance.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div style={{ marginBottom: "10px" }}>
                                {" "}
                                <a
                                  className="dropdown-item"
                                  href="/Officeerp"
                                  style={{ fontSize: "18px" }}
                                >
                                  Office ERP
                                </a>
                                <p style={{ fontSize: "12px" }}>
                                  Integrate business operations, streamline
                                  workflows, and boost productivity.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <div className="links row">
                            <div className="col-lg-6">
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-standard"
                              >
                                Real Estate Agent CRM
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-gallery"
                              >
                                B2B Textile ERP
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-metro"
                              >
                                Office ERP
                              </a>
                            </div>
                            <div className="col-lg-6">
                              <a className="dropdown-item" href="/dark/masonry">
                              Real Estate CRM
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-caption-curso"
                              >
                                Telecaller CRM
                              </a>
                              <a className="dropdown-item" href="/dark/outline">
                                Outline
                              </a>
                            </div>
                            <div className="col-lg-6">
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-parallax"
                              >
                                Parallax
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-sticky"
                              >
                                Sticky
                              </a>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Showcases
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-fullscreen"
                              >
                                Parallax Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-carousel"
                              >
                                Showcase Carousel
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-half-slider"
                              >
                                Creative Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-interactive-full"
                              >
                                Interactive Full
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-interactive-center"
                              >
                                Interactive Center
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-interactive-vertical"
                              >
                                Interactive Vertical
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Single
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/project1"
                              >
                                project1
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/project2"
                              >
                                project2
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/project3"
                              >
                                project3
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/project4"
                              >
                                project4
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/project5"
                              >
                                project5
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/project6"
                              >
                                project6
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-toggle="dropdown"
                  href="/Enterprise"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text"> ENTERPRISE </span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href=""
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Company</span>
                </a>
                <ul className="dropdown-menu">
                  {/* <li className="dropdown-item"> */}
                  {/* <a href="/dark/page-about3"> */}
                  {/* About Us  */}
                  {/* <i className="fas fa-angle-right icon-arrow"></i> */}
                  {/* </a> */}
                  {/* <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="/dark/page-about">
                          About Us 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/page-about2">
                          About Us 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/page-about3">
                          About Us 3
                        </a>
                      </li>
                    </ul> */}
                  {/* </li> */}
                  {/* <li className="dropdown-item">
                    <a href="#0">
                      Services <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="/dark/page-services">
                          Services 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dark/page-services2"
                        >
                          Services 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dark/page-services-details"
                        >
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="dropdown-item">
                    <a href="#0">
                      Contact Us{' '}
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="/dark/page-contact">
                          Contact Us 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/page-contact2">
                          Contact Us 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/contactus">
                          Contact Us 3
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a className="dropdown-item" href="/mission">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/vision">
                      Vision
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="/dark/terms">
                     Terms
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="dropdown-item" href="/faq">
                      FAQS
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="dropdown-item" href="/dark/page-error-404">
                      Error 404
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-toggle="dropdown"
                  href="/blog"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Blogs</span>
                </a>
                {/* <div className="dropdown-menu"> */}
                {/* <a className="dropdown-item" href="/dark/blog">
                    Blog Standerd
                  </a>
                  <a className="dropdown-item" href="/dark/blog-list">
                    Blog List
                  </a>
                  <a className="dropdown-item" href="/dark/blog-list2">
                    Blog List 2
                  </a> */}
                {/* <a className="dropdown-item" href="/dark/blogdetails">
                    Blog Details
                  </a> */}
                {/* </div> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  <span className="rolling-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="search-form">
            <div className="form-group">
              <input type="text" name="search" placeholder="Search" />
              <button>
                <span className="pe-7s-search"></span>
              </button>
            </div>
            <div className="search-icon">
              <span className="pe-7s-search open-search"></span>
              <span className="pe-7s-close close-search"></span>
            </div>
          </div> */}
            <div className="topnav">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
               <ul className='signpage' >
      <li className="text-lg">
        <a href="https://shubhamsingh.in/Application_Tracking_System/"  target='_blank' className="text-white">
          Sign In
        </a>
      </li>
      <li className="border border-white px-4 py-2 text-sm" style={{borderRadius:"15px"}}>
        <a href="/signup" className="text-white no-underline" >
          Sign Up
        </a>
      </li>
    </ul>
        </div>
      </nav>

      <div className="hamenu">
        {/* <div className="logo icon-img-100"> */}
        {/* <img src="/dark/assets/imgs/logo-light.png" alt="" /> */}
        {/* <a className="logo icon-img-100" href="/">
            <img src={logoheader} alt="logo" style={{width:'125%'}}/>
          </a> */}
        {/* </div> */}
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
                        <a href="/">
                          <span className="fill-text" data-text="Home">
                            Home
                          </span>{" "}
                        </a>
                        {/* <i></i> */}
                      </div>
                    </div>
                   
                  </li>
                  <li>
                    <li>
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text="Product">
                            Product
                          </span>{" "}
                          <i></i>
                        </div>
                      </div>
                      <div className="sub-menu no-bord">
                        <ul>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/RealEstateAgentCRM">
                                  <span
                                    className="fill-text"
                                    data-text="Real Estate Agent CRM"
                                  >
                                    Real Estate Agent CRM
                                  </span>{" "}
                                </a>
                                <p>
                                  Quickly create, manage, and offload sites to
                                  clients with ease.
                                </p>
                                {/* <i></i> */}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/Realestatecrm">

                                <span
                                  className="fill-text"
                                  data-text="Real Estate CRM"
                                >
                                  Real Estate CRM
                                </span>
                                {""}
                                </a>
                                <p>
                                  Early Create sites & offload them to clients
                                </p>
                                {/* <i></i> */}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/salescrm">
                                <span
                                  className="fill-text"

                                  data-text="Sales CRM"
                                >
                                  Sales CRM
                                </span>{" "}
                                </a>
                                <p>
                                  Streamline your sales process, manage leads,
                                  and close deals faster.
                                </p>
                                {/* <i></i> */}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/Servicecrm">
                                <span
                                  className="fill-text"
                                  data-text=" Service CRM"
                                >
                                  Service CRM
                                </span>{" "}
                                </a>
                                <p>
                                  Streamline support and boost customer
                                  satisfaction.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/b2bcrm">
                                <span
                                  className="fill-text"
                                  data-text="B2B Textile ERP"
                                >
                                  B2B Textile ERP
                                </span>{" "}
                                </a>
                                <p>
                                  Simplify operations, manage inventory, and
                                  streamline production.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/telecallercrm">
                                <span
                                  className="fill-text"
                                  data-text="Telecaller CRM"
                                >
                                  Telecaller CRM
                                </span>{" "}
                                </a>
                                <p>
                                  Boost productivity, manage calls, and track
                                  leads effortlessly.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/ATS">
                                <span
                                  className="fill-text"
                                  data-text="ATS (Application Tracking System)"
                                >
                                  ATS (Application Tracking System)
                                </span>{" "}
                                </a>
                                <p>
                                  Simplify recruitment, track candidates, and
                                  streamline your hiring process.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/PayrollSystem">
                                <span
                                  className="fill-text"
                                  data-text="Payroll System"
                                >
                                  Payroll System
                                </span>{" "}
                                </a>
                                <p>
                                  {" "}
                                  Streamline payroll processing, ensure
                                  accuracy, and simplify compliance.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <div className="link cursor-pointer sub-dmenu">
                                <a href="/Officeerp">
                                <span
                                  className="fill-text"
                                  data-text="Office ERP"
                                >
                                  Office ERP
                                </span>{" "}
                                </a>
                                <p>
                                  Integrate business operations, streamline
                                  workflows, and boost productivity.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <a href="/Enterprise" className="link">
                          <span className="fill-text" data-text="ENTERPRISE">
                            ENTERPRISE
                          </span>
                        </a>
                      </div>
                    </li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Company">
                         Company
                        </span>
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/Mission">
                                <span className="fill-text" data-text="Mission">
                                  Mission
                                </span>{" "}
                              </a>
                              {/* <i></i> */}
                            </div>
                          </div>
                          
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/vision">
                                <span className="fill-text" data-text="Vision">
                                  Vision
                                </span>{" "}
                              </a>
                              {/* <i></i> */}
                            </div>
                          </div>
                         
                        </li>
                        <li>
                          {/* <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <a href="/faq">
                                <span className="fill-text" data-text="FAQS">
                                  FAQS
                                </span>{" "}
                              </a>
                              <i></i>
                            </div>
                          </div> */}
                          {/* <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-FAQS" className="sub-link">
                                  FAQS
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-error-404"
                                  className="sub-link"
                                >
                                  Error 404
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href="/blog">
                          <span className="fill-text" data-text="Blogs">
                            Blogs
                          </span>{" "}
                        </a>
                        {/* <i></i> */}
                      </div>
                    </div>
                    {/* <div className="sub-menu">
                      <ul>
                        <li>
                          <a className="sub-link" href="/dark/blog">
                            Standard
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blog-list">
                            Blog List
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blog-list2">
                            Blog List 2
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blogdetails">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="/contactus" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="https://shubhamsingh.in/Application_Tracking_System/"  target='_blank' className="link">
                        <span className="fill-text" data-text="Sign In">
                          Sign In
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="/signup" className="link">
                        <span className="fill-text" data-text="Sign Up">
                        Sign Up
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="#0">Hello@email.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}


export default Navbar;
