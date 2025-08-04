import React from 'react'

export default function Homeprinciples() {
  return (
    <div style={{paddingTop:'120px'}}>
      
      <div className='container' >
        <div className='hometop' style={{color:'black',position:'relative',marginBottom:'20px', }}>
        {/* <h4  ></h4> */}
        <h2 className="fw-600 d-rotate wow" style={{textAlign:'center',color:'#fff'}}>
              <span className="rotate-text mb-40" style={{textAlign:'left'}}>
              The core values and principles that drive us
              </span>
            </h2>
      <div className='row p-4'>
        <div className="col-12 col-md-4 mt-2 ">
            <img src="/dark/assets/imgs/icon-img/commit1.png" alt="" style={{width:'70px'}} className='opacity-5'/>
        <h6 style={{color:"#fff",margin:'12px 0px'}}>Long-term commitment</h6>
        <p style={{color:'#c6c8c9',paddingRight:'20px'}}>
        Dedication over time leads to growth, trust, and success. Staying focused through challenges ensures continuous progress and meaningful results. True commitment drives resilience, innovation, and lasting impact.</p>
        </div>
        <div className="col-12 col-md-4 mt-2">
         <img src="/dark/assets/imgs/icon-img/commit2.png" alt="" style={{width:'70px'}} className='opacity-5'/>
        <h6 style={{color:"#fff",margin:'12px 0px',fontSize:'19px'}}>Focus on research and development</h6>
        <p style={{color:'#c6c8c9',paddingRight:'20px'}}>Research and development drive innovation and progress. Continuous improvement and adaptation ensure cutting-edge solutions, keeping businesses ahead in a rapidly evolving world. </p>
        </div>
        <div className="col-12 col-md-4 mt-2">
        <img src="/dark/assets/imgs/icon-img/commit3.png" alt="" style={{width:'70px'}} className='opacity-5'/>
        <h6 style={{color:"#fff",margin:'12px 0px'}}>Customer-first philosophy</h6>
        <p style={{color:'#c6c8c9',paddingRight:'20px'}}>A customer-first philosophy prioritizes needs, satisfaction, and experience. By understanding and adapting to customer expectations, businesses build trust, loyalty, and long-term success. </p>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
