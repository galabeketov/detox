import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

export default function MainHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="main-header">
        <div className="outer-container">
          <div className="header-upper clearfix">
            <div className="outer-box pull-left">
              <div className="logo-box pull-left">
                <figure className="logo">
                  <a href="/">
                    <img src="images/logo.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area pull-left">
                {/* <!--Mobile Navigation Toggler--> */}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="/">
                          Home <FaAngleDown />
                        </a>
                        <ul>
                          <li>
                            <a onClick={() => navigate('/')}>Home Page One</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/homepagetwo')}>
                              Home Page Two
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/homepagethree')}>
                              Home Page Three
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/homeboxed')}>
                              Home Boxed
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/homeonepage')}>
                              Home OnePage
                            </a>
                          </li>
                          <li className="dropdown">
                            <a onClick={() => navigate('/homepage')}>
                              Home Page
                            </a>
                            <ul>
                              <li>
                                <a onClick={() => navigate('/')}>
                                  Home Page One
                                </a>
                              </li>
                              <li>
                                <a onClick={() => navigate('/homepagetwo')}>
                                  Home Page Two
                                </a>
                              </li>
                              <li>
                                <a onClick={() => navigate('/homepagethree')}>
                                  Home Page Three
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a onClick={() => navigate('/service')}>
                          Services <FaAngleDown />
                        </a>
                        <ul>
                          <li>
                            <a onClick={() => navigate('/serviceone')}>
                              Services One
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/servicetwo')}>
                              Services Two
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a onClick={() => navigate('/')}>
                          Pages
                          <FaAngleDown />
                        </a>
                        <ul className="megamenu">
                          <li>
                            <a onClick={() => navigate('/aboutus')}>About Us</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Services One
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Team Elements 02
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Feature Elements 01
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/portfolio')}>
                              Portfolio Grid
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Services Two
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Counter Elements 01
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Feature Elements 02
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/portfolio')}>
                              Portfolio Masonry
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/error')}>Error Page</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Counter Elements 02
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/aboutus')}>
                              About Elements 01
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/portfolio')}>
                              Portfolio Details
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/grid')}>Blog Grid</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/grid')}>Contact</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/aboutus')}>
                              About Elements 02
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>Our Team</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/blog')}>
                              Blog Masonry
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/service')}>
                              Service Elements
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>
                              Process Elements 01
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>Faq's</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/blog')}>
                              Blog Standard
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>
                              Faq's Elements
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>
                              Process Elements 02
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>
                              Pricing Plan
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/blog')}>
                              Blog Details
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>
                              Choose Elements
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>
                              Team Elements 01
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a onClick={() => navigate('/team')}>
                          Elements <FaAngleDown />
                        </a>
                        <ul>
                          <li className="dropdown">
                            <a href="index-3.html">Feature Elements</a>
                            <ul>
                              <li>
                                <a onClick={() => navigate('/service')}>
                                  Feature Elements 01
                                </a>
                              </li>
                              <li>
                                <a onClick={() => navigate('/service')}>
                                  Feature Elements 02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="index-3.html">About Elements</a>
                            <ul>
                              <li>
                                <a href="about-element-1.html">
                                  About Elements 01
                                </a>
                              </li>
                              <li>
                                <a href="about-element-2.html">
                                  About Elements 02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="index-3.html">Blog Elements</a>
                            <ul>
                              <li>
                                <a href="blog-element-1.html">
                                  Blog Elements 01
                                </a>
                              </li>
                              <li>
                                <a href="blog-element-2.html">
                                  Blog Elements 02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="index-3.html">Process Elements</a>
                            <ul>
                              <li>
                                <a href="process-element-1.html">
                                  Process Elements 01
                                </a>
                              </li>
                              <li>
                                <a href="process-element-2.html">
                                  Process Elements 02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="index-3.html">Counter Elements</a>
                            <ul>
                              <li>
                                <a onClick={() => navigate('/service')}>
                                  Counter Elements 01
                                </a>
                              </li>
                              <li>
                                <a onClick={() => navigate('/service')}>
                                  Counter Elements 02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="index-3.html">Team Elements</a>
                            <ul>
                              <li>
                                <a href="team-element-1.html">
                                  Team Elements 01
                                </a>
                              </li>
                              <li>
                                <a href="team-element-2.html">
                                  Team Elements 02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="service-element.html">Service Elements</a>
                          </li>
                          <li>
                            <a href="faq-element.html">Faq's Elements</a>
                          </li>
                          <li>
                            <a href="choose-element.html">Choose Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a onClick={() => navigate('/blog')}>Blog</a>
                        <ul>
                          <li>
                            <a onClick={() => navigate('/blog')}>Blog Grid</a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/team')}>
                              Blog Masonry
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/blog')}>
                              Blog Standard
                            </a>
                          </li>
                          <li>
                            <a onClick={() => navigate('/blog')}>
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a onClick={() => navigate('/blog')}>Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="menu-right-content pull-right">
              <div className="phone">
                Call Us <a href="tel:880762009">+880.762.009</a>
              </div>
              <div className="btn-box">
                <a href="index-3.html">Login</a>
              </div>
            </div>
          </div>
        </div>

        {/* <!--sticky Header--> */}
        <div className="sticky-header">
          <div className="container clearfix">
            <figure className="logo-box">
              <a href="index.html">
                <img src="images/small-logo.png" alt="" />
              </a>
            </figure>
            <div className="menu-area">
              <nav className="main-menu clearfix">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="/">
                        Home <FaAngleDown />
                      </a>
                      <ul>
                        <li>
                          <a onClick={() => navigate('/')}>Home Page One</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homepagetwo')}>
                            Home Page Two
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homepagethree')}>
                            Home Page Three
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homeboxed')}>
                            Home Boxed
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/homeonepage')}>
                            Home OnePage
                          </a>
                        </li>
                        <li className="dropdown">
                          <a onClick={() => navigate('/homepage')}>Home Page</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/')}>Home Page One</a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/homepagetwo')}>
                                Home Page Two
                              </a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/homepagethree')}>
                                Home Page Three
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a onClick={() => navigate('/service')}>
                        Services <FaAngleDown />
                      </a>
                      <ul>
                        <li>
                          <a onClick={() => navigate('/serviceone')}>
                            Services One
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/servicetwo')}>
                            Services Two
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a onClick={() => navigate('/')}>
                        Pages
                        <FaAngleDown />
                      </a>
                      <ul className="megamenu">
                        <li>
                          <a onClick={() => navigate('/aboutus')}>About Us</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Services One
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Team Elements 02
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Feature Elements 01
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/portfolio')}>
                            Portfolio Grid
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Services Two
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Counter Elements 01
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Feature Elements 02
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/portfolio')}>
                            Portfolio Masonry
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/error')}>Error Page</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Counter Elements 02
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/aboutus')}>
                            About Elements 01
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/portfolio')}>
                            Portfolio Details
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/grid')}>Blog Grid</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/grid')}>Contact</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/aboutus')}>
                            About Elements 02
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>Our Team</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/blog')}>Blog Masonry</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/service')}>
                            Service Elements
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>
                            Process Elements 01
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>Faq's</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/blog')}>Blog Standard</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>
                            Faq's Elements
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>
                            Process Elements 02
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>Pricing Plan</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/blog')}>Blog Details</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>
                            Choose Elements
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>
                            Team Elements 01
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a onClick={() => navigate('/team')}>
                        Elements <FaAngleDown />
                      </a>
                      <ul>
                        <li className="dropdown">
                          <a href="index-3.html">Feature Elements</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Feature Elements 01
                              </a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Feature Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">About Elements</a>
                          <ul>
                            <li>
                              <a href="about-element-1.html">
                                About Elements 01
                              </a>
                            </li>
                            <li>
                              <a href="about-element-2.html">
                                About Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Blog Elements</a>
                          <ul>
                            <li>
                              <a href="blog-element-1.html">Blog Elements 01</a>
                            </li>
                            <li>
                              <a href="blog-element-2.html">Blog Elements 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Process Elements</a>
                          <ul>
                            <li>
                              <a href="process-element-1.html">
                                Process Elements 01
                              </a>
                            </li>
                            <li>
                              <a href="process-element-2.html">
                                Process Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Counter Elements</a>
                          <ul>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Counter Elements 01
                              </a>
                            </li>
                            <li>
                              <a onClick={() => navigate('/service')}>
                                Counter Elements 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index-3.html">Team Elements</a>
                          <ul>
                            <li>
                              <a href="team-element-1.html">Team Elements 01</a>
                            </li>
                            <li>
                              <a href="team-element-2.html">Team Elements 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="service-element.html">Service Elements</a>
                        </li>
                        <li>
                          <a href="faq-element.html">Faq's Elements</a>
                        </li>
                        <li>
                          <a href="choose-element.html">Choose Elements</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a onClick={() => navigate('/blog')}>Blog</a>
                      <ul>
                        <li>
                          <a onClick={() => navigate('/blog')}>Blog Grid</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/team')}>Blog Masonry</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/blog')}>Blog Standard</a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/blog')}>Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a onClick={() => navigate('/blog')}>Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
