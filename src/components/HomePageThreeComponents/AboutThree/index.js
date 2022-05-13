import React from "react";

export default function AboutThree() {
  return (
    <section className="about-section style-three">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(images/shape/pattern-14.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
            <div id="image_block_05">
              <div className="image-box">
                <figure
                  className="image image-1 wow slideInLeft"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <img src="images/resource/screen-1.png" alt="" />
                </figure>
                <figure
                  className="image image-2 wow slideInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <img src="images/resource/screen-2.png" alt="" />
                </figure>
                <figure className="image image-3 float-bob-y">
                  <img src="images/resource/men-1.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 content-column">
            <div id="content_block_01">
              <div className="content-box">
                <div
                  className="sec-title wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <p>About Detox</p>
                  <h2>Get Tips & Tricks on How to Growth Your business.</h2>
                </div>
                <div
                  className="text wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <p>
                    Dolor sit amet consectetur elit sed eiusmod tempor incidi
                    dunt labore dolore magna aliqua enim ad minim veniam quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    commodo consequat.duis aute irure dolor in reprehenderit.
                  </p>
                </div>
                <ul
                  className="list-item clearfix wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <li>Various Analysis Options</li>
                  <li>Page Load Details (time, size, number of requests)</li>
                  <li>Waterfall, Video and Report History</li>
                </ul>
                <div
                  className="btn-box wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
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
