import React from 'react'

export default function Faq() {
  return (
    <section className="faq-section bg-color-1">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_06">
                        <div className="content-box">
                            <div className="sec-title">
                                <p>Have A Question?</p>
                                <h2>Frequently<br />Asked Questions</h2>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                    <div id="content_block_07">
                        <ul className="accordion-box">
                            <li className="accordion block active-block">
                                <div className="acc-btn active">
                                    <h4><span>Q.</span>What is Saas and How Does it Work?</h4>
                                </div>
                                <div className="acc-content current">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna aliqua enim minim.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <h4><span>Q.</span>How does Your Pricing Work?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna aliqua enim minim.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                 <div className="acc-btn">
                                    <h4><span>Q.</span>How Does Dotex Work?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna aliqua enim minim.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
