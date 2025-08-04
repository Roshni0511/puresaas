import React from 'react'

export default function ATSFaq() {
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
                    What is an Application Training System?
                  </h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                  An Application Training System is a comprehensive platform designed to provide training and support for software applications. It offers various learning modules, interactive content, and tools to help users effectively learn and utilize application features.
                  </p>
                </div>
              </div>
              <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div className="title">
                  <h6>What types of training content are available?</h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                  The system provides a range of training content, including interactive modules, user manuals, quizzes, and simulations. This diverse content supports different learning styles and ensures comprehensive understanding of application features.
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
                    Can the training system be scaled for different organizational sizes?
                  </h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                  Yes, the Application Training System is scalable and can be adapted to fit the size and needs of any organization. Whether you have a small team or a large workforce, the system can accommodate varying numbers of users and training requirements.
                  </p>
                </div>
              </div>

              <div
                className="item active mb-15 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="title">
                  <h6> What are the benefits of interactive simulations in training?</h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="mb-30">
                  Interactive simulations provide a realistic training environment where users can practice using applications without impacting live systems. They help employees build confidence, develop skills, and better understand application functionalities through hands-on experience.
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
                    Can the system integrate with other platforms?
                  </h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                  Yes, the Application Training System can integrate with other platforms such as HR systems, Learning Management Systems (LMS), and Customer Relationship Management (CRM) systems. Integration ensures seamless data flow and alignment with other organizational processes.
                  </p>
                </div>
              </div>

              <div className="item wow fadeInUp" data-wow-delay=".5s">
                <div className="title">
                  <h6>What support is available for users who encounter issues?</h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                  The system includes feedback and support tools, such as help desks, chat features, and discussion forums. These tools allow users to ask questions, provide feedback, and receive assistance with any issues that may arise during training.
                  </p>
                </div>
              </div>

              <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div className="title">
                  <h6>
                    {" "}
                    How does the system track employee progress?
                  </h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                  The system tracks employee progress through detailed analytics and reporting features. It monitors completion rates, assesses performance, and provides insights into areas where additional training may be needed.
                  </p>
                </div>
              </div>

              <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div className="title">
                  <h6>Can the system be used for ongoing professional development?</h6>
                  <span className="ico ti-plus"></span>
                </div>
                <div className="accordion-info">
                  <p className="">
                  Yes, the Application Training System supports ongoing professional development by providing continuous access to training resources and updates. Employees can engage in lifelong learning and skill enhancement through the system.
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
  )
}
