import React from "react";
import A1 from "../../../Image/adaptation.png";
import A2 from "../../../Image/process (1).png";
import A3 from "../../../Image/login.png";
import A4 from "../../../Image/two-factor-authentication.png";
import A5 from "../../../Image/verified.png";
import A6 from "../../../Image/responsive.png";
export default function Sit() {
  return (
    <>
      <div className="container">
        <section
          className="main-ad"
         
        >
          <div className="content-wrap pt bottom-animated animated middle-animated top-animated">
            <div className="block3-inner">
              <div className="block3-cont  " style={{ textAlign: "center" }}>
                <h2 className="sec-line" style={{ color: "#e2e2e2" }}>
                  <span className="block">Security and</span>
                  <br /> IT management
                </h2>
                <p style={{ textAlign: "center", color: "#e2e2e2" }}>
                Optimize IT and enterprise operations with a <br /> comprehensive toolkit,covering cloud access,<br /> endpoint security, and mobile device management.
                </p>
              </div>
              <ul className="main-ul">
                <li
                  className="dip"
                  id="ad1"                 
                >
                  <div  style={{
                      background: " beige",
                      width: "75px",
                      padding: "16px",
                      borderRadius: "33px",
                    }}>
                  <img
                    src={A1}
                   
                    alt=""
                  />
                  </div>
                  <a
                    style={{ textAlign: "center" ,color:'#e2e2e2'}}
                    // href="/directory/features/single-sign-on.html"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sprite-before single-sign">&nbsp;</span>
                    Adaptive single <br /> sign-on
                  </a>
                </li>
                <li
                className="dip"
                id="ad2"                
                >
                  <div  style={{
                      background: " #e7e5ff",
                      width: "75px",
                      padding: "16px",
                      borderRadius: "33px",
                    }}>

                  <img
                    src={A2}
                   
                    alt=""
                  />
                  </div>
                  <a
                    // href="/endpoint-central/"
                    target="_blank"
                    rel="noopener"
                    style={{ textAlign: "center",color:'#e2e2e2' }}
                  >
                    <span className="sprite-before endpoint">&nbsp;</span>
                    Endpoint <br />
                    management
                  </a>
                </li>
                <li
                className="dip"
                id="ad3"
                  
                >
                  <div style={{
                      background: " #dff5dc",
                      width: "75px",
                      padding: "16px",
                      borderRadius: "33px",
                    }}>

                  <img
                    src={A3}
                    
                    alt=""
                  />
                  </div>
                  <a
                    target="_blank"
                    rel="noopener"
                    style={{ textAlign: "center",color:'#e2e2e2' }}
                  >
                    <span className="sprite-before passwrd">&nbsp;</span>
                    Password <br />
                    management
                  </a>
                </li>
                <li
                id="ad4"
                className="dip"
                
                >
                  <div style={{
                      background: " #f3e3e3",
                      width: "75px",
                      padding: "16px",
                      borderRadius: "33px",
                    }}>

                  <img
                    src={A4}
                    
                    alt=""
                  />
                  </div>
                  <a
                    target="_blank"
                    rel="noopener"
                    style={{ textAlign: "center",color:'#e2e2e2' }}
                  >
                    <span className="sprite-before multi-fac">&nbsp;</span>
                    Multi-factor <br />
                    authentication
                  </a>
                </li>
                <li
                id="ad5"
                className="dip"
                  
                >
                  <div  style={{
                      background: " #f5dcf5",
                      width: "75px",
                      padding: "16px",
                      borderRadius: "33px",
                    }}>

                  <img
                    src={A5}
                   
                    alt=""
                  />
                  </div>
                  <a
                    target="_blank"
                    rel="noopener"
                    style={{ textAlign: "center" ,color:'#e2e2e2'}}
                  >
                    <span className="sprite-before id-access">&nbsp;</span>
                    Identity and access <br /> management
                  </a>
                </li>
                <li
                id="ad6"
                className="dip"
                 
                >
                  <div style={{
                      background: " #dcedf5",
                      width: "75px",
                      padding: "16px",
                      borderRadius: "33px",
                    }}>

                  <img
                    src={A6}
                    
                    alt=""
                  />
                  </div>
                  <a
                    target="_blank"
                    rel="noopener"
                    style={{ textAlign: "center" ,color:'#e2e2e2'}}
                  >
                    <span className="sprite-before data-enc">&nbsp;</span>Mobile
                    device <br />
                    management
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
