import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
export default function MobileMenu() {
  // //Mobile Nav Hide Show
  // if ($('.mobile-menu').length) {
  //   $('.mobile-menu .menu-box').mCustomScrollbar();

  //   var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
  //   $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
  //   $('.sticky-header .main-menu').append(mobileMenuContent);

  //   //Dropdown Button
  //   $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
  //     $(this).toggleClass('open');
  //     $(this).prev('ul').slideToggle(500);
  //   });
  //   //Menu Toggle Btn
  //   $('.mobile-nav-toggler').on('click', function () {
  //     $('body').addClass('mobile-menu-visible');
  //   });

  //   //Menu Toggle Btn
  //   $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on(
  //     'click',
  //     function () {
  //       $('body').removeClass('mobile-menu-visible');
  //     },
  //   );
  // }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  {
    /* Performs similarly to componentDidMount in classes */
  }
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false,
    );
  }, [isMobile]);

  return (
    <div>
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/">
              <img src="images/logo-2.png" alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <Link to="tel:+8801682648101">+88 01682648101</Link>
              </li>
              <li>
                <Link to="mailto:info@example.com">info@example.com</Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link to="/">
                  <span className="fab fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="fab fa-pinterest-p"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="fab fa-instagram"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="fab fa-youtube"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
