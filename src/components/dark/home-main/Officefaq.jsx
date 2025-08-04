import React from 'react'

const Officefaq = () => {
  return (
    <>
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
                    
                      What is Office ERP, and how does it help businesses?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Office ERP (Enterprise Resource Planning) is a software solution that integrates various business processes such as HR, finance, inventory, sales, and customer management into a single platform.
                    </p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title">
                    <h6>
                    How secure is Office ERP for storing business data?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Office ERP uses advanced security protocols, including data encryption, role-based access control, and regular backups, to ensure the safety and confidentiality of your business information.
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
                     
                      How Can Office ERP Improve Business Efficiency?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Office ERP streamlines business operations by automating routine tasks, reducing paperwork, and improving communication between departments.
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="title">
                    <h6> 
                    Is Office ERP suitable for small and medium businesses ?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-30">
                    It offers scalable solutions that can be customized based on your specific needs, making it an ideal choice for SMBs looking to streamline their operations without high costs.
                    </p>
                  
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6>
                      {" "}
                      
                      Can Office ERP be integrated with existing software?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Absolutely! Office ERP supports seamless integration with third-party applications such as accounting software, CRM tools, e-commerce platforms, and payment gateways, ensuring smooth data flow across all business functions.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title">
                    <h6> Does Office ERP require extensive training to use?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    No, Office ERP is designed with an intuitive interface and user-friendly dashboards. Most employees can start using it with minimal training, and dedicated support is available for onboarding assistance.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6>
                      {" "}
                     
                      Can Office ERP be accessed remotely?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Yes, with cloud-based Office ERP, you can access your business data anytime, anywhere, using any internet-enabled device. This ensures flexibility and uninterrupted workflow, even in remote working conditions.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6> 
                    What are the key benefits of using Office ERP?
                    </h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Office ERP helps businesses automate tasks, reduce manual errors, improve customer relationships, enhance team collaboration, and provide real-time insights for better decision-making. 
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
    </>
  )
}

export default Officefaq