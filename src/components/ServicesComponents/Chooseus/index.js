import React from 'react';
import Tilt from 'react-parallax-tilt';
export default function Chooseus() {
  return (
    <section className="chooseus-section bg-color-1">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div id="content_block_08">
              <div className="content-box">
                <div className="top-box">
                  <div
                    className="sec-title wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms">
                    <p>People Love Us</p>
                    <h2>Why Choose Us?</h2>
                  </div>
                  <div
                    className="text wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms">
                    <p>
                      Dolor sit amet consectetur elit sed eiusmod tempor incidi
                      dunt labore dolore magna aliqua enim ad minim veniam quis
                      nostrud.
                    </p>
                  </div>
                </div>
                <div
                  className="inner-box clearfix wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms">
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="flaticon-machine-learning"></i>
                    </div>
                    <h3>Data for All Your People</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="flaticon-data-integration"></i>
                    </div>
                    <h3>A New Breed of AI</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="flaticon-robot"></i>
                    </div>
                    <h3>Analytics Business</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div id="image_block_07">
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
                  <img src="images/service/service-1.png" alt="" />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
