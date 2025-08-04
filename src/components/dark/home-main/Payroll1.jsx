import React from 'react'
import offeres12 from '../../../data/portfolios/Payroll2.json'
import { Helmet } from 'react-helmet';
export default function Payroll1() {
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
           <section className="services section-padding pb-0">
              <div className="container">
              <div className="sec-head mb-50">
                <h6 style={{color:'#8c8c8c' , marginBottom:'10px', justifyContent:'center' , display:'flex', }}>We Offer</h6>
              <h6 className="sub-title  mb-25 fontmanage" style={{justifyContent:'center' , display:'flex', fontSize:"35px"}}>FEATURES INCLUDED</h6>
            </div>
           
                <div className="row offercard">
                  {offeres12.map((item, i) => (
                    <div key={i} className="col-md-6">
                      <div className="item-box2 mb-30" style={{display:'flex',background:'none',padding:'25px'}}>
                        <div className="icons " >
                          <img src={item.img} alt="" />
                        </div>
                        <div>
                        <h5 className="mb-15">{item.title}</h5>
                        <p style={{textAlign:'justify'}}>{item.p}</p>
                 
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    
                <div style={{paddingTop:'60px'}}>
                    <div>
                        <h4 style={{justifyContent:'center' , display:'flex',marginBottom:'20px'}} className='newfont'>Benefits of a Payroll CRM software</h4>
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
        </>
      )
}
