import React from 'react';

function ContactTitle() {
  return (
    <section className="page-title bg-color-1 text-center">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: 'url(images/shape/pattern-18.png)',
        }}></div>
      <div className="auto-container">
        <div className="content-box">
          <h1>Contact Us</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactTitle;
