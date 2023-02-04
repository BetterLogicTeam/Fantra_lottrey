import React from "react";
import about_counter_bg from "../../Assets/images/about_counter_bg.jpg";
import ac1 from "../../Assets/images/ac1.png";
import ac2 from "../../Assets/images/ac2.png";
import ac3 from "../../Assets/images/ac3.png";
import about_left from "../../Assets/images/about_left.png";
import map from "../../Assets/images/map.png";
import testi1 from "../../Assets/images/testi1.png";
import testi2 from "../../Assets/images/testi2.png";
import testi3 from "../../Assets/images/testi3.png";
import testi4 from "../../Assets/images/testi4.png";
import testi5 from "../../Assets/images/testi5.png";
import testi6 from "../../Assets/images/testi6.png";
import af1 from "../../Assets/images/af1.png";
import af2 from "../../Assets/images/af2.png";
import af3 from "../../Assets/images/af3.png";
import af4 from "../../Assets/images/af4.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./About.css";
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Popover from 'react-bootstrap/Popover';
import { Button, Popover } from "antd";
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

function About() {
  return (
    <div>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="content">
            <h2 className="title">About Us</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <a href="index.html">Home</a>
              </li>
              <i className="fa fa-long-arrow-right lotterlo1">
                <HiArrowNarrowRight />
              </i>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-counter-image">
                <img src={about_counter_bg} alt="" />
              </div>
              <div className="counter-area">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="counter-area-inner">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="c-box">
                            <img className="icon" src={ac1} alt="" />
                            <h3 className="number">23</h3>
                            <p className="text">Winners Last Month</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="c-box">
                            <img className="icon" src={ac2} alt="" />
                            <h3 className="number">2837K</h3>
                            <p className="text">Tickets Sold</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="c-box">
                            <img className="icon" src={ac3} alt="" />
                            <h3 className="number">28387K</h3>
                            <p className="text">Payout to Winners</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src={about_left} alt="" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-content">
                <div className="section-header">
                  <h2 className="title">About us</h2>
                  <p>
                    We offer the possibility to play the world’s biggest
                    lotteries online. Our site was designed with a lottery
                    player in mind. We are lotto fans ourselves, therefore we
                    know what it takes to satisfy one.
                  </p>
                  <p>
                    Our team is build up with lottery enthusiasts, but also
                    industry professionals. Our designers and developers ensure
                    the smoothest lotto playing experience. Support is also a
                    pillar of our operations. Our agents are always thriving to
                    help.
                  </p>
                  <p>Your satisfaction is our goal!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="about-feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af1} alt="" />
                  <h4 className="title">100% Secure</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af2} alt="" />
                  <h4 className="title">No Risk</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af3} alt="" />
                  <h4 className="title">Support</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af4} alt="" />
                  <h4 className="title">Spam-Free</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-testimonial">
                <img src={map} alt="" />
                

                <div className="client one cliieent_1">
                            <div className="img">
                                <img src={testi1} alt=""/>
                            </div>
                            <div className=" ">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <h5 className="top-text">Awesome Fantra!</h5>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text fw-500">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="client two cliieent_1">
                            <div className="img">
                                <img src={testi2} alt=""/>
                            </div>
                            <div className=" ">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <h5 className="top-text">Awesome Fantra!</h5>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text fw-500">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client three cliieent_1">
                            <div className="img">
                                <img src={testi3} alt=""/>
                            </div>
                            <div className=" ">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <h5 className="top-text">Awesome Fantra!</h5>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text fw-500">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client four cliieent_1">
                            <div className="img">
                                <img src={testi4} alt=""/>
                            </div>
                            <div className=" ">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <h5 className="top-text">Awesome Fantra!</h5>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text fw-500">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client five cliieent_1">
                            <div className="img">
                                <img src={testi5} alt=""/>
                            </div>
                            <div className=" ">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <h5 className="top-text">Awesome Fantra!</h5>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text fw-500">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client six cliieent_1">
                            <div className="img">
                                <img src={testi6} alt=""/>
                            </div>
                            <div className=" ">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <h5 className="top-text">Awesome Fantra!</h5>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text fw-500">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="client two">
                            <div className="img" data-toggle="popover-x" data-target="#myPopover2" data-placement="top" data-trigger="hover focus">
                                <img src={testi2} alt=""/>
                            </div>
                            <div id="myPopover2" className="popover popover-default mypopover popover-x">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <p className="top-text">Awesome Fantra!</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div><div className="popover-x-marker" style={{display: "none"}}></div>
                        </div> */}
                        {/* <div className="client three">
                            <div className="img" data-toggle="popover-x" data-target="#myPopover3" data-placement="top" data-trigger="hover focus">
                                <img src={testi3} alt=""/>
                            </div>
                            <div id="myPopover3" className="popover popover-default mypopover popover-x">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <p className="top-text">Awesome Fantra!</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div><div className="popover-x-marker" style={{display: "none"}}></div>
                        </div>
                        <div className="client four">
                            <div className="img" data-toggle="popover-x" data-target="#myPopover4" data-placement="top" data-trigger="hover focus">
                                <img src={testi4} alt=""/>
                            </div>
                            <div id="myPopover4" className="popover popover-default mypopover popover-x">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <p className="top-text">Awesome Fantra!</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div><div className="popover-x-marker" style={{display: "none"}}></div>
                        </div>
                        <div className="client five">
                            <div className="img" data-toggle="popover-x" data-target="#myPopover5" data-placement="top" data-trigger="hover focus">
                                <img src={testi5} alt=""/>
                            </div>
                            <div id="myPopover5" className="popover popover-default mypopover popover-x">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <p className="top-text">Awesome Fantra!</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div><div className="popover-x-marker" style={{display: "none"}}></div>
                        </div>
                        <div className="client six">
                            <div className="img" data-toggle="popover-x" data-target="#myPopover6" data-placement="top" data-trigger="hover focus">
                                <img src={testi6} alt=""/>
                            </div>
                            <div id="myPopover6" className="popover popover-default mypopover popover-x">
                                <div className="arrow"></div>
                                <div className="client-review">
                                    <p className="top-text">Awesome Fantra!</p>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="bottom-text">“Ideas are easy. Implementation is hard.”</p>
                                    <div className="client-info">
                                        <h4 className="name">Flora Oliver</h4>
                                        <p className="date">Jan 1, 2021</p>
                                    </div>
                                </div>
                            </div><div className="popover-x-marker" style={{display: "none"}}></div>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
