import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
            <div id="image_block_01">
              <div
                className="image-box wow slideInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms">
                <Tilt
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.65}
                  scale={1.01}
                  gyroscope={true}
                  className="image js-tilt">
                  <img src="images/resource/illustration-2.png" alt="" />
                </Tilt>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 content-column">
            <div id="content_block_01">
              <div className="content-box">
                <div
                  className="sec-title wow slideInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms">
                  <p>About Detox</p>
                  <h2>Detox Provides Realtime Data Solutions.</h2>
                </div>
                <div
                  className="text wow slideInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms">
                  <p>
                    Dolor sit amet consectetur elit sed eiusmod tempor incidi
                    dunt labore dolore magna aliqua enim ad minim veniam quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    commodo consequat.duis aute irure dolor in reprehenderit.
                  </p>
                </div>
                <ul
                  className="list-item clearfix wow slideInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms">
                  <li>Various Analysis Options</li>
                  <li>Page Load Details (time, size, number of requests)</li>
                  <li>Waterfall, Video and Report History</li>
                </ul>
                <div
                  className="btn-box wow slideInUp"
                  data-wow-delay="900ms"
                  data-wow-duration="1500ms">
                  <a href="about.html" className="theme-btn style-one">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
