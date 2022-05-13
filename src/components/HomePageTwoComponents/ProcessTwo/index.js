import React from 'react'

export default function ProcessTow() {
  return (
    <section className="process-style-two text-center bg-color-1"> 
        <div className="auto-container">
            <div className="sec-title">
                <p>How it Works</p>
                <h2>How Dotex Works?</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="shape-layer" style={{backgroundImage: "url(images/shape/shap-3.png)"}}></div>
                        <div className="icon-box">
                            <div className="count-box"><span>1</span></div>
                            <i className="flaticon-database"></i>
                        </div>
                        <h3>Data for All<br />Your People</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="shape-layer" style={{backgroundImage: "url(images/shape/shap-4.png)"}}></div>
                        <div className="icon-box">
                            <div className="count-box"><span>2</span></div>
                            <i className="flaticon-robot"></i>
                        </div>
                        <h3>A New Breed<br />of AI</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="icon-box">
                            <div className="count-box"><span>3</span></div>
                            <i className="flaticon-search"></i>
                        </div>
                        <h3>Analytics Your<br />Business</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
