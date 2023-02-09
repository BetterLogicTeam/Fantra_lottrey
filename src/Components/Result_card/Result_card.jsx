import React, { useState } from "react";
import d1 from "../../Assets/images/d1.png";
import d2 from "../../Assets/images/d2.png";
import d3 from "../../Assets/images/d3.png";

function Result_card(data) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemToBeShow, setitemToBeShow] = useState(2);
  const tableData = [
    { name: 20222222, age: "$20" },
    { name: 20222222, age: "$20" },
    { name: 20222222, age: "$20" },
    { name: 20222222, age: "$20" },
    { name: 20222222, age: "$20" },
    { name: 20222222, age: "$20" },
  ];
  const slice = tableData.slice(0,2)
  return (
    <div>
      <ul>
        <li>
          <div class="result-list">
            <div class=" single-list" id="">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed single-"
                    type="button"
                  >
                    <div class="light-area">
                      <div class="light-area-top">
                        <div class="left">
                          <img src={d1} alt="" />
                          <h4 class="textsiz1">10X</h4>
                        </div>
                        <div class="right">
                          <span>Draw took place on</span>
                          <h6>Saturday April 20, 2020</h6>
                        </div>
                      </div>
                      <div class="">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="tabun1">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">SRN</th>
                                    <th scope="col">Token Number</th>
                                    <th scope="col">Recieving Address</th>
                                    <th scope="col">Amount</th>
                                  </tr>
                                </thead>
                                {console.log('slice',slice)}
                                <tbody class="#tbbody">
                                  {tableData.slice(0,2).map((item, index) => {
                                    return (
                                    <tr key={index}>
                                      <th scope="row">1</th>
                                      <td>{item.name}</td>
                                      <td></td>
                                      <td>{item.age}</td>
                                    </tr>
                                    )
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="shbtn"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* {isOpen && (
                    <div className="col-md-12">
                    <div class="paadding">
                      <div class="light-area-top">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                      <div class="">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="tabun1">
                              <table class="table">
                                <tbody class="#tbbody">
                                  {tableData.map((item, index) => (
                                    <tr key={index}>
                                      <th scope="row">1</th>
                                      <td>{item.name}</td>
                                      <td></td>
                                      <td></td>
                                      <td>{item.age}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  )} */}
                  <button
                    id="clickbtn"
                    class=" custom-buttonn4  mx-auto show-more-btn"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {" "}
                    show more
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Result_card;
