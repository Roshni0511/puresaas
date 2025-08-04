import React from 'react'

export default function SalesFAQ() {
    return (
        <section className="faqs section-padding position-re">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="sec-head md-mb80" style={{ paddingBottom: "10px" }}>
                  <h6 className="sub-title main-color mb-15">FAQS</h6>
                  <h2>
                    Frequently <br /> asked questions
                  </h2>
                </div>
                <div className="list-serv">
                  <div className="accordion bord">
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                      <div className="title">
                        <h6>
                          {" "}
                          What is a Sales CRM?
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        A Sales CRM (Customer Relationship Management) system is a software solution designed to manage and analyze customer interactions and data throughout the sales lifecycle. It helps streamline sales processes, improve customer relationships, and drive business growth.
                        </p>
                      </div>
                    </div>
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                      <div className="title">
                        <h6>What are the benefits of real-time sales insights?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        Real-time sales insights provide visibility into the sales pipeline, helping teams track progress, identify bottlenecks, and make informed decisions. This leads to more accurate forecasting and better management of sales opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="list-serv">
                  <div className="accordion bord">
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                      <div className="title">
                        <h6>
                          {" "}
                          How does a Sales CRM enhance customer relationship management?
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        A Sales CRM enhances customer relationship management by storing detailed information about customers, including interaction history and preferences. This data enables personalized communication and helps build stronger client relationships.
                        </p>
                      </div>
                    </div>
    
                    <div
                      className="item active mb-15 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="title">
                        <h6>What types of reports can a Sales CRM generate?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="mb-30">
                        A Sales CRM can generate various reports, including sales performance reports, lead conversion rates, pipeline status, and customer interactions. These reports provide insights into sales activities and help with strategic planning.
                        </p>
                        {/* <p className="mb-10">
                          Taken possession of my entire soul, like these sweet
                          mornings of spring which i enjoy with my whole.
                        </p>
                        <p className="">
                          Taken possession of my entire soul, like these sweet
                          mornings of spring which i enjoy with my whole.
                        </p> */}
                      </div>
                    </div>
    
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                      <div className="title">
                        <h6>
                          {" "}
                          How does a Sales CRM support sales forecasting?
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        Sales CRM systems support sales forecasting by analyzing historical data and current pipeline status to predict future sales performance. This helps with planning, resource allocation, and setting realistic sales targets.
                        </p>
                      </div>
                    </div>
    
                    <div className="item wow fadeInUp" data-wow-delay=".5s">
                      <div className="title">
                        <h6>Can a Sales CRM be customized to fit specific business needs?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        Yes,Sales CRM systems offer customization options, including customizable dashboards, workflows, and reporting features, allowing businesses to tailor the CRM to their specific sales processes and requirements.
                        </p>
                      </div>
                    </div>
    
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                      <div className="title">
                        <h6>
                          {" "}
                          How does a Sales CRM facilitate team collaboration?
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        A Sales CRM facilitates team collaboration by providing shared access to customer data, notes, and communication tools. This ensures that team members are aligned, can collaborate effectively, and have access to the information they need.
                        </p>
                      </div>
                    </div>
    
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                      <div className="title">
                        <h6>How does mobile access benefit sales teams?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        Mobile access allows sales teams to manage client interactions, update information, and access CRM data from their smartphones or tablets, enhancing flexibility and enabling them to work effectively while on-the-go.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-overlay up opacity-7">
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
        </section>
      );
}
