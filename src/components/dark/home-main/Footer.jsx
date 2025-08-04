import React from 'react';
import footerlogo from '../../../Image/logoo.png'

function Footer() {
  return (
    <footer
      className="clean-footer crev bg-img"
      data-background="/dark/assets/imgs/header/bg1.jpg"
      data-overlay-dark="10"
    >
      <div className="container pb-40 section-padding ontop">
        {/* <div className="cal-action pb-50 mb-80 bord-thin-bottom">
          <h2 className="fz-120 line-height-1 d-rotate wow">
            <span className="rotate-text">
              <a href="/dark/contactus">
                Let’s Contact{' '}
                <span className="ml-30 fz-70 ti-arrow-top-right"></span>
              </a>
            </span>
          </h2>
        </div> */}
        <div className="row">
          <div className="col-lg-3">
            <div className="logo icon-img-100">
              <img src={footerlogo} alt="" style={{width:'160%'}}/>
            </div>
            <p style={{marginTop:'20px' , textAlign:'justify'}}>Puresaas offers a wide range of CRM services, providing end-to-end solutions tailored to meet the unique demands of businesses across industries. Our platform integrates advanced customer relationship management tools, streamlining operations, enhancing customer engagement, and driving business growth. </p>

          </div>
          <div className="col-lg-3">
            <div className="column">
              <div className="mb-40">
                <h6 className="sub-title mb-30" style={{textAlign:"start"}}>Products</h6>
                {/* <h5 className="opacity-8">
                  5000 Trussville <br /> Crossings Pkwy, Birmingham
                </h5> */}
              </div>

              {/* <a href="#0" className="underline">
                <span className="fz-22 main-color">+2 456 (343) 24 45</span>
              </a> */}
              <ul style={{padding:'0px' , lineHeight:'35px'}}>
                <li> <a href="/RealEstateAgentCRM">Real Estate Agent CRM</a></li>
                <li><a href="/Realestatecrm">Real Estate CRM</a></li>
                <li><a href="/salescrm">Sales CRM</a></li>
                <li><a href="/b2bcrm">B2B Textile ERP</a></li>
                <li><a href="/telecallercrm">Telecaller CRM</a></li>
                <li><a href="/Servicecrm">Service CRM</a></li>
                <li><a href="/PayrollSystem">Payroll System</a></li>
                <li><a href="/ATS">ATS (Application Tracking System)</a></li>
                <li><a href="/Officeerp">Office ERP</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column">
              <h6 className="sub-title mb-30" style={{textAlign:"start"}}>Company</h6>
              <ul className="rest fz-14" style={{lineHeight:'35px'}}>
                <li>
                  <a href="/Enterprise">Enterprise</a>
                </li>
                <li>
                  <a href="/Mission">Mission</a>
                </li>
                <li>
                  <a href="/vision">Vision</a>
                </li>
                <li>
                  <a href="/blog"> Blog</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/contactus">Contact us</a>
                </li>
                {/* <li >
                  <a href="/Affiliate">Affiliate</a>
                </li> */}
                
                
                
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column">
              <h6 className="sub-title mb-30" style={{textAlign:"start"}}>Policies</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <a href="/terms">Terms of Service</a>
                </li>

                <li className="mb-15">
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li className="mb-15">
                  <a href="/refund">Refund Policy</a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column">
              <h6 className="sub-title mb-30" style={{textAlign:"start"}}>Contact</h6>
              <ul className="rest fz-14">
                <h6 style={{fontSize:"18px",paddingBottom:"8px"}}>Helpline</h6>
                <li style={{paddingBottom:"3px"}}>
                <a href="tel:+919638373601"> 9638373601</a>
                </li>
                <li className="mb-15" style={{fontSize:"15px"}}>
                  {/* <a href="/">info@puresaas.in</a> */}
                  <a href="mailto:info@puresaas.in">info@puresaas.in</a>
                </li>  
               <hr />
                <h6 style={{fontSize:"18px",paddingBottom:"8px"}}>Sales</h6>
                <li style={{paddingBottom:"3px"}}>
                <a href="tel:+919638373601" > 9638373601</a>
                </li>
                <li className="mb-15" style={{fontSize:"15px"}}>
                <a href="mailto:sales@puresaas.in">sales@puresaas.in</a>
                </li> 
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top">
          <div>
            <ul className="rest d-flex align-items-center social-icon-circle ">
              <li >
                <a href="https://www.facebook.com/"  target="_blank" className="hover-anim">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
           
              <li className=" ml-20">
                <a href="https://www.instagram.com/" target="_blank" className="hover-anim">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <p className="fz-14">
            © 2025 All Rights Reserved Puresaas
            {' '}
              {/* <span className="underline main-color">
                <a href="https://www.successinnovativetechnologiespvtltd.com/" target="_blank">
                Success Innovative Technologies Pvt. Ltd.

                </a>
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
