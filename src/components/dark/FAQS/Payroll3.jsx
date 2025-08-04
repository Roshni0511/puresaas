import React from 'react'

export default function Payroll3() {
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
                          What is a payroll system?
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        A payroll system is a software solution designed to manage and automate the calculation and distribution of employee salaries. It includes features such as salary calculation, tax deductions, attendance tracking, payslip generation, and compliance with legal requirements.
                        </p>
                      </div>
                    </div>
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                      <div className="title">
                        <h6>How does the payroll system calculate employee salaries?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        The payroll system calculates salaries based on predefined salary structures, employee attendance, leave records, overtime, bonuses, and applicable deductions such as taxes, insurance, and provident fund contributions. It automates the entire process to ensure accuracy and compliance.
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
                          Can the payroll system generate payslips?
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        Yes, the payroll system automatically generates digital payslips for employees after salary calculations. Employees can access their payslips through the self-service portal, which includes details like basic salary, allowances, deductions, and net pay.
                        </p>
                      </div>
                    </div>
    
                    <div
                      className="item active mb-15 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="title">
                        <h6>  How does the system handle taxes and compliance?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="mb-30">
                        The payroll system is configured to automatically apply tax rates based on local laws and regulations. It calculates income tax deductions, contributions to social security or provident funds, and ensures compliance with labor laws to avoid penalties.
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
                          Can the payroll system integrate with other software?
                         
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        Yes, the payroll system can integrate with accounting software, HR management systems, and payment gateways to streamline processes like financial reporting, tax filing, and salary disbursement.


                        </p>
                      </div>
                    </div>
    
                    <div className="item wow fadeInUp" data-wow-delay=".5s">
                      <div className="title">
                        <h6>Can I customize the payroll system to fit my business needs?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        Yes, the payroll system can be customized to suit your business requirements, such as salary components, benefits, and leave policies. It is flexible to adapt to different industries and business models.
                        </p>
                      </div>
                    </div>
    
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                      <div className="title">
                        <h6>
                          {" "}
                          What kind of support is available for the payroll system?
                        </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                       
                        We offer comprehensive support, including setup assistance, ongoing troubleshooting, and training for your HR and finance teams. Support is available through email, phone, and a knowledge base with FAQs and guides.


                        </p>
                      </div>
                    </div>
    
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                      <div className="title">
                        <h6>  How often is the payroll system updated?</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">
                        The payroll system is regularly updated to ensure compliance with changing tax laws, labor regulations, and software improvements. Updates are rolled out automatically, so your business always stays current with legal requirements.
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
