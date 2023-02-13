import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import lucky from "../../Assets/images/lucky.png";
import cart from "../../Assets/images/cart.png";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Connect_wallet_modal from "../Connect_wallet_modal/Connect_wallet_modal";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [active, setactive] = useState(0);

  return (
    <div>
      <header className="top-header">
        <div className="header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-top-area-inner">
                  <a href="" className="logo">
                    <img src={lucky} alt="" />
                  </a>
                  <Connect_wallet_modal />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-section">
          <div className="container">
            <div className="header-wrapper">
              <ul className="menu">
                <Link className="leenk" to="/">
                  <li>
                    <a href="" className="">
                      Home
                    </a>
                  </li>
                </Link>
                <Link className="leenk" to="/Results">
                  <li>
                    <a href="">Results</a>
                  </li>
                </Link>
                <Link className="leenk" to="/About">
                  <li>
                    <a href="">About</a>
                  </li>
                </Link>
                <Link className="leenk" to="/Faq">
                  <li>
                    <a href="">Faq</a>
                  </li>
                </Link>
              </ul>
              <div className="right-tools"></div>
              <div className="header-bar d-lg-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
