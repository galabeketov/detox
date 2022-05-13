import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <div
        className="pattern-layer wow slideInRight animated"
        data-wow-delay="500ms"
        data-wow-duration="1500ms"
        style={{ backgroundImage: 'url(images/shape/pattern-6.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title">
          <p>Pricing Table</p>
          <h2>Affordable Price</h2>
        </div>
        <div className="tabs-box">
          <div className="upper-box clearfix">
            <div className="text pull-left">
              <p>
                Dolor sit amet consectetur elit sed eiusmod tempor incidi dunt
                labore dolore magna aliqua enim ad minim veniam quis nostrud.
              </p>
            </div>
            <div className="tab-btn-box pull-right">
              <ul className="tab-btns tab-buttons clearfix">
                <li className="tab-btn active-btn" data-tab="#tab-1">
                  Monthly
                </li>
                <li className="tab-btn" data-tab="#tab-2">
                  Yearly
                </li>
              </ul>
            </div>
          </div>
          <div className="tabs-content">
            <div className="tab active-tab" id="tab-1">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                  <div className="pricing-block-one">
                    <Tilt
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.65}
                      scale={1.01}
                      gyroscope={true}
                      className="pricing-table js-tilt">
                      <div
                        className="pattern-box"
                        style={{
                          backgroundImage: 'url(images/shape/pattern-5.png)',
                        }}></div>
                      <div className="table-header">
                        <h5>Basic Plan</h5>
                        <h2>$20.00</h2>
                        <a href="index.html">Get 20 days free trial</a>
                      </div>
                      <div className="table-content">
                        <ul>
                          <li>
                            <i className="flaticon-verified"></i>Unlimited
                            campaigns
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Basic donor
                            data
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Team
                            fundraising
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Customizable
                            emails
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Complex
                            programs
                          </li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="index.html" className="theme-btn style-two">
                          Select Plan
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                  <div className="pricing-block-one active_block">
                    <Tilt
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.65}
                      scale={1.01}
                      gyroscope={true}
                      className="pricing-table js-tilt">
                      <div
                        className="pattern-box"
                        style={{
                          backgroundImage: 'url(images/shape/pattern-5.png)',
                        }}></div>
                      <div className="table-header">
                        <h5>Standard Plan</h5>
                        <h2>$30.00</h2>
                        <a href="index.html">Get 20 days free trial</a>
                      </div>
                      <div className="table-content">
                        <ul>
                          <li>
                            <i className="flaticon-verified"></i>Unlimited
                            campaigns
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Basic donor
                            data
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Team
                            fundraising
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Customizable
                            emails
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Complex
                            programs
                          </li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="index.html" className="theme-btn style-two">
                          Select Plan
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                  <div className="pricing-block-one">
                    <Tilt
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.65}
                      scale={1.01}
                      gyroscope={true}
                      className="pricing-table js-tilt">
                      <div
                        className="pattern-box"
                        style={{
                          backgroundImage: 'url(images/shape/pattern-5.png)',
                        }}></div>
                      <div className="table-header">
                        <h5>Premium Plan</h5>
                        <h2>$50.00</h2>
                        <a href="index.html">Get 20 days free trial</a>
                      </div>
                      <div className="table-content">
                        <ul>
                          <li>
                            <i className="flaticon-verified"></i>Unlimited
                            campaigns
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Basic donor
                            data
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Team
                            fundraising
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Customizable
                            emails
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Complex
                            programs
                          </li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="index.html" className="theme-btn style-two">
                          Select Plan
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab" id="tab-2">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                  <div className="pricing-block-one">
                    <Tilt
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.65}
                      scale={1.01}
                      gyroscope={true}
                      className="pricing-table js-tilt">
                      <div
                        className="pattern-box"
                        style={{
                          backgroundImage: 'url(images/shape/pattern-5.png)',
                        }}></div>
                      <div className="table-header">
                        <h5>Basic Plan</h5>
                        <h2>$50.00</h2>
                        <a href="index.html">Get 20 days free trial</a>
                      </div>
                      <div className="table-content">
                        <ul>
                          <li>
                            <i className="flaticon-verified"></i>Unlimited
                            campaigns
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Basic donor
                            data
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Team
                            fundraising
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Customizable
                            emails
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Complex
                            programs
                          </li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="index.html" className="theme-btn style-two">
                          Select Plan
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                  <div className="pricing-block-one active_block">
                    <Tilt
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.65}
                      scale={1.01}
                      gyroscope={true}
                      className="pricing-table js-tilt">
                      <div
                        className="pattern-box"
                        style={{
                          backgroundImage: 'url(images/shape/pattern-5.png)',
                        }}></div>
                      <div className="table-header">
                        <h5>Standard Plan</h5>
                        <h2>$70.00</h2>
                        <a href="index.html">Get 20 days free trial</a>
                      </div>
                      <div className="table-content">
                        <ul>
                          <li>
                            <i className="flaticon-verified"></i>Unlimited
                            campaigns
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Basic donor
                            data
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Team
                            fundraising
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Customizable
                            emails
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Complex
                            programs
                          </li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="index.html" className="theme-btn style-two">
                          Select Plan
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                  <div className="pricing-block-one">
                    <Tilt
                      perspective={1000}
                      glareEnable={true}
                      glareMaxOpacity={0.65}
                      scale={1.01}
                      gyroscope={true}
                      className="pricing-table js-tilt">
                      <div
                        className="pattern-box"
                        style={{
                          backgroundImage: 'url(images/shape/pattern-5.png)',
                        }}></div>
                      <div className="table-header">
                        <h5>Premium Plan</h5>
                        <h2>$90.00</h2>
                        <a href="index.html">Get 20 days free trial</a>
                      </div>
                      <div className="table-content">
                        <ul>
                          <li>
                            <i className="flaticon-verified"></i>Unlimited
                            campaigns
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Basic donor
                            data
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Team
                            fundraising
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Customizable
                            emails
                          </li>
                          <li>
                            <i className="flaticon-verified"></i>Complex
                            programs
                          </li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="index.html" className="theme-btn style-two">
                          Select Plan
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
