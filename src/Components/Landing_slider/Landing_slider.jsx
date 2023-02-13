import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
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

const Landing_slider = () => {
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
    for (let i = 1; i < 11; i++) {
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
    console.log("loteryTokenof", loteryTokenof);
    let approve = await loteryTokenof.methods.approve(acc, 1000000).send({
      from: acc,
    });
    let buyToken = await loteryContractOf.methods.plans(id, 10).send({
      from: acc,
    });
  };
  return (
    <div>
      <Swiper
        navigation={true}
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
        modules={[Navigation]}
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
                      ) : (
                        <>10000x</>
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
                      ) : (
                        <>40000</>
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
                    Buy Ticket : {item.noOfBuyTickets}/{" "}
                    <b>
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
                      ) : (
                        <>400</>
                      )}
                    </b>
                  </a>
                  <div className="next-draw">
                    <span className="text">Next Draw :</span>
                    <div className="time">
                      <img src={time} alt="" />
                      <h6>00 Days 00:00:00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide className="single-draw">
          <div className="item">
            <div>
              <div className="icon">
                <img src={d1} alt="" />
              </div>
              <h4>
                Total Entries:
                <br /> <span>0</span> /1,000
              </h4>

              <div class="winnerimg">
                <h4>
                  <img src={winner} class="mx-auto" alt="" />{" "}
                  <span class="span1"> Winner : 50</span>{" "}
                </h4>
              </div>
              <a href="#" class="custom-button2">
                Buy Ticket : 0/10
              </a>
              <div className="next-draw">
                <span className="text">Next Draw :</span>
                <div className="time">
                  <img src={time} alt="" />
                  <h6>00 Days 00:00:00</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="single-draw">
          <div className="item">
            <div>
              <div className="icon">
                <img src={d1} alt="" />
              </div>
              <h4>
                Total Entries:
                <br /> <span>0</span> /1,000
              </h4>

              <div class="winnerimg">
                <h4>
                  <img src={winner} class="mx-auto" alt="" />{" "}
                  <span class="span1">Winner : 50</span>{" "}
                </h4>
              </div>
              <a href="#" class="custom-button1">
                Buy Ticket : 0/10
              </a>
              <div className="next-draw">
                <span className="text">Next Draw :</span>
                <div className="time">
                  <img src={time} alt="" />
                  <h6>00 Days 00:00:00</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="single-draw">
          <div className="item">
            <div>
              <div className="icon">
                <img src={d1} alt="" />
              </div>
              <h4>
                Total Entries:
                <br /> <span>0</span> /1,000
              </h4>

              <div class="winnerimg">
                <h4>
                  <img src={winner} class="mx-auto" alt="" />{" "}
                  <span class="span1"> Winner : 50</span>{" "}
                </h4>
              </div>
              <a href="#" class="custom-button2">
                Buy Ticket : 0/10
              </a>
              <div className="next-draw">
                <span className="text">Next Draw :</span>
                <div className="time">
                  <img src={time} alt="" />
                  <h6>00 Days 00:00:00</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-draw">
          <div className="item">
            <div>
              <div className="icon">
                <img src={d1} alt="" />
              </div>
              <h4>
                Total Entries:
                <br /> <span>0</span> /1,000
              </h4>

              <div class="winnerimg">
                <h4>
                  <img src={winner} class="mx-auto" alt="" />{" "}
                  <span class="span1">Winner : 50</span>{" "}
                </h4>
              </div>
              <a href="#" class="custom-button1">
                Buy Ticket : 0/10
              </a>
              <div className="next-draw">
                <span className="text">Next Draw :</span>
                <div className="time">
                  <img src={time} alt="" />
                  <h6>00 Days 00:00:00</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="single-draw">
          <div className="item">
            <div>
              <div className="icon">
                <img src={d1} alt="" />
              </div>
              <h4>
                Total Entries:
                <br /> <span>0</span> /1,000
              </h4>

              <div class="winnerimg">
                <h4>
                  <img src={winner} class="mx-auto" alt="" />{" "}
                  <span class="span1"> Winner : 50</span>{" "}
                </h4>
              </div>
              <a href="#" class="custom-button2">
                Buy Ticket : 0/10
              </a>
              <div className="next-draw">
                <span className="text">Next Draw :</span>
                <div className="time">
                  <img src={time} alt="" />
                  <h6>00 Days 00:00:00</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="single-draw">
          <div className="item">
            <div>
              <div className="icon">
                <img src={d1} alt="" />
              </div>
              <h4>
                Total Entries:
                <br /> <span>0</span> /1,000
              </h4>

              <div class="winnerimg">
                <h4>
                  <img src={winner} class="mx-auto" alt="" />{" "}
                  <span class="span1">Winner : 50</span>{" "}
                </h4>
              </div>
              <a href="#" class="custom-button1">
                Buy Ticket : 0/10
              </a>
              <div className="next-draw">
                <span className="text">Next Draw :</span>
                <div className="time">
                  <img src={time} alt="" />
                  <h6>00 Days 00:00:00</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="single-draw">
          <div className="item">
            <div>
              <div className="icon">
                <img src={d1} alt="" />
              </div>
              <h4>
                Total Entries:
                <br /> <span>0</span> /1,000
              </h4>

              <div class="winnerimg">
                <h4>
                  <img src={winner} class="mx-auto" alt="" />{" "}
                  <span class="span1"> Winner : 50</span>{" "}
                </h4>
              </div>
              <a href="#" class="custom-button2">
                Buy Ticket : 0/10
              </a>
              <div className="next-draw">
                <span className="text">Next Draw :</span>
                <div className="time">
                  <img src={time} alt="" />
                  <h6>00 Days 00:00:00</h6>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Landing_slider;
