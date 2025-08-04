import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import Bookingbutton from './Bookingbutton';

const testi =[
    {
     "img": "/dark/assets/imgs/testim/user.jpg",
    "name": "Rahul Mehta",
      "desc": "Implementing Office ERP has completely transformed how we manage our operations. From finance to inventory tracking, everything is seamlessly integrated, saving us hours of manual work. Our productivity has skyrocketed, and decision-making has become faster with real-time analytics!"
    },
    {
      "img": "/dark/assets/imgs/testim/user.jpg",
      "name": "Pooja Sharma",
      "desc": "As a growing business, we struggled with tracking customer interactions and sales pipelines. Office ERP’s built-in CRM has made it effortless! We can now manage leads, automate follow-ups, and improve client relationships—all in one place. Our sales team loves the automation features!" 
    },
    {
      "img": "/dark/assets/imgs/testim/user.jpg",
      "name": " Amit Patel",
      "desc": "We were worried about shifting to an ERP system, but Office ERP’s intuitive design made onboarding a breeze. The cloud-based access allows our team to work from anywhere, and the security features ensure our data is always protected. Highly recommended!"
    },
    
  ]
const Officetesti = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
     const swiperOptions = {
                modules: [Navigation],
            
                spaceBetween: 30,
                speed: 1000,
                loop: true,
                navigation: {
                  nextEl: '.swiper-arrow-control .swiper-button-next',
                  prevEl: '.swiper-arrow-control .swiper-button-prev',
                },
              };
  return (
    <>
        
     <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-15">Testimonials</h6>
              <h3 className="fw-600 d-rotate wow">
                <span className="rotate-text">
                  What People <span className="fw-200">Say?</span>
                </span>
              </h3>
            </div>
          </div>
          <div className="col-lg-8 position-re">
            <div className="testim-swiper">
              <Swiper
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
                loop={true}
                {...swiperOptions}
              >
                {testi.slice(0, 3).map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256.721"
                            height="208.227"
                            viewBox="0 0 256.721 208.227"
                            className="qout-svg"
                          >
                            <path
                              data-name="Path"
                              d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                              transform="translate(121.55 640.568)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1"
                              opacity="0.322"
                            ></path>
                          </svg>
                          <p className="fz-30">{item.desc}</p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img src={item.img} alt="" />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>{item.name}</h5>
                       
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-arrow-control control-abslout">
              <div className="swiper-button-prev">
                <span className="ti-arrow-left"></span>
              </div>
              <div className="swiper-button-next">
                <span className="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small-line">
        <div className="line-overlay">
          <svg
            viewBox="0 0 1728 1101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
              style={{ strokeDasharray: 3246.53 }}
            ></path>
          </svg>
        </div>
      </div>
    </section> 

    <section className="services section-padding pb-0">
          <div className="container">
      <div style={{paddingTop:'80px'}}>
          <div>
                    <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px'}} className='fontmanage'>How Puresaas How Puresaas works for Office ERP CRM?</h3>
                </div>
                <div>
                  <p style={{fontSize:'20px', textAlign:'justify'}}>Puresaas offers a comprehensive solution for Office ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) that streamlines business operations and enhances customer relationships. By integrating various business functions like finance, inventory, sales, and human resources into a single platform, Puresaas ensures that organizations can manage their processes efficiently in real time.
</p>
                </div>
                <Bookingbutton />
          </div>

          </div>
        </section> 
    </>
  )
}

export default Officetesti