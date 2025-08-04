import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../../components/dark/home-main/Footer';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Hospitalities from '../../data/portfolios/Hospitalities.json'
import CheckIcon from '@mui/icons-material/Check';
import CRMNavbar from '../../components/dark/creative-agency/CRMNavbar';
const Hospitality = () => {
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
                      
                    {/* <Navbar /> */}
                    <CRMNavbar />
                  
                    <div id="smooth-content">
                        <main className="main-bg">
                        <section className="services section-padding pb-0">
            <div className="container">
        <div style={{paddingTop:'80px'}}>
            <div>
                      <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px',textAlign:'center'}}>Delight customers using the best-in-business CRM for hospitality</h3>
                  </div>
                  <div>
                    <p style={{fontSize:'20px', textAlign:'center'}}>
                    Delighting customers in the hospitality industry requires personalized experiences, efficient service, and seamless communication. The best-in-business CRM for hospitality helps achieve this by centralizing guest information, managing reservations, and streamlining interactions. With features like automated follow-ups, real-time feedback collection, and personalized offers, a top CRM ensures guests feel valued and attended to. It also enables staff to provide tailored recommendations and resolve issues quickly, enhancing overall satisfaction. 
  </p>
                  </div>
                  <div style={{justifyContent:'center',display:'flex'}}>
                  <button style={{marginTop:'40px', padding:'9px  30px', borderRadius:'1.61765rem', fontWeight:'400', border:'0px',}} > <a href="../dark/Booksdemo">GET A DEMO</a></button>
                  </div>
            </div>
  
            </div>
          </section>
          <div style={{marginTop:'20px'}}>
            <div className='container'>

            <img src='/dark/assets/imgs/background/Hospitalityback.png'/>
            </div>
          </div>
          <div className='container' > 
  
            <div className="col-lg-12" style={{marginTop:"50px",padding:'30px 20px',border:"1px solid #fff"}}>
              <div className="item main-bg md-mb50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                     <h4 style={{fontSize:"29px"}}>Why does the hospitality sector need its own custom CRM solution? </h4>
                     <p  style={{marginTop:"20px"}}>
                    
The hospitality sector needs its own custom CRM solution because it deals with unique challenges, such as managing guest preferences, bookings, reservations, and personalized service. A custom CRM tailored to the industry can centralize guest data, track stay history, and provide insights into customer behaviors, allowing businesses to create highly personalized experiences. Unlike generic CRMs, a hospitality-specific solution can integrate seamlessly with property management systems (PMS), loyalty programs, and point-of-sale systems, enabling efficient operations. It can also automate tasks like reservation confirmations, special requests, and follow-up communications, enhancing guest satisfaction and operational efficiency.</p>
                  </div>
                  <div className="col-lg-6 col-md-7 cont valign">
                    <div className="full-widthhh">
                      <div className="tags mb-15">
                        <h4 style={{fontSize:"27px"}}>Key features to look for in a hospitality CRM </h4>
                      </div>
                     <ul style={{padding:"0px",lineHeight:"35px"}}>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Centralized database to store guest preferences, history.</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Reservation Management</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Automated Communication</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Multi-channel Integration</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Reporting and Analytics:</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Task Management</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/>Upselling and Cross-selling</li>
                      <li><CheckIcon style={{marginRight:"15px"}}/> Customer Support</li>
                     </ul>
                    </div>
                  </div>
            
              </div>
            </div>
          
          </div>
          </div>
   
      <section className="services section-padding" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="sec-head mb-50">
            
            <h6 className="sub-title mb-25  main-color"  style={{justifyContent:'center' , display:'flex', fontSize:"32px",textAlign:"center",fontWeight:'700'}}>Why is Puresaas CRM good for your automotive business?  </h6>
         
          </div>
          <div className="row">
            {Hospitalities.slice(0, 6).map((item, i) => (
              <div key={i} className="col-lg-4" style={{marginBottom:'20px'}}>
                <div className="item-box radius-15 md-mb30" style={{padding: "33px 26px"}}>
                  <div className="icon mb-40 opacity-5">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="mb-15">{item.title}</h5>
              
                
              <p style={{listStyle:'disc', marginBottom:'10px'}}>{item.first}</p>
             
            
  
                </div>
              </div>
            ))}
          </div>
  
        
        </div>
      </section>
  
                          
  
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </>
    )
}

export default Hospitality