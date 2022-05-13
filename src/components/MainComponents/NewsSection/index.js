import React from 'react'

export default function NewsSection() {
  return (
    <section className="news-section">
    <div className="pattern-layer wow slideInRight animated" data-wow-delay="500ms" data-wow-duration="1500ms" style={{backgroundImage: "url(images/shape/pattern-2.png)"}}></div>
    <div className="auto-container">
        <div className="sec-title text-center">
            <p>Recent Article</p>
            <h2>Stay Update with Detox</h2>
        </div>
        <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-holder">
                            <figure className="image-box"><img src="images/news/news-1.jpg" alt=""/></figure>
                            <div className="post-date"><i className="fas fa-calendar-alt"></i><p>Dec 23</p></div>
                            <div className="link"><a href="blog-details.html"><i className="fas fa-arrow-right"></i></a></div>
                        </div>
                        <div className="lower-content">
                            <ul className="post-info">
                                <li><span>by</span>&nbsp;<a href="index.html">Nicolas</a></li>
                                <li><a href="index.html">3 Comments</a></li>
                            </ul>
                            <h3><a href="blog-details.html">How to become a sucess- ful businessman.</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-holder">
                            <figure className="image-box"><img src="images/news/news-2.jpg" alt=""/></figure>
                            <div className="post-date"><i className="fas fa-calendar-alt"></i><p>Dec 22</p></div>
                            <div className="link"><a href="blog-details.html"><i className="fas fa-arrow-right"></i></a></div>
                        </div>
                        <div className="lower-content">
                            <ul className="post-info">
                                <li><span>by</span>&nbsp;<a href="index.html">Hinter</a></li>
                                <li><a href="index.html">5 Comments</a></li>
                            </ul>
                            <h3><a href="blog-details.html">Services that will Grow Your Business for you!</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <div className="image-holder">
                            <figure className="image-box"><img src="images/news/news-3.jpg" alt=""/></figure>
                            <div className="post-date"><i className="fas fa-calendar-alt"></i><p>Dec 21</p></div>
                            <div className="link"><a href="blog-details.html"><i className="fas fa-arrow-right"></i></a></div>
                        </div>
                        <div className="lower-content">
                            <ul className="post-info">
                                <li><span>by</span>&nbsp;<a href="index.html">Tailor</a></li>
                                <li><a href="index.html">4 Comments</a></li>
                            </ul>
                            <h3><a href="blog-details.html">Online Trends That Have Gone Stale.</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
