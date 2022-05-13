import React from 'react';

export default function MainPortfolioDetails() {
  return (
    <section className="portfolio-details sec-pad">
      <div className="auto-container">
        <div className="inner-container">
          <figure className="image-box">
            <a
              href="images/gallery/project-details-1.jpg"
              className="lightbox-image"
              data-fancybox="gallery">
              <img src="images/gallery/project-details-1.jpg" alt="" />
            </a>
          </figure>
          <div className="content-box">
            <div className="row clearfix align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                <div className="left-content">
                  <h3>Corporate Website for a big law firm.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna ad
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex commodo consequat.Duis
                    aute irure dolor in reprehenderit.excepteur sint occaecat
                    cupidatat non proident.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                <div className="right-content">
                  <ul className="list clearfix">
                    <li>
                      <h5>Client:</h5>
                      <p>Abstergo Industries.</p>
                    </li>
                    <li>
                      <h5>Client:</h5>
                      <p>Abstergo Industries.</p>
                    </li>
                    <li>
                      <h5>Client:</h5>
                      <p>Abstergo Industries.</p>
                    </li>
                    <li>
                      <h5>Client:</h5>
                      <p>Abstergo Industries.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
