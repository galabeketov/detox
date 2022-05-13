import React from "react";
import { Fade } from "react-awesome-reveal";

export default function BannerSection() {
  return (
    <section className="banner-section">
    <div className="pattern-box">
        <div className="pattern-1 wow slideInDown" data-wow-delay="500ms" data-wow-duration="1500ms" style={{backgroundImage: "url(images/shape/pattern-1.png)"}}></div>
        <div className="pattern-2" style={{backgroundImage: "url(images/shape/pattern-2.png)"}}></div>
    </div>
    <div className="auto-container">
        <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <h1>Data Analytics Techniques with <span className="animation_text_word"></span> Systems.</h1>
                    <p>Detox's real-time data management technologies, global data marketplaces, and award-winning customer service make our unstacked data solutions.</p>
                    <div className="btn-box">
                        <a href="index.html" className="theme-btn style-one">Learn More</a>
                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><i className="flaticon-play"></i>Watch Video</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <figure className="image image-1"><img src="images/banner/banner-1.png" alt=""/></figure>
                    <figure className="image image-2 float-bob-y"><img src="images/banner/banner-2.png" alt=""/></figure>
                    <figure className="image image-3 wow slideInDown" data-wow-delay="500ms" data-wow-duration="1500ms"><img src="images/banner/banner-5.png" alt=""/></figure>
                    <figure className="image image-4"><img src="images/banner/banner-3.png" alt=""/></figure>
                    <figure className="image image-5 rotate-me"><img src="images/banner/banner-4.png" alt=""/></figure>
                </div>
            </div>
        </div>
    </div>
</section>
   
  );
}
