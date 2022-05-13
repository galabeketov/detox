import React from "react";
import CountUp from "react-countup";
export default function FunFact() {
  return (
    <section className="fun-fact bg-color-2">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
            <div
              className="counter-block wow slideInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="count-outer count-box">
                <span className="count-text" data-speed="1500" data-stop="830">
                  <CountUp end={830}  delay={3} duration={2.5} />
                </span>
              </div>
              <h5>Projects Executed</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
            <div
              className="counter-block wow slideInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="count-outer count-box">
                <span className="count-text" data-speed="1500" data-stop="220">
                <CountUp end={220} delay={3} duration={2.5} />
                </span>
              </div>
              <h5>Data Analytics</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
            <div
              className="counter-block wow slideInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="count-outer count-box">
                <span className="count-text" data-speed="1500" data-stop="390">
                <CountUp end={390} delay={3} duration={2.5} />
                </span>
              </div>
              <h5>Data Management</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 counter-column">
            <div
              className="counter-block wow slideInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="count-outer count-box">
                <span className="count-text" data-speed="1500" data-stop="730">
                <CountUp end={730} delay={3} duration={2.5} />
                </span>
              </div>
              <h5>Satisfied Customers</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
