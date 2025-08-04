import React from 'react'
import offer from '../../../data/Benifit.json'
export default function Benifit() {
    return (
        <section className="services  pb-20 " style={{paddingTop:'100px'}}>
          <div className="container">
            <div className="sec-head mb-80 fontmanage">
            
                <h2 className="fw-600 text-u ls1 fontmanage" style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
                Your Benefit 
                </h2>
               
            </div>
            <div className="row">
              {offer.map((item, i) => (
                <div key={i} className="col-md-6">
                  <div className="item-box2 mb-30" >
                    <div className="icon mb-40">
                      <img src={item.img} alt="" />
                    </div>
                    <h5 className="mb-15">{item.title}</h5>
                    <p>{item.desc}</p>
                    <p>{item.desc2}</p>
                    <a href={item.link} className="rmore">
                     
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
