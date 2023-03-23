import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import winner from "../../Assets/images/winner.png";
import time from "../../Assets/images/time.png";
import d1 from "../../Assets/images/d1.png";
import {
  loteryTokenAbi,
  loteryTokenAddress,
  loteryContractAbi,
  loteryContractAddress,
} from "../../utilies/Bsc_contract";
import Web3 from "web3";
import { loadWeb3 } from "../../apis/api";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import Timer from "../Timer/Timer";
import axios from "axios";
import moment from "moment";

const Landing_slider = ({ setloading_spin }) => {
  const [cardData, setCardData] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [card_Postion, setcard_Postion] = useState("All");
  const [count, setcount] = useState(0);
  const [value, setvalue] = useState(1);

  const increment = async () => {
    setvalue(value + 1);
  };

  const decrement = async () => {
    setvalue(value - 1);
  };

  const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
  const getInitialValue = async () => {
    let acc = await loadWeb3();

    const web3 = window.web3;
    let loteryContractOf = new webSupply.eth.Contract(
      loteryContractAbi,
      loteryContractAddress
    );
    let loteryTokenof = new webSupply.eth.Contract(
      loteryTokenAbi,
      loteryTokenAddress
    );

    let showWinners = await loteryContractOf.methods.showWinners(1).call();
    // console.log("showWinners", showWinners);

    let arr = [];
    for (let i = 1; i < 17; i++) {
      let cardInfo = await loteryContractOf.methods.fin(i).call();
      // console.log("cardInfo", cardInfo.lottery_count);

      let playerEntry = await loteryContractOf.methods
        .playerentry(i, acc)
        .call();

      let obj = {
        receivedEntry: cardInfo.received_entry,
        winner: cardInfo.winners,
        noOfBuyTickets: playerEntry,
        cardTitle: cardInfo.name,
        totalEntry: cardInfo.total_entry,
        currenttime: cardInfo.currenttime,
        time: cardInfo.time,
        lottery_count: cardInfo.lottery_count,
        multiple_entry: cardInfo.multiple_entry,
      };

      // console.log("playerEntry", obj);

      arr.push(obj);
    }

    setCardData([...arr]);
  };

  useEffect(() => {
    getInitialValue();
    // pricePrToken = window.web3.utils.fromWei(pricePrToken, "ether")
  });

  const buyTickets = async (index) => {
    console.log("card_Postion", moment(new Date()).format("YYYY-MM-DD"));

    try {
      let card_Number = "";
      if (index == 1) {
        card_Number = "10x";
      } else if (index == 2) {
        card_Number = "20x";
      } else if (index == 3) {
        card_Number = "50x";
      } else if (index == 4) {
        card_Number = "100x";
      } else if (index == 5) {
        card_Number = "250x";
      } else if (index == 6) {
        card_Number = "500x";
      } else if (index == 7) {
        card_Number = "1000x";
      } else if (index == 8) {
        card_Number = "2500x";
      } else if (index == 9) {
        card_Number = "5000x";
      } else if (index == 10) {
        card_Number = "10000x";
      } else if (index == 11) {
        card_Number = "25000x";
      } else if (index == 12) {
        card_Number = "50000x";
      } else if (index == 13) {
        card_Number = "100000x";
      } else if (index == 14) {
        card_Number = "250000x";
      } else if (index == 15) {
        card_Number = "500000x";
      } else if (index == 16) {
        card_Number = "1000000x";
      }

      setloading_spin(true);
      let acc = await loadWeb3();

      const web3 = window.web3;
      let loteryContractOf = new web3.eth.Contract(
        loteryContractAbi,
        loteryContractAddress
      );
      let loteryTokenof = new web3.eth.Contract(
        loteryTokenAbi,
        loteryTokenAddress
      );

      let amount = value * 1;
      amount = web3.utils.toWei(amount.toString());
      console.log("amount", amount);

      let approve = await loteryTokenof.methods
        .approve(loteryContractAddress, amount.toString())
        .send({
          from: acc,
        });
      toast.success("Approve successful! 🎉");

      let buyToken = await loteryContractOf.methods
        .plans(index, value.toString())
        .send({
          from: acc,
        });
      let cardInfo = await loteryContractOf.methods.lottey_detail(index).call();

      for (let i = 1; i <= value; i++) {
        let res = await axios.post("https://winner.archiecoin.online/Lotter_invester", {
          userAddress: acc,
          time: moment(new Date()).format("YYYY-MM-DD"),
          card_Number: card_Number,
          position: value * 1,
          gameNumber: cardInfo.lottery_completed,
        });
        console.log("Lotter_invester", res);
      }

      toast.success("Transaction successful! 🎉");

      setloading_spin(false);
    } catch (error) {
      console.log("Error While Buy Ticket", error);
      setloading_spin(false);
      toast.error("Transaction failed");
    }
  };

  const Updatestate = async (id) => {
    setcount(1);
    setTimeout(() => {
      selectWinner(id);
    }, 10000);
  };

  const selectWinner = async (id) => {
    try {
      // if (count == 1) {
        let card_Number = "";
        if (id == 1) {
          card_Number = "10x";
        } else if (id == 2) {
          card_Number = "20x";
        } else if (id == 3) {
          card_Number = "50x";
        } else if (id == 4) {
          card_Number = "100x";
        } else if (id == 5) {
          card_Number = "250x";
        } else if (id == 6) {
          card_Number = "500x";
        } else if (id == 7) {
          card_Number = "1000x";
        } else if (id == 8) {
          card_Number = "2500x";
        } else if (id == 9) {
          card_Number = "5000x";
        } else if (id == 10) {
          card_Number = "10000x";
        } else if (id == 11) {
          card_Number = "25000x";
        } else if (id == 12) {
          card_Number = "50000x";
        } else if (id == 13) {
          card_Number = "100000x";
        } else if (id == 14) {
          card_Number = "250000x";
        } else if (id == 15) {
          card_Number = "500000x";
        } else if (id == 16) {
          card_Number = "1000000x";
        }
      console.log("Count", id);
      let res = await axios.post("https://winner.archiecoin.online/SelectWinner", {
        indexNo: id,
      });
      console.log("SelectWinner🎉", res);
      if (res.data.success == true) {
        const webSupply = new Web3(
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        );
        const web3 = window.web3;
        let loteryContractOf = new webSupply.eth.Contract(
          loteryContractAbi,
          loteryContractAddress
        );
        let cardInfo = await loteryContractOf.methods.lottey_detail(id).call();
        let showWinners = await loteryContractOf.methods.showWinners(id).call();
        console.log("card_Postion", cardInfo.lottery_completed);
        for (let i = 0; i < showWinners[0].length; i++) {
          let res = await axios.post(
            "https://winner.archiecoin.online/Winner_List",
            {
              userAddress: showWinners[0][i],
              time: moment(new Date()).format("YYYY-MM-DD"),
              card_Number: card_Number,
              position: value * 1,
              reward: showWinners[1][i],
              gameNumber: cardInfo.lottery_completed,
            }
          );
          console.log("showWinners", res);
        }
      }
      // setcount(0);
      // }
    } catch (e) {
      console.log("Call Api", e);
    }
  };

  return (
    <div>
      <Swiper
        navigation={true}
        // autoplay={{
        //   delay: 2000
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper swipper_paddding"
      >
        {cardData.map((item, index, array) => {
          return (
            <SwiperSlide className="single-draw">
              <div className="item">
                <div>
                  <p>
                    <b>
                      {index == 0 ? (
                        <> 10x</>
                      ) : index == 1 ? (
                        <> 20x</>
                      ) : index == 2 ? (
                        <> 50x</>
                      ) : index == 3 ? (
                        <> 100x</>
                      ) : index == 4 ? (
                        <> 250x</>
                      ) : index == 5 ? (
                        <> 500x</>
                      ) : index == 6 ? (
                        <> 1000x</>
                      ) : index == 7 ? (
                        <> 2500x</>
                      ) : index == 8 ? (
                        <> 5000x</>
                      ) : index == 9 ? (
                        <> 10000x</>
                      ) : index == 10 ? (
                        <> 25000x</>
                      ) : index == 11 ? (
                        <>50000x</>
                      ) : index == 12 ? (
                        <>100000x</>
                      ) : index == 13 ? (
                        <>250000x</>
                      ) : index == 14 ? (
                        <>500000x</>
                      ) : (
                        <>1000000x</>
                      )}
                    </b>
                  </p>
                  {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                  <div className="icon">
                    <img src={d1} alt="" />
                  </div>
                  <h4>
                    Total Entries:
                    <br /> <span>{item?.receivedEntry}</span> /{" "}
                    <b>
                      {index == 0 ? (
                        <>1000</>
                      ) : index == 1 ? (
                        <>1000</>
                      ) : index == 2 ? (
                        <>1000</>
                      ) : index == 3 ? (
                        <>2000</>
                      ) : index == 4 ? (
                        <>5000</>
                      ) : index == 5 ? (
                        <>5000</>
                      ) : index == 6 ? (
                        <>8000</>
                      ) : index == 7 ? (
                        <>10000</>
                      ) : index == 8 ? (
                        <>20000</>
                      ) : index == 9 ? (
                        <>40000</>
                      ) : index == 10 ? (
                        "100000"
                      ) : index == 11 ? (
                        "200000"
                      ) : index == 12 ? (
                        "300000"
                      ) : index == 13 ? (
                        "600000"
                      ) : index == 14 ? (
                        "1100000"
                      ) : (
                        "1500000"
                      )}
                    </b>
                  </h4>

                  <div class="winnerimg">
                    <h4>
                      <img src={winner} class="mx-auto" alt="" />{" "}
                      <span class="span1">Winner : {item?.winner}</span>{" "}
                    </h4>
                  </div>
                  <div className="d-flex">
                    {/* <button className="" onClick={()=>increment()}>-</button> */}
                    <input
                      type="number"
                      placeholder="Enter Lottery Count"
                      className="input_cont"
                      onChange={(e) => setvalue(e.target.value)}
                    />
                    {/* <button onClick={()=>decrement()}>+</button> */}
                  </div>

                  {item.noOfBuyTickets == undefined ? (
                    <>
                      <a class="custom-button1">Waiting...</a>
                    </>
                  ) : (
                    <>
                      <a
                        class="custom-button1"
                        onClick={() => {
                          Number(item.noOfBuyTickets) + Number(value) >
                          Number(item.multiple_entry)
                            ? toast.error("Multiple Entries limit exceeded")
                            : buyTickets(index + 1);
                        }}
                      >
                        Buy Ticket : {item.noOfBuyTickets}/
                        <>
                          {index == 0 ? (
                            <>10</>
                          ) : index == 1 ? (
                            <>10</>
                          ) : index == 2 ? (
                            <>10</>
                          ) : index == 3 ? (
                            <>20</>
                          ) : index == 4 ? (
                            <>50</>
                          ) : index == 5 ? (
                            <>50</>
                          ) : index == 6 ? (
                            <>80</>
                          ) : index == 7 ? (
                            <>100</>
                          ) : index == 8 ? (
                            <>200</>
                          ) : index == 9 ? (
                            <>400</>
                          ) : index == 10 ? (
                            "1000"
                          ) : index == 11 ? (
                            "2000"
                          ) : index == 12 ? (
                            "3000"
                          ) : index == 13 ? (
                            "6000"
                          ) : index == 14 ? (
                            "11000"
                          ) : (
                            "15000"
                          )}
                        </>
                      </a>
                    </>
                  )}

                  {/* <button
                    className="custom_button_Owner"
                    onClick={() => {
                      selectWinner(index + 1);
                    }}
                  >
                    Select Winner
                  </button> */}

                  <div className="next-draw">
                    <span className="text">Next Draw :</span>
                    <div className="time">
                      <img src={time} alt="" />
                      {count !== 0 ? (
                        <></>
                      ) : item.time != 0 &&
                        item.time != undefined &&
                        item.time <
                          Math.floor(new Date().getTime() / 1000.0) ? (
                        Updatestate(index + 1)
                      ) : (
                        <></>
                      )}

                      {item?.time !== undefined ? (
                        <Timer
                          time={item?.time == 1 ? "1676718650" : item?.time}
                          setcount={setcount}
                        />
                      ) : (
                        <>
                          <h6>0 Days 00:00:00</h6>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Landing_slider;

// how to view PDf file in react js
