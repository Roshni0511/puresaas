import React from "react";
import { useState } from "react";

const categories = [
  { name: "Real Estate Agent CRM", link: "/RealEstateAgentCRM" },
  { name: "Real Estate CRM", link: "/Realestatecrm" },
  { name: "Sales CRM", link: "/salescrm" },
  { name: "Service CRM", link: "/Servicecrm" },
  { name: "B2B Textile ERP", link: "/b2bcrm" },
  { name: "Telecaller CRM", link: "/telecallercrm" },
  { name: "ATS (Application Tracking System)", link: "/ATS" },
  { name: "Payroll System", link: "/PayrollSystem" },
  { name: "Office ERP", link: "/Officeerp" }
];
function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-7">
            <div className="md-mb80">
              <div className="item mb-50">
                <div className="img">
                  <img src="/dark/assets/imgs/blog/blogcrm.png" alt="" />
                </div>
                <div className="content main-bg">
                  <div className="d-flex align-items-center mb-15">
                    <div className="post-date">20 July 2020</div>
                    <div className="commt opacity-7 fz-13">
                      <span className="ti-comment-alt mr-10"></span>4 Comments
                    </div>
                  </div>
                  <h4 className="mb-15">
                    <a href="/blogdetails">
                      Secure and Reliable CRM Solutions
                    </a>
                  </h4>
                  <p>
                    Data security is our top priority.Puresaas CRM adheres to
                    industry-leading security standards to safeguard your
                    sensitive information. With robust encryption, regular
                    security updates, and compliance with regulations like GDPR,
                    you can rest assured that your data is protected at all
                    times.
                  </p>
                  <a
                    href="/blogdetails"
                    className="d-flex align-items-center mt-40"
                  >
                    <span className="text mr-15">Read More</span>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
              <div className="item mb-50">
                <div className="img">
                  <img src="/dark/assets/imgs/blog/tools1.png" alt="" />
                </div>
                <div className="content main-bg">
                  <div className="d-flex align-items-center mb-15">
                    <div className="post-date">20 July 2020</div>
                    <div className="commt opacity-7 fz-13">
                      <span className="ti-comment-alt mr-10"></span>4 Comments
                    </div>
                  </div>
                  <h4 className="mb-15">
                    <a href="/blogdetails">
                      Lead Capture and CRM Integration
                    </a>
                  </h4>
                  <p>
                    Effective lead management is critical for converting website
                    visitors into clients. Implement lead capture forms
                    strategically throughout the website, offering visitors the
                    option to subscribe to alerts, schedule viewings, or request
                    more information.
                  </p>
                  <a
                    href="/blogdetails"
                    className="d-flex align-items-center mt-40"
                  >
                    <span className="text mr-15">Read More</span>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img src="/dark/assets/imgs/blog/tools2.png" alt="" />
                </div>
                <div className="content main-bg">
                  <div className="d-flex align-items-center mb-15">
                    <div className="post-date">20 July 2020</div>
                    <div className="commt opacity-7 fz-13">
                      <span className="ti-comment-alt mr-10"></span>4 Comments
                    </div>
                  </div>
                  <h4 className="mb-15">
                    <a href="/blogdetails">
                      Comprehensive Customer Management
                    </a>
                  </h4>
                  <p>
                    Centralize all customer data, interactions, and transactions
                    in one place for a 360-degree view of your relationships.
                    From contact details and communication history to purchase
                    patterns and support tickets, our CRM empowers you to
                    deliver personalized experiences and build lasting customer
                    loyalty.
                  </p>
                  <a
                    href="/blogdetails"
                    className="d-flex align-items-center mt-40"
                  >
                    <span className="text mr-15">Read More</span>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
            <div>
      <div className="search-box">
        <input
          type="text"
          name="search-post"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="icon pe-7s-search"></span>
      </div>
      <div className="widget catogry">
        <h6 className="title-widget">Categories</h6>
        <ul className="rest">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <a key={index} href={category.link}>
                <li>
                  <span>{category.name}</span>
                </li>
              </a>
            ))
          ) : (
            <li>No categories found</li>
          )}
        </ul>
      </div>
    </div>



              <div className="widget last-post-thum">
                <h6 className="title-widget">latest Posts</h6>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="">
                        <img src="/dark/assets/imgs/blog/balog3.png" alt="" />
                        <span className="date">
                          <span>
                            14 / <br /> sep
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <span className="tag">
                      <a href="">Web Design</a>
                    </span>
                    <h6>
                      <a href="">
                        Advanced Analytics and Reporting
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="">
                        <img src="/dark/assets/imgs/blog/balog2.png" alt="" />
                        <span className="date">
                          <span>
                            14 / <br /> sep
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <span className="tag">
                      <a href="">Web Design</a>
                    </span>
                    <h6>
                      <a href="">
                        Automation and Workflow Efficiency
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="">
                        <img src="/dark/assets/imgs/blog/blaog1.png" alt="" />
                        <span className="date">
                          <span>
                            14 / <br /> sep
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <span className="tag">
                      <a href="">Web Design</a>
                    </span>
                    <h6>
                      <a href="">Customizable Solutions</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <a href="">Data Analytics</a>
                  <a href="">Data Security</a>
                  <a href="">User-friendly CRM</a>
                  <a href="">Workflow Optimization</a>
                  {/* <a href="#0">Infolio</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
