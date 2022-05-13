import React from 'react';

export default function PageTitlePortfolioDetails() {
  return (
    <section className="page-title bg-color-1 text-center">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: 'url(images/shape/pattern-18.png)',
        }}></div>
      <div className="auto-container">
        <div className="content-box">
          <h1>Portfolio Details</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <a href="#">Home</a>
            </li>
            <li>Portfolio Details</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
