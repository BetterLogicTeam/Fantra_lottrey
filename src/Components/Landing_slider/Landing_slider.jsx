import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import winner from "../../Assets/images/winner.png";
import time from "../../Assets/images/time.png";
import d1 from "../../Assets/images/d1.png";


const Landing_slider = () => {
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
                <SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1">Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button1">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1"> Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button2">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1">Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button1">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1"> Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button2">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide><SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1">Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button1">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1"> Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button2">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1">Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button1">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="single-draw">
                  <div className="item">
                    <div>
                      {/* <img className="overlay" src={overlaymask1} alt=""/> */}
                      <div className="icon">
                        <img src={d1} alt="" />
                      </div>
                      <h4>
                                    Total Entries:<br/> <span>0</span> /1,000

                                </h4>

                                <div class="winnerimg">
                                    <h4><img src={winner} class="mx-auto" alt=""/> <span
                                            class="span1"> Winner : 50</span> </h4>
                                </div>
                                <a href="#" class="custom-button2">Buy Ticket : 0/10</a>
                      <div className="next-draw">
                        <span className="text">Next Draw :</span>
                        <div className="time">
                          <img src={time} alt="" />
                          <h6
                          >00 Days 00:00:00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
    </div>
  )
}

export default Landing_slider
