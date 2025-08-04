import React from "react";

function FAQS() {
  return (
    <section className="faqs section-padding position-re">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="sec-head md-mb80" style={{ paddingBottom: "10px" }}>
              <h6 className="sub-title main-color mb-15">FAQS</h6>
              <h2 className="fontmanage">
                Frequently <br /> asked questions
              </h2>
            </div>
            <div className="list-serv">
              <div className="accordion bord">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title">
                    <h6>
                      {" "}
                      Can CRM software integrate with other tools we already
                      use?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Yes, most modern CRM solutions offer integration
                      capabilities with popular business tools such as email
                      marketing platforms, accounting software, customer support
                      systems, and more. Integration ensures seamless data flow
                      and enhances overall efficiency.
                    </p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title">
                    <h6> How does CRM software help with customer service?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      CRM software improves customer service by centralizing
                      customer information, enabling personalized interactions,
                      tracking customer issues and inquiries, and facilitating
                      timely responses and resolutions.
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
                      What is CRM software, and how can it benefit my business?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      CRM (Customer Relationship Management) software helps
                      businesses manage interactions with current and potential
                      customers, streamline processes, and improve customer
                      relationships. It centralizes customer data, automates
                      sales and marketing tasks, and provides insights to
                      enhance decision-making and business efficiency.
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="title">
                    <h6> How do I know if my business needs CRM software?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-30">
                      If your business struggles with managing customer
                      relationships, tracking sales opportunities, or
                      maintaining efficient communication across teams, CRM
                      software can significantly benefit you. It helps
                      businesses of all sizes enhance productivity, boost sales,
                      and improve customer satisfaction.
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
                      How does CRM software help with sales and marketing
                      efforts?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      CRM software enhances sales and marketing efforts by
                      providing tools for lead generation, lead nurturing,
                      campaign management, customer segmentation, personalized
                      marketing communications, and performance analytics to
                      optimize strategies.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title">
                    <h6> Is CRM software difficult to implement and use?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      The ease of implementation and use varies depending on the
                      CRM solution. Look for platforms that offer user-friendly
                      interfaces, intuitive design, and comprehensive training
                      and support options to facilitate adoption among your team
                      members.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6>
                      {" "}
                      What type of support and training do you offer for
                      implementing CRM software?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      We provide comprehensive support, including initial setup
                      assistance, training sessions for your team, ongoing
                      technical support, and access to a knowledge base or help
                      center to address any questions or issues.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6> Is my data secure with CRM software?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Yes, ensuring data security is a priority. Our CRM
                      software complies with industry standards and regulations,
                      employs encryption protocols, conducts regular security
                      audits, and offers features for user permissions and
                      access control to protect your sensitive information.
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

export default FAQS;
