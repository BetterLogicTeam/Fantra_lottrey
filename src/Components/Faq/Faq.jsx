import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Faq_accord from "../Faq_accord/Faq_accord";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Faq.css";

function Faq() {
  return (
    <div>
      <section class="breadcrumb-area">
        <div class="container">
          <div class="content">
            <h2 class="title">FAQ</h2>
            <ul class="breadcrumb-list extra-padding">
              <li>
                <Link to="/">
                  <a href="">Home</a>
                </Link>
              </li>

              <i class="fa fa-long-arrow-right lotterlo1">
                <HiArrowNarrowRight />
              </i>

              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="faq">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="faq-box">
                <div class="section-header">
                  <h2 class="title ep">Asked Questions</h2>
                  <p class="text">
                    Do not hesitate to send us an email if you can't find what
                    you're looking for.
                  </p>
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="faq-menu">
                      <ul>
                        <li>
                          <a href="#aboutfaq" class="active">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            About Fantra
                          </a>
                        </li>
                        <li>
                          <a href="#bankingfaq">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            Banking
                          </a>
                        </li>
                        <li>
                          <a href="#winingfaq">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            Wining
                          </a>
                        </li>
                        <li>
                          <a href="#securityfaq">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            Security
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <h4 class="title mb-5">About Fantra</h4>
                    <Faq_accord />

                    <div style={{ marginTop: "60px" }}>
                      <h4 class="title mb-5">Banking</h4>
                      <Faq_accord />
                    </div>

                    <div style={{ marginTop: "60px" }}>
                      <h4 class="title mb-5">Winning</h4>
                      <Faq_accord />
                    </div>

                    <div style={{ marginTop: "60px" }}>
                      <h4 class="title mb-5">Security</h4>
                      <Faq_accord />
                    </div>
                    {/* <div class="faq-collaps-box">
                                    <h4 class="title">About Fantra</h4>
                                    <div class="accordion" id="aboutfaq">
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left" data-toggle="collapse" data-target="#one"
                                                        aria-expanded="true" aria-controls="one">
                                                        What is Fantra.com ?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="one" class="collapse show" data-parent="#aboutfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#two" aria-expanded="false" aria-controls="two">
                                                        How do I create an account?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="two" class="collapse" data-parent="#aboutfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#three" aria-expanded="false"
                                                        aria-controls="three">
                                                        Can I play any lottery on the site?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="three" class="collapse" data-parent="#aboutfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-collaps-box">
                                    <h4 class="title">Banking</h4>
                                    <div class="accordion" id="bankingfaq">
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left" data-toggle="collapse" data-target="#four"
                                                        aria-expanded="true" aria-controls="four">
                                                        What is Fantra.com ?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="four" class="collapse show" data-parent="#bankingfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#five" aria-expanded="false" aria-controls="five">
                                                        How do I create an account?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="five" class="collapse" data-parent="#bankingfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#six" aria-expanded="false" aria-controls="six">
                                                        Can I play any lottery on the site?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="six" class="collapse" data-parent="#bankingfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-collaps-box">
                                    <h4 class="title">Winning</h4>
                                    <div class="accordion" id="winingfaq">
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left" data-toggle="collapse"
                                                        data-target="#seven" aria-expanded="true" aria-controls="seven">
                                                        What is Fantra.com ?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="seven" class="collapse show" data-parent="#winingfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#eight" aria-expanded="false"
                                                        aria-controls="eight">
                                                        How do I create an account?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="eight" class="collapse" data-parent="#winingfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#nine" aria-expanded="false" aria-controls="nine">
                                                        Can I play any lottery on the site?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="nine" class="collapse" data-parent="#winingfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-collaps-box">
                                    <h4 class="title">Security</h4>
                                    <div class="accordion" id="securityfaq">
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left" data-toggle="collapse" data-target="#ten"
                                                        aria-expanded="true" aria-controls="ten">
                                                        What is Fantra.com ?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="ten" class="collapse show" data-parent="#securityfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#eleven" aria-expanded="false"
                                                        aria-controls="eleven">
                                                        How do I create an account?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="eleven" class="collapse" data-parent="#securityfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mycard">
                                            <div class="mycard-header">
                                                <h2 class="mb-0">
                                                    <button class="text-left collapsed" data-toggle="collapse"
                                                        data-target="#twelve" aria-expanded="false"
                                                        aria-controls="twelve">
                                                        Can I play any lottery on the site?
                                                        <i class="fa fa-angle-right firstfaq"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="twelve" class="collapse" data-parent="#securityfaq">
                                                <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
