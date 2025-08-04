import React from 'react'
import { useState } from 'react';

export default function Homeenterprice() {
  return (
    <div >
      
      <div className='container mt-60'>
        <div className='row' style={{display:'flex',alignItems:'center'}} >
            <div className='col-12 col-md-6 mt-2 p-4'>
                <div>
                    <img src="/dark/assets/imgs/icon-img/ENT1.png" alt="" />
                </div>
               <div className=' mt-3'>
               <div >
                    <p>"With our complete business under control, our productivity is up by 80% in the last year that we have been using Puresaas."</p>
                    {/* <span className='mt-3'>Thomas John</span> <br/> */}
                    {/* <span >Managing Director, Agappe Diagnostics</span> */}
                </div>
                
               </div>
            </div>
            <div className='col-12 col-md-6 mt-2 p-4'>
               <div>
               <img src="/static/media/logoo.be8eaa85e646348a4ea1.png" alt="" style={{width:'200px'}}/>
            <p className='mt-3 mb-4'> Experience the breadth and depth of the Puresaas ecosystem, with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.</p>
            <a href='/Enterprise' style={{background: "white",padding: "10px 20px",color:'black',fontWeight:'500'}}>Learn more</a>
               </div>
            </div>
        </div>
      </div>
    </div>    
  )
}

