import React from 'react';
import Comprehensive from '../../../data/services.json';
function Services2() {
  return (
    <section className="services section-padding testimonials" style={{paddingTop:'50px'}}>
      <div className="container">
        <div className="sec-head mb-80">
          {/* <h6 className="sub-title main-color mb-25">Our Specialize</h6> */}
          <div className=" pt-25 d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
              Business Solution 
              </span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
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
        {/* <div
          className="serv-swiper"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <div 
            id="content-carousel-container-unq-serv"
            className="swiper-container"
            data-swiper="container"
          >
            <div className="swiper-wrapper" >
              {Comprehensive.slice(0, 6).map((item, i) => (
                <div key={i} className="swiper-slide" >
                  <div className="item-box radius-15"  >
                    <div className="icon mb-40 opacity-5">
                      <img src={item.img} alt="" />
                    </div>
                    <h5 className="mb-15">{item.title}</h5>
                    <p>{item.desc}</p>
                    <a href={item.link} className="rmore mt-30">
                      <span className="sub-title">Read More</span>
                      <img
                        src="/dark/assets/imgs/arrow-right.png"
                        alt=""
                        className="icon-img-20 ml-5"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div
  className="serv-swiper"
  data-carousel="swiper"
  data-loop="true"
  data-space="30"
>
  <div
    id="content-carousel-container-unq-serv"
    className="swiper-container"
    data-swiper="container"
  >
    <div
      className="swiper-wrapper"
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {Comprehensive.slice(0, 9).map((item, i) => (
        <div
          key={i}
          className="swiper-slide"
          style={{
            display: "flex",
            alignItems: "stretch",
            height: "auto",
          }}
        >
          <div
            className="item-box radius-15"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              // backgroundColor: "#fff",
              borderRadius: "15px",
            }}
          >
            <div
              className="icon mb-40 opacity-5"
              style={{
                marginBottom: "40px",
                opacity: "0.5",
              }}
            >
              <img src={item.img} alt="" />
            </div>
            <h5
              className="mb-15"
              style={{
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h5>
            <p>{item.desc}</p>
            <a
              href={item.link}
              className="rmore mt-30"
              style={{
                marginTop: "30px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <span className="sub-title">Read More</span>
              <img
                src="/dark/assets/imgs/arrow-right.png"
                alt=""
                className="icon-img-20 ml-5"
                style={{
                  marginLeft: "5px",
                  width: "20px",
                }}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
      <div class="line-overlay up opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style={{strokeDasharray: "3246.53"}}></path></svg></div>
    </section>
  );
}

export default Services2;
