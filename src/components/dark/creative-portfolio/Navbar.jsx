import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-15">
        <div className="container">
          <a className="logo icon-img-100" href="#">
            <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          </a>

          <div className="topnav">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu">
        <div className="logo icon-img-100">
          <img src="/dark/assets/imgs/logo-light.png" alt="" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/dark/home-main" className="sub-link">
                            Main Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-startup-onepage"
                            className="sub-link"
                          >
                            Modern Startup
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Creative Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-modern-agency"
                            className="sub-link"
                          >
                            Modern Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-portfolio"
                            className="sub-link"
                          >
                            Creative Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-digital-agency"
                            className="sub-link"
                          >
                            Digital Agency
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-freelancer" className="sub-link">
                            Freelancer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-personal-vcard"
                            className="sub-link"
                          >
                            Personal vCard
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-minimal-portfolio"
                            className="sub-link"
                          >
                            Minimal Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-asymmetric-portfolio"
                            className="sub-link"
                          >
                            Asymmetric Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Pages">
                          Pages
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="About Us">
                                About Us
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-about" className="sub-link">
                                  About Us v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-about2"
                                  className="sub-link"
                                >
                                  About Us v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/Enterprise"
                                  className="sub-link"
                                >
                                  About Us v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Services">
                                Services
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/dark/page-services"
                                  className="sub-link"
                                >
                                  Services v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-services2"
                                  className="sub-link"
                                >
                                  Services v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-services-details"
                                  className="sub-link"
                                >
                                  Services Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Contact">
                                Contact
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/dark/page-contact"
                                  className="sub-link"
                                >
                                  Contact v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-contact2"
                                  className="sub-link"
                                >
                                  Contact v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/contactus"
                                  className="sub-link"
                                >
                                  Contact v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Team">
                                Team
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-team" className="sub-link">
                                  Our Team
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-team-single"
                                  className="sub-link"
                                >
                                  Team Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Others">
                                Others
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/faq" className="sub-link">
                                  FAQS
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-error-404"
                                  className="sub-link"
                                >
                                  Error 404
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Portfolio">
                          Portfolio
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span
                                className="fill-text"
                                data-text="Portfolio Type"
                              >
                                Portfolio Type
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/dark/portfolio-standard"
                                  className="sub-link"
                                >
                                  Standerd
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-gallery"
                                  className="sub-link"
                                >
                                  Gallery
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-metro"
                                  className="sub-link"
                                >
                                  Metro
                                </a>
                              </li>
                              <li>
                                <a href="/dark/masonry" className="sub-link">
                                  Masonry
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-caption-curso"
                                  className="sub-link"
                                >
                                  Caption Cursor
                                </a>
                              </li>
                              <li>
                                <a href="/dark/outline" className="sub-link">
                                  Outline
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-parallax"
                                  className="sub-link"
                                >
                                  Parallax
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-sticky"
                                  className="sub-link"
                                >
                                  Sticky
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Showcases">
                                Showcases
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/dark/showcase-fullscreen"
                                  className="sub-link"
                                >
                                  Parallax Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-carousel"
                                  className="sub-link"
                                >
                                  Showcase Carousel
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-half-slider"
                                  className="sub-link"
                                >
                                  Creative Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-interactive-full"
                                  className="sub-link"
                                >
                                  Interactive Full
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-interactive-center"
                                  className="sub-link"
                                >
                                  Interactive Center
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-interactive-vertical"
                                  className="sub-link"
                                >
                                  Interactive Vertical
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span
                                className="fill-text"
                                data-text="Portfolio Single"
                              >
                                Portfolio Single
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/project1" className="sub-link">
                                  project1
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project2" className="sub-link">
                                  project2
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project3" className="sub-link">
                                  project3
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project4" className="sub-link">
                                  project4
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project5" className="sub-link">
                                  project5
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project6" className="sub-link">
                                  project6
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Blogs">
                          Blogs
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a className="sub-link" href="/dark/blog">
                            Standard
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blog-list">
                            Blog List
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blog-list2">
                            Blog List 2
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blogdetails">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="/dark/contactus" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="#0">Hello@email.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
