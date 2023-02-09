import React from "react";
import "./Landing.css";
import f1 from "../../Assets/images/f1.png";
import f2 from "../../Assets/images/f2.png";
import f3 from "../../Assets/images/f3.png";
import f4 from "../../Assets/images/f4.png";
import d2 from "../../Assets/images/d2.png";
import d3 from "../../Assets/images/d3.png";
import d4 from "../../Assets/images/d4.png";
import overlaymask1 from "../../Assets/images/overlaymask1.png";
import result_background from "../../Assets/images/result_background.jpg";
import Result_card from "../Result_card/Result_card";
import Result_check from "../Result_check/Result_check";
import Landing_slider from "../Landing_slider/Landing_slider";

function Landing() {
  return (
    <div>
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="banner-subtitle">Exclusive Lottery </p>
              <h1 className="banner-title">Mega Jackpot</h1>
              <p className="text">
                Power up for a chance to win in this electrifying instant game!
              </p>
              <a href="#" className="custom-button2">
                Start Playing Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="draw-section mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Landing_slider />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-feature">
                <div className="icon">
                  <img src={f1} alt="" />
                </div>
                <h4 className="title">Trust</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-feature">
                <div className="icon">
                  <img src={f2} alt="" />
                </div>
                <h4 className="title">Safe & Security</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-feature">
                <div className="icon">
                  <img src={f3} alt="" />
                </div>
                <h4 className="title">Zero commission</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-feature">
                <div className="icon">
                  <img src={f4} alt="" />
                </div>
                <h4 className="title">24/7 Support</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lottery-result">
        <img className="bg-image" src={result_background} alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="content">
                <div className="section-header">
                  <h2 className="title">Latest Lottery results</h2>
                  <p className="text">
                    Check Your lotto online, find all the lotto winning numbers
                    and see if you won the latest lotto jackpots
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="result-box">
                <h4 className="box-header">Lottery Winning Numbers</h4>
                <div className="result-list">
                  <Result_card />
                  <Result_card />
                  <Result_card />
                </div>
                <div className="text-center">
                  <a className="view-all" href="#">
                    View All Result{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="check-number">
        <img
          className="img-left"
          src="assets/images/check-num-left.png"
          alt=""
        />
        <img
          className="img-right"
          src="assets/images/check-num-right.png"
          alt=""
        />
          <Result_check />
      </section>
    </div>
  );
}

export default Landing;
