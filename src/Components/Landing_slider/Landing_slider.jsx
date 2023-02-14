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

  const getInitialValue = async () => {
    let acc = await loadWeb3();

    const webSupply = new Web3(
      "https://data-seed-prebsc-1-s1.binance.org:8545"
    );
    const web3 = window.web3;
    let loteryContractOf = new webSupply.eth.Contract(
      loteryContractAbi,
      loteryContractAddress
    );
    let loteryTokenof = new webSupply.eth.Contract(
      loteryTokenAbi,
      loteryTokenAddress
    );

    let arr = [];
    for (let i = 1; i < 17; i++) {
      let cardInfo = await loteryContractOf.methods.fin(i).call();
      console.log("cardInfo", cardInfo);

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
      };

      // console.log("playerEntry", obj);

      arr.push(obj);
    }
    console.log("arr", arr);

    setCardData([...arr]);
  };

  useEffect(() => {
    getInitialValue();
    // pricePrToken = window.web3.utils.fromWei(pricePrToken, "ether")
  }, []);

  const buyTickets = async (id) => {
    try {
      setloading_spin(true)
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
   
      let approve = await loteryTokenof.methods.approve(loteryContractAddress, 1000000).send({
        from: acc,
      });
      toast.success("Approve successful! 🎉")

      let buyToken = await loteryContractOf.methods.plans(id, 10).send({
        from: acc,
      });
      toast.success("Transaction successful! 🎉")
      setloading_spin(false)

    } catch (error) {
      console.log("Error While Buy Ticket", error);
      setloading_spin(false)
      toast.error("Transaction failed")

    }
  };

  const selectWinner = async (id) => {
    try {
      setloading_spin(true)
      let acc = await loadWeb3();
      const web3 = window.web3;
      let loteryContractOf = new web3.eth.Contract(
        loteryContractAbi,
        loteryContractAddress
      );
      const Owner = await loteryContractOf.methods.owner().call();
      if (Owner == acc) {
        await loteryContractOf.methods.selectWinner(id).send({
          from: acc,
        });

        toast.success("Transaction successful! 🎉");
      } else {
        toast.error("Only Owner Call This Function");
      setloading_spin(false)

      }
    } catch (e) {
      console.log(e);
      toast.success("Transaction failed")
      setloading_spin(false)


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
                        <>10x</>
                      ) : index == 1 ? (
                        <>20x</>
                      ) : index == 2 ? (
                        <>50x</>
                      ) : index == 3 ? (
                        <>100x</>
                      ) : index == 4 ? (
                        <>250x</>
                      ) : index == 5 ? (
                        <>500x</>
                      ) : index == 6 ? (
                        <>1000x</>
                      ) : index == 7 ? (
                        <>2500x</>
                      ) : index == 8 ? (
                        <>5000x</>
                      ) : index == 9 ? (
                        <>10000x</>
                      ) : index == 10 ? (
                        <>25000x</>
                      ) : index == 11 ? (
                        "50000x"
                      ) : index == 12 ? (
                        "100000x"
                      ) : index == 13 ? (
                        "250000x"
                      ) : index == 14 ? (
                        "500000x"
                      ) : (
                        "1000000x"
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
                  <a
                    class="custom-button1"
                    onClick={() => {
                      buyTickets(index + 1);
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

                  <button
                    className="custom_button_Owner"
                    onClick={() => {
                      selectWinner(index + 1);
                    }}
                  >
                    Select Winner
                  </button>

                  <div className="next-draw">
                    <span className="text">Next Draw :</span>
                    <div className="time">
                      <img src={time} alt="" />
                      {index == 0 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(604800)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 1 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(604800)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 2 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(604800)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 3 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(604800 * 2)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 4 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(604800 * 3)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 5 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(604800 * 3)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 6 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(86400 * 30)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 7 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(86400 * 35)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 8 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(86400 * 50)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 9 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(86400 * 60)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 10 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={Number(item.currenttime) + Number(86400 * 90)}
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 11 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={
                              Number(item.currenttime) + Number(86400 * 180)
                            }
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 12 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={
                              Number(item.currenttime) + Number(86400 * 270)
                            }
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 13 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={
                              Number(item.currenttime) + Number(86400 * 300)
                            }
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : index == 14 ? (
                        Number(item.noOfBuyTickets) > 0 ? (
                          <Timer
                            time={
                              Number(item.currenttime) + Number(86400 * 360)
                            }
                          />
                        ) : (
                          <>
                            <h6>0 Days 00:00:00</h6>
                          </>
                        )
                      ) : Number(item.noOfBuyTickets) > 0 ? (
                        <Timer
                          time={Number(item.currenttime) + Number(86400 * 365)}
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
