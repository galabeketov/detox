import React from 'react'

export default function PageTitle() {
  return (
    <section className="page-title bg-color-1 text-center">
    <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/pattern-18.png)"}}></div>
    <div className="auto-container">
        <div className="content-box">
            <h1>Our Services</h1>
            <ul className="bread-crumb clearfix">
                <li><a href="#">Home</a></li>
                <li>Service 01</li>
            </ul>
        </div>
    </div>
</section>
  )
}
