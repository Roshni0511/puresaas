import React from 'react'
import affiliate from '../../../data/AffiliateWork.json'

export default function AffiliateWork() {
    return (
        <section className="services section-padding" style={{paddingTop:'20px'}}>
          <div className="container">
            <span style={{display:'flex',justifyContent:'center',marginTop:'20px',marginBottom:"10px",fontSize:"25px"}}>Affiliate Program</span>
          <h3 className="fw-600 d-rotate wow" style={{display:'flex',justifyContent:'center'}}>
              <span className="rotate-text mb-80">
              HOW AFFILIATE WORKS
              </span>
            </h3>
           <div className="row">
          {affiliate.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4 mb-20">
              <div className="item-box radius-15 md-mb30" style={{minHeight:'100%'}}>
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15">{item.title}</h5>
                <p>{item.desc}</p>
                {/* <a href={item.link} className="rmore mt-30">
                  <span className="sub-title">Read More</span>
                  <img
                    src="/dark/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </a> */}
              </div>
            </div>
          ))}
        </div>
        
          </div>
        </section>
      );
}
