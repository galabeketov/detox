import React from 'react';

export default function BlogTitle() {
  return (
    <section className="page-title bg-color-1 text-center">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: 'url(assets/images/shape/pattern-18.png)',
        }}></div>
      <div className="auto-container">
        <div className="content-box">
          <h1>Blog Grid</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Blog Grid</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
