import React from 'react'

export default function MainFooter() {
  return (
    <footer className="main-footer">
        <div className="auto-container">
            <div className="footer-top">
                <div className="widget-section wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><a href="index.html"><img src="images/footer-logo.png" alt=""/></a></figure>
                                <div className="text">
                                    <p>Lorem ipsum dolor amet consectetur adipielit sed eiusm tempor incididunt ut labore dolore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <div className="widget-content">
                                    <ul>
                                        <li><a href="index.html">Company History</a></li>
                                        <li><a href="index.html">About Us</a></li>
                                        <li><a href="index.html">Contact Us</a></li>
                                        <li><a href="index.html">Services</a></li>
                                        <li><a href="index.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div className="widget-content">
                                    <ul>
                                        <li><a href="index.html">Company History</a></li>
                                        <li><a href="index.html">About Us</a></li>
                                        <li><a href="index.html">Contact Us</a></li>
                                        <li><a href="index.html">Services</a></li>
                                        <li><a href="index.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact Info</h3>
                                </div>
                                <div className="widget-content">
                                    <ul>
                                        <li>Flat 20, Reynolds Neck, North Hele naville, FV77 8WS</li>
                                        <li><a href="tel:23055873407">+2(305) 587-3407</a></li>
                                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                                    </ul>
                                </div>
                                <ul className="social-links clearfix">
                                    <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-vimeo-v"></i></a></li>
                                    <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom clearfix">
                <div className="copyright pull-left">
                    <p><a href="index.html">Detox</a> &copy; 2020 All Right Reserved</p>
                </div>
                <ul className="footer-nav pull-right">
                    <li><a href="index.html">Terms of Service</a></li>
                    <li><a href="index.html">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
