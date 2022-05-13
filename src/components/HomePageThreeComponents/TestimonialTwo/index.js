import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Slider from 'react-slick';
export default function TestimonialTwo() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-style-two text-center">
      <div
        className="pattern-layer"
        style={{ backgroundImage: 'url(images/shape/pattern-17.png)' }}></div>
      <div className="thumb-box wow zoomIn animated">
        <figure className="thumb thumb-1">
          <img src="images/resource/thumb-1.png" alt="" />
        </figure>
        <figure className="thumb thumb-2">
          <img src="images/resource/thumb-2.png" alt="" />
        </figure>
        <figure className="thumb thumb-3">
          <img src="images/resource/thumb-3.png" alt="" />
        </figure>
        <figure className="thumb thumb-4">
          <img src="images/resource/thumb-4.png" alt="" />
        </figure>
      </div>
      <div className="auto-container">
        <div className="upper-box">
          <div className="sec-title">
            <p>Testimonials</p>
            <h2>What Clients Say?</h2>
          </div>
          <div className="text">
            <p>
              On the other hand we denounce with righteous indignation and
              dislike
              <br />
              men who are so beguiled and demoralized.
            </p>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1 inner-column">
            <Slider
              {...settings}
              className="testimonial-carousel-2 owl-carousel owl-theme owl-nav-none">
              <div className="testimonial-content d-flex align-items-center">
                <div className="inner-box" style={{ width: '750px' }}>
                  <figure className="image-box">
                    <img src="images/resource/testimonial-1.png" alt="" />
                  </figure>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipicing elit sed
                      do usmod tempor incididunt.enim ad minim veniam quis
                      nostrud exer citation laboris nisi aliquip commodo.
                    </p>
                  </div>
                  <div className="author-info">
                    <h4>Nicolas Lawson</h4>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="inner-box" style={{ width: '750px' }}>
                  <figure className="image-box">
                    <img src="images/resource/testimonial-1.png" alt="" />
                  </figure>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipicing elit sed
                      do usmod tempor incididunt.enim ad minim veniam quis
                      nostrud exer citation laboris nisi aliquip commodo.
                    </p>
                  </div>
                  <div className="author-info">
                    <h4>Nicolas Lawson</h4>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="inner-box" style={{ width: '750px' }}>
                  <figure className="image-box">
                    <img src="images/resource/testimonial-1.png" alt="" />
                  </figure>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipicing elit sed
                      do usmod tempor incididunt.enim ad minim veniam quis
                      nostrud exer citation laboris nisi aliquip commodo.
                    </p>
                  </div>
                  <div className="author-info">
                    <h4>Nicolas Lawson</h4>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="inner-box" style={{ width: '750px' }}>
                  <figure className="image-box">
                    <img src="images/resource/testimonial-1.png" alt="" />
                  </figure>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipicing elit sed
                      do usmod tempor incididunt.enim ad minim veniam quis
                      nostrud exer citation laboris nisi aliquip commodo.
                    </p>
                  </div>
                  <div className="author-info">
                    <h4>Nicolas Lawson</h4>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
