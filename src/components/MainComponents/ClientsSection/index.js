import React from 'react';
import Slider from 'react-slick';

export default function ClientsSection() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    className: 'mt-5 mb-3',
  };
  const settings2 = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <section className="clients-section bg-color-1">
      {/* <h1 className="text center">Galimjan</h1> */}
      <div className="auto-container">
        {/*  className="clients-carousel-1 owl-carousel owl-theme owl-dots-none owl-nav-none" */}
        <Slider {...settings}>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-1.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-2.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-3.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-4.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-5.png" alt="" />
            </a>
          </figure>
        </Slider>
        <Slider
          {...settings2}
          className="clients-carousel-1 owl-carousel owl-theme owl-dots-none owl-nav-none">
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-6.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-7.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-8.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="images/clients/logo-9.png" alt="" />
            </a>
          </figure>
        </Slider>
      </div>
    </section>
  );
}
