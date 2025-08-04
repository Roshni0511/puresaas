import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-crev">
        <div className="container">
          <a className="logo icon-img-100" href="#">
            <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#0" data-scroll-nav="0">
                  <span className="rolling-text">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0" data-scroll-nav="1">
                  <span className="rolling-text">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0" data-scroll-nav="2">
                  <span className="rolling-text">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0" data-scroll-nav="3">
                  <span className="rolling-text">Portfolio</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0" data-scroll-nav="4">
                  <span className="rolling-text">Team</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0" data-scroll-nav="5">
                  <span className="rolling-text">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0" data-scroll-nav="6">
                  <span className="rolling-text">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="topnav">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu one-scroll">
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
                  <li data-scroll-nav="0">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="1">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Services">
                          Services
                        </span>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="2">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="About">
                          About
                        </span>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="3">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Portfolio">
                          Portfolio
                        </span>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="4">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Team">
                          Team
                        </span>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="5">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Blogs">
                          Blogs
                        </span>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="6">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Contact">
                          Contact
                        </span>
                      </div>
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
