import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function ProcessSection() {
  return (
    <section className="process-section bg-color-1">
      <div className="pattern-box">
        <div
          className="pattern-1 wow slideInDown animated"
          data-wow-delay="500ms"
          data-wow-duration="1500ms"
          style={{ backgroundImage: 'url(images/shape/pattern-3.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 content-column">
            <div id="content_block_02">
              <div className="content-box">
                <div
                  className="sec-title wow slideInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms">
                  <p>How it Works</p>
                  <h2>How Dotex Works?</h2>
                </div>
                <div
                  className="text wow slideInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms">
                  <p>
                    Dolor sit amet consectetur elit sed eiusmod tempor incidi
                    dunt labore dolore magna aliqua enim ad minim veniam quis
                    nostrud.
                  </p>
                </div>
                <div
                  className="inner-box wow slideInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms">
                  <div className="single-item">
                    <div className="count-box">1</div>
                    <h3>
                      <a href="index.html">Data for All Your People</a>
                    </h3>
                    <div className="text">
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="count-box">2</div>
                    <h3>
                      <a href="index.html">A New Breed of AI</a>
                    </h3>
                    <div className="text">
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="count-box">3</div>
                    <h3>
                      <a href="index.html">Analytics Business</a>
                    </h3>
                    <div className="text">
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
            <div id="image_block_02">
              <div
                className="image-box wow slideInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms">
                <Tilt
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.65}
                  scale={1.01}
                  gyroscope={true}
                  className="image js-tilt">
                  <img src="images/resource/illustration-3.png" alt="" />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
