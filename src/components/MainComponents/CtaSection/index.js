import React from 'react'

export default function CtaSection() {
  return (
    <section className="cta-section bg-color-2">
    <div className="pattern-box">
        <div className="pattern-1" style={{backgroundImage: "url(assets/images/shape/pattern-7.png)"}}></div>
        <div className="pattern-2" style={{backgroundImage: "url(assets/images/shape/pattern-8.png)"}}></div>
    </div>
    <div className="auto-container">
        <div className="content-box text-center wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <h2>Get Ready to Started It’s Fast, Free & Very Easy</h2>
            <a href="index.html" className="theme-btn style-three">Learn More</a>
        </div>
    </div>
</section>
  )
}
