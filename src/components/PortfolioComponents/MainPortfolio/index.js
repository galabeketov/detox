import React from 'react';

export default function MainPortfolio() {
  return (
    <section className="portfolio-page-section Portfolio-grid">
      <div className="auto-container">
        <div className="sortable-masonry">
          <div className="filters">
            <ul className="filter-tabs filter-btns centred clearfix">
              <li
                className="active filter"
                data-role="button"
                data-filter=".all">
                All
              </li>
              <li className="filter" data-role="button" data-filter=".design">
                Design
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".development">
                Development
              </li>
              <li
                className="filter"
                data-role="button"
                data-filter=".photography">
                Photography
              </li>
              <li className="filter" data-role="button" data-filter=".product">
                Product
              </li>
            </ul>
          </div>
          <div className="items-container row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all photography design development">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-holder">
                    <figure className="image-box">
                      <img src="images/gallery/project-1.jpg" alt="" />
                    </figure>
                    <a
                      href="images/gallery/project-1.jpg"
                      className="lightbox-image view-btn"
                      data-fancybox="gallery">
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="portfolio-details.html">Data Research</a>
                    </h3>
                    <span>UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all design product">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-holder">
                    <figure className="image-box">
                      <img src="images/gallery/project-2.jpg" alt="" />
                    </figure>
                    <a
                      href="images/gallery/project-2.jpg"
                      className="lightbox-image view-btn"
                      data-fancybox="gallery">
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="portfolio-details.html">Content Marketing</a>
                    </h3>
                    <span>UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all photography development">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-holder">
                    <figure className="image-box">
                      <img src="images/gallery/project-3.jpg" alt="" />
                    </figure>
                    <a
                      href="images/gallery/project-3.jpg"
                      className="lightbox-image view-btn"
                      data-fancybox="gallery">
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="portfolio-details.html">Digital Research</a>
                    </h3>
                    <span>UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all design product">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-holder">
                    <figure className="image-box">
                      <img src="images/gallery/project-4.jpg" alt="" />
                    </figure>
                    <a
                      href="images/gallery/project-4.jpg"
                      className="lightbox-image view-btn"
                      data-fancybox="gallery">
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="portfolio-details.html">Product Design</a>
                    </h3>
                    <span>UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all photography design development">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-holder">
                    <figure className="image-box">
                      <img src="images/gallery/project-5.jpg" alt="" />
                    </figure>
                    <a
                      href="images/gallery/project-5.jpg"
                      className="lightbox-image view-btn"
                      data-fancybox="gallery">
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="portfolio-details.html">Marketplace System</a>
                    </h3>
                    <span>UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all design photography product">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-holder">
                    <figure className="image-box">
                      <img src="images/gallery/project-6.jpg" alt="" />
                    </figure>
                    <a
                      href="images/gallery/project-6.jpg"
                      className="lightbox-image view-btn"
                      data-fancybox="gallery">
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a href="portfolio-details.html">Product Development</a>
                    </h3>
                    <span>UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-weapper text-center">
            <ul className="pagination clearfix">
              <li>
                <a href="portfolio-details.html">
                  <i className="fas fa-angle-left"></i>
                </a>
              </li>
              <li>
                <a href="portfoliodetails" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="portfoliodetails">2</a>
              </li>
              <li>
                <a href="portfoliodetails">3</a>
              </li>
              <li>
                <a href="portfoliodetails">4</a>
              </li>
              <li>
                <a href="portfoliodetails">
                  <i className="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
