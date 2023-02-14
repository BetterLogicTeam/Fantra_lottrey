import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { loadWeb3 } from "../../apis/api";
import d1 from "../../Assets/images/d1.png";
import d2 from "../../Assets/images/d2.png";
import d3 from "../../Assets/images/d3.png";
import {
  loteryContractAbi,
  loteryContractAddress,
  loteryTokenAbi,
  loteryTokenAddress,
} from "../../utilies/Bsc_contract";

function Result_card(data) {
  const [isOpen, setIsOpen] = useState(4);
  const [itemToBeShow, setitemToBeShow] = useState(2);


  const [cardData, setCardData] = useState([]);
  const [cardEndTime, setcardEndTime] = useState([]);



  const getResult = async () => {
    try {
      let acc = await loadWeb3();
      const webSupply = new Web3(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      );
      const web3 = window.web3;
      let loteryContractOf = new webSupply.eth.Contract(
        loteryContractAbi,
        loteryContractAddress
      );

      let array2 = [];

      for (let i = 1; i < 17; i++) {
        let result = await loteryContractOf.methods.showWinners(i).call();
        let arr = [];
        for (let index = 0; index < result[0].length; index++) {
          const address = result[0][index];
          const amount = result[1][index];
          let obj = {
            address: address,
            amount: amount,
          };
          arr.push(obj);
        }
        array2 = [...array2, arr];
      }

      setCardData([...array2]);
    } catch (error) {
      console.log("Error While Get Lottery Result", error);
    }
  };

  const getTime=async()=>{
    try{
      let acc = await loadWeb3();
      const webSupply = new Web3(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      );
      const web3 = window.web3;
      let loteryContractOf = new webSupply.eth.Contract(
        loteryContractAbi,
        loteryContractAddress
      );
      let arr = [];
      for (let i = 1; i < 17; i++) {
        let cardInfo = await loteryContractOf.methods.fin(i).call();
        console.log("cardInfo", cardInfo);
  
        let obj = {
          receivedEntry: cardInfo.received_entry,
          winner: cardInfo.winners,
          time:cardInfo.time,
          cardTitle: cardInfo.name,
          totalEntry: cardInfo.total_entry,
          currenttime: cardInfo.currenttime,
        };
  
        // console.log("playerEntry", obj);
  
        arr.push(obj);
        setcardEndTime([...arr])
      }

     



    }catch(e){

    }
  }

  useEffect(() => {
    getResult();
    getTime()
  }, []);

  return (
    <div>
      {cardData.slice(0, isOpen).map((item, index) => {
       
      //  console.log("cardEndTime",cardEndTime[index].currenttime);
        return (
          <>
            <ul>
              <li>
                <div class="result-list" id="top">
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
                                <h4 class="textsiz1">
                                  {index == 0 ? (
                                    <>10</>
                                  ) : index == 1 ? (
                                    <>20</>
                                  ) : index == 2 ? (
                                    <>50</>
                                  ) : index == 3 ? (
                                    <>100</>
                                  ) : index == 4 ? (
                                    <>250</>
                                  ) : index == 5 ? (
                                    <>500</>
                                  ) : index == 6 ? (
                                    <>1000</>
                                  ) : index == 7 ? (
                                    <>2500</>
                                  ) : index == 8 ? (
                                    <>5000</>
                                  ) : index == 9 ? (
                                    <>10000</>
                                  ) : index == 10 ? (
                                    <>25000</>
                                  ) : index == 11 ? (
                                    "50000"
                                  ) : index == 12 ? (
                                    "100000"
                                  ) : index == 13 ? (
                                    "250000"
                                  ) : index == 14 ? (
                                    "500000"
                                  ) : (
                                    "1000000"
                                  )}
                                  X
                                </h4>
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

                                          <th scope="col">Recieving Address</th>
                                          <th scope="col">Amount</th>
                                        </tr>
                                      </thead>

                                      <tbody class="#tbbody">
                                        {item
                                          .slice(0, itemToBeShow)
                                          .map((items, ind) => {
                                            return (
                                              <>
                                                <tr key={ind}>
                                                  <th scope="row">{ind}</th>
                                                  <td>{items?.address}</td>
                                                  <td>{items?.amount}</td>
                                                </tr>
                                              </>
                                            );
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
                                  {item.map((item, index) => (
                                   return(
                                    <>
                                    <tr key={ind}>
                                   <th scope="row">{ind}</th>
                                   <td>{items?.address}</td>
                                    <td>{items?.amount}</td>
                                   </tr>
                                   </>
                                   )
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
                          onClick={() =>
                            setitemToBeShow(
                              itemToBeShow == cardData[index].length
                                ? "2"
                                : cardData[index].length
                            )
                          }
                        >
                          show more
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </>
        );
      })}

      <div
        className="text-center"
        onClick={() =>
          setIsOpen(isOpen == cardData.length ? 4 : cardData.length)
        }
      >
        <a className="view-all" href="#top">
          View All Result
        </a>
      </div>
    </div>
  );
}

export default Result_card;
