import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import Footer from "../../components/dark/home-main/Footer";
import Lines from "../../components/dark/common/Lines";
import ProgressScroll from "../../components/dark/common/ProgressScroll";
import Cursor from "../../components/dark/common/cusor";
import LoadingScreen from "../../components/dark/common/loader";
import Navbar from "../../components/dark/creative-agency/Navbar";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Pricinng = () => {
  const [message, setMessage] = useState("Hello");

  return (
    <>
      <Helmet>
        <title>Puresaas</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

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
          <Navbar />

          <div id="smooth-content">
            <main className="main-bg">

              <div style={{ paddingTop: "60px", paddingBottom: "105px" }}>
                <div>
         
              <section
                className="services section-padding"
                style={{paddingBottom:"0px"}}
              >
                <div className="container">
                  <div className="sec-head mb-50">
               
                    <h5
                      className="sub-title mb-25"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        fontSize: "45px",
                        textAlign: "center",
                        fontWeight: "800",
                      }}
                    >
                     Sensational software, Sensible price{" "}
                    </h5>
                  </div>
                </div>
              </section>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                       paddingLeft:'102px',
                      paddingTop: "20px",
                      flexWrap: "nowrap",
                    }}
                  >
                    <div style={{display:'flex',width:'20%'}}>
                      <div style={{fontSize:'34px'}}>
                      <CheckCircleOutlineIcon style={{fontSize:'35px'}}/>
                      </div>
                    <div className="realestateper">
                  
                      <h5 style={{ margin: 0 }}>Free trial</h5>
                      <span style={{ fontSize: "17px" }}>
                      No credit card required
                      </span>
                    </div>
                    </div>
                    <div style={{display:'flex'}}>
                      <div style={{fontSize:'34px'}}>
                      <CheckCircleOutlineIcon style={{fontSize:'35px'}}/>
                      </div>
                    <div className="realestateper">
                  
                      <h5 style={{ margin: 0 }}>Flexible contracts</h5>
                      <span style={{ fontSize: "17px" }}>
                      Straightforward pricing, no lock-ins
                      </span>
                    </div>
                    </div>
                    <div style={{display:'flex'}}>
                      <div style={{fontSize:'34px'}}>
                      <CheckCircleOutlineIcon style={{fontSize:'35px'}}/>
                      </div>
                    <div className="realestateper">
                  
                      <h5 style={{ margin: 0 }}>Minimal learning curve</h5>
                      <span style={{ fontSize: "17px" }}>
                      50% faster implementation
                      </span>
                    </div>
                    </div>
                    <div style={{display:'flex'}}>
                      <div style={{fontSize:'34px'}}>
                      <CheckCircleOutlineIcon style={{fontSize:'35px'}}/>
                      </div>
                    <div className="realestateper">
                  
                      <h5 style={{ margin: 0 }}>Intuitive UX</h5>
                      <span style={{ fontSize: "17px" }}>
                      Better adoption, easier training
                      </span>
                    </div>
                    </div>

                    {/* <div className="realestateper">
                      <h5 style={{ margin: 0 }}>Flexible contracts</h5>
                      <span style={{ fontSize: "20px" }}>
                      Straightforward pricing, no lock-ins
                      </span>
                    </div>

                    <div className="realestateper">
                      <h5 style={{ margin: 0 }}>Minimal learning curve</h5>
                      <span style={{ fontSize: "20px" }}>
                      50% faster implementation
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        
                        padding: "10px",
                        width: "300px",
                        textAlign: "start",
                      }}
                    >
                      <h5 style={{ margin: 0 }}>Intuitive UX</h5>
                      <span style={{ fontSize: "20px" }}>
                         Better adoption, easier training
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>

             
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default Pricinng