import React from "react";

function Result_check() {
  return (
    <div>
        <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="check-box">
          <h4 className="title">1. Select a Game</h4>
          <div className="form-area">
            <select>
              <option value="#">Power Ball</option>
              <option value="#">Megamillions</option>
              <option value="#">Euromillions</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="check-box">
          <h4 className="title">2. Pick a Date</h4>
          <div className="form-area">
            <input type="date" />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="check-box">
          <h4 className="title">3. Enter Your Number</h4>
          <div className="form-area input-round-wrapper">
            <input type="text" className="input-round" />
            <input type="text" className="input-round" />
            <input type="text" className="input-round" />
            <input type="text" className="input-round" />
            <input type="text" className="input-round" />
            <input type="text" className="input-round" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Result_check;
