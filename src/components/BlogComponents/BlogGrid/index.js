import React from 'react';
import Slider from 'react-slick';

export default function BlogGrid() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: 'true',
  };

  return (
    <section className="sidebar-page-container blog-grid">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
            <div className="blog-grid-content">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-1.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 28</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Nicolas</a>
                          </li>
                          <li>
                            <a href="blog-details.html">3 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            How to become a sucess- ful businessman.
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-2.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 27</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Hinter</a>
                          </li>
                          <li>
                            <a href="blog-details.html">5 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Services that will Grow Your Business for you!
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-3.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 26</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Tailor</a>
                          </li>
                          <li>
                            <a href="blog-details.html">4 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Online Trends That Have Gone Stale.
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-4.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 25</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Tailor</a>
                          </li>
                          <li>
                            <a href="blog-details.html">4 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Additional Services that will Grow Your...
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-5.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 24</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Nicolas</a>
                          </li>
                          <li>
                            <a href="blog-details.html">4 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Throwback Old Online Trends That Have....
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-6.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 23</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Tailor</a>
                          </li>
                          <li>
                            <a href="blog-details.html">4 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Google indeing Issue not really an issue
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-7.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 22</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Nicolas</a>
                          </li>
                          <li>
                            <a href="blog-details.html">4 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Invalid Data Markup did cause Action
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div
                    className="news-block-one wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-holder">
                        <figure className="image-box">
                          <img src="images/news/news-8.jpg" alt="" />
                        </figure>
                        <div className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <p>Dec 21</p>
                        </div>
                        <div className="link">
                          <a href="blog-details.html">
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span>by</span>&nbsp;
                            <a href="blog-details.html">Hinter</a>
                          </li>
                          <li>
                            <a href="blog-details.html">4 Comments</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Google might be having issues with...
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed do eiusmod tempor incididunt labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
            <div className="sidebar">
              <div className="sidebar-widget sidebar-search">
                <div className="widget-title">
                  <h3>Search</h3>
                </div>
                <div className="widget-content">
                  <form action="blog-grid.html" method="post">
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Search"
                        required=""
                      />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="sidebar-widget sidebar-testimonial">
                <Slider
                  {...settings}
                  className="sidebar-testimonial-carousel owl-carousel owl-theme owl-nav-none">
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet con sectetur adipicing elit sed
                      do smod tempor incididunt enim minim veniam.
                    </p>
                    <div className="author-info">
                      <h4>Nicolas Lawson</h4>
                      <span className="designation">Designer</span>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet con sectetur adipicing elit sed
                      do smod tempor incididunt enim minim veniam.
                    </p>
                    <div className="author-info">
                      <h4>Nicolas Lawson</h4>
                      <span className="designation">Designer</span>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet con sectetur adipicing elit sed
                      do smod tempor incididunt enim minim veniam.
                    </p>
                    <div className="author-info">
                      <h4>Nicolas Lawson</h4>
                      <span className="designation">Designer</span>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="sidebar-widget sidebar-categories">
                <div className="widget-title">
                  <h3>Categories</h3>
                </div>
                <div className="widget-content">
                  <ul className="clearfix">
                    <li>
                      <a href="blog-grid.html">
                        Education<span>(32)</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        Olympiad<span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        Drawing<span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        Science<span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        Science<span>(8)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget sidebar-post">
                <div className="widget-title">
                  <h3>Latest News</h3>
                </div>
                <div className="post-inner">
                  <div className="post">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="images/news/post-1.png" alt="" />
                      </a>
                    </figure>
                    <div className="post-date">
                      <i className="far fa-calendar-alt"></i>&nbsp;
                      <p>Dec 25, 2019</p>
                    </div>
                    <h5>
                      <a href="blog-details.html">
                        Conse quntur magni eos dolore qui.
                      </a>
                    </h5>
                  </div>
                  <div className="post">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="images/news/post-2.png" alt="" />
                      </a>
                    </figure>
                    <div className="post-date">
                      <i className="far fa-calendar-alt"></i>&nbsp;
                      <p>Dec 24, 2019</p>
                    </div>
                    <h5>
                      <a href="blog-details.html">
                        What to do with your Old Blog Posts?
                      </a>
                    </h5>
                  </div>
                  <div className="post">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="images/news/post-3.png" alt="" />
                      </a>
                    </figure>
                    <div className="post-date">
                      <i className="far fa-calendar-alt"></i>&nbsp;
                      <p>Dec 23, 2019</p>
                    </div>
                    <h5>
                      <a href="blog-details.html">
                        Ten Instagram the Marketing Tips...
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget sidebar-tags">
                <div className="widget-title">
                  <h3>Popular Tags</h3>
                  <div className="widget-content">
                    <ul className="clearfix">
                      <li>
                        <a href="blog-grid.html">Software</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Design</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Saas</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Code</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Landing Page</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Web</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Detox</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Corporate</a>
                      </li>
                    </ul>
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
