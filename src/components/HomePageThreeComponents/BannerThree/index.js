import React from 'react'

export default function BannerThree() {
  return (
    <section className="banner-section style-three">
    <div className="pattern-box">
        <div className="pattern-1 wow slideInDown" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage:"url(images/shape/pattern-12.png)"}}></div>
        <div className="pattern-2"  style={{backgroundImage:"url(url(images/shape/pattern-13.png))"}}></div>
    </div>
    <div className="auto-container">
        <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                    <h1>Data Analytics Techniques with Detox Systems.</h1>
                    <p>Detox's real-time data management technologies, global data marketplaces, and award-winning customer service make our unstacked data solutions.</p>
                    <div className="btn-box">
                        <a href="index.html" className="theme-btn style-one">Learn More</a>
                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><i className="flaticon-play"></i>Watch Video</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                    <figure className="image image-1 wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="images/banner/banner-3-1.png" alt=""/></figure>
                    <figure className="image image-2 wow bounceInDown" data-wow-delay="500ms" data-wow-duration="1500ms"><img src="images/banner/banner-3-2.png" alt=""/></figure>
                    <figure className="image image-3 float-bob-y"><img src="images/banner/banner-3-3.png" alt=""/></figure>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
