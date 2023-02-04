import React from "react";
import d1 from "../../Assets/images/d1.png";
import d2 from "../../Assets/images/d2.png";
import d3 from "../../Assets/images/d3.png";

function Result_card() {
  return (
    <div>
      <div className="single-list">
        <div className="light-area">
          <div className="light-area-top">
            <div className="left">
              <img src={d1} alt="" />
              <h4>Powerball</h4>
            </div>
            <div className="right">
              <span>Draw took place on</span>
              <h6>Saturday April 20, 2020</h6>
            </div>
          </div>
          <div className="light-area-bottom">
            <div className="left">
              <p>Winning Numbers:</p>
              <div className="numbers">
                <span>11</span>
                <span>88</span>
                <span>23</span>
                <span>9</span>
                <span>19</span>
                <span>26</span>
                <span>87</span>
              </div>
            </div>
            <div className="right">
              <span>Est. Jackpot</span>
              <h6>$116 M Win BTC</h6>
            </div>
          </div>
        </div>
        <div className="color-area">
          <div className="top">
            <span>Next Draw</span>
            <h6>Wed, Oct 28, 2020</h6>
          </div>
          <div className="bottom">
            <span>Est. Jackpot </span>
            <h6>$116 M Win BTC</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result_card;
