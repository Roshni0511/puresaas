import React from 'react'
import datas from '../../../data/Environment.json'
export default function Environment() {
    return (
        <section className="services section-padding testimonials" style={{paddingTop:'80px'}}>
          <div className="container">
          <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text mb-80">
              Seamless Solutions for Every Work Environment 
              </span>
            </h2>
           <div className="row">
          {datas.slice(0, 6).map((item, i) => (
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
        <div style={{display:'flex',justifyContent:'center'}}><button style={{padding:'9px 30px',border:'0px',borderRadius:'1.61765rem',fontWeight:'400'}}> <a href="/Solutions">Read More</a> </button></div>
          </div>
          <div class="line-overlay up opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style={{strokeDasharray: "3246.53"}}></path></svg></div>
        </section>
      );
}
