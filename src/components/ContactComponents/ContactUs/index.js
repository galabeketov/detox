import React from 'react';

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 info-column">
            <div className="info-box">
              <div className="opening-time">
                <h3>Opening Hours</h3>
                <p>Daily: 9.30 AM–6.00 PM</p>
                <p>Sunday & Holidays: Closed</p>
              </div>
              <div className="contact-info">
                <h3>Contact Info</h3>
                <ul className="clearfix">
                  <li>
                    77408 Satterfield Motorway Suite 469
                    <br />
                    New Antonetta, BC K3L6P6
                  </li>
                  <li>
                    <a href="mailto:example@info.com">
                      mailto:example@info.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:6174959400326">(617) 495-9400-326</a>
                  </li>
                </ul>
              </div>
              <div className="social-box">
                <h3>Social Contact</h3>
                <ul className="clearfix">
                  <li>
                    <a href="contact.html">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 form-column">
            <div className="form-inner">
              <h3>
                Let’s Conversation
                <br />
                with Detox
              </h3>
              <form
                method="post"
                action="inc/sendemail.php"
                id="contact-form"
                className="default-form">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="First name *"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your mail *"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Phone *"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      required=""
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                      name="message"
                      placeholder="Message..."></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                    <button
                      className="theme-btn style-one"
                      type="submit"
                      name="submit-form">
                      Send now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
