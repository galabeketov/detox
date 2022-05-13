import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div
              className="feature-block-one wow flipInY"
              data-wow-delay="0ms"
              data-wow-duration="1500ms">
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.65}
                scale={1.01}
                gyroscope={true}
                className="inner-box js-tilt">
                <div className="icon-box">
                  <div className="anim-icon">
                    <span className="icon icon-1"></span>
                    <span className="icon icon-2"></span>
                    <span className="icon icon-3"></span>
                  </div>
                  <i className="flaticon-tools-and-utensils"></i>
                </div>
                <h3>
                  <a href="index.html">Data Monetization</a>
                </h3>
                <p>
                  Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                  tempor.
                </p>
                <div className="btn-box">
                  <a href="index.html" className="theme-btn style-two">
                    Learn More
                  </a>
                </div>
              </Tilt>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div
              className="feature-block-one wow flipInY"
              data-wow-delay="300ms"
              data-wow-duration="1500ms">
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.65}
                scale={1.01}
                gyroscope={true}
                className="inner-box js-tilt">
                <div className="icon-box">
                  <div className="anim-icon">
                    <span className="icon icon-1"></span>
                    <span className="icon icon-2"></span>
                    <span className="icon icon-3"></span>
                  </div>
                  <i className="flaticon-checked"></i>
                </div>
                <h3>
                  <a href="index.html">Manage Analytics</a>
                </h3>
                <p>
                  Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                  tempor.
                </p>
                <div className="btn-box">
                  <a href="index.html" className="theme-btn style-two">
                    Learn More
                  </a>
                </div>
              </Tilt>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div
              className="feature-block-one wow flipInY"
              data-wow-delay="600ms"
              data-wow-duration="1500ms">
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.65}
                scale={1.01}
                gyroscope={true}
                className="inner-box js-tilt">
                <div className="icon-box">
                  <div className="anim-icon">
                    <span className="icon icon-1"></span>
                    <span className="icon icon-2"></span>
                    <span className="icon icon-3"></span>
                  </div>
                  <i className="flaticon-pie-chart"></i>
                </div>
                <h3>
                  <a href="index.html">Business Intelligence</a>
                </h3>
                <p>
                  Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                  tempor.
                </p>
                <div className="btn-box">
                  <a href="index.html" className="theme-btn style-two">
                    Learn More
                  </a>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
